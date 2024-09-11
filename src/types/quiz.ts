import { AmericanToBritish, AmericanToBritishWithHint } from "./amerian2british";

export interface BaseQuizItem {
  question: string;
  answer: string;
}

export interface BritishQuizItem extends BaseQuizItem {
  word_type: AmericanToBritish["word_type"];
  meaning_eng: string;
  meaning_ja: string;
  hint?: AmericanToBritishWithHint;
}

export interface EngineerQuizItem extends BaseQuizItem {
  exampleCode: string;
  options: string[];
}

export type QuizItem = BritishQuizItem | EngineerQuizItem;

export interface QuizData {
  items: QuizItem[];
  type: "british" | "engineer" | string;
}

export function isBritishQuizItem(item: QuizItem): item is BritishQuizItem {
  return "word_type" in item;
}

export function isEngineerQuizItem(item: QuizItem): item is EngineerQuizItem {
  return "exampleCode" in item;
}
