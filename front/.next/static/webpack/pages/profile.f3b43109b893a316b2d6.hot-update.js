webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Person */ \"./node_modules/@material-ui/icons/Person.js\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/FollowList.module.scss */ \"./styles/FollowList.module.scss\");\n/* harmony import */ var _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/FollowList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var data = _ref.data,\n      header = _ref.header,\n      onClickMore = _ref.onClickMore,\n      loading = _ref.loading;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, header), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      padding: \"0\"\n    },\n    className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, data && data.map(function (item, idx) {\n    return (// <Link href={`/user/${}`}>\n      __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItemWrap,\n        key: item.nickname + idx,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 13\n        }\n      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n        className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 15\n        }\n      }, __jsx(\"div\", {\n        className: _styles_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profileImg,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }\n      }, __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        style: {\n          fontSize: \"50px\"\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 19\n        }\n      })), __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }\n      }, item.nickname))) // </Link>\n\n    );\n  })), !loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickMore,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 20\n    }\n  }, \"\\uB354\\uBCF4\\uAE30\"));\n};\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,\n  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImRhdGEiLCJoZWFkZXIiLCJvbkNsaWNrTW9yZSIsImxvYWRpbmciLCJwYWRkaW5nIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiaXRlbSIsImlkeCIsImxpc3RJdGVtV3JhcCIsIm5pY2tuYW1lIiwibGlzdEl0ZW0iLCJwcm9maWxlSW1nIiwiZm9udFNpemUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztBQUFBLE1BQXpDQyxJQUF5QyxRQUF6Q0EsSUFBeUM7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM3RCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsTUFBTCxDQURGLEVBRUUsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFRyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQStCLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixJQUFJLElBQ0hBLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFdBQ1A7QUFDQSxZQUFDLHNEQUFEO0FBQU0saUJBQVMsRUFBRUoscUVBQU0sQ0FBQ0ssWUFBeEI7QUFBc0MsV0FBRyxFQUFFRixJQUFJLENBQUNHLFFBQUwsR0FBZ0JGLEdBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDBEQUFEO0FBQVUsaUJBQVMsRUFBRUoscUVBQU0sQ0FBQ08sUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRVAscUVBQU0sQ0FBQ1EsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0VBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNTixJQUFJLENBQUNHLFFBQVgsQ0FKRixDQURGLENBRk8sQ0FVUDs7QUFWTztBQUFBLEdBQVQsQ0FGSixDQUZGLEVBaUJHLENBQUNSLE9BQUQsSUFBWSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWpCZixDQURGO0FBcUJELENBdEJEOztLQUFNSCxVO0FBd0JOQSxVQUFVLENBQUNnQixTQUFYLEdBQXVCO0FBQ3JCZCxRQUFNLEVBQUVlLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREo7QUFFckJsQixNQUFJLEVBQUVnQixpREFBUyxDQUFDRyxLQUFWLENBQWdCRCxVQUZEO0FBR3JCaEIsYUFBVyxFQUFFYyxpREFBUyxDQUFDSSxJQUFWLENBQWVGLFVBSFA7QUFJckJmLFNBQU8sRUFBRWEsaURBQVMsQ0FBQ0ssSUFBVixDQUFlSDtBQUpILENBQXZCO0FBT2VuQix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Gb2xsb3dMaXN0Lm1vZHVsZS5zY3NzXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBkYXRhLCBoZWFkZXIsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzPntoZWFkZXJ9PC9oMz5cbiAgICAgIDxMaXN0IHN0eWxlPXt7IHBhZGRpbmc6IFwiMFwiIH19IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgLy8gPExpbmsgaHJlZj17YC91c2VyLyR7fWB9PlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW1XcmFwfSBrZXk9e2l0ZW0ubmlja25hbWUgKyBpZHh9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUltZ30+XG4gICAgICAgICAgICAgICAgICA8UGVyc29uSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLm5pY2tuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgeyFsb2FkaW5nICYmIDxCdXR0b24gb25DbGljaz17b25DbGlja01vcmV9PuuNlOuztOq4sDwvQnV0dG9uPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tNb3JlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})