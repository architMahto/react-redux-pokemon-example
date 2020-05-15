import { createDefaultPokemonState } from '../../Models/pokemonState';
import {
  updateLoadableOnStart,
  updateLoadableOnSuccess,
  updateLoadableOnError
} from '../../Models/loadable';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_ERROR,
  GET_SELECTED_POKEMON_INFO,
  GET_SELECTED_POKEMON_INFO_SUCCESS,
  GET_SELECTED_POKEMON_INFO_ERROR,
  GET_SELECTED_POKEMON_SPECIES_INFO,
  GET_SELECTED_POKEMON_SPECIES_INFO_SUCCESS,
  GET_SELECTED_POKEMON_SPECIES_INFO_ERROR
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

    case GET_SELECTED_POKEMON_INFO:
      return {
        ...state,
        getSelectedPokemonInfoLoadable: updateLoadableOnStart()
      };

    case GET_SELECTED_POKEMON_INFO_SUCCESS:
      return {
        ...state,
        selectedPokemonInfo: {
          ...state.selectedPokemonInfo,
          ...action.result
        },
        getSelectedPokemonInfoLoadable: updateLoadableOnSuccess()
      };

    case GET_SELECTED_POKEMON_INFO_ERROR:
      return {
        ...state,
        getSelectedPokemonInfoLoadable: updateLoadableOnError(action.error)
      };

      case GET_SELECTED_POKEMON_SPECIES_INFO:
        return {
          ...state,
          getSelectedPokemonSpeciesInfoLoadable: updateLoadableOnStart()
        };

      case GET_SELECTED_POKEMON_SPECIES_INFO_SUCCESS:
        return {
          ...state,
          selectedPokemonInfo: {
            ...state.selectedPokemonInfo,
            description: action.result
          },
          getSelectedPokemonSpeciesInfoLoadable: updateLoadableOnSuccess()
        };

      case GET_SELECTED_POKEMON_SPECIES_INFO_ERROR:
        return {
          ...state,
          getSelectedPokemonSpeciesInfoLoadable: updateLoadableOnError(action.error)
        };

    default:
      return state;
  };
};
