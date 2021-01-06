webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/main/mainComponent.tsx":
/*!**************************************************!*\
  !*** ./components/layout/main/mainComponent.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _latestPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latestPosts */ "./components/layout/main/latestPosts.tsx");


var _jsxFileName = "D:\\workspace\\blog\\components\\layout\\main\\mainComponent.tsx",
    _this = undefined;





var MainComponent = function MainComponent() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MainWrap, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MainBackground, {
      style: {
        backgroundImage: "url(".concat('./images/mainBackground.png', ")")
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uAC80\uC0C9\uD558\uC2E4 \uB0B4\uC6A9 \uBC0F \uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_latestPosts__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c4 = MainComponent;
_c = MainComponent;
var MainWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "mainComponent__MainWrap",
  componentId: "sc-1qzfhly-0"
})([""]);
_c2 = MainWrap;
var MainBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "mainComponent__MainBackground",
  componentId: "sc-1qzfhly-1"
})(["border:1px solid;height:500px;&>div{margin:0 auto;background-color:#ffffff;position:relative;top:65%;width:30%;height:45px;border:none;border-radius:10px;display:flex;padding:0 10px;&>input{margin:auto 0px auto 10px;height:80%;width:80%;outline:none;border:none;}&>svg{margin:auto 10px auto auto;cursor:pointer;}}"]);
_c3 = MainBackground;
/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

var _c, _c2, _c3;

$RefreshReg$(_c, "MainComponent");
$RefreshReg$(_c2, "MainWrap");
$RefreshReg$(_c3, "MainBackground");
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

$RefreshReg$(_c4, "MainComponent");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9tYWluQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiYmFja2dyb3VuZEltYWdlIiwiTWFpbldyYXAiLCJzdHlsZWQiLCJNYWluQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixHQUFLO0FBQ2pDLHNCQUNJO0FBQUEsNEJBQ0k7QUFBZ0IsV0FBSyxFQUFFO0FBQUNDLHVCQUFlO0FBQWhCLE9BQXZCO0FBQUEsNkJBQ1E7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBWDtBQUFtQixxQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixLQUNJLENBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosS0FFSSxDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixLQUNJLENBREosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUEosS0FPSSxDQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEtBQ0ksQ0FESjtBQURKOztNQUFNRCxhO0tBQUFBLGE7QUFjTixJQUFNRSxRQUFRLEdBQUdDLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBZCxFQUFjLENBQUdBLENBQWpCO01BQU1ELFE7QUFJTixJQUFNRSxjQUFjLEdBQUdELHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBcEIsMlRBQW9CLENBQUdBLENBQXZCO01BQU1DLGM7QUEyQk4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjIzMjhjNjRhNmRjNjE1MTI2NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuXHJcbmltcG9ydCBFeHBsYWluU2l0ZSBmcm9tICcuL2V4cGxhaW5TaXRlJztcclxuaW1wb3J0IExhdGVzdFBvc3RzIGZyb20gJy4vbGF0ZXN0UG9zdHMnO1xyXG5cclxuY29uc3QgTWFpbkNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbldyYXA+XHJcbiAgICAgICAgICAgIDxNYWluQmFja2dyb3VuZCBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7Jy4vaW1hZ2VzL21haW5CYWNrZ3JvdW5kLnBuZyd9KWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuqygOyDie2VmOyLpCDrgrTsmqkg67CPIO2CpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NYWluQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgPExhdGVzdFBvc3RzIC8+XHJcbiAgICAgICAgPC9NYWluV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IE1haW5XcmFwID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcblxyXG5jb25zdCBNYWluQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgICY+ZGl2e1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6NjUlO1xyXG4gICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICY+aW5wdXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjphdXRvIDBweCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo4MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJj5zdmd7XHJcbiAgICAgICAgICAgIG1hcmdpbjphdXRvIDEwcHggYXV0byBhdXRvO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=