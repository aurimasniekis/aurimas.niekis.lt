import * as c from "./constants";

export const changeGithubGraphYear = (year) => dispatch => (
    dispatch({
        type: c.CHANGE_GITHUB_GRAPH_YEAR,
        year,
    })
);
