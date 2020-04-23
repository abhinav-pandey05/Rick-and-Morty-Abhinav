import {getSortingType, fetchCharactersSuccess, showAllCharacters}  from './actions';

function sortById(sortBy, characters) {
    return (dispatch, getState) => {
        var sortedArray = [];
        dispatch(getSortingType(sortBy));
            if(sortBy === "Descending"){
                sortedArray = characters.slice().sort((a,b)=> {
                    return(b.id - a.id)
                });
            }
            else {
                sortedArray =  characters.slice().sort((a,b)=> {
                    return(a.id - b.id)
                });
            }
            dispatch(fetchCharactersSuccess(sortedArray));
            dispatch(showAllCharacters(sortedArray));

            return sortBy;
        }
}

export default sortById;