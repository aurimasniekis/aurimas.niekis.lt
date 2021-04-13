import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Introduction from "../../components/Introduction";
import GitHubGraph from "../../components/GithubGraph";
import SimpleSectionHeading from "../../components/Headings/Section/Simple";
import RecentPublications from "../../components/RecentPublications";

class MainPage extends Component {
    static propTypes = {
        currentYear: PropTypes.number.isRequired
    };

    static defaultProps = {
        click: () => {
        },
        count: -1,
    };


    render() {
        return <>
            <div>
                <Introduction/>
                <RecentPublications title="My Recent publications" limit="3"/>
                <SimpleSectionHeading title="Github Activity" id="github_activity">My recent Github activity like commits, issues, pull request and etc.</SimpleSectionHeading>
                <GitHubGraph username="aurimasniekis" currentYear={this.props.currentYear}  tooltips={true}/>
            </div>
        </>
    }
}

const mapStateToProps = (state) => ({
    currentYear: state.projects.github_graph_current_year,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
