webpackHotUpdate_N_E("pages/qna",{

/***/ "./components/layout/header/headers.tsx":
/*!**********************************************!*\
  !*** ./components/layout/header/headers.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _s2 = $RefreshSig$();



var _jsxFileName = "D:\\workspace\\blog\\blog-nextjs\\components\\layout\\header\\headers.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Headers = function Headers() {
  _s2();

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      height = _useState[0],
      setHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (true) {
      var handleResize = function handleResize() {
        setHeight(window.scrollY);
      };

      window.addEventListener('scroll', handleResize);
      return function () {
        return window.removeEventListener('scroll', handleResize);
      };
    }
  }, [height]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderWrap, {
    style: height > 0 ? {
      position: "fixed",
      top: "0"
    } : {},
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Choi Tech"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/blog",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uBE14\uB85C\uADF8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/project",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/question",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uC9C8\uBB38\uACFC\uB2F5\uBCC0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "auth",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uB85C\uADF8\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/join",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s2(Headers, "SKWEdFyxm34dsf9PjeCNDJSl/NQ=");

_c5 = Headers;

_s(Headers, "3yP+5bOMcb83Qg5dW7875YG6Md8=");

_c = Headers;
var HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "headers__HeaderWrap",
  componentId: "sc-1cy9sxb-0"
})(["background:#ffffff;box-shadow:rgba(0,0,0,0.05) 0px 5px 10px -5px;padding:20px 0px;width:100%;z-index:10;"]);
_c2 = HeaderWrap;
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "headers__HeaderContainer",
  componentId: "sc-1cy9sxb-1"
})(["width:1180px;max-width:100%;margin:0 auto;"]);
_c3 = HeaderContainer;
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "headers__HeaderContent",
  componentId: "sc-1cy9sxb-2"
})(["display:flex;justify-content:space-between;&>div{&>p{margin:0;}&>a{color:#333333;text-decoration:none;cursor:pointer;}}&>.logo{font-family:'Audiowide',cursive;&>a{font-size:22px;}}&>.menu{display:flex;&>a{margin:0px 10px;font-weight:bold;}}&>.auth{display:flex;&>a{margin-left:10px;font-weight:bold;color:rgb(80,80,80);}}"]);
_c4 = HeaderContent;
/* harmony default export */ __webpack_exports__["default"] = (Headers);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Headers");
$RefreshReg$(_c2, "HeaderWrap");
$RefreshReg$(_c3, "HeaderContainer");
$RefreshReg$(_c4, "HeaderContent");
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

var _c5;

$RefreshReg$(_c5, "Headers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlcnMudHN4Il0sIm5hbWVzIjpbIkhlYWRlcnMiLCJ1c2VTdGF0ZSIsImhlaWdodCIsInNldEhlaWdodCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsInBvc2l0aW9uIiwidG9wIiwiSGVhZGVyV3JhcCIsInN0eWxlZCIsIkhlYWRlckNvbnRhaW5lciIsIkhlYWRlckNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQWdCLEdBQUcsU0FBbkJBLE9BQW1CLEdBQUs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FEVixDQUNVLENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUcxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2xCLGNBQW1DO0FBQ2xDLFVBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJGLGlCQUFTLENBQUNHLE1BQU0sQ0FBaEJILE9BQVMsQ0FBVEE7QUFERDs7QUFHQUcsWUFBTSxDQUFOQTtBQUNBLGFBQU87QUFBQSxlQUFNQSxNQUFNLENBQU5BLDhCQUFOLFlBQU1BLENBQU47QUFBUDtBQUNBO0FBUFUsS0FRTixDQVJIRixNQVFHLENBUk0sQ0FBVEE7QUFVQSxzQkFDSTtBQUFZLFNBQUssRUFBRSxNQUFNLEdBQU4sSUFBUztBQUFDRyxjQUFRLEVBQVQ7QUFBbUJDLFNBQUcsRUFBQztBQUF2QixLQUFULEdBQW5CO0FBQUEsMkJBQ0k7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBZDtBQUFBLGlDQUNJO0FBQU0sZ0JBQUksRUFBVjtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixLQUNJLENBREosZUFNSTtBQUFLLG1CQUFTLEVBQWQ7QUFBQSxrQ0FDSTtBQUFNLGdCQUFJLEVBQVY7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixLQUNJLENBREosZUFJSTtBQUFNLGdCQUFJLEVBQVY7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixLQUlJLENBSkosZUFPSTtBQUFNLGdCQUFJLEVBQVY7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixLQU9JLENBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTkosS0FNSSxDQU5KLGVBaUJJO0FBQUssbUJBQVMsRUFBZDtBQUFBLGtDQUNJO0FBQU0sZ0JBQUksRUFBVjtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEtBQ0ksQ0FESixlQUlJO0FBQU0sZ0JBQUksRUFBVjtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEtBSUksQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FqQkosS0FpQkksQ0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixLQUNJLENBREo7QUFiSjs7SUFBTVIsTzs7TUFBQUEsTzs7R0FBQUEsTzs7S0FBQUEsTztBQStDTixJQUFNUyxVQUFVLEdBQUdDLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBaEIsMEdBQWdCLENBQUdBLENBQW5CO01BQU1ELFU7QUFRTixJQUFNRSxlQUFlLEdBQUdELHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBckIsNENBQXFCLENBQUdBLENBQXhCO01BQU1DLGU7QUFNTixJQUFNQyxhQUFhLEdBQUdGLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBbkIsbVVBQW1CLENBQUdBLENBQXRCO01BQU1FLGE7QUFtQ04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcW5hLjI1MTEzYWZlMDY5MmY3NTE5MWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEhlYWRlcnM6UmVhY3QuRkMgPSAoKSA9PntcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG5cdFx0XHRcdHNldEhlaWdodCh3aW5kb3cuc2Nyb2xsWSk7XG5cdFx0XHR9O1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0XHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0fVxuICAgIH0sIFtoZWlnaHRdKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxIZWFkZXJXcmFwIHN0eWxlPXtoZWlnaHQ+MD97cG9zaXRpb246XCJmaXhlZFwiLCB0b3A6XCIwXCJ9Ont9fT5cbiAgICAgICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DaG9pIFRlY2g8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuu4lOuhnOq3uDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2UhOuhnOygne2KuDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcXVlc3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7sp4jrrLjqs7zri7Xrs4A8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7roZzqt7jsnbg8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pvaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyQ29udGVudD5cbiAgICAgICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8L0hlYWRlcldyYXA+XG4gICAgKTtcbn1cblxuY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDVweCAxMHB4IC01cHg7XG4gICAgcGFkZGluZzoyMHB4IDBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHotaW5kZXg6MTA7XG5gO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOjExODBweDtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICBtYXJnaW46MCBhdXRvO1xuYDtcblxuY29uc3QgSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgICY+ZGl2e1xuICAgICAgICAmPnB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgfVxuICAgICAgICAmPmF7XG4gICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJj4ubG9nb3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBmb250LXNpemU6MjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmPi5tZW51e1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICY+YXtcbiAgICAgICAgICAgIG1hcmdpbjowcHggMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJj4uYXV0aHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIGNvbG9yOnJnYig4MCw4MCw4MCk7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyczsiXSwic291cmNlUm9vdCI6IiJ9