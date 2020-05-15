import { all, takeLatest } from 'redux-saga/effects';

import { GET_POKEMON } from './Actions/pokemonStateActions';

import { onGetPokemon } from './Sagas/pokemonStateSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_POKEMON, onGetPokemon)
  ]);
}
