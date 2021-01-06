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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin:20px 0px 0px 0px;\n    display:flex;\n    justify-content:space-between;\n    &>article{\n        width:30%;\n        border:1px solid;\n        cursor: pointer;\n        &>.posts_wrap{\n            width:100%;\n            position: relative;\n            padding-bottom:120%;\n            &>.posts_thumb{\n               position: absolute;\n               top:0;\n               left:0;\n               right:0;\n               height:30%;\n               background-color:#333333;\n               display:flex;\n               &>p{\n                margin:auto;\n                font-size:20px;\n                color:#ffffff;\n               }\n            }\n            &>.posts_content{\n                position: absolute;\n                top:30%;\n                left:0;\n                right:0;\n                padding:0 15px;\n                &>h2{\n                    \n                }\n            }\n        }\n    }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9sYXRlc3RQb3N0cy50c3giXSwibmFtZXMiOlsiTGF0ZXN0UG9zdHMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsImRhdGEiLCJzZXREYXRhIiwiY29uc29sZSIsIlBvc3RzV3JhcCIsInN0eWxlZCIsIlBvc3RzQ29udGFpbmVyIiwiUG9zdHNIZWFkZXIiLCJQb3N0c0NvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBSztBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFNLEtBQUssQ0FBTCxLQUFXO0FBQUNDLFVBQU0sRUFBQztBQUFSLEdBQVgsRUFBc0I7QUFBQTtBQUQ3QixHQUNPLENBQU4sQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFFL0JDLFNBQU8sQ0FBUEE7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESixLQUNJLENBREosZUFJSTtBQUFBLGtCQUNLLElBQUksQ0FBSixJQUFTO0FBQUEsOEJBQ1Y7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQWQ7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQWQ7QUFBQSx1Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosS0FDSSxDQURKLGVBSUk7QUFBSyx5QkFBUyxFQUFkO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosS0FDSSxDQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosS0FFSSxDQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixLQUlJLENBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURVLEtBQ1YsQ0FEVTtBQUFUO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpKLEtBSUksQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosS0FDSSxDQURKO0FBSEo7O0lBQU1MLFc7O01BQUFBLFc7O0dBQUFBLFc7O0tBQUFBLFc7QUE0Qk4sSUFBTU0sU0FBUyxHQUFHQyx5REFBTSxDQUFULEdBQUdBLENBQUgsZUFBZixFQUFrQkEsQ0FBbEI7TUFBTUQsUztBQU1OLElBQU1FLGNBQWMsR0FBR0QseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFwQixFQUF1QkEsQ0FBdkI7TUFBTUMsYztBQUlOLElBQU1DLFdBQVcsR0FBR0YseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFqQixFQUFvQkEsQ0FBcEI7TUFBTUUsVztBQU9OLElBQU1DLFlBQVksR0FBR0gseURBQU0sQ0FBVCxHQUFHQSxDQUFILGdCQUFsQixFQUFxQkEsQ0FBckI7TUFBTUcsWTtBQXVDTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OWI1ZGM5MDA2OTljNTlhODQwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTGF0ZXN0UG9zdHM6IFJlYWN0LkZDID0gKCkgPT57XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KEFycmF5LmZyb20oe2xlbmd0aDozfSwoaSwgdik9PnYpKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxQb3N0c1dyYXA+XHJcbiAgICAgICAgICAgIDxQb3N0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxQb3N0c0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+TGFzdHN0IFBvc3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvUG9zdHNIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdHNDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbTphbnkpPT5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNfdGh1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaHVtYiBJbWFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmJsb2cgdGl0bGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmJsb2cgY29udGVudCAuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPil9XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RzQ29udGVudD5cclxuICAgICAgICAgICAgPC9Qb3N0c0NvbnRhaW5lcj5cclxuICAgICAgICA8L1Bvc3RzV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RzV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgIG1hcmdpbjogNTBweCAwcHggMHB4IDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RzSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgICY+aDF7XHJcbiAgICAgICAgZm9udC1zaXplOjI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdHNDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjoyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAmPmFydGljbGV7XHJcbiAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY+LnBvc3RzX3dyYXB7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTIwJTtcclxuICAgICAgICAgICAgJj4ucG9zdHNfdGh1bWJ7XHJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OjMwJTtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzMzMzMzO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICY+cHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJj4ucG9zdHNfY29udGVudHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDozMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAmPmgye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBMYXRlc3RQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9