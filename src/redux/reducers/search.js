import {
  SET_SEARCH_QUERY
} from "../actions/search";

export const INITIAL_STATE = {
  loading: false,
  list: [],
  query: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
};