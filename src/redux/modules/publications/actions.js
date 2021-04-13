import * as c from "./constants";
import GhostContentAPI from '@tryghost/content-api'

export const publicationsClick = () => dispatch => (
  dispatch({
    type: c.CLICK,
  })
);


export const loadLatestArticles = (limit= 10) => dispatch => {
    dispatch({
        type: c.LOAD_LATEST_ARTICLES,
    });

    const api = new GhostContentAPI({
        url: 'https://techprowd.ghost.io',
        key: 'b434a06b289b4dfab175b6afb2',
        version: "v3"
    });

    api.posts
        .browse({limit: limit, include: 'tags,authors'})
        .then((posts) => {
            dispatch(loadLatestArticlesSuccess(posts));
        })
        .catch((err) => {
            dispatch(loadLatestArticlesError(err));
        });

};

export const loadLatestArticlesSuccess = (articles) => dispatch => (
    dispatch({
        type: c.LOAD_LATEST_ARTICLES_SUCCESS,
        articles,
    })
);

export const loadLatestArticlesError = (errors) => dispatch => (
    dispatch({
        type: c.LOAD_LATEST_ARTICLES_ERROR,
        errors,
    })
);
