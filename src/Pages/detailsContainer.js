import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonState } from '../State/Selectors/pokemonStateSelectors';
import { getSelectedPokemonInfo } from '../State/Actions/pokemonStateActions';

import { Details } from './details';

import WithLoading from '../Components/withLoading';

const DetailsWithLoading = WithLoading(Details);

export const DetailsContainer = ({ match }) => {
  const pokemonState = useSelector(getPokemonState);
  const dispatch = useDispatch();
  const { params } = match;

  useEffect(() => {
    if (!pokemonState.getSelectedPokemonInfoLoadable.isSuccessful
      || pokemonState.selectedPokemonInfo['name'] !== params['id']) {
      dispatch(getSelectedPokemonInfo(params['id']));
    }
  }, []);

  return (
    <div className="App-Page">
      <DetailsWithLoading
        loadable={pokemonState.getSelectedPokemonInfoLoadable}
        selectedPokemonInfo={pokemonState.selectedPokemonInfo}
      />
    </div>
  );
};
