import React from 'react';
import {Route, Routes} from "react-router-dom";
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
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route exact path="/publications" element={<PublicationsPage/>}/>
            <Route exact path="/projects" element={<ProjectsPage/>}/>
            <Route exact path="/cv" element={<CvPage/>}/>
            <Route exact path="/social_networks" element={<SocialNetworksPage/>}/>
            <Route exact path="/contact_me" element={<ContactMePage/>}/>
        </Routes>
        <PageFooter/>
    </>
};
