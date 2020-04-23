import React, {Component} from 'react';
import CharactersGrid from './CharactersGrid';
import sortById from '../sortById';
import searchCharacter from '../searchCharacter';
import { connect } from 'react-redux';
import {getCharactersError, getSortingType} from '../Reducers/reducers';



class ActionArea extends Component {
    render(){

        return(
            <div className = "action-area">
                <div className = "selected-filters">
                    <h2 className = "heading"> Selected Filters</h2>
                </div>
                <div className = "seachAndSort">
                    <div className = "searchbox">
                        <input id = "search-name"
                        type = "textbox" 
                        placeholder = "Search by Name"
                        onChange = {(e) => {this.props.searchCharacter(e, this.props.characters)}}>
                        </input>
                        <button value = "search">Search</button>
                    </div>
                    <div className = "sort-dropdown">                    
                        <select className="dropdown-content"
                            onChange = {(e) => {
                                this.props.sortById(e.target.value, this.props.characters);
                            }}>
                            <option value="" disabled selected hidden>Sort By ID:</option>
                            <option value = "Ascending" className="dropdown-list-item">Ascending</option>
                            <option value = "Descending" className="dropdown-list-item">Descending</option>
                        </select>
                    </div>
                </div>
                {
                    this.props.characters.length ? <CharactersGrid characters = {this.props.characters} /> : "No Characters found"
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    error: getCharactersError(state),
    getSortingType: getSortingType(state)
  })
  
  const mapDispatchToProps = {
    sortById: sortById,
    searchCharacter: searchCharacter
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActionArea);
  