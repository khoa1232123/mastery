import { postTypes } from '../types';

const initialState = {
  currentId: '',
  posts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case postTypes.FETCH_ALL:
    case postTypes.UPDATE:
    case postTypes.DELETE:
    case postTypes.LIKE:
      return {
        ...state,
        posts: payload,
      };
    case postTypes.CREATE:
      return {
        ...state,
      };
    case postTypes.GET_ID:
      return {
        ...state,
        currentId: payload,
      };
    case postTypes.CLEAR_FORM:
      return {
        ...state,
        currentId: '',
      };
    default:
      return state;
  }
};
