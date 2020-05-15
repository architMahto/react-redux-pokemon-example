import { all, takeLatest } from 'redux-saga/effects';

import {
  GET_POKEMON_LIST,
  GET_SELECTED_POKEMON_INFO,
  GET_SELECTED_POKEMON_SPECIES_INFO
} from './Actions/pokemonStateActions';

import {
  onGetPokemonList,
  onGetSelectedPokemonInfo,
  onGetSelectedPokemonSpeciesInfo
} from './Sagas/pokemonStateSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_POKEMON_LIST, onGetPokemonList),
    takeLatest(GET_SELECTED_POKEMON_INFO, onGetSelectedPokemonInfo),
    takeLatest(GET_SELECTED_POKEMON_SPECIES_INFO, onGetSelectedPokemonSpeciesInfo)
  ]);
}
