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











var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

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

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "createUser", _descriptor4, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

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
    var _this2 = this;

    return function () {
      _this2._checkIdStatus = undefined;
    };
  }
}), _descriptor3 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "checkId", [mobx__WEBPACK_IMPORTED_MODULE_10__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3._checkIdStatus = undefined;

                _this3._init('CHECK_EMAIL_COMPLETE');

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
                _this3._checkIdStatus = _context.sent;
                _this3._success["CHECK_EMAIL_COMPLETE"] = true;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                _this3._failure["CHECK_EMAIL_COMPLETE"] = [true, _context.t0];

              case 15:
                _context.prev = 15;
                _this3._pending["CHECK_EMAIL_COMPLETE"] = false;
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
}), _descriptor4 = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__["default"])(_class.prototype, "createUser", [mobx__WEBPACK_IMPORTED_MODULE_10__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password, name, phone) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4._init('CREATE_USER');

                _context2.prev = 1;
                _context2.next = 4;
                return _lib_client__WEBPACK_IMPORTED_MODULE_13__["default"].post('/api/users', qs__WEBPACK_IMPORTED_MODULE_12___default.a.stringify({
                  email: email,
                  password: password,
                  name: name,
                  phone: phone
                }));

              case 4:
                res = _context2.sent;

                if (res.data.status) {
                  _this4._success["CREATE_USER"] = true;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                _this4._failure["CREATE_USER"] = [true, _context2.t0];

              case 11:
                _context2.prev = 11;
                _this4._pending["CREATE_USER"] = false;
                return _context2.finish(11);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8, 11, 14]]);
      }));

      return function (_x2, _x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3VzZXJzL3VzZXJTdG9yZS50cyJdLCJuYW1lcyI6WyJVc2VyU3RvcmUiLCJtYWtlT2JzZXJ2YWJsZSIsIkJhc2VTdG9yZSIsIm9ic2VydmFibGUiLCJjb21wdXRlZCIsImFjdGlvbiIsImVtYWlsIiwicmVzIiwicGFzc3dvcmQiLCJuYW1lIiwicGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0lBRU1BLFM7Ozs7O0FBQ0YsdUJBQWM7QUFBQTs7QUFBQTs7QUFDaEI7O0FBRGdCOztBQUFBOztBQUFBOztBQUFBOztBQUVoQkMsZ0VBQWMsa0dBQWRBLEtBQWMsRUFBZEE7QUFGZ0I7QUFHYjs7Ozt3QkFNa0I7QUFDZixhQUFPLEtBQVA7QUFDSDs7OztFQVptQkMsbUQsbUtBTW5CQyxnRDs7Ozs7NElBR0FDLDhDLGdQQUtBQyw0Qzs7Ozs7OztXQUNjLFlBQUs7QUFDaEIsWUFBSSxDQUFKOzs7cUpBR0hBLDRDOzs7Ozs7OztrTUFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTixzQkFBSSxDQUFKOztBQUNBLHNCQUFJLENBQUo7O0FBRk07QUFBQTtBQUFBLHVCQUlnQixvREFBTSxDQUFOLDJCQUFrQywwQ0FBRSxDQUFGLFVBQWE7QUFBQ0MsdUJBQUssRUFBQ0E7QUFBUCxpQkFBYixDQUFsQyxDQUpoQjs7QUFBQTtBQUlJQyxtQkFKSixnQkFJSUE7QUFKSjtBQUFBLHVCQUswQkEsR0FBRyxDQUw3Qjs7QUFBQTtBQUtGLHNCQUFJLENBTEYsY0FLRixHQUxFLGFBS0Y7QUFDQSxzQkFBSSxDQUFKO0FBTkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRRixzQkFBSSxDQUFKLG1DQUF3QyxnQkFBeEMsRUFBd0MsQ0FBeEM7O0FBUkU7QUFBQTtBQVVGLHNCQUFJLENBQUo7QUFWRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O3dKQWNURiw0Qzs7Ozs7Ozs7bU1BQ1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1Qsc0JBQUksQ0FBSjs7QUFEUztBQUFBO0FBQUEsdUJBR2Esb0RBQU0sQ0FBTixtQkFBMEIsMENBQUUsQ0FBRixVQUFhO0FBQUNDLHVCQUFLLEVBQU47QUFBY0UsMEJBQVEsRUFBdEI7QUFBaUNDLHNCQUFJLEVBQXJDO0FBQTRDQyx1QkFBSyxFQUFDQTtBQUFsRCxpQkFBYixDQUExQixDQUhiOztBQUFBO0FBR0NILG1CQUhELGlCQUdDQTs7QUFDTixvQkFBR0EsR0FBRyxDQUFIQSxLQUFILFFBQW1CO0FBQ2Ysd0JBQUksQ0FBSjtBQUNIOztBQU5JO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUUwsc0JBQUksQ0FBSiwwQkFBK0IsaUJBQS9CLEVBQStCLENBQS9COztBQVJLO0FBQUE7QUFVTCxzQkFBSSxDQUFKO0FBVks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFlakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYWYxYzRjNjI1ZDE3YTdjZmEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthY3Rpb24sIG9ic2VydmFibGUsIGNvbXB1dGVkLCBtYWtlT2JzZXJ2YWJsZX0gZnJvbSAnbW9ieCc7XG5pbXBvcnQge2NoZWNrSWRTdGF0dXN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEJhc2VTdG9yZSBmcm9tICcuLi9CYXNlU3RvcmUnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XG5cbmNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIEJhc2VTdG9yZXtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdG1ha2VPYnNlcnZhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBAb2JzZXJ2YWJsZVxuICAgIF9jaGVja0lkU3RhdHVzPzpjaGVja0lkU3RhdHVzO1xuXG4gICAgQGNvbXB1dGVkXG4gICAgZ2V0IGNoZWNrSWRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrSWRTdGF0dXM7XG4gICAgfVxuXG4gICAgQGFjdGlvblxuICAgIGluaXRVc2VySW5mbyA9ICgpID0+e1xuICAgICAgICB0aGlzLl9jaGVja0lkU3RhdHVzID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBhY3Rpb25cbiAgICBjaGVja0lkID0gYXN5bmMoZW1haWw6c3RyaW5nKSA9PntcbiAgICAgICAgdGhpcy5fY2hlY2tJZFN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5faW5pdCgnQ0hFQ0tfRU1BSUxfQ09NUExFVEUnKTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnBvc3QoJy9hcGkvdXNlcnMvY2hlY2tJZCcsIHFzLnN0cmluZ2lmeSh7ZW1haWw6ZW1haWx9KSk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0lkU3RhdHVzID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzW1wiQ0hFQ0tfRU1BSUxfQ09NUExFVEVcIl0gPSB0cnVlO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgdGhpcy5fZmFpbHVyZVtcIkNIRUNLX0VNQUlMX0NPTVBMRVRFXCJdID0gW3RydWUsIGVdO1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nW1wiQ0hFQ0tfRU1BSUxfQ09NUExFVEVcIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBhY3Rpb25cbiAgICBjcmVhdGVVc2VyID0gYXN5bmMoZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcsIG5hbWU6c3RyaW5nLCBwaG9uZTpzdHJpbmcpID0+e1xuICAgICAgICB0aGlzLl9pbml0KCdDUkVBVEVfVVNFUicpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucG9zdCgnL2FwaS91c2VycycsIHFzLnN0cmluZ2lmeSh7ZW1haWw6ZW1haWwsIHBhc3N3b3JkOnBhc3N3b3JkLCBuYW1lOm5hbWUsIHBob25lOnBob25lfSkpO1xuICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzW1wiQ1JFQVRFX1VTRVJcIl0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgdGhpcy5fZmFpbHVyZVtcIkNSRUFURV9VU0VSXCJdID0gW3RydWUgLGVdO1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nW1wiQ1JFQVRFX1VTRVJcIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==