webpackHotUpdate("static\\development\\pages\\admin\\crud\\blog.js",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogWithCategoriesAndTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogWithCategoriesAndTags", function() { return listBlogWithCategoriesAndTags; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var createBlog = function createBlog(blog, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog"), {
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
var listBlogWithCategoriesAndTags = function listBlogWithCategoriesAndTags(blog, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blogs-categories-tags"), {
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

/***/ })

})
//# sourceMappingURL=blog.js.15124120670476df2db6.hot-update.js.map