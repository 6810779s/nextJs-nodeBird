webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NickNameEditForm.js":
/*!****************************************!*\
  !*** ./components/NickNameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/user */ \"./constants/user.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/NickNameEditForm.module.scss */ \"./styles/NickNameEditForm.module.scss\");\n/* harmony import */ var _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/NickNameEditForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NickNameEditForm = function NickNameEditForm() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    nickname: \"\"\n  }),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n      changeNick = _useInput2[0],\n      setNickname = _useInput2[1],\n      reset = _useInput2[2];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      changeNicknameLoading = _useSelector.changeNicknameLoading,\n      changeNicknameDone = _useSelector.changeNicknameDone,\n      changeNicknameFailure = _useSelector.changeNicknameFailure;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (changeNicknameDone) {\n      reset();\n    }\n  }, [changeNicknameDone]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (changeNicknameFailure) {\n      alert(changeNicknameFailure);\n    }\n  }, [changeNicknameFailure]);\n\n  var changeNickName = function changeNickName(e) {\n    e.preventDefault();\n\n    if (changeNick.nickname) {\n      dispatch({\n        type: _constants_user__WEBPACK_IMPORTED_MODULE_4__[\"CHANGE_NICKNAME_REQUEST\"],\n        data: changeNick.nickname\n      });\n    } else {\n      alert(\"변경할 닉네임을 입력해 주세요.\");\n    }\n  };\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    component: \"form\",\n    onSubmit: changeNickName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    className: _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.inputStyle,\n    name: \"nickname\",\n    id: \"nickname\",\n    value: changeNick.nickname,\n    onChange: setNickname,\n    placeholder: \"\\uB2C9\\uB124\\uC784\",\n    type: \"text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"contained\",\n    type: \"submit\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, changeNicknameLoading ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 34\n    }\n  }) : \"수정\"));\n};\n\n_s(NickNameEditForm, \"I3YA/ov4s5/J+pDJiCXnxxPW4ts=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = NickNameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NickNameEditForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"NickNameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrTmFtZUVkaXRGb3JtLmpzPzFlMDciXSwibmFtZXMiOlsiTmlja05hbWVFZGl0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwiY2hhbmdlTmljayIsInNldE5pY2tuYW1lIiwicmVzZXQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRmFpbHVyZSIsInVzZUVmZmVjdCIsImFsZXJ0IiwiY2hhbmdlTmlja05hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJkYXRhIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaW5wdXRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0Esa0JBQXlDQywrREFBUSxDQUFDO0FBQUVDLFlBQVEsRUFBRTtBQUFaLEdBQUQsQ0FBakQ7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsV0FBbkI7QUFBQSxNQUFnQ0MsS0FBaEM7O0FBQ0EscUJBQ0VDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRGI7QUFBQSxNQUFRQyxxQkFBUixnQkFBUUEscUJBQVI7QUFBQSxNQUErQkMsa0JBQS9CLGdCQUErQkEsa0JBQS9CO0FBQUEsTUFBbURDLHFCQUFuRCxnQkFBbURBLHFCQUFuRDs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsa0JBQUosRUFBd0I7QUFDdEJMLFdBQUs7QUFDTjtBQUNGLEdBSlEsRUFJTixDQUFDSyxrQkFBRCxDQUpNLENBQVQ7QUFLQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUQscUJBQUosRUFBMkI7QUFDekJFLFdBQUssQ0FBQ0YscUJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLHFCQUFELENBSk0sQ0FBVDs7QUFLQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUliLFVBQVUsQ0FBQ0QsUUFBZixFQUF5QjtBQUN2QkgsY0FBUSxDQUFDO0FBQ1BrQixZQUFJLEVBQUVDLHVFQURDO0FBRVBDLFlBQUksRUFBRWhCLFVBQVUsQ0FBQ0Q7QUFGVixPQUFELENBQVI7QUFJRCxLQUxELE1BS087QUFDTFcsV0FBSyxDQUFDLG1CQUFELENBQUw7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsU0FDRSxNQUFDLHVEQUFEO0FBQ0UsYUFBUyxFQUFFTywyRUFBTSxDQUFDQyxTQURwQjtBQUVFLGFBQVMsRUFBQyxNQUZaO0FBR0UsWUFBUSxFQUFFUCxjQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUNFLGFBQVMsRUFBRU0sMkVBQU0sQ0FBQ0UsVUFEcEI7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLE1BQUUsRUFBQyxVQUhMO0FBSUUsU0FBSyxFQUFFbkIsVUFBVSxDQUFDRCxRQUpwQjtBQUtFLFlBQVEsRUFBRUUsV0FMWjtBQU1FLGVBQVcsRUFBQyxvQkFOZDtBQU9FLFFBQUksRUFBQyxNQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQWNFLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsUUFBSSxFQUFDLFFBQWpDO0FBQTBDLFNBQUssRUFBQyxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLHFCQUFxQixHQUFHLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQWlCLElBRHpDLENBZEYsQ0FERjtBQW9CRCxDQS9DRDs7R0FBTVgsZ0I7VUFDYUUsdUQsRUFDd0JDLHVELEVBRXZDSyx1RDs7O0tBSkVSLGdCO0FBaURTQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmlja05hbWVFZGl0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIH0gZnJvbSBcIi4uL2NvbnN0YW50cy91c2VyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTmlja05hbWVFZGl0Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBOaWNrTmFtZUVkaXRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtjaGFuZ2VOaWNrLCBzZXROaWNrbmFtZSwgcmVzZXRdID0gdXNlSW5wdXQoeyBuaWNrbmFtZTogXCJcIiB9KTtcbiAgY29uc3QgeyBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcsIGNoYW5nZU5pY2tuYW1lRG9uZSwgY2hhbmdlTmlja25hbWVGYWlsdXJlIH0gPVxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYW5nZU5pY2tuYW1lRG9uZSkge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG4gIH0sIFtjaGFuZ2VOaWNrbmFtZURvbmVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhbmdlTmlja25hbWVGYWlsdXJlKSB7XG4gICAgICBhbGVydChjaGFuZ2VOaWNrbmFtZUZhaWx1cmUpO1xuICAgIH1cbiAgfSwgW2NoYW5nZU5pY2tuYW1lRmFpbHVyZV0pO1xuICBjb25zdCBjaGFuZ2VOaWNrTmFtZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjaGFuZ2VOaWNrLm5pY2tuYW1lKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICAgICAgICBkYXRhOiBjaGFuZ2VOaWNrLm5pY2tuYW1lLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwi67OA6rK97ZWgIOuLieuEpOyehOydhCDsnoXroKXtlbQg7KO87IS47JqULlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgb25TdWJtaXQ9e2NoYW5nZU5pY2tOYW1lfVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgICBuYW1lPVwibmlja25hbWVcIlxuICAgICAgICBpZD1cIm5pY2tuYW1lXCJcbiAgICAgICAgdmFsdWU9e2NoYW5nZU5pY2submlja25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXROaWNrbmFtZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLri4nrhKTsnoRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICB7Y2hhbmdlTmlja25hbWVMb2FkaW5nID8gPExvYWRpbmcgLz4gOiBcIuyImOyglVwifVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5pY2tOYW1lRWRpdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NickNameEditForm.js\n");

/***/ })

})