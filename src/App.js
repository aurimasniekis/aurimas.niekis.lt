import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import * as Sentry from "@sentry/react";
import ScrollToTop from "./components/ScrollToTop";


const App = ({history}) => (
    <BrowserRouter>
        <ScrollToTop/>

        <Routes/>
    </BrowserRouter>
)

export default Sentry.withProfiler(App);
