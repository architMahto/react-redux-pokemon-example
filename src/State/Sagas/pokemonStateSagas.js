import { call, put } from 'redux-saga/effects';
import { getPokemonSuccess, getPokemonError } from '../Actions/pokemonStateActions';

const PokedexWrapper = require('pokeapi-js-wrapper');
const Pokedex = new PokedexWrapper.Pokedex();

export function* onGetPokemon(action) {
  try {
    let response = yield call(Pokedex.getPokemonByName, 'charmander');
    yield put(getPokemonSuccess(response));
  } catch (err) {
    console.log('err:', err);
    yield put(getPokemonError(err));
  }
};
