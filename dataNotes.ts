export interface QuestionData {
  id: number;
  question: string;
  topic: string;
  summaryTip: string;
}

export interface ChapterData {
  id: number;
  title: string;
  pages: string;
  summary: string;
  keyConcepts: string[];
  associatedQuestions: number[];
}

export const APUNTES_CHAPTERS: ChapterData[] = [
  {
    id: 1,
    title: "Constitución Histórica vs. Constitución Escrita",
    pages: "Págs. 2-5",
    summary: "Explora la tensión doctrinal planteada por filósofos como Russell Kirk, Edmund Burke y el catedrático Álvaro D'Ors. La constitución viva o histórica está compuesta de antiguas costumbres, convenciones y hábitos de pensamiento arraigados en la experiencia de los siglos ('it had not been made, but had grown'). En contraposición, el constitucionalismo moderno (surgido post Revolución Francesa y Americana) postula la constitución escrita como una creación racional-ideológica abstracta 'ex nihilo'. Para Hispanoamérica, este trasplante artificial de un modelo extranjero ignoró la constitución histórica de trescientos años bajo la Corona hispana, desencadenando una prolongada inestabilidad republicana.",
    keyConcepts: ["Constitución Histórica", "Constitución Escrita", "Abstraccionismo", "Trasplante Constitucional", "Russell Kirk", "Álvaro D'Ors"],
    associatedQuestions: [1, 2, 3, 4, 5, 6, 15]
  },
  {
    id: 2,
    title: "La Monarquía Hispánica, Centralización y las Leyes de Toro",
    pages: "Págs. 6-10",
    summary: "Analiza el paso de la península al Estado Moderno a través de la tarea de los Reyes Católicos (Isabel de Castilla y Fernando de Aragón), edificada sobre tres pilares: Unificación Territorial, Reivindicación de la Soberanía Real (subordinación de nobles y municipios a través del Corregidor) y Unificación Religiosa (Tribunal de la Inquisición en 1481 y expulsión de los judíos en 1492). Estudia la decadencia de las Cortes en favor de órganos consultivos técnicos (los Consejos, como el Consejo de Indias). Su labor legislativa cimentó el ordenamientos indiano, destacadamente con las Ordenanzas Reales de Castilla (1484) y las Leyes de Toro (1505), asimilando una rígida prelación de fuentes (Leyes de Toro, Ordenamiento de Alcalá, Fuero Real, y supletoriamente Las Siete Partidas).",
    keyConcepts: ["Soberanía Real", "Consejo de Indias", "Corregidor", "Pragmática Sanción", "Leyes de Toro", "Las Siete Partidas"],
    associatedQuestions: [7, 8, 17, 18]
  },
  {
    id: 3,
    title: "El Derecho Indiano y los Justos Títulos",
    pages: "Págs. 11-18",
    summary: "Define el Derecho Indiano como el sistema jurídico que rigió en América y Filipinas, categorizado en: Derecho Indígena (permitido en tanto no contradiguiera el Derecho Natural o la fe), Derecho Especial de Indias (metropolitano), y Derecho Castellano Supletorio (trasplantado). Sus características sobresalientes son el Casuismo (justicia caso a caso atendiendo a la finalidad y valores éticos antes que a la aplicación mecánica de la norma) y el Particularismo/Provincialismo. Adicionalmente, examina los títulos de dominio de la Corona sobre América, partiendo de la Donación Papal (Bulas Alejandrinas y la Bula 'Intercaetera' de 1493), confrontando las posiciones de juristas medievales como el Papa Inocencio IV (reconocía el dominio a los infieles por su potencia racional), Juan Maior y las teorías aristotélicas de la servidumbre natural frente al estatus de vasallos libres del monarca.",
    keyConcepts: ["Derecho Indiano", "Casuismo", "Particularismo", "Bulas Alejandrinas", "Justos Títulos", "Retroversión de Soberanía"],
    associatedQuestions: [1, 3, 5, 8]
  },
  {
    id: 4,
    title: "La Ilustración y 'Las Luces' Cristianas",
    pages: "Págs. 19-22",
    summary: "La Ilustración provoca un quiebre radical del origen y fin del poder político: la happiness o felicidad terrenal se convierte en el fin del Estado por vía del progreso material, progreso intelectual y la libertad (emancipación guiada por la razón útil). Revisa la paradoja del Despotismo Ilustrado ('todo para el pueblo, pero sin el pueblo'), la teoría del Dogma de la Voluntad Soberana concebido por Rousseau de forma infalible e ilimitada, y la preeminencia del Legislativo sobre el resto de poderes (Montesquieu). Compara la Revolución Americana de 1776 (fundacional, defensora del federalismo y las libertades del individuo como límite al poder) con la Revolución Francesa de 1789 (utópica, centralista, consagrada a la Razón de Estado y supremacía parlamentaria ilimitada).",
    keyConcepts: ["La Razón Útil", "Despotismo Ilustrado", "Voluntad Soberana", "Rousseau", "Montesquieu", "Revolución Francesa", "Revolución Americana"],
    associatedQuestions: [1, 2, 4, 7, 10, 16, 17]
  },
  {
    id: 5,
    title: "La Crisis de 1808-1810 y el Pactismo de los Cabildos",
    pages: "Págs. 23-29",
    summary: "Se cuestiona la tesis histórica liberal de que el proceso independentista de 1810 fuera una revolución puramente ilustrada o copia francesa. Destaca el papel del Pactismo de origen medieval (especialmente de la neoescolástica de Francisco Suárez y la Escuela de Salamanca). Dado el cautiverio forzado de Fernando VII en Bayona por Napoleón, operó la retroversión de la soberanía al pueblo de forma legítima y protectora de la legalidad. Los Cabildos funcionaban como el canal cualitativo, orgánico-corporativo de los principales vecinos de la ciudad, poseedores de la prerrogativa de auto-constituir juntas provinciales bajo la regla de las Siete Partidas de Alfonso X. El Acta de Cabildo de 1810 fue de sincera fidelidad inicial defensiva, y no de secesión ex nihilo.",
    keyConcepts: ["Pactismo Escolástico", "Retroversión de Soberanía", "Cabildo Abierto", "Francisco Suárez", "Fernando VII", "Acta del Cabildo 1810", "José Miguel Infante"],
    associatedQuestions: [9, 10, 11, 12, 13]
  },
  {
    id: 6,
    title: "Ensayos Constitucionales chilenos (1811-1828)",
    pages: "Págs. 30-33, 42-51",
    summary: "El período post-separación estuvo marcado por la necesidad desesperada de fundar una identidad nacional a través de textos constitucionales escritos, ausentes de una base burguesa real o teóricos dogmáticos. Detalla los Reglamentos Provisionales (1811, 1812 -primero en consagrar una carta de derechos mínimos pero con cláusula de suspensión dictatorial por salud pública- y 1814). Analiza la instauración del Bicameralismo por la Constitución de 1822 de O'Higgins, el fracaso sociológico de la Constitución Moralista de 1823 de Juan Egaña por hiper-regular coactivamente la moralidad y vida privada por sobre la praxis política, el colapso del Federalismo de 1826 de José Miguel Infante por carecer de tesorerías y rentas provinciales, y las innovaciones de la liberal Constitución de 1828 formulada por José Joaquín de Mora (derechos imprescriptibles e inviolables, presunción de culpabilidad a la autoridad que los vulnere), cuyo conflicto en la designación de vicepresidentes desató la Guerra Civil de 1829.",
    keyConcepts: ["Bicameralismo", "Constitución Moralista", "Federalismo", "Constitución de 1828", "José Joaquín de Mora", "Juan Egaña", "Gatillante de 1829"],
    associatedQuestions: [14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28]
  },
  {
    id: 7,
    title: "El Orden Portaliano y la Constitución de 1833",
    pages: "Págs. 52-62, 63-68",
    summary: "Diego Portales erige el principio constitucional del realismo práctico: un Gobierno fuerte, centralizado, respetuoso de la ley y fundado en la autoridad impersonal ('reemplazar la personificación por la reverencia a la institución'). Para dar legitimidad al nuevo orden Pelucón, se aceleró la reforma de la Constitución de 1828 mediante una Gran Convención convocada en 1831, rompiendo la restricción temporal del Art. 133. El proyecto original de Mariano Egaña (presidencialista-autoritario, inspirado en el orden inglés) se fusionó con la corriente civilista de Gandarillas. La carta final de 1833 instituyó al Presidente como un 'Gobernador Supremo', investido de atribuciones ordinarias, extraordinarias (declaración de Estado de Sitio con suspensión del imperio de la Constitución), y extraconstitucionales (el Gran Elector que controlaba la sucesión y la integración del Congreso de manera corporativa). No obstante, el Congreso conservó mecanismos de control mediante las Leyes Periódicas (tributos, presupuesto, fuerzas de mar y tierra), tensiones que desencadenaron en el conflicto de 1891 y el subsecuente parlamentarismo fáctico.",
    keyConcepts: ["Diego Portales", "Orden Portaliano", "Mariano Egaña", "Gran Convención", "Leyes Periódicas", "Estado de Sitio", "Poder Electoral", "Conflicto de 1891"],
    associatedQuestions: [27, 29, 30, 31, 32, 33]
  },
  {
    id: 8,
    title: "La Cuestión Social, Constitución de 1925 y Unidad Popular",
    pages: "Págs. 69-89",
    summary: "Revisa la decadencia del parlamentarismo en el siglo XX por su inoperancia ante la 'Cuestión Social' (analizada por Augusto Orrego Luco en 1884, provocando crisis urbanas, jornadas abusivas, conventillos y nula legislación laboral). La Constitución de 1925 liderada por Arturo Alessandri representó una refundación: reinstauró el presidencialismo pleno, consagró la separación entre Iglesia y Estado mediante una república religiosamente neutra, e introdujo los derechos sociales de segunda generación (protección al trabajo, la industria, el mínimo de bienestar). Sin embargo, el período central del siglo XX experimentó una profunda polarización estatal y expropiadora (leyes de Reforma Agraria de 1962/1967, nacionalización del cobre en 1971). Los graves atropellos institucionales y vulneraciones a la legalidad constitucional denunciados en 1973 por el pleno de la Corte Suprema, la Contraloría General de la República (enmiendas y vetos de las Tres Áreas) y la Cámara de Diputados en el célebre del 22 de agosto determinaron la completa pérdida de legitimidad de ejercicio del gobierno de la Unidad Popular.",
    keyConcepts: ["Cuestión Social", "Arturo Alessandri", "Constitución de 1925", "Derechos Sociales", "Reforma Agraria", "Nacionalización de Cobre", "Acuerdo del 22 de Agosto", "Quiebre de 1973"],
    associatedQuestions: [34, 35, 36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 9,
    title: "La Constitución de 1980 y su Evolución Orgánica",
    pages: "Págs. 90-118",
    summary: "Señala que, siguiendo el análisis doctrinario de András Sajó, el motor constituyente predominante en 1980 fue el 'miedo' al desorden, la polarización totalitaria y el despojo de propiedad, buscando neutralizar el colapso democrático mediante contrapesos severos. Elaborada por la Comisión Ortúzar (con Jaime Guzmán y Enrique Evans) e informada por el Consejo de Estado, instituyó principios nuevos: Subsidiariedad del Estado, Autonomía garantizada de los cuerpos intermedios (Art. 1, inciso tercero), libre iniciativa económica y la protección de la esencia misma de los derechos fundamentales (Art. 19 Nº 26). Incorporó un remedio procesal inédito: el Recurso de Protección ante los tribunales. Originalmente el Senado fue concebido como un cuerpo mixto corporativo no enteramente electivo para aislarlo de la contingencia partidista. Su evolución posterior incluye las profundas reformas consensuadas de 1989 (plebiscito con 54 enmiendas, reemplazando el distrito nacional senatorial por circunscripciones territoriales equilibrando el factor demográfico) y la reforma de 2005 (que eliminó senadores institucionales, vitalicios y delegó el número final de escaños a la ley orgánica de votaciones).",
    keyConcepts: ["Constitución de 1980", "András Sajó", "Jaime Guzmán", "Estado Subsidiario", "Grupos Intermedios", "Recurso de Protección", "Reformas de 1989", "Reformas de 2005", "Orden Público Económico"],
    associatedQuestions: [43, 44, 45]
  }
];

export const SOLEMN_RECUPERATIVA_QUESTIONS: QuestionData[] = [
  {
    id: 1,
    question: "Señale los elementos del concepto de constitución del profesor Álvaro D'Ors.",
    topic: "Teoría Constitucional",
    summaryTip: "D'Ors postula que la constitución no es necesariamente escrita ni propiamente una norma jurídica estricta, sino un 'convenio de gobierno social'. No es norma suprema, sino un marco de convivencia pública y jurídica. Plantea la controvertida paradoja de que la defensa del orden constitucional frente a enemigos compete al Ejército, que constitutivamente debe ser un elemento diferente de la sociedad civil protegida ('el defensor siempre debe ser distinto del defendido')."
  },
  {
    id: 2,
    question: "¿Por qué Russell Kirk dice que las constituciones pueden ser total o parcialmente escritas? ¿Qué significa?",
    topic: "Teoría Constitucional",
    summaryTip: "Kirk sostiene que el concepto popular confunde constitución exclusivamente con un documento textual formal. Sin embargo, afirma que las constituciones son principalmente un cuerpo 'vivo' y no escrito de costumbres, valores, convenciones no escritas, estatutos históricos y hábitos mentales que le dan verdadera validez y sustento en el tiempo al ordenamiento positivo formal."
  },
  {
    id: 3,
    question: "¿Qué significa que todo país tenga dos constituciones?",
    topic: "Teoría Constitucional",
    summaryTip: "Coexisten dos vertientes constitucionales: 1) La constitución formal escrita (documento rígido promulgado en la era moderna inspirado en la Ilustración norteamericana y francesa) y 2) La constitución histórica, interna o viva (un cuerpo preexistente de compromisos políticos, costumbres y modos de convivencia orgánica desarrollados a lo largo de los siglos)."
  },
  {
    id: 4,
    question: "¿Es posible copiar y trasplantar una constitución que ha funcionado en un país a otro? Explique.",
    topic: "Teoría Constitucional",
    summaryTip: "Para Kirk y Burke, el trasplante artificial de constituciones exitosas (como la de EE.UU. a Hispanoamérica, África o Asia) termina siendo un fracaso absoluto. Esto se debe a que la ley formal carece de raíces si no se asienta en la particular experiencia nacional, costumbres arraigadas, e historia viva del pueblo que pretende regular."
  },
  {
    id: 5,
    question: "¿Qué se entiende por constitución histórica o viva? ¿Es parte de la tradición del constitucionalismo moderno que surge con el liberalismo ilustrado o no?",
    topic: "Teoría Constitucional",
    summaryTip: "La constitución histórica es la constitución tradicional preexistente basada en el desarrollo orgánico de una sociedad y no en una creación formal 'ex nihilo'. No forma parte del constitucionalismo racional-ilustrado moderno, sino que es tributaria de corrientes de pensamiento tradicionalistas, de la cultura hispánica pre-revolucionaria, y del constitucionalismo consuetudinario inglés."
  },
  {
    id: 6,
    question: "Explique por qué las naciones hispanoamericanas se apartan de la constitución histórica hispana al adoptar el camino constituyente.",
    topic: "Emancipación y Transición",
    summaryTip: "Al producirse la independencia, Hispanoamérica rompe con la institucionalidad hispana de trescientos años. Por razones de identidad y auto-fundación soberana, imitó de modo idealista el constitucionalismo abstracto-escrito europeo y estadounidense de derechos abstractos individuales de libertad, rompiendo con los derechos concretos preexistentes del orden hispánico."
  },
  {
    id: 7,
    question: "¿Cuál fue la actitud mayoritaria de las Indias ante la Revolución Francesa? ¿Por qué?",
    topic: "Época Indiana",
    summaryTip: "Hubo un profundo rechazo y temor generalizado en la sociedad indiana debido a la extrema violencia, la desestabilización social y el anticlericalismo de la Revolución Francesa. Solo una ínfima minoría de la élite local criolla tuvo simpatía parcial o acceso restringido a textos revolucionarios franceses."
  },
  {
    id: 8,
    question: "¿Cuál era la importancia del Cabildo en la tradición política medieval hispana?",
    topic: "Época Indiana",
    summaryTip: "El Cabildo o ayuntamiento constituía la institución clave de organización municipal que regulaba el quehacer diario. Poseía un desarrollo particular en Indias con mayor poder que en España, actuando de forma orgánica en la conformación de la conciencia política criolla. Administraba la ciudad e incluso asumía el gobierno total interino ante la muerte súbita o ausencia absoluta del representante de la Corona."
  },
  {
    id: 9,
    question: "¿Por qué se convocó un Cabildo Abierto en la ciudad de Santiago el 18 de septiembre de 1810?",
    topic: "Proceso de 1810",
    summaryTip: "Ante el encarcelamiento del soberano Fernando VII y el vacío de poder subsiguiente en la Península, el Cabildo Abierto se convocó como la herramienta obvia y tradicional para buscar la unidad del reino, organizar la defensa colectiva, y disipar la peligrosa incertidumbre por la invasión napoleónica."
  },
  {
    id: 10,
    question: "¿Cuál fue el primer conflicto o crisis constitucional de Chile? ¿Qué bandos se organizaron y qué ideas constitucionales defendían?",
    topic: "Proceso de 1810",
    summaryTip: "Ocurrió tras las abdicaciones de Bayona: la disolución fáctica del imperio. Se dividieron en dos bandos en un primer momento: 1) Los realistas puros o partidarios del gobierno peninsular inmediato (Consejo de Regencia); y 2) Los criollos autonomistas moderados-conservadores, que querían organizar su propio autogobierno a través de una Junta fideicomisaria por lealtad transitoria al monarca cautivo."
  },
  {
    id: 11,
    question: "¿Cuál fue el argumento jurídico-constitucional que esgrimió José Miguel Infante en el Cabildo Abierto de Santiago?",
    topic: "Proceso de 1810",
    summaryTip: "Infante citó expresamente Las Siete Partidas de Alfonso X. Argumentó que el derecho legítimo del pueblo chileno permitía constituir una junta provincial autónoma idéntica a las constituidas en España ante el cautiverio del rey y falta de un gobernante legítimo designado con anterioridad."
  },
  {
    id: 12,
    question: "¿Por qué los criollos chilenos se inclinaron a formar una Junta de Gobierno?",
    topic: "Proceso de 1810",
    summaryTip: "Como manifestación inicial de lealtad al soberano Fernando VII y con el fin de pacificar el orden público, evitar la invasión forzada 'francesa' y poder implementar reformas administrativas y educativas que la burocracia monárquica imperial les negaba."
  },
  {
    id: 13,
    question: "El Acta del Cabildo Abierto de 18 de septiembre de 1810 recoge la decisión de constituir dos instituciones políticas de muy diversa índole. Explique estas dos instituciones y sus diferencias.",
    topic: "Proceso de 1810",
    summaryTip: "Las dos instituciones fueron: 1) La Junta de Gobierno, provisional y enmarcada en la representación orgánica-corporativa hispánica tradicional; y 2) El Congreso Nacional, inédito, de representación electoral territorial/popular, encargado de redactar y deliberar las futuras leyes de gobierno desde las provincias."
  },
  {
    id: 14,
    question: "¿Por qué se dice que los reglamentos constitucionales de 1811, 1812 y 1814 son 'provisionales, de emergencia, breves y rudimentarios'?",
    topic: "Organización de la República",
    summaryTip: "Carecían de una técnica dogmática-jurídica formal y de base teórica profunda. Se redactaron con urgencia en un breve lapso militar de crisis, enfocados exclusivamente en centralizar el poder militar y administrativo y subsanar vacíos de soberanía de facto."
  },
  {
    id: 15,
    question: "Una vez consumada la ruptura con la Monarquía Hispana, ¿cuál es el principal problema político que surge y qué rol se asignará a la constitución escrita?",
    topic: "Organización de la República",
    summaryTip: "Surge el vacío absoluto de legitimidad y la necesidad de generar una identidad nacional desde la nada, reemplazando trescientos años de lealtad monárquica. La constitución escrita asume el rol sagrado de pacto fundante, un artefacto o papel con carácter totémico destinado a modelar y unificar la nueva sociedad civil abstractamente."
  },
  {
    id: 16,
    question: "¿Existieron teóricos o ideólogos liberales ilustrados en la élite chilena al comenzar el siglo XIX?",
    topic: "Ideales e Ilustración",
    summaryTip: "No existieron ideólogos profundos ni teóricos originales; a lo más, propagandistas pragmáticos de la modernidad intelectual. Las ideas políticas foráneas llegaron de forma escasa en la élite y se adaptaron rápidamente a problemáticas cotidianas del gobierno."
  },
  {
    id: 17,
    question: "¿Cuáles son las dos fuentes intelectuales que tienen mayor impacto en la élite chilena? Explique.",
    topic: "Ideales e Ilustración",
    summaryTip: "Las dos fuentes intelectuales primordiales fueron: 1) El Pensamiento Crítico y Reformista Español del siglo XVIII (Benito Feijóo, Campomanes); y 2) La Escolástica Española Tardía de la Escuela de Salamanca (Suárez, Molina, Azpilcueta), que pregonaba el consentimiento popular, la limitación ética al rey y el tiranicidio."
  },
  {
    id: 18,
    question: "Explique la principal diferencia en materia de derechos y garantías constitucionales entre los reglamentos de 1811 y 1814 con el reglamento de 1812.",
    topic: "Desarrollo de Derechos",
    summaryTip: "Los reglamentos de 1811 y 1814 omiten toda referencia y mención a derechos individuales. El reglamento de 1812, en contraste, consagra de forma pionera derechos como la seguridad, igualdad, libertad de locomoción y de imprenta, aunque introdujo la cláusula de suspensión de los mismos 'por salud de la patria'."
  },
  {
    id: 19,
    question: "¿Cuántos textos constitucionales promulga Bernardo O'Higgins en su calidad de Director Supremo de Chile?",
    topic: "Organización de la República",
    summaryTip: "O'Higgins promulga dos textos constitucionales en su mandato directivo obligatorio: la Constitución de 1818 y la Constitución de 1822."
  },
  {
    id: 20,
    question: "¿En qué texto constitucional se establece por primera vez el bicameralismo del Poder Legislativo? ¿Cómo se conformaban ambas cámaras?",
    topic: "Organización de la República",
    summaryTip: "Se consagra por primera vez en la Constitución de 1822. Establecía un Congreso formado por senadores y diputados. El Senado era corporativo, cerrado, no electivo (integrado por obispos, ex directores supremos, militares de alto rango, ministros de Estado, comerciantes), mientras que la Cámara de Diputados tenía carácter eminentemente electoral representativo de los ciudadanos."
  },
  {
    id: 21,
    question: "¿Por qué la Constitución de 1823 es conocida como la 'Constitución Moralista'? ¿Quién es su principal autor intelectual y redactor?",
    topic: "Ensayos Constitucionales",
    summaryTip: "Fue redactada por Juan Egaña. Es conocida como 'Moralista' por su pretensión utópica de moralizar coactivamente a los ciudadanos mediante un registro de vida cívica minucioso, leyes hiper-reguladoras de la virtud y pautas religiosas estrictas en demerito de la sintonía sociológica chilena."
  },
  {
    id: 22,
    question: "¿Existió una Constitución Federal en Chile? Explique.",
    topic: "Ensayos Constitucionales",
    summaryTip: "No formalmente como un texto constitucional codificado completo y aprobado. Existió en cambio el 'Proyecto de Constitución Federal de 1826' acompañado de leyes federales transitorias promulgadas por el Congreso constituyente bajo el liderazgo de José Miguel Infante."
  },
  {
    id: 23,
    question: "¿Por qué fracasa el sistema federal en Chile?",
    topic: "Ensayos Constitucionales",
    summaryTip: "Gatilló un fracaso rotundo e inmediato debido al arraigo centralista indiano de trescientos años y a factores financieros graves: la asimetría total de recursos y la inexistencia de un erario o hacienda pública provincial en los 8 nuevos distritos."
  },
  {
    id: 24,
    question: "¿Cuáles son las fuentes de inspiración de la Constitución de 1828 y qué efecto tienen en el referido texto?",
    topic: "Ensayos Constitucionales",
    summaryTip: "Se inspiró en la Constitución de EE.UU. de 1787, las cartas francesas revolucionarias (1791/1793) y la Constitución de Cádiz de 1812. Esto se tradujo en que fuera el reflejo doctrinario más puro del liberalismo clásico de la época, con clara estructuración individualista."
  },
  {
    id: 25,
    question: "Explique la regulación e innovaciones que introdujo la Constitución de 1828 en materia de derechos y garantías constitucionales.",
    topic: "Desarrollo de Derechos",
    summaryTip: "Sistematizó los derechos individuales en un capítulo, definiéndolos solemnemente como 'imprescriptibles e inviolables'. Introdujo una presunción legal revolucionaria de culpabilidad directa hacia cualquier individuo o institución del Estado que coartara dichos derechos."
  },
  {
    id: 26,
    question: "Explique el conflicto constitucional que genera la Crisis de 1829, cómo se resuelve y qué efectos constitucionales tiene.",
    topic: "Crisis de 1829",
    summaryTip: "La elección del vicepresidente de 1829 fue manipulada por la mayoría 'pipiola' del Congreso al designar al tercer candidato (Vicuña Larraín) rompiendo la tradición mayoritaria. Los opositores ('pelucones' y militares) denunciaron la inconstitucionalidad. Se resolvió mediante la Guerra Civil de 1829, terminando en el triunfo conservador."
  },
  {
    id: 27,
    question: "Diego Portales impone un consenso que permite orden. ¿Cuáles son los tres elementos en que se construye el régimen portaliano?",
    topic: "Régimen Portaliano",
    summaryTip: "Se edifica sobre tres pilares fundamentales que desvelan el realismo: 1) Elementos Institucionales tradicionales con arraigo social (respaldo de la Iglesia, los terratenientes y la figura del Presidente); 2) Despersonalización del poder (institucionalidad impersonal tutelada por hombres prolijos como Bello e Ignacio Rengifo); y 3) Sumisión formal e inexcusable al orden de la ley ('el respeto por la constitución')."
  },
  {
    id: 28,
    question: "¿Qué establecía el Artículo 133 de la Constitución de 1828 respecto de la reforma de la misma?",
    topic: "Ensayos Constitucionales",
    summaryTip: "Fijaba una severa rigidez provisoria, decretando expresamente que la Constitución de 1828 no podía ser objeto de ninguna reforma o enmienda de ley sino hasta cumplirse obligatoriamente el año 1836, mediante una Gran Convención convocada para tal efecto."
  },
  {
    id: 29,
    question: "¿Qué mecanismo jurídico emplea el Presidente Joaquín Prieto para reformar la Constitución de 1828?",
    topic: "Régimen Portaliano",
    summaryTip: "Prieto dictó una ley inconstitucional el 1 de octubre de 1831 infringiendo la restricción del Art. 133 para obligar y anticipar la instalación de la Gran Convención, brindando un velo formal de legitimidad a la total liquidación del orden liberal anterior."
  },
  {
    id: 30,
    question: "Explique el funcionamiento de la Gran Convención y cómo se trabaja el texto constitucional.",
    topic: "Orden de 1833",
    summaryTip: "La convención estuvo integrada por 16 diputados y 20 ciudadanos notables. Formaron una comisión de 7 redactores principales (incluyendo a Mariano Egaña y Gandarillas). Gandarillas presentó una tesis intermedia, pero se consensuó sobre la base del prolijo borrador autoritario de Mariano Egaña, que representaba 2/3 de la versión original de 1833."
  },
  {
    id: 31,
    question: "Señale y explique los 4 elementos del voto particular de Mariano Egaña que fueron desechados por la Gran Convención.",
    topic: "Orden de 1833",
    summaryTip: "Egaña propuso un modelo afín al parlamentarismo inglés: 1) Presidente reelegido indefinidamente, 2) Facultad presidencial exclusiva para disolver la Cámara de Diputados, 3) Presidente habilitado para integrar físicamente debates del Congreso, y 4) Un Senado constituido enteramente por miembros designados fijos."
  },
  {
    id: 32,
    question: "¿Qué efecto tendrá sobre la Constitución la exclusión del texto constitucional de los 4 elementos del voto particular de Mariano Egaña?",
    topic: "Orden de 1833",
    summaryTip: "Evitó que la Constitución de 1833 tuviera un diseño parlamentarista formal claro, sellando en su lugar un presidencialismo oligárquico de fuerte concentración de poder ejecutivo, blindaje de orden público y control fáctico de elecciones por sobre el legislativo."
  },
  {
    id: 33,
    question: "La Constitución aprobada en 1833: ¿es una reforma de la Constitución de 1828? Explique.",
    topic: "Orden de 1833",
    summaryTip: "Formalmente se auto-proclamó como 'la reforma de la Constitución de 1828' bajo el barniz de la continuidad formal. No obstante, por su profundo espíritu autoritario, re-estructuración institucional y la derogación de libertades activas, constituyó de facto una constitución enteramente nueva."
  },
  {
    id: 34,
    question: "¿Consagra la constitución de 1925 un régimen derechamente presidencialista?",
    topic: "Movimiento de 1925",
    summaryTip: "Sí. Nace como respuesta directa al régimen parlamentario de facto (1891-1925). Alessandri la dotó de una fuerte matriz presidencialista: elección directa, incompatibilidad del cargo de ministro con escaños del Congreso, iniciativa exclusiva de gasto público para el Presidente de la República, y clausura obligatoria del debate legislativo."
  },
  {
    id: 35,
    question: "¿Cómo se elegía el presidente de la república en la Constitución de 1925?",
    topic: "Movimiento de 1925",
    summaryTip: "Mediante votación popular directa. Si ningún candidato obtenía la mayoría absoluta (50% + 1 de votos válidamente emitidos), la decisión recaía irrevocablemente sobre el Congreso Pleno, que debía escoger libremente entre las dos mayorías relativas inmediatas."
  },
  {
    id: 36,
    question: "Señale las dos novedades más relevantes en materia de derechos y libertades individuales que la Constitución de 1925 introduce en nuestra tradición constitucional.",
    topic: "Desarrollo de Derechos",
    summaryTip: "Las dos grandes transformaciones e innovaciones fueron: 1) El reconocimiento fundacional de la libertad de conciencia y plena libertad de culto (separación final de Iglesia y Estado); y 2) El nacimiento de los derechos sociales, laborales y económicos (segunda generación) reconociendo la protección constitucional al trabajo y la función social reguladora de la propiedad."
  },
  {
    id: 37,
    question: "¿Cómo se conformaba el Senado en la Constitución de 1925?",
    topic: "Estructura del Congreso",
    summaryTip: "Se eliminó el Senado nacional single-district de la reforma liberal de 1874. Se instituyó un Senado integrado por miembros elegidos de forma directa a razón de 5 senadores por cada una de las 9 agrupaciones provinciales consolidadas por ley, completando una cámara alta estable de 45 escaños territoriales (luego aumentada y reformada a 50 en 1967)."
  },
  {
    id: 38,
    question: "¿Qué es el Pacto de Garantías Constitucionales y a raíz de qué acontecimiento histórico se produce?",
    topic: "Quiebre de 1973",
    summaryTip: "Fue una reforma constitucional impuesta por la Democracia Cristiana en 1970 para ratificar en el Congreso la designación de Salvador Allende. Buscaba frenar tendencias de orientación totalitaria y adoctrinamiento estatal garantizando libertades de enseñanza, prensa, reunión, correspondencia e independencia del estamento policial y militar."
  },
  {
    id: 39,
    question: "¿Qué fue el proceso conocido como Reforma Agraria? ¿Fue necesario reformar la constitución para implementarla?",
    topic: "Expropiación y Estado",
    summaryTip: "Fue la política de redistribución estatal y expropiación de latifundios. Sí, requirió reformas constitucionales profundas (en 1963 bajo Alessandri y notablemente en 1967 bajo Eduardo Frei Montalva) para viabilizar el pago diferido de indemnizaciones hasta por 30 años, debilitando el estricto amparo e intangibilidad de la propiedad privada tradicional."
  },
  {
    id: 40,
    question: "¿Qué fue el proceso conocido como la Nacionalización del Cobre? ¿Fue necesario reformar la constitución para implementarla?",
    topic: "Expropiación y Estado",
    summaryTip: "Fue la expropiación y asimilación al dominio estatal de los grandes yacimientos mineros explotados por compañías estadounidenses. Sí. Se implementó mediante una trascendental Reforma Constitucional unánime el 11 de julio de 1971, que permitió calcular indemnizaciones descontando 'rentabilidades excesivas' con carácter retroactivo."
  },
  {
    id: 41,
    question: "Explique el Acuerdo de la Cámara de Diputados del 22 de agosto de 1973.",
    topic: "Quiebre de 1973",
    summaryTip: "Fue el acuerdo histórico donde el poder legislativo denunció públicamente al Presidente Salvador Allende por quebrantar de forma sistemática el ordenamiento jurídico, usurpar competencias de los Tribunales, no acatar sentencias firmes y atentar gravemente contra la separación de funciones, declarando la total pérdida de legitimidad de su administración."
  },
  {
    id: 42,
    question: "¿En qué consiste el pronunciamiento que el Contralor General de la República emite respecto la promulgación parcial de la reforma constitucional de las Tres Áreas de la Economía que hace el Presidente Salvador Allende?",
    topic: "Quiebre de 1973",
    summaryTip: "Allende intentó vetar la reforma aprobada por el Congreso pero este insistió y rechazó las objeciones presidenciales. En lugar de someterse al referéndum o plebiscito, el Presidente pretendió promulgar solo las normas que favorecían su agenda. La Contraloría rechazó registrar el decreto por ilegal, dictaminando que la promulgación parcial de reformas de la constitución es nula de pleno derecho."
  },
  {
    id: 43,
    question: "Señale las dos innovaciones más relevantes en materia de derechos y libertades individuales introducidas por la Constitución de 1980.",
    topic: "Desarrollo de Derechos",
    summaryTip: "Consagró: 1) El Recurso de Protección ante las Cortes de Apelaciones con facultades extraordinarias directas, dándole dientes procesales reales a los ciudadanos; y 2) El amparo absoluto del núcleo o esencia de los derechos fundamentales (Art. 19 Nº 26) que impide que la ley civil haga más gravoso su ejercicio."
  },
  {
    id: 44,
    question: "¿Qué es el Orden Público Económico que se introduce en nuestra tradición constitucional por la Constitución de 1980? ¿Es una política económica específica?",
    topic: "Evolución de 1980",
    summaryTip: "Es el adecuado orden de relaciones jurídicas-económicas destinadas a consagrar un marco de libre iniciativa, libertad de adquirir bienes, y no discriminación del Estado. No constituye una política económica específica o de partido (el texto carece de ella), sino un conjunto formal de límites axiológicos basados en la subsidiariedad económica del Estado."
  },
  {
    id: 45,
    question: "¿Cuáles son las dos reformas más profundas que experimenta la Constitución de 1980?",
    topic: "Evolución de 1980",
    summaryTip: "Las dos grandes enmiendas históricas son: 1) La Reforma de 1989 (consensuó de facto 54 enmiendas, eliminó el Art. 8 restrictivo, sustituyó el distrito senatorial nacional incorporando demografía a favor de circunscripciones); y 2) La Reforma de 2005 bajo Lagos (abolió los senadores vitalicios o institucionales convirtiéndola en una cámara alta plenamente electiva)."
  }
];
