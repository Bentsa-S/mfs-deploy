import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './registration.actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};