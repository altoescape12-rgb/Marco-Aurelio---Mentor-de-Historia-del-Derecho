import { CommonErrorSchema, LibraryItem, SolemnQuestion } from "./types";

export const CLASSIC_ERRORS: CommonErrorSchema[] = [
  {
    id: "pactismo-soberania",
    title: "Confundir Pactismo con Soberanía Popular",
    summary: "Atribuir el proceso de 1810 a la soberanía popular de Rousseau en lugar de la tradición del pacto de sujeción hispano de Francisco Suárez.",
    doctrineText: "En el derecho indiano y la tradición hispánica, la soberanía vuelve al pueblo pero bajo la doctrina del 'pacto de sujeción' medieval teológico (Francisco Suárez, Santo Tomás de Aquino), donde Dios transfiere el poder al pueblo, y este lo transfiere irrevocablemente al soberano. Encerrado el Rey, el poder revierte de forma transitoria y fideicomisaria. Rousseau, en cambio, propone un contrato social libre, laico donde la soberanía reside perpetuamente en la voluntad general, lo cual era considerado subversivo por la clase dirigente criolla de 1810.",
    exampleBad: "En el Cabildo Abierto de 1810, los patriotas aplicaron el contrato social de Rousseau, proclamando que la soberanía libre del pueblo chileno permitía declarar la independencia inmediata del yugo español.",
    exampleGood: "En el Cabildo Abierto, la argumentación del procurador José Miguel Infante se asentó sobre el pactismo jesuítico y la legislación de las Siete Partidas. Dado que el rey Carlos IV había abdicado forzosamente y Fernando VII estaba preso en Bayona, se produjo la retroversión de la soberanía al pueblo de manera transitoria y de lealtad, para auto-gobernarse mediante una junta conservadora de los derechos del monarca, sin romper inicialmente la legitimidad indiana."
  },
  {
    id: "francesa-1810",
    title: "Mezclar la Revolución Francesa con la Junta de 1810",
    summary: "Asumir que la Primera Junta de Gobierno de Chile fue un reflejo directo e ideológico de la Toma de la Bastilla francesa.",
    doctrineText: "La Revolución Francesa de 1789 fue un rompimiento drástico, violento y anticlerical con el Antiguo Régimen. Por el contrario, la Junta de 1810 en Santiago fue un acto eminentemente corporativo, aristocrático, conservador y católico que juró fidelidad eclesiástica y política a Fernando VII. La élite USS resalta que la influencia ideológica inmediata en 1810 es hispánica, legalista e institucionalista; las ideas francesas llegaron con mayor fuerza recién hacia el período de la Patria Nueva (1817) y bajo discursos aislados como los de Camilo Henríquez.",
    exampleBad: "Los chilenos formaron la Junta de 1810 inspirados por la Toma de la Bastilla, queriendo guillotinar el sistema real y fundar una república democrática basada en los jacobinos franceses.",
    exampleGood: "La constitución de la junta del 18 de septiembre de 1810 fue un acto defensivo e institucional y no subversivo. Se fundó en el derecho público indiano en respuesta directa a la invasión napoleónica a España. El objetivo no era implantar el radicalismo liberal francés, sino conservar el orden público, la fe de la Iglesia y la obediencia al monarca ante un vacío de poder."
  },
  {
    id: "memoria-vacia",
    title: "Memorizar Hechos sin Lógica Constitucional",
    summary: "Exponer fechas y nombres secuenciales sin explicar la ratio jurídica ni la evolución de las instituciones del Estado.",
    doctrineText: "En la evaluación oral y escrita de la USS, de la mano del profesor Iriarte, un recuento meramente cronológico de batallas y directores supremos obtiene nota deficiente. Debes enfocar la argumentación explicando relaciones jurídico-constitucionales. Por ejemplo, en vez de listear directores de los ensayos constitucionales, debes explicar por qué fracasó la Constitución Moralista de 1823 por su inaplicabilidad sociológica, o el Federalismo de 1826 por falta de madurez de las tesorerías provinciales.",
    exampleBad: "La Constitución de 1823 se dictó el 29 de diciembre por Juan Egaña, tenía 277 artículos y duró muy poco porque la gente se aburrió de ella y luego vino la de 1826 que era federal y fue hecha por José Miguel Infante.",
    exampleGood: "La Constitución de 1823, de carácter moralista y redactada por Juan Egaña, fracasó principalmente debido a su desconexión sociológica-jurídica, pues pretendía regular coercitivamente la moralidad privada mediante un catálogo minucioso de virtudes cívicas. Esto generó un choque inevitable entre la norma abstracta hiper-moralizante y la praxis política real de la naciente aristocracia de la época."
  },
  {
    id: "narrativo-sin-doctrina",
    title: "Argumentación Narativa sin Conceptos Jurídicos",
    summary: "Responder a una pregunta solemne como si fuera una novela histórica, omitiendo lenguaje dogmático y nociones de derecho público.",
    doctrineText: "La Historia del Derecho no es literatura; es una rama dogmática de las ciencias jurídicas. El uso preciso de vocabulario técnico es indispensable: 'retroversión de soberanía', 'poder constituyente originario', 'patronato republicano', 'atribuciones de patrono', 'vicios de legitimidad', 'constitucionalismo histórico', 'facultades extraordinarias', 'veto presidencial'.",
    exampleBad: "Diego Portales vio que Chile estaba muy desorganizado y que la gente se andaba peleando, así que decidió poner orden enviando militares y armando un gobierno fuerte donde el presidente mandara a todos para que no hubiera desorden.",
    exampleGood: "Diego Portales concibió la necesidad de erigir un principio de autoridad abstracta que superara el caudillismo personalista. Esto se plasmó en el texto de 1833 bajo una 'presidencia oligárquico-autoritaria', dotada de un fuerte poder colegislador, facultades de veto suspensivo, subordinación del estamento castrense y la potestad de declarar el estado de sitio mediante facultades extraordinarias, dotando al Ejecutivo de herramientas formales para tutelar la estabilidad del Estado."
  }
];

export const CEDULARIO_USS: { category: string; questions: SolemnQuestion[] }[] = [
  {
    category: "Cultura Jurídica Indiana y Pactismo",
    questions: [
      {
        id: 1,
        title: "La Retroversión de la Soberanía",
        text: "¿De qué forma la doctrina pactista hispana y las Siete Partidas fundamentaron jurídicamente la constitución de la Primera Junta de Gobierno el 18 de septiembre de 1810?",
        mentorTip: "Recuerda citar la Ley de Partidas referida a la prisión del rey, el 'pacto de sujeción' y desmarcarte de la soberanía popular francesa de Rousseau."
      },
      {
        id: 2,
        title: "El Patronato Regio y Republicano",
        text: "Explique la institución del Patronato Regio en las Indias y cómo el Estado republicano chileno intentó heredar dicha prerrogativa frente a la Santa Sede durante el siglo XIX.",
        mentorTip: "Discute la diferencia entre la teoría del patronato por herencia de soberanía estatal o de concesión directa de Roma (teoría vicarista vs patronato nacional)."
      },
      {
        id: 3,
        title: "La Constitución Histórica y la Nueva",
        text: "Contraste la noción indiana de 'Constitución Histórica o Natural' con la mentalidad racionalista-artificiosa del constitucionalismo republicano que surge post-independencia.",
        mentorTip: "Describe cómo la primera asumía que el Derecho preexistía en la costumbre y en las leyes fundamentales, mientras que la segunda concibe la constitución como un papel racional que moldea la sociedad desde cero."
      }
    ]
  },
  {
    category: "Ensayos Constitucionales y Anarquía (1823-1830)",
    questions: [
      {
        id: 4,
        title: "El Ensayo Moralista de 1823",
        text: "¿Por qué fracasó sociológicamente la Constitución de 1823 redactada por Juan Egaña? Explique vinculándolo al concepto de realismo constitucional.",
        mentorTip: "Menciona el registro de vida cívica, el control de la moralidad privada del ciudadano y la utopía virtuosa en contraste con el caudillismo existente."
      },
      {
        id: 5,
        title: "El Ensayo Federalista de 1826",
        text: "Analice los factores institucionales y de hacienda pública que provocaron el colapso inmediato del ensayo federal liderado por José Miguel Infante.",
        mentorTip: "Habla del desequilibrio de las rentas entre las provincias, la improvisación de las asambleas locales y el carácter centralizado histórico de Chile."
      },
      {
        id: 6,
        title: "La Constitución Liberal de 1828",
        text: "Identifique los aportes dogmáticos de la Constitución de 1828 de José Joaquín de Mora y por qué la disputa en torno a los vicepresidentes gatilló la Guerra Civil de 1829.",
        mentorTip: "Describe la ampliación del sufragio y la desestabilización institucional provocada por la elección directa del Congreso que vulneró la tradición mayoritaria criolla."
      }
    ]
  },
  {
    category: "El Orden Portaliano y la Constitución de 1833",
    questions: [
      {
        id: 7,
        title: "El Pensamiento de Diego Portales",
        text: "Distinga entre el mito del caudillismo de Portales y su real aporte doctrinal: la creación del principio de autoridad impersonal y abstracta.",
        mentorTip: "Cita extractos conceptuales de sus célebres cartas: el gobierno fuerte, centralizado, de hombres virtuosos y la vigencia de la ley por sobre las personas."
      },
      {
        id: 8,
        title: "Hiperpresidencialismo del 1833",
        text: "¿Cuáles eran las herramientas constitucionales explícitas con las que la Constitución de 1833 robusteció al Presidente de la República frente al Congreso?",
        mentorTip: "Discute las facultades extraordinarias, el estado de sitio decretado por el presidente, el veto suspensivo, el patronato, y el control de las jefaturas militares."
      },
      {
        id: 9,
        title: "Las Leyes Periódicas",
        text: "Explique de qué forma el Congreso de la República mantenía una pequeña pero crucial cuota de presión a través de las 'Leyes Periódicas' en la Constitución de 1833.",
        mentorTip: "Debes detallar el presupuesto nacional, la autorización para mantener las fuerzas armadas en tierra, y la Ley de Contribuciones, que se votaban colectivamente."
      }
    ]
  },
  {
    category: "Reformas Liberales y Constitución de 1925",
    questions: [
      {
        id: 10,
        title: "La Secularización del Estado (Leyes Laicas)",
        text: "Explique el impacto doctrinal y la colisión política generada por las llamadas 'Leyes Laicas' de la década de 1880 bajo el gobierno de Domingo Santa María.",
        mentorTip: "Menciona los cementerios laicos, el matrimonio civil y el registro civil en la fractura de la alianza Iglesia-Estado."
      },
      {
        id: 11,
        title: "Guerra Civil de 1891 y Parlamentarismo",
        text: "Analice jurídicamente si la Guerra Civil de 1891 constituyó una reforma fáctica del régimen de 1833 o un quiebre del principio de supremacía presidencial.",
        mentorTip: "Explica la pugna hermenéutica del artículo del presupuesto y cómo un vacío constitucional derivó en el régimen parlamentarista de facto sin cambiar el texto de 1833."
      },
      {
        id: 12,
        title: "La Constitución de 1925 y la Cuestión Social",
        text: "¿Cómo transformó la Constitución de 1925 la noción de propiedad y la relación del Estado con los derechos sociales de los ciudadanos?",
        mentorTip: "Refiérete a la consagración de la función social del derecho de propiedad, el fin del parlamentarismo oligárquico y el nacimiento del Estado social de derecho."
      }
    ]
  }
];

export const HISTORICAL_LIBRARY: LibraryItem[] = [
  {
    title: "Tratado de las Leyes y de Dios Legislador (De Legibus)",
    author: "Francisco Suárez (1612)",
    period: "Siglo de Oro Español / Escolástica Tardía",
    importance: "Sustenta la base del constitucionalismo indiano y la noción doctrinal de pacto de sujeción.",
    summary: "Establece que el poder político secular emana inmediatamente de Dios hacia la comunidad organizada (pueblo). No hay derecho divino directo de los reyes. El pueblo, mediante consentimiento tácito o expreso, transfiere dicho poder al gobernante supremo. Si el gobernante se extingue o deviene tirano, la potestad soberana retorna por derecho natural a la comunidad (retroversión).",
    keyConcepts: ["Pacto de sujeción", "Retroversión de soberanía", "Poder político natural", "Escolástica tardía"]
  },
  {
    title: "Las Siete Partidas",
    author: "Rey Alfonso X el Sabio (Siglo XIII)",
    period: "Bajo Medioevo Español (Castilla)",
    importance: "Código de derecho común que rigió de forma supletoria en las Indias y sirvió de argumento formal en 1810.",
    summary: "La Partida II regula específicamente el poder público de los reyes, la sucesión y la lealtad de los vasallos. Miguel Infante apeló a disposiciones de las Partidas que estipulaban qué hacer ante la ausencia o aprisionamiento del soberano, requiriendo el nombramiento de guardadores elegidos por 'los hombres buenos del reino' (Cabildos).",
    keyConcepts: ["Derecho Común hispánico", "Leyes de Partida", "Cabildo de vasallos", "Orden jerárquico"]
  },
  {
    title: "Cartas Portalianas (Selección)",
    author: "Diego Portales (1821 - 1834)",
    period: "Ensayo y Organización de la República (1820-1830)",
    importance: "Ideario pragmático del orden político que fundamentó la rigidez de 1833 y el control civil.",
    summary: "Señaló la inviabilidad de las democracias abstractas e importadas en pueblos faltos de virtud cívica. Propuso un régimen presidencial impersonal y robusto: 'La República es el sistema que hay que adoptar... Un Gobierno fuerte, centralizador, cuyos hombres sean modelos de virtud y patriotismo, y así enderezar a los ciudadanos por el camino del orden'.",
    keyConcepts: ["Principio de Autoridad impersonal", "Realismo sociológico", "Gobierno fuerte", "Desconfianza doctrinaria"]
  },
  {
    title: "La Constitución Histórica de Chile",
    author: "Julio Heise Gonzalez",
    period: "Historiografía Constitucional del Siglo XX",
    importance: "Estudio fundamental para entender la evolución de las prácticas representativas y de partidos chilenos.",
    summary: "Describe que el desarrollo constitucional en Chile no es fruto de la mera redacción racionalista de textos, sino el resultado de luchas por el sufragio, hábitos deliberativos de los Cabildos, secularización progresiva de la elite civil y maduración institucional pragmática que preexistía a 1833.",
    keyConcepts: ["Evolución incremental", "Práctica parlamentaria", "Hábitos republicanos"]
  },
  {
    title: "Ensayo Histórico sobre la noción de Estado en Chile",
    author: "Mario Góngora",
    period: "Historiografía de Tendencia Conservadora (1981)",
    importance: "Obra maestra que explica cómo el Estado constituyó a la nación chilena y no al revés.",
    summary: "Argumenta que, a diferencia de Europa, donde las naciones crearon sus Estados, en Chile el Estado (primero imperial indiano, luego republicano centralista y portaliano) ha sido el gran configurador de la nacionalidad, el orden social y el territorio. Advierte contra la importación ingenua de teorías constitucionales ajenas a este molde histórico de autoridad soberana.",
    keyConcepts: ["El Estado creador de la nación", "Autoridad tradicional", "Crítica a las utopías de mercado"]
  }
];

export const USS_FAMOUS_QUOTES = [
  "El Derecho rara vez nace del vacío. Ror ello, es menester comprender los procesos humanos e institucionales y no solo memorizar fechas muertas.",
  "Las constituciones no aparecen por accidente; suelen nacer de crisis intensas, conflictos doctrinales y determinaciones humanas.",
  "Avancemos con calma. Un jurista de verdad, formado en las aulas de la Universidad San Sebastián, entiende que la ley es un reflejo de principios eternos y realidades vivas.",
  "La memoria sin criterio es el peor enemigo del estudiante de Derecho. Busquemos la ratio jurídica de las cosas."
];
