import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
    <Layout
        mainTitle="Home Page"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <div>
            <Link href="/about">
                <button>Visit about page</button>
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum laborum, aspernatur possimus vitae rerum amet
                repellendus officia. Ex incidunt, quia nesciunt non, et quae
                quas fugit! Rem consequatur, incidunt nobis.
            </p>
        </div>
    </Layout>
);
// make sure to export default
export default Index;
