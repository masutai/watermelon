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
  hint_type?: string;
}

export interface AmericanToBritishWithHint {
  hint_1: AmericanToBritish["meaning_eng"];
  hint_2: AmericanToBritish["meaning_ja"];
  hint_3?: AmericanToBritish["hint_type"];
}

export interface HintProps {
  hint?: AmericanToBritishWithHint;
}
