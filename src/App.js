import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonState } from './State/Selectors/pokemonStateSelectors';
import { getPokemon } from './State/Actions/pokemonStateActions';

import logo from './logo.svg';
import './App.css';

function App() {
  const pokemonState = useSelector(getPokemonState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemonState.getPokemonLoadable.isReceived) {
      dispatch(getPokemon())
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
