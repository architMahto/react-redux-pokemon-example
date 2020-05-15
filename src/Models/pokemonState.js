import { createDefaultLoadable } from './loadable';

export function buildPokemonId(num) {
  let str = num + '';
  while (str.length < 3) { str = '0' + str}
  return str;
};

export function buildPokemonImageUrl(pokemonId) {
  let pokemonImageUrlId = buildPokemonId(pokemonId);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImageUrlId}.png`;
};

export function buildPokemonOverview(pokemon, index) {
  return {
    id: buildPokemonId(index + 1),
    name: pokemon['name'],
    imageUrl: buildPokemonImageUrl(index + 1)
  };
};

export function buildPokemonList(pokemonList) {
  return pokemonList.map(buildPokemonOverview);
};

export function buildPokemonTypes(type) {
  return type['type']['name'];
};

export function buildNotHiddenPokemonAbilities(ability) {
  return !ability['is_hidden'];
};

export function buildPokemonAbilities(abilities) {
  return abilities
    .filter(buildNotHiddenPokemonAbilities)
    .map(ability => ability['ability']['name']);
}

export function buildLatestDescription(pokemonSpecies) {
  return pokemonSpecies['flavor_text_entries']
    .filter(entry => entry['language']['name'] === 'en')
    .find(entry => entry['version']['name'] === 'alpha-sapphire')
    ['flavor_text'];
};

export function buildSelectedPokemonInfo(pokemon) {
  return {
    id: buildPokemonId(pokemon['id']),
    name: pokemon['name'],
    types: pokemon['types'].map(buildPokemonTypes),
    abilities: buildPokemonAbilities(pokemon['abilities']),
    stats: pokemon['stats'],
    weight: pokemon['weight'],
    height: pokemon['height'],
    imageUrl: buildPokemonImageUrl(pokemon['id'])
  }
};

export function createDefaultPokemonState() {
  return {
    entities: [],
    selectedPokemonInfo: null,
    getPokemonListLoadable: createDefaultLoadable(),
    getSelectedPokemonInfoLoadable: createDefaultLoadable(),
    getSelectedPokemonSpeciesInfoLoadable: createDefaultLoadable()
  };
}
