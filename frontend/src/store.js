// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productItemReducer,
  productEditReducer,
  productDeleteReducer,
  productCreateReducer,
} from "./reducers/productReducer";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
// import thunk from 'redux-thunk'
// import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { BookmarkReducer } from "./reducers/bookmarkReducer";
// importing the offer reducers
import { 
  offerCreateReducer, 
  offerReceivedReducer, 
  offerSentReducer, 
  offerBoughtReducer, 
  offerSoldReducer,  
  offerRespondReducer, 
  offerCompleteReducer,
  getCompleteOfferReducer,
  createReviewReducer,
  getReviewReducer,
} from "./reducers/offerReducer";

// const initialState = {}
// const middleware = [thunk]
// const reducer = combineReducers({
//   productList: productListReducer,
// })

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productItem: productItemReducer,
    productEdit: productEditReducer,
    productDelete: productDeleteReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productCreate: productCreateReducer,
    offerCreate: offerCreateReducer,
    offerSent: offerSentReducer,
    offerReceived: offerReceivedReducer,
    offerRespond: offerRespondReducer,
    offerBought: offerBoughtReducer,
    offerSold: offerSoldReducer,
    offerComplete: offerCompleteReducer,
    userDetails: userDetailsReducer,
    bookmark: BookmarkReducer,
    getCompleteOffer: getCompleteOfferReducer,
    createReview: createReviewReducer,
    getReview: getReviewReducer,
  },
  preloadedState: {
    userLogin: {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    },
  },
});

export default store;
