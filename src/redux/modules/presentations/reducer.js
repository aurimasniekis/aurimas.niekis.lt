import * as c from "./constants";

const defaultState = {
  pending_presentations: false,
  latest_presentations: [],
  error: null,
};

const ACTION_HANDLERS = {
  [c.LOAD_LATEST_PRESENTATIONS]: (state) => {
    return {
      ...state,
      pending_presentations: true,
    }
  },
  [c.LOAD_LATEST_PRESENTATIONS_SUCCESS]: (state, action) => {
    return {
      ...state,
      pending_presentations: false,
      latest_presentations: action.presentations,
    }
  },
  [c.LOAD_LATEST_PRESENTATIONS_ERROR]: (state, action) => {
    return {
      ...state,
      pending_presentations: false,
      error: action.error,
    }
  },
};

export default (state = defaultState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
