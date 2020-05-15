import { createDefaultPokemonState } from './pokemonState';

export function createDefaultAppState() {
  return {
    pokemonState: createDefaultPokemonState()
  };
};
