import React from 'react';

import Loader from './loader';

const WithLoading = (Component) => {
  return function withLoadingComponent({ loadable, ...props }) {
    if (loadable.isSuccessful) {
      return (<Component {...props} />);
    }

    if (!!loadable.error) {
      return (<p>An error occured during the request</p>)
    }

    return (<Loader />);
  }
};

export default WithLoading;
