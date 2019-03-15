import { withRouter } from "next/router";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";

const Blog = ({ blog }) => (
    <Layout mainTitle="Single blog">
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    </Layout>
);

Blog.getInitialProps = async ({ query }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    const data = await res.json();
    console.log("Number of Blogs: ", data.length);
    return { blog: data };
};

export default withRouter(Blog);
