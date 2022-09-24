webpackHotUpdate_N_E("pages/profile",{

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\nvar useInput = function useInput() {\n  _s();\n\n  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialValue),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name;\n    setData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  }, [data]);\n  var reset = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setData(initialValue);\n  }, [initialValue]);\n  return [data, handler, reset];\n};\n\n_s(useInput, \"wvhPmspdP64/oHTPydJALDWGDUM=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInput);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5wdXQuanM/ZGYzYSJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsImluaXRpYWxWYWx1ZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwicmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQXlCO0FBQUE7O0FBQUEsTUFBeEJDLFlBQXdCLHVFQUFULElBQVM7O0FBQ3hDLGtCQUF3QkMsc0RBQVEsQ0FBQ0QsWUFBRCxDQUFoQztBQUFBLE1BQU9FLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0wsb0JBQXdCQSxDQUFDLENBQUNDLE1BQTFCO0FBQUEsUUFBUUMsS0FBUixhQUFRQSxLQUFSO0FBQUEsUUFBZUMsSUFBZixhQUFlQSxJQUFmO0FBQ0FOLFdBQU8saUNBQ0ZELElBREUscUdBRUpPLElBRkksRUFFR0QsS0FGSCxHQUFQO0FBSUQsR0FQd0IsRUFRekIsQ0FBQ04sSUFBRCxDQVJ5QixDQUEzQjtBQVVBLE1BQU1RLEtBQUssR0FBR0wseURBQVcsQ0FBQyxZQUFNO0FBQzlCRixXQUFPLENBQUNILFlBQUQsQ0FBUDtBQUNELEdBRndCLEVBRXRCLENBQUNBLFlBQUQsQ0FGc0IsQ0FBekI7QUFHQSxTQUFPLENBQUNFLElBQUQsRUFBT0UsT0FBUCxFQUFnQk0sS0FBaEIsQ0FBUDtBQUNELENBaEJEOztHQUFNWCxROztBQWtCU0EsdUVBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VJbnB1dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gZS50YXJnZXQ7XG4gICAgICBzZXREYXRhKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2RhdGFdXG4gICk7XG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldERhdGEoaW5pdGlhbFZhbHVlKTtcbiAgfSwgW2luaXRpYWxWYWx1ZV0pO1xuICByZXR1cm4gW2RhdGEsIGhhbmRsZXIsIHJlc2V0XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useInput.js\n");

/***/ })

})