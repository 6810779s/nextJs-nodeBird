webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _constants_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/post */ \"./constants/post.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/UserProfile */ \"./components/UserProfile.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/eunheejang/Desktop/\\u110B\\u1173\\u11AB\\u1112\\u1174\\u1111\\u1169\\u11AF\\u1103\\u1165/programming/program/react-web/nextJs-nodeBird/front/pages/user/[id].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__[\"makeStyles\"])({\n  profileWrap: {\n    maxWidth: \"500px\",\n    margin: \"auto\",\n    padding: \"30px\"\n  },\n  typographyBox: {\n    width: \"55px\",\n    background: \"#E6E6E6\",\n    textAlign: \"center\"\n  },\n  cardLayout: {\n    maxWidth: \"400px\",\n    margin: \"20px auto\"\n  }\n});\n\nvar User = function User() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var classes = useStyles();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      userInfo = _useSelector.userInfo;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts,\n      hasMorePosts = _useSelector2.hasMorePosts,\n      loadPostLoading = _useSelector2.loadPostLoading;\n\n  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"])({\n    threshold: 1,\n    triggerOnce: true,\n    unobserveOnEnter: true,\n    delay: 1000,\n    trackVisibility: true\n  }),\n      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInView, 2),\n      ref = _useInView2[0],\n      inView = _useInView2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var id = router.query.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (inView && !loadPostLoading && hasMorePosts) {\n      var _mainPosts;\n\n      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;\n      dispatch({\n        type: _constants_post__WEBPACK_IMPORTED_MODULE_6__[\"LOAD_USER_POSTS_REQUEST\"],\n        lastId: lastId,\n        data: id\n      });\n    }\n  }, [inView]);\n  console.log(\"userInfo:\", userInfo);\n  console.log(\"mainPosts:\", mainPosts);\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, userInfo && __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, userInfo.nickname, \"\\uB2D8\\uC758 \\uAE00\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"\".concat(userInfo.nickname, \"\\uB2D8\\uC758 \\uAC8C\\uC2DC\\uAE00\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  })), userInfo ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    info: userInfo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }) : // <Card className={classes.cardLayout}>\n  //   <CardHeader\n  //     avatar={\n  //       <Avatar aria-label=\"userProfile\">{userInfo.nickname[0]}</Avatar>\n  //     }\n  //     title={userInfo.nickname}\n  //   />\n  //   <CardContent\n  //     style={{ display: \"flex\", justifyContent: \"space-between\" }}\n  //   >\n  //     <Typography className={classes.typographyBox}>\n  //       짹짹\n  //       <br />\n  //       {userInfo.Posts}\n  //     </Typography>\n  //     <Divider style={{ height: 50 }} orientation=\"vertical\" />\n  //     <Typography className={classes.typographyBox}>\n  //       팔로워\n  //       <br />\n  //       {userInfo.Followers}\n  //     </Typography>\n  //     <Divider style={{ height: 50 }} orientation=\"vertical\" />\n  //     <Typography className={classes.typographyBox}>\n  //       팔로잉\n  //       <br />\n  //       {userInfo.Followings}\n  //     </Typography>\n  //   </CardContent>\n  // </Card>\n  \"\", mainPosts.map(function (post) {\n    var _mainPosts2;\n\n    return (// <PostCard post={post} key={post.id} />\n      __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        key: post.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 9\n        }\n      }, __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        post: post,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }\n      }), post.id === ((_mainPosts2 = mainPosts[mainPosts.length - 1]) === null || _mainPosts2 === void 0 ? void 0 : _mainPosts2.id) && hasMorePosts ? __jsx(\"div\", {\n        ref: ref,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }\n      }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 15\n        }\n      })) : \"\")\n    );\n  }));\n};\n\n_s(User, \"1l6F20wfjA/66LwwzCNC/U12Vm8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"useInView\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanM/NDJiYiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicHJvZmlsZVdyYXAiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0eXBvZ3JhcGh5Qm94Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY2FyZExheW91dCIsIlVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2xhc3NlcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlckluZm8iLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RMb2FkaW5nIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwidHJpZ2dlck9uY2UiLCJ1bm9ic2VydmVPbkVudGVyIiwiZGVsYXkiLCJ0cmFja1Zpc2liaWxpdHkiLCJyZWYiLCJpblZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwibGFzdElkIiwibGVuZ3RoIiwidHlwZSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJuaWNrbmFtZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsYUFBVyxFQUFFO0FBQUVDLFlBQVEsRUFBRSxPQUFaO0FBQXFCQyxVQUFNLEVBQUUsTUFBN0I7QUFBcUNDLFdBQU8sRUFBRTtBQUE5QyxHQURjO0FBRTNCQyxlQUFhLEVBQUU7QUFBRUMsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQVUsRUFBRSxTQUE3QjtBQUF3Q0MsYUFBUyxFQUFFO0FBQW5ELEdBRlk7QUFHM0JDLFlBQVUsRUFBRTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFwREosRUFzREdFLFNBQVMsQ0FBQ3dCLEdBQVYsQ0FBYyxVQUFDekIsSUFBRDtBQUFBOztBQUFBLFdBQ2I7QUFDQSxZQUFDLDRDQUFELENBQU8sUUFBUDtBQUFnQixXQUFHLEVBQUVBLElBQUksQ0FBQ2MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNkRBQUQ7QUFBVSxZQUFJLEVBQUVkLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVHQSxJQUFJLENBQUNjLEVBQUwscUJBQVliLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDaUIsTUFBVixHQUFtQixDQUFwQixDQUFyQixnREFBWSxZQUFpQ0osRUFBN0MsS0FBbURaLFlBQW5ELEdBQ0M7QUFBSyxXQUFHLEVBQUVRLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREQsR0FLQyxFQVBKO0FBRmE7QUFBQSxHQUFkLENBdERILENBREY7QUFzRUQsQ0FsR0Q7O0dBQU1sQixJO1VBQ2FFLHVELEVBQ0RiLFMsRUFDS2UsdUQsRUFDZ0NBLHVELEVBRy9CUSxxRSxFQU9QUyxxRDs7O0tBZFhyQixJOztBQTBIU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgeyBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvcG9zdFwiO1xuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy91c2VyXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIERpdmlkZXIsXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkSGVhZGVyLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcHJvZmlsZVdyYXA6IHsgbWF4V2lkdGg6IFwiNTAwcHhcIiwgbWFyZ2luOiBcImF1dG9cIiwgcGFkZGluZzogXCIzMHB4XCIgfSxcbiAgdHlwb2dyYXBoeUJveDogeyB3aWR0aDogXCI1NXB4XCIsIGJhY2tncm91bmQ6IFwiI0U2RTZFNlwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfSxcbiAgY2FyZExheW91dDoge1xuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXG4gICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICB9LFxufSk7XG5cbmNvbnN0IFVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxuICApO1xuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDEsXG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gICAgdW5vYnNlcnZlT25FbnRlcjogdHJ1ZSxcbiAgICBkZWxheTogMTAwMCxcbiAgICB0cmFja1Zpc2liaWxpdHk6IHRydWUsXG4gIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcgJiYgIWxvYWRQb3N0TG9hZGluZyAmJiBoYXNNb3JlUG9zdHMpIHtcbiAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcbiAgICAgICAgbGFzdElkLFxuICAgICAgICBkYXRhOiBpZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2luVmlld10pO1xuICBjb25zb2xlLmxvZyhcInVzZXJJbmZvOlwiLCB1c2VySW5mbyk7XG4gIGNvbnNvbGUubG9nKFwibWFpblBvc3RzOlwiLCBtYWluUG9zdHMpO1xuICByZXR1cm4gKFxuICAgIDxBcHBMYXlvdXQ+XG4gICAgICB7dXNlckluZm8gJiYgKFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDquIA8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgICBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtzaW5nbGVQb3N0LkltYWdlc1swXT9zaW5nbGVQb3N0LkltYWdlc1swXS5zcmM6XCJodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljb25cIn0vPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL25vZGViaXJkLmNvbS91c2VyLyR7aWR9YH0vPiAqL31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKX1cbiAgICAgIHt1c2VySW5mbyA/IChcbiAgICAgICAgPFVzZXJQcm9maWxlIGluZm89e3VzZXJJbmZvfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgLy8gPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRMYXlvdXR9PlxuICAgICAgICAvLyAgIDxDYXJkSGVhZGVyXG4gICAgICAgIC8vICAgICBhdmF0YXI9e1xuICAgICAgICAvLyAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJ1c2VyUHJvZmlsZVwiPnt1c2VySW5mby5uaWNrbmFtZVswXX08L0F2YXRhcj5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cbiAgICAgICAgLy8gICAvPlxuICAgICAgICAvLyAgIDxDYXJkQ29udGVudFxuICAgICAgICAvLyAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAvLyAgID5cbiAgICAgICAgLy8gICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5Qm94fT5cbiAgICAgICAgLy8gICAgICAg7Ke57Ke5XG4gICAgICAgIC8vICAgICAgIDxiciAvPlxuICAgICAgICAvLyAgICAgICB7dXNlckluZm8uUG9zdHN9XG4gICAgICAgIC8vICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIC8vICAgICA8RGl2aWRlciBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiAvPlxuICAgICAgICAvLyAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHlCb3h9PlxuICAgICAgICAvLyAgICAgICDtjJTroZzsm4xcbiAgICAgICAgLy8gICAgICAgPGJyIC8+XG4gICAgICAgIC8vICAgICAgIHt1c2VySW5mby5Gb2xsb3dlcnN9XG4gICAgICAgIC8vICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIC8vICAgICA8RGl2aWRlciBzdHlsZT17eyBoZWlnaHQ6IDUwIH19IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiAvPlxuICAgICAgICAvLyAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHlCb3h9PlxuICAgICAgICAvLyAgICAgICDtjJTroZzsnolcbiAgICAgICAgLy8gICAgICAgPGJyIC8+XG4gICAgICAgIC8vICAgICAgIHt1c2VySW5mby5Gb2xsb3dpbmdzfVxuICAgICAgICAvLyAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAvLyAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIC8vIDwvQ2FyZD5cbiAgICAgICAgXCJcIlxuICAgICAgKX1cbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIC8vIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9IC8+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgIHtwb3N0LmlkID09PSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZCAmJiBoYXNNb3JlUG9zdHMgPyAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvQXBwTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcbiAgICB9XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUIH0pO1xuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXG4gICAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcbiAgICB9KTtcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxuICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXG4gICAgfSk7XG4gICAgYGA7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ })

})