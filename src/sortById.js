import {sortData, fetchCharactersSuccess} from './actions';

function sortById(sortBy, characters) {
    return (dispatch, getState) => {
        console.log(getState());
        var sortedArray = [];
            if(sortBy === "Descending"){
                sortedArray = characters.sort((a,b)=> {
                    return(b.id - a.id)
                });
            }
            else {
                sortedArray =  characters.sort((a,b)=> {
                    return(a.id - b.id)
                });
            }
            // console.log("sortedArray is", sortedArray);
            dispatch(fetchCharactersSuccess(sortedArray));
        }
}

export default sortById;