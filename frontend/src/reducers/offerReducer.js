import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL,
  OFFER_CREATE_RESET,
  OFFER_RECEIVED_REQUEST,
  OFFER_RECEIVED_SUCCESS,
  OFFER_RECEIVED_FAIL,
  OFFER_SENT_REQUEST,
  OFFER_SENT_SUCCESS,
  OFFER_SENT_FAIL,
  OFFER_RESPOND_REQUEST,
  OFFER_RESPOND_SUCCESS,
  OFFER_RESPOND_FAIL,
  OFFER_RESPOND_RESET,
  OFFER_BOUGHT_REQUEST,
  OFFER_BOUGHT_SUCCESS,
  OFFER_BOUGHT_FAIL,
  OFFER_SOLD_REQUEST,
  OFFER_SOLD_SUCCESS,
  OFFER_SOLD_FAIL,
  OFFER_DELETE_REQUEST,
  OFFER_DELETE_SUCCESS,
  OFFER_DELETE_FAIL,
  OFFER_DELETE_RESET,
} from "../constants/constants";

export const offerReceivedReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_RECEIVED_REQUEST:
      return { loadingR: true };
    case OFFER_RECEIVED_SUCCESS:
      return { loadingR: false, successR: true, offersR: action.payload };
    case OFFER_RECEIVED_FAIL:
      return { loadingR: false, errorR: action.payload };
    default:
      return state;
  }
};

export const offerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_CREATE_REQUEST:
      return { oloading: true };
    case OFFER_CREATE_SUCCESS:
      return { oloading: false, success: true, offer: action.payload };
    case OFFER_CREATE_FAIL:
      return { oloading: false, error: action.payload };
    case OFFER_CREATE_RESET:
      return { oloading: false, success: false, error: null };
    default:
      return state;
  }
};

export const offerSentReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_SENT_REQUEST:
      return { loadingS: true };
    case OFFER_SENT_SUCCESS:
      return { loadingS: false, successS: true, offersS: action.payload };
    case OFFER_SENT_FAIL:
      return { loadingS: false, errorS: action.payload };
    default:
      return state;
  }
};

export const offerBoughtReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_BOUGHT_REQUEST:
      return { loadingB: true };
    case OFFER_BOUGHT_SUCCESS:
      return { loadingB: false, successB: true, offersB: action.payload };
    case OFFER_BOUGHT_FAIL:
      return { loadingB: false, errorB: action.payload };
    default:
      return state;
  }
};

export const offerSoldReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_SOLD_REQUEST:
      return { loadingSO: true };
    case OFFER_SOLD_SUCCESS:
      return { loadingSO: false, successSO: true, offersSO: action.payload };
    case OFFER_SOLD_FAIL:
      return { loadingSO: false, errorSO: action.payload };
    default:
      return state;
  }
};

export const offerRespondReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_RESPOND_REQUEST:
      return { loading: true, success: false };
    case OFFER_RESPOND_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload,
        flag: action.flag,
      };
    case OFFER_RESPOND_FAIL:
      return { loading: false, error: action.payload };
    case OFFER_RESPOND_RESET:
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const offerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_DELETE_REQUEST:
      return { loading: true, success: false };
    case OFFER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload,
      };
    case OFFER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case OFFER_DELETE_RESET:
      return { loading: false, success: false };
    default:
      return state;
  }
};
