import React, {Component} from 'react';
import CharactersGrid from './CharactersGrid';
import SortDropdown from './SortDropdown';

function ActionArea(props) {
    // render() {
        // console.log("Action Area >>", this.props.characters);
        return(
            <div className = "actionArea">
                <div className = "selectedFilters">
                    <h2 className = "heading"> Selected Filters</h2>
                </div>
                <div className = "seachAndSort">
                    <SortDropdown title = "Sort by ID" characters = {props.characters} />
                </div>
                {
                    props.characters.length ? <CharactersGrid characters = {props.characters} /> : "No Characters found"
                }
            </div>
        )
}

export default ActionArea;