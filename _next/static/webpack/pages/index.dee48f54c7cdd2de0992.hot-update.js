webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ProfitWays/style.ts":
/*!********************************************!*\
  !*** ./src/components/ProfitWays/style.ts ***!
  \********************************************/
/*! exports provided: Container, Title, H2, Text, Colorize, StepsConteiner, Step, Info, LinkButon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colorize\", function() { return Colorize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StepsConteiner\", function() { return StepsConteiner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step\", function() { return Step; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Info\", function() { return Info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkButon\", function() { return LinkButon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"zhyu5i-0\"\n})([\"background:url('/imgs/4_bg.png');background-repeat:no-repeat;background-size:100% 100%;display:flex;flex-flow:column;align-items:center;padding:2rem 0;@media (max-width:750px){height:1300px;padding:2rem 2rem 0 2rem;}\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"zhyu5i-1\"\n})([\"font-size:2.6rem;font-family:'Raleway',sans-serif;font-weight:800;color:#072151;line-height:50px;margin-top:4rem;text-align:center;@media (max-width:750px){font-size:3rem;}\"]);\nvar H2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"style__H2\",\n  componentId: \"zhyu5i-2\"\n})([\"font-size:1.5rem;font-family:'Raleway',sans-serif;font-weight:800;color:#fff;line-height:70px;margin-top:4rem;font-style:italic;text-align:center;@media(max-width:750px){font-size:3rem;line-height:70px;}\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__Text\",\n  componentId: \"zhyu5i-3\"\n})([\"font-family:'Raleway',sans-serif;font-weight:500;color:#fff;font-size:1rem;margin-right:3rem;text-align:left;\"]);\nvar Colorize = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__Colorize\",\n  componentId: \"zhyu5i-4\"\n})([\"color:\", \";\"], function (props) {\n  return props.theme.colors.font.success;\n});\nvar StepsConteiner = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__StepsConteiner\",\n  componentId: \"zhyu5i-5\"\n})([\"display:flex;flex-flow:row wrap;justify-content:center;margin-left:6rem;margin-top:5rem;\"]);\nvar Step = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Step\",\n  componentId: \"zhyu5i-6\"\n})([\"margin-right:3rem;\"]);\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Info\",\n  componentId: \"zhyu5i-7\"\n})([\"display:flex;\"]);\nvar LinkButon = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"style__LinkButon\",\n  componentId: \"zhyu5i-8\"\n})([\"background:#4cc700;font-family:'Raleway',sans-serif;color:#fff;font-size:30px;padding:1rem;border-radius:10px;cursor:pointer;transition:all 0.2s ease-in;:hover{background:#4baf0e;}margin-top:3rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZml0V2F5cy9zdHlsZS50cz82OGQzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJUaXRsZSIsImgxIiwiSDIiLCJoMiIsIlRleHQiLCJwIiwiQ29sb3JpemUiLCJzcGFuIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImZvbnQiLCJzdWNjZXNzIiwiU3RlcHNDb250ZWluZXIiLCJkaXYiLCJTdGVwIiwiSW5mbyIsIkxpbmtCdXRvbiIsImEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxnT0FBZjtBQWNBLElBQU1DLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSxvTEFBWDtBQWFBLElBQU1DLEVBQUUsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSxtTkFBUjtBQWVBLElBQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSxxSEFBVjtBQVNBLElBQU1DLFFBQVEsR0FBR1IseURBQU0sQ0FBQ1MsSUFBVjtBQUFBO0FBQUE7QUFBQSxvQkFDVixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCQyxPQUE1QjtBQUFBLENBREssQ0FBZDtBQUdBLElBQU1DLGNBQWMsR0FBR2YseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQXBCO0FBUUEsSUFBTUMsSUFBSSxHQUFHakIseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQVY7QUFJQSxJQUFNRSxJQUFJLEdBQUdsQix5REFBTSxDQUFDZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBVjtBQUlBLElBQU1HLFNBQVMsR0FBR25CLHlEQUFNLENBQUNvQixDQUFWO0FBQUE7QUFBQTtBQUFBLDRNQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZml0V2F5cy9zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZDogdXJsKCcvaW1ncy80X2JnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgaGVpZ2h0OiAxMzAwcHg7XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDAgMnJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzA3MjE1MTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBIMiA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgZm9udC1zdHlsZTppdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQG1lZGlhKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYFxuXG5leHBvcnQgY29uc3QgQ29sb3JpemUgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQuc3VjY2Vzc307XG5gXG5leHBvcnQgY29uc3QgU3RlcHNDb250ZWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XG4gIG1hcmdpbi10b3A6IDVyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBTdGVwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuYFxuXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rQnV0b24gPSBzdHlsZWQuYWBcbiAgYmFja2dyb3VuZDogIzRjYzcwMDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0YmFmMGU7XG4gIH1cbiAgbWFyZ2luLXRvcDogM3JlbTtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProfitWays/style.ts\n");

/***/ })

})