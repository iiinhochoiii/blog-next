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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nmargin-top:20px;\n    display:flex;\n    justify-content:space-between;\n    &>article{\n        width:30%;\n        &>div{\n            border:1px solid;\n        }\n    }\n"]);

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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXRlc3RQb3N0cy50c3giXSwibmFtZXMiOlsiTGF0ZXN0UG9zdHMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsImRhdGEiLCJzZXREYXRhIiwiY29uc29sZSIsIlBvc3RzV3JhcCIsInN0eWxlZCIsIlBvc3RzQ29udGFpbmVyIiwiUG9zdHNIZWFkZXIiLCJQb3N0c0NvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBSztBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFNLEtBQUssQ0FBTCxLQUFXO0FBQUNDLFVBQU0sRUFBQztBQUFSLEdBQVgsRUFBc0I7QUFBQTtBQUQ3QixHQUNPLENBQU4sQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFFL0JDLFNBQU8sQ0FBUEE7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixLQUNJLENBREosZUFJSTtBQUFBLGtCQUNLLElBQUksQ0FBSixJQUFTO0FBQUEsOEJBQ1Y7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURVLEtBQ1YsQ0FEVTtBQUFUO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLEtBSUksQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosS0FDSSxDQURKO0FBSEo7O0lBQU1MLFc7O01BQUFBLFc7O0dBQUFBLFc7O0tBQUFBLFc7QUFzQk4sSUFBTU0sU0FBUyxHQUFHQyx5REFBTSxDQUFULEdBQUdBLENBQUgsZUFBZixFQUFrQkEsQ0FBbEI7TUFBTUQsUztBQU1OLElBQU1FLGNBQWMsR0FBR0QseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFwQixFQUF1QkEsQ0FBdkI7TUFBTUMsYztBQUlOLElBQU1DLFdBQVcsR0FBR0YseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFqQixFQUFvQkEsQ0FBcEI7TUFBTUUsVztBQU9OLElBQU1DLFlBQVksR0FBR0gseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFsQixFQUFxQkEsQ0FBckI7TUFBTUcsWTtBQVdOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2MGY4NWQ4YTUyNzBiN2JkODU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMYXRlc3RQb3N0czogUmVhY3QuRkMgPSAoKSA9PntcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oQXJyYXkuZnJvbSh7bGVuZ3RoOjN9LChpLCB2KT0+dikpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFBvc3RzV3JhcD5cclxuICAgICAgICAgICAgPFBvc3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RzSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5MYXN0c3QgUG9zdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3N0c0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxQb3N0c0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtOmFueSk9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+KX1cclxuICAgICAgICAgICAgICAgIDwvUG9zdHNDb250ZW50PlxyXG4gICAgICAgICAgICA8L1Bvc3RzQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUG9zdHNXcmFwPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgUG9zdHNXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjExODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgbWFyZ2luOiA1MHB4IDBweCAwcHggMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdHNIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgJj5oMXtcclxuICAgICAgICBmb250LXNpemU6MjhweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0c0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICY+YXJ0aWNsZXtcclxuICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgJj5kaXZ7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBMYXRlc3RQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9