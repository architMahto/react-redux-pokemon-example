import { combineReducers } from 'redux';

import pokemonStateReducer from './Reducers/pokemonStateReducer';

export default function rootReducer() {
  return combineReducers({
    pokemonState: pokemonStateReducer
  });
};
