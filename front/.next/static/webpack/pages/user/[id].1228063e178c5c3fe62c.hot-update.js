webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ \"./node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Home */ \"./node_modules/@material-ui/icons/Home.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Applayout.module.scss */ \"./styles/Applayout.module.scss\");\n/* harmony import */ var _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ \"./node_modules/@material-ui/icons/ExitToApp.js\");\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_15__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/components/AppLayout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar cx = classnames_bind__WEBPACK_IMPORTED_MODULE_15___default.a.bind(_styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a);\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"])(); // const [logInDone, setlogInDone] = useState(false);\n  // const classes = useStyles();\n\n  var searchChange = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setSearch(e.target.value);\n  }, [search]);\n  var searchBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(\"/hashtag/\".concat(search));\n  }, [search]);\n  var logout = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_13__[\"logoutRequestAction\"])());\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, me ? __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.menuContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wrap,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 19\n    }\n  }, \"LifeTory\"))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    component: \"form\",\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.searchInputContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.searchInputStyle,\n    style: {\n      border: \"none\"\n    },\n    placeholder: \"\\uAC80\\uC0C9\",\n    value: search,\n    onChange: searchChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      height: 20,\n      margin: \"auto\"\n    },\n    orientation: \"vertical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 19\n    }\n  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: searchBtn,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.menu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: cx(\"textLayout\", \"menuItem\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.homeIcon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 23\n    }\n  })))), __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.menuItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 19\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__[\"Avatar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 23\n    }\n  }, me.nickname[0])))), __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.menuItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: logout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_14___default.a, {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.logoutIcon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 21\n    }\n  })))))), __jsx(\"div\", {\n    className: _styles_Applayout_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.mainContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, children), __jsx(\"footer\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"https://www.github.com/6810779s\",\n    target: \"_blank\",\n    rel: \"noreferrer noopener\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 15\n    }\n  }, \"Made by eunhee\")))) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }));\n}; //xs:모바일, sm:태블릿, md:작은 데스크탑, lg:큰 데스크탑\n\n\n_s(AppLayout, \"gfoyuxC5zZ+sOkobz1RhIXH5tc8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"]];\n});\n\n_c = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/ZDczYiJdLCJuYW1lcyI6WyJjeCIsImNsYXNzTmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hCdG4iLCJSb3V0ZXIiLCJwdXNoIiwibG9nb3V0IiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImNvbnRhaW5lciIsIm1lbnVDb250YWluZXIiLCJ3cmFwIiwibG9nbyIsInNlYXJjaElucHV0Q29udGFpbmVyIiwic2VhcmNoSW5wdXRTdHlsZSIsImJvcmRlciIsImhlaWdodCIsIm1hcmdpbiIsIm1lbnUiLCJob21lSWNvbiIsIm1lbnVJdGVtIiwibmlja25hbWUiLCJsb2dvdXRJY29uIiwibWFpbkNvbnRhaW5lciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHVEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHFFQUFoQixDQUFYOztBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNsQyxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFB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Q0U7QUFDRSxRQUFJLEVBQUMsaUNBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBRkYsQ0FuREYsQ0FEQyxHQWtFRCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuRUosQ0FERjtBQXdFRCxDQTNGRCxDLENBNkZBOzs7R0E3Rk1ELFM7VUFDV0UsdUQsRUFFRVEsdUQ7OztLQUhiVixTO0FBOEZOQSxTQUFTLENBQUNvQyxTQUFWLEdBQXNCO0FBQ3BCbkMsVUFBUSxFQUFFb0MsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCO0FBSWV2Qyx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQXBwbGF5b3V0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IEV4aXRUb0FwcEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vIGNvbnN0IFtsb2dJbkRvbmUsIHNldGxvZ0luRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgc2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbc2VhcmNoXVxuICApO1xuICBjb25zdCBzZWFyY2hCdG4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNofWApO1xuICB9LCBbc2VhcmNoXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21lID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhPkxpZmVUb3J5PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBhcGVyIGNvbXBvbmVudD1cImZvcm1cIiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuqygOyDiVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDIwLCBtYXJnaW46IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2VhcmNoQnRufT5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInRleHRMYXlvdXRcIiwgXCJtZW51SXRlbVwiKX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxiciAvPu2ZiCAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+XG4gICAgICAgICAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ291dEljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5naXRodWIuY29tLzY4MTA3NzlzXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTWFkZSBieSBldW5oZWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPExvZ2luRm9ybSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8veHM666qo67CU7J28LCBzbTrtg5zruJTrpr8sIG1kOuyekeydgCDrjbDsiqTtgaztg5EsIGxnOu2BsCDrjbDsiqTtgaztg5FcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ })

})