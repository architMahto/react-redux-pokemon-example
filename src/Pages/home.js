import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { PokemonList } from '../Components/pokemonList';
import { PokemonListItem } from '../Components/pokemonListItem';
import { PokemonListItemInfo } from '../Components/pokemonListItemInfo';

export const Home = ({ pokemonList }) => {
  const [pokemonData, setPokemonData] = useState(pokemonList);

  return (
    <>
      <PokemonList>
        {pokemonData.map((pokemon, index) => (
          <Link key={index} to={`/pokedex/details/${pokemon['name']}`}>
            <PokemonListItem className="hvr-float">
              <img
                src={pokemon['imageUrl']}
                alt="Pokemon"
              />
              <PokemonListItemInfo>
                <p>{`#${pokemon['id']}`}</p>
                <h5 style={{'textTransform': 'capitalize'}}>{pokemon['name']}</h5>
              </PokemonListItemInfo>
            </PokemonListItem>
          </Link>
        ))}
      </PokemonList>
    </>
  );
};
