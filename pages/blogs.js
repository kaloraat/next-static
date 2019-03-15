import Link from "next/link";
import { withRouter } from "next/router";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";
// import Error from "next/error";
import Error from "./_error";

const Blogs = ({ blogs }) => {
    if (blogs.length === 0) {
        return <Error message="No blogs found" />;
    }
    return (
        <Layout mainTitle="Blogs">
            <div>
                <h2>List of Blogs</h2>
                <hr />
                {blogs.map((b, i) => (
                    <div key={i}>
                        <Link href={`/blog?id=${b.id}`}>
                            <h4>{b.title}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

Blogs.getInitialProps = async () => {
    let blogs;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        blogs = await res.json();
        console.log("try");
    } catch (err) {
        console.log(err);
        blogs = [];
        console.log("catch");
    }
    return { blogs };
};
export default withRouter(Blogs);
