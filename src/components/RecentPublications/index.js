import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {publicationsActions} from "../../redux/modules/publications";

class RecentPublications extends React.Component {
    static propTypes = {
        pending: PropTypes.bool.isRequired,
        articles: PropTypes.array.isRequired,
        error: PropTypes.string,
        loadArticles: PropTypes.func.isRequired,
        limit: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    static defaultProps = {
        limit: "3"
    };

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        this.props.loadArticles(this.props.limit);
    }

    shouldComponentRender() {
        return this.props.pending;
    }

    render() {
        let articles = [
            <div key={0} className="animate-pulse flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="block mt-2 space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-1/3"/>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded"/>
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <div>
                                <div className="h-10 w-10 bg-gray-200 rounded-full"/>
                            </div>
                        </div>
                        <div className="ml-3 w-full space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2"/>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,

            <div key={1} className="hidden lg:block animate-pulse flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="block mt-2 space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-1/3"/>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded"/>
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <div>
                                <div className="h-10 w-10 bg-gray-200 rounded-full"/>
                            </div>
                        </div>
                        <div className="ml-3 w-full space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2"/>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,

            <div key={2} className="hidden lg:block animate-pulse flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="block mt-2 space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-1/3"/>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded"/>
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <div>
                                <div className="h-10 w-10 bg-gray-200 rounded-full"/>
                            </div>
                        </div>
                        <div className="ml-3 w-full space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2"/>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <div className="h-4 bg-gray-200 rounded w-5/6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
        ];

        if (!this.shouldComponentRender()) {
            articles = this.props.articles.map((article, i) => {
                const date = new Date(article.published_at);
                const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
                const mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(date);
                const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);


                return <div key={i} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <a href={article.url} target="_blank" rel="noreferrer">
                            <img className="h-48 w-full object-cover" src={article.feature_image} alt=""/>
                        </a>
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-indigo-600">
                                <a href={article.primary_tag.url} target="_blank" rel="noreferrer" className="hover:underline">
                                    {article.primary_tag.name}
                                </a>
                            </p>
                            <a href={article.url} target="_blank" rel="noreferrer" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">
                                    {article.title}
                                </p>
                                <p className="mt-3 text-base text-gray-500 line-clamp-3">
                                    {article.excerpt}
                                </p>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <a href={article.primary_author.url} target="_blank" rel="noreferrer">
                                    <span className="sr-only">{article.primary_author.name}</span>
                                    <img className="h-10 w-10 rounded-full"
                                         src={article.primary_author.profile_image}
                                         alt=""/>
                                </a>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    <a href={article.primary_author.url} target="_blank" rel="noreferrer" className="hover:underline">
                                        {article.primary_author.name}
                                    </a>
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime="2020-03-16">
                                        {mo} {da}, {ye}
                                    </time>
                                    <span aria-hidden="true">
                      ·
                    </span>
                                    <span>
                      {article.reading_time} min read
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            });
        }

        return <>
            <div className="bg-white pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            {this.props.title}
                        </h2>
                        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            I am currently running blog called <a className="text-blue-700" target="_blank" rel="noreferrer"
                                                                  href="https://www.techprowd.com">TechProwd.com</a> where
                            I publish articles, also I have few articles published in other places.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">

                        {articles}


                    </div>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = (state) => ({
    error: state.publications.error,
    articles: state.publications.latest_articles,
    pending: state.publications.pending_articles,
});

const mapDispatchToProps = {
    loadArticles: publicationsActions.loadLatestArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentPublications);
