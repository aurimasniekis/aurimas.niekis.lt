import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import * as Sentry from "@sentry/react";


const App = ({history}) => (
    <Router history={history}>
        <Routes/>
    </Router>
)

export default Sentry.withProfiler(App);
