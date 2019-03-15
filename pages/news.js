import { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Head from "next/head";
import Router from "next/router";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";
// import Error from "next/error";
import Error from "./_error";

const News = ({ news, page }) => {
    // const [currentPage, setCurrentPage] = useState(1);
    const currentPage = useState(1);
    const setCurrentPage = useState();
    const [values, setValues] = useState({
        text: "react",
        coolmsg: ""
    });

    const { text, coolmsg } = values;
    // const [url, setUrl] = useState(
    //     "http://hn.algolia.com/api/v1/search?query=react"
    // );

    // const handleTextChange = e => {
    //     e.preventDefault();
    //     setSearchQuery(e.target.value);
    // };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
        Router.push(`/news/?searchTerm=${text}`);
    };

    const loadMore = e => {
        e.preventDefault();
        console.log("loadmore");
        Router.push(`/news/?searchTerm=${text}&page=${setCurrentPage + 1}`);
    };
    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange("text")} />
            <input
                type="text"
                value={coolmsg}
                onChange={handleChange("coolmsg")}
                placeholder="Write something.."
            />
            <button>Search</button>
        </form>
    );

    if (news.length === 0) {
        return <Error message="No blogs found" />;
    }
    return (
        <Layout mainTitle="News">
            <div>
                <h2>List of News</h2>
                <hr />
                {coolmsg}
                <hr />
                {searchForm()}
                <hr />
                {news.map(n => (
                    <p key={n.objectID}>
                        <a href={n.url}>{n.title}</a>
                    </p>
                ))}
                <hr />
                {page > 1 ? (
                    <button
                        onClick={() =>
                            Router.push(
                                `/news/?searchTerm=${text}&page=${page - 1}`
                            )
                        }
                    >
                        Previous {page - 1}
                    </button>
                ) : (
                    ""
                )}

                <button>Current {page}</button>

                <button
                    onClick={() =>
                        Router.push(
                            `/news/?searchTerm=${text}&page=${page + 1}`
                        )
                    }
                >
                    Next {page + 1}
                </button>
            </div>
        </Layout>
    );
};

News.getInitialProps = async ({ query }) => {
    let news;
    try {
        const res = await fetch(
            `http://hn.algolia.com/api/v1/search?query=${query.searchTerm ||
                "react"}&page=${query.page || 1}`
        );
        news = await res.json();
        console.log("try", news);
    } catch (err) {
        console.log(err);
        news = [];
        console.log("catch");
    }
    return { news: news.hits, page: news.page };
};

export default News;
