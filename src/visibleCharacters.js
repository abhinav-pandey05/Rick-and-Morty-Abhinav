// import {fetchCharactersPending, fetchCharactersSuccess, fetchCharactersError} from './actions';
// import {fetchCharactersSuccess} from './actions';

function visibleCharacters(characters, appliedFilters) {
    console.log("{characters, filtersApplied } >>", characters.allCharacters );

    // no filters
    if (appliedFilters.genderFilter.length === 0 && appliedFilters.speciesFilter.length === 0 && appliedFilters.originFilter.length === 0) {
        
        return characters.allCharacters;
    } 
    // only origin appliedFilters
    else if (appliedFilters.genderFilter.length === 0 && appliedFilters.speciesFilter.length === 0 && appliedFilters.originFilter.length !== 0) {
        console.log(characters);
        var filteredCharacters1 = [];
        characters.allCharacters.forEach(r => {
            if (appliedFilters.originFilter.indexOf(r.origin.name) !== -1) {
                filteredCharacters1.push(r);
                console.log(filteredCharacters1);
            }
        })
        return filteredCharacters1;
    }
    // gender, species, and origin appliedFilters
    else if (appliedFilters.genderFilter.length !== 0 && appliedFilters.speciesFilter.length !== 0 && appliedFilters.originFilter.length !== 0) {
        var filteredCharacters2 = [];
        characters.allCharacters.forEach(r => {
            if (appliedFilters.genderFilter.indexOf(r.gender) !== -1 && appliedFilters.speciesFilter.indexOf(r.species) !== -1  && appliedFilters.originFilter.indexOf(r.origin.name) !== -1) {
                filteredCharacters2.push(r)
            }
        })
        return filteredCharacters2;
    }
    // gender & species filters, no origin
    else if (appliedFilters.genderFilter.length !== 0 && appliedFilters.speciesFilter.length !== 0 && appliedFilters.originFilter.length === 0) {
        var filteredCharacters3 = [];
        characters.allCharacters.forEach(r => {
          if (appliedFilters.genderFilter.indexOf(r.gender) !== -1 && appliedFilters.speciesFilter.indexOf(r.species) !== -1) {
            filteredCharacters3.push(r);
          }
        })
        return filteredCharacters3;
    }
    // gender & origin filters
    else if (appliedFilters.genderFilter.length !== 0 && appliedFilters.originFilter.length !== 0) {
        var filteredCharacters4 = []
        characters.allCharacters.forEach(r => {
          if (appliedFilters.genderFilter.indexOf(r.gender) !== -1  && appliedFilters.originFilter.indexOf(r.origin.name) !== -1) {
            filteredCharacters4.push(r);
          }
        })
        return filteredCharacters4;
    }
    // gender filter only
    else if (appliedFilters.genderFilter.length !== 0 && appliedFilters.speciesFilter.length === 0 && appliedFilters.originFilter.length === 0) {
        var filteredCharacters5 = [];
        characters.allCharacters.forEach(r => {
          if (appliedFilters.genderFilter.indexOf(r.gender) !== -1) {
            filteredCharacters5.push(r)
          }
        })
        console.log("filteredCharacters5 >>>", filteredCharacters5);
        return filteredCharacters5;
    }
    // species and origin filter
    else if (appliedFilters.speciesFilter.length !== 0 && appliedFilters.originFilter.length !== 0){
        var filteredCharacters6 = [];
        characters.allCharacters.forEach(r => {
          if (appliedFilters.speciesFilter.indexOf(r.species) !== -1   && appliedFilters.originFilter.indexOf(r.origin.name) !== -1) {
            filteredCharacters6.push(r);
          }
        })
        return filteredCharacters6;
    }
    // species filter only
    else {
        var filteredCharacters7 = [];
        characters.allCharacters.forEach(r => {
          if (appliedFilters.speciesFilter.indexOf(r.species) !== -1) {
            filteredCharacters7.push(r);
          }
        })
        return filteredCharacters7;
      }
}
export default visibleCharacters;