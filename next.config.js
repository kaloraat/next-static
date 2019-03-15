const withCSS = require("@zeit/next-css");
module.exports = withCSS();

// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//     cssModules: true
// });

module.exports = {
    exportPathMap: function() {
        return {
            "/": { page: "/" },
            "/blogs": { page: "/blogs" },
            "/blog": { page: "/blog" }
        };
    }
};
