
export type Word = {
    word_id: string,
    name: string,
    explicit: boolean,
    stems?: string[],
    synonyms?: string[],
    antonyms?: string[]
}
