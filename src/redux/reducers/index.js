import {
  SET_VIDEOS,
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE,
} from '../actions';

const initialState = {
  user: {},
  myList: [],
  trends: [],
  playing: {},
  originals: [],
};

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VIDEOS:
      return {
        ...state,
        trends: payload.trends,
        originals: payload.originals,
      };
    case SET_FAVORITE:
      return {
        ...state,
        myList: [...state.myList, payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== payload),
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: payload,
      };
    case GET_VIDEO_SOURCE:
      return payload ? {
        ...state,
        playing: state.trends.find((item) => item.id === Number(payload)) ||
        state.originals.find((item) => item.id === Number(payload)) ||
        {},
      } : { ...state, playing: {} };
    default:
      return { ...state };
  }
};
