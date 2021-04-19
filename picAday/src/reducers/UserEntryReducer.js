import {
    GET_ALL_USER_ENTRY,
    CREATE_USER_ENTRY
   
  } from '../actions/Types';
  
  const initalState = {
    userEntry: [],
   
  };
  
  export default function(state = initalState, action) {
    switch (action.type) {
      case GET_ALL_USER_ENTRY:
        return {
          ...state,
          userEntry: action.payload,
        };
      case CREATE_USER_ENTRY:
        return {
          ...state,
          userEntry: action.payload,
        };
      default:
        return state;
    }
  }
  