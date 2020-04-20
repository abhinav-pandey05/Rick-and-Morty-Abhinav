import React, {Component} from 'react';
import ActionArea from './ActionArea';
import Filters from './Filters';
import { connect } from 'react-redux';
import fetchCharacters from '../fetchCharacters';
import {getCharactersError, getCharacters, getCharactersPending} from '../Reducers/reducers';

class Main extends Component {

    componentDidMount() {
      const {fetchCharacters} = this.props;
      fetchCharacters();
    }

  render() {
    const {characters, error} = this.props;
      return (
        <div className = "main">
          <Filters characters = {characters}/>
          {error && <span className='product-list-error'>{error}</span>}
          <ActionArea characters = {characters}/>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  error: getCharactersError(state),
  characters: getCharacters(state),
  pending: getCharactersPending(state),
})

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
