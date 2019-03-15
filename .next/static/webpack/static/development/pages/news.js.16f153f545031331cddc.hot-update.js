webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");












 // import Error from "next/error";



var News = function News(_ref) {
  var news = _ref.news,
      page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    text: "react",
    coolmsg: ""
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  var text = values.text,
      coolmsg = values.coolmsg; // const [url, setUrl] = useState(
  //     "http://hn.algolia.com/api/v1/search?query=react"
  // );
  // const handleTextChange = e => {
  //     e.preventDefault();
  //     setSearchQuery(e.target.value);
  // };

  var handleChange = function handleChange(name) {
    return function (event) {
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, event.target.value)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);

    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/news/?searchTerm=".concat(text));
  };

  var loadMore = function loadMore(e) {
    e.preventDefault();
    console.log("loadmore");
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/news/?searchTerm=".concat(text, "&page=").concat(setCurrentPage + 1));
  };

  var searchForm = function searchForm() {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      type: "text",
      value: text,
      onChange: handleChange("text")
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
      type: "text",
      value: coolmsg,
      onChange: handleChange("coolmsg"),
      placeholder: "Write something.."
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", null, "Search"));
  };

  if (news.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_11__["default"], {
      message: "No blogs found"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    mainTitle: "News"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "List of News"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), coolmsg, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), searchForm(), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), news.map(function (n) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      key: n.objectID
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
      href: n.url
    }, n.title));
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), page > 1 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/news/?searchTerm=".concat(text, "&page=").concat(page - 1));
    }
  }, "Previous ", page - 1) : "", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", null, "Current ", page), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/news/?searchTerm=".concat(text, "&page=").concat(page + 1));
    }
  }, "Next ", page + 1)));
};

News.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, news, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.prev = 1;
            _context.next = 4;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("http://hn.algolia.com/api/v1/search?query=".concat(query.searchTerm || "react", "&page=").concat(query.page || 1));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            news = _context.sent;
            console.log("try", news);
            _context.next = 16;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            news = [];
            console.log("catch");

          case 16:
            return _context.abrupt("return", {
              news: news.hits,
              page: news.page
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=news.js.16f153f545031331cddc.hot-update.js.map