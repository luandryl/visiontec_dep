webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Network/style.ts":
/*!*****************************************!*\
  !*** ./src/components/Network/style.ts ***!
  \*****************************************/
/*! exports provided: Container, Title, Text, LinkButton, SpanTitle, SpanContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkButton\", function() { return LinkButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpanTitle\", function() { return SpanTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpanContent\", function() { return SpanContent; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"u8d0jf-0\"\n})([\"height:1100px;background:url('/imgs/6-rede-viasat-bg.png');background-repeat:no-repeat;background-size:100% 100%;display:flex;flex-flow:column;align-items:center;padding-top:3rem;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"u8d0jf-1\"\n})([\"font-size:2.6rem;font-family:'Raleway',sans-serif;font-weight:800;font-style:\", \";color:\", \";line-height:50px;\"], function (props) {\n  return props.type == 'highlight' ? 'italic' : 'normal';\n}, function (props) {\n  return props.theme.colors.font.primary;\n});\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__Text\",\n  componentId: \"u8d0jf-2\"\n})([\"font-size:1.7rem;line-height:30px;font-family:'Raleway',sans-serif;font-weight:500;color:#646567;text-align:center;margin-top:1.5rem;\"]);\nvar LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"style__LinkButton\",\n  componentId: \"u8d0jf-3\"\n})([\"background:\", \";font-family:'Raleway',sans-serif;color:#fff;font-size:30px;padding:1.5rem;border-radius:20px;cursor:pointer;transition:all 0.2s ease-in;:hover{background:\", \";}\"], function (props) {\n  return props.theme.colors.font.primary;\n}, function (props) {\n  return props.theme.colors.font.primary_dark;\n});\nvar SpanTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__SpanTitle\",\n  componentId: \"u8d0jf-4\"\n})([\"font-size:2.6rem;margin-top:3rem;\"]);\nvar SpanContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__SpanContent\",\n  componentId: \"u8d0jf-5\"\n})([\"font-size:1.8rem;margin-top:3rem;color:'#F4F9E7';@media(max-width:1024px){font-size:1.8rem;}@media(max-width:1024px){font-size:1.6rem;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV0d29yay9zdHlsZS50cz8wNzA5Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlIiwiaDEiLCJwcm9wcyIsInR5cGUiLCJ0aGVtZSIsImNvbG9ycyIsImZvbnQiLCJwcmltYXJ5IiwiVGV4dCIsInAiLCJMaW5rQnV0dG9uIiwiYSIsInByaW1hcnlfZGFyayIsIlNwYW5UaXRsZSIsInNwYW4iLCJTcGFuQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFmO0FBVUEsSUFBTUMsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUlGLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLElBQU4sSUFBYyxXQUFkLEdBQTRCLFFBQTVCLEdBQXVDLFFBQTVDO0FBQUEsQ0FKSCxFQUtQLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLE9BQTVCO0FBQUEsQ0FMRSxDQUFYO0FBUUEsSUFBTUMsSUFBSSxHQUFHVix5REFBTSxDQUFDVyxDQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFWO0FBVUEsSUFBTUMsVUFBVSxHQUFHWix5REFBTSxDQUFDYSxDQUFWO0FBQUE7QUFBQTtBQUFBLHlMQUNQLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLE9BQTVCO0FBQUEsQ0FERSxFQVVMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JNLFlBQTVCO0FBQUEsQ0FWQSxDQUFoQjtBQWNBLElBQU1DLFNBQVMsR0FBR2YseURBQU0sQ0FBQ2dCLElBQVY7QUFBQTtBQUFBO0FBQUEseUNBQWY7QUFJQSxJQUFNQyxXQUFXLEdBQUdqQix5REFBTSxDQUFDZ0IsSUFBVjtBQUFBO0FBQUE7QUFBQSwrSUFBakIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrL3N0eWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWdzLzYtcmVkZS12aWFzYXQtYmcucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDNyZW07XG5gXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiAke3Byb3BzID0+IChwcm9wcy50eXBlID09ICdoaWdobGlnaHQnID8gJ2l0YWxpYycgOiAnbm9ybWFsJyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5fTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG5gXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjQ2NTY3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbmBcblxuZXhwb3J0IGNvbnN0IExpbmtCdXR0b24gPSBzdHlsZWQuYWBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5fTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTcGFuVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIG1hcmdpbi10b3A6IDNyZW07XG5gXG5leHBvcnQgY29uc3QgU3BhbkNvbnRlbnQgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGNvbG9yOiAnI0Y0RjlFNyc7XG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5cbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Network/style.ts\n");

/***/ })

})