import { createDefaultLoadable } from './loadable';

export function createDefaultPokemonState() {
  return {
    entities: [],
    selectedPokemonInfo: null,
    getPokemonListLoadable: createDefaultLoadable(),
    getSelectedPokemonLoadable: createDefaultLoadable()
  };
}
