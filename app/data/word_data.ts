
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import invariant from "tiny-invariant";

type WordMutation = {
    id?: number;
    name?: string;
    explicit?: boolean;
};

type WordRecord = WordMutation & {

};

//mock db
// const servedWords = {
//     records: {} as Record<number, WordRecord>,
//
//     async getAll(): Promise<WordRecord[]> {
//
//     }
// }