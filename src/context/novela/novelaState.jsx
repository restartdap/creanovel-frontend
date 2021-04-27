import React, { useReducer } from 'react';
import NovelaContext from './novelaContext';
import NovelaReducer from './novelaReducer';
import axiosClient from '../../config/axios'
import tokenAuth from '../../config/token'

const NovelaState = props => {

  const initialState = {

  }

  const [state, dispatch] = useReducer(NovelaReducer, initialState);

  

  return (
    <NovelaContext.Provider value={}>
      { props.children }
    </NovelaContext.Provider>
  );
};

export default NovelaState;