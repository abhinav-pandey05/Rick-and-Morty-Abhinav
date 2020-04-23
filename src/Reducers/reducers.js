import {FETCH_CHARACTERS_PENDING, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, SHOW_FILTERED_CHARACTERS, SHOW_ALL_CHARACTERS, GET_SORTING_TYPE} from '../actions';

const initialState = {
    characters: [],
    pending: false,
    error: null,
    allCharacters: [],
    sortingType: null
}

export default function charactersReducer(state = initialState, action) {
    switch(action.type) {
    case FETCH_CHARACTERS_PENDING: 
        return {
            ...state,
            pending: true
        }
        case FETCH_CHARACTERS_SUCCESS:
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
            case GET_SORTING_TYPE:
                return {
                    ...state,
                    sortingType: action.sortingType
                }
            default: 
            return state;
    }
}
export const getCharacters = state => {
    return  state.charactersReducer.characters
};
export const getCharactersPending = state => state.pending;
export const getCharactersError = state => state.error;
export const getSortingType = state => state.sortingType;