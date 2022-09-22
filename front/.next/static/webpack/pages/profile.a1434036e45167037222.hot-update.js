webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Person */ \"./node_modules/@material-ui/icons/Person.js\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/FollowList.module.scss */ \"./styles/FollowList.module.scss\");\n/* harmony import */ var _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/FollowList.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  listItem: {\n    display: \"flex\",\n    alignItems: \"center\"\n  }\n});\n\nvar FollowList = function FollowList(_ref) {\n  _s();\n\n  var data = _ref.data,\n      header = _ref.header,\n      onClickMore = _ref.onClickMore,\n      loading = _ref.loading;\n  var classes = useStyles();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, header), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      padding: \"0\"\n    },\n    className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, data && data.map(function (item, idx) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      href: \"/user/\".concat(post.User.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItemWrap,\n      key: item.nickname + idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n      className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.profileImg,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      style: {\n        fontSize: \"50px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    })), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, item.nickname))));\n  })), !loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickMore,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 20\n    }\n  }, \"\\uB354\\uBCF4\\uAE30\"));\n};\n\n_s(FollowList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,\n  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImxpc3RJdGVtIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJGb2xsb3dMaXN0IiwiZGF0YSIsImhlYWRlciIsIm9uQ2xpY2tNb3JlIiwibG9hZGluZyIsImNsYXNzZXMiLCJwYWRkaW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiaXRlbSIsImlkeCIsInBvc3QiLCJVc2VyIiwiaWQiLCJsaXN0SXRlbVdyYXAiLCJuaWNrbmFtZSIsInByb2ZpbGVJbWciLCJmb250U2l6ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsVUFBUSxFQUFFO0FBQUVDLFdBQU8sRUFBRSxNQUFYO0FBQW1CQyxjQUFVLEVBQUU7QUFBL0I7QUFEaUIsQ0FBRCxDQUE1Qjs7QUFHQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM3RCxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFDQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS08sTUFBTCxDQURGLEVBRUUsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFSSxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQStCLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLElBQ0hBLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFdBQ1AsTUFBQyxnREFBRDtBQUFNLFVBQUksa0JBQVdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxFQUFyQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQU0sZUFBUyxFQUFFUCxxRUFBTSxDQUFDUSxZQUF4QjtBQUFzQyxTQUFHLEVBQUVMLElBQUksQ0FBQ00sUUFBTCxHQUFnQkwsR0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMERBQUQ7QUFBVSxlQUFTLEVBQUVKLHFFQUFNLENBQUNWLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVUscUVBQU0sQ0FBQ1UsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0VBQUQ7QUFBWSxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNUixJQUFJLENBQUNNLFFBQVgsQ0FKRixDQURGLENBREYsQ0FETztBQUFBLEdBQVQsQ0FGSixDQUZGLEVBaUJHLENBQUNaLE9BQUQsSUFBWSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWpCZixDQURGO0FBcUJELENBdkJEOztHQUFNSCxVO1VBQ1lMLFM7OztLQURaSyxVO0FBeUJOQSxVQUFVLENBQUNtQixTQUFYLEdBQXVCO0FBQ3JCakIsUUFBTSxFQUFFa0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESjtBQUVyQnJCLE1BQUksRUFBRW1CLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JELFVBRkQ7QUFHckJuQixhQUFXLEVBQUVpQixpREFBUyxDQUFDSSxJQUFWLENBQWVGLFVBSFA7QUFJckJsQixTQUFPLEVBQUVnQixpREFBUyxDQUFDSyxJQUFWLENBQWVIO0FBSkgsQ0FBdkI7QUFPZXRCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1BdmF0YXIsXG4gIExpc3RJdGVtVGV4dCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Gb2xsb3dMaXN0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgbGlzdEl0ZW06IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbn0pO1xuY29uc3QgRm9sbG93TGlzdCA9ICh7IGRhdGEsIGhlYWRlciwgb25DbGlja01vcmUsIGxvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz57aGVhZGVyfTwvaDM+XG4gICAgICA8TGlzdCBzdHlsZT17eyBwYWRkaW5nOiBcIjBcIiB9fSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1XcmFwfSBrZXk9e2l0ZW0ubmlja25hbWUgKyBpZHh9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbWd9PlxuICAgICAgICAgICAgICAgICAgICA8UGVyc29uSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5uaWNrbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgICB7IWxvYWRpbmcgJiYgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0+642U67O06riwPC9CdXR0b24+fVxuICAgIDwvPlxuICApO1xufTtcblxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25DbGlja01vcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})