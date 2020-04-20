import {ADD_GENDER_FILTER, ADD_SPECIES_FILTER, ADD_ORIGIN_FILTER, REMOVE_GENDER_FILTER, REMOVE_SPECIES_FILTER, REMOVE_ORIGIN_FILTER, SHOW_FILTERED_CHARACTERS} from '../actions';

const initialActionState = {
    genderFilter: [],
    speciesFilter: [],
    originFilter: [],
}
export default function filterActionsReducer(state = initialActionState, action) {
    switch(action.type) {
    case ADD_GENDER_FILTER: 
        return {
            ...state, 
            genderFilter: [...state.genderFilter, action.gender],
        }
    case ADD_SPECIES_FILTER:
        return {
            ...state,
            speciesFilter: [...state.speciesFilter, action.species],
            }
    case ADD_ORIGIN_FILTER:
        return {
            ...state,
            originFilter: [...state.originFilter, action.origin]
            }
        case REMOVE_GENDER_FILTER:
            const newGenderFilter = state.genderFilter.filter((item) => item !== action.gender);
            console.log("newGenderFilter >", newGenderFilter);
             return {
                 ...state,
                genderFilter: newGenderFilter,
            }
        case REMOVE_SPECIES_FILTER:
            const newSpeciesFilter = state.speciesFilter.filter((item) => item !== action.species);
            return {
                ...state,
                speciesFilter: newSpeciesFilter,
            }
        case REMOVE_ORIGIN_FILTER:
            const newOriginFilter = state.originFilter.filter((item) => item !== action.origin);
            return {
                ...state,
                originFilter: newOriginFilter,
            }
        default: 
            return state;
    }
}
export const getGenderFilterState = state => state.filterActionsReducer.genderFilter;
export const getSpeciesFilterState = state => state.filterActionsReducer.speciesFilter;
export const getOriginFilterState = state => state.filterActionsReducer.originFilter;
