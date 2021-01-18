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
    if (!isEmail.test(email)) {
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
            lineNumber: 72,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
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
            lineNumber: 79,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: emailCheckHandler,
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
        lineNumber: 75,
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
      lineNumber: 69,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL2pvaW4vam9pbkNvbXBvbmVudC50c3giXSwibmFtZXMiOlsiSm9pbkNvbXBvbmVudCIsImNoZWNrSWQiLCJjaGVja0lkU3RhdHVzIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsInNldFBhc3N3b3JkQ29uZmlybSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImlzRW1haWwiLCJpc1Bhc3N3b3JkIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImlkIiwidmFsdWUiLCJlbWFpbENoZWNrSGFuZGxlciIsImpvaW5IYW5kbGVyIiwiYWxlcnQiLCJjb25zb2xlIiwiSm9pbldyYXAiLCJzdHlsZWQiLCJKb2luQ29udGFpbmVyIiwiSm9pbkhlYWRlciIsIkpvaW5Db250ZW50IiwiTG9naW5Gb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLGFBQThCLEdBQUcsU0FBakNBLGFBQWlDLE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxhQUFrQixRQUFsQkEsYUFBa0I7O0FBQUEsa0JBRXRDQyxzREFBUSxDQUY4QixFQUU5QixDQUY4QjtBQUFBLE1BRXpEQyxLQUZ5RDtBQUFBLE1BRWxEQyxRQUZrRDs7QUFBQSxtQkFHaENGLHNEQUFRLENBSHdCLEVBR3hCLENBSHdCO0FBQUEsTUFHekRHLFFBSHlEO0FBQUEsTUFHL0NDLFdBSCtDOztBQUFBLG1CQUlsQkosc0RBQVEsQ0FKVSxFQUlWLENBSlU7QUFBQSxNQUl6REssZUFKeUQ7QUFBQSxNQUl4Q0Msa0JBSndDOztBQUFBLG1CQUt4Q04sc0RBQVEsQ0FMZ0MsRUFLaEMsQ0FMZ0M7QUFBQSxNQUt6RE8sSUFMeUQ7QUFB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R0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBZCxFQUFjLENBQUdBLENBQWpCO01BQU1ELFE7QUFJTixJQUFNRSxhQUFhLGdCQUFHRCx5REFBTSxDQUFULEdBQUdBLENBQUgsVUFBR0EsQ0FBSDtBQUFBO0FBQUE7QUFBQSxDQUFHQSxFQUFILENBQW5CLDZFQUFtQixDQUFHQSxDQUF0QjtNQUFNQyxhO0FBUU4sSUFBTUMsVUFBVSxnQkFBR0YseURBQU0sQ0FBVCxHQUFHQSxDQUFILFVBQUdBLENBQUg7QUFBQTtBQUFBO0FBQUEsQ0FBR0EsRUFBSCxDQUFoQiwyR0FBZ0IsQ0FBR0EsQ0FBbkI7TUFBTUUsVTtBQVVOLElBQU1DLFdBQVcsZ0JBQUdILHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBakIsNnpCQUFpQixDQUFHQSxDQUFwQjtNQUFNRyxXO0FBK0ROLElBQU1DLFdBQVcsZ0JBQUdKLHlEQUFNLENBQVQsR0FBR0EsQ0FBSCxVQUFHQSxDQUFIO0FBQUE7QUFBQTtBQUFBLENBQUdBLEVBQUgsQ0FBakIsc0NBQWlCLENBQUdBLENBQXBCO01BQU1JLFc7QUFNTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luLjQxNGViNWZjYzkwZTE0MzhkNThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge2NoZWNrSWRTdGF0dXN9IGZyb20gJy4uLy4uLy4uL3N0b3Jlcy91c2Vycy90eXBlcyc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGNoZWNrSWQ6KGVtYWlsOnN0cmluZyk9PnZvaWQ7XHJcbiAgICBjaGVja0lkU3RhdHVzPzpjaGVja0lkU3RhdHVzO1xyXG59XHJcbmNvbnN0IEpvaW5Db21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7Y2hlY2tJZCwgY2hlY2tJZFN0YXR1c30pID0+e1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ29uZmlybSwgc2V0UGFzc3dvcmRDb25maXJtXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIGNvbnN0IGlzRW1haWw6YW55ID0gL15bMC05YS16QS1aXShbLV9cXC5dP1swLTlhLXpBLVpdKSpAWzAtOWEtekEtWl0oWy1fXFwuXT9bMC05YS16QS1aXSkqXFwuW2EtekEtWl17MiwzfSQvaTtcclxuICAgIGNvbnN0IGlzUGFzc3dvcmQ6YW55ID0gL14oPz0uKltBLVphLXpdKSg/PS4qWzAtOV0pKD89LipbJEAkISUqIz8mXSkuezcsfS4kLztcclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlOmFueSkgPT57XHJcbiAgICAgICAgY29uc3Qge2lkLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBzd2l0Y2goaWQpe1xyXG4gICAgICAgICAgICBjYXNlICdlbWFpbCcgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Bhc3N3b3JkQ29uZmlybScgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkQ29uZmlybSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ25hbWUnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXROYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAncGhvbmUnIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQaG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtYWlsQ2hlY2tIYW5kbGVyID0gKCkgPT57XHJcbiAgICAgICAgY2hlY2tJZChlbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgam9pbkhhbmRsZXIgPSAoKSA9PntcclxuICAgICAgICBpZighaXNFbWFpbC50ZXN0KGVtYWlsKSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfsnbTrqZTsnbwg7KCV7ZmV7Z6IIOyeheugpe2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpPy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCFpc1Bhc3N3b3JkLnRlc3QocGFzc3dvcmQpKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+yYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpDrpbwg7Y+s7ZWo7ZWcIDjsnpDrpqwg7J207IOB7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pe1xyXG4gICAgICAgICAgICBhbGVydCgn7Yyo7Iqk7JuM65Oc6rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZENvbmZpcm0nKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYW1lPT09Jycpe1xyXG4gICAgICAgICAgICBhbGVydCgn7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKT8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaG9uZT09PScnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ+2VuOuTnO2PsOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuJylcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJyk/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtLCBuYW1lLCBwaG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Sm9pbldyYXA+XHJcbiAgICAgICAgICAgIDxKb2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEpvaW5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2hvaSBUZWNoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvSm9pbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxKb2luQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+7ZqM7JuQIOygleuztOulvCDsnoXroKXtlbTso7zshLjsmpQuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5lbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbOydhCDsnoXroKXtlbTso7zshLjsmpQuXCIgdmFsdWU9e2VtYWlsfSBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsQ2hlY2tIYW5kbGVyfT7spJHrs7XtmZXsnbg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5wYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIiB2YWx1ZT17cGFzc3dvcmR9IGlkPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+cGFzc3dvcmQgQ29uZmlybTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ZmV7J24XCIgdmFsdWU9e3Bhc3N3b3JkQ29uZmlybX0gaWQ9XCJwYXNzd29yZENvbmZpcm1cIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+bmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuydtOumhOydhCDsnoXroKXtlbQg7KO87IS47JqULlwiIHZhbHVlPXtuYW1lfSBpZD1cIm5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+7ZW465Oc7Y+w67KI7Zi4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiLeulvCDsoJzsmbjtlZwg7ZW465Oc7Y+wIOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQuXCIgdmFsdWU9e3Bob25lfSBpZD1cInBob25lXCIgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9qb2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17am9pbkhhbmRsZXJ9PlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSm9pbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjEgYnkgQ2hvaSBUZWNoLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luRm9vdGVyPlxyXG4gICAgICAgICAgICA8L0pvaW5Db250YWluZXI+XHJcbiAgICAgICAgPC9Kb2luV3JhcD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IEpvaW5XcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgSm9pbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDozNjBweDtcclxuICAgIG1hcmdpbjogMTUwcHggYXV0bzsgIFxyXG4gICAgJj5oMXtcclxuICAgICAgICBtYXJnaW46MHB4IDBweCAyMHB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6MjZweDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgSm9pbkhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICY+YXtcclxuICAgICAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScsY3Vyc2l2ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICBjb2xvcjojMzMzMzMzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSm9pbkNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgJj5oMXtcclxuICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmPnB7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB9XHJcbiAgICAmPmRpdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgJj5pbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOmNhbGMoNzAlIC0gMjVweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDo0NXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY+YnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDo0NXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTgsIDE4NCwgMTM0KTtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmPmlucHV0e1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDI1cHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgfVxyXG4gICAgJj4udXNlcl9qb2lue1xyXG4gICAgICAgICY+YnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4LCAxODQsIDEzNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBMb2dpbkZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbm1hcmdpbi10b3A6MzBweDtcclxuICAgICY+cHtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgSm9pbkNvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9