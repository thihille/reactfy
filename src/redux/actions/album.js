export const FETCHING_ALBUM = '//album//FETCHING_ALBUM';
export const FETCH_ALBUM_SUCCESS = '//album//FETCH_ALBUM_SUCCESS';
export const FETCH_ALBUM_ERROR = '//album//FETCH_ALBUM_ERROR';

import request from '../../helpers/request';

export const fetchingAlbum = payload => ({
  type: FETCHING_ALBUM,
  payload
});

export const fetchAlbumSuccess = payload => ({
  type: FETCH_ALBUM_SUCCESS,
  payload
});

export const fetchAlbumId = payload => {
  let id = payload;
  return (dispatch) => {
    dispatch(fetchingAlbum(true));
    
    request.get(`albums/${id}`).then((data) => {
      // console.log(data);
      dispatch(fetchAlbumSuccess(data));
    }).catch((error) => {
      console.log(error);
      setTimeout(() => {
        dispatch(fetchingAlbum(false));
      }, 1000);
    });
  }
};