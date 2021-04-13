import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PronunciationPlayer extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired
    };

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.mounted = false;
        this.state = {
            isPlaying: false,
        }
    }

    onClick = () => {
        const newState = !this.state.isPlaying;
        this.setState({isPlaying: newState});

        if (newState) {
            this.player.currentTime = 0;
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    componentDidMount() {
        this.mounted = true;
        this.player = new Audio(this.props.src);
        this.player.onended = () => this.mounted && this.setState({isPlaying: false});
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return <>
            <button onClick={this.onClick} style={{cursor:"pointer"}}
                    className="player-button inline-flex justify-center px-1 py-1 border border-gray-300 shadow-sm rounded-full bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500-500">
                {!this.state.isPlaying &&
                <svg xmlns="http://www.w3.org/2000/svg" className="player-button h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path className="player-button" fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"/>
                </svg>}
                {this.state.isPlaying &&
                <svg xmlns="http://www.w3.org/2000/svg" className="player-button h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path className="player-button" fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"/>
                </svg>}
            </button>

        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PronunciationPlayer);
