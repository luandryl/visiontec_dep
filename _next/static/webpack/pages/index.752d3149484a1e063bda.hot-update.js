webpackHotUpdate_N_E("pages/index",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getFederalUnities, getCities, submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFederalUnities\", function() { return getFederalUnities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCities\", function() { return getCities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar getFederalUnities = /*#__PURE__*/function () {\n  var _ref = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var res;\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados/\");\n\n          case 2:\n            res = _context.sent;\n            console.log(res);\n            return _context.abrupt(\"return\", [{\n              value: 1,\n              label: 'SP'\n            }, {\n              value: 2,\n              label: 'RJ'\n            }, {\n              value: 3,\n              label: 'PR'\n            }]);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getFederalUnities() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getCities = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fedaralUnityId) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", [{\n              value: 1,\n              label: 'Cornélio Procópio'\n            }, {\n              value: 2,\n              label: 'Londrina'\n            }]);\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCities(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar submitForm = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(federalUnityId, cityId, name, email, telephone) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log({\n              federalUnityId: federalUnityId,\n              cityId: cityId,\n              name: name,\n              email: email,\n              telephone: telephone\n            });\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function submitForm(_x2, _x3, _x4, _x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzP2RkZTUiXSwibmFtZXMiOlsiZ2V0RmVkZXJhbFVuaXRpZXMiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImxhYmVsIiwiZ2V0Q2l0aWVzIiwiZmVkYXJhbFVuaXR5SWQiLCJzdWJtaXRGb3JtIiwiZmVkZXJhbFVuaXR5SWQiLCJjaXR5SWQiLCJuYW1lIiwiZW1haWwiLCJ0ZWxlcGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxpQkFBaUI7QUFBQSxvVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUViQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsOERBQVYsQ0FGYTs7QUFBQTtBQUV6QkMsZUFGeUI7QUFHL0JDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUgrQiw2Q0FLeEIsQ0FDTDtBQUFFRyxtQkFBSyxFQUFFLENBQVQ7QUFBWUMsbUJBQUssRUFBRTtBQUFuQixhQURLLEVBRUw7QUFBRUQsbUJBQUssRUFBRSxDQUFUO0FBQVlDLG1CQUFLLEVBQUU7QUFBbkIsYUFGSyxFQUdMO0FBQUVELG1CQUFLLEVBQUUsQ0FBVDtBQUFZQyxtQkFBSyxFQUFFO0FBQW5CLGFBSEssQ0FMd0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBakJQLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2QjtBQVlBLElBQU1RLFNBQVM7QUFBQSxxVUFBRyxrQkFBTUMsY0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBRWhCLENBQ0w7QUFBRUgsbUJBQUssRUFBRSxDQUFUO0FBQVlDLG1CQUFLLEVBQUU7QUFBbkIsYUFESyxFQUVMO0FBQUVELG1CQUFLLEVBQUUsQ0FBVDtBQUFZQyxtQkFBSyxFQUFFO0FBQW5CLGFBRkssQ0FGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVEMsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmO0FBUUEsSUFBTUUsVUFBVTtBQUFBLHFVQUFHLGtCQUN4QkMsY0FEd0IsRUFFeEJDLE1BRndCLEVBR3hCQyxJQUh3QixFQUl4QkMsS0FKd0IsRUFLeEJDLFNBTHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPeEJYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFTSw0QkFBYyxFQUFkQSxjQUFGO0FBQWtCQyxvQkFBTSxFQUFOQSxNQUFsQjtBQUEwQkMsa0JBQUksRUFBSkEsSUFBMUI7QUFBZ0NDLG1CQUFLLEVBQUxBLEtBQWhDO0FBQXVDQyx1QkFBUyxFQUFUQTtBQUF2QyxhQUFaOztBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWTCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgZ2V0RmVkZXJhbFVuaXRpZXMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGVzdGUgw6kgbyBmb3JtYXRvIGVzcGVyYWRvIHBlbG8gY29tcG9uZW50IGRlIHNlbGVjdCBkb3MgZXN0YWRvc1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3NlcnZpY29kYWRvcy5pYmdlLmdvdi5ici9hcGkvdjEvbG9jYWxpZGFkZXMvZXN0YWRvcy9cIilcbiAgY29uc29sZS5sb2cocmVzKVxuXG4gIHJldHVybiBbXG4gICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdTUCcgfSxcbiAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ1JKJyB9LFxuICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnUFInIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gYXN5bmMgZmVkYXJhbFVuaXR5SWQgPT4ge1xuICAvLyBlc3RlIMOpIG8gZm9ybWF0byBlc3BlcmFkbyBwZWxvIGNvbXBvbmVudGUgZGUgc2VsZWN0IGRhcyBjaWRhZGVzXG4gIHJldHVybiBbXG4gICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdDb3Juw6lsaW8gUHJvY8OzcGlvJyB9LFxuICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnTG9uZHJpbmEnIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChcbiAgZmVkZXJhbFVuaXR5SWQsXG4gIGNpdHlJZCxcbiAgbmFtZSxcbiAgZW1haWwsXG4gIHRlbGVwaG9uZVxuKSA9PiB7XG4gIGNvbnNvbGUubG9nKHsgZmVkZXJhbFVuaXR5SWQsIGNpdHlJZCwgbmFtZSwgZW1haWwsIHRlbGVwaG9uZSB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/index.js\n");

/***/ })

})