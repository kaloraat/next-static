import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="My SEO Next app" />
                    <meta
                        name="keywords"
                        content="React, Next, Node, Bootstrap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.css"
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
