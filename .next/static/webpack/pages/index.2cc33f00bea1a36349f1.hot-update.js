webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/main/latestPosts.tsx":
/*!************************************************!*\
  !*** ./components/layout/main/latestPosts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _s2 = $RefreshSig$();




var _jsxFileName = "D:\\workspace\\blog\\components\\layout\\main\\latestPosts.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin:20px 0px 0px 0px;\n    display:flex;\n    justify-content:space-between;\n    &>article{\n        width:30%;\n        border:1px solid;\n        cursor: pointer;\n        &>.posts_wrap{\n            width:100%;\n            position: relative;\n            padding-bottom:120%;\n            &>.posts_thumb{\n               position: absolute;\n               top:0;\n               left:0;\n               right:0;\n               height:30%;\n               background-color:#333333;\n               display:flex;\n               &>p{\n                margin:auto;\n                font-size:20px;\n                color:#ffffff;\n               }\n            }\n            &>.posts_content{\n                position: absolute;\n                top:30%;\n                left:0;\n                right:0;\n                bottom:0;\n                padding:20px;\n                &>h2{\n                    margin:0;\n                }\n                &>p{\n                    margin: 20px 0px auto 0px;\n                }\n                &>.posts_writer{\n                    display:flex;\n                    position: absolute;\n                    &>.writer_image{\n                        width:30px;\n                        height:30px;\n                        border:1px solid #e5e5e5;\n                        border-radius:50%;\n                        background-color:#e5e5e5;\n                        margin:auto 0;\n                    }\n                    &>p{\n                        margin: auto 0px auto 20px;\n                    }\n                }\n                \n            }\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    &>h1{\n        font-size:28px;\n        font-weight:400;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n     margin: 50px 0px 0px 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width:1180px;\n    margin: 0 auto;\n    max-width:100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var LatestPosts = function LatestPosts() {
  _s2();

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Array.from({
    length: 3
  }, function (i, v) {
    return v;
  })),
      data = _useState[0],
      setData = _useState[1];

  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PostsWrap, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PostsContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PostsHeader, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          children: "Lastst Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PostsContent, {
        children: data.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "posts_wrap",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "posts_thumb",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: "Thumb Image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "posts_content",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
                  children: "blog title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  children: "blog content ..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "posts_writer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "writer_image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                    children: "writer_name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 25
            }, _this)
          }, item, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_s2(LatestPosts, "7UIuCCy/kIqrV9NczNcOhcPagYU=");

_c6 = LatestPosts;

_s(LatestPosts, "5d1WKuEQjteIxrnidmo7GfDctqg=");

_c = LatestPosts;
var PostsWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c2 = PostsWrap;
var PostsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
_c3 = PostsContainer;
var PostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
_c4 = PostsHeader;
var PostsContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
_c5 = PostsContent;
/* harmony default export */ __webpack_exports__["default"] = (LatestPosts);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "LatestPosts");
$RefreshReg$(_c2, "PostsWrap");
$RefreshReg$(_c3, "PostsContainer");
$RefreshReg$(_c4, "PostsHeader");
$RefreshReg$(_c5, "PostsContent");
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

var _c6;

$RefreshReg$(_c6, "LatestPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXRlc3RQb3N0cy50c3giXSwibmFtZXMiOlsiTGF0ZXN0UG9zdHMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsImRhdGEiLCJzZXREYXRhIiwiY29uc29sZSIsIlBvc3RzV3JhcCIsInN0eWxlZCIsIlBvc3RzQ29udGFpbmVyIiwiUG9zdHNIZWFkZXIiLCJQb3N0c0NvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBSztBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFNLEtBQUssQ0FBTCxLQUFXO0FBQUNDLFVBQU0sRUFBQztBQUFSLEdBQVgsRUFBc0I7QUFBQTtBQUQ3QixHQUNPLENBQU4sQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFFL0JDLFNBQU8sQ0FBUEE7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixLQUNJLENBREosZUFJSTtBQUFBLGtCQUNLLElBQUksQ0FBSixJQUFTO0FBQUEsOEJBQ1Y7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQWQ7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQWQ7QUFBQSx1Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosS0FDSSxDQURKLGVBSUk7QUFBSyx5QkFBUyxFQUFkO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosS0FDSSxDQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosS0FFSSxDQUZKLGVBR0k7QUFBSywyQkFBUyxFQUFkO0FBQUEsMENBQ0k7QUFBSyw2QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixLQUNJLENBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixLQUVJLENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLEtBR0ksQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosS0FJSSxDQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVSxLQUNWLENBRFU7QUFBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKSixLQUlJLENBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEtBQ0ksQ0FESjtBQUhKOztJQUFNTCxXOztNQUFBQSxXOztHQUFBQSxXOztLQUFBQSxXO0FBZ0NOLElBQU1NLFNBQVMsR0FBR0MseURBQU0sQ0FBVCxHQUFHQSxDQUFILGVBQWYsRUFBa0JBLENBQWxCO01BQU1ELFM7QUFNTixJQUFNRSxjQUFjLEdBQUdELHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxnQkFBcEIsRUFBdUJBLENBQXZCO01BQU1DLGM7QUFJTixJQUFNQyxXQUFXLEdBQUdGLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxnQkFBakIsRUFBb0JBLENBQXBCO01BQU1FLFc7QUFPTixJQUFNQyxZQUFZLEdBQUdILHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxnQkFBbEIsRUFBcUJBLENBQXJCO01BQU1HLFk7QUEyRE4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNjMzNmMDBiZWExYTM2MzQ5ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IExhdGVzdFBvc3RzOiBSZWFjdC5GQyA9ICgpID0+e1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55PihBcnJheS5mcm9tKHtsZW5ndGg6M30sKGksIHYpPT52KSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UG9zdHNXcmFwPlxyXG4gICAgICAgICAgICA8UG9zdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdHNIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkxhc3RzdCBQb3N0czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RzSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RzQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW06YW55KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c193cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzX3RodW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGh1bWIgSW1hZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5ibG9nIHRpdGxlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ibG9nIGNvbnRlbnQgLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNfd3JpdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGVyX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+d3JpdGVyX25hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPil9XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RzQ29udGVudD5cclxuICAgICAgICAgICAgPC9Qb3N0c0NvbnRhaW5lcj5cclxuICAgICAgICA8L1Bvc3RzV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RzV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgIG1hcmdpbjogNTBweCAwcHggMHB4IDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RzSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgICY+aDF7XHJcbiAgICAgICAgZm9udC1zaXplOjI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdHNDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjoyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAmPmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY+LnBvc3RzX3dyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTIwJTtcclxuICAgICAgICAgICAgJj4ucG9zdHNfdGh1bWJ7XHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OjMwJTtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICY+cHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJj4ucG9zdHNfY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDozMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAmPmgye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJj5we1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggYXV0byAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmPi5wb3N0c193cml0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAmPi53cml0ZXJfaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY+cHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweCBhdXRvIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IExhdGVzdFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=