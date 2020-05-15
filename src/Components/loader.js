import React from 'react';

import pokeball from '../pokeball.svg';
import './loader.css';

const Loader = () => {
  return (
    <img
      src={pokeball}
      alt="pokeball loader"
      className="Spinner"
    />
  );
}

export default Loader;
