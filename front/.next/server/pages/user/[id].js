module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "1zst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/LockOutlined"
var LockOutlined_ = __webpack_require__("IxSV");
var LockOutlined_default = /*#__PURE__*/__webpack_require__.n(LockOutlined_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__("VFWX");

// CONCATENATED MODULE: ./components/LoginForm.js
var __jsx = external_react_default.a.createElement;








const useStyles = Object(styles_["makeStyles"])({
  loginWrap: {
    margin: "auto",
    maxWidth: "500px",
    padding: "30px"
  },
  iconWrap: {
    backgroundColor: "blue"
  }
});

const LoginForm = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    logInLoading,
    logInFailure
  } = Object(external_react_redux_["useSelector"])(state => state.user); // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget); // eslint-disable-next-line no-console

    const userEmail = data.get("userEmail");
    const password = data.get("password");
    dispatch(Object(user["b" /* loginRequestAction */])({
      userEmail,
      password
    }));
  };

  Object(external_react_["useEffect"])(() => {
    if (logInFailure) {
      alert(logInFailure);
    }
  }, [logInFailure]);
  return __jsx(core_["Container"], {
    component: "main",
    className: classes.loginWrap
  }, __jsx(core_["Box"], {
    component: "form",
    onSubmit: handleSubmit,
    style: {
      margin: "auto"
    },
    sx: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, __jsx(core_["Avatar"], {
    className: classes.iconWrap
  }, __jsx(LockOutlined_default.a, null)), __jsx(core_["Typography"], {
    component: "h1",
    align: "center",
    variant: "h5"
  }, "Sign in"), __jsx(core_["TextField"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    type: "email",
    id: "userEmail",
    label: "Email Address",
    name: "userEmail",
    autoComplete: "email",
    autoFocus: true
  }), __jsx(core_["TextField"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), __jsx(core_["FormControlLabel"], {
    control: __jsx(core_["Checkbox"], {
      color: "primary"
    }),
    label: "Remember me"
  }), __jsx(core_["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      mb: 2
    }
  }, logInLoading ? __jsx(Loading["a" /* default */], null) : "Sign In"), __jsx(core_["Grid"], {
    container: true
  }, __jsx(core_["Grid"], {
    item: true,
    xs: true
  }, __jsx(link_default.a, {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), __jsx(core_["Grid"], {
    item: true
  }, __jsx(link_default.a, {
    href: "/signup",
    variant: "body2"
  }, "Don't have an account? Sign Up")))));
};

/* harmony default export */ var components_LoginForm = (LoginForm);
// EXTERNAL MODULE: external "@material-ui/icons/LockOpen"
var LockOpen_ = __webpack_require__("nqgB");
var LockOpen_default = /*#__PURE__*/__webpack_require__.n(LockOpen_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/UserProfile.js
var UserProfile_jsx = external_react_default.a.createElement;








const UserProfile_useStyles = Object(core_styles_["makeStyles"])({
  profileWrap: {
    maxWidth: "500px",
    margin: "auto",
    padding: "30px"
  },
  typographyBox: {
    width: "55px",
    background: "#E6E6E6",
    textAlign: "center"
  },
  cardLayout: {
    maxWidth: "400px",
    margin: "20px auto"
  }
});

const UserProfile = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const classes = UserProfile_useStyles();
  const {
    me,
    logOutLoading
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  return UserProfile_jsx(external_react_default.a.Fragment, null, UserProfile_jsx(core_["Card"], {
    className: classes.cardLayout
  }, UserProfile_jsx(core_["CardHeader"], {
    avatar: UserProfile_jsx(link_default.a, {
      href: `/user/${me.id}`
    }, UserProfile_jsx("a", null, UserProfile_jsx(core_["Avatar"], {
      "aria-label": "userProfile"
    }, me.nickname[0]))),
    title: me.nickname,
    subheader: UserProfile_jsx(core_["Button"], {
      onClick: Object(external_react_["useCallback"])(() => {
        dispatch(Object(user["c" /* logoutRequestAction */])()); // setIsLoggedIn(false);
      }, [])
    }, UserProfile_jsx(LockOpen_default.a, null), logOutLoading ? UserProfile_jsx(Loading["a" /* default */], null) : "Logout")
  }), UserProfile_jsx(core_["CardContent"], {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, UserProfile_jsx(core_["Typography"], {
    className: classes.typographyBox
  }, UserProfile_jsx(link_default.a, {
    href: `/user/${me.id}`
  }, UserProfile_jsx("a", null, " ", "\uC9F9\uC9F9", UserProfile_jsx("br", null), me.Posts.length, " "))), UserProfile_jsx(core_["Divider"], {
    style: {
      height: 50
    },
    orientation: "vertical"
  }), UserProfile_jsx(core_["Typography"], {
    className: classes.typographyBox
  }, UserProfile_jsx(link_default.a, {
    href: "/profile"
  }, UserProfile_jsx("a", null, "\uD314\uB85C\uC6CC", UserProfile_jsx("br", null), me.Followers.length))), UserProfile_jsx(core_["Divider"], {
    style: {
      height: 50
    },
    orientation: "vertical"
  }), UserProfile_jsx(core_["Typography"], {
    className: classes.typographyBox
  }, UserProfile_jsx(link_default.a, {
    href: "/profile"
  }, UserProfile_jsx("a", null, "\uD314\uB85C\uC789", UserProfile_jsx("br", null), me.Followings.length))))));
};

/* harmony default export */ var components_UserProfile = (UserProfile);
// EXTERNAL MODULE: external "@material-ui/icons/Person"
var Person_ = __webpack_require__("Shq7");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/AppLayout.js
var AppLayout_jsx = external_react_default.a.createElement;
















const AppLayout_useStyles = Object(core_styles_["makeStyles"])({
  wrap: {
    display: "flex",
    margin: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "1000px"
  },
  mainMenu: {
    padding: "10px 0 10px 0"
  },
  searchInputContainer: {
    display: "flex",
    height: "30px"
  },
  inputDivide: {
    height: "20px",
    margin: "3px"
  },
  loginForm: {
    margin: "auto"
  },
  textLayout: {
    textAlign: "center"
  }
});

const AppLayout = ({
  children
}) => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: search,
    1: setSearch
  } = Object(external_react_["useState"])(""); // const [logInDone, setlogInDone] = useState(false);

  const classes = AppLayout_useStyles();
  const searchChange = Object(external_react_["useCallback"])(e => {
    setSearch(e.target.value);
  }, [search]);
  const searchBtn = Object(external_react_["useCallback"])(() => {
    router_default.a.push(`/hashtag/${search}`);
  }, [search]);
  return AppLayout_jsx("div", null, AppLayout_jsx(core_["Container"], {
    className: classes.wrap
  }, AppLayout_jsx(Grid_default.a, {
    item: true,
    className: classes.textLayout
  }, AppLayout_jsx(link_default.a, {
    href: "/"
  }, AppLayout_jsx("a", null, AppLayout_jsx(Home_default.a, null), " ", AppLayout_jsx("br", null), "\uD648"))), AppLayout_jsx(Grid_default.a, {
    item: true,
    className: classes.textLayout
  }, AppLayout_jsx(link_default.a, {
    href: "/profile"
  }, AppLayout_jsx("a", null, AppLayout_jsx(Favorite_default.a, null), " ", AppLayout_jsx("br", null), "\uD504\uB85C\uD544"))), AppLayout_jsx(Grid_default.a, {
    item: true
  }, AppLayout_jsx(Paper_default.a, {
    component: "form",
    className: classes.searchInputContainer,
    sm: 3
  }, AppLayout_jsx("input", {
    style: {
      border: "none"
    },
    placeholder: "\uAC80\uC0C9",
    value: search,
    onChange: searchChange
  }), AppLayout_jsx(Divider_default.a, {
    style: {
      height: 20,
      margin: 3
    },
    orientation: "vertical"
  }), AppLayout_jsx(Button_default.a, {
    onClick: searchBtn
  }, AppLayout_jsx(Search_default.a, null)))), AppLayout_jsx(Grid_default.a, {
    item: true,
    className: classes.textLayout
  }, AppLayout_jsx(link_default.a, {
    href: "/signup"
  }, AppLayout_jsx("a", null, AppLayout_jsx(Person_default.a, null), " ", AppLayout_jsx("br", null), "\uD68C\uC6D0\uAC00\uC785")))), AppLayout_jsx(Grid_default.a, {
    container: true,
    maxwidth: "xs",
    item: true,
    justifyContent: "center",
    spacing: 3
  }, AppLayout_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 12
  }, me ? AppLayout_jsx(components_UserProfile, null) : AppLayout_jsx(components_LoginForm, null)), AppLayout_jsx(Grid_default.a, {
    item: true,
    xs: 6,
    md: 6
  }, children), AppLayout_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    md: 12
  }, AppLayout_jsx("a", {
    href: "https://www.github.com/6810779s",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Made by eunhee"))));
}; //xs:모바일, sm:태블릿, md:작은 데스크탑, lg:큰 데스크탑


/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Qrvq");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js



 // const rootReducer = combineReducers({
//   user,
//   post,
// });

/* 원래는 이렇게 들어가지만 아래와 같이 한 이유는 ,
서버사이드 렌더링을 위해 hydrate 액션이 필요해서! */
// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case "HYDRATE":
//         console.log("HYDRATE", action);
//         return {
//           ...state,
//           ...action.payload,
//         };
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

const rootReducer = (state, action) => {
  //맨위 주석단 것과 똑같은데 확장하기 위해 더 복잡하게 만들음
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["a" /* default */],
          post: post["a" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./constants/post.js
var constants_post = __webpack_require__("HQNp");

// CONCATENATED MODULE: ./sagas/post.js




function addPostAPI(data) {
  return external_axios_default.a.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: constants_post["g" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["A" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: constants_post["y" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (err) {
    console.error("err:", err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["x" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addCommentsAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComments(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentsAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["c" /* ADD_COMMENTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["a" /* ADD_COMMENTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: constants_post["p" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["n" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts/?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: constants_post["v" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["t" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
} //만약 data에 한글이 들어가서 에러나면, ${encodeURIComponent(data)}로 써줌
//decodeURIComponent를 사용하면 다시 한글로 돌아옴


function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: constants_post["m" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["k" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    console.log("result:", result.data);
    yield Object(effects_["put"])({
      type: constants_post["s" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["q" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function likeButtonAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

function* likeButton(action) {
  try {
    const result = yield Object(effects_["call"])(likeButtonAPI, action.data); //result에 postid와 userid가 들어가 있음

    yield Object(effects_["put"])({
      type: constants_post["j" /* LIKE_BUTTON_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error("likeerror", err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["h" /* LIKE_BUTTON_FAILURE */],
      error: err.response.data
    });
  }
}

function unlikeButtonAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}

function* unlikeButton(action) {
  try {
    const result = yield Object(effects_["call"])(unlikeButtonAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["G" /* UNLIKE_BUTTON_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["E" /* UNLIKE_BUTTON_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post("/post/images", data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["J" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["H" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_post["D" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_post["B" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(constants_post["e" /* ADD_POST_REQUEST */], addPost);
}

function* warchRemovePost() {
  yield Object(effects_["takeLatest"])(constants_post["z" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchAddComments() {
  yield Object(effects_["takeLatest"])(constants_post["b" /* ADD_COMMENTS_REQUEST */], addComments);
}

function* watchLoadPosts() {
  yield Object(effects_["takeLatest"])(constants_post["o" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(constants_post["u" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeLatest"])(constants_post["l" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(constants_post["r" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLikeButton() {
  yield Object(effects_["takeLatest"])(constants_post["i" /* LIKE_BUTTON_REQUEST */], likeButton);
}

function* watchUnlikeButton() {
  yield Object(effects_["takeLatest"])(constants_post["F" /* UNLIKE_BUTTON_REQUEST */], unlikeButton);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(constants_post["I" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(constants_post["C" /* RETWEET_REQUEST */], retweet);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComments), Object(effects_["fork"])(warchRemovePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLikeButton), Object(effects_["fork"])(watchUnlikeButton), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet)]);
}
// EXTERNAL MODULE: ./constants/user.js
var constants_user = __webpack_require__("yQLZ");

// CONCATENATED MODULE: ./sagas/user.js


 //takeEvery : 두번 눌렀을때 , 두개가 올라가게됨
//takeLatest: 두번 연속 눌렀을때도 마지막 액션만 올라감.
//takeLeading: 맨처음 하나만 올라감.
//throttle: 설정한 시간동안 누른 동작이 여러개면, 하나만 액션동작

function loadMyInfoAPI() {
  return external_axios_default.a.get("/user"); //baseURL = "http://localhost:3065";
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: constants_user["o" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["m" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserInfoAPI(data) {
  return external_axios_default.a.get(`/user/${data}`); //baseURL = "http://localhost:3065";
}

function* loadUserInfo(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserInfoAPI, action.data);
    console.log(action.data);
    yield Object(effects_["put"])({
      type: constants_user["r" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error("error", err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["p" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return external_axios_default.a.get("/user/followers", data); //baseURL = "http://localhost:3065";
}

function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["i" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["g" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowingsPI(data) {
  return external_axios_default.a.get("/user/followings", data); //baseURL = "http://localhost:3065";
}

function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["l" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["j" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return external_axios_default.a.post("/user/login", data); //baseURL = "http://localhost:3065";
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["u" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["s" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: constants_user["x" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    console.error("err:", err);
    yield Object(effects_["put"])({
      //put은 액션 dispatch와 비슷한것
      type: constants_user["v" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
} //proxy, cors를 피해가는 방법중 하나. 브라우저=>프론트=>백엔드=>프론트=>브라우저


function signUpAPI(data) {
  return external_axios_default.a.post("/user", data);
}

function* signUp(action) {
  try {
    yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["A" /* SIGN_UP_SUCCESS */]
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: constants_user["y" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function followingAPI(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`);
}

function* following(action) {
  try {
    const result = yield Object(effects_["call"])(followingAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["f" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: constants_user["d" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function unfollowingAPI(data) {
  return external_axios_default.a.delete(`/user/${data}/follow`);
}

function* unfollowing(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowingAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["D" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: constants_user["B" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return external_axios_default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: constants_user["c" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: constants_user["a" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(constants_user["t" /* LOG_IN_REQUEST */], logIn); // 위에 반복문 쓴것과 똑같이 작동
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(constants_user["w" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(constants_user["z" /* SIGN_UP_REQUEST */], signUp);
}

function* watchFollowing() {
  yield Object(effects_["takeLatest"])(constants_user["e" /* FOLLOW_REQUEST */], following);
}

function* watchUnfollowing() {
  yield Object(effects_["takeLatest"])(constants_user["C" /* UNFOLLOW_REQUEST */], unfollowing);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(constants_user["n" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchLoadUserInfo() {
  yield Object(effects_["takeLatest"])(constants_user["q" /* LOAD_USER_REQUEST */], loadUserInfo);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(constants_user["b" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(constants_user["h" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(constants_user["k" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollowing), Object(effects_["fork"])(watchUnfollowing), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUserInfo), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchChangeNickname)]);
}
// CONCATENATED MODULE: ./sagas/index.js



 //중복된 주소 줄이기

external_axios_default.a.defaults.baseURL = "http://localhost:3065";
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js



 // import thunkMiddleware from 'redux-thunk';




const loggerMidleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  next(action);
  return;
}; //action 실행전 콘솔로그를 찍어주는 미들웨어


const configureStore = () => {
  // const store = createStore(rootReducer, composeWithDevTools());
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMidleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) //배포용
  : undefined; //개발용

  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "HQNp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_BUTTON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIKE_BUTTON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_BUTTON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_BUTTON_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_BUTTON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNLIKE_BUTTON_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_IMAGE; });
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const ADD_COMMENTS_REQUEST = "ADD_COMMENTS_REQUEST";
const ADD_COMMENTS_SUCCESS = "ADD_COMMENTS_SUCCESS";
const ADD_COMMENTS_FAILURE = "ADD_COMMENTS_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const LIKE_BUTTON_REQUEST = "LIKE_BUTTON_REQUEST";
const LIKE_BUTTON_SUCCESS = "LIKE_BUTTON_SUCCESS";
const LIKE_BUTTON_FAILURE = "LIKE_BUTTON_FAILURE";
const UNLIKE_BUTTON_REQUEST = "UNLIKE_BUTTON_REQUEST";
const UNLIKE_BUTTON_SUCCESS = "UNLIKE_BUTTON_SUCCESS";
const UNLIKE_BUTTON_FAILURE = "UNLIKE_BUTTON_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";

/***/ }),

/***/ "IxSV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signUpRequestAction; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yQLZ");
/* harmony import */ var _constants_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HQNp");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  loadMyInfoLoading: false,
  //유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoFailure: null,
  loadUserLoading: false,
  //유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserFailure: null,
  logInLoading: false,
  //로그인 시도중
  logInDone: false,
  logInFailure: null,
  logOutLoading: false,
  //로그아웃 시도중
  logOutdone: false,
  logOutFailure: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameFailure: null,
  followingLoading: false,
  followingDone: false,
  followingFailure: null,
  unfollowingLoading: false,
  unfollowingDone: false,
  unfollowingFailure: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersFailure: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsFailure: null,
  me: null,
  userInfo: null,
  signUpData: {},
  loginData: {}
};
const loginRequestAction = data => {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_IN_REQUEST */ "t"],
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_OUT_REQUEST */ "w"]
  };
};
const signUpRequestAction = data => {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SIGN_UP_REQUEST */ "z"],
    data
  };
};

const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_2___default()(state, draft => {
    switch (action.type) {
      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_MY_INFO_REQUEST */ "n"]:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoFailure = null;
        draft.loadMyInfoDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_MY_INFO_SUCCESS */ "o"]:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_MY_INFO_FAILURE */ "m"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_REQUEST */ "q"]:
        draft.loadUserLoading = true;
        draft.loadUserFailure = null;
        draft.loadUserDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_SUCCESS */ "r"]:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_FAILURE */ "p"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWERS_REQUEST */ "h"]:
        draft.loadFollowersLoading = true;
        draft.loadFollowersFailure = null;
        draft.loadFollowersDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWERS_SUCCESS */ "i"]:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWERS_FAILURE */ "g"]:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = false;
        draft.loadFollowersFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWINGS_REQUEST */ "k"]:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsFailure = null;
        draft.loadFollowingsDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWINGS_SUCCESS */ "l"]:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_FOLLOWINGS_FAILURE */ "j"]:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* FOLLOW_REQUEST */ "e"]:
        draft.followingLoading = true;
        draft.followingFailure = null;
        draft.followingDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* FOLLOW_SUCCESS */ "f"]:
        draft.followingLoading = false;
        draft.followingDone = true;
        draft.me.Followings.push({
          id: action.data.UserId,
          nickname: action.data.nickname
        });
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* FOLLOW_FAILURE */ "d"]:
        draft.followingLoading = false;
        draft.followingDone = false;
        draft.followingFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNFOLLOW_REQUEST */ "C"]:
        draft.unfollowingLoading = true;
        draft.unfollowingFailure = null;
        draft.unfollowingDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNFOLLOW_SUCCESS */ "D"]:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNFOLLOW_FAILURE */ "B"]:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = false;
        draft.logInFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_IN_REQUEST */ "t"]:
        draft.logInLoading = true;
        draft.logInFailure = null;
        draft.logInDone = false;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_IN_SUCCESS */ "u"]:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_IN_FAILURE */ "s"]:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_OUT_REQUEST */ "w"]:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutFailure = null;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_OUT_SUCCESS */ "x"]:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* LOG_OUT_FAILURE */ "v"]:
        draft.logOutLoading = false;
        draft.logOutFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SIGN_UP_REQUEST */ "z"]:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpFailure = null;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SIGN_UP_SUCCESS */ "A"]:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SIGN_UP_FAILURE */ "y"]:
        draft.signUpLoading = false;
        draft.signUpFailure = action.error;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_NICKNAME_REQUEST */ "b"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameFailure = null;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_NICKNAME_SUCCESS */ "c"]:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_NICKNAME_FAILURE */ "a"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_1__[/* ADD_POST_TO_ME */ "g"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_1__[/* REMOVE_POST_OF_ME */ "y"]:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qrvq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p1tF");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1zst");
/* harmony import */ var _constants_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HQNp");
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yQLZ");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AQn3");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("kduo");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("VFWX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])({
  profileWrap: {
    maxWidth: "500px",
    margin: "auto",
    padding: "30px"
  },
  typographyBox: {
    width: "55px",
    background: "#E6E6E6",
    textAlign: "center"
  },
  cardLayout: {
    maxWidth: "400px",
    margin: "20px auto"
  }
});

const User = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const classes = useStyles();
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const [ref, inView] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    threshold: 1,
    triggerOnce: true,
    unobserveOnEnter: true,
    delay: 1000,
    trackVisibility: true
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (inView && !loadPostLoading && hasMorePosts) {
      var _mainPosts;

      const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch({
        type: _constants_post__WEBPACK_IMPORTED_MODULE_5__[/* LOAD_USER_POSTS_REQUEST */ "u"],
        lastId,
        data: id
      });
    }
  }, [inView]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, userInfo && __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, userInfo.nickname, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: `${userInfo.nickname}님의 게시글`
  }), __jsx("meta", {
    property: "og:title",
    content: `${userInfo.nickname}님의 게시글`
  }), __jsx("meta", {
    property: "og:description",
    content: `${userInfo.nickname}님의 게시글`
  })), userInfo ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Card"], {
    className: classes.cardLayout
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
    avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
      "aria-label": "userProfile"
    }, userInfo.nickname[0]),
    title: userInfo.nickname
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["CardContent"], {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    className: classes.typographyBox
  }, "\uC9F9\uC9F9", __jsx("br", null), userInfo.Posts), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
    style: {
      height: 50
    },
    orientation: "vertical"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    className: classes.typographyBox
  }, "\uD314\uB85C\uC6CC", __jsx("br", null), userInfo.Followers), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
    style: {
      height: 50
    },
    orientation: "vertical"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    className: classes.typographyBox
  }, "\uD314\uB85C\uC789", __jsx("br", null), userInfo.Followings))) : "", mainPosts.map(post => {
    var _mainPosts2;

    return (// <PostCard post={post} key={post.id} />
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: post.id
      }, __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        post: post
      }), post.id === ((_mainPosts2 = mainPosts[mainPosts.length - 1]) === null || _mainPosts2 === void 0 ? void 0 : _mainPosts2.id) && hasMorePosts ? __jsx("div", {
        ref: ref
      }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null)) : "")
    );
  }));
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _constants_user__WEBPACK_IMPORTED_MODULE_6__[/* LOAD_MY_INFO_REQUEST */ "n"]
  });
  context.store.dispatch({
    type: _constants_post__WEBPACK_IMPORTED_MODULE_5__[/* LOAD_USER_POSTS_REQUEST */ "u"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _constants_user__WEBPACK_IMPORTED_MODULE_6__[/* LOAD_USER_REQUEST */ "q"],
    data: context.params.id
  });
  ``;
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_9__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "Shq7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "VFWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Loading = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1___default.a, null));
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XfbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "aaof":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Textsms");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g6aM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Repeat");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "kduo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/icons/Repeat"
var Repeat_ = __webpack_require__("g6aM");
var Repeat_default = /*#__PURE__*/__webpack_require__.n(Repeat_);

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/icons/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__("pa2r");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@material-ui/icons/Textsms"
var Textsms_ = __webpack_require__("aaof");
var Textsms_default = /*#__PURE__*/__webpack_require__.n(Textsms_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_ = __webpack_require__("rYcJ");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./components/imagesZoom/styles.js

const Global = Object(external_styled_components_["createGlobalStyle"])([".slick-slide{display:inline-block;text-align:center;}"]);
// CONCATENATED MODULE: ./components/imagesZoom/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(external_react_["useState"])(0);
  const settings = {
    initiaSlide: 0,
    afterChange: slide => setCurrentSlide(slide),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return __jsx("div", {
    style: {
      position: "fixed",
      zIndex: 5000,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  }, __jsx(Global, null), __jsx("header", {
    style: {
      position: "relative",
      background: "white",
      height: "44px",
      padding: "0",
      textAlign: "center"
    }
  }, __jsx("h1", null, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      padding: "15px",
      lineHeight: "14px",
      cursor: "pointer"
    },
    onClick: onClose
  }, "X")), __jsx("div", null, __jsx("div", {
    style: {
      height: "700px",
      position: "relative"
    }
  }, __jsx(external_react_slick_default.a, _extends({
    style: {
      height: "700px",
      background: "#090909"
    }
  }, settings), images.map((image, idx) => __jsx("div", {
    style: {
      padding: "32px",
      textAlign: "center"
    },
    key: image.alt + `${idx}`
  }, __jsx("img", {
    style: {
      margin: "0 auto",
      maxHeight: "700px"
    },
    src: `http://localhost:3065/${image.src}`,
    alt: image.alt
  })))), __jsx("div", {
    style: {
      position: "absolute",
      padding: "7px 30px",
      textAlign: "center",
      bottom: 0,
      zIndex: 30000,
      borderRadius: "20px",
      background: "#313131",
      color: "white"
    }
  }, currentSlide + 1, "/", images.length))));
};

/* harmony default export */ var imagesZoom = (ImagesZoom);
// CONCATENATED MODULE: ./components/PostImages.js
var PostImages_jsx = external_react_default.a.createElement;




const PostImages = ({
  images
}) => {
  const {
    0: showImageszoom,
    1: setShowImageszoom
  } = Object(external_react_["useState"])(false);
  const onZoom = Object(external_react_["useCallback"])(() => {
    setShowImageszoom(true);
  }, []);
  const onClose = Object(external_react_["useCallback"])(() => {
    setShowImageszoom(false);
  });

  if (images.length === 1) {
    return PostImages_jsx(external_react_default.a.Fragment, null, PostImages_jsx("img", {
      role: "presentation",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom
    }), showImageszoom && PostImages_jsx(imagesZoom, {
      images: images,
      onClose: onClose
    }));
  } else if (images.length === 2) {
    return PostImages_jsx(external_react_default.a.Fragment, null, " ", PostImages_jsx("img", {
      role: "presentation",
      width: "50%",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom
    }), PostImages_jsx("img", {
      role: "presentation",
      width: "50%",
      src: `http://localhost:3065/${images[1].src}`,
      alt: images[1].src,
      onClick: onZoom
    }), showImageszoom && PostImages_jsx(imagesZoom, {
      images: images,
      onClose: onClose
    }));
  }

  return PostImages_jsx(external_react_default.a.Fragment, null, PostImages_jsx("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, PostImages_jsx("img", {
    role: "presentation",
    width: "50%",
    src: `http://localhost:3065/${images[0].src}`,
    alt: images[0].src,
    onClick: onZoom
  }), PostImages_jsx("div", {
    role: "presentation",
    style: {
      width: "50%",
      textAlign: "center"
    },
    onClick: onZoom
  }, PostImages_jsx(Add_default.a, {
    style: {
      fontSize: "50px",
      cursor: "pointer"
    }
  }), PostImages_jsx("br", null), images.length - 1, " \uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImageszoom && PostImages_jsx(imagesZoom, {
    images: images,
    onClose: onClose
  }));
};

/* harmony default export */ var components_PostImages = (PostImages);
// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__("XfbO");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: ./constants/post.js
var constants_post = __webpack_require__("HQNp");

// CONCATENATED MODULE: ./components/CommentForm.js
var CommentForm_jsx = external_react_default.a.createElement;





const CommentForm = ({
  post
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: comment,
    1: setComment
  } = Object(external_react_["useState"])("");
  const commentText = Object(external_react_["useRef"])(null);
  const id = Object(external_react_redux_["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentsDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  Object(external_react_["useEffect"])(() => {
    if (addCommentsDone) {
      setComment("");
    }
  }, [addCommentsDone]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("commentInput")) {
      dispatch({
        type: constants_post["b" /* ADD_COMMENTS_REQUEST */],
        data: {
          content: data.get("commentInput"),
          postId: post.id,
          userId: id
        }
      });
    }
  };

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  return CommentForm_jsx(external_react_default.a.Fragment, null, CommentForm_jsx(core_["Box"], {
    component: "form",
    noValidate: true,
    onSubmit: handleSubmit,
    style: {
      display: "flex",
      marginTop: "20px"
    }
  }, CommentForm_jsx(core_["Input"], {
    style: {
      flex: 1
    },
    id: "commentInput",
    name: "commentInput",
    value: comment,
    onChange: onChangeComment,
    placeholder: "\uB313\uAE00 \uB2EC\uAE30...",
    type: "text",
    ref: commentText
  }), CommentForm_jsx(core_["Button"], {
    type: "submit",
    variant: "contained",
    style: {
      height: "30px"
    }
  }, "\uAC8C\uC2DC")));
};

/* harmony default export */ var components_CommentForm = (CommentForm);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/PostCardContent.js
var PostCardContent_jsx = external_react_default.a.createElement;



const PostCardContent = ({
  postData
}) => {
  return PostCardContent_jsx("div", null, postData.toString().split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return PostCardContent_jsx(link_default.a, {
        href: `/hashtag/${v.slice(1)}`,
        key: i
      }, PostCardContent_jsx("a", {
        style: {
          color: "#A3BFDF"
        }
      }, v));
    }

    return v;
  }));
};

/* harmony default export */ var components_PostCardContent = (PostCardContent);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__("VFWX");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./constants/user.js
var user = __webpack_require__("yQLZ");

// CONCATENATED MODULE: ./components/FollowButton.js
var FollowButton_jsx = external_react_default.a.createElement;






const FollowButton = ({
  post
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    followingLoading,
    unfollowingLoading,
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const followButtonClick = Object(external_react_["useCallback"])(() => {
    if (!isFollowing) {
      dispatch({
        type: user["e" /* FOLLOW_REQUEST */],
        data: post.User.id
      });
    } else {
      dispatch({
        type: user["C" /* UNFOLLOW_REQUEST */],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (me.id === post.User.id) {
    return null;
  }

  return FollowButton_jsx(Button_default.a, {
    onClick: followButtonClick
  }, followingLoading || unfollowingLoading ? FollowButton_jsx(Loading["a" /* default */], null) : isFollowing ? "언팔로우" : "팔로우");
};

/* harmony default export */ var components_FollowButton = (FollowButton);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/PostCard.js
var PostCard_jsx = external_react_default.a.createElement;

















external_moment_default.a.locale("ko");

const PostCard = ({
  post
}) => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    removePostLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const open = Boolean(anchorEl);
  const id = me === null || me === void 0 ? void 0 : me.id; // 이문법과 같음 me && me.id

  const UIid = open ? "simple-popover" : undefined;
  const {
    0: comment,
    1: setComment
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onToggleComment = () => {
    setComment(prev => !prev);
  };

  const onRemovePost = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    return dispatch({
      type: constants_post["z" /* REMOVE_POST_REQUEST */],
      data: post.id
    });
  }, [id]);
  const onUnlike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    return dispatch({
      type: constants_post["F" /* UNLIKE_BUTTON_REQUEST */],
      data: post.id
    });
  }, [id]);
  const onLike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    return dispatch({
      type: constants_post["i" /* LIKE_BUTTON_REQUEST */],
      data: post.id
    });
  }, [id]);
  const OnRetweet = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    return dispatch({
      type: constants_post["C" /* RETWEET_REQUEST */],
      data: post.id
    });
  }, [id]);
  const liked = post.Likers.find(v => v.id === id);
  return PostCard_jsx("div", {
    style: {
      marginBottom: 30
    }
  }, PostCard_jsx(core_["Card"], null, PostCard_jsx("div", {
    style: {
      float: "right"
    }
  }, external_moment_default()(post.createdAt).fromNow()), PostCard_jsx(core_["CardHeader"], {
    avatar: PostCard_jsx(link_default.a, {
      href: `/user/${post.User.id}`
    }, PostCard_jsx("a", null, PostCard_jsx(core_["Avatar"], {
      "aria-label": "userImg"
    }, post.User.nickname[0]))),
    title: PostCard_jsx(link_default.a, {
      href: `/user/${post.User.id}`
    }, PostCard_jsx("a", null, post.User.nickname)),
    action: PostCard_jsx(core_["IconButton"], {
      "aria-label": "more",
      "aria-describedby": UIid,
      variant: "contained",
      color: "primary",
      onClick: handleClick
    }, PostCard_jsx(MoreHoriz_default.a, null)),
    subheader: me && PostCard_jsx(components_FollowButton, {
      post: post
    })
  }), PostCard_jsx(core_["CardMedia"], {
    style: {
      margin: "auto"
    }
  }, post.Images[0] && PostCard_jsx(components_PostImages, {
    images: post.Images
  })), post.RetweetId && post.Retweet ? PostCard_jsx(core_["Card"], null, PostCard_jsx("div", {
    style: {
      float: "right"
    }
  }, external_moment_default()(post.createdAt).format("YYYY.MM.DD")), PostCard_jsx(core_["CardHeader"], {
    avatar: PostCard_jsx(link_default.a, {
      href: `/user/${post.User.id}`
    }, PostCard_jsx("a", null, PostCard_jsx(core_["Avatar"], {
      "aria-label": "userImg"
    }, post.Retweet.User.nickname[0]))),
    title: post.Retweet.User.nickname
  }), PostCard_jsx(core_["CardMedia"], {
    style: {
      margin: "auto"
    }
  }, post.Retweet.Images[0] && PostCard_jsx(components_PostImages, {
    images: post.Retweet.Images
  })), PostCard_jsx(core_["CardContent"], null, PostCard_jsx(components_PostCardContent, {
    postData: post.Retweet.content
  }))) : PostCard_jsx(core_["CardContent"], null, PostCard_jsx(components_PostCardContent, {
    postData: post.content
  })), PostCard_jsx(core_["CardActions"], {
    disableSpacing: true
  }, PostCard_jsx(core_["IconButton"], {
    "aria-label": "retweet",
    onClick: OnRetweet
  }, PostCard_jsx(Repeat_default.a, null)), liked ? PostCard_jsx(core_["IconButton"], {
    "aria-label": "add to favorite",
    onClick: onUnlike
  }, PostCard_jsx(Favorite_default.a, {
    style: {
      color: "red"
    }
  })) : PostCard_jsx(core_["IconButton"], {
    "aria-label": "add to favorite",
    onClick: onLike
  }, PostCard_jsx(FavoriteBorder_default.a, null)), PostCard_jsx(core_["IconButton"], {
    "aria-label": "comment",
    onClick: onToggleComment
  }, PostCard_jsx(Textsms_default.a, null))), PostCard_jsx(core_["Popover"], {
    id: UIid,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, PostCard_jsx(core_["ButtonGroup"], null, id && post.User.id === id ? PostCard_jsx(external_react_default.a.Fragment, null, PostCard_jsx(core_["Button"], null, "\uC218\uC815"), PostCard_jsx(core_["Button"], {
    onClick: onRemovePost
  }, removePostLoading ? PostCard_jsx(Loading["a" /* default */], null) : "삭제")) : PostCard_jsx(core_["Button"], null, "\uC2E0\uACE0")))), comment && PostCard_jsx("div", null, PostCard_jsx(components_CommentForm, {
    post: post
  }), PostCard_jsx(core_["List"], {
    subheader: PostCard_jsx(ListSubheader_default.a, null, post.Comments.length, "\uAC1C\uC758 \uB313\uAE00")
  }, post.Comments.map(data => PostCard_jsx(core_["ListItem"], null, PostCard_jsx(core_["ListItemAvatar"], null, PostCard_jsx(link_default.a, {
    href: `/user/${data.User.id}`
  }, PostCard_jsx("a", null, PostCard_jsx(core_["Avatar"], null, data.User.nickname[0])))), PostCard_jsx(core_["ListItemText"], {
    primary: data.User.nickname,
    secondary: PostCard_jsx(external_react_default.a.Fragment, null, PostCard_jsx(core_["Typography"], {
      component: "span",
      variant: "body2",
      color: "textPrimary"
    }, data.content))
  }))))));
};

/* harmony default export */ var components_PostCard = __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nqgB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOpen");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export addPost */
/* unused harmony export addComments */
/* harmony import */ var _constants_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HQNp");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
// import shortId from "shortid";

 // import faker from "faker";

const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostFailure: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsFailure: null,
  addPostLoading: false,
  addPostDone: false,
  addPostFailure: null,
  removePostLoading: false,
  removePostDone: false,
  removePostFailure: null,
  addCommentsLoading: false,
  addCommentsDone: false,
  addCommentsFailure: null,
  likeButtonLoading: false,
  likeButtonDone: false,
  likeButtonFailure: null,
  unlikeButtonLoading: false,
  unlikeButtonDone: false,
  unlikeButtonFailure: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesFailure: null,
  retweetLoading: false,
  retweetDone: false,
  retweetFailure: null
}; // export const generateDummyPost = (number) =>
//   Array(number)
//     .fill()
//     .map(() => ({
//       id: shortId.generate(),
//       User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//       },
//       content: faker.lorem.paragraph(),
//       Images: [{ src: "https://picsum.photos/200/300" }],
//       Comments: [
//         {
//           id: shortId.generate(),
//           User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//           },
//           content: faker.lorem.sentence(),
//         },
//       ],
//     }));

const addPost = data => {
  return {
    type: _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_POST_REQUEST */ "e"],
    data
  };
};
const addComments = data => {
  return {
    type: _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_COMMENTS_REQUEST */ "b"],
    data
  };
};

const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_IMAGE */ "w"]:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* RETWEET_REQUEST */ "C"]:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* RETWEET_SUCCESS */ "D"]:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* RETWEET_FAILURE */ "B"]:
        draft.retweetLoading = false;
        draft.retweetFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UPLOAD_IMAGES_REQUEST */ "I"]:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UPLOAD_IMAGES_SUCCESS */ "J"]:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UPLOAD_IMAGES_FAILURE */ "H"]:
        draft.uploadImagesLoading = false;
        draft.uploadImagesFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LIKE_BUTTON_REQUEST */ "i"]:
        draft.likeButtonLoading = true;
        draft.likeButtonDone = false;
        draft.likeButtonFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LIKE_BUTTON_SUCCESS */ "j"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likeButtonLoading = false;
          draft.likeButtonDone = true;
          break;
        }

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LIKE_BUTTON_FAILURE */ "h"]:
        draft.likeButtonLoading = false;
        draft.likeButtonFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UNLIKE_BUTTON_REQUEST */ "F"]:
        draft.unlikeButtonLoading = true;
        draft.unlikeButtonDone = false;
        draft.unlikeButtonFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UNLIKE_BUTTON_SUCCESS */ "G"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikeButtonLoading = false;
          draft.unlikeButtonDone = true;
          break;
        }

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* UNLIKE_BUTTON_FAILURE */ "E"]:
        draft.unlikeButtonLoading = false;
        draft.unlikeButtonFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POST_REQUEST */ "r"]:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POST_SUCCESS */ "s"]:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POST_FAILURE */ "q"]:
        draft.loadPostLoading = false;
        draft.loadPostFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_HASHTAG_POSTS_REQUEST */ "l"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_POSTS_REQUEST */ "u"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POSTS_REQUEST */ "o"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_HASHTAG_POSTS_SUCCESS */ "m"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_POSTS_SUCCESS */ "v"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POSTS_SUCCESS */ "p"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = action.data.length === 10;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_HASHTAG_POSTS_FAILURE */ "k"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_USER_POSTS_FAILURE */ "t"]:
      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* LOAD_POSTS_FAILURE */ "n"]:
        draft.loadPostsLoading = false;
        draft.loadPostsFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_POST_REQUEST */ "e"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_POST_SUCCESS */ "f"]:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_POST_FAILURE */ "d"]:
        draft.addPostLoading = false;
        draft.addPostFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_COMMENTS_REQUEST */ "b"]:
        draft.addCommentsLoading = true;
        draft.addCommentsDone = false;
        draft.addCommentsFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_COMMENTS_SUCCESS */ "c"]:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentsLoading = false;
        draft.addCommentsDone = true;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* ADD_COMMENTS_FAILURE */ "a"]:
        draft.addCommentsLoading = false;
        draft.addCommentsFailure = action.error;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_POST_REQUEST */ "z"]:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostFailure = null;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_POST_SUCCESS */ "A"]:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case _constants_post__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_POST_FAILURE */ "x"]:
        draft.removePostLoadin = false;
        draft.removePostFailure = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "pa2r":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rYcJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yQLZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWINGS_FAILURE; });
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });