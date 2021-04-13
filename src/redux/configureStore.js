import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
import {configureStore as toolkitConfigureStore} from '@reduxjs/toolkit'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './rootReducer';
import * as Sentry from "@sentry/react";


const logger = createLogger();

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    // Optionally pass options
});

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return toolkitConfigureStore(
        {
            reducer: createRootReducer(history),
            middleware: (getDefaultMiddleware) => {
                if (process.env.NODE_ENV !== 'production') {
                    return getDefaultMiddleware().concat(logger).concat(routerMiddleware(history))
                }

                return getDefaultMiddleware().concat(routerMiddleware(history))
            },
            devTools: process.env.NODE_ENV !== 'production',
            preloadedState,
            enhancers: [sentryReduxEnhancer]
        }
    );
}
