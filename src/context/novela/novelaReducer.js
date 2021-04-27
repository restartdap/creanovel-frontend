const NovelaReducer = (state, action) => {
  const types = {
    OBTENER_RECURSO = "OBTENER_RECURSO"
  }

  switch (action.type) {
    case types.OBTENER_RECURSO:
      return state;
    default:
      return state;
  }
};

export default NovelaReducer;