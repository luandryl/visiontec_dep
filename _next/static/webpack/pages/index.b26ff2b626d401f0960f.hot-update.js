webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar/style.ts":
/*!****************************************!*\
  !*** ./src/components/Navbar/style.ts ***!
  \****************************************/
/*! exports provided: NavWrapper, LogoWrapper, Visiontec, Viasat, UlStyled, LiStyled, Link, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavWrapper\", function() { return NavWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoWrapper\", function() { return LogoWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visiontec\", function() { return Visiontec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Viasat\", function() { return Viasat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UlStyled\", function() { return UlStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiStyled\", function() { return LiStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkButton\", function() { return LinkButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"style__NavWrapper\",\n  componentId: \"bsu8r2-0\"\n})([\"position:fixed;width:100%;max-width:1920px;background:#fff;display:flex;justify-content:space-between;padding:2.2rem 2rem 1.5rem 2rem;z-index:3;@media(max-width:1024px){height:0;margin-top:0rem;padding:0rem 0rem;}\"]);\nvar LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__LogoWrapper\",\n  componentId: \"bsu8r2-1\"\n})([\"display:flex;align-items:center;@media(max-width:1024px){display:none;}\"]);\nvar Visiontec = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Visiontec\",\n  componentId: \"bsu8r2-2\"\n})([\"background:url('/imgs/visiontec.svg');background-repeat:no-repeat;background-size:100% 100%;width:130px;height:40px;margin-right:1rem;\"]);\nvar Viasat = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Viasat\",\n  componentId: \"bsu8r2-3\"\n})([\"background:url('/imgs/viasat_logo.svg');background-repeat:no-repeat;background-size:100% 100%;width:130px;height:40px;margin-top:-1.5rem;\"]);\nvar UlStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul.withConfig({\n  displayName: \"style__UlStyled\",\n  componentId: \"bsu8r2-4\"\n})([\"display:flex;align-items:center;@media(max-width:1024px){position:fixed;background:#fff;width:100%;height:100vh;flex-flow:column wrap;display:\", \";justify-content:space-around;z-index:3;}\"], function (props) {\n  return props.display == 'true' ? 'flex' : 'none';\n});\nvar LiStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li.withConfig({\n  displayName: \"style__LiStyled\",\n  componentId: \"bsu8r2-5\"\n})([\"\"]);\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"style__Link\",\n  componentId: \"bsu8r2-6\"\n})([\"padding:1rem;text-decoration:none;font-size:20px;font-family:'Raleway',sans-serif;font-weight:500;color:\", \";transition:all 0.3s ease;&:hover{color:\", \";}@media(max-width:750px){font-size:30px;}\"], function (props) {\n  return props.theme.colors.font.primary_dark;\n}, function (props) {\n  return props.theme.colors.font.default_light;\n});\nvar LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"style__LinkButton\",\n  componentId: \"bsu8r2-7\"\n})([\"background:\", \";font-family:'Raleway',sans-serif;color:#fff;border-radius:15px;font-size:1.5rem;padding:.5rem;cursor:pointer;transition:all .2s ease-in;:hover{background:\", \";}@media(max-width:1024){font-size:2rem;padding:1rem;}@media(max-width:750px){font-size:2rem;padding:1rem;}\"], function (props) {\n  return props.theme.colors.font.primary;\n}, function (props) {\n  return props.theme.colors.font.primary_dark;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlLnRzP2YwZmIiXSwibmFtZXMiOlsiTmF2V3JhcHBlciIsInN0eWxlZCIsIm5hdiIsIkxvZ29XcmFwcGVyIiwiZGl2IiwiVmlzaW9udGVjIiwiVmlhc2F0IiwiVWxTdHlsZWQiLCJ1bCIsInByb3BzIiwiZGlzcGxheSIsIkxpU3R5bGVkIiwibGkiLCJMaW5rIiwiYSIsInRoZW1lIiwiY29sb3JzIiwiZm9udCIsInByaW1hcnlfZGFyayIsImRlZmF1bHRfbGlnaHQiLCJMaW5rQnV0dG9uIiwiYnV0dG9uIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2TkFBaEI7QUFnQkEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtFQUFqQjtBQVFBLElBQU1DLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSw4SUFBZjtBQVFBLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxpSkFBWjtBQVNBLElBQU1HLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSxvTUFTTixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCLE1BQWpCLEdBQTBCLE1BQTFCLEdBQW1DLE1BQXZDO0FBQUEsQ0FUQyxDQUFkO0FBZUEsSUFBTUMsUUFBUSxHQUFHVix5REFBTSxDQUFDVyxFQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWQ7QUFHQSxJQUFNQyxJQUFJLEdBQUdaLHlEQUFNLENBQUNhLENBQVY7QUFBQTtBQUFBO0FBQUEsMk1BTU4sVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QkMsWUFBNUI7QUFBQSxDQU5DLEVBU0osVUFBQVQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QkUsYUFBNUI7QUFBQSxDQVRELENBQVY7QUFpQkEsSUFBTUMsVUFBVSxHQUFHbkIseURBQU0sQ0FBQ29CLE1BQVY7QUFBQTtBQUFBO0FBQUEsa1NBQ1AsVUFBQVosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QkssT0FBNUI7QUFBQSxDQURFLEVBVUwsVUFBQWIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QkMsWUFBNUI7QUFBQSxDQVZBLENBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE5hdldyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyLjJyZW0gMnJlbSAxLjVyZW0gMnJlbTtcbiAgei1pbmRleDogMztcbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgcGFkZGluZzogMHJlbSAwcmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFZpc2lvbnRlYyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHVybCgnL2ltZ3MvdmlzaW9udGVjLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbmBcbmV4cG9ydCBjb25zdCBWaWFzYXQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWdzL3ZpYXNhdF9sb2dvLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBVbFN0eWxlZCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGRpc3BsYXk6ICR7cHJvcHMgPT4gcHJvcHMuZGlzcGxheSA9PSAndHJ1ZScgPyAnZmxleCcgOiAnbm9uZSd9O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpU3R5bGVkID0gc3R5bGVkLmxpYFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG5gXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQucHJpbWFyeV9kYXJrfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQuZGVmYXVsdF9saWdodH07XG5cbiAgfVxuICBAbWVkaWEobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQucHJpbWFyeX07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQucHJpbWFyeV9kYXJrfTtcbiAgfVxuICBAbWVkaWEobWF4LXdpZHRoOiAxMDI0KSB7XG4gICAgZm9udC1zaXplOiAycmVtOyAgXG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBAbWVkaWEobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTsgIFxuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/style.ts\n");

/***/ })

})