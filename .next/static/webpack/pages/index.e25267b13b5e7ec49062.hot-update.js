webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/main/mainComponent.tsx":
/*!**************************************************!*\
  !*** ./components/layout/main/mainComponent.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "D:\\workspace\\blog\\components\\layout\\main\\mainComponent.tsx",
    _this = undefined;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 1px solid;\n    height:400px;\n    &>div{\n        margin:0 auto;\n        background-color:#ffffff;\n        position: relative;\n        top:65%;\n        outline:none;\n        width:30%;\n        height:40px;\n        border:none;\n        border-radius:15px;\n        &>input{\n            padding:0 10px;\n            height:85%;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var MainComponent = function MainComponent() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MainWrap, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MainBackground, {
      style: {
        backgroundImage: "url(".concat('./images/mainBackground.png', ")")
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uAC80\uC0C9\uD558\uC2E4 \uB0B4\uC6A9 \uBC0F \uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c4 = MainComponent;
_c = MainComponent;
var MainWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c2 = MainWrap;
var MainBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9tYWluQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiYmFja2dyb3VuZEltYWdlIiwiTWFpbldyYXAiLCJzdHlsZWQiLCJNYWluQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQSxJQUFNQSxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixHQUFLO0FBQ2pDLHNCQUNJO0FBQUEsMkJBQ0k7QUFBZ0IsV0FBSyxFQUFFO0FBQUNDLHVCQUFlO0FBQWhCLE9BQXZCO0FBQUEsNkJBQ1E7QUFBQSwrQkFDSTtBQUFPLGNBQUksRUFBWDtBQUFtQixxQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixLQUNJLENBREo7QUFESjs7TUFBTUQsYTtLQUFBQSxhO0FBYU4sSUFBTUUsUUFBUSxHQUFHQyx5REFBTSxDQUFULEdBQUdBLENBQUgsZUFBZCxFQUFpQkEsQ0FBakI7TUFBTUQsUTtBQUlOLElBQU1FLGNBQWMsR0FBR0QseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFwQixFQUF1QkEsQ0FBdkI7TUFBTUMsYztBQW1CTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjUyNjdiMTNiNWU3ZWM0OTA2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5cclxuY29uc3QgTWFpbkNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbldyYXA+XHJcbiAgICAgICAgICAgIDxNYWluQmFja2dyb3VuZCBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7Jy4vaW1hZ2VzL21haW5CYWNrZ3JvdW5kLnBuZyd9KWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuqygOyDie2VmOyLpCDrgrTsmqkg67CPIO2CpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWFpbkJhY2tncm91bmQ+XHJcbiAgICAgICAgPC9NYWluV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IE1haW5XcmFwID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcblxyXG5jb25zdCBNYWluQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgICY+ZGl2e1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6NjUlO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgICY+aW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ODUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9