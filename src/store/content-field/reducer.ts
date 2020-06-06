import * as TYPE from "./type";

const initialState: TYPE.ContentFieldState = {
  page: 1,
  paginationCount: 0,
  posts: [],
};

export function contentFieldReducer(
  state = initialState,
  action: any
): TYPE.ContentFieldState {
  switch (action.type) {
    case TYPE.SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case TYPE.SET_POST: {
      return { ...state, posts: action.payload };
    }
    case TYPE.SET_PAGINATION_COUNT: {
      return { ...state, paginationCount: action.payload };
    }
    default:
      return state;
  }
}
