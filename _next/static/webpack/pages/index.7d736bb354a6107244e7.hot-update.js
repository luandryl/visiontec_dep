webpackHotUpdate_N_E("pages/index",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getFederalUnities, getCities, submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFederalUnities\", function() { return getFederalUnities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCities\", function() { return getCities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar getFederalUnities = /*#__PURE__*/function () {\n  var _ref = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var _yield$axios$get, federalUnities;\n\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\");\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            federalUnities = _yield$axios$get.data;\n            return _context.abrupt(\"return\", federalUnities.map(function (state) {\n              return {\n                value: state.id,\n                label: \" \".concat(state.sigla, \" - \").concat(state.nome)\n              };\n            }).sort(function (a, b) {\n              return compare_acronyms(a.label, b.label);\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function getFederalUnities() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar compare_acronyms = function compare_acronyms(acronym_a, acronym_b) {\n  if (acronym_a < acronym_b) {\n    return -1;\n  }\n\n  if (acronym_a > acronym_b) {\n    return 1;\n  }\n\n  return 0;\n};\n\nvar getCities = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fedaralUnityObj) {\n    var acronym, _yield$axios$get2, cities;\n\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log(Object.keys(fedaralUnityObj));\n\n            if (!(fedaralUnityObj !== {})) {\n              _context2.next = 15;\n              break;\n            }\n\n            acronym = fedaralUnityObj.label.split(\"-\")[0];\n            console.log(acronym);\n            _context2.prev = 4;\n            _context2.next = 7;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados/\".concat(acronym, \"/distritos\"));\n\n          case 7:\n            _yield$axios$get2 = _context2.sent;\n            cities = _yield$axios$get2.data;\n            return _context2.abrupt(\"return\", cities.map(function (city) {\n              return {\n                value: city.id,\n                label: city.nome\n              };\n            }).sort(function (a, b) {\n              return compare_acronyms(a.label, b.label);\n            }));\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2[\"catch\"](4);\n            console.log(_context2.t0);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[4, 12]]);\n  }));\n\n  return function getCities(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar submitForm = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(federalUnityId, cityId, name, email, telephone) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log({\n              federalUnityId: federalUnityId,\n              cityId: cityId,\n              name: name,\n              email: email,\n              telephone: telephone\n            });\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function submitForm(_x2, _x3, _x4, _x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzP2RkZTUiXSwibmFtZXMiOlsiZ2V0RmVkZXJhbFVuaXRpZXMiLCJheGlvcyIsImdldCIsImZlZGVyYWxVbml0aWVzIiwiZGF0YSIsIm1hcCIsInN0YXRlIiwidmFsdWUiLCJpZCIsImxhYmVsIiwic2lnbGEiLCJub21lIiwic29ydCIsImEiLCJiIiwiY29tcGFyZV9hY3JvbnltcyIsImNvbnNvbGUiLCJsb2ciLCJhY3JvbnltX2EiLCJhY3JvbnltX2IiLCJnZXRDaXRpZXMiLCJmZWRhcmFsVW5pdHlPYmoiLCJPYmplY3QiLCJrZXlzIiwiYWNyb255bSIsInNwbGl0IiwiY2l0aWVzIiwiY2l0eSIsInN1Ym1pdEZvcm0iLCJmZWRlcmFsVW5pdHlJZCIsImNpdHlJZCIsIm5hbWUiLCJlbWFpbCIsInRlbGVwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGlCQUFpQjtBQUFBLG9VQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR1VDLDRDQUFLLENBQUNDLEdBQU4sK0RBSFY7O0FBQUE7QUFBQTtBQUdmQywwQkFIZSxvQkFHckJDLElBSHFCO0FBQUEsNkNBSXRCRCxjQUFjLENBQ2xCRSxHQURJLENBQ0EsVUFBQUMsS0FBSyxFQUFJO0FBQUUscUJBQU87QUFBRUMscUJBQUssRUFBRUQsS0FBSyxDQUFDRSxFQUFmO0FBQW1CQyxxQkFBSyxhQUFNSCxLQUFLLENBQUNJLEtBQVosZ0JBQXVCSixLQUFLLENBQUNLLElBQTdCO0FBQXhCLGVBQVA7QUFBc0UsYUFEakYsRUFFSkMsSUFGSSxDQUVDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHFCQUFVQyxnQkFBZ0IsQ0FBQ0YsQ0FBQyxDQUFDSixLQUFILEVBQVVLLENBQUMsQ0FBQ0wsS0FBWixDQUExQjtBQUFBLGFBRkQsQ0FKc0I7O0FBQUE7QUFBQTtBQUFBO0FBUzdCTyxtQkFBTyxDQUFDQyxHQUFSOztBQVQ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQmpCLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFhUCxJQUFNZSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNHLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUNqRCxNQUFJRCxTQUFTLEdBQUdDLFNBQWhCLEVBQTJCO0FBQ3pCLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUQsU0FBUyxHQUFHQyxTQUFoQixFQUEyQjtBQUN6QixXQUFPLENBQVA7QUFDRDs7QUFDRCxTQUFPLENBQVA7QUFDRCxDQVJEOztBQVVPLElBQU1DLFNBQVM7QUFBQSxxVUFBRyxrQkFBTUMsZUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCTCxtQkFBTyxDQUFDQyxHQUFSLENBQVlLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixlQUFaLENBQVo7O0FBRHVCLGtCQUVuQkEsZUFBZSxLQUFLLEVBRkQ7QUFBQTtBQUFBO0FBQUE7O0FBR2ZHLG1CQUhlLEdBR0xILGVBQWUsQ0FBQ1osS0FBaEIsQ0FBc0JnQixLQUF0QixDQUE0QixHQUE1QixFQUFpQyxDQUFqQyxDQUhLO0FBSXJCVCxtQkFBTyxDQUFDQyxHQUFSLENBQVlPLE9BQVo7QUFKcUI7QUFBQTtBQUFBLG1CQU1ZdkIsNENBQUssQ0FBQ0MsR0FBTix1RUFBeUVzQixPQUF6RSxnQkFOWjs7QUFBQTtBQUFBO0FBTUxFLGtCQU5LLHFCQU1YdEIsSUFOVztBQUFBLDhDQU9ac0IsTUFBTSxDQUNWckIsR0FESSxDQUNBLFVBQUFzQixJQUFJLEVBQUk7QUFBRSxxQkFBTztBQUFFcEIscUJBQUssRUFBRW9CLElBQUksQ0FBQ25CLEVBQWQ7QUFBa0JDLHFCQUFLLEVBQUVrQixJQUFJLENBQUNoQjtBQUE5QixlQUFQO0FBQTZDLGFBRHZELEVBRUpDLElBRkksQ0FFQyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxxQkFBVUMsZ0JBQWdCLENBQUNGLENBQUMsQ0FBQ0osS0FBSCxFQUFVSyxDQUFDLENBQUNMLEtBQVosQ0FBMUI7QUFBQSxhQUZELENBUFk7O0FBQUE7QUFBQTtBQUFBO0FBWW5CTyxtQkFBTyxDQUFDQyxHQUFSOztBQVptQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7QUFpQkEsSUFBTVEsVUFBVTtBQUFBLHFVQUFHLGtCQUN4QkMsY0FEd0IsRUFFeEJDLE1BRndCLEVBR3hCQyxJQUh3QixFQUl4QkMsS0FKd0IsRUFLeEJDLFNBTHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPeEJqQixtQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVksNEJBQWMsRUFBZEEsY0FBRjtBQUFrQkMsb0JBQU0sRUFBTkEsTUFBbEI7QUFBMEJDLGtCQUFJLEVBQUpBLElBQTFCO0FBQWdDQyxtQkFBSyxFQUFMQSxLQUFoQztBQUF1Q0MsdUJBQVMsRUFBVEE7QUFBdkMsYUFBWjs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkwsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGdldEZlZGVyYWxVbml0aWVzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBlc3RlIMOpIG8gZm9ybWF0byBlc3BlcmFkbyBwZWxvIGNvbXBvbmVudCBkZSBzZWxlY3QgZG9zIGVzdGFkb3NcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGE6IGZlZGVyYWxVbml0aWVzIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc2Vydmljb2RhZG9zLmliZ2UuZ292LmJyL2FwaS92MS9sb2NhbGlkYWRlcy9lc3RhZG9zYClcbiAgICByZXR1cm4gZmVkZXJhbFVuaXRpZXNcbiAgICAgIC5tYXAoc3RhdGUgPT4geyByZXR1cm4geyB2YWx1ZTogc3RhdGUuaWQsIGxhYmVsOiBgICR7c3RhdGUuc2lnbGF9IC0gJHtzdGF0ZS5ub21lfWAgfSB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVfYWNyb255bXMoYS5sYWJlbCwgYi5sYWJlbCkpXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH1cbn1cblxuY29uc3QgY29tcGFyZV9hY3JvbnltcyA9IChhY3JvbnltX2EsIGFjcm9ueW1fYikgPT4ge1xuICBpZiAoYWNyb255bV9hIDwgYWNyb255bV9iKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGFjcm9ueW1fYSA+IGFjcm9ueW1fYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IGFzeW5jIGZlZGFyYWxVbml0eU9iaiA9PiB7XG4gIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGZlZGFyYWxVbml0eU9iaikpXG4gIGlmIChmZWRhcmFsVW5pdHlPYmogIT09IHt9KSB7XG4gICAgY29uc3QgYWNyb255bSA9IGZlZGFyYWxVbml0eU9iai5sYWJlbC5zcGxpdChcIi1cIilbMF1cbiAgICBjb25zb2xlLmxvZyhhY3JvbnltKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGE6IGNpdGllcyB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NlcnZpY29kYWRvcy5pYmdlLmdvdi5ici9hcGkvdjEvbG9jYWxpZGFkZXMvZXN0YWRvcy8ke2Fjcm9ueW19L2Rpc3RyaXRvc2ApXG4gICAgICByZXR1cm4gY2l0aWVzXG4gICAgICAgIC5tYXAoY2l0eSA9PiB7IHJldHVybiB7IHZhbHVlOiBjaXR5LmlkLCBsYWJlbDogY2l0eS5ub21lIH0gfSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVfYWNyb255bXMoYS5sYWJlbCwgYi5sYWJlbCkpXG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChcbiAgZmVkZXJhbFVuaXR5SWQsXG4gIGNpdHlJZCxcbiAgbmFtZSxcbiAgZW1haWwsXG4gIHRlbGVwaG9uZVxuKSA9PiB7XG4gIGNvbnNvbGUubG9nKHsgZmVkZXJhbFVuaXR5SWQsIGNpdHlJZCwgbmFtZSwgZW1haWwsIHRlbGVwaG9uZSB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/index.js\n");

/***/ })

})