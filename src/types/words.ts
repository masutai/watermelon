export interface Word {
	name: string;
	description_eng: string;
	type:
		| "Noun"
		| "Verb"
		| "Adjective"
		| "Adverb"
		| "Preposition"
		| "Conjunction"
		| "Interjection"
		| "Other";
	description_ja?: string;
	region?: "World" | "American" | "British" | "Australian" | "Other";
	american_accent?: string;
	british_accent?: string;
	australian_accent?: string;
	american_spelling?: string;
	british_spelling?: string;
	australian_spelling?: string;
	phenetic_symbol?: string;
	katakana?: string;
}
