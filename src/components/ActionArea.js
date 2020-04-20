import React, {Component} from 'react';
import CharactersGrid from './CharactersGrid';
import SortDropdown from './SortDropdown';

class ActionArea extends Component {
    render() {
        console.log("Action Area >>", this.props.characters);
        return(
            <div className = "actionArea">
                <div className = "selectedFilters">
                    <h2 className = "heading"> Selected Filters</h2>
                </div>
                <div className = "seachAndSort">
                    <SortDropdown title = "Sort by ID" characters = {this.props.characters} />
                </div>
                {
                    this.props.characters.length ? <CharactersGrid characters = {this.props.characters} /> : "No Characters found"
                }
            </div>
        )
    }
}

export default ActionArea;