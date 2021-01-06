webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/footer/footer.tsx":
/*!*********************************************!*\
  !*** ./components/layout/footer/footer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\workspace\\blog\\components\\layout\\footer\\footer.tsx",
    _this = undefined;



var Footer = function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterWrap, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\uBCF8 \uC6F9\uC0AC\uC774\uD2B8\uB294 \uAC1C\uC778 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBAA9\uC801\uC73C\uB85C \uC81C\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\uBB38\uC758 \uC0AC\uD56D \uBC0F \uAC74\uC758 \uC0AC\uD56D\uC740 dlsgh120@gmail.com \uC73C\uB85C \uBCF4\uB0B4\uC8FC\uC2DC\uBA74 \uB2F5\uBCC0 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "footer_copyright",
        children: "Copyright \xA9 2021 by ChoiLog, Inc. All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c4 = Footer;
_c = Footer;
var FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "footer__FooterWrap",
  componentId: "sc-16sz3fp-0"
})(["width:100%;border-top:1px solid rgb(229,229,229);"]);
_c2 = FooterWrap;
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "footer__FooterContainer",
  componentId: "sc-16sz3fp-1"
})(["width:1180px;margin:0 auto;max-width:100%;padding:25px 0px;border:1px solid;&>p{margin:0;font-size:12px;line-height:20px;}&>.footer_copyright{font-weight:bold;}"]);
_c3 = FooterContainer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c, _c2, _c3;

$RefreshReg$(_c, "Footer");
$RefreshReg$(_c2, "FooterWrap");
$RefreshReg$(_c3, "FooterContainer");
;

var _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context
// to extract CSS. For backwards compatibility, we need to check we're in a
// browser context before continuing.


if (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:
'$RefreshHelpers$' in self) {
  var currentExports = module.__proto__.exports;
  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between
  // templating and execution.

  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when
  // it is a Refresh Boundary.

  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
    // Save the previous exports on update so we can compare the boundary
    // signatures.
    module.hot.dispose(function (data) {
      data.prevExports = currentExports;
    }); // Unconditionally accept an update to this module, we'll check if it's
    // still a Refresh Boundary later.

    module.hot.accept(); // This field is set when the previous version of this module was a
    // Refresh Boundary, letting us know we need to check for invalidation or
    // enqueue an update.

    if (prevExports !== null) {
      // A boundary can become ineligible if its exports are incompatible
      // with the previous exports.
      //
      // For example, if you add/remove/change exports, we'll want to
      // re-execute the importing modules, and force those components to
      // re-render. Similarly, if you convert a class component to a
      // function, we want to invalidate the boundary.
      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
        module.hot.invalidate();
      } else {
        self.$RefreshHelpers$.scheduleUpdate();
      }
    }
  } else {
    // Since we just executed the code for the module, it's possible that the
    // new exports made it ineligible for being a boundary.
    // We only care about the case when we were _previously_ a boundary,
    // because we already accepted this update (accidental side effect).
    var isNoLongerABoundary = prevExports !== null;

    if (isNoLongerABoundary) {
      module.hot.invalidate();
    }
  }
}

var _c4;

$RefreshReg$(_c4, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci50c3giXSwibmFtZXMiOlsiRm9vdGVyIiwiRm9vdGVyV3JhcCIsInN0eWxlZCIsIkZvb3RlckNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQUs7QUFDMUIsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREosS0FDSSxDQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSixLQUVJLENBRkosZUFHSTtBQUFHLGlCQUFTLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FISixLQUdJLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEtBQ0ksQ0FESjtBQURKOztNQUFNQSxNO0tBQUFBLE07QUFZTixJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBaEIsbURBQWdCLENBQUdBLENBQW5CO01BQU1ELFU7QUFLTixJQUFNRSxlQUFlLEdBQUdELHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBckIsa0tBQXFCLENBQUdBLENBQXhCO01BQU1DLGU7QUFlTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjJmYjRkYzIwOGVjOTY3YmNkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZvb3RlcldyYXA+XHJcbiAgICAgICAgICAgIDxGb290ZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cD7rs7gg7Ju57IKs7J207Yq464qUIOqwnOyduCDtj6ztirjtj7TrpqzsmKQg66qp7KCB7Jy866GcIOygnOyekeuQmOyXiOyKteuLiOuLpC48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7rrLjsnZgg7IKs7ZWtIOuwjyDqsbTsnZgg7IKs7ZWt7J2AIGRsc2doMTIwQGdtYWlsLmNvbSDsnLzroZwg67O064K07KO87Iuc66m0IOuLteuzgCDrk5zrpqzqsqDsirXri4jri6QuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX2NvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAyMDIxIGJ5IENob2lMb2csIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cclxuICAgICAgICAgICAgPC9Gb290ZXJDb250YWluZXI+XHJcbiAgICAgICAgPC9Gb290ZXJXcmFwPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgRm9vdGVyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjksIDIyOSwgMjI5KTtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoyNXB4IDBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAmPnB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgIH1cclxuICAgICY+LmZvb3Rlcl9jb3B5cmlnaHR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=