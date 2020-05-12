import React, { useReducer } from 'react';
import axios from 'axios'
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USERS,
  GET_REPOS
} from '../types';



const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //GET USERS
  const getUsers=async ()=>{
    try {

      setLoading()
      const res= await axios.get('/api/github')

      dispatch({
          type:GET_USERS,
          payload:res.data
      })
      
    } catch (error) {
      console.log('error getting users',error)
    }
  }
  // Search Users
  const searchUsers = async text => {
    try {

      setLoading();
      const res= await axios.get(`/api/github/search/${text}`)

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });

    } catch (error) {
      console.log('error search users',error)
    }
  };

  // Get User
  const getUser = async username => {
    try {

      setLoading();
      const res= await axios.get(`/api/github/${username}`)
    
      dispatch({
        type: GET_USER,
        payload: res.data
      });
      
    } catch (error) {
      console.log('error getting user by id',error)
    }
  };

  // Get Repos
  const getUserRepos = async username => {
    try {
      
      setLoading();
      const res= await axios.get(`/api/github/repos/${username}`)
  
      dispatch({
        type: GET_REPOS,
        payload: res.data
      });

    } catch (error) {
      console.log('error getting user Repos',error)
    }
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUsers,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
