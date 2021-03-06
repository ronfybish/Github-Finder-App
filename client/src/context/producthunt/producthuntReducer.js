import {
  SET_LOADING,
  GET_PRODUCT,
  GET_PRODUCTS,
  SET_TOPIC
} from '../types';

export default (state, action) => {
  switch (action.type) {
    
    case GET_PRODUCTS:
      return{
          ...state,
          products:action.payload,
          loading:false
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };
    default:
      return state;
  }
};
