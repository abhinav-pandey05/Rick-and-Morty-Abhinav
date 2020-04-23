import React, {Component} from 'react';
// import Character from './Character';
class Character extends Component {

    render() {
        const {id, name, status, species, gender, image, origin, location} = this.props;
        return(
            <div className = "card">
                 <div className = "card-header">
                    <img src = {image} alt = "My card {id}" className = "card-photo" />
                    <span className = "card-title">
                        <h3>{name}</h3>
                        <p className = "title-details">id:{id} </p>
                    </span>
                 </div>
                 <div className = "card-content">
                    <div className = "content-row">
                        <label>STATUS:</label>
                        <label className = "prop-value">{status}</label>
                    </div>
                    <div className = "content-row">
                        <label className = "prop-name">SPECIES</label>
                        <label className = "prop-value">{species}</label>
                    </div>
                    <div className = "content-row">
                        <label className = "prop-name">GENDER</label>
                        <label className = "prop-value">{gender}</label>
                    </div>
                    <div className = "content-row">
                        <label className = "prop-name">ORIGIN</label>
                        <label className = "prop-value">{origin.name}</label>
                    </div>
                    <div className = "content-row">
                        <label className = "prop-name">LOCATION</label>
                        <label className = "prop-value">{location.name}</label>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Character;