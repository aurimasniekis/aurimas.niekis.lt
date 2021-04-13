import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SimpleSectionHeading extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        id: PropTypes.string.isRequired,
    };

    static defaultProps = {};

    render() {
        return <>
            {/*<div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">*/}
            <div className="bg-white pt-16 pb-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
                <div className="relative max-w-lg mx-auto lg:max-w-7xl">

                    <div className="pb-5 border-b-2 border-gray-200">
                        <h2 id={this.props.id}
                            className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            {this.props.title}
                        </h2>
                        {this.props.children && <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            {this.props.children}
                        </p>}
                    </div>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSectionHeading);
