import React, {Component} from 'react';
import Character from './Character';
class CharactersGrid extends Component {

    render() {
        if(this.props.characters) {
            return(
                <section className = "characters-grid">
                    {this.props.characters.map((character, i) => <Character {...this.props.characters[i]} key = {i} i = {i} character = {character}/>)}
                </section>
            )
        }
        else 
        return(
            <p>still loading</p>
        )
    }
}

export default CharactersGrid;