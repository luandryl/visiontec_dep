webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Start/style.ts":
/*!***************************************!*\
  !*** ./src/components/Start/style.ts ***!
  \***************************************/
/*! exports provided: Container, TextWrapper, Title, Text, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextWrapper\", function() { return TextWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkButton\", function() { return LinkButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"sc-14nj400-0\"\n})([\"height:1667px;max-width:1920px;background:url('/imgs/header_bg.webp');background-repeat:no-repeat;background-position:center;display:flex;flex-flow:column;align-items:center;justify-content:flex-end;\"]);\nvar TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"style__TextWrapper\",\n  componentId: \"sc-14nj400-1\"\n})([\"display:flex;justify-content:flex-end;align-items:center;flex-flow:column;margin-bottom:15rem;@media(max-width:1024px){margin-bottom:10rem;}@media(max-width:750px){margin-bottom:5rem;}\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"sc-14nj400-2\"\n})([\"font-size:2.4rem;font-family:'Raleway',sans-serif;font-weight:800;font-style:\", \";color:\", \";line-height:70px;text-align:center;@media(max-width:750px){font-size:3rem;}\"], function (props) {\n  return props.type == \"highlight\" ? 'italic' : 'normal';\n}, function (props) {\n  return props.type == \"highlight\" ? props.theme.colors.font.success : props.theme.colors.font[\"default\"];\n});\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__Text\",\n  componentId: \"sc-14nj400-3\"\n})([\"font-size:1.4rem;line-height:30px;font-family:'Raleway',sans-serif;font-weight:500;color:\", \";text-align:center;@media(max-width:750px){font-size:1.8rem;}\"], function (props) {\n  return props.theme.colors.font[\"default\"];\n});\nvar LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"style__LinkButton\",\n  componentId: \"sc-14nj400-4\"\n})([\"background:\", \";font-family:'Raleway',sans-serif;font-weight:500;color:#fff;font-size:30px;padding:1.5rem;border-radius:15px;cursor:pointer;transition:all .2s ease-in;:hover{background:\", \";}margin-top:5rem;@media(max-width:750px){font-size:35px;padding:2rem;}\"], function (props) {\n  return props.theme.colors.font.primary;\n}, function (props) {\n  return props.theme.colors.font.primary_dark;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3RhcnQvc3R5bGUudHM/MWM1ZCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVGV4dFdyYXBwZXIiLCJUaXRsZSIsImgxIiwicHJvcHMiLCJ0eXBlIiwidGhlbWUiLCJjb2xvcnMiLCJmb250Iiwic3VjY2VzcyIsIlRleHQiLCJwIiwiTGlua0J1dHRvbiIsImEiLCJwcmltYXJ5IiwicHJpbWFyeV9kYXJrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLCtNQUFmO0FBWUEsSUFBTUMsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLGdNQUFqQjtBQWVBLElBQU1FLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksRUFBVjtBQUFBO0FBQUE7QUFBQSxpTEFJRixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLElBQWMsV0FBZCxHQUE0QixRQUE1QixHQUF1QyxRQUEzQztBQUFBLENBSkgsRUFLUCxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLElBQWMsV0FBZCxHQUE0QkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCQyxPQUFwRCxHQUE4REwsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLFdBQWxFO0FBQUEsQ0FMRSxDQUFYO0FBYUEsSUFBTUUsSUFBSSxHQUFHWCx5REFBTSxDQUFDWSxDQUFWO0FBQUE7QUFBQTtBQUFBLG1LQUtOLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsV0FBSjtBQUFBLENBTEMsQ0FBVjtBQVlBLElBQU1JLFVBQVUsR0FBR2IseURBQU0sQ0FBQ2MsQ0FBVjtBQUFBO0FBQUE7QUFBQSw2UUFDUCxVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCTSxPQUE1QjtBQUFBLENBREUsRUFXTCxVQUFBVixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCTyxZQUE1QjtBQUFBLENBWEEsQ0FBaEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGFydC9zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgaGVpZ2h0OiAxNjY3cHg7XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWdzL2hlYWRlcl9iZy53ZWJwJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTVyZW07XG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6ICR7cHJvcHMgPT4gcHJvcHMudHlwZSA9PSBcImhpZ2hsaWdodFwiID8gJ2l0YWxpYycgOiAnbm9ybWFsJ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnR5cGUgPT0gXCJoaWdobGlnaHRcIiA/IHByb3BzLnRoZW1lLmNvbG9ycy5mb250LnN1Y2Nlc3MgOiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5kZWZhdWx0fTtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQG1lZGlhKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5kZWZhdWx0fTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAbWVkaWEobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmFgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQucHJpbWFyeX07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICB9XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIEBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Start/style.ts\n");

/***/ })

})