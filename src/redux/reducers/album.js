import {
  FETCHING_ALBUM,
  FETCH_ALBUM_SUCCESS
} from "../actions/album";

export const INITIAL_STATE = {
  loading: false,
  data: [],
  id: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_ALBUM:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    default:
      return state;
  }
};