webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Information/style.ts":
/*!*********************************************!*\
  !*** ./src/components/Information/style.ts ***!
  \*********************************************/
/*! exports provided: Container, Title, Colorize, VideoContainer, IFrame, FormContainer, FormTitle, Form, FormItem, Input, Label, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colorize\", function() { return Colorize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VideoContainer\", function() { return VideoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IFrame\", function() { return IFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContainer\", function() { return FormContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormTitle\", function() { return FormTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormItem\", function() { return FormItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Label\", function() { return Label; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Container\",\n  componentId: \"t49cd5-0\"\n})([\"height:2300px;background:url('/imgs/sec_2_bg.png');background-repeat:no-repeat;background-position:center;display:flex;flex-flow:column;align-items:center;padding-top:7rem;@media (max-width:750px){height:1800px;padding:2rem 2rem 0 2rem;}\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"t49cd5-1\"\n})([\"font-size:2.6rem;font-family:'Raleway',sans-serif;font-weight:800;color:#fff;line-height:70px;text-align:center;@media (max-width:750px){font-size:2rem;line-height:50px;}\"]);\nvar Colorize = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"style__Colorize\",\n  componentId: \"t49cd5-2\"\n})([\"color:\", \";\"], function (props) {\n  return props.theme.colors.font.success;\n});\nvar VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__VideoContainer\",\n  componentId: \"t49cd5-3\"\n})([\"display:block;overflow:hidden;position:relative;width:100%;height:610px;max-width:1080px;&::after{padding-top:56.25%;content:'';}margin-top:2rem;margin-bottom:2rem;@media (max-width:750px){height:400px;max-width:750px;}\"]);\nvar IFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].iframe.withConfig({\n  displayName: \"style__IFrame\",\n  componentId: \"t49cd5-4\"\n})([\"position:absolute;top:0;left:0;width:100%;height:100%;\"]);\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__FormContainer\",\n  componentId: \"t49cd5-5\"\n})([\"margin-top:2rem;max-width:768px;background:#fff;border-radius:25px;display:flex;flex-flow:column;padding:5rem;width:100%;\"]);\nvar FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"style__FormTitle\",\n  componentId: \"t49cd5-6\"\n})([\"font-size:2rem;font-family:'Raleway',sans-serif;font-weight:700;color:\", \";line-height:35px;text-align:center;\"], function (props) {\n  return props.theme.colors.font.primary_dark;\n});\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.withConfig({\n  displayName: \"style__Form\",\n  componentId: \"t49cd5-7\"\n})([\"display:flex;flex-flow:column;align-items:center;margin-top:2rem;overflow:hidden;text-align:center;\"]);\nvar FormItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__FormItem\",\n  componentId: \"t49cd5-8\"\n})([\"font-family:'Raleway',sans-serif;width:100%;margin-top:2rem;display:flex;\"]);\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.withConfig({\n  displayName: \"style__Input\",\n  componentId: \"t49cd5-9\"\n})([\"width:100%;border-bottom:1px solid #a9a9a9;flex-grow:1;font-family:'Raleway',sans-serif;font-size:1.5rem;@media (max-width:750px){flex-grow:0.4;font-size:2rem;}\"]);\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label.withConfig({\n  displayName: \"style__Label\",\n  componentId: \"t49cd5-10\"\n})([\"color:\", \";font-family:'Raleway',sans-serif;font-size:1.5rem;margin-right:1rem;@media (max-width:750px){font-size:2rem;}\"], function (props) {\n  return props.theme.colors.font.default_light;\n});\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"style__Button\",\n  componentId: \"t49cd5-11\"\n})([\"background:\", \";font-family:'Raleway',sans-serif;color:#fff;font-size:30px;padding:1rem;border-radius:10px;cursor:pointer;transition:all 0.2s ease-in;:hover{background:\", \";}margin-top:3rem;\"], function (props) {\n  return props.theme.colors.font.primary;\n}, function (props) {\n  return props.theme.colors.font.primary_dark;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5mb3JtYXRpb24vc3R5bGUudHM/MmFkYiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaXRsZSIsImgxIiwiQ29sb3JpemUiLCJzcGFuIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImZvbnQiLCJzdWNjZXNzIiwiVmlkZW9Db250YWluZXIiLCJJRnJhbWUiLCJpZnJhbWUiLCJGb3JtQ29udGFpbmVyIiwiRm9ybVRpdGxlIiwiaDIiLCJwcmltYXJ5X2RhcmsiLCJGb3JtIiwiZm9ybSIsIkZvcm1JdGVtIiwiSW5wdXQiLCJpbnB1dCIsIkxhYmVsIiwibGFiZWwiLCJkZWZhdWx0X2xpZ2h0IiwiQnV0dG9uIiwiYnV0dG9uIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFQQUFmO0FBY0EsSUFBTUMsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLGtMQUFYO0FBY0EsSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDSyxJQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUNWLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0JDLE9BQTVCO0FBQUEsQ0FESyxDQUFkO0FBSUEsSUFBTUMsY0FBYyxHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1PQUFwQjtBQW1CQSxJQUFNVyxNQUFNLEdBQUdaLHlEQUFNLENBQUNhLE1BQVY7QUFBQTtBQUFBO0FBQUEsOERBQVo7QUFRQSxJQUFNQyxhQUFhLEdBQUdkLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBQW5CO0FBV0EsSUFBTWMsU0FBUyxHQUFHZix5REFBTSxDQUFDZ0IsRUFBVjtBQUFBO0FBQUE7QUFBQSx1SEFJWCxVQUFBVixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCUSxZQUE1QjtBQUFBLENBSk0sQ0FBZjtBQVNBLElBQU1DLElBQUksR0FBR2xCLHlEQUFNLENBQUNtQixJQUFWO0FBQUE7QUFBQTtBQUFBLDJHQUFWO0FBU0EsSUFBTUMsUUFBUSxHQUFHcEIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBZDtBQU9BLElBQU1vQixLQUFLLEdBQUdyQix5REFBTSxDQUFDc0IsS0FBVjtBQUFBO0FBQUE7QUFBQSx3S0FBWDtBQVdBLElBQU1DLEtBQUssR0FBR3ZCLHlEQUFNLENBQUN3QixLQUFWO0FBQUE7QUFBQTtBQUFBLGlJQUNQLFVBQUFsQixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCZ0IsYUFBNUI7QUFBQSxDQURFLENBQVg7QUFVQSxJQUFNQyxNQUFNLEdBQUcxQix5REFBTSxDQUFDMkIsTUFBVjtBQUFBO0FBQUE7QUFBQSx1TUFDSCxVQUFBckIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3Qm1CLE9BQTVCO0FBQUEsQ0FERixFQVVELFVBQUF0QixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCUSxZQUE1QjtBQUFBLENBVkosQ0FBWiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0luZm9ybWF0aW9uL3N0eWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMjMwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWdzL3NlY18yX2JnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgaGVpZ2h0OiAxODAwcHg7XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDAgMnJlbTtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuNnJlbTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb2xvcml6ZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5zdWNjZXNzfTtcbmBcblxuZXhwb3J0IGNvbnN0IFZpZGVvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYxMHB4O1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IElGcmFtZSA9IHN0eWxlZC5pZnJhbWVgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwYWRkaW5nOiA1cmVtO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbmBcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhOWE5YTk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIGZsZXgtZ3JvdzogMC40O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5kZWZhdWx0X2xpZ2h0fTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5mb250LnByaW1hcnl9O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZm9udC5wcmltYXJ5X2Rhcmt9O1xuICB9XG4gIG1hcmdpbi10b3A6IDNyZW07XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Information/style.ts\n");

/***/ })

})