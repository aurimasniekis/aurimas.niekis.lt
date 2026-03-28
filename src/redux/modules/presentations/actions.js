import * as c from "./constants";

/**
 *
 * @param limit {number|string}
 * @returns {(function(*): void)|*}
 */
export const loadLatestPresentations = (limit= 10) => dispatch => {
    dispatch({
        type: c.LOAD_LATEST_PRESENTATIONS,
    });

    const url = "https://gist.githubusercontent.com/aurimasniekis/0a57b49b23bd7145d5bf7ab0de8ace24/raw/aurimas.niekis.lt_presentations.json";
    fetch(url)
        .then(res => res.json())
        .then(res => limit !== 'all' ? res.slice(0, limit) : res)
        .then(res => dispatch(loadLatestPresentationsSuccess(res)))
        .catch(err => dispatch(loadLatestPresentationsError(err)));

};

export const loadLatestPresentationsSuccess = (presentations) => dispatch => (
    dispatch({
        type: c.LOAD_LATEST_PRESENTATIONS_SUCCESS,
        presentations,
    })
);

export const loadLatestPresentationsError = (errors) => dispatch => (
    dispatch({
        type: c.LOAD_LATEST_PRESENTATIONS_ERROR,
        errors,
    })
);
