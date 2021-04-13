import * as React from 'react';
import {connect} from 'react-redux';
import PronunciationPlayer from "./PronunciationPlayer";
import PropTypes from "prop-types";

class NamePopoverContent extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        spelling: PropTypes.string.isRequired,
        spelling_exp: PropTypes.array.isRequired,
        katakana: PropTypes.string.isRequired,
        pronunciation_url: PropTypes.string,
    };

    static defaultProps = {};

    render() {
        return <>
            <div className="player-button px-4 py-5 sm:p-6">
                <h3 className="player-button text-lg leading-6 font-medium text-gray-900">
                    Pronunciation {this.props.pronunciation_url && <PronunciationPlayer src={this.props.pronunciation_url}/>}

                </h3>
                <div className="mt-2 max-w-xl text-base text-gray-500">
                    <p>
                        <span className="text-red-700 font-bold font-sans">{this.props.name}</span> is pronounced as <span className="text-red-700 font-bold font-sans">{this.props.spelling}</span> where:
                    </p>
                    <table className="mt-5">
                        <tbody>
                        {this.props.spelling_exp.map((exp, i) => (
                            <tr key={i}>
                                <td className="text-red-700 font-bold font-sans">{exp[0]}</td>
                                <td>is pronounced as</td>
                                <td className="text-center text-red-700 font-bold font-sans">{exp[1]}</td>
                                <td>in</td>
                                <td className="text-red-700 font-bold font-sans">{exp[2]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Katakana
                </h3>
                <div className="mt-2 max-w-xl text-base text-gray-500">
                    <p>
                        <span className="text-red-700 font-bold font-sans">{this.props.name}</span> in Japanese Katakana is <span className="text-red-700 font-bold font-sans">{this.props.katakana}</span>
                    </p>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NamePopoverContent);
