import { ActionConstent } from "constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface Autocomplete {
    words: string[]
}

export interface Result {
    id?: number
    title?: string
    body?: string
    userId?: number
}

export interface InitialStateType {
    results: Result[]
    autocomplete: Autocomplete
    keyword: string
}