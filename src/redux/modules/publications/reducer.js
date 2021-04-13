import * as c from "./constants";

const defaultState = {
  count: 0,
  pending_articles: false,
  latest_articles: [],
  error: null,
};

const ACTION_HANDLERS = {
  [c.CLICK]: (state) => {
    return {
      ...state,
      count: state.count + 1
    };
  },
  [c.LOAD_LATEST_ARTICLES]: (state) => {
    return {
      ...state,
      pending_articles: true,
    }
  },
  [c.LOAD_LATEST_ARTICLES_SUCCESS]: (state, action) => {
    return {
      ...state,
      pending_articles: false,
      latest_articles: action.articles,
    }
  },
  [c.LOAD_LATEST_ARTICLES_ERROR]: (state, action) => {
    return {
      ...state,
      pending_articles: false,
      error: action.error,
    }
  },
};

export default (state = defaultState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
