export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_FAVORITE = 'SET_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const GET_VIDEO_SOURCE = 'GET_VIDEO_SOURCE';

export const setVideos = () => (dispatch) => {
  fetch('http://localhost:3000/dataVideos')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: SET_VIDEOS, payload: data });
      return data;
    })
    .catch((e) => console.error(e));
};

export const setFavorite = (payload) => ({
  type: SET_FAVORITE, payload,
});

export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE, payload,
});

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST, payload,
});

export const logoutRequest = (payload) => ({
  type: LOGOUT_REQUEST, payload,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST, payload,
});

export const getVideoSource = (payload) => ({
  type: GET_VIDEO_SOURCE, payload,
});
