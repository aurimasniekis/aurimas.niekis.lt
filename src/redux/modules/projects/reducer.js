import * as c from "./constants";

const defaultState = {
  github_graph_current_year: new Date().getFullYear(),
};

const ACTION_HANDLERS = {
  [c.CHANGE_GITHUB_GRAPH_YEAR]: (state, action) => {
    return {
      ...state,
      github_graph_current_year: action.year
    };
  },
};

export default (state = defaultState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
