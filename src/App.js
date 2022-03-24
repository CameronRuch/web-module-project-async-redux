import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getQuote } from './actions/animeActions'


const App = props => {

  const fetchQuote = e => {
    e.preventDefault();
    props.getQuote()
  }

  return (
    <div className="App">
      <h1>Random Anime Quote</h1>
        <p>{props.anime}</p>
        <p>{props.character}</p>
        <p>{props.quote}</p>
      <button onClick={fetchQuote}>Press for Quote!</button>


    </div>
  );
}

const mapStateToProps = state => ({
    anime: state.anime,
    character: state.character,
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
})

export default connect(mapStateToProps, { getQuote })(App);