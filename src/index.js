import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {history} from './redux/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from "@sentry/react";
import {createRoot} from "react-dom/client";

Sentry.init({
    dsn: "https://caf76d832ecf4fe0a178c1d2dc11aed2@o204760.ingest.sentry.io/5716853",
    integrations: [
        Sentry.reactRouterV5BrowserTracingIntegration({
            history,
        }),
    ],
    release: "aurimas.niekis.lt@2025.12.29",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const store = configureStore();

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store} history={history}/>
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
