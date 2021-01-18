webpackHotUpdate_N_E("pages/join",{

/***/ "./components/user/join/joinComponent.tsx":
/*!************************************************!*\
  !*** ./components/user/join/joinComponent.tsx ***!
  \************************************************/
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



var _jsxFileName = "D:\\workspace\\blog\\components\\user\\join\\joinComponent.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var JoinComponent = function JoinComponent(_ref) {
  _s2();

  _s();

  var checkId = _ref.checkId,
      checkIdStatus = _ref.checkIdStatus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordConfirm = _useState3[0],
      setPasswordConfirm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var isEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  var isPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{7,}.$/;

  var onChangeHandler = function onChangeHandler(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;

    switch (id) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      case 'passwordConfirm':
        return setPasswordConfirm(value);

      case 'name':
        return setName(value);

      case 'phone':
        return setPhone(value);
    }
  };

  var emailCheckHandler = function emailCheckHandler() {
    checkId(email);
  };

  var joinHandler = function joinHandler() {
    if (!(checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status)) {
      var _document$getElementB;

      alert('이메일 정확히 입력해 주세요.');
      (_document$getElementB = document.getElementById('email')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.focus();
    } else if (!isPassword.test(password)) {
      var _document$getElementB2;

      alert('영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.');
      (_document$getElementB2 = document.getElementById('password')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.focus();
    } else if (password !== passwordConfirm) {
      var _document$getElementB3;

      alert('패스워드가 일치하지 않습니다.');
      (_document$getElementB3 = document.getElementById('passwordConfirm')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.focus();
    } else if (name === '') {
      var _document$getElementB4;

      alert('이름을 입력해주세요.');
      (_document$getElementB4 = document.getElementById('name')) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.focus();
    } else if (phone === '') {
      var _document$getElementB5;

      alert('핸드폰번호를 입력해주세요.');
      (_document$getElementB5 = document.getElementById('phone')) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.focus();
    } else {
      console.log(email, password, passwordConfirm, name, phone);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinWrap, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinHeader, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Choi Tech"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "E-mail\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
            value: email,
            id: "email",
            onChange: onChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: emailCheckHandler,
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.massage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: password,
          id: "password",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password Confirm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
          value: passwordConfirm,
          id: "passwordConfirm",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: name,
          id: "name",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\uD578\uB4DC\uD3F0\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "-\uB97C \uC81C\uC678\uD55C \uD578\uB4DC\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          value: phone,
          id: "phone",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "user_join",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: joinHandler,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginFooter, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Copyright \xA9 2021 by Choi Tech, Inc. All rights reserved"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s2(JoinComponent, "RM1tLPJOexqOFyLm6vfH+XQnESY=");

_c7 = JoinComponent;

_s(JoinComponent, "/7AvXMEl2Sql9pB9T+zJ6aPXHF4=");

_c = JoinComponent;
var JoinWrap = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "joinComponent__JoinWrap",
  componentId: "kgd1k2-0"
})([""]);
_c2 = JoinWrap;
var JoinContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "joinComponent__JoinContainer",
  componentId: "kgd1k2-1"
})(["width:360px;margin:150px auto;&>h1{margin:0px 0px 20px 0px;font-size:26px;}"]);
_c3 = JoinContainer;
var JoinHeader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "joinComponent__JoinHeader",
  componentId: "kgd1k2-2"
})(["text-align:center;&>a{font-family:'Audiowide',cursive;text-decoration:none;color:#333333;font-size:32px;}"]);
_c4 = JoinHeader;
var JoinContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "joinComponent__JoinContent",
  componentId: "kgd1k2-3"
})(["margin-top:30px;&>h1{font-size:16px;font-weight:400;text-align:center;}&>p{margin:10px 0px 5px 0px;font-size:10px;}&>div{display:flex;justify-content:space-between;&>input{padding:0 10px;width:calc(70% - 25px);height:45px;outline:none;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>button{width:25%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#fff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}&>input{width:calc(100% - 25px);height:50px;outline:none;padding:0 10px;margin-bottom:10px;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>.user_join{&>button{width:100%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#ffffff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}"]);
_c5 = JoinContent;
var LoginFooter = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "joinComponent__LoginFooter",
  componentId: "kgd1k2-4"
})(["margin-top:30px;&>p{font-size:10px;}"]);
_c6 = LoginFooter;
/* harmony default export */ __webpack_exports__["default"] = (JoinComponent);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "JoinComponent");
$RefreshReg$(_c2, "JoinWrap");
$RefreshReg$(_c3, "JoinContainer");
$RefreshReg$(_c4, "JoinHeader");
$RefreshReg$(_c5, "JoinContent");
$RefreshReg$(_c6, "LoginFooter");
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

var _c7;

$RefreshReg$(_c7, "JoinComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL2pvaW4vam9pbkNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiSm9pbkNvbXBvbmVudCIsImNoZWNrSWQiLCJjaGVja0lkU3RhdHVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInNldFBhc3N3b3JkQ29uZmlybSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImlzRW1haWwiLCJpc1Bhc3N3b3JkIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImlkIiwidmFsdWUiLCJlbWFpbENoZWNrSGFuZGxlciIsImpvaW5IYW5kbGVyIiwiYWxlcnQiLCJjb25zb2xlIiwibWFzc2FnZSIsIkpvaW5XcmFwIiwic3R5bGVkIiwiSm9pbkNvbnRhaW5lciIsIkpvaW5IZWFkZXIiLCJKb2luQ29udGVudCIsIkxvZ2luRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsYUFBa0IsUUFBbEJBLGFBQWtCOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FEOEIsRUFDOUIsQ0FEOEI7QUFBQSxNQUN6REMsS0FEeUQ7QUFBQSxNQUNsREMsUUFEa0Q7O0FBQUEsbUJBRWhDRixzREFBUSxDQUZ3QixFQUV4QixDQUZ3QjtBQUFBLE1BRXpERyxRQUZ5RDtBQUFBLE1BRS9DQyxXQUYrQzs7QUFBQSxtQkFHbEJKLHNEQUFRLENBSFUsRUFHVixDQUhVO0FBQUEsTUFHekRLLGVBSHlEO0FBQUEsTUFHeENDLGtCQUh3Qzs7QUFBQSxtQkFJeENOLHNEQUFRLENBSmdDLEVBSWhDLENBSmdDO0FBQUEsTUFJekRP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Q0ExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLEtBQ0ksQ0FESjtBQXZESjs7SUFBTWhCLGE7O01BQUFBLGE7O0dBQUFBLGE7O0tBQUFBLGE7QUE2Rk4sSUFBTXlCLFFBQVEsZ0JBQUdDLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBZCxFQUFjLENBQUdBLENBQWpCO01BQU1ELFE7QUFJTixJQUFNRSxhQUFhLGdCQUFHRCx5REFBTSxDQUFULEdBQUdBLENBQUgsVUFBR0EsQ0FBSDtBQUFBO0FBQUE7QUFBQSxDQUFHQSxFQUFILENBQW5CLDZFQUFtQixDQUFHQSxDQUF0QjtNQUFNQyxhO0FBUU4sSUFBTUMsVUFBVSxnQkFBR0YseURBQU0sQ0FBVCxHQUFHQSxDQUFILFVBQUdBLENBQUg7QUFBQTtBQUFBO0FBQUEsQ0FBR0EsRUFBSCxDQUFoQiwyR0FBZ0IsQ0FBR0EsQ0FBbkI7TUFBTUUsVTtBQVVOLElBQU1DLFdBQVcsZ0JBQUdILHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBakIsNnpCQUFpQixDQUFHQSxDQUFwQjtNQUFNRyxXO0FBK0ROLElBQU1DLFdBQVcsZ0JBQUdKLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBakIsc0NBQWlCLENBQUdBLENBQXBCO01BQU1JLFc7QUFNTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luLjI0OWRiNmI1NjQzMTBlOGM5NmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Y2hlY2tJZFN0YXR1c30gZnJvbSAnLi4vLi4vLi4vc3RvcmVzL3VzZXJzL3R5cGVzJztcclxuaW1wb3J0IHt0b0pTfSBmcm9tICdtb2J4JztcclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgY2hlY2tJZDooZW1haWw6c3RyaW5nKT0+dm9pZDtcclxuICAgIGNoZWNrSWRTdGF0dXM/OmNoZWNrSWRTdGF0dXM7XHJcbn1cclxuY29uc3QgSm9pbkNvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHtjaGVja0lkLCBjaGVja0lkU3RhdHVzfSkgPT57XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENvbmZpcm0sIHNldFBhc3N3b3JkQ29uZmlybV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBjb25zdCBpc0VtYWlsOmFueSA9IC9eWzAtOWEtekEtWl0oWy1fXFwuXT9bMC05YS16QS1aXSkqQFswLTlhLXpBLVpdKFstX1xcLl0/WzAtOWEtekEtWl0pKlxcLlthLXpBLVpdezIsM30kL2k7XHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkOmFueSA9IC9eKD89LipbQS1aYS16XSkoPz0uKlswLTldKSg/PS4qWyRAJCElKiM/Jl0pLns3LH0uJC87XHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZTphbnkpID0+e1xyXG4gICAgICAgIGNvbnN0IHtpZCwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKGlkKXtcclxuICAgICAgICAgICAgY2FzZSAnZW1haWwnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmQodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZENvbmZpcm0nIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZENvbmZpcm0odmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0TmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbWFpbENoZWNrSGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGNoZWNrSWQoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpvaW5IYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgaWYoIWNoZWNrSWRTdGF0dXM/LnN0YXR1cyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsnbTrqZTsnbwg7KCV7ZmV7Z6IIOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFpc1Bhc3N3b3JkLnRlc3QocGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+yYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpDrpbwg7Y+s7ZWo7ZWcIDjsnpDrpqwg7J207IOB7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pe1xyXG4gICAgICAgICAgICBhbGVydCgn7Yyo7Iqk7JuM65Oc6rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZENvbmZpcm0nKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYW1lPT09Jycpe1xyXG4gICAgICAgICAgICBhbGVydCgn7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaG9uZT09PScnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+2VuOuTnO2PsOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuJylcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtLCBuYW1lLCBwaG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Sm9pbldyYXA+XHJcbiAgICAgICAgICAgIDxKb2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEpvaW5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2hvaSBUZWNoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSm9pbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxKb2luQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+7ZqM7JuQIOygleuztOulvCDsnoXroKXtlbTso7zshLjsmpQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5lbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIgdmFsdWU9e2VtYWlsfSBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsQ2hlY2tIYW5kbGVyfT7spJHrs7XtmZXsnbg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hlY2tJZFN0YXR1cz8ubWFzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+cGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpQuXCIgdmFsdWU9e3Bhc3N3b3JkfSBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnBhc3N3b3JkIENvbmZpcm08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiIHZhbHVlPXtwYXNzd29yZENvbmZpcm19IGlkPVwicGFzc3dvcmRDb25maXJtXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoTsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIiB2YWx1ZT17bmFtZX0gaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPu2VuOuTnO2PsOuyiO2YuDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIi3rpbwg7KCc7Jm47ZWcIO2VuOuTnO2PsCDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqULlwiIHZhbHVlPXtwaG9uZX0gaWQ9XCJwaG9uZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfam9pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2pvaW5IYW5kbGVyfT5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0pvaW5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDIxIGJ5IENob2kgVGVjaCwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dpbkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Kb2luQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSm9pbldyYXA+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBKb2luV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuYDtcclxuXHJcbmNvbnN0IEpvaW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MzYwcHg7XHJcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87ICBcclxuICAgICY+aDF7XHJcbiAgICAgICAgbWFyZ2luOjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IEpvaW5IZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAmPmF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLGN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6MzJweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEpvaW5Db250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICY+aDF7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgJj5we1xyXG4gICAgICAgIG1hcmdpbjoxMHB4IDBweCA1cHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgfVxyXG4gICAgJj5kaXZ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICY+aW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDcwJSAtIDI1cHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4LCAxODQsIDEzNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJj5pbnB1dHtcclxuICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzMzMzMzMztcclxuICAgIH1cclxuICAgICY+LnVzZXJfam9pbntcclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOCwgMTg0LCAxMzQpO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuY29uc3QgTG9naW5Gb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAmPnB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IEpvaW5Db21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==