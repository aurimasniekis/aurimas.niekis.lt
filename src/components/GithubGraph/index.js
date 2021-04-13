import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import {changeGithubGraphYear} from "../../redux/modules/projects/actions";

class GitHubGraph extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        tooltips: PropTypes.bool,
        years: PropTypes.number,
        startYear: PropTypes.number,
        currentYear: PropTypes.number,
        changeYear: PropTypes.func,
    };

    static defaultProps = {
        tooltips: false,
        years: -1,
        startYear: new Date().getFullYear(),
        currentYear: new Date().getFullYear(),
        changeYear: () => {
        },
    };

    changeYear = (year) => () => this.props.changeYear(year);

    render() {
        const yearsOptions = [];
        const yearsButtons = [];
        const endYear = this.props.startYear - this.props.years;

        for (let year = endYear; year <= this.props.startYear; year++) {
            const current = year === this.props.currentYear;
            yearsOptions.push(
                <option key={year} value={year}>{year}</option>
            );

            yearsButtons.push(
                <button key={year} onClick={this.changeYear(year)}
                        className={current ? "bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md" : "text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"}>
                    {year}
                </button>
            );
        }

        return <>
            <div className="max-w-7xl mx-auto w-auto px-4">
                <div className="flex flex-col justify-center">
                    {this.props.years !== -1 && <div className="flex justify-center">
                        <div className="sm:hidden">
                            <label htmlFor="github_calendar_years_select" className="sr-only">Select a year</label>
                            <select id="github_calendar_years_select" name="github_calendar_years_select" value={this.props.currentYear}
                                    onChange={(e) => {
                                        this.props.changeYear(e.target.value)
                                    }}
                                    className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-center">
                                {yearsOptions}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <nav className="flex space-x-4" aria-label="Tabs">
                                {yearsButtons}
                            </nav>
                        </div>
                    </div>}

                    <div className="mt-5 flex flex-initial justify-center">
                        <GitHubCalendar username={this.props.username} years={[this.props.currentYear]} fontSize="16">
                            {this.props.tooltips && <ReactTooltip delayShow={50} html/>}
                        </GitHubCalendar>
                    </div>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    changeYear: changeGithubGraphYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(GitHubGraph);
