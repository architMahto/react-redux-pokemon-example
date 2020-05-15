import { createDefaultLoadable } from './loadable';

export function createDefaultPokemonState() {
  return {
    entities: [],
    getPokemonLoadable: createDefaultLoadable()
  };
}
