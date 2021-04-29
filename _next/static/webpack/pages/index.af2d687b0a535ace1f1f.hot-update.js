webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar/style.ts":
/*!****************************************!*\
  !*** ./src/components/Navbar/style.ts ***!
  \****************************************/
/*! exports provided: NavWrapper, LogoWrapper, Visiontec, Viasat, UlStyled, LiStyled, Link, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavWrapper\", function() { return NavWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoWrapper\", function() { return LogoWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visiontec\", function() { return Visiontec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Viasat\", function() { return Viasat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UlStyled\", function() { return UlStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiStyled\", function() { return LiStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkButton\", function() { return LinkButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"style__NavWrapper\",\n  componentId: \"bsu8r2-0\"\n})([\"position:fixed;width:100%;max-width:1920px;height:8rem;display:flex;background:#fff;justify-content:center;padding:2rem 1rem;z-index:3;@media(max-width:1024px){height:0;margin-top:0rem;padding:0rem 0rem;}\"]);\nvar LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__LogoWrapper\",\n  componentId: \"bsu8r2-1\"\n})([\"display:flex;@media(max-width:1024px){display:none;}\"]);\nvar Visiontec = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Visiontec\",\n  componentId: \"bsu8r2-2\"\n})([\"background:url('/imgs/visiontec.svg');background-repeat:no-repeat;background-size:100% 100%;width:150px;height:60px;margin-right:1rem;margin-top:.479rem;\"]);\nvar Viasat = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Viasat\",\n  componentId: \"bsu8r2-3\"\n})([\"background:url('/imgs/viasat_logo.svg');background-repeat:no-repeat;background-size:100% 100%;width:150px;height:60px;margin-top:-.6rem;\"]);\nvar UlStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul.withConfig({\n  displayName: \"style__UlStyled\",\n  componentId: \"bsu8r2-4\"\n})([\"display:flex;align-items:center;@media(max-width:1024px){position:fixed;background:#fff;width:100%;height:100vh;flex-flow:column wrap;display:\", \";justify-content:space-around;z-index:3;}\"], function (props) {\n  return props.display == 'true' ? 'flex' : 'none';\n});\nvar LiStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li.withConfig({\n  displayName: \"style__LiStyled\",\n  componentId: \"bsu8r2-5\"\n})([\"text-align:center;\"]);\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"style__Link\",\n  componentId: \"bsu8r2-6\"\n})([\"padding:1rem;text-decoration:none;font-size:20px;font-family:'Raleway',sans-serif;font-weight:500;color:\", \";transition:all 0.3s ease;&:hover{color:\", \";}@media(max-width:750px){font-size:30px;}\"], function (props) {\n  return props.theme.colors.font.primary_dark;\n}, function (props) {\n  return props.theme.colors.font.default_light;\n});\nvar LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"style__LinkButton\",\n  componentId: \"bsu8r2-7\"\n})([\"background:\", \";font-family:'Raleway',sans-serif;color:#fff;border-radius:15px;font-size:1.5rem;padding:.5rem;cursor:pointer;transition:all .2s ease-in;:hover{background:\", \";}@media(max-width:1024){font-size:2rem;padding:1rem;}@media(max-width:750px){font-size:2rem;padding:1rem;}\"], function (props) {\n  return props.theme.colors.font.primary;\n}, function (props) {\n  return props.theme.colors.font.primary_dark;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlLnRzP2YwZmIiXSwibmFtZXMiOlsiTmF2V3JhcHBlciIsInN0eWxlZCIsIm5hdiIsIkxvZ29XcmFwcGVyIiwiZGl2IiwiVmlzaW9udGVjIiwiVmlhc2F0IiwiVWxTdHlsZWQiLCJ1bCIsInByb3BzIiwiZGlzcGxheSIsIkxpU3R5bGVkIiwibGkiLCJMaW5rIiwiYSIsInRoZW1lIiwiY29sb3JzIiwiZm9udCIsInByaW1hcnlfZGFyayIsImRlZmF1bHRfbGlnaHQiLCJMaW5rQnV0dG9uIiwiYnV0dG9uIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvTkFBaEI7QUFpQkEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLDREQUFqQjtBQU9BLElBQU1DLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxpS0FBZjtBQVNBLElBQU1FLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnSkFBWjtBQVNBLElBQU1HLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSxvTUFTTixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCLE1BQWpCLEdBQTBCLE1BQTFCLEdBQW1DLE1BQXZDO0FBQUEsQ0FUQyxDQUFkO0FBZUEsSUFBTUMsUUFBUSxHQUFHVix5REFBTSxDQUFDVyxFQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFkO0FBR0EsSUFBTUMsSUFBSSxHQUFHWix5REFBTSxDQUFDYSxDQUFWO0FBQUE7QUFBQTtBQUFBLDJNQU1OLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLFlBQTVCO0FBQUEsQ0FOQyxFQVNKLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JFLGFBQTVCO0FBQUEsQ0FURCxDQUFWO0FBaUJBLElBQU1DLFVBQVUsR0FBR25CLHlEQUFNLENBQUNvQixNQUFWO0FBQUE7QUFBQTtBQUFBLGtTQUNQLFVBQUFaLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JLLE9BQTVCO0FBQUEsQ0FERSxFQVVMLFVBQUFiLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLFlBQTVCO0FBQUEsQ0FWQSxDQUFoQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci9zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBOYXZXcmFwcGVyID0gc3R5bGVkLm5hdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIGhlaWdodDogOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgei1pbmRleDogMztcbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgcGFkZGluZzogMHJlbSAwcmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFZpc2lvbnRlYyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHVybCgnL2ltZ3MvdmlzaW9udGVjLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogLjQ3OXJlbTtcbmBcbmV4cG9ydCBjb25zdCBWaWFzYXQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWdzL3ZpYXNhdF9sb2dvLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC0uNnJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFVsU3R5bGVkID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgZGlzcGxheTogJHtwcm9wcyA9PiBwcm9wcy5kaXNwbGF5ID09ICd0cnVlJyA/ICdmbGV4JyA6ICdub25lJ307XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgei1pbmRleDogMztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlTdHlsZWQgPSBzdHlsZWQubGlgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5kZWZhdWx0X2xpZ2h0fTtcblxuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5fTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwMjQpIHtcbiAgICBmb250LXNpemU6IDJyZW07ICBcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtOyAgXG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/style.ts\n");

/***/ })

})