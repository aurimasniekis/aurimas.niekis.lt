import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from './redux/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from "./components/ScrollToTop";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    dsn: "https://caf76d832ecf4fe0a178c1d2dc11aed2@o204760.ingest.sentry.io/5716853",
    integrations: [new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    })],
    release: "aurimas.niekis.lt@2021.04.13",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop/>
            <App store={store} history={history}/>
        </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
