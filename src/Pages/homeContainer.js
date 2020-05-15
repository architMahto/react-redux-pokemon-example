import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonState } from '../State/Selectors/pokemonStateSelectors';
import { getPokemon } from '../State/Actions/pokemonStateActions';

import { Home } from './home';

import WithLoading from '../Components/withLoading';

const HomeWithLoading = WithLoading(Home);

export const HomeContainer = () => {
  const pokemonState = useSelector(getPokemonState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemonState.getPokemonLoadable.isReceived) {
      dispatch(getPokemon());
    }
  }, []);

  return (
    <div className="App-Page">
      <HomeWithLoading
        loadable={pokemonState.getPokemonLoadable}
        pokemonList={pokemonState.entities}
      />
    </div>
  )
};
