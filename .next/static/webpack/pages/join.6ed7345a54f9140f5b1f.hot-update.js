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
            lineNumber: 76,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
            lineNumber: 83,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: emailCheckHandler,
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
          lineNumber: 86,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: password,
          id: "password",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "password Confirm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
          value: passwordConfirm,
          id: "passwordConfirm",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: passwordConfirm.length > 0 && password !== passwordConfirm ? "비밀번호가 일치하지 않습니다." : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: name,
          id: "name",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\uD578\uB4DC\uD3F0\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "-\uB97C \uC81C\uC678\uD55C \uD578\uB4DC\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          value: phone,
          id: "phone",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "user_join",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: joinHandler,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginFooter, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Copyright \xA9 2021 by Choi Tech, Inc. All rights reserved"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
})(["margin-top:30px;&>h1{font-size:16px;font-weight:400;text-align:center;}&>p{margin:10px 0px 5px 0px;font-size:10px;}&>span{font-size:12px;}&>div{display:flex;justify-content:space-between;&>input{padding:0 10px;width:calc(70% - 25px);height:45px;outline:none;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>button{width:25%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#fff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}&>input{width:calc(100% - 25px);height:50px;outline:none;padding:0 10px;margin-bottom:10px;font-size:12px;background:none;border-radius:5px;border:1px solid #333333;}&>.user_join{&>button{width:100%;height:45px;cursor:pointer;outline:none;background-color:rgb(18,184,134);color:#ffffff;font-size:16px;font-weight:bold;border:none;border-radius:5px;}}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL2pvaW4vam9pbkNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiSm9pbkNvbXBvbmVudCIsImNoZWNrSWQiLCJjaGVja0lkU3RhdHVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInNldFBhc3N3b3JkQ29uZmlybSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImlzRW1haWwiLCJpc1Bhc3N3b3JkIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImlkIiwidmFsdWUiLCJlbWFpbENoZWNrSGFuZGxlciIsImFsZXJ0Iiwiam9pbkhhbmRsZXIiLCJjb25zb2xlIiwiY29sb3IiLCJtYXNzYWdlIiwiSm9pbldyYXAiLCJzdHlsZWQiLCJKb2luQ29udGFpbmVyIiwiSm9pbkhlYWRlciIsIkpvaW5Db250ZW50IiwiTG9naW5Gb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxhQUFrQixRQUFsQkEsYUFBa0I7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUQ4QixFQUM5QixDQUQ4QjtBQUFBLE1BQ3pEQyxLQUR5RDtBQUFBLE1BQ2xEQyxRQURrRDs7QUFBQSxtQkFFaENGLHNEQUFRLENBRndCLEVBRXhCLENBRndCO0FBQUEsTUFFekRHLFFBRnlEO0FBQUEsTUFFL0NDLFdBRitDOztBQUFBLG1CQUdsQkosc0RBQVEsQ0FIVSxFQUdWLENBSFU7QUFBQSxNQUd6REssZUFIeUQ7QUFBQSxNQUd4Q0Msa0JBSHdDOztBQUFBLG1CQUl4Q04sc0RBQVEsQ0FKZ0MsRUFJaEMsQ0FKZ0M7QUFB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O0FBQUEsQ0FBR0EsRUFBSCxDQUFqQixvMUJBQWlCLENBQUdBLENBQXBCO01BQU1HLFc7QUFrRU4sSUFBTUMsV0FBVyxnQkFBR0oseURBQU0sQ0FBVCxHQUFHQSxDQUFILFVBQUdBLENBQUg7QUFBQTtBQUFBO0FBQUEsQ0FBR0EsRUFBSCxDQUFqQixzQ0FBaUIsQ0FBR0EsQ0FBcEI7TUFBTUksVztBQU1OIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2pvaW4uNmVkNzM0NWE1NGY5MTQwZjViMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtjaGVja0lkU3RhdHVzfSBmcm9tICcuLi8uLi8uLi9zdG9yZXMvdXNlcnMvdHlwZXMnO1xyXG5pbXBvcnQge3RvSlN9IGZyb20gJ21vYngnO1xyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgICBjaGVja0lkOihlbWFpbDpzdHJpbmcpPT52b2lkO1xyXG4gICAgY2hlY2tJZFN0YXR1cz86Y2hlY2tJZFN0YXR1cztcclxufVxyXG5jb25zdCBKb2luQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NoZWNrSWQsIGNoZWNrSWRTdGF0dXN9KSA9PntcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ29uZmlybSwgc2V0UGFzc3dvcmRDb25maXJtXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIGNvbnN0IGlzRW1haWw6YW55ID0gL15bMC05YS16QS1aXShbLV9cXC5dP1swLTlhLXpBLVpdKSpAWzAtOWEtekEtWl0oWy1fXFwuXT9bMC05YS16QS1aXSkqXFwuW2EtekEtWl17MiwzfSQvaTtcclxuICAgIGNvbnN0IGlzUGFzc3dvcmQ6YW55ID0gL14oPz0uKltBLVphLXpdKSg/PS4qWzAtOV0pKD89LipbJEAkISUqIz8mXSkuezcsfS4kLztcclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlOmFueSkgPT57XHJcbiAgICAgICAgY29uc3Qge2lkLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzd2l0Y2goaWQpe1xyXG4gICAgICAgICAgICBjYXNlICdlbWFpbCcgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkQ29uZmlybScgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkQ29uZmlybSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ25hbWUnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXROYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtYWlsQ2hlY2tIYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgaWYoIWlzRW1haWwudGVzdChlbWFpbCkpe1xyXG4gICAgICAgICAgICBhbGVydCgn7J2066mU7J287J2EIOygle2Zle2eiCDsnoXroKXtlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNoZWNrSWQoZW1haWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqb2luSGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGlmKCFjaGVja0lkU3RhdHVzPy5zdGF0dXMpe1xyXG4gICAgICAgICAgICBhbGVydCgn7KSR67O17ZmV7J247J2EIO2VmOyngCDslYrslZjsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFpc1Bhc3N3b3JkLnRlc3QocGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+yYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpDrpbwg7Y+s7ZWo7ZWcIDjsnpDrpqwg7J207IOB7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pe1xyXG4gICAgICAgICAgICBhbGVydCgn7Yyo7Iqk7JuM65Oc6rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZENvbmZpcm0nKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYW1lPT09Jycpe1xyXG4gICAgICAgICAgICBhbGVydCgn7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaG9uZT09PScnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+2VuOuTnO2PsOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuJylcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtLCBuYW1lLCBwaG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Sm9pbldyYXA+XHJcbiAgICAgICAgICAgIDxKb2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEpvaW5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2hvaSBUZWNoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSm9pbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxKb2luQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+7ZqM7JuQIOygleuztOulvCDsnoXroKXtlbTso7zshLjsmpQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5lbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIgdmFsdWU9e2VtYWlsfSBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gcmVhZE9ubHk9e2NoZWNrSWRTdGF0dXM/LnN0YXR1cyYmdHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlbWFpbENoZWNrSGFuZGxlcn0+7KSR67O17ZmV7J24PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2NoZWNrSWRTdGF0dXM/LnN0YXR1cz97Y29sb3I6XCIjMzMzMzMzXCJ9Ontjb2xvcjpcInJlZFwifX0+e2NoZWNrSWRTdGF0dXM/Lm1hc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlwiIHZhbHVlPXtwYXNzd29yZH0gaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5wYXNzd29yZCBDb25maXJtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiB2YWx1ZT17cGFzc3dvcmRDb25maXJtfSBpZD1cInBhc3N3b3JkQ29uZmlybVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFzc3dvcmRDb25maXJtLmxlbmd0aD4wJiZwYXNzd29yZCE9PXBhc3N3b3JkQ29uZmlybT9cIuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLlwiOlwiXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPm5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLsnbTrpoTsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIiB2YWx1ZT17bmFtZX0gaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPu2VuOuTnO2PsOuyiO2YuDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIi3rpbwg7KCc7Jm47ZWcIO2VuOuTnO2PsCDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqULlwiIHZhbHVlPXtwaG9uZX0gaWQ9XCJwaG9uZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfam9pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2pvaW5IYW5kbGVyfT5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0pvaW5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDIxIGJ5IENob2kgVGVjaCwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dpbkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Kb2luQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSm9pbldyYXA+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBKb2luV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuYDtcclxuXHJcbmNvbnN0IEpvaW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MzYwcHg7XHJcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87ICBcclxuICAgICY+aDF7XHJcbiAgICAgICAgbWFyZ2luOjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IEpvaW5IZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAmPmF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLGN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgICAgICBmb250LXNpemU6MzJweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEpvaW5Db250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICY+aDF7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgJj5we1xyXG4gICAgICAgIG1hcmdpbjoxMHB4IDBweCA1cHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgfVxyXG4gICAgJj5zcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgfVxyXG4gICAgJj5kaXZ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICY+aW5wdXR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDpjYWxjKDcwJSAtIDI1cHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4LCAxODQsIDEzNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJj5pbnB1dHtcclxuICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzMzMzMzMztcclxuICAgIH1cclxuICAgICY+LnVzZXJfam9pbntcclxuICAgICAgICAmPmJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOCwgMTg0LCAxMzQpO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuY29uc3QgTG9naW5Gb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAmPnB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IEpvaW5Db21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==