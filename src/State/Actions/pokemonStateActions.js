export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS';
export const GET_POKEMON_LIST_ERROR = 'GET_POKEMON_LIST_ERROR';

export const GET_SELECTED_POKEMON_INFO = 'GET_SELECTED_POKEMON_INFO';
export const GET_SELECTED_POKEMON_INFO_SUCCESS = 'GET_SELECTED_POKEMON_SUCCESS';
export const GET_SELECTED_POKEMON_INFO_ERROR = 'GET_SELECTED_POKEMON_ERROR';

export const GET_SELECTED_POKEMON_SPECIES_INFO = 'GET_SELECTED_POKEMON_SPECIES_INFO';
export const GET_SELECTED_POKEMON_SPECIES_INFO_SUCCESS = 'GET_SELECTED_POKEMON_SPECIES_INFO_SUCCESS';
export const GET_SELECTED_POKEMON_SPECIES_INFO_ERROR = 'GET_SELECTED_POKEMON_SPECIES_INFO_ERROR';

export const getPokemonList = () => {
  return { type: GET_POKEMON_LIST };
};

export const getPokemonListSuccess = (result) => {
  return { type: GET_POKEMON_LIST_SUCCESS, result };
};

export const getPokemonListError = (error) => {
  return { type: GET_POKEMON_LIST_ERROR, error };
};

export const getSelectedPokemonInfo = (pokemonName) => {
  return { type: GET_SELECTED_POKEMON_INFO, pokemonName };
}

export const getSelectedPokemonInfoSuccess = (result) => {
  return { type: GET_SELECTED_POKEMON_INFO_SUCCESS, result };
}

export const getSelectedPokemonInfoError = (error) => {
  return { type: GET_SELECTED_POKEMON_INFO_ERROR, error };
}

export const getSelectedPokemonSpeciesInfo = (pokemonName) => {
  return { type: GET_SELECTED_POKEMON_SPECIES_INFO, pokemonName };
}

export const getSelectedPokemonSpeciesInfoSuccess = (result) => {
  return { type: GET_SELECTED_POKEMON_SPECIES_INFO_SUCCESS, result };
}

export const getSelectedPokemonSpeciesInfoError = (error) => {
  return { type: GET_SELECTED_POKEMON_SPECIES_INFO_ERROR, error };
}
