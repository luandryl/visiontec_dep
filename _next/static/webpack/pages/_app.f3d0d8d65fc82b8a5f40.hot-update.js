webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/hamburger.css":
/*!**********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./src/styles/hamburger.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".menu {\\n  width: 60px;\\n  height: 60px;\\n  position: fixed;\\n  top: 30px;\\n  right: 30px;\\n  display: none;\\n  z-index: 999;\\n}\\n\\n.hamburger {\\n  display: block;\\n  background: #000;\\n  height: 3px;\\n  width: 30px;\\n  position: relative;\\n  top: 25px;\\n  left: 15px;\\n  cursor: pointer;\\n  transition: 0.5s ease-in-out;\\n}\\n\\n.hamburger::after, .hamburger::before{\\n  background: #000;\\n  content: '';\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  transition: 0.5s ease-in-out;\\n}\\n\\n.hamburger::before {\\n  top: -10px;\\n}\\n.hamburger::after {\\n  bottom: -10px;\\n}\\n\\n#menu-hamburger {\\n  display: none;\\n}\\n\\ninput:checked ~ ul {\\n  display: flex;\\n}\\n\\na:active ~ ul {\\n  display: none;\\n}\\n\\ninput:checked ~ label .hamburger {\\n  transform: rotate(45deg);\\n}\\n\\ninput:checked ~ label .hamburger::before{\\n  transform: rotate(90deg);\\n  top: 0;\\n}\\n\\ninput:checked ~ label .hamburger::after{\\n  transform: rotate(90deg);\\n  bottom: 0;\\n}\\n\\n\\n@media(max-width: 1024px) {\\n  .menu {\\n    display: block;\\n  }\\n}\\n\\n.high-demand-container {\\n  max-width: 25rem;\\n  position: relative;\\n  text-align: center;\\n\\n  @media (max-width: 750px) {\\n      width: 100%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/hamburger.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,UAAU;AACZ;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,MAAM;AACR;;AAEA;EACE,wBAAwB;EACxB,SAAS;AACX;;;AAGA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;;EAElB;MACI,WAAW;EACf;AACF\",\"sourcesContent\":[\".menu {\\n  width: 60px;\\n  height: 60px;\\n  position: fixed;\\n  top: 30px;\\n  right: 30px;\\n  display: none;\\n  z-index: 999;\\n}\\n\\n.hamburger {\\n  display: block;\\n  background: #000;\\n  height: 3px;\\n  width: 30px;\\n  position: relative;\\n  top: 25px;\\n  left: 15px;\\n  cursor: pointer;\\n  transition: 0.5s ease-in-out;\\n}\\n\\n.hamburger::after, .hamburger::before{\\n  background: #000;\\n  content: '';\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  transition: 0.5s ease-in-out;\\n}\\n\\n.hamburger::before {\\n  top: -10px;\\n}\\n.hamburger::after {\\n  bottom: -10px;\\n}\\n\\n#menu-hamburger {\\n  display: none;\\n}\\n\\ninput:checked ~ ul {\\n  display: flex;\\n}\\n\\na:active ~ ul {\\n  display: none;\\n}\\n\\ninput:checked ~ label .hamburger {\\n  transform: rotate(45deg);\\n}\\n\\ninput:checked ~ label .hamburger::before{\\n  transform: rotate(90deg);\\n  top: 0;\\n}\\n\\ninput:checked ~ label .hamburger::after{\\n  transform: rotate(90deg);\\n  bottom: 0;\\n}\\n\\n\\n@media(max-width: 1024px) {\\n  .menu {\\n    display: block;\\n  }\\n}\\n\\n.high-demand-container {\\n  max-width: 25rem;\\n  position: relative;\\n  text-align: center;\\n\\n  @media (max-width: 750px) {\\n      width: 100%;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9oYW1idXJnZXIuY3NzPzIyNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFVBQVUsZ0JBQWdCLGlCQUFpQixvQkFBb0IsY0FBYyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHLGdCQUFnQixtQkFBbUIscUJBQXFCLGdCQUFnQixnQkFBZ0IsdUJBQXVCLGNBQWMsZUFBZSxvQkFBb0IsaUNBQWlDLEdBQUcsMENBQTBDLHFCQUFxQixnQkFBZ0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlDQUFpQyxHQUFHLHdCQUF3QixlQUFlLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHNDQUFzQyw2QkFBNkIsR0FBRyw2Q0FBNkMsNkJBQTZCLFdBQVcsR0FBRyw0Q0FBNEMsNkJBQTZCLGNBQWMsR0FBRyxpQ0FBaUMsV0FBVyxxQkFBcUIsS0FBSyxHQUFHLDRCQUE0QixxQkFBcUIsdUJBQXVCLHVCQUF1QixpQ0FBaUMsb0JBQW9CLEtBQUssR0FBRyxPQUFPLHlGQUF5RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixvQkFBb0IsY0FBYyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHLGdCQUFnQixtQkFBbUIscUJBQXFCLGdCQUFnQixnQkFBZ0IsdUJBQXVCLGNBQWMsZUFBZSxvQkFBb0IsaUNBQWlDLEdBQUcsMENBQTBDLHFCQUFxQixnQkFBZ0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlDQUFpQyxHQUFHLHdCQUF3QixlQUFlLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHNDQUFzQyw2QkFBNkIsR0FBRyw2Q0FBNkMsNkJBQTZCLFdBQVcsR0FBRyw0Q0FBNEMsNkJBQTZCLGNBQWMsR0FBRyxpQ0FBaUMsV0FBVyxxQkFBcUIsS0FBSyxHQUFHLDRCQUE0QixxQkFBcUIsdUJBQXVCLHVCQUF1QixpQ0FBaUMsb0JBQW9CLEtBQUssR0FBRyxtQkFBbUI7QUFDcGxHO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvaGFtYnVyZ2VyLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51IHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDI1cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhhbWJ1cmdlcjo6YWZ0ZXIsIC5oYW1idXJnZXI6OmJlZm9yZXtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGFtYnVyZ2VyOjpiZWZvcmUge1xcbiAgdG9wOiAtMTBweDtcXG59XFxuLmhhbWJ1cmdlcjo6YWZ0ZXIge1xcbiAgYm90dG9tOiAtMTBweDtcXG59XFxuXFxuI21lbnUtaGFtYnVyZ2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgfiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5hOmFjdGl2ZSB+IHVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ2VyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJnZXI6OmJlZm9yZXtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRvcDogMDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJnZXI6OmFmdGVye1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5oaWdoLWRlbWFuZC1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9oYW1idXJnZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixNQUFNO0FBQ1I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOzs7QUFHQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCO01BQ0ksV0FBVztFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5oYW1idXJnZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMjVweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGFtYnVyZ2VyOjphZnRlciwgLmhhbWJ1cmdlcjo6YmVmb3Jle1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oYW1idXJnZXI6OmJlZm9yZSB7XFxuICB0b3A6IC0xMHB4O1xcbn1cXG4uaGFtYnVyZ2VyOjphZnRlciB7XFxuICBib3R0b206IC0xMHB4O1xcbn1cXG5cXG4jbWVudS1oYW1idXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmE6YWN0aXZlIH4gdWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJnZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmdlcjo6YmVmb3Jle1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmdlcjo6YWZ0ZXJ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBib3R0b206IDA7XFxufVxcblxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmhpZ2gtZGVtYW5kLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/hamburger.css\n");

/***/ })

})