webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NickNameEditForm.js":
/*!****************************************!*\
  !*** ./components/NickNameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/user */ \"./constants/user.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/NickNameEditForm.module.scss */ \"./styles/NickNameEditForm.module.scss\");\n/* harmony import */ var _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/NickNameEditForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  input: {\n    flex: 1\n  }\n});\n\nvar NickNameEditForm = function NickNameEditForm() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      changeNicknameLoading = _useSelector.changeNicknameLoading,\n      changeNicknameDone = _useSelector.changeNicknameDone,\n      changeNicknameFailure = _useSelector.changeNicknameFailure;\n\n  var classes = useStyles();\n\n  var changeNickName = function changeNickName(e) {\n    e.preventDefault();\n    var data = new FormData(e.currentTarget);\n\n    if (data.get(\"nickname\")) {\n      dispatch({\n        type: _constants_user__WEBPACK_IMPORTED_MODULE_4__[\"CHANGE_NICKNAME_REQUEST\"],\n        data: data.get(\"nickname\")\n      });\n    } else {\n      alert(\"변경할 닉네임을 입력해 주세요.\");\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (changeNicknameFailure) {\n      alert(changeNicknameFailure);\n    }\n  }, [changeNicknameFailure]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (changeNicknameDone) {}\n  }, [changeNicknameDone]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    component: \"form\",\n    onSubmit: changeNickName,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\uB2C9\\uB124\\uC784\",\n    id: \"nickname\",\n    name: \"nickname\",\n    type: \"text\",\n    className: _styles_NickNameEditForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.inputStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    type: \"submit\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, changeNicknameLoading ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 34\n    }\n  }) : \"수정\"));\n};\n\n_s(NickNameEditForm, \"bOXtpq2hnqoBHreFpIm9AYlthP0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], useStyles];\n});\n\n_c = NickNameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NickNameEditForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"NickNameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrTmFtZUVkaXRGb3JtLmpzPzFlMDciXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0IiwiZmxleCIsIk5pY2tOYW1lRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJjbGFzc2VzIiwiY2hhbmdlTmlja05hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0IiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJjb250YWluZXIiLCJpbnB1dFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUMzQkMsT0FBSyxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSO0FBRG9CLENBQUQsQ0FBNUI7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQ0VDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRGI7QUFBQSxNQUFRQyxxQkFBUixnQkFBUUEscUJBQVI7QUFBQSxNQUErQkMsa0JBQS9CLGdCQUErQkEsa0JBQS9CO0FBQUEsTUFBbURDLHFCQUFuRCxnQkFBbURBLHFCQUFuRDs7QUFFQSxNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7O0FBQ0EsTUFBTWMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLENBQWFILENBQUMsQ0FBQ0ksYUFBZixDQUFiOztBQUNBLFFBQUlGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQVQsQ0FBSixFQUEwQjtBQUN4QmYsY0FBUSxDQUFDO0FBQ1BnQixZQUFJLEVBQUVDLHVFQURDO0FBRVBMLFlBQUksRUFBRUEsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBVDtBQUZDLE9BQUQsQ0FBUjtBQUlELEtBTEQsTUFLTztBQUNMRyxXQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FYRDs7QUFhQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVoscUJBQUosRUFBMkI7QUFDekJXLFdBQUssQ0FBQ1gscUJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLHFCQUFELENBSk0sQ0FBVDtBQUtBWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYixrQkFBSixFQUF3QixDQUN2QjtBQUNGLEdBSFEsRUFHTixDQUFDQSxrQkFBRCxDQUhNLENBQVQ7QUFJQSxTQUNFLE1BQUMsdURBQUQ7QUFDRSxhQUFTLEVBQUVjLDJFQUFNLENBQUNDLFNBRHBCO0FBRUUsYUFBUyxFQUFDLE1BRlo7QUFHRSxZQUFRLEVBQUVaLGNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsZUFBVyxFQUFDLG9CQURkO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsYUFBUyxFQUFFVywyRUFBTSxDQUFDRSxVQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFZRSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFFBQUksRUFBQyxRQUFqQztBQUEwQyxTQUFLLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakIscUJBQXFCLEdBQUcsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBaUIsSUFEekMsQ0FaRixDQURGO0FBa0JELENBN0NEOztHQUFNTixnQjtVQUNhRSx1RCxFQUVmQyx1RCxFQUNjUCxTOzs7S0FKWkksZ0I7QUErQ1NBLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OaWNrTmFtZUVkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gXCIuLi9jb25zdGFudHMvdXNlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05pY2tOYW1lRWRpdEZvcm0ubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGlucHV0OiB7IGZsZXg6IDEgfSxcbn0pO1xuY29uc3QgTmlja05hbWVFZGl0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGNoYW5nZU5pY2tuYW1lTG9hZGluZywgY2hhbmdlTmlja25hbWVEb25lLCBjaGFuZ2VOaWNrbmFtZUZhaWx1cmUgfSA9XG4gICAgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBjaGFuZ2VOaWNrTmFtZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBpZiAoZGF0YS5nZXQoXCJuaWNrbmFtZVwiKSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogZGF0YS5nZXQoXCJuaWNrbmFtZVwiKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIuuzgOqyve2VoCDri4nrhKTsnoTsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYW5nZU5pY2tuYW1lRmFpbHVyZSkge1xuICAgICAgYWxlcnQoY2hhbmdlTmlja25hbWVGYWlsdXJlKTtcbiAgICB9XG4gIH0sIFtjaGFuZ2VOaWNrbmFtZUZhaWx1cmVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhbmdlTmlja25hbWVEb25lKSB7XG4gICAgfVxuICB9LCBbY2hhbmdlTmlja25hbWVEb25lXSk7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICBjb21wb25lbnQ9XCJmb3JtXCJcbiAgICAgIG9uU3VibWl0PXtjaGFuZ2VOaWNrTmFtZX1cbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLri4nrhKTsnoRcIlxuICAgICAgICBpZD1cIm5pY2tuYW1lXCJcbiAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFN0eWxlfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAge2NoYW5nZU5pY2tuYW1lTG9hZGluZyA/IDxMb2FkaW5nIC8+IDogXCLsiJjsoJVcIn1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOaWNrTmFtZUVkaXRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NickNameEditForm.js\n");

/***/ })

})