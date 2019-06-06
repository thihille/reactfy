export const FETCHING_ALBUNS = '//paginaPrincipal//albuns//FETCHING_ALBUNS';
export const FETCH_ALBUNS_SUCCESS = '//paginaPrincipal//albuns//FETCH_ALBUNS_SUCCESS';
export const FETCH_ALBUNS_ERROR = '//paginaPrincipal//albuns//FETCH_ALBUNS_ERROR';

import request from '../../helpers/request';
import { setSearchQuery } from '../actions/search';

export const fetchingAlbuns = payload => ({
  type: FETCHING_ALBUNS,
  payload
});

export const fetchAlbunsSuccess = payload => ({
  type: FETCH_ALBUNS_SUCCESS,
  payload
});

export const fetchAlbuns = payload => {
  let query = payload;
  return (dispatch) => {
    dispatch(fetchingAlbuns(true));
    dispatch(setSearchQuery(query));

    request.get(`search?q=${query}&type=album`).then((data) => {
      // console.log(data.data.albums);
      dispatch(fetchAlbunsSuccess(data.data.albums));
    }).catch((error) => {
      console.log(error);
      setTimeout(() => {
        dispatch(fetchingAlbuns(false));
      }, 1000);
    });
  }
};