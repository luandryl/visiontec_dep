webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/HighDemand/style.ts":
/*!********************************************!*\
  !*** ./src/components/HighDemand/style.ts ***!
  \********************************************/
/*! exports provided: Container, Title, Colorize, SliderContent, Img, H2, Desc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colorize\", function() { return Colorize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderContent\", function() { return SliderContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Img\", function() { return Img; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desc\", function() { return Desc; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"sc-1l5p06r-0\"\n})([\"display:flex;flex-flow:column;align-items:center;margin-top:3rem;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"sc-1l5p06r-1\"\n})([\"font-size:2.6rem;font-family:'Raleway',sans-serif;font-weight:800;font-style:\", \";color:\", \";line-height:50px;text-align:center;\"], function (props) {\n  return props.type == 'highlight' ? 'italic' : 'normal';\n}, function (props) {\n  return props.type == 'highlight' ? props.theme.colors.font.success : props.theme.colors.font[\"default\"];\n});\nvar Colorize = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__Colorize\",\n  componentId: \"sc-1l5p06r-2\"\n})([\"color:\", \";\"], function (props) {\n  return props.theme.colors.font.success;\n});\nvar SliderContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__SliderContent\",\n  componentId: \"sc-1l5p06r-3\"\n})([\"margin-left:1rem;margin-right:1rem;width:100%;background:\", \";background:url(\", \");background-repeat:no-repeat;background-position:center;width:388px;height:375px;display:flex;flex-flow:column;align-items:center;\"], function (props) {\n  return props.theme.colors.font.primary_dark;\n}, function (props) {\n  return props.img;\n});\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"style__Img\",\n  componentId: \"sc-1l5p06r-4\"\n})([\"width:74px;height:74px;margin-top:2rem;\"]);\nvar H2 = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"style__H2\",\n  componentId: \"sc-1l5p06r-5\"\n})([\"font-size:1.5rem;font-family:'Raleway',sans-serif;font-weight:800;color:#fff;text-align:center;margin-top:2rem;\"]);\nvar Desc = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"style__Desc\",\n  componentId: \"sc-1l5p06r-6\"\n})([\"font-size:1.2rem;font-family:'Raleway',sans-serif;font-weight:400;color:#fff;text-align:center;margin-top:2rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGlnaERlbWFuZC9zdHlsZS50cz9kZjgwIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlIiwiaDEiLCJwcm9wcyIsInR5cGUiLCJ0aGVtZSIsImNvbG9ycyIsImZvbnQiLCJzdWNjZXNzIiwiQ29sb3JpemUiLCJzcGFuIiwiU2xpZGVyQ29udGVudCIsInByaW1hcnlfZGFyayIsImltZyIsIkltZyIsIkgyIiwiaDIiLCJEZXNjIiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQWY7QUFNQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEseUlBSUYsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsSUFBTixJQUFjLFdBQWQsR0FBNEIsUUFBNUIsR0FBdUMsUUFBNUM7QUFBQSxDQUpILEVBS1AsVUFBQUQsS0FBSztBQUFBLFNBQ1pBLEtBQUssQ0FBQ0MsSUFBTixJQUFjLFdBQWQsR0FDSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCQyxPQUQ1QixHQUVJTCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsV0FIUTtBQUFBLENBTEUsQ0FBWDtBQVlBLElBQU1FLFFBQVEsR0FBR1YseURBQU0sQ0FBQ1csSUFBVjtBQUFBO0FBQUE7QUFBQSxvQkFDVixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCQyxPQUE1QjtBQUFBLENBREssQ0FBZDtBQUlBLElBQU1HLGFBQWEsR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2TkFJVixVQUFBRyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCSyxZQUE1QjtBQUFBLENBSkssRUFLTixVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDVSxHQUFWO0FBQUEsQ0FMQyxDQUFuQjtBQWVBLElBQU1DLEdBQUcsR0FBR2YseURBQU0sQ0FBQ2MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrQ0FBVDtBQUtBLElBQU1FLEVBQUUsR0FBR2hCLHlEQUFNLENBQUNpQixFQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUFSO0FBUUEsSUFBTUMsSUFBSSxHQUFHbEIseURBQU0sQ0FBQ21CLENBQVY7QUFBQTtBQUFBO0FBQUEsdUhBQVYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IaWdoRGVtYW5kL3N0eWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuYFxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuNnJlbTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PSAnaGlnaGxpZ2h0JyA/ICdpdGFsaWMnIDogJ25vcm1hbCcpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy50eXBlID09ICdoaWdobGlnaHQnXG4gICAgICA/IHByb3BzLnRoZW1lLmNvbG9ycy5mb250LnN1Y2Nlc3NcbiAgICAgIDogcHJvcHMudGhlbWUuY29sb3JzLmZvbnQuZGVmYXVsdH07XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5leHBvcnQgY29uc3QgQ29sb3JpemUgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQuc3VjY2Vzc307XG5gXG5cbmV4cG9ydCBjb25zdCBTbGlkZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmZvbnQucHJpbWFyeV9kYXJrfTtcbiAgYmFja2dyb3VuZDogdXJsKCR7cHJvcHMgPT4gcHJvcHMuaW1nfSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDM4OHB4O1xuICBoZWlnaHQ6IDM3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3NHB4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIG1hcmdpbi10b3A6IDJyZW07XG5gXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuYFxuZXhwb3J0IGNvbnN0IERlc2MgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG5gXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HighDemand/style.ts\n");

/***/ })

})