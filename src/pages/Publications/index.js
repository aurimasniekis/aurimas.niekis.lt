import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import RecentPublications from "../../components/RecentPublications";
import RecentPresentations from "../../components/RecentPresentations";

class PublicationsPage extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };


    render() {
        return <>
            <div>
                <RecentPresentations title="My Articles" limit="all"/>
                <RecentPublications title="My Articles" limit="all"/>
            </div>
        </>
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationsPage);
