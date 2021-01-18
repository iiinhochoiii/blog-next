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
      checkIdStatus = _ref.checkIdStatus,
      createUser = _ref.createUser;

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
    if (!isEmail.test(email)) {
      alert('이메일을 정확히 입력해주세요.');
    } else {
      checkId(email);
    }
  };

  var joinHandler = function joinHandler() {
    if (!(checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status)) {
      var _document$getElementB;

      alert('중복확인을 하지 않았습니다.');
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
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "E-mail\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
            value: email,
            id: "email",
            onChange: onChangeHandler,
            readOnly: (checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status) && true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: emailCheckHandler,
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: (checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status) ? {
            color: "#333333"
          } : {
            color: "red"
          },
          children: checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.massage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: password,
          id: "password",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password Confirm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
          value: passwordConfirm,
          id: "passwordConfirm",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: "red"
          },
          children: passwordConfirm.length > 0 && password !== passwordConfirm ? "비밀번호가 일치하지 않습니다." : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: name,
          id: "name",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\uD578\uB4DC\uD3F0\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "-\uB97C \uC81C\uC678\uD55C \uD578\uB4DC\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          value: phone,
          id: "phone",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "user_join",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: joinHandler,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginFooter, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Copyright \xA9 2021 by Choi Tech, Inc. All rights reserved"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
})(["margin-top:30px;&>h1{font-size:16px;font-weight:400;text-align:center;}&>p{margin:10px 0px 5px 0px;font-size:10px;}&>span{font-size:12px;}&>div{display:flex;justify-content:space-between;margin-bottom:10px;&>input{padding:0 10px;width:calc(70% - 25px);height:45px;outline:none;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>button{width:25%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#fff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}&>input{width:calc(100% - 25px);height:50px;outline:none;padding:0 10px;margin-bottom:10px;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>.user_join{&>button{width:100%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#ffffff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL2pvaW4vam9pbkNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiSm9pbkNvbXBvbmVudCIsImNoZWNrSWQiLCJjaGVja0lkU3RhdHVzIiwiY3JlYXRlVXNlciIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJzZXRQYXNzd29yZENvbmZpcm0iLCJuYW1lIiwic2V0TmFtZSIsInBob25lIiwic2V0UGhvbmUiLCJpc0VtYWlsIiwiaXNQYXNzd29yZCIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJpZCIsInZhbHVlIiwiZW1haWxDaGVja0hhbmRsZXIiLCJhbGVydCIsImpvaW5IYW5kbGVyIiwiY29uc29sZSIsImNvbG9yIiwibWFzc2FnZSIsIkpvaW5XcmFwIiwic3R5bGVkIiwiSm9pbkNvbnRhaW5lciIsIkpvaW5IZWFkZXIiLCJKb2luQ29udGVudCIsIkxvZ2luRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxPQUF5QztBQUFBOztBQUFBOztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsTUFBZkMsVUFBZSxRQUFmQSxVQUFlOztBQUFBLGtCQUNsREMsc0RBQVEsQ0FEMEMsRUFDMUMsQ0FEMEM7QUFBQSxNQUNyRUMsS0FEcUU7QUFBQSxNQUM5REMsUUFEOEQ7O0FBQUEsbUJBRTVDRixzREFBUSxDQUZvQyxFQUVwQyxDQUZvQztBQUFBLE1BRXJFRyxRQUZxRTtBQUFBLE1BRTNEQyxXQUYyRDs7QUFBQSxtQkFHOUJKLHNEQUFRLENBSHNCLEVBR3RCLENBSHNCO0FBQUEsTUFHckVLLGVBSHFFO0FBQUEsTUFHcERDLGtCQUhv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QixDQUFHQSxDQUFuQjtNQUFNRSxVO0FBVU4sSUFBTUMsV0FBVyxnQkFBR0gseURBQU0sQ0FBVCxHQUFHQSxDQUFILFVBQUdBLENBQUg7QUFBQTtBQUFBO0FBQUEsQ0FBR0EsRUFBSCxDQUFqQix1MkJBQWlCLENBQUdBLENBQXBCO01BQU1HLFc7QUFtRU4sSUFBTUMsV0FBVyxnQkFBR0oseURBQU0sQ0FBVCxHQUFHQSxDQUFILFVBQUdBLENBQUg7QUFBQTtBQUFBO0FBQUEsQ0FBR0EsRUFBSCxDQUFqQixzQ0FBaUIsQ0FBR0EsQ0FBcEI7TUFBTUksVztBQU1OIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW4uNmRlYTRmYTI3NmYxNmUxMDc4MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Y2hlY2tJZFN0YXR1c30gZnJvbSAnLi4vLi4vLi4vc3RvcmVzL3VzZXJzL3R5cGVzJztcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGNoZWNrSWQ6KGVtYWlsOnN0cmluZyk9PnZvaWQ7XHJcbiAgICBjaGVja0lkU3RhdHVzPzpjaGVja0lkU3RhdHVzO1xyXG4gICAgY3JlYXRlVXNlcjooZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcsIG5hbWU6c3RyaW5nLCBwaG9uZTpzdHJpbmcpPT52b2lkO1xyXG59XHJcbmNvbnN0IEpvaW5Db21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7Y2hlY2tJZCwgY2hlY2tJZFN0YXR1cywgY3JlYXRlVXNlcn0pID0+e1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgaXNFbWFpbDphbnkgPSAvXlswLTlhLXpBLVpdKFstX1xcLl0/WzAtOWEtekEtWl0pKkBbMC05YS16QS1aXShbLV9cXC5dP1swLTlhLXpBLVpdKSpcXC5bYS16QS1aXXsyLDN9JC9pO1xyXG4gICAgY29uc3QgaXNQYXNzd29yZDphbnkgPSAvXig/PS4qW0EtWmEtel0pKD89LipbMC05XSkoPz0uKlskQCQhJSojPyZdKS57Nyx9LiQvO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6YW55KSA9PntcclxuICAgICAgICBjb25zdCB7aWQsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaChpZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RW1haWwodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZCcgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmRDb25maXJtJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRDb25maXJtKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnbmFtZScgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldE5hbWUodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdwaG9uZScgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1haWxDaGVja0hhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICBpZighaXNFbWFpbC50ZXN0KGVtYWlsKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsnbTrqZTsnbzsnYQg7KCV7ZmV7Z6IIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2hlY2tJZChlbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpvaW5IYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgaWYoIWNoZWNrSWRTdGF0dXM/LnN0YXR1cyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfspJHrs7XtmZXsnbjsnYQg7ZWY7KeAIOyViuyVmOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoIWlzUGFzc3dvcmQudGVzdChwYXNzd29yZCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn7JiB66y4LCDsiKvsnpAsIO2KueyImOusuOyekOulvCDtj6ztlajtlZwgOOyekOumrCDsnbTsg4HsnYQg7J6F66Cl7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCftjKjsiqTsm4zrk5zqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkQ29uZmlybScpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG5hbWU9PT0nJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHBob25lPT09Jycpe1xyXG4gICAgICAgICAgICBhbGVydCgn7ZW465Oc7Y+w67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalC4nKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0sIG5hbWUsIHBob25lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxKb2luV3JhcD5cclxuICAgICAgICAgICAgPEpvaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Sm9pbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5DaG9pIFRlY2g8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Kb2luSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPEpvaW5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT7tmozsm5Ag7KCV67O066W8IOyeheugpe2VtOyjvOyEuOyalC48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRS1tYWls7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIiB2YWx1ZT17ZW1haWx9IGlkPVwiZW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSByZWFkT25seT17Y2hlY2tJZFN0YXR1cz8uc3RhdHVzJiZ0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsQ2hlY2tIYW5kbGVyfT7spJHrs7XtmZXsnbg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Y2hlY2tJZFN0YXR1cz8uc3RhdHVzP3tjb2xvcjpcIiMzMzMzMzNcIn06e2NvbG9yOlwicmVkXCJ9fT57Y2hlY2tJZFN0YXR1cz8ubWFzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+cGFzc3dvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpQuXCIgdmFsdWU9e3Bhc3N3b3JkfSBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnBhc3N3b3JkIENvbmZpcm08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiIHZhbHVlPXtwYXNzd29yZENvbmZpcm19IGlkPVwicGFzc3dvcmRDb25maXJtXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19PntwYXNzd29yZENvbmZpcm0ubGVuZ3RoPjAmJnBhc3N3b3JkIT09cGFzc3dvcmRDb25maXJtP1wi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuXCI6XCJcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+bmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhOydhCDsnoXroKXtlbQg7KO87IS47JqULlwiIHZhbHVlPXtuYW1lfSBpZD1cIm5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+7ZW465Oc7Y+w67KI7Zi4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiLeulvCDsoJzsmbjtlZwg7ZW465Oc7Y+wIOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIgdmFsdWU9e3Bob25lfSBpZD1cInBob25lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9qb2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17am9pbkhhbmRsZXJ9PlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSm9pbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgYnkgQ2hvaSBUZWNoLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luRm9vdGVyPlxyXG4gICAgICAgICAgICA8L0pvaW5Db250YWluZXI+XHJcbiAgICAgICAgPC9Kb2luV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEpvaW5XcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgSm9pbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDozNjBweDtcclxuICAgIG1hcmdpbjogMTUwcHggYXV0bzsgIFxyXG4gICAgJj5oMXtcclxuICAgICAgICBtYXJnaW46MHB4IDBweCAyMHB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6MjZweDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgSm9pbkhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICY+YXtcclxuICAgICAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScsY3Vyc2l2ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSm9pbkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgJj5oMXtcclxuICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmPnB7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB9XHJcbiAgICAmPnNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICB9XHJcbiAgICAmPmRpdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICY+aW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDcwJSAtIDI1cHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4LCAxODQsIDEzNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJj5pbnB1dHtcclxuICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzMzMzMzMztcclxuICAgIH1cclxuICAgICY+LnVzZXJfam9pbntcclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOCwgMTg0LCAxMzQpO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuY29uc3QgTG9naW5Gb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAmPnB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IEpvaW5Db21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==