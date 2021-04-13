import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import workJson from './cv.json';
import projectHistoryJson from './project_history.json';
import areasOfExpertiseJson from './areas_of_expertise.json';
import WorkExperience from "../../components/WorkExperience";
import MoveLocation from "../../components/Move";
import ProjectHistory from "../../components/ProjectHistory";
import Expertise from "../../components/Expertise";

function chunkArray(myArray, chunk_size) {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        tempArray.push(myArray.slice(index, index + chunk_size));
    }

    return tempArray;
}

class CvPage extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return <>
            <div>
                <div className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8 print:pt-0">
                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                        <div className="flex flex-row">
                            <h2 className="flex-1 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Work Experience
                            </h2>
                            <a href={process.env.PUBLIC_URL + "/cv.pdf"} target="_blank" rel="noreferrer"
                               className="print:hidden inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm print:shadow-none text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                                <span>Download PDF</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                        {workJson.map((entry, i) => {
                            switch (entry.type) {
                                case "job":
                                    return <WorkExperience key={i} companyName={entry.job.company_name}
                                                           url={entry.job.url}
                                                           position={entry.job.position}
                                                           logos={entry.job.logos}
                                                           workPeriod={entry.job.work_period}
                                                           location={entry.job.location}
                                                           sector={entry.job.sector}
                                                           industry={entry.job.industry}
                                                           aboutCompany={entry.job.about_company}
                                                           aboutPosition={entry.job.about_position}
                                                           responsibilities={entry.job.responsibilities}
                                                           technologies={entry.job.technologies}
                                                           attachments={entry.job.attachments}
                                    />;
                                case "move":
                                    return <MoveLocation key={i} title={entry.move.title}/>;
                                default:
                                    return "UNKNOWN";
                            }
                        })}
                    </div>
                </div>
                <div className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8 print:pt-5">
                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                        <div>
                            <h2 id="project_history"
                                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Project History
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="bg-white pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                        {projectHistoryJson.map((entry, i) => {
                            return <ProjectHistory key={i} name={entry.name} type={entry.type} url={entry.url}
                                                   logos={entry.logos} workPeriod={entry.work_period}
                                                   about={entry.about}
                                                   aboutList={entry.aboutList} technologies={entry.technologies}
                                                   industry={entry.industry} sector={entry.sector}
                                                   location={entry.location}/>
                        })}
                    </div>
                </div>
                <div className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8 print:pt-5">
                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                        <div>
                            <h2 id="expertise"
                                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Areas of Expertise
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="hidden print:block mt-10 print:mt-2 bg-white pt-4 px-4 sm:px-6 lg:px-8 print:mt-2">
                    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                        {chunkArray(areasOfExpertiseJson, 3).map((entries, i) => {
                            return <div key={i}
                                        className="bg-white shadow-xl print:shadow-none overflow-hidden sm:rounded-md mt-4 prevent-page-break print:mt-1">
                                <ul className="">
                                    {entries.map((entry, ii) => (
                                        <Expertise key={ii} title={entry.title} technologies={entry.technologies}/>
                                    ))}
                                </ul>
                            </div>
                        })}
                    </div>
                </div>

                <div className="print:hidden mt-10 bg-white pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                        <div className="bg-white shadow-xl print:shadow-none overflow-hidden sm:rounded-md mt-4">
                            <ul className="divide-y divide-gray-200">
                                {areasOfExpertiseJson.map((entry, ii) => (
                                    <Expertise key={ii} title={entry.title} technologies={entry.technologies}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
            ;
    }
}

const mapStateToProps = (state) => (
    {}
);

const mapDispatchToProps =
    {}
;

export default connect(mapStateToProps, mapDispatchToProps)(CvPage);
