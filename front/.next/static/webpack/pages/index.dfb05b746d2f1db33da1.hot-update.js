webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/post */ \"./constants/post.js\");\n/* harmony import */ var _styles_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/CommentForm.module.scss */ \"./styles/CommentForm.module.scss\");\n/* harmony import */ var _styles_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/CommentForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var commentText = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      addCommentsDone = _useSelector.addCommentsDone;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (addCommentsDone) {\n      setComment(\"\");\n    }\n  }, [addCommentsDone]);\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var data = new FormData(e.currentTarget);\n\n    if (data.get(\"commentInput\")) {\n      dispatch({\n        type: _constants_post__WEBPACK_IMPORTED_MODULE_4__[\"ADD_COMMENTS_REQUEST\"],\n        data: {\n          content: data.get(\"commentInput\"),\n          postId: post.id,\n          userId: id\n        }\n      });\n    }\n  };\n\n  var onChangeComment = function onChangeComment(e) {\n    setComment(e.target.value);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    component: \"form\",\n    noValidate: true,\n    onSubmit: handleSubmit,\n    style: {\n      display: \"flex\",\n      marginTop: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    style: {\n      flex: 1\n    },\n    id: \"commentInput\",\n    name: \"commentInput\",\n    value: comment,\n    onChange: onChangeComment,\n    placeholder: \"\\uB313\\uAE00 \\uB2EC\\uAE30...\",\n    type: \"text\",\n    ref: commentText,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"submit\",\n    variant: \"contained\",\n    style: {\n      height: \"30px\"\n    },\n    침ㄴㄴ: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"\\uAC8C\\uC2DC\")));\n};\n\n_s(CommentForm, \"N42ycAgVguCQfKx2sRJ18ngfmG0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudFRleHQiLCJ1c2VSZWYiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJhZGRDb21tZW50c0RvbmUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0IiwidHlwZSIsIkFERF9DT01NRU5UU19SRVFVRVNUIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsIm9uQ2hhbmdlQ29tbWVudCIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImZsZXgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLGtCQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtBQUFBLEdBQUQsQ0FBdEI7O0FBQ0EscUJBQTRCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNWLElBQWpCO0FBQUEsR0FBRCxDQUF2QztBQUFBLE1BQVFhLGVBQVIsZ0JBQVFBLGVBQVI7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELGVBQUosRUFBcUI7QUFDbkJSLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ1EsZUFBRCxDQUpNLENBQVQ7O0FBS0EsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUFhSCxDQUFDLENBQUNJLGFBQWYsQ0FBYjs7QUFFQSxRQUFJRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxjQUFULENBQUosRUFBOEI7QUFDNUJwQixjQUFRLENBQUM7QUFDUHFCLFlBQUksRUFBRUMsb0VBREM7QUFFUEwsWUFBSSxFQUFFO0FBQ0pNLGlCQUFPLEVBQUVOLElBQUksQ0FBQ0csR0FBTCxDQUFTLGNBQVQsQ0FETDtBQUVKSSxnQkFBTSxFQUFFekIsSUFBSSxDQUFDUSxFQUZUO0FBR0prQixnQkFBTSxFQUFFbEI7QUFISjtBQUZDLE9BQUQsQ0FBUjtBQVFEO0FBQ0YsR0FkRDs7QUFlQSxNQUFNbUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDWCxDQUFELEVBQU87QUFDN0JYLGNBQVUsQ0FBQ1csQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUNELEdBRkQ7O0FBR0EsU0FDRSxtRUFDRSxNQUFDLHFEQUFEO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxjQUFVLE1BRlo7QUFHRSxZQUFRLEVBQUVkLFlBSFo7QUFJRSxTQUFLLEVBQUU7QUFBRWUsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLGVBQVMsRUFBRTtBQUE5QixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBRFQ7QUFFRSxNQUFFLEVBQUMsY0FGTDtBQUdFLFFBQUksRUFBQyxjQUhQO0FBSUUsU0FBSyxFQUFFNUIsT0FKVDtBQUtFLFlBQVEsRUFBRXVCLGVBTFo7QUFNRSxlQUFXLEVBQUMsOEJBTmQ7QUFPRSxRQUFJLEVBQUMsTUFQUDtBQVFFLE9BQUcsRUFBRXJCLFdBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBZ0JFLE1BQUMsd0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsV0FBOUI7QUFBMEMsU0FBSyxFQUFFO0FBQUUyQixZQUFNLEVBQUU7QUFBVixLQUFqRDtBQUFxRSxPQUFHLE1BQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEJGLENBREYsQ0FERjtBQXdCRCxDQXJERDs7R0FBTWxDLFc7VUFDYUcsdUQsRUFHTk8sdUQsRUFDaUJBLHVEOzs7S0FMeEJWLFc7QUF1RE5BLFdBQVcsQ0FBQ21DLFNBQVosR0FBd0I7QUFDdEJsQyxNQUFJLEVBQUVtQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURELENBQXhCO0FBSWV0QywwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQUREX0NPTU1FTlRTX1JFUVVFU1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3Bvc3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Db21tZW50Rm9ybS5tb2R1bGUuc2Nzc1wiO1xuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY29tbWVudFRleHQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XG4gIGNvbnN0IHsgYWRkQ29tbWVudHNEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRDb21tZW50c0RvbmUpIHtcbiAgICAgIHNldENvbW1lbnQoXCJcIik7XG4gICAgfVxuICB9LCBbYWRkQ29tbWVudHNEb25lXSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGlmIChkYXRhLmdldChcImNvbW1lbnRJbnB1dFwiKSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVFNfUkVRVUVTVCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuZ2V0KFwiY29tbWVudElucHV0XCIpLFxuICAgICAgICAgIHBvc3RJZDogcG9zdC5pZCxcbiAgICAgICAgICB1c2VySWQ6IGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkNoYW5nZUNvbW1lbnQgPSAoZSkgPT4ge1xuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEgfX1cbiAgICAgICAgICBpZD1cImNvbW1lbnRJbnB1dFwiXG4gICAgICAgICAgbmFtZT1cImNvbW1lbnRJbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gCDri6zquLAuLi5cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZWY9e2NvbW1lbnRUZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwcHhcIiB9fSDsuajjhLTjhLQ+XG4gICAgICAgICAg6rKM7IucXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})