import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const aStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "5px"
};

const About = () => (
    <Layout mainTitle="About Page" footer={`It's about Ryan`}>
        <div>
            <Head>
                <title>About page</title>
            </Head>

            <Link href="/">
                <a style={aStyle}>Visit home page</a>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum laborum, aspernatur possimus vitae rerum amet
                repellendus officia. Ex incidunt, quia nesciunt non, et quae
                quas fugit! Rem consequatur, incidunt nobis.
            </p>
            <style jsx>{`
                p {
                    color: indigo;
                    font-size: 20px;
                }
            `}</style>
        </div>
    </Layout>
);
export default About;
