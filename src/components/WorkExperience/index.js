import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class WorkExperience extends React.Component {
    static propTypes = {
        companyName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        logos: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired,
        })),
        workPeriod: PropTypes.shape({
            start: PropTypes.string.isRequired,
            end: PropTypes.string.isRequired,
        }),
        location: PropTypes.string.isRequired,
        sector: PropTypes.string.isRequired,
        industry: PropTypes.string.isRequired,
        aboutCompany: PropTypes.string.isRequired,
        aboutPosition: PropTypes.string.isRequired,
        responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        attachments: PropTypes.arrayOf(PropTypes.shape({
            filename: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })),
    };

    static defaultProps = {};

    render() {
        return <>
            <div className="mt-10 bg-white shadow-xl print:shadow-none overflow-hidden sm:rounded-lg prevent-page-break print:mt-2">
                <div className="px-4 py-5 sm:px-6 flex flex-row">
                    <div className="flex-1">
                        <a href={this.props.url} target="_blank" rel="noreferrer">
                            <h3
                                className="text-lg leading-6 font-medium text-gray-900">
                                {this.props.companyName}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {this.props.position}
                            </p>
                        </a>
                    </div>
                    <div className="flex justify-end">
                        {this.props.logos.map((logo, i) => (
                            <img className={logo.size + " self-center"} key={i}
                                 src={process.env.PUBLIC_URL + logo.src}
                                 alt=""/>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4  print:gap-y-2">
                        <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Work Period
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {this.props.workPeriod.start} – {this.props.workPeriod.end}
                            </dd>
                        </div>
                        <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {this.props.location}
                            </dd>
                        </div>
                        <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Sector
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {this.props.sector}
                            </dd>
                        </div>
                        <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Industry
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {this.props.industry}
                            </dd>
                        </div>
                        <div className="lg:col-span-4">
                            <dt className="text-sm font-medium text-gray-500">
                                About Company
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.aboutCompany.split("\n").map((item, i) => (
                                    <React.Fragment key={i}>{item}<br/></React.Fragment>
                                ))}
                            </dd>
                        </div>
                        <div className="lg:col-span-4">
                            <dt className="text-sm font-medium text-gray-500">
                                About work experience
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.aboutPosition.split("\n").map((item, i) => (
                                    <React.Fragment key={i}>{item}<br/></React.Fragment>
                                ))}
                            </dd>
                        </div>
                        <div className="lg:col-span-2">
                                        <span className="text-sm font-medium text-gray-500">
                                            Responsibilities
                                        </span>
                            <div className="mt-1 text-sm text-gray-900 print:mt-0">
                                <ul className="list-disc list-inside">
                                    {this.props.responsibilities.map((res, i) => (
                                        <li key={i}>{res}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                                        <span className="text-sm font-medium text-gray-500">
                                            Used Technologies
                                        </span>
                            <div
                                className="mt-2 text-sm text-gray-900 flex flex-wrap -m-1 print:mt-0">
                                {this.props.technologies.map((name, i) => (
                                    <span key={i}
                                          className="inline-flex mb-3 mr-3 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{name}</span>
                                          // className={"inline-flex mb-3 mr-3 items-center px-2.5 py-0.5 rounded-md text-sm font-medium " + (TechnologyColors[name] ?? "bg-gray-100 text-gray-800")}>{name}</span>
                                ))}

                            </div>
                        </div>
                        {this.props.attachments.length > 0 && <div className="lg:col-span-4">
                            <dt className="text-sm font-medium text-gray-500">
                                Attachments
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    {this.props.attachments.map((attch, i) => (
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate">{attch.filename}</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href={process.env.PUBLIC_URL + attch.url}
                                                   target="_blank"
                                                   rel="noreferrer"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>}
                    </dl>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
