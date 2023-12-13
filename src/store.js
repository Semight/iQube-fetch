import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const FETCH_COVID_DATA_REQUEST = 'FETCH_COVID_DATA_REQUEST';
const FETCH_COVID_DATA_SUCCESS = 'FETCH_COVID_DATA_SUCCESS';
const FETCH_COVID_DATA_FAILURE = 'FETCH_COVID_DATA_FAILURE';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_COVID_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_COVID_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Action creators
const fetchCovidDataRequest = () => ({
  type: FETCH_COVID_DATA_REQUEST,
});

const fetchCovidDataSuccess = (data) => ({
  type: FETCH_COVID_DATA_SUCCESS,
  payload: data,
});

const fetchCovidDataFailure = (error) => ({
  type: FETCH_COVID_DATA_FAILURE,
  payload: error,
});

// Thunk function for API call
export const fetchCovidData = () => {
  return async (dispatch) => {
    dispatch(fetchCovidDataRequest());

    try {
      const response = await fetch('https://covidnigeria.herokuapp.com/api');
      const data = await response.json();
      dispatch(fetchCovidDataSuccess(data));
    } catch (error) {
      dispatch(fetchCovidDataFailure(error.message));
    }
  };
};

const store = createStore(covidReducer, applyMiddleware(thunk));

export default store;