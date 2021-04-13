import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class MoveLocation extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    static defaultProps = {};

    render() {
        return <>
            <div className="relative mt-20 print:mt-2 prevent-page-break">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-lg font-medium text-gray-900">{this.props.title}</span>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MoveLocation);
