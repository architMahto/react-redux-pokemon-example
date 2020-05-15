import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonState } from '../State/Selectors/pokemonStateSelectors';
import {
  getSelectedPokemonInfo,
  getSelectedPokemonSpeciesInfo
} from '../State/Actions/pokemonStateActions';

import { Details } from './details';

import WithLoading from '../Components/withLoading';
import WithMultipleLoading from '../Components/withMultipleLoading';

const DetailsWithLoading = WithMultipleLoading(Details);

export const DetailsContainer = ({ match }) => {
  const pokemonState = useSelector(getPokemonState);
  const dispatch = useDispatch();
  const { params } = match;
  const detailsPageLoadables = [
    pokemonState.getSelectedPokemonInfoLoadable,
    pokemonState.getSelectedPokemonSpeciesInfoLoadable
  ]

  useEffect(() => {
    if (!pokemonState.getSelectedPokemonInfoLoadable.isSuccessful
      || pokemonState.selectedPokemonInfo['name'] !== params['id']) {
      dispatch(getSelectedPokemonInfo(params['id']));
      dispatch(getSelectedPokemonSpeciesInfo(params['id']));
    }
  }, []);

  return (
    <div className="App-Page">
      <DetailsWithLoading
        loadables={detailsPageLoadables}
        selectedPokemonInfo={pokemonState.selectedPokemonInfo}
      />
    </div>
  );
};
