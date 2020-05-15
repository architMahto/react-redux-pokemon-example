import { createDefaultPokemonState } from '../../Models/pokemonState';
import {
  updateLoadableOnStart,
  updateLoadableOnSuccess,
  updateLoadableOnError
} from '../../Models/loadable';
import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR
} from '../Actions/pokemonStateActions';

export default function pokemonStateReducer(state = createDefaultPokemonState(), action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        getPokemonLoadable: updateLoadableOnStart()
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        entities: action.result,
        getPokemonLoadable: updateLoadableOnSuccess()
      };

    case GET_POKEMON_ERROR:
      return {
        ...state,
        getPokemonLoadable: updateLoadableOnError(action.error)
      };

    default:
      return state;
  };
};
