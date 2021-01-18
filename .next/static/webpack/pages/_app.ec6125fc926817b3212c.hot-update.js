webpackHotUpdate_N_E("pages/_app",{

/***/ "./stores/users/userStore.ts":
/*!***********************************!*\
  !*** ./stores/users/userStore.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _BaseStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BaseStore */ "./stores/BaseStore.ts");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/client */ "./lib/client.ts");











var _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}





var UserStore = (_class = (_temp = /*#__PURE__*/function (_BaseStore) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UserStore, _BaseStore);

  var _super = _createSuper(UserStore);

  function UserStore() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, UserStore);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "_checkIdStatus", _descriptor, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "initUserInfo", _descriptor2, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "checkId", _descriptor3, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

    Object(mobx__WEBPACK_IMPORTED_MODULE_10__["makeObservable"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(UserStore, [{
    key: "checkIdStatus",
    get: function get() {
      return this._checkIdStatus;
    }
  }]);

  return UserStore;
}(_BaseStore__WEBPACK_IMPORTED_MODULE_11__["default"]), _temp), (_descriptor = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "_checkIdStatus", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "checkIdStatus", [mobx__WEBPACK_IMPORTED_MODULE_10__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "checkIdStatus"), _class.prototype), _descriptor2 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "initUserInfo", [mobx__WEBPACK_IMPORTED_MODULE_10__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function () {};
  }
}), _descriptor3 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "checkId", [mobx__WEBPACK_IMPORTED_MODULE_10__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2._checkIdStatus = undefined;

                _this2._init('CHECK_EMAIL_COMPLETE');

                _context.prev = 2;
                _context.next = 5;
                return _lib_client__WEBPACK_IMPORTED_MODULE_13__["default"].post('/api/users/checkId', qs__WEBPACK_IMPORTED_MODULE_12___default.a.stringify({
                  email: email
                }));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.data;

              case 8:
                _this2._checkIdStatus = _context.sent;
                _this2._success["CHECK_EMAIL_COMPLETE"] = true;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                _this2._failure["CHECK_EMAIL_COMPLETE"] = [true, _context.t0];

              case 15:
                _context.prev = 15;
                _this2._pending["CHECK_EMAIL_COMPLETE"] = false;
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 15, 18]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (UserStore);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3VzZXJzL3VzZXJTdG9yZS50cyJdLCJuYW1lcyI6WyJVc2VyU3RvcmUiLCJtYWtlT2JzZXJ2YWJsZSIsIkJhc2VTdG9yZSIsIm9ic2VydmFibGUiLCJjb21wdXRlZCIsImFjdGlvbiIsImVtYWlsIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtJQUVNQSxTOzs7OztBQUNGLHVCQUFjO0FBQUE7O0FBQUE7O0FBQ2hCOztBQURnQjs7QUFBQTs7QUFBQTs7QUFFaEJDLGdFQUFjLGtHQUFkQSxLQUFjLEVBQWRBO0FBRmdCO0FBR2I7Ozs7d0JBTWtCO0FBQ2YsYUFBTyxLQUFQO0FBQ0g7Ozs7RUFabUJDLG1ELG1LQU1uQkMsZ0Q7Ozs7OzRJQUdBQyw4QyxnUEFLQUMsNEM7Ozs7O1dBQ2MsWUFBSyxDOztxSkFHbkJBLDRDOzs7Ozs7OztrTUFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTixzQkFBSSxDQUFKOztBQUNBLHNCQUFJLENBQUo7O0FBRk07QUFBQTtBQUFBLHVCQUlnQixvREFBTSxDQUFOLDJCQUFrQywwQ0FBRSxDQUFGLFVBQWE7QUFBQ0MsdUJBQUssRUFBQ0E7QUFBUCxpQkFBYixDQUFsQyxDQUpoQjs7QUFBQTtBQUlJQyxtQkFKSixnQkFJSUE7QUFKSjtBQUFBLHVCQUswQkEsR0FBRyxDQUw3Qjs7QUFBQTtBQUtGLHNCQUFJLENBTEYsY0FLRixHQUxFLGFBS0Y7QUFDQSxzQkFBSSxDQUFKO0FBTkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRRixzQkFBSSxDQUFKLG1DQUF3QyxnQkFBeEMsRUFBd0MsQ0FBeEM7O0FBUkU7QUFBQTtBQVVGLHNCQUFJLENBQUo7QUFWRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQWVkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWM2MTI1ZmM5MjY4MTdiMzIxMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWN0aW9uLCBvYnNlcnZhYmxlLCBjb21wdXRlZCwgbWFrZU9ic2VydmFibGV9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge2NoZWNrSWRTdGF0dXN9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gJy4uL0Jhc2VTdG9yZSc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XHJcblxyXG5jbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBCYXNlU3RvcmV7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRtYWtlT2JzZXJ2YWJsZSh0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG9ic2VydmFibGVcclxuICAgIF9jaGVja0lkU3RhdHVzPzpjaGVja0lkU3RhdHVzO1xyXG5cclxuICAgIEBjb21wdXRlZFxyXG4gICAgZ2V0IGNoZWNrSWRTdGF0dXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tJZFN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBpbml0VXNlckluZm8gPSAoKSA9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIEBhY3Rpb25cclxuICAgIGNoZWNrSWQgPSBhc3luYyhlbWFpbDpzdHJpbmcpID0+e1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSWRTdGF0dXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5faW5pdCgnQ0hFQ0tfRU1BSUxfQ09NUExFVEUnKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5wb3N0KCcvYXBpL3VzZXJzL2NoZWNrSWQnLCBxcy5zdHJpbmdpZnkoe2VtYWlsOmVtYWlsfSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0lkU3RhdHVzID0gYXdhaXQgcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3NbXCJDSEVDS19FTUFJTF9DT01QTEVURVwiXSA9IHRydWU7XHJcbiAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgdGhpcy5fZmFpbHVyZVtcIkNIRUNLX0VNQUlMX0NPTVBMRVRFXCJdID0gW3RydWUsIGVdO1xyXG4gICAgICAgIH0gZmluYWxseXtcclxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1tcIkNIRUNLX0VNQUlMX0NPTVBMRVRFXCJdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==