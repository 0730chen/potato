webpackHotUpdate("static\\development\\pages\\blank.js",{

/***/ "./pages/blank.js":
/*!************************!*\
  !*** ./pages/blank.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Nav */ "./component/Nav.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_Tiitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Tiitle */ "./component/Tiitle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\H5\\fanqitime\\pages\\blank.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blank__Container",
  componentId: "sc-1h9mgqx-0"
})(["display:flex;flex-direction:column-reverse;"]);

var Page = function Page(props) {
  console.log(props);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_component_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u4EE3\u529E\u4E8B\u9879\u9875\u9762", __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.foo)), __jsx(_component_Tiitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

Page.getInitialProps = function (_ref) {
  var store = _ref.store,
      isServer = _ref.isServer,
      pathname = _ref.pathname,
      query = _ref.query;
  store.dispatch({
    type: 'FOO',
    payload: '代办'
  }); // The component can read from the store's state when rendered

  return {
    custom: 'custom'
  }; // You can pass some custom props to the component from here
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(Page));

/***/ })

})
//# sourceMappingURL=blank.js.cbd7633d980185b15c2b.hot-update.js.map