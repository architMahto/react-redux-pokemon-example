import { call, put } from 'redux-saga/effects';

import {
  getPokemonListSuccess,
  getPokemonListError,
  getSelectedPokemonInfoSuccess,
  getSelectedPokemonInfoError,
  getSelectedPokemonSpeciesInfoSuccess,
  getSelectedPokemonSpeciesInfoError
} from '../Actions/pokemonStateActions';
import { buildPokemonList, buildSelectedPokemonInfo, buildLatestDescription } from '../../Models/pokemonState';
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
    let response = yield call(PokemonService.retrievePokemonInfoByName, action.pokemonName);
    yield put(getSelectedPokemonInfoSuccess(
      buildSelectedPokemonInfo(response)
    ));
  } catch (err) {
    yield put(getSelectedPokemonInfoError(err));
  }
};

export function* onGetSelectedPokemonSpeciesInfo(action) {
  try {
    let response = yield call(PokemonService.retrievePokemonSpeciesInfoByName, action.pokemonName);
    yield put(getSelectedPokemonSpeciesInfoSuccess(
      buildLatestDescription(response)
    ));
  } catch (err) {
    yield put(getSelectedPokemonSpeciesInfoError(err));
  }
};
