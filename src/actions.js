
export const FETCH_CHARACTERS_PENDING = 'FETCH_CHARACTERS_PENDING';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const ADD_GENDER_FILTER = 'ADD_GENDER_FILTER'; 
export const ADD_SPECIES_FILTER = 'ADD_SPECIES_FILTER'; 
export const ADD_ORIGIN_FILTER = 'ADD_ORIGIN_FILTER';

export const REMOVE_GENDER_FILTER = 'REMOVE_GENDER_FILTER';
export const REMOVE_SPECIES_FILTER = 'REMOVE_SPECIES_FILTER';
export const REMOVE_ORIGIN_FILTER = 'REMOVE_ORIGIN_FILTER';
export const SHOW_FILTERED_CHARACTERS = 'SHOW_FILTERED_CHARACTERS';
export const SHOW_ALL_CHARACTERS = 'SHOW_ALL_CHARACTERS';
export const SORT_CHARACTERS = 'SORT_CHARACTERS';

export function fetchCharactersPending() {
    return {
        type: FETCH_CHARACTERS_PENDING
    }
}

export function fetchCharactersSuccess(characters) {
    console.log("caharacter are >", characters);
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        characters: characters
    }
}

export function fetchCharactersError(error) {
    return {
        type: FETCH_CHARACTERS_ERROR,
        error: error
    }
}

export function addGenderFilter(gender) { 
    // console.log("called > ",gender );
    return {
        type: ADD_GENDER_FILTER,
        gender: gender
    }
};
export function addSpeciesFilter(species){ 
    return { 
        type: ADD_SPECIES_FILTER,
        species
    }
};
export function addOriginFilter(origin){
    return {
        type: ADD_ORIGIN_FILTER,
        origin
    }
};

export function removeGenderFilter(gender){
    return {
        type: REMOVE_GENDER_FILTER,
        gender
    }
};
export function removeSpeciesFilter(species){
    return {
        type: REMOVE_SPECIES_FILTER,
        species
    }
};
export function removeOriginFilter(origin){
    return {
        type: REMOVE_ORIGIN_FILTER,
        origin
    }
};
export function showFilteredData(totalCharacters,appliedFilters){
    return {
        type: SHOW_FILTERED_CHARACTERS,
        characters: totalCharacters,
        appliedFilters: appliedFilters
    }
};
export function showAllCharacters(allCharacters){
    return {
        type: SHOW_ALL_CHARACTERS,
        allCharacters: allCharacters,
        
    }
};
// export function sortData(sortType, characters){
//     console.log(characters);
//     return {
//         type: SORT_CHARACTERS,
//         characters: characters,
        
//     }
// };