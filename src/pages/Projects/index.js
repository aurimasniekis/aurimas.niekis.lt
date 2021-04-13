import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import SimpleSectionHeading from "../../components/Headings/Section/Simple";
import GitHubGraph from "../../components/GithubGraph";
import PropTypes from "prop-types";
import projectsJson from './projects.json'
import Project from "../../components/Project";

class ProjectsPage extends Component {
    static propTypes = {
        currentYear: PropTypes.number.isRequired
    };

    static defaultProps = {};


    render() {
        return <>
            <div>
                <SimpleSectionHeading title="Github Activity" id="github_activity">My Github activity like commits,
                    issues, pull request and etc over the years</SimpleSectionHeading>
                <GitHubGraph username="aurimasniekis" currentYear={this.props.currentYear} years={8} tooltips={true}/>
                <SimpleSectionHeading title="Projects" id="projects">My most recent projects</SimpleSectionHeading>
                <div className="mt-1 bg-white pt-4 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                        <div className="bg-white shadow-xl overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {projectsJson.map((p, i) => (
                                    <Project key={i} type={p.type} name={p.name} description={p.description} url={p.url} github={p.github} languages={p.languages}/>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = (state) => ({
    currentYear: state.projects.github_graph_current_year,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
