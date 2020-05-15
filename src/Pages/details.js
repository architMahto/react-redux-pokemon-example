import React, { useState } from 'react';

export const Details = ({ selectedPokemonInfo }) => {
  const [pokemonInfo, setPokemonInfo] = useState(selectedPokemonInfo);

  return (
    <>
      <h1 style={{'textTransform': 'capitalize'}}>{pokemonInfo['name']} #{pokemonInfo['id']}</h1>
      <img src={pokemonInfo['imageUrl']} alt={pokemonInfo['name']} width="50%" />
      <p style={{'fontSize': '1.5rem'}}>{pokemonInfo['description']}</p>
    </>
  );
};
