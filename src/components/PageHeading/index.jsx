import React from "react";
import Unsplash from "../Unsplash";
import {NavLink} from "react-router-dom";

export const PageHeading = (props) => (
    <>
        <div className="pb-6 bg-white">

            <div>
                <div>
                    {window.location.search !== "?cv_build" && <Unsplash img={true} width={1920} keywords={"nature,wallpaper"}
                              className={"h-32 md:h-48 w-full object-cover lg:h-64"}/>}
                    {window.location.search === "?cv_build" && <img src={process.env.PUBLIC_URL + "/images/cv_bg.png"} className={"h-32 md:h-48 w-full object-cover lg:h-64"} alt=""/>}
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 flex-col lg:flex-row sm:flex lg:items-end lg:space-x-5">
                        <div className="flex justify-center lg:justify-start">
                            <img className="h-32 w-32 rounded-full ring-4 ring-white"
                                 src="https://www.gravatar.com/avatar/6549654d5a3568c39b56e731ca792b95?s=512" alt=""/>
                        </div>

                        <div
                            className="lg:mt-6 flex-col lg:flex-row lg:flex-1 sm:min-w-0 flex items-stretch md:items-center justify-center lg:justify-end lg:space-x-6 lg:pb-1">
                            <div className="block mt-6 min-w-0 lg:flex-initial">
                                <h1 className="text-2xl font-bold text-gray-900 truncate text-center">
                                    Aurimas Niekis
                                </h1>
                            </div>
                            <div
                                className="hidden md:flex mt-6 flex-1 items-center space-x-0 sm:space-x-4 md:space-x-10 space-y-4 sm:space-y-0">
                                <NavLink exact={true} to="/" className="print:hidden text-base font-medium text-gray-500 hover:text-gray-900"
                                         activeClassName="text-gray-900">About</NavLink>
                                <NavLink exact={true} to="/cv" className="print:hidden text-base font-medium text-gray-500 hover:text-gray-900"
                                         activeClassName="text-gray-900">CV</NavLink>
                                <NavLink exact={true} to="/publications"
                                         className="print:hidden text-base font-medium text-gray-500 hover:text-gray-900"
                                         activeClassName="text-gray-900">Publications</NavLink>
                                <NavLink exact={true} to="/projects"
                                         className="print:hidden text-base font-medium text-gray-500 hover:text-gray-900"
                                         activeClassName="text-gray-900">Projects</NavLink>
                                <NavLink exact={true} to="/social_networks"
                                         className="print:hidden text-base font-medium text-gray-500 hover:text-gray-900"
                                         activeClassName="text-gray-900">Social Networks</NavLink>
                            </div>

                            <div className="mt-6 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-4">

                                <NavLink exact={true} to="/"
                                         className="inline-flex md:hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500"
                                         activeClassName="text-gray-900 bg-gray-50">About</NavLink>
                                <NavLink exact={true} to="/cv"
                                         className="inline-flex md:hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500"
                                         activeClassName="text-gray-900 bg-gray-50">CV</NavLink>
                                <NavLink exact={true} to="/publications"
                                         className="inline-flex md:hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500"
                                         activeClassName="text-gray-900 bg-gray-50">Publications</NavLink>
                                <NavLink exact={true} to="/projects"
                                         className="inline-flex md:hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500"
                                         activeClassName="text-gray-900 bg-gray-50">Projects</NavLink>
                                <NavLink exact={true} to="/social_networks"
                                         className="inline-flex md:hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500"
                                         activeClassName="text-gray-900 bg-gray-50">Social Networks</NavLink>

                                <NavLink exact={true} to="/contact_me"
                                    className="print:hidden inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                    <span>Message</span>
                                </NavLink>
                                <a href="https://aurimas.niekis.lt" target="_blank" rel="noreferrer"
                                   className="hidden print:inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm print:shadow-none text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span>aurimas.niekis.lt</span>
                                </a>
                                <a href="https://github.com/aurimasniekis" target="_blank" rel="noreferrer"
                                        className="hidden print:inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm print:shadow-none text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span>aurimasniekis</span>
                                </a>
                                <a href="https://github.com/aurimasniekis" target="_blank" rel="noreferrer"
                                        className="hidden print:inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm print:shadow-none text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                    <span>aurimasniekis</span>
                                </a>
                                <a href="mailto:aurimas@niekis.lt" target="_blank" rel="noreferrer"
                                   className="hidden print:inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm print:shadow-none text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                    <span>aurimas@niekis.lt</span>
                                </a>
                                <a href="https://calendly.com/aurimasniekis" target="_blank" rel="noreferrer"
                                        className="print:hidden inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                    <span>Call</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
