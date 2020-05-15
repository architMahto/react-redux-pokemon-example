import { call, put } from 'redux-saga/effects';

import {
  getPokemonListSuccess,
  getPokemonListError,
  getSelectedPokemonInfoSuccess,
  getSelectedPokemonInfoError
} from '../Actions/pokemonStateActions';
import { buildPokemonList, buildSelectedPokemonInfo } from '../../Models/pokemonState';
import PokemonService from '../../Services/pokemonService';

export function* onGetPokemonList(action) {
  try {
    let response = yield call(PokemonService.retrievePokemon);
    yield put(getPokemonListSuccess(
      buildPokemonList(response['results'])
    ));
  } catch (err) {
    yield put(getPokemonListError(err));
  }
};

export function* onGetSelectedPokemonInfo(action) {
  try {
    let response = yield call(PokemonService.retrievePokemonByName, action.pokemonName);
    yield put(getSelectedPokemonInfoSuccess(
      buildSelectedPokemonInfo(response)
    ));
  } catch (err) {
    yield put(getSelectedPokemonInfoError(err));
  }
};
