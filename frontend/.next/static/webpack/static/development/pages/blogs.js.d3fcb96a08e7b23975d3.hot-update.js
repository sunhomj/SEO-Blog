webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogWithCategoriesAndTags, sigleBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogWithCategoriesAndTags", function() { return listBlogWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sigleBlog", function() { return sigleBlog; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



var createBlog = function createBlog(blog, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blog"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var listBlogWithCategoriesAndTags = function listBlogWithCategoriesAndTags(limit, skip) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs-categories-tags"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var sigleBlog = function sigleBlog(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs/").concat(slug), {
    method: "GET"
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

/***/ })

})
//# sourceMappingURL=blogs.js.d3fcb96a08e7b23975d3.hot-update.js.map