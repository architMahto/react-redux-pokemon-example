import { call, put } from 'redux-saga/effects';
import { getPokemonSuccess, getPokemonError } from '../Actions/pokemonStateActions';
import PokemonService from '../../Services/pokemonService';

export function* onGetPokemon(action) {
  try {
    let response = yield call(PokemonService.retrievePokemon);
    yield put(getPokemonSuccess(response['results']));
  } catch (err) {
    yield put(getPokemonError(err));
  }
};
