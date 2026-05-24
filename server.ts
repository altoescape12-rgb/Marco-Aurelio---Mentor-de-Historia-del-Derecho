import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialization helper for GoogleGenAI to prevent crashing at module load
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// -------------------------------------------------------------------------
// PROMPTS AND IDENTITY CONTEXT (ÁLVARO IRIARTE COGNITIVE CORE)
// -------------------------------------------------------------------------

const MARCO_AURELIO_SYSTEM_INSTRUCTION = `
Eres MARCO AURELIO, mentor académico experto en Historia del Derecho y Pensamiento Constitucional en la Universidad San Sebastián (USS), inspirado en el riguroso enfoque doctrinal del destacado profesor Álvaro Iriarte. Tu misión principal es desarrollar la comprensión lectora jurídica, el razonamiento crítico y la independencia intelectual de tus alumnos, no solo transferir contenidos.

Tu carácter y adn del avatar combina:
- Carisma intelectual, amabilidad pedagógica, paciencia formativa, exigencia respetuosa y claridad conceptual.
- El lema principal de tu cátedra es: "Comprender antes que memorizar."
- Tu lema complementario en latín es: "Intellige Historiam, Comprehende Ius" (Comprende la historia, comprende el Derecho).
- Tienes entre 45 y 55 años, con un tono refinado y asertivo pero accesible, culto, que valora el rigor humanista y las fuentes primarias.
- Nunca infantilizas a tus alumnos ni entregas respuestas puramente descriptivas o simplistas; buscas elevar su pensamiento de un nivel descriptivo e histórico simple a uno dogmático, analítico y doctrinal.

Estás estructurado para guiar al estudiante bajo estas directrices:

1. MÉTODO SÓCRATICO: Acompaña tus explicaciones con preguntas que inviten a deducir el trasfondo constitucional o la conexión sistémica (ej: si el Rey está prisionero en Bayona en 1808, ¿dónde recae la soberanía y por qué el pactismo castellano fundamenta legalmente autonomías y juntas locales?).
2. MÉTODO IRIS para comprensión terminológica e institucional:
   - Identificar: Definición técnica precisa.
   - Relacionar: Conexión con otros conceptos históricos/institucionales (como relacionar el Cabildo con la teoría pactista).
   - Interpretar: Análisis doctrinal de su sentido (cuál es la ratio legis o intencionalidad).
   - Sintetizar: Reducción comprensiva medular para estudio rápido.
3. CONTEXTO DOCTRINAL USS: Te basas firmemente en el derecho indiano, el pactismo hispano-medieval (Teorías de Francisco Suárez, Santo Tomás de Aquino y las Leyes de Partida), el paso a la codificación moderna, el proceso emancipador de 1810 con sus hitos, el orden portaliano e institucional de la Constitución de 1833, y la transición republicano-constitucional liberal del siglo XIX y Constitución de 1925.
`;

// Helper to sanitize model outputs
function cleanMarkdownJson(text: string): string {
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  }
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

// -------------------------------------------------------------------------
// API ROUTES
// -------------------------------------------------------------------------

// Health Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Mode 1: Aula Magna & Doctrinal (query explanations)
app.post("/api/mentor/query", async (req, res) => {
  try {
    const { mode, topic, level, customPrompt, mentorName = "Marco Aurelio" } = req.body;
    const ai = getGeminiClient();

    let userPrompt = "";
    let systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, mentorName.toUpperCase()).replace(/Marco Aurelio/g, mentorName);

    if (mode === "aula-magna") {
      userPrompt = `Como ${mentorName}, explícame en detalle el siguiente tema de Historia del Derecho o Derecho Constitucional:
TEMA: "${topic}"
NIVEL DE EXPLICACIÓN DESEADO: ${level.toUpperCase()} (Simple, Intermedio, o Universitario).

Por favor, estructura tu respuesta detalladamente:
1. Una introducción pedagógica según el nivel indicado.
2. La explicación modular (si es Simple usa una analogía del día a día; si es Intermedio integra el contexto legal e histórico; si es Universitario incluye citas de doctrina de autores, conceptos jurídicos estrictos e historiografía USS).
3. Una pregunta socrática desafiante al final, específica de este nivel, para asegurarte de que comprendí la lógica conceptual antes de memorizarla.`;
    } else if (mode === "traduccion-doctrinal") {
      userPrompt = `Como ${mentorName}, realiza la explicación y "Traducción Doctrinal" USS del siguiente concepto jurídico de alta complejidad:
CONCEPTO/TÉRMINO: "${topic}"

Realiza lo siguiente:
1. EXPLICACIÓN COMPLEJA (Lenguaje formal/universitario propio de la cátedra USS).
2. TRADUCCIÓN DOCTRINAL (Traducción en lenguaje claro y accesible para un estudiante de primer año, desglosando la terminología técnica, metáforas adecuadas, etc.)
3. APLICACIÓN PRÁCTICA: Brinda un ejemplo o caso histórico concreto de Chile o el Derecho Indiano donde se aplique este concepto.`;
    } else if (mode === "metodo-iris") {
      userPrompt = `Como ${mentorName}, aplica tu riguroso método de comprensión "IRIS" para analizar el siguiente concepto o hito histórico/jurídico:
CONCEPTO: "${topic}"

Desarrolla exhaustivamente los 4 pilares:
📊 I - IDENTIFICAR: Define de manera estricta y rigurosa el concepto. ¿Qué es exactamente? ¿Cuál es su marco temporal o doctrinal?
🔗 R - RELACIONAR: Conéctalo con al menos otros dos conceptos o procesos históricos trascendentales (por ejemplo, el Cabildo Abierto con el Pactismo de Francisco Suárez y la prisión de Fernando VII).
💡 I - INTERPRETAR: Extrae el verdadero sentido, la intencionalidad política o jurídica y la ratio jurídica detrás de este concepto / hito. ¿Por qué ocurrió jurídicamente?
📝 S - SINTETIZAR: Una síntesis concisa, precisa y poderosa (en un párrafo concentrado de no más de 3 líneas) ideal para repasar antes del examen.`;
    } else if (mode === "sala-doctrinal") {
      userPrompt = `Como ${mentorName}, en nuestra Sala Doctrinal, analicemos académicamente el siguiente debate constitucional / historiográfico chileno:
TEMA DEL DEBATE: "${topic}"

Aborda este análisis dividiéndolo en:
1. CONFRONTACIÓN HISTORIOGRÁFICA / CORRIENTES: Presenta las dos visiones doctrinarias contrapuestas (por ejemplo, la interpretación conservadora versus liberal del orden portaliano, o el debate sobre si la junta de 1810 fue emancipatoria o transitoria, mencionando historiadores de prestigio como Diego Barros Arana, Julio Heise, Mario Góngora, Jaime Eyzaguirre u otros pertinentes).
2. ARGUMENTACIÓN Y FUENTES: Cuáles son los argumentos constitucionales o históricos clave de cada bando.
3. REFLEXIÓN SOCRÁTICA USS: Plantea una pregunta abierta de discernimiento ético-jurídico para invitarme a tomar una postura doctrinaria sólida y justificada tecnicamente.`;
    } else {
      userPrompt = customPrompt || `¿Qué me puedes enseñar hoy sobre Historia del Derecho USS?`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstructionOverride,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in /api/mentor/query:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Mode 2: Custom Text Block Reading (Comprensión Lectora Jurídica - Lectura Guiada)
app.post("/api/mentor/reading-analysis", async (req, res) => {
  try {
    const { textSnippet, mentorName = "Marco Aurelio" } = req.body;
    if (!textSnippet || textSnippet.trim().length === 0) {
      return res.status(400).json({ error: "Debes ingresar un fragmento de texto doctrinal para analizar." });
    }

    const ai = getGeminiClient();
    const systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, mentorName.toUpperCase()).replace(/Marco Aurelio/g, mentorName);

    const prompt = `Analiza el fragmento de apunte doctrinal o texto histórico que te presento a continuación. 

TEXTO A ANALIZAR:
"""
${textSnippet}
"" "

Como ${mentorName}, un excepcional y exigente mentor que quiere enseñar a leer críticamente el Derecho, responde estructurando tu análisis así:
1. 📖 IDEAS FUERZA: Desglosa las ideas fundamentales del texto. ¿Quién posee el poder/está regulando? ¿Qué cambios describe en el estatus constitucional?
2. 🔍 ANÁLISIS DE TERMINOLOGÍA: Identifica 2 o 3 términos jurídicos o históricos críticos en este párrafo y brinda su significado doctrinal directo.
3. 🧭 PREGUNTAS SOCRÁTICAS DE EVALUACIÓN (MÉTODO LECTURA): Plantea exactamente 3 preguntas de comprensión profunda exclusivas para este texto. Deben obligar al estudiante a reflexionar en lugar de memorizar (ej: ¿Cómo contradice o apoya este fragmento las interpretaciones de la doctrina X?).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstructionOverride,
        temperature: 0.6,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in /api/mentor/reading-analysis:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Mode 3: USS Oral Exam Simulation (Sala Oral USS)
app.post("/api/mentor/oral-exam", async (req, res) => {
  try {
    const {
      difficulty, // "basico", "solemne", "comision"
      currentQuestionIndex, // 0, 1, 2, 3, 4
      examHistory, // array of { question: string, answer: string, score: number, feedback: string, errorsDetected: string[] }
      studentAnswer, // the answer the student wrote to the current question (this could be undefined for the first question)
      selectedSubTopic, // optional specific topic user chose (e.g., "Pactismo", "Orden Portaliano 1833", "Constitución 1925")
      mentorName = "Marco Aurelio"
    } = req.body;

    const ai = getGeminiClient();
    const systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, mentorName.toUpperCase()).replace(/Marco Aurelio/g, mentorName);

    const progressMsg = `Pregunta ${currentQuestionIndex + 1} de 5 en modalidad ${difficulty.toUpperCase()}.`;

    // Prompt construction based on whether they are answering a question or starting a new exam
    let prompt = "";
    if (currentQuestionIndex === 0 && (!studentAnswer || studentAnswer.trim() === "")) {
      // First question generation
      prompt = `Iniciaremos una simulación de Examen Oral en la prestigiosa Sala Oral de la Universidad San Sebastián.
Dificultad: "${difficulty.toUpperCase()}" (Básico: con guías y amabilidad; Solemne: examen regular exigente y precisión doctrinal; Comisión Oral: alta presión académica, repreguntas punzantes y defensa de postura).
${selectedSubTopic ? `Especial foco académico en el tema: "${selectedSubTopic}"` : "Cubre temas variados de la cátedra de Historia del Derecho e Historia Constitucional USS."}

Como ${mentorName}, escribe una breve introducción protocolar dándome la bienvenida a la Comisión Oral, estableciendo el lema de tu cátedra, e instándome a pensar dogmáticamente. 
Luego, formula tu PRIMERA PREGUNTA oral de manera formal y solemne. La pregunta debe exigir razonamiento jurídico, por ejemplo relacionar pactismo, cabildo, lealtad a Fernando VII, o las reformas liberales con el fin del autoritarismo presidencial de 1833.

Tu respuesta DEBE estar estructurada como un objeto JSON con las siguientes propiedades exactas (para procesar en la interfaz):
{
  "welcomeMessage": "Tu saludo protocolar y contextualización académica",
  "question": "Escribe la primera pregunta solemne e inteligente"
}`;
    } else {
      // Evaluation component of previous answer + generator of next question (or final grade if index was the last query)
      const lastQuestionObj = examHistory[examHistory.length - 1] || { question: "Teoría del pactismo y Cabildos" };
      const isLastQuestion = currentQuestionIndex >= 5;

      prompt = `Estamos en una simulación de Examen Oral USS en modalidad "${difficulty.toUpperCase()}".
El estudiante acaba de responder a tu pregunta anterior.

PREGUNTA REALIZADA: "${lastQuestionObj.question}"
RESPUESTA DEL ESTUDIANTE: "${studentAnswer}"

Historial previo de preguntas evaluadas en este examen:
${JSON.stringify(examHistory)}

Como ${mentorName}, debes evaluar la respuesta del estudiante con tu exigencia característica pero con amabilidad formadora. 
Considera la rúbrica del examen:
1. ¿Demuestra comprensión conceptual profunda o es pura memorización narrativa?
2. ¿Usa doctrina histórica-jurídica (como pactismo castellano, retroversión de soberanía, leyes indianas, prerrogativas presidenciales, etc.)?
3. ¿Comete algunos de los 4 errores típicos?:
   - Confundir pactismo de Francisco Suárez con soberanía popular rousseauniana.
   - Mezclar causas de la Revolución Francesa con motivos jurídicos de la Junta de 1810.
   - Narrar hechos históricos sin doctrina jurídica.
   - Memorizar fechas sin encuadre constitucional.

Califica esta respuesta específica en la escala chilena (1.0 a 7.0, donde 4.0 es la nota de aprobación justa).
Básico tiende a calificar con más flexibilidad, Solemne exige rigor dogmático, y Comisión Oral es severa con imprecisiones.

Si esta era la última pregunta (el estudiante ha respondido 5 preguntas) o has decidido finalizar el examen:
- Calcula la nota final ponderada de todo el examen (escala 1.0 a 7.0).
- Brinda un dictamen de aprobación ("APROBADO" si la nota final es >= 4.0, o "REPROBADO" si es < 4.0).
- Detalla los puntos clave que debe reforzar.

Si NO es la última pregunta, evalúa y formula tu SIGUIENTE PREGUNTA. Si la respuesta contiene imprecisiones graves, haz una REPREGUNTA socrática sobre el mismo punto para permitirle corregirse antes de avanzar, o formula la siguiente pregunta del cedulario para medir otros ámbitos.

Tu respuesta DEBE ser devuelta en un formato JSON estricto, que represente las siguientes propiedades (para que el frontend pueda actualizar la barra, registrar el radar de errores, etc.):
{
  "assessment": {
    "score": 5.5, // Nota individual de la respuesta (número del 1.0 al 7.0)
    "feedback": "Tu análisis socrático detallado de la respuesta del alumno. Explica qué estuvo bien y qué confundió o le faltó doctrina.",
    "errorsDetected": ["ej: Confundir pactismo con soberanía popular", "ej: Argumentación puramente narrativa sin doctrina"], // Lista de errores del radar identificados en esta respuesta, o vacío [] si estuvo excelente
    "isTerminated": ${isLastQuestion ? "true" : "false"} // Booleano: verdadero si se termina el examen (5 preguntas respondidas totales)
  },
  "nextQuestion": ${isLastQuestion ? "null" : '"Escribe la siguiente pregunta solemne o repregunta estimulante"'},
  "finalAssessment": ${isLastQuestion ? `{
    "finalGrade": 5.2, // Promedio global ponderado final (1.0 al 7.0)
    "status": "APROBADO", // "APROBADO" o "REPROBADO"
    "closingSpeech": "Tu discurso final como mentor cerrando la comisión oral, felicitando u orientando al estudiante.",
    "strongPoints": ["Pactismo castellano", "Comprensión del cabildo de 1810"],
    "weakPoints": ["Mezcla doctrinaria de soberanía popular", "Falta de precisión en la Constitución de 1833"]
  }` : "null"}
}`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstructionOverride,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            welcomeMessage: { type: Type.STRING, description: "Greeting on the first turn" },
            question: { type: Type.STRING, description: "Question compiled" },
            assessment: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING },
                errorsDetected: { type: Type.ARRAY, items: { type: Type.STRING } },
                isTerminated: { type: Type.BOOLEAN }
              }
            },
            nextQuestion: { type: Type.STRING },
            finalAssessment: {
              type: Type.OBJECT,
              properties: {
                finalGrade: { type: Type.NUMBER },
                status: { type: Type.STRING },
                closingSpeech: { type: Type.STRING },
                strongPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
                weakPoints: { type: Type.ARRAY, items: { type: Type.STRING } }
              }
            }
          }
        },
        temperature: 0.6,
      },
    });

    const cleanedText = cleanMarkdownJson(response.text);
    res.json(JSON.parse(cleanedText));
  } catch (error: any) {
    console.error("Error in /api/mentor/oral-exam:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Mode 4: Written Mini Solemn Evaluator (Cámara de Solemnes)
app.post("/api/mentor/evaluate-written", async (req, res) => {
  try {
    const { question, studentAnswer, rubricConstraints = "", mentorName = "Marco Aurelio" } = req.body;
    if (!studentAnswer || studentAnswer.trim() === "") {
      return res.status(400).json({ error: "No se ha ingresado ninguna respuesta para evaluar." });
    }

    const ai = getGeminiClient();
    const systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, mentorName.toUpperCase()).replace(/Marco Aurelio/g, mentorName);

    const prompt = `Actúa como el corrector virtual del Solemne de Historia del Derecho de la USS, ${mentorName}.
Corrige con absoluta claridad y rigor académico la respuesta que brindó el alumno.

PREGUNTA RECTORA DEL SOLEMNE:
"${question}"

RESPUESTA DEL ESTUDIANTE:
"${studentAnswer}"

RESTRICCIONES ADICIONALES DE RÚBRICA USS (si hay): "${rubricConstraints}"

Analiza esta respuesta jurídica detalladamente. Tu respuesta final DEBE venir estructurada en JSON con las propiedades exactas abajo descritas para desplegar un balance analítico y calificaciones USS auténticos:
{
  "score": 4.5, // Nota en escala chilena 1.0 - 7.0 (donde 4.0 es la nota mínima de aprobación)
  "strengths": ["Cita correcta de las Leyes de Partida", "Diferenciación del vacío de legitimidad"],
  "weaknesses": ["Confunde pacto de sujeción medieval con el contrato social moderno", "Argumentación informal o imprecisa"],
  "doctrineFix": "Escribe una explicación magistral de cómo debió estructurarse doctrinariamente la respuesta, citando conceptos de Álvaro Iriarte.",
  "rewrittenModel": "Propón un fragmento modelo de respuesta perfecta que obtendría un 7.0 inmediato, redactado en impecable lenguaje forense.",
  "socrativeCorrection": "Una pregunta socrática final para verificar que asimiló el error conceptual detectado."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstructionOverride,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            doctrineFix: { type: Type.STRING },
            rewrittenModel: { type: Type.STRING },
            socrativeCorrection: { type: Type.STRING }
          }
        },
        temperature: 0.5,
      },
    });

    const cleanedText = cleanMarkdownJson(response.text);
    res.json(JSON.parse(cleanedText));
  } catch (error: any) {
    console.error("Error in /api/mentor/evaluate-written:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Mode 5: Error Radar Interactive Quizzes (Radar de Errores - Feedback)
app.post("/api/mentor/refinery", async (req, res) => {
  try {
    const { draftSnippet, errorType, mentorName = "Marco Aurelio" } = req.body;
    const ai = getGeminiClient();
    const systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, mentorName.toUpperCase()).replace(/Marco Aurelio/g, mentorName);

    const prompt = `Estamos en el "Radar de Errores: Refinería de Respuestas".
El alumno tiene un borrador de respuesta y quiere corregir un error común relacionado con: "${errorType}".

BORRADOR DEL ALUMNO:
"${draftSnippet}"

Como ${mentorName}, haz lo siguiente:
1. DETECCIÓN DEL ERROR: Diagnostica de forma asertiva pero alentadora qué elemento de la respuesta comete ese error típico u omisión dogmática.
2. CONCEPTUALIZACIÓN CORRECTA: Explica cuál es la verdad constitucional y doctrinal pura del concepto USS, distinguiendo las fuentes.
3. REESCRITURA REFINADA: Reescribe el borrador en un lenguaje de excelencia, listo para un solemne.

Devuelve tu respuesta estructurada como el siguiente JSON exacto para ser consumido por la refinería interactiva:
{
  "diagnostic": "Tu diagnóstico pedagógico",
  "doctrineExplanation": "Explicación teórica e histórica clara",
  "refinedText": "El fragmento perfectamente reescrito con elegancia"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstructionOverride,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnostic: { type: Type.STRING },
            doctrineExplanation: { type: Type.STRING },
            refinedText: { type: Type.STRING }
          }
        },
        temperature: 0.5,
      },
    });

    const cleanedText = cleanMarkdownJson(response.text);
    res.json(JSON.parse(cleanedText));
  } catch (error: any) {
    console.error("Error in /api/mentor/refinery:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Mode 6: Dynamic Solemn Questions Generation
app.get("/api/mentor/generate-solemn-questions", async (req, res) => {
  try {
    const { category, mentorName = "Marco Aurelio" } = req.query;
    const ai = getGeminiClient();
    const systemInstructionOverride = MARCO_AURELIO_SYSTEM_INSTRUCTION.replace(/MARCO AURELIO/g, (mentorName as string || "Marco Aurelio").toUpperCase()).replace(/Marco Aurelio/g, mentorName as string || "Marco Aurelio");

    const prompt = `Genera un cuestionario de 3 preguntas solemnes típicas y desafiantes para la evaluación de Historia del Derecho / Historia Constitucional chilena en la USS.
Categoría temática solicitada: "${category || "General / Todo el Ramo"}"

Cada pregunta debe venir con un título breve descriptivo, un enunciado complejo y una brevísima sugerencia del mentor sobre qué debe tener en cuenta al responder (ej: "No olvidar citar la soberanía orgánica").

Devuelve estrictamente en formato JSON:
{
  "category": "${category || "General / Todo el Ramo"}",
  "questions": [
    {
      "id": 1,
      "title": "Breve título de la pregunta",
      "text": "Enunciado de la pregunta del solemn...",
      "mentorTip": "Sugerencia del mentor enfocada en doctrina."
    },
    ...
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstructionOverride,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.NUMBER },
                  title: { type: Type.STRING },
                  text: { type: Type.STRING },
                  mentorTip: { type: Type.STRING }
                }
              }
            }
          }
        },
        temperature: 0.7,
      },
    });

    const cleanedText = cleanMarkdownJson(response.text);
    res.json(JSON.parse(cleanedText));
  } catch (error: any) {
    console.error("Error in /api/mentor/generate-solemn-questions:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});


// -------------------------------------------------------------------------
// VITE DEV SERVER / PRODUCTION STATIC SERVER MIDDLEWARE
// -------------------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on host 0.0.0.0 and port ${PORT}`);
});
