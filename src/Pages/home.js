import React, { useState } from 'react';

import { PokemonList } from '../Components/pokemonList';
import { PokemonListItem } from '../Components/pokemonListItem';
import { PokemonListItemInfo } from '../Components/pokemonListItemInfo';

export const Home = ({ pokemonList }) => {
  const [pokemonData, setPokemonData] = useState(pokemonList);

  const buildPokemonImageUrlId = (num) => {
    let str = num + '';
    while (str.length < 3) { str = '0' + str}
    return str;
  };

  const buildPokemonImageUrl = (pokemonId) => {
    let pokemonImageUrlId = buildPokemonImageUrlId(pokemonId);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImageUrlId}.png`;
  }

  return (
    <>
      <PokemonList>
        {pokemonData.map((pokemon, index) => (
          <PokemonListItem key={index} className="hvr-float">
            <img
              src={buildPokemonImageUrl(index + 1)}
              alt="Pokemon"
            />
            <PokemonListItemInfo>
              <p>{`#${buildPokemonImageUrlId(index+ 1)}`}</p>
              <h5 style={{'textTransform': 'capitalize'}}>{pokemon.name}</h5>
            </PokemonListItemInfo>
          </PokemonListItem>
        ))}
      </PokemonList>
    </>
  );
};
