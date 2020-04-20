import {sortData, fetchCharactersSuccess} from './actions';

function sortById(sortBy, characterSet) {
    return (dispatch, getState) => {
        var sortedArray = [];
            console.log("sortBy and charactersa are >>", getState());
            if(sortBy === "Descending"){
                sortedArray = characterSet.sort((a,b)=> {
                    return(b.id - a.id)
                });
            }
            else {
                sortedArray =  characterSet.sort((a,b)=> {
                    return(a.id - b.id)
                });
            }
            dispatch(fetchCharactersSuccess(sortedArray));
        }
}

export default sortById;