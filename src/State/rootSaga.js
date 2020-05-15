import { all, takeLatest } from 'redux-saga/effects';

import { GET_POKEMON_LIST } from './Actions/pokemonStateActions';

import { onGetPokemonList } from './Sagas/pokemonStateSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_POKEMON_LIST, onGetPokemonList)
  ]);
}
