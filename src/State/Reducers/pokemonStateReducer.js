import { createDefaultPokemonState } from '../../Models/pokemonState';
import {
  updateLoadableOnStart,
  updateLoadableOnSuccess,
  updateLoadableOnError
} from '../../Models/loadable';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_ERROR
} from '../Actions/pokemonStateActions';

export default function pokemonStateReducer(state = createDefaultPokemonState(), action) {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return {
        ...state,
        getPokemonListLoadable: updateLoadableOnStart()
      };

    case GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        entities: action.result,
        getPokemonListLoadable: updateLoadableOnSuccess()
      };

    case GET_POKEMON_LIST_ERROR:
      return {
        ...state,
        getPokemonListLoadable: updateLoadableOnError(action.error)
      };

    default:
      return state;
  };
};
