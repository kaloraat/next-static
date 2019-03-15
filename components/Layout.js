import Nav from "./Nav";
import "../styles/index.css";
const Layout = ({ mainTitle, footer, children }) => (
    <div>
        <Nav />
        <div className="jumbotron">
            <h1>{mainTitle}</h1>
        </div>
        <hr />
        {children}
        <hr />
        <h4>{footer}</h4>
    </div>
);

export default Layout;
