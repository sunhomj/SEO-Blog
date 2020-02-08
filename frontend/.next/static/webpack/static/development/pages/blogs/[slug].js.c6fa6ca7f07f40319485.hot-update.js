webpackHotUpdate("static/development/pages/blogs/[slug].js",{

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/blog/Card */ "./components/blog/Card.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _components_crud_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/crud/Category */ "./components/crud/Category.js");
var _jsxFileName = "/Users/Slothums/Documents/GitHub/SEO-Blog/frontend/pages/blogs/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SingleBlog = function SingleBlog(_ref) {
  var blog = _ref.blog;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    style: {
      marginTop: "-30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["API"], "/blog/photo/").concat(blog.slug),
    alt: blog.title,
    className: "img img-fluid featured-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: "lead pt-1 pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Written by ", blog.postedBy.name, " | published ", moment(blog.createdAt).fromNow())))))));
};

SingleBlog.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["singleBlog"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return {
        blog: data
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleBlog);
"";

/***/ })

})
//# sourceMappingURL=[slug].js.c6fa6ca7f07f40319485.hot-update.js.map