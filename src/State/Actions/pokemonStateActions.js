export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_ERROR = 'GET_POKEMON_ERROR';

export const getPokemon = () => {
  return { type: GET_POKEMON };
};

export const getPokemonSuccess = (result) => {
  return { type: GET_POKEMON_SUCCESS, result };
};

export const getPokemonError = (error) => {
  return { type: GET_POKEMON_ERROR, error }
};
