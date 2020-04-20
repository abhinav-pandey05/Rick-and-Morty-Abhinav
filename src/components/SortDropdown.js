import React, {Component} from 'react';
import { connect } from 'react-redux';
import sortById from '../sortById';
import {getCharacters} from '../Reducers/reducers';

class SortDropdown extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    handleClickOutside(){
        this.setState({
            listOpen: false
        })
    }

    render() {
        return(
            <div className = "sort-dropdown">                    
                <select className="dropdown-content"
                    value = {this.props.title}
                    onChange = {(e) => {
                        this.props.sortById(e.target.value, this.props.characters);
                    }}>
                    <option value = "None" className="dropdown-list-item">Sort by ID:</option>
                    <option value = "Ascending" className="dropdown-list-item">Ascending</option>
                    <option value = "Descending" className="dropdown-list-item">Descending</option>
                </select>
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//     characters: getCharacters(state),
// })
const mapDispatchToProps = {
    sortById: sortById
  };


export default connect(null,mapDispatchToProps)(SortDropdown);