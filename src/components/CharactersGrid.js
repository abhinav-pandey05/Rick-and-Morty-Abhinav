import React from 'react';
import Character from './Character';

const CharactersGrid = props => {

        if(props.characters) {
            return(
                <section className = "characters-grid">
                    {props.characters.map((character, i) => <Character {...props.characters[i]} key = {i} i = {i} character = {character}/>)}
                </section>
            )
        }
        else 
        return(
            <p>still loading</p>
        )
}

export default CharactersGrid;