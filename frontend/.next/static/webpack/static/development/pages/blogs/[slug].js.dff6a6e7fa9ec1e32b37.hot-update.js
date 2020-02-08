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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/Slothums/Documents/GitHub/SEO-Blog/frontend/pages/blogs/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var SingleBlog = function SingleBlog(_ref) {
  var blog = _ref.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/categories/".concat(c.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-info mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, c.name));
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, t.name));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    style: {
      marginTop: "-30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["API"], "/blog/photo/").concat(blog.slug),
    alt: blog.title,
    className: "img img-fluid featured-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    className: "lead mark mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Written by ", blog.postedBy.name, " | published ", moment__WEBPACK_IMPORTED_MODULE_8___default()(blog.createdAt).fromNow()), __jsx("div", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, showBlogCategories(blog), showBlogTags(blog), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))))), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react_render_html__WEBPACK_IMPORTED_MODULE_9___default()(blog.body)))), __jsx("div", {
    className: "container pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Show comments"))))));
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
//# sourceMappingURL=[slug].js.dff6a6e7fa9ec1e32b37.hot-update.js.map