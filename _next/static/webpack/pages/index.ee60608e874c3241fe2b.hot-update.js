webpackHotUpdate_N_E("pages/index",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getFederalUnities, getCities, submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFederalUnities\", function() { return getFederalUnities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCities\", function() { return getCities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar getFederalUnities = /*#__PURE__*/function () {\n  var _ref = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var _yield$axios$get, federalUnities;\n\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados/\");\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            federalUnities = _yield$axios$get.data;\n            return _context.abrupt(\"return\", federalUnities.map(function (state) {\n              return {\n                value: state.id,\n                label: state.sigla\n              };\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function getFederalUnities() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getCities = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fedaralUnityId) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", [{\n              value: 1,\n              label: 'Cornélio Procópio'\n            }, {\n              value: 2,\n              label: 'Londrina'\n            }]);\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCities(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar submitForm = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(federalUnityId, cityId, name, email, telephone) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log({\n              federalUnityId: federalUnityId,\n              cityId: cityId,\n              name: name,\n              email: email,\n              telephone: telephone\n            });\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function submitForm(_x2, _x3, _x4, _x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzP2RkZTUiXSwibmFtZXMiOlsiZ2V0RmVkZXJhbFVuaXRpZXMiLCJheGlvcyIsImdldCIsImZlZGVyYWxVbml0aWVzIiwiZGF0YSIsIm1hcCIsInN0YXRlIiwidmFsdWUiLCJpZCIsImxhYmVsIiwic2lnbGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2l0aWVzIiwiZmVkYXJhbFVuaXR5SWQiLCJzdWJtaXRGb3JtIiwiZmVkZXJhbFVuaXR5SWQiLCJjaXR5SWQiLCJuYW1lIiwiZW1haWwiLCJ0ZWxlcGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxpQkFBaUI7QUFBQSxvVUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdVQyw0Q0FBSyxDQUFDQyxHQUFOLGdFQUhWOztBQUFBO0FBQUE7QUFHZkMsMEJBSGUsb0JBR3JCQyxJQUhxQjtBQUFBLDZDQUl0QkQsY0FBYyxDQUFDRSxHQUFmLENBQW1CLFVBQUFDLEtBQUssRUFBSTtBQUNqQyxxQkFBTztBQUFFQyxxQkFBSyxFQUFFRCxLQUFLLENBQUNFLEVBQWY7QUFBbUJDLHFCQUFLLEVBQUVILEtBQUssQ0FBQ0k7QUFBaEMsZUFBUDtBQUNELGFBRk0sQ0FKc0I7O0FBQUE7QUFBQTtBQUFBO0FBUzdCQyxtQkFBTyxDQUFDQyxHQUFSOztBQVQ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQlosaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCO0FBYUEsSUFBTWEsU0FBUztBQUFBLHFVQUFHLGtCQUFNQyxjQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FFaEIsQ0FDTDtBQUFFUCxtQkFBSyxFQUFFLENBQVQ7QUFBWUUsbUJBQUssRUFBRTtBQUFuQixhQURLLEVBRUw7QUFBRUYsbUJBQUssRUFBRSxDQUFUO0FBQVlFLG1CQUFLLEVBQUU7QUFBbkIsYUFGSyxDQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7QUFRQSxJQUFNRSxVQUFVO0FBQUEscVVBQUcsa0JBQ3hCQyxjQUR3QixFQUV4QkMsTUFGd0IsRUFHeEJDLElBSHdCLEVBSXhCQyxLQUp3QixFQUt4QkMsU0FMd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU94QlQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVJLDRCQUFjLEVBQWRBLGNBQUY7QUFBa0JDLG9CQUFNLEVBQU5BLE1BQWxCO0FBQTBCQyxrQkFBSSxFQUFKQSxJQUExQjtBQUFnQ0MsbUJBQUssRUFBTEEsS0FBaEM7QUFBdUNDLHVCQUFTLEVBQVRBO0FBQXZDLGFBQVo7O0FBUHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBnZXRGZWRlcmFsVW5pdGllcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gZXN0ZSDDqSBvIGZvcm1hdG8gZXNwZXJhZG8gcGVsbyBjb21wb25lbnQgZGUgc2VsZWN0IGRvcyBlc3RhZG9zXG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhOiBmZWRlcmFsVW5pdGllcyB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NlcnZpY29kYWRvcy5pYmdlLmdvdi5ici9hcGkvdjEvbG9jYWxpZGFkZXMvZXN0YWRvcy9gKVxuICAgIHJldHVybiBmZWRlcmFsVW5pdGllcy5tYXAoc3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IHN0YXRlLmlkLCBsYWJlbDogc3RhdGUuc2lnbGEgfVxuICAgIH0pXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IGFzeW5jIGZlZGFyYWxVbml0eUlkID0+IHtcbiAgLy8gZXN0ZSDDqSBvIGZvcm1hdG8gZXNwZXJhZG8gcGVsbyBjb21wb25lbnRlIGRlIHNlbGVjdCBkYXMgY2lkYWRlc1xuICByZXR1cm4gW1xuICAgIHsgdmFsdWU6IDEsIGxhYmVsOiAnQ29ybsOpbGlvIFByb2PDs3BpbycgfSxcbiAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ0xvbmRyaW5hJyB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoXG4gIGZlZGVyYWxVbml0eUlkLFxuICBjaXR5SWQsXG4gIG5hbWUsXG4gIGVtYWlsLFxuICB0ZWxlcGhvbmVcbikgPT4ge1xuICBjb25zb2xlLmxvZyh7IGZlZGVyYWxVbml0eUlkLCBjaXR5SWQsIG5hbWUsIGVtYWlsLCB0ZWxlcGhvbmUgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/index.js\n");

/***/ })

})