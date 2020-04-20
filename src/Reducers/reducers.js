import {FETCH_CHARACTERS_PENDING, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, SHOW_FILTERED_CHARACTERS, SHOW_ALL_CHARACTERS, SORT_CHARACTERS} from '../actions';

const initialState = {
    characters: [],
    pending: false,
    error: null,
    allCharacters: [],
    // sortedData: []
}

export default function charactersReducer(state = initialState, action) {
    switch(action.type) {
    case FETCH_CHARACTERS_PENDING: 
        return {
            ...state,
            pending: true
        }
        case FETCH_CHARACTERS_SUCCESS:
            console.log("my state is ..", action.characters);
            return {
                ...state,
                characters: action.characters

            }
            case FETCH_CHARACTERS_ERROR:
                return {
                    ...state,
                    error: action.error
                }
            case SHOW_FILTERED_CHARACTERS:
                return {
                    ...state,
                    error: action.error
                }
            case SHOW_ALL_CHARACTERS:
                return {
                    ...state,
                    allCharacters: action.allCharacters
                }
            // case SORT_CHARACTERS:
            //     console.log("action.allcharacers", action.characters);
            //     return {
            //         ...state,
            //         characters: action.characters
            //     }
            default: 
            return state;
    }
}
export const getCharacters = state => {
    console.log("get characters value",state.charactersReducer.characters);
    return  state.charactersReducer.characters
};
export const getCharactersPending = state => state.pending;
export const getCharactersError = state => state.error;