export function createDefaultLoadable() {
  return {
    isLoading: false,
    isSuccessful: false,
    error: null
  };
}

export function updateLoadableOnStart() {
  return {
    isLoading: true,
    isSuccessful: false,
    error: null
  };
}

export function updateLoadableOnSuccess() {
  return {
    isLoading: false,
    isSuccessful: true,
    error: null
  };
}

export function updateLoadableOnError(error) {
  return {
    isLoading: false,
    isSuccessful: false,
    error
  };
}
