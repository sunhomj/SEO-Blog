webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
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
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Administrator\\Documents\\GitHub\\SEO-Blog\\frontend\\pages\\blogs\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Blogs = function Blogs(_ref) {
  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      size = _ref.size,
      router = _ref.router;

  var head = function head() {
    __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, " Programming Blogs | ", _config__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next web development",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_6__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "Lastest web development tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, index) {
      return __jsx("article", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        blog: blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    });
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/categories/".concat(c.slug),
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-info mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, c.name));
    });
  };

  var showAllTags = function showAllTags() {
    return tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, t.name));
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, " ", "Programming blogs and tutor"), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "pb-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, showAllCategories(), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), showAllTags()))), __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, showAllBlogs(), " ")))))));
}; //server-side rendering method from next.js    getinitialprops - can be used only on pages Not in components


Blogs.getInitialProps = function () {
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listBlogWithCategoriesAndTags"])().then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      }; // once these are returned, these can be used as props.
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Blogs));

/***/ })

})
//# sourceMappingURL=blogs.js.96f9835d7bfda0c9c09e.hot-update.js.map