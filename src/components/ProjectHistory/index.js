import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ProjectHistory extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
        type: PropTypes.string.isRequired,
        logos: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            size: PropTypes.string.isRequired,
        })),
        workPeriod: PropTypes.shape({
            start: PropTypes.string.isRequired,
            end: PropTypes.string,
        }),
        location: PropTypes.string,
        sector: PropTypes.string,
        industry: PropTypes.string,
        about: PropTypes.string.isRequired,
        aboutList: PropTypes.arrayOf(PropTypes.string),
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
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
                                {this.props.name}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                {this.props.type}
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
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4 print:gap-y-2">
                        <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Project Period
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.workPeriod.start}{this.props.workPeriod.end && " – "}{this.props.workPeriod.end}
                            </dd>
                        </div>
                        {this.props.location && <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Location
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.location}
                            </dd>
                        </div>}
                        {this.props.sector && <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Sector
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.sector}
                            </dd>
                        </div>}
                        {this.props.industry && <div className="lg:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Industry
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.industry}
                            </dd>
                        </div>}
                        <div className="lg:col-span-4">
                            <dt className="text-sm font-medium text-gray-500">
                                About Project
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 print:mt-0">
                                {this.props.about.split("\n").map((item, i) => (
                                    <React.Fragment key={i}>{item}<br/></React.Fragment>
                                ))}
                            </dd>
                        </div>
                        {this.props.aboutList && <div className="lg:col-span-2">
                                        <span className="text-sm font-medium text-gray-500">
                                            Responsibilities
                                        </span>
                            <div className="mt-1 text-sm text-gray-900 print:mt-0">
                                <ul className="list-disc list-inside">
                                    {this.props.aboutList.map((res, i) => (
                                        <li key={i}>{res}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>}
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
                    </dl>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHistory);
