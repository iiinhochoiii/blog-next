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
            readOnly: (checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status) && true,
            style: (checkIdStatus === null || checkIdStatus === void 0 ? void 0 : checkIdStatus.status) ? {} : {}
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
          value: name,
          id: "name",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\uD578\uB4DC\uD3F0\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "-\uB97C \uC81C\uC678\uD55C \uD578\uB4DC\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          value: phone,
          id: "phone",
          onChange: onChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "user_join",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: joinHandler,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          lineNumber: 100,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL2pvaW4vam9pbkNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiSm9pbkNvbXBvbmVudCIsImNoZWNrSWQiLCJjaGVja0lkU3RhdHVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInNldFBhc3N3b3JkQ29uZmlybSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImlzRW1haWwiLCJpc1Bhc3N3b3JkIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImlkIiwidmFsdWUiLCJlbWFpbENoZWNrSGFuZGxlciIsImFsZXJ0Iiwiam9pbkhhbmRsZXIiLCJjb25zb2xlIiwiY29sb3IiLCJtYXNzYWdlIiwiSm9pbldyYXAiLCJzdHlsZWQiLCJKb2luQ29udGFpbmVyIiwiSm9pbkhlYWRlciIsIkpvaW5Db250ZW50IiwiTG9naW5Gb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxhQUFrQixRQUFsQkEsYUFBa0I7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUQ4QixFQUM5QixDQUQ4QjtBQUFBLE1BQ3pEQyxLQUR5RDtBQUFBLE1BQ2xEQyxRQURrRDs7QUFBQSxtQkFFaENGLHNEQUFRLENBRndCLEVBRXhCLENBRndCO0FBQUEsTUFFekRHLFFBRnlEO0FBQUEsTUFFL0NDLFdBRitDOztBQUFBLG1CQUdsQkosc0RBQVEsQ0FIVSxFQUdWLENBSFU7QUFBQSxNQUd6REssZUFIeUQ7QUFBQSxNQUd4Q0Msa0JBSHdDOztBQUFBLG1CQUl4Q04sc0RBQVEsQ0FKZ0MsRUFJaEMsQ0FKZ0M7QUFB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QUFNRyxXO0FBa0VOLElBQU1DLFdBQVcsZ0JBQUdKLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBakIsc0NBQWlCLENBQUdBLENBQXBCO01BQU1JLFc7QUFNTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luLjUxYWVjYmU4NTk5N2M5OWRkOTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Y2hlY2tJZFN0YXR1c30gZnJvbSAnLi4vLi4vLi4vc3RvcmVzL3VzZXJzL3R5cGVzJztcclxuaW1wb3J0IHt0b0pTfSBmcm9tICdtb2J4JztcclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgY2hlY2tJZDooZW1haWw6c3RyaW5nKT0+dm9pZDtcclxuICAgIGNoZWNrSWRTdGF0dXM/OmNoZWNrSWRTdGF0dXM7XHJcbn1cclxuY29uc3QgSm9pbkNvbXBvbmVudDogUmVhY3QuRkM8UHJvcHM+ID0gKHtjaGVja0lkLCBjaGVja0lkU3RhdHVzfSkgPT57XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENvbmZpcm0sIHNldFBhc3N3b3JkQ29uZmlybV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBjb25zdCBpc0VtYWlsOmFueSA9IC9eWzAtOWEtekEtWl0oWy1fXFwuXT9bMC05YS16QS1aXSkqQFswLTlhLXpBLVpdKFstX1xcLl0/WzAtOWEtekEtWl0pKlxcLlthLXpBLVpdezIsM30kL2k7XHJcbiAgICBjb25zdCBpc1Bhc3N3b3JkOmFueSA9IC9eKD89LipbQS1aYS16XSkoPz0uKlswLTldKSg/PS4qWyRAJCElKiM/Jl0pLns3LH0uJC87XHJcbiAgICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZTphbnkpID0+e1xyXG4gICAgICAgIGNvbnN0IHtpZCwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoKGlkKXtcclxuICAgICAgICAgICAgY2FzZSAnZW1haWwnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmQodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdwYXNzd29yZENvbmZpcm0nIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZENvbmZpcm0odmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0TmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bob25lJyA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbWFpbENoZWNrSGFuZGxlciA9ICgpID0+e1xyXG4gICAgICAgIGlmKCFpc0VtYWlsLnRlc3QoZW1haWwpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ydtOuplOydvOydhCDsoJXtmZXtnogg7J6F66Cl7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjaGVja0lkKGVtYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgam9pbkhhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICBpZighY2hlY2tJZFN0YXR1cz8uc3RhdHVzKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ykkeuzte2ZleyduOydhCDtlZjsp4Ag7JWK7JWY7Iq164uI64ukLicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZighaXNQYXNzd29yZC50ZXN0KHBhc3N3b3JkKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsmIHrrLgsIOyIq+yekCwg7Yq57IiY66y47J6Q66W8IO2PrO2VqO2VnCA47J6Q66asIOydtOyDgeydhCDsnoXroKXtlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+2MqOyKpOybjOuTnOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRDb25maXJtJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobmFtZT09PScnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+ydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocGhvbmU9PT0nJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCftlbjrk5ztj7DrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqULicpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSwgbmFtZSwgcGhvbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEpvaW5XcmFwPlxyXG4gICAgICAgICAgICA8Sm9pbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxKb2luSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNob2kgVGVjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0pvaW5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Sm9pbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPu2ajOybkCDsoJXrs7Trpbwg7J6F66Cl7ZW07KO87IS47JqULjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+ZW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFLW1haWzsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiIHZhbHVlPXtlbWFpbH0gaWQ9XCJlbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHJlYWRPbmx5PXtjaGVja0lkU3RhdHVzPy5zdGF0dXMmJnRydWV9IHN0eWxlPXtjaGVja0lkU3RhdHVzPy5zdGF0dXM/e306e319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlbWFpbENoZWNrSGFuZGxlcn0+7KSR67O17ZmV7J24PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2NoZWNrSWRTdGF0dXM/LnN0YXR1cz97Y29sb3I6XCIjMzMzMzMzXCJ9Ontjb2xvcjpcInJlZFwifX0+e2NoZWNrSWRTdGF0dXM/Lm1hc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqULlwiIHZhbHVlPXtwYXNzd29yZH0gaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5wYXNzd29yZCBDb25maXJtPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiB2YWx1ZT17cGFzc3dvcmRDb25maXJtfSBpZD1cInBhc3N3b3JkQ29uZmlybVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5uYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi7J2066aE7J2EIOyeheugpe2VtCDso7zshLjsmpQuXCIgdmFsdWU9e25hbWV9IGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cD7tlbjrk5ztj7DrsojtmLg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIt66W8IOygnOyZuO2VnCDtlbjrk5ztj7Ag67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalC5cIiB2YWx1ZT17cGhvbmV9IGlkPVwicGhvbmVcIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX2pvaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtqb2luSGFuZGxlcn0+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Kb2luQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxMb2dpbkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgwqkgMjAyMSBieSBDaG9pIFRlY2gsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvTG9naW5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvSm9pbkNvbnRhaW5lcj5cclxuICAgICAgICA8L0pvaW5XcmFwPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgSm9pbldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbmA7XHJcblxyXG5jb25zdCBKb2luQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjM2MHB4O1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvOyAgXHJcbiAgICAmPmgxe1xyXG4gICAgICAgIG1hcmdpbjowcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBKb2luSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgJj5he1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJyxjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOjMycHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBKb2luQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAmPmgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgICY+cHtcclxuICAgICAgICBtYXJnaW46MTBweCAwcHggNXB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgIH1cclxuICAgICY+c3BhbntcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgIH1cclxuICAgICY+ZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAmPmlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6Y2FsYyg3MCUgLSAyNXB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgJj5idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjI1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOCwgMTg0LCAxMzQpO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY+aW5wdXR7XHJcbiAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgICAmPi51c2VyX2pvaW57XHJcbiAgICAgICAgJj5idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDo0NXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTgsIDE4NCwgMTM0KTtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IExvZ2luRm9vdGVyID0gc3R5bGVkLmRpdmBcclxubWFyZ2luLXRvcDozMHB4O1xyXG4gICAgJj5we1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBKb2luQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=