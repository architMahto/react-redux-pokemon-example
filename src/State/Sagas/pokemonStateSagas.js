import { call, put } from 'redux-saga/effects';
import { getPokemonListSuccess, getPokemonListError } from '../Actions/pokemonStateActions';
import PokemonService from '../../Services/pokemonService';

export function* onGetPokemonList(action) {
  try {
    let response = yield call(PokemonService.retrievePokemon);
    yield put(getPokemonListSuccess(response['results']));
  } catch (err) {
    yield put(getPokemonListError(err));
  }
};
