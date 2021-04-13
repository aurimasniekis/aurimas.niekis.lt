import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Expertise extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {};

    render() {
        return <>
            <li>
                <div className="hover:bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <p className="text-lg leading-6 font-medium text-gray-900 truncate">
                            {this.props.title}
                        </p>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between print:mt-1">
                        <div
                            className="mt-2 text-sm text-gray-900 flex flex-wrap -m-1 print:mt-0">
                            {this.props.technologies.map((name, i) => (
                                <span key={i}
                                      className="inline-flex mb-3 mr-3 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{name}</span>
                                      // className={"inline-flex mb-3 mr-3 print:mb-1 print:mr-1 items-center px-2.5 py-0.5 rounded-md text-sm font-medium " + (TechnologyColors[name] ?? "bg-gray-100 text-gray-800")}>{name}</span>
                            ))}

                        </div>
                    </div>
                </div>

            </li>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Expertise);
