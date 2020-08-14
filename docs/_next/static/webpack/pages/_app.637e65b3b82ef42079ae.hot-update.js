webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styletron-react */ \"./node_modules/styletron-react/dist/browser.es5.es.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/green */ \"./node_modules/@material-ui/core/colors/green.js\");\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styletron */ \"./styletron.js\");\n\nvar _jsxFileName = \"/home/sandeepsihari/orai-mart/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createMuiTheme\"])({\n    typography: {\n      fontFamily: ['\"Poppins\"', \"sans-serif\"].join(\",\")\n    },\n    palette: {\n      primary: {\n        light: \"#63c691\",\n        main: \"#2e9563\",\n        dark: \"#006638\"\n      },\n      secondary: {\n        light: \"#ff8158\",\n        main: \"#e04f2c\",\n        dark: \"#a71700\"\n      }\n    }\n  });\n  return __jsx(styletron_react__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    value: _styletron__WEBPACK_IMPORTED_MODULE_6__[\"styletron\"],\n    debug: _styletron__WEBPACK_IMPORTED_MODULE_6__[\"debug\"],\n    debugAfterHydration: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsInBhbGV0dGUiLCJwcmltYXJ5IiwibGlnaHQiLCJtYWluIiwiZGFyayIsInNlY29uZGFyeSIsInN0eWxldHJvbiIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLE1BQU1DLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsY0FBVSxFQUFFO0FBQ1ZDLGdCQUFVLEVBQUUsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QkMsSUFBNUIsQ0FBaUMsR0FBakM7QUFERixLQURlO0FBSTNCQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQUVDLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxZQUFJLEVBQUUsU0FBMUI7QUFBcUNDLFlBQUksRUFBRTtBQUEzQyxPQURGO0FBRVBDLGVBQVMsRUFBRTtBQUFFSCxhQUFLLEVBQUUsU0FBVDtBQUFvQkMsWUFBSSxFQUFFLFNBQTFCO0FBQXFDQyxZQUFJLEVBQUU7QUFBM0M7QUFGSjtBQUprQixHQUFELENBQTVCO0FBVUEsU0FDRSxNQUFDLHdEQUFEO0FBQW1CLFNBQUssRUFBRUUsb0RBQTFCO0FBQXFDLFNBQUssRUFBRUMsZ0RBQTVDO0FBQW1ELHVCQUFtQixNQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRVosS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixDQURGO0FBT0Q7O0tBbEJRRixLO0FBb0JNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFN0eWxldHJvblByb3ZpZGVyIH0gZnJvbSBcInN0eWxldHJvbi1yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgZ3JlZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlblwiO1xuaW1wb3J0IHsgc3R5bGV0cm9uLCBkZWJ1ZyB9IGZyb20gXCIuLi9zdHlsZXRyb25cIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgIGZvbnRGYW1pbHk6IFsnXCJQb3BwaW5zXCInLCBcInNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksXG4gICAgfSxcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7IGxpZ2h0OiBcIiM2M2M2OTFcIiwgbWFpbjogXCIjMmU5NTYzXCIsIGRhcms6IFwiIzAwNjYzOFwiIH0sXG4gICAgICBzZWNvbmRhcnk6IHsgbGlnaHQ6IFwiI2ZmODE1OFwiLCBtYWluOiBcIiNlMDRmMmNcIiwgZGFyazogXCIjYTcxNzAwXCIgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZXRyb25Qcm92aWRlciB2YWx1ZT17c3R5bGV0cm9ufSBkZWJ1Zz17ZGVidWd9IGRlYnVnQWZ0ZXJIeWRyYXRpb24+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9TdHlsZXRyb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})