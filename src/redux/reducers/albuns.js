import {
  FETCHING_ALBUNS,
  FETCH_ALBUNS_SUCCESS
} from "../actions/albuns";

export const INITIAL_STATE = {
  loading: false,
  list: [],
  query: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_ALBUNS:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_ALBUNS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    default:
      return state;
  }
};