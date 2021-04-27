webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Slider/style.ts":
/*!****************************************!*\
  !*** ./src/components/Slider/style.ts ***!
  \****************************************/
/*! exports provided: Container, Wrapper, Content, NodeContainer, ControlBtn, Dots, Dot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeContainer\", function() { return NodeContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControlBtn\", function() { return ControlBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dots\", function() { return Dots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dot\", function() { return Dot; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"x9sl83-0\"\n})([\"width:100%;display:flex;flex-flow:column;align-items:center;margin-top:2rem;margin-bottom:2rem;padding:1rem;\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Wrapper\",\n  componentId: \"x9sl83-1\"\n})([\"display:flex;justify-content:space-around;width:100%;margin-bottom:4rem;\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Content\",\n  componentId: \"x9sl83-2\"\n})([\"flex-grow:1;padding:1rem;width:100%;\"]);\nvar NodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__NodeContainer\",\n  componentId: \"x9sl83-3\"\n})([\"display:flex;justify-content:center;width:100%;font-family:'Raleway',sans-serif;font-weight:400;\"]);\nvar ControlBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"style__ControlBtn\",\n  componentId: \"x9sl83-4\"\n})([\"cursor:pointer;\"]);\nvar Dots = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Dots\",\n  componentId: \"x9sl83-5\"\n})([\"display:flex;\"]);\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__Dot\",\n  componentId: \"x9sl83-6\"\n})([\"display:block;margin:0 0.25rem;width:0.5rem;height:0.5rem;background:\", \";border-radius:100px;\"], function (props) {\n  return props.active === 'true' ? props.theme.colors.font.primary : props.theme.colors.font.default_light;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL3N0eWxlLnRzP2NlM2MiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsIkNvbnRlbnQiLCJOb2RlQ29udGFpbmVyIiwiQ29udHJvbEJ0biIsImJ1dHRvbiIsIkRvdHMiLCJEb3QiLCJzcGFuIiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsImNvbG9ycyIsImZvbnQiLCJwcmltYXJ5IiwiZGVmYXVsdF9saWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0hBQWY7QUFTQSxJQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQWI7QUFNQSxJQUFNRSxPQUFPLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNENBQWI7QUFNQSxJQUFNRyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBQW5CO0FBUUEsSUFBTUksVUFBVSxHQUFHTCx5REFBTSxDQUFDTSxNQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUFoQjtBQUlBLElBQU1DLElBQUksR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBVjtBQUlBLElBQU1PLEdBQUcsR0FBR1IseURBQU0sQ0FBQ1MsSUFBVjtBQUFBO0FBQUE7QUFBQSx1R0FLQSxVQUFBQyxLQUFLO0FBQUEsU0FDakJBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUNJRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLE9BRDVCLEdBRUlMLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QkUsYUFIWDtBQUFBLENBTEwsQ0FBVCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NsaWRlci9zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG5gXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbmBcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IE5vZGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250cm9sQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRG90cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmV4cG9ydCBjb25zdCBEb3QgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwLjI1cmVtO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA9PT0gJ3RydWUnXG4gICAgICA/IHByb3BzLnRoZW1lLmNvbG9ycy5mb250LnByaW1hcnlcbiAgICAgIDogcHJvcHMudGhlbWUuY29sb3JzLmZvbnQuZGVmYXVsdF9saWdodH07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Slider/style.ts\n");

/***/ })

})