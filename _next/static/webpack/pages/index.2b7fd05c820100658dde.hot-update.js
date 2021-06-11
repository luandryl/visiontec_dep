webpackHotUpdate_N_E("pages/index",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getFederalUnities, getCities, submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFederalUnities\", function() { return getFederalUnities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCities\", function() { return getCities; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar getFederalUnities = /*#__PURE__*/function () {\n  var _ref = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var _yield$axios$get, federalUnities;\n\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\");\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            federalUnities = _yield$axios$get.data;\n            return _context.abrupt(\"return\", federalUnities.map(function (state) {\n              return {\n                value: state.id,\n                label: \" \".concat(state.sigla, \" - \").concat(state.nome)\n              };\n            }).sort(function (a, b) {\n              return compare_acronyms(a.label, b.label);\n            }));\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function getFederalUnities() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar compare_acronyms = function compare_acronyms(acronym_a, acronym_b) {\n  if (acronym_a < acronym_b) {\n    return -1;\n  }\n\n  if (acronym_a > acronym_b) {\n    return 1;\n  }\n\n  return 0;\n};\n\nvar getCities = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fedaralUnityObj) {\n    var acronym, _yield$axios$get2, cities;\n\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            acronym = fedaralUnityObj.label.split(\"-\")[0];\n            console.log(acronym);\n            _context2.prev = 2;\n            _context2.next = 5;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados/\".concat(acronym, \"/distritos\"));\n\n          case 5:\n            _yield$axios$get2 = _context2.sent;\n            cities = _yield$axios$get2.data;\n            return _context2.abrupt(\"return\", cities.map(function (city) {\n              return {\n                value: city.id,\n                label: city.nome\n              };\n            }).sort(function (a, b) {\n              return compare_acronyms(a.label, b.label);\n            }));\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](2);\n            console.log(_context2.t0);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 10]]);\n  }));\n\n  return function getCities(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar submitForm = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(federalUnityId, cityId, name, email, telephone) {\n    return _home_alugacom_git_visiontec_landing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log({\n              federalUnityId: federalUnityId,\n              cityId: cityId,\n              name: name,\n              email: email,\n              telephone: telephone\n            });\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function submitForm(_x2, _x3, _x4, _x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2luZGV4LmpzP2RkZTUiXSwibmFtZXMiOlsiZ2V0RmVkZXJhbFVuaXRpZXMiLCJheGlvcyIsImdldCIsImZlZGVyYWxVbml0aWVzIiwiZGF0YSIsIm1hcCIsInN0YXRlIiwidmFsdWUiLCJpZCIsImxhYmVsIiwic2lnbGEiLCJub21lIiwic29ydCIsImEiLCJiIiwiY29tcGFyZV9hY3JvbnltcyIsImNvbnNvbGUiLCJsb2ciLCJhY3JvbnltX2EiLCJhY3JvbnltX2IiLCJnZXRDaXRpZXMiLCJmZWRhcmFsVW5pdHlPYmoiLCJhY3JvbnltIiwic3BsaXQiLCJjaXRpZXMiLCJjaXR5Iiwic3VibWl0Rm9ybSIsImZlZGVyYWxVbml0eUlkIiwiY2l0eUlkIiwibmFtZSIsImVtYWlsIiwidGVsZXBob25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsaUJBQWlCO0FBQUEsb1VBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHVUMsNENBQUssQ0FBQ0MsR0FBTiwrREFIVjs7QUFBQTtBQUFBO0FBR2ZDLDBCQUhlLG9CQUdyQkMsSUFIcUI7QUFBQSw2Q0FJdEJELGNBQWMsQ0FDbEJFLEdBREksQ0FDQSxVQUFBQyxLQUFLLEVBQUk7QUFBRSxxQkFBTztBQUFFQyxxQkFBSyxFQUFFRCxLQUFLLENBQUNFLEVBQWY7QUFBbUJDLHFCQUFLLGFBQU1ILEtBQUssQ0FBQ0ksS0FBWixnQkFBdUJKLEtBQUssQ0FBQ0ssSUFBN0I7QUFBeEIsZUFBUDtBQUFzRSxhQURqRixFQUVKQyxJQUZJLENBRUMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEscUJBQVVDLGdCQUFnQixDQUFDRixDQUFDLENBQUNKLEtBQUgsRUFBVUssQ0FBQyxDQUFDTCxLQUFaLENBQTFCO0FBQUEsYUFGRCxDQUpzQjs7QUFBQTtBQUFBO0FBQUE7QUFTN0JPLG1CQUFPLENBQUNDLEdBQVI7O0FBVDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWpCakIsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQWFQLElBQU1lLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0csU0FBRCxFQUFZQyxTQUFaLEVBQTBCO0FBQ2pELE1BQUlELFNBQVMsR0FBR0MsU0FBaEIsRUFBMkI7QUFDekIsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxNQUFJRCxTQUFTLEdBQUdDLFNBQWhCLEVBQTJCO0FBQ3pCLFdBQU8sQ0FBUDtBQUNEOztBQUNELFNBQU8sQ0FBUDtBQUNELENBUkQ7O0FBVU8sSUFBTUMsU0FBUztBQUFBLHFVQUFHLGtCQUFNQyxlQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLG1CQURpQixHQUNQRCxlQUFlLENBQUNaLEtBQWhCLENBQXNCYyxLQUF0QixDQUE0QixHQUE1QixFQUFpQyxDQUFqQyxDQURPO0FBRXZCUCxtQkFBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVo7QUFGdUI7QUFBQTtBQUFBLG1CQUlVckIsNENBQUssQ0FBQ0MsR0FBTix1RUFBeUVvQixPQUF6RSxnQkFKVjs7QUFBQTtBQUFBO0FBSVBFLGtCQUpPLHFCQUlicEIsSUFKYTtBQUFBLDhDQUtkb0IsTUFBTSxDQUNWbkIsR0FESSxDQUNBLFVBQUFvQixJQUFJLEVBQUk7QUFBRSxxQkFBTztBQUFFbEIscUJBQUssRUFBRWtCLElBQUksQ0FBQ2pCLEVBQWQ7QUFBa0JDLHFCQUFLLEVBQUVnQixJQUFJLENBQUNkO0FBQTlCLGVBQVA7QUFBNkMsYUFEdkQsRUFFSkMsSUFGSSxDQUVDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHFCQUFVQyxnQkFBZ0IsQ0FBQ0YsQ0FBQyxDQUFDSixLQUFILEVBQVVLLENBQUMsQ0FBQ0wsS0FBWixDQUExQjtBQUFBLGFBRkQsQ0FMYzs7QUFBQTtBQUFBO0FBQUE7QUFVckJPLG1CQUFPLENBQUNDLEdBQVI7O0FBVnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRHLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjtBQWNBLElBQU1NLFVBQVU7QUFBQSxxVUFBRyxrQkFDeEJDLGNBRHdCLEVBRXhCQyxNQUZ3QixFQUd4QkMsSUFId0IsRUFJeEJDLEtBSndCLEVBS3hCQyxTQUx3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3hCZixtQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVUsNEJBQWMsRUFBZEEsY0FBRjtBQUFrQkMsb0JBQU0sRUFBTkEsTUFBbEI7QUFBMEJDLGtCQUFJLEVBQUpBLElBQTFCO0FBQWdDQyxtQkFBSyxFQUFMQSxLQUFoQztBQUF1Q0MsdUJBQVMsRUFBVEE7QUFBdkMsYUFBWjs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkwsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGdldEZlZGVyYWxVbml0aWVzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBlc3RlIMOpIG8gZm9ybWF0byBlc3BlcmFkbyBwZWxvIGNvbXBvbmVudCBkZSBzZWxlY3QgZG9zIGVzdGFkb3NcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGE6IGZlZGVyYWxVbml0aWVzIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc2Vydmljb2RhZG9zLmliZ2UuZ292LmJyL2FwaS92MS9sb2NhbGlkYWRlcy9lc3RhZG9zYClcbiAgICByZXR1cm4gZmVkZXJhbFVuaXRpZXNcbiAgICAgIC5tYXAoc3RhdGUgPT4geyByZXR1cm4geyB2YWx1ZTogc3RhdGUuaWQsIGxhYmVsOiBgICR7c3RhdGUuc2lnbGF9IC0gJHtzdGF0ZS5ub21lfWAgfSB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVfYWNyb255bXMoYS5sYWJlbCwgYi5sYWJlbCkpXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH1cbn1cblxuY29uc3QgY29tcGFyZV9hY3JvbnltcyA9IChhY3JvbnltX2EsIGFjcm9ueW1fYikgPT4ge1xuICBpZiAoYWNyb255bV9hIDwgYWNyb255bV9iKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGFjcm9ueW1fYSA+IGFjcm9ueW1fYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IGFzeW5jIGZlZGFyYWxVbml0eU9iaiA9PiB7XG4gIGNvbnN0IGFjcm9ueW0gPSBmZWRhcmFsVW5pdHlPYmoubGFiZWwuc3BsaXQoXCItXCIpWzBdXG4gIGNvbnNvbGUubG9nKGFjcm9ueW0pXG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhOiBjaXRpZXMgfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zZXJ2aWNvZGFkb3MuaWJnZS5nb3YuYnIvYXBpL3YxL2xvY2FsaWRhZGVzL2VzdGFkb3MvJHthY3JvbnltfS9kaXN0cml0b3NgKVxuICAgIHJldHVybiBjaXRpZXNcbiAgICAgIC5tYXAoY2l0eSA9PiB7IHJldHVybiB7IHZhbHVlOiBjaXR5LmlkLCBsYWJlbDogY2l0eS5ub21lIH0gfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBjb21wYXJlX2Fjcm9ueW1zKGEubGFiZWwsIGIubGFiZWwpKVxuXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKFxuICBmZWRlcmFsVW5pdHlJZCxcbiAgY2l0eUlkLFxuICBuYW1lLFxuICBlbWFpbCxcbiAgdGVsZXBob25lXG4pID0+IHtcbiAgY29uc29sZS5sb2coeyBmZWRlcmFsVW5pdHlJZCwgY2l0eUlkLCBuYW1lLCBlbWFpbCwgdGVsZXBob25lIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/index.js\n");

/***/ })

})