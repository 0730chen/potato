webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Tags.js":
/*!***************************!*\
  !*** ./component/Tags.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\H5\\fanqitime\\component\\Tags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Tag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tags__Tag",
  componentId: "sc-119g0fs-0"
})(["border:1px solid black;padding:10px 20px;margin:8px 8px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]);
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Tags__Div",
  componentId: "sc-119g0fs-1"
})(["display:flex;flex-direction:column;"]);
var Font = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Tags__Font",
  componentId: "sc-119g0fs-2"
})(["font-size:12px;margin:10px 0;"]);
function Tags(props) {
  var show = function show() {
    console.log('子组件方法');
  };

  var click = function click() {
    console.log('点击');
  };

  return __jsx(Tag, {
    onClick: function onClick(e) {
      click();
      console.log(props);
      props.onRef(show);
      props.data(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.name), __jsx(Font, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.tag)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u5F00\u59CB"));
}

/***/ })

})
//# sourceMappingURL=index.js.37ebc87bc6bd829fdd20.hot-update.js.map