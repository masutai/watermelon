export interface AmericanToBritish {
  american_spelling: string;
  word_type:
    | "Noun"
    | "Verb"
    | "Adjective"
    | "Adverb"
    | "Preposition"
    | "Conjunction"
    | "Interjection"
    | "Other";
  british_spelling: string;
  meaning_eng: string;
  meaning_ja: string;
}
