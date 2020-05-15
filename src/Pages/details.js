import React, { useState } from 'react';

export const Details = ({ selectedPokemonInfo }) => {
  const [pokemonInfo, setPokemonInfo] = useState(selectedPokemonInfo);

  return (
    <>
      <h2 style={{'textTransform': 'capitalize'}}>{pokemonInfo['name']} #{pokemonInfo['id']}</h2>
      <img src={pokemonInfo['imageUrl']} alt={pokemonInfo['name']} width="50%" />
    </>
  );
};
