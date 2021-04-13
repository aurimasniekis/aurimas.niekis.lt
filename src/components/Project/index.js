import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TechnologyColors from "../../utils/technology_colors";

class Project extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        github: PropTypes.string,
        languages: PropTypes.arrayOf(PropTypes.string),
    };

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {
            license: null,
            stars: null,
            forks: null,
            watchers: null,
        }
    }

    componentDidMount() {
        if (this.props.github) {
            fetch('https://api.github.com/repos/' + this.props.github)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status === 403) {
                        this.setState({
                            license: null,
                            stars: null,
                            forks: null,
                            watchers: null,
                        });
                        return;
                    }

                    this.setState({
                        license: res.license ? res.license.spdx_id : null,
                        forks: res.forks,
                        stars: res.stargazers_count,
                        watchers: res.watchers
                    });

                }).catch((e) => {
                this.setState({
                    license: null,
                    stars: null,
                    forks: null,
                    watchers: null,
                });
            });
        }
    }

    render() {
        return <>
            <li>
                <a href={this.props.url} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">
                                {this.props.name}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Open Source
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <p className="text-sm text-gray-500">
                                {this.props.description}
                            </p>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex content-center">
                                <p className="flex items-center text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                                    </svg>
                                    {(() => {
                                        switch (this.props.type) {
                                            case 'repo':
                                                return 'Repository';
                                            case 'organisation':
                                                return 'Organisation';
                                            default:
                                                return 'Unknown';
                                        }
                                    })()}
                                </p>
                                {this.state.license !== null && <p title="License"
                                                                   className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    {this.state.license}
                                </p>}
                                {this.state.stars !== null && <p title="GitHub Stars"
                                                                 className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                    </svg>
                                    {this.state.stars}
                                </p>}
                                {this.state.forks !== null &&
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3"
                                   title="Github Forks">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    {this.state.forks}
                                </p>}
                                {this.state.watchers !== null &&
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3"
                                   title="Github Watchers">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                        <path fillRule="evenodd"
                                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    {this.state.watchers}
                                </p>}
                                <div className="mt-2 flex text-sm text-gray-500 sm:mt-0 sm:ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="flex-shrink-0 self-center mr-1.5 h-5 w-5 text-gray-400" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"/>
                                    </svg>
                                    {this.props.languages.map((name, i) => (
                                        <span key={i}
                                              className={"mr-3 flex flex-shrink items-center px-2.5 py-0.5 rounded-md text-sm font-medium " + (TechnologyColors[name] ?? "bg-gray-100 text-gray-800")}>{name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
