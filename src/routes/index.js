import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "../pages/Main";
import PublicationsPage from "../pages/Publications";
import {PageHeading} from "../components/PageHeading";
import {PageFooter} from "../components/PageFooter";
import ContactMePage from "../pages/ContactMe";
import CvPage from "../pages/Cv";
import ProjectsPage from "../pages/Projects";
import SocialNetworksPage from "../pages/SocialNetworks";

export default function routes() {
    return <>
        <PageHeading/>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/publications">
                <PublicationsPage/>
            </Route>
            <Route exact path="/projects">
                <ProjectsPage/>
            </Route>
            <Route exact path="/cv">
                <CvPage/>
            </Route>
            <Route exact path="/social_networks">
                <SocialNetworksPage/>
            </Route>
            <Route exact path="/contact_me">
                <ContactMePage/>
            </Route>
        </Switch>
        <PageFooter/>
    </>
};
