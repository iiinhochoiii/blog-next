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
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4._init('CREATE_USER');

                try {
                  console.log(email, password, name, phone);
                  _this4._success["CREATE_USER"] = true;
                } catch (e) {
                  _this4._failure["CREATE_USER"] = [true, e];
                } finally {
                  _this4._pending["CREATE_USER"] = false;
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL3VzZXJzL3VzZXJTdG9yZS50cyJdLCJuYW1lcyI6WyJVc2VyU3RvcmUiLCJtYWtlT2JzZXJ2YWJsZSIsIkJhc2VTdG9yZSIsIm9ic2VydmFibGUiLCJjb21wdXRlZCIsImFjdGlvbiIsImVtYWlsIiwicmVzIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7SUFFTUEsUzs7Ozs7QUFDRix1QkFBYztBQUFBOztBQUFBOztBQUNoQjs7QUFEZ0I7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRWhCQyxnRUFBYyxrR0FBZEEsS0FBYyxFQUFkQTtBQUZnQjtBQUdiOzs7O3dCQU1rQjtBQUNmLGFBQU8sS0FBUDtBQUNIOzs7O0VBWm1CQyxtRCxtS0FNbkJDLGdEOzs7Ozs0SUFHQUMsOEMsZ1BBS0FDLDRDOzs7Ozs7O1dBQ2MsWUFBSztBQUNoQixZQUFJLENBQUo7OztxSkFHSEEsNEM7Ozs7Ozs7O2tNQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOLHNCQUFJLENBQUo7O0FBQ0Esc0JBQUksQ0FBSjs7QUFGTTtBQUFBO0FBQUEsdUJBSWdCLG9EQUFNLENBQU4sMkJBQWtDLDBDQUFFLENBQUYsVUFBYTtBQUFDQyx1QkFBSyxFQUFDQTtBQUFQLGlCQUFiLENBQWxDLENBSmhCOztBQUFBO0FBSUlDLG1CQUpKLGdCQUlJQTtBQUpKO0FBQUEsdUJBSzBCQSxHQUFHLENBTDdCOztBQUFBO0FBS0Ysc0JBQUksQ0FMRixjQUtGLEdBTEUsYUFLRjtBQUNBLHNCQUFJLENBQUo7QUFORTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFGLHNCQUFJLENBQUosbUNBQXdDLGdCQUF4QyxFQUF3QyxDQUF4Qzs7QUFSRTtBQUFBO0FBVUYsc0JBQUksQ0FBSjtBQVZFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7d0pBY1RGLDRDOzs7Ozs7OzttTUFDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1Qsc0JBQUksQ0FBSjs7QUFDQSxvQkFBRztBQUNDRyx5QkFBTyxDQUFQQTtBQUNBLHdCQUFJLENBQUo7QUFGSixrQkFHRSxVQUFRO0FBQ04sd0JBQUksQ0FBSiwwQkFBK0IsT0FBL0IsQ0FBK0IsQ0FBL0I7QUFKSiwwQkFLUztBQUNMLHdCQUFJLENBQUo7QUFDSDs7QUFUUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQWFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAwOGI1NzE1ZWZlZjVhODJlMWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FjdGlvbiwgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIG1ha2VPYnNlcnZhYmxlfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IHtjaGVja0lkU3RhdHVzfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IEJhc2VTdG9yZSBmcm9tICcuLi9CYXNlU3RvcmUnO1xyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2xpYi9jbGllbnQnO1xyXG5cclxuY2xhc3MgVXNlclN0b3JlIGV4dGVuZHMgQmFzZVN0b3Jle1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0bWFrZU9ic2VydmFibGUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBfY2hlY2tJZFN0YXR1cz86Y2hlY2tJZFN0YXR1cztcclxuXHJcbiAgICBAY29tcHV0ZWRcclxuICAgIGdldCBjaGVja0lkU3RhdHVzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrSWRTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgQGFjdGlvblxyXG4gICAgaW5pdFVzZXJJbmZvID0gKCkgPT57XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJZFN0YXR1cyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBjaGVja0lkID0gYXN5bmMoZW1haWw6c3RyaW5nKSA9PntcclxuICAgICAgICB0aGlzLl9jaGVja0lkU3RhdHVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2luaXQoJ0NIRUNLX0VNQUlMX0NPTVBMRVRFJyk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucG9zdCgnL2FwaS91c2Vycy9jaGVja0lkJywgcXMuc3RyaW5naWZ5KHtlbWFpbDplbWFpbH0pKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tJZFN0YXR1cyA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzW1wiQ0hFQ0tfRU1BSUxfQ09NUExFVEVcIl0gPSB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhaWx1cmVbXCJDSEVDS19FTUFJTF9DT01QTEVURVwiXSA9IFt0cnVlLCBlXTtcclxuICAgICAgICB9IGZpbmFsbHl7XHJcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdbXCJDSEVDS19FTUFJTF9DT01QTEVURVwiXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICBjcmVhdGVVc2VyID0gYXN5bmMoZW1haWw6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcsIG5hbWU6c3RyaW5nLCBwaG9uZTpzdHJpbmcpID0+e1xyXG4gICAgICAgIHRoaXMuX2luaXQoJ0NSRUFURV9VU0VSJyk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHBob25lKTtcclxuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzc1tcIkNSRUFURV9VU0VSXCJdID0gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgICAgICB0aGlzLl9mYWlsdXJlW1wiQ1JFQVRFX1VTRVJcIl0gPSBbdHJ1ZSAsZV07XHJcbiAgICAgICAgfSBmaW5hbGx5e1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nW1wiQ1JFQVRFX1VTRVJcIl0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTdG9yZTsiXSwic291cmNlUm9vdCI6IiJ9