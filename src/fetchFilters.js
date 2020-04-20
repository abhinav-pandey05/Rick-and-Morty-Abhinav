import {addGenderFilter, addSpeciesFilter, addOriginFilter, removeGenderFilter, removeSpeciesFilter, removeOriginFilter, fetchCharactersSuccess} from './actions';
import visibleCharacters from './visibleCharacters';
function fetchFilters(e) {

    return (dispatch, getState) => {
        
        let appliedFilter = e.target;
        let appliedFilterValue = e.target.value;

        switch(appliedFilterValue) {
            case "Male":
                appliedFilter.checked ? dispatch(addGenderFilter(appliedFilterValue)) : dispatch(removeGenderFilter(appliedFilterValue));
            break;
            case "Female":
                appliedFilter.checked ? dispatch(addGenderFilter(appliedFilterValue)) : dispatch(removeGenderFilter(appliedFilterValue));
            break;
            case "Human":
                appliedFilter.checked ? dispatch(addSpeciesFilter(appliedFilterValue)) : dispatch(removeSpeciesFilter(appliedFilterValue));
            break;
            case "Alien":
                appliedFilter.checked ? dispatch(addSpeciesFilter(appliedFilterValue)) : dispatch(removeSpeciesFilter(appliedFilterValue));
            break;
            case "unknown":
                appliedFilter.checked ? dispatch(addOriginFilter(appliedFilterValue)) : dispatch(removeOriginFilter(appliedFilterValue));
            break;
            case "Earth (Replacement Dimension)":
                appliedFilter.checked ? dispatch(addOriginFilter(appliedFilterValue)) : dispatch(removeOriginFilter(appliedFilterValue));
            break;
            case "Earth (C-137)":
                appliedFilter.checked ? dispatch(addOriginFilter(appliedFilterValue)) : dispatch(removeOriginFilter(appliedFilterValue));
            break;          
            default:
            break;
        }

        const appliedFilters = getState().filterActionsReducer;
        const totalCharacters = getState().charactersReducer;
        let charactersData =  visibleCharacters(totalCharacters,appliedFilters);
        dispatch(fetchCharactersSuccess(charactersData));
        return e.target.value;
    }
}

export default fetchFilters;