import { InitialStateType, ActionType } from 'interfaces'
import { ActionConstent } from 'constants/store'
import initialState from 'store/states';

const reducer = (state: InitialStateType, actions: ActionType): InitialStateType => {
    switch (actions.type) {
        case ActionConstent.SET_RESULTS:
            return {
                ...state,
                results: actions.payload
            }
        case ActionConstent.UPDATE_RESULT:
            initialState.results = [...state.results];
            let index = initialState.results.findIndex(result => result.id === actions.payload.id);
            initialState.results[index] = {
                ...initialState.results[index],
                ...actions.payload
            }
            return {
                ...state,
                results: initialState.results
            }
        case ActionConstent.SET_AUTOCOMPLETE_WORDS:
            return {
                ...state,
                autocomplete: {
                    ...state.autocomplete,
                    words: actions.payload
                }
            }
        case ActionConstent.SET_KEYWORD:
            return {
                ...state,
                keyword: actions.payload
            }
        default:
            return state
    }
}

export default reducer