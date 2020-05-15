import { createDefaultLoadable } from './loadable';

export function createDefaultPokemonState() {
  return {
    entities: [],
    getPokemonListLoadable: createDefaultLoadable()
  };
}
