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
      const token='gje-a-bn0bDzNsYEtD4l2qh7D4J62TYr5jlK7HqMtUE'
      const config={
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Host': 'api.producthunt.com'
        }
    }
      setLoading()
      // const res= await axios.get(`/api/producthunt/${topic}`)
      const res= await axios.get(`https://api.producthunt.com/v1/posts/all?search[topic]=${topic}`,config);
      console.log(res.data.posts)
      dispatch({
          type:GET_PRODUCTS,
          payload:res.data.posts
      })
      
    } catch (error) {
      console.log('error getting Products',error)
    }
  }


  // Get Product
  const getProduct = async id => {
    try {
      const token='gje-a-bn0bDzNsYEtD4l2qh7D4J62TYr5jlK7HqMtUE'
      const config={
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Host': 'api.producthunt.com'
        }
    }
      setLoading();
      // const res= await axios.get(`/api/producthunt/tool/${id}`)
      const res= await axios.get(`https://api.producthunt.com/v1/posts/${id}`,config);
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
