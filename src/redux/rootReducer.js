import {combineReducers} from '@reduxjs/toolkit';
import {connectRouter} from "connected-react-router";
import {publicationsReducer} from "./modules/publications";
import {projectsReducer} from "./modules/projects";
import {presentationsReducer} from "./modules/presentations";

export default function createRootReducer(history) {
    return combineReducers(
        {
            router: connectRouter(history),
            projects: projectsReducer,
            publications: publicationsReducer,
            presentations: presentationsReducer,
        }
    );
}
