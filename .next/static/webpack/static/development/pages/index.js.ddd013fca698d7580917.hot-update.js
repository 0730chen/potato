webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Nav */ "./component/Nav.js");
/* harmony import */ var _component_Tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Tags */ "./component/Tags.js");
/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Test */ "./component/Test.js");
/* harmony import */ var _style_reset_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/reset.scss */ "./style/reset.scss");
/* harmony import */ var _style_reset_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_reset_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Dialog */ "./component/Dialog.js");
/* harmony import */ var _style_aboutCss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/aboutCss */ "./style/aboutCss.js");
var _jsxFileName = "C:\\H5\\fanqitime\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function AddTab() {
  console.log('添加一个内容');
}

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      DialogView = _useState[0],
      setDialogView = _useState[1];

  var changeVisble = function changeVisble(data) {
    console.log(data);
    setDialogView(data);
  };

  var On = function On() {};

  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_component_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_component_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\u4EE3\u529E\u662F\u6307\u9700\u8981\u4E13\u6CE8\u7684\u4E8B",
    tag: "25\u5206\u949F",
    visible: true,
    data: changeVisble,
    onRef: _component_Tags__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_component_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\u70B9\u51FB\u6DFB\u52A0\u6309\u94AE\u6DFB\u52A0\u4EE3\u529E\u4E8B\u9879",
    tag: "10\u5206\u949F",
    visible: true,
    data: changeVisble,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_component_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\u70B9\u51FB\u4EE3\u529E\u7F16\u8F91\u6216\u5220\u9664",
    tag: "5\u5206\u949F",
    visible: true,
    data: changeVisble,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_component_Tags__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\u70B9\u51FB\u5F00\u59CB\u6309\u94AE\uFF0C\u5F00\u59CB\u8BA1\u65F6",
    tag: "1\u5206\u949F",
    visible: true,
    data: changeVisble,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_style_aboutCss__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: On,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_component_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    visible: DialogView,
    onCancel: function onCancel() {
      setDialogView(false);
    },
    onConfirm: function onConfirm() {
      console.log('点击了确定按钮');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u9884\u7EA6\u6570\u91CF\uFF1A"), __jsx("span", {
    className: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "2")), __jsx("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u603B\u91D1\u989D\u4E3A\uFF1A"), __jsx("span", {
    className: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\uFFE5200"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u4F59\u989D\u62B5\u6263\uFF1A"), __jsx("span", {
    className: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uFFE50")), __jsx("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u5E94\u4ED8\u4F59\u989D\uFF1A"), __jsx("span", {
    className: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uFFE5200")))))));
}

/***/ })

})
//# sourceMappingURL=index.js.ddd013fca698d7580917.hot-update.js.map