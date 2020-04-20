import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchFilters from '../fetchFilters';
import {getGenderFilterState, getSpeciesFilterState, getOriginFilterState} from '../Reducers/filterActionsReducer';
class Filters extends Component {

    render() {
        // console.log("inside filters >>>",this.props);
        return(
            <section className = "filters">
                <h2 className = "heading">Filters</h2>
                <div className = "species filterType">
                    <h3 className = "heading">Species</h3>
                    <div className = "human item">
                        <input type = "checkbox" value = "Human" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Human</label>
                    </div>
                    <div className = "mytholog item">
                        <input type = "checkbox" value = "Alien" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Alien</label>
                    </div>
                    {/* <div className = "otherSpecies item">
                        <input type = "checkbox"></input>
                        <label>Other Species</label>
                    </div> */}
                </div>
                <div className = "gender filterType">
                    <h3 className = "heading">Gender</h3>
                    <div className = "male item">
                        <input type = "checkbox" value = "Male" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Male</label>
                    </div>
                    <div className = "female item">
                        <input type = "checkbox" value = "Female" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Female</label>
                    </div>
                </div>
                <div className = "origin filterType">
                    <h3 className = "heading">Origin</h3>
                    <div className = "unknown item">
                        <input type = "checkbox" value = "unknown" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>unknown</label>
                    </div>
                    <div className = "postApocalyptic item">
                        <input type = "checkbox" value = "Earth (Replacement Dimension)" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Earth(New Dimension)</label>
                    </div>
                    <div className = "nuptia item">
                        <input type = "checkbox" value = "Earth (C-137)" onClick={(e) => this.props.fetchFilters(e)}></input>
                        <label>Earth (C-137)</label>
                    </div>
                    {/* <div className = "otherOrigins item">
                        <input type = "checkbox"></input>
                        <label>otherOrigins</label>
                    </div> */}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    genderFilter: getGenderFilterState(state),
    speciesFilterData: getSpeciesFilterState(state),
    originFilterData: getOriginFilterState(state),
})
const mapDispatchToProps = {
    fetchFilters: fetchFilters,
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);
