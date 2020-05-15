import React from 'react';

import Loader from './loader';

const WithLoading = (Component) => {
  return function withLoadingComponent({ loadables, ...props }) {
    if (loadables.every(loadable => loadable.isSuccessful)) {
      return (<Component {...props} />);
    }

    if (loadables.some(loadable => !!loadable.error)) {
      return (<p>An error occured during multiple requests</p>)
    }

    return (<Loader />);
  }
};

export default WithLoading;
