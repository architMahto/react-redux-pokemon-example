export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS';
export const GET_POKEMON_LIST_ERROR = 'GET_POKEMON_LIST_ERROR';

export const getPokemonList = () => {
  return { type: GET_POKEMON_LIST };
};

export const getPokemonListSuccess = (result) => {
  return { type: GET_POKEMON_LIST_SUCCESS, result };
};

export const getPokemonListError = (error) => {
  return { type: GET_POKEMON_LIST_ERROR, error }
};
