// const withCSS = require("@zeit/next-css");
// module.exports = withCSS();

// // const withCSS = require('@zeit/next-css')
// // module.exports = withCSS({
// //     cssModules: true
// // });

// module.exports = {
//     exportPathMap: function() {
//         return {
//             "/": { page: "/" },
//             "/blogs": { page: "/blogs" },
//             "/blog": { page: "/blog" }
//         };
//     }
// };


module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{next-static}' : '',
  // another configuration
}