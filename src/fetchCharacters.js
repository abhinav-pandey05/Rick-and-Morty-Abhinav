// import {fetchCharactersPending, fetchCharactersSuccess, fetchCharactersError} from './actions';
import {fetchCharactersSuccess} from './actions';
import {showAllCharacters} from './actions';

function fetchCharacters() {
    return dispatch => {
        // dispatch(fetchCharactersPending());
        fetch("https://rickandmortyapi.com/api/character/", {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCharactersSuccess(res.results));
            dispatch(showAllCharacters(res.results));

            return res.results;
        })
        // .catch(error => {
        //     dispatch(fetchCharactersError(error));
        // })
    }
}

export default fetchCharacters;