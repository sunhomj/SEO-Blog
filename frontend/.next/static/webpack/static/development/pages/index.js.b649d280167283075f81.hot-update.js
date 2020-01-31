webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, signout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




var signup = function signup(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/signup"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var signin = function signin(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/signin"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
};
var signout = function signout(next) {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/signout"), {
    method: "GET"
  }).then(function (response) {
    console.log("Signout success");
  })["catch"](function (err) {
    return console.log(err);
  });
}; // set cookie

var setCookie = function setCookie(key, value) {
  // client side
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(key, value, {
      expires: 1
    });
  }
};
var removeCookie = function removeCookie(key) {
  // client side
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(key, {
      expires: 1
    });
  }
}; // get cookie

var getCookie = function getCookie(key) {
  // client side
  if (true) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(key);
  }
}; // localstorage

var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  }
};
var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
}; //authenticate user by passing data to cookie and localstorage

var authenticate = function authenticate(data, next) {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};
var isAuth = function isAuth() {
  if (true) {
    var cookieChecked = getCookie("token");

    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.b649d280167283075f81.hot-update.js.map