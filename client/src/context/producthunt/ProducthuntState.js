import React, { useReducer } from 'react';
import axios from 'axios'
import ProducthuntContext from './producthuntContext';
import ProducthuntReducer from './producthuntReducer';

import {
  SET_LOADING,
  GET_PRODUCT,
  GET_PRODUCTS,
} from '../types';



const Producthunt = props => {
  const initialState = {
    products: [],
    product: {},
    loading: false
  };

  const [state, dispatch] = useReducer(ProducthuntReducer, initialState);

  //GET Products
  const getProducts=async (topic)=>{
    try {

      setLoading()
      const res= await axios.get(`/api/producthunt/${topic}`)
      dispatch({
          type:GET_PRODUCTS,
          payload:res.data
      })
      
    } catch (error) {
      console.log('error getting Products',error)
    }
  }


  // Get Product
  const getProduct = async id => {
    try {

      setLoading();
      const res= await axios.get(`/api/producthunt/tool/${id}`)
      console.log(res.data)
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
      
    } catch (error) {
      console.log('error getting product by id',error)
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ProducthuntContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        getProducts,
        getProduct
      }}
    >
      {props.children}
    </ProducthuntContext.Provider>
  );
};

export default Producthunt;
