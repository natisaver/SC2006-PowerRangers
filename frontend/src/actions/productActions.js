import axios from 'axios'
// Becase we are using thunk middleware,
// our actions will return a function instead of an action object
// and each action will be taking in dispatch as a parameter

//  IMPORTING CONSTANTS ----------------
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_ITEM_REQUEST,
    PRODUCT_ITEM_SUCCESS,
    PRODUCT_ITEM_FAIL,
  } from '../constants/constants'
//---------------------------------------

// ACTION CREATORS ----------------
//  Action creator for getting a list of products
//  action object contains type and payload
  export const getProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })
      //Without the curly braces, data would be assigned the entire object returned by axios.get() instead of just the data property.
      const { data } = await axios.get('/api/products')
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ 
        type: PRODUCT_LIST_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message 
      })
    }
  }

  //  Action creator for getting a single product
  //  action object contains type and payload
  export const getProduct = (itemId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ITEM_REQUEST })
      const { data } = await axios.get(`/api/products/${itemId}`)
      dispatch({ type: PRODUCT_ITEM_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ 
        type: PRODUCT_ITEM_FAIL, 
        payload: error.response && error.response.data.message 
          ? error.response.data.message
          : error.message 
      })
    }
  }