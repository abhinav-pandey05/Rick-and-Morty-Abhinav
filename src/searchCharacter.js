import {getSortingType, fetchCharactersSuccess, showAllCharacters}  from './actions';

function serachCharacter(event, characters) {
    let searchResult;
    return (dispatch, getState) => {
        let searchWith = event.target.value.toLowerCase();
        console.log(characters);
        searchResult = characters.filter((character) => {
            return character.name.toLowerCase().indexOf(searchWith) !== -1;
        });
        console.log("searchResult is >>", searchResult)
        dispatch(fetchCharactersSuccess(searchResult));
        dispatch(showAllCharacters(searchResult));
        }
}

export default serachCharacter;