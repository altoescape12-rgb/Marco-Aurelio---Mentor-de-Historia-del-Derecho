export interface ExamHistoryItem {
  question: string;
  answer: string;
  score: number;
  feedback: string;
  errorsDetected: string[];
}

export interface OralExamState {
  currentQuestionIndex: number; // 0 to 5
  examHistory: ExamHistoryItem[];
  currentQuestion: string | null;
  welcomeMessage: string | null;
  selectedTopic: string;
  difficulty: "basico" | "solemne" | "comision";
  isStarted: boolean;
  isFinished: boolean;
  scoreAvg: number;
  finalSpeech: string | null;
  strongPoints: string[];
  weakPoints: string[];
}

export interface WrittenEvaluation {
  score: number;
  strengths: string[];
  weaknesses: string[];
  doctrineFix: string;
  rewrittenModel: string;
  socrativeCorrection: string;
}

export interface SolemnQuestion {
  id: number;
  title: string;
  text: string;
  mentorTip: string;
}

export interface RefineryResult {
  diagnostic: string;
  doctrineExplanation: string;
  refinedText: string;
}

export interface CommonErrorSchema {
  id: string;
  title: string;
  summary: string;
  doctrineText: string;
  exampleBad: string;
  exampleGood: string;
}

export interface LibraryItem {
  title: string;
  author: string;
  period: string;
  importance: string;
  summary: string;
  keyConcepts: string[];
}
