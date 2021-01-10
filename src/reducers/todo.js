import {
    CREATE_BUCKET,GET_BUCKETS, GET_TODOS
  } from "../actions/types";
  
 
  const initialState = {buckets:[],todos:[]}
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_BUCKETS:
        return {
          ...state,
          buckets: payload
        };
      case GET_TODOS:
        return {
          ...state,
          todos: payload
        };
      default:
        return state;
    }
   
  }



  