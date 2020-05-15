import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import { getPokemonState } from './State/Selectors/pokemonStateSelectors';
import { getPokemon } from './State/Actions/pokemonStateActions';

import './App.css';

function App() {
  const pokemonState = useSelector(getPokemonState);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!pokemonState.getPokemonLoadable.isReceived) {
      dispatch(getPokemon())
    }
  }, []);

  return (
    <div className="App">
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Pokédex</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
}

export default App;
