webpackHotUpdate("static/development/pages/admin/crud/category-tag.js",{

/***/ "./actions/tag.js":
/*!************************!*\
  !*** ./actions/tag.js ***!
  \************************/
/*! exports provided: create, getTags, singleTag, removeTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTag", function() { return singleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTag", function() { return removeTag; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



var create = function create(tag, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/tag"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer ".concat(token)
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tag)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var getTags = function getTags() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/tags"), {
    method: "GET"
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var singleTag = function singleTag(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/tag/").concat(slug), {
    method: "GET"
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var removeTag = function removeTag(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/tag/").concat(slug), {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};

/***/ }),

/***/ "./components/crud/Tag.js":
/*!********************************!*\
  !*** ./components/crud/Tag.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");







var _jsxFileName = "/Users/Slothums/Desktop/Sunho Lee/Seo blog/SEO-Blog/frontend/components/crud/Tag.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var Tag = function Tag() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    name: "",
    error: false,
    success: false,
    tags: [],
    removed: false,
    reload: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      error = values.error,
      success = values.success,
      tags = values.tags,
      removed = values.removed,
      reload = values.reload;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["getCookie"])("token");
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    loadTags();
  }, [reload]);

  var loadTags = function loadTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_11__["getTags"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues(_objectSpread({}, values, {
          tags: data
        }));
      }
    });
  };

  var showTags = function showTags() {
    return tags.map(function (el, index) {
      return __jsx("button", {
        onDoubleClick: function onDoubleClick() {
          return deleteConfirm(el.slug);
        },
        title: "Double click to delete",
        key: index,
        className: "btn btn-outline-primary mr-1 ml-1 mt-3 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, el.name);
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm("Are you sure you want to delete this tag? ");

    if (answer) {
      deleteTag(slug);
    }
  };

  var deleteTag = function deleteTag(slug) {
    console.log("delete", slug);
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_11__["removeTag"])(slug, token).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues(_objectSpread({}, values, {
          error: false,
          success: false,
          name: "",
          removed: !removed,
          reload: !reload
        }));
      }
    });
  };

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_11__["create"])({
      name: name
    }, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error,
          success: false
        }));
      } else {
        console.log(data);
        setValues(_objectSpread({}, values, {
          error: false,
          success: true,
          name: "",
          removed: false,
          reload: !reload
        }));
      }
    });
    console.log("create tag :", name);
  };

  var handleChange = function handleChange(e) {
    setValues(_objectSpread({}, values, {
      name: e.target.value,
      error: false,
      success: false,
      removed: ""
    }));
  };

  var showSuccess = function showSuccess() {
    if (success) {
      return __jsx("p", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Tag is created");
    }
  };

  var showError = function showError() {
    if (error) {
      return __jsx("p", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Tag already exist");
    }
  };

  var showRemoved = function showRemoved() {
    if (removed) {
      return __jsx("p", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Tag is removed");
    }
  };

  var newTagForm = function newTagForm() {
    return __jsx("form", {
      onSubmit: clickSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("label", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Name"), __jsx("input", {
      type: "text",
      className: "form-control",
      onChange: handleChange,
      value: name,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Create"));
  };

  var mouseMoveHandler = function mouseMoveHandler() {
    setValues(_objectSpread({}, values, {
      error: false,
      success: false,
      removed: ""
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, showSuccess(), showError(), showRemoved(), __jsx("div", {
    onMouseMove: mouseMoveHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, newTagForm(), showTags()));
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=category-tag.js.d32385feba603453168d.hot-update.js.map