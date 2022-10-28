import { ActionConstent } from "constants/store";
import api from "endpoints/indext";
import { Result } from "interfaces";

export const setResults = async (payload: string) => {
    let results = await api.getResults(payload);
    console.log("results ==>", results);
    return { type: ActionConstent.SET_RESULTS, payload: results }
}

export const updateResult = (payload: Result) => {
    return { type: ActionConstent.UPDATE_RESULT, payload }
}

export const setAutocompleteWords = async (payload: string) => {
    let autocomplete = await api.getAutocomplete(payload);
    return { type: ActionConstent.SET_AUTOCOMPLETE_WORDS, payload: autocomplete }
}

export const setKeyword = (payload: string) => {
    return { type: ActionConstent.SET_KEYWORD, payload }
}
