import queryString from 'query-string';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

export default class PokemonService {
  static async retrievePokemon(pokemonView={limit: 150}) {
    const pokemonViewQueryString = queryString.stringify(pokemonView);

    return fetch(`${BASE_API_URL}/pokemon/?${pokemonViewQueryString}`)
      .then(response => response.json())
      .catch(err => err);
  };

  static async retrievePokemonInfoByName(pokemonName) {
    return fetch(`${BASE_API_URL}/pokemon/${pokemonName}/`)
      .then(response => response.json())
      .catch(err => err);
  };

  static async retrievePokemonSpeciesInfoByName(pokemonName) {
    return fetch(`${BASE_API_URL}/pokemon-species/${pokemonName}/`)
      .then(response => response.json())
      .catch(err => err);
  };
};
