_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var c=p[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],d=r[c]||new Set;d.has(l)?i=!1:(d.add(l),r[c]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},PGlZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=new Map,s=new WeakMap,u=0,c=void 0;function l(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(s.has(n)||(u+=1,s.set(n,u.toString())),s.get(n)):"0":e[t]);var n})).toString()}function d(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=c),"undefined"===typeof window.IntersectionObserver&&void 0!==r){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=function(e){var t=l(e),n=a.get(t);if(!n){var r,o=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(n=o.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:o},a.set(t,n)}return n}(n),s=i.id,u=i.observer,d=i.elements,p=d.get(e)||[];return d.has(e)||d.set(e,p),p.push(t),u.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(d.delete(e),u.unobserve(e)),0===d.size&&(u.disconnect(),a.delete(s))}}var p=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!==typeof e.children}var h=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),f(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var s=a.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.trackVisibility,i=e.delay,a=e.fallbackInView;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i},a)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,s=i.as,u=i.tag,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(i,p);return r.createElement(s||u||"div",o({ref:this.handleNode},c),a)},a}(r.Component);function v(e){var t=void 0===e?{}:e,n=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,s=t.root,u=t.triggerOnce,c=t.skip,l=t.initialInView,p=t.fallbackInView,f=r.useRef(),h=r.useState({inView:!!l}),v=h[0],y=h[1],g=r.useCallback((function(e){void 0!==f.current&&(f.current(),f.current=void 0),c||e&&(f.current=d(e,(function(e,t){y({inView:e,entry:t}),t.isIntersecting&&u&&f.current&&(f.current(),f.current=void 0)}),{root:s,rootMargin:a,threshold:n,trackVisibility:i,delay:o},p))}),[Array.isArray(n)?n.toString():n,s,a,u,c,i,p,o]);Object(r.useEffect)((function(){f.current||!v.entry||u||c||y({inView:!!l})}));var b=[g,v.inView,v.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},Qrvq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return M}));var r=n("ODXe"),o=n("q1tI"),i=n.n(o),a=n("nOHt"),s=n("PGlZ"),u=n("/MKj"),c=n("1zst"),l=n("HQNp"),d=n("8Kt/"),p=n.n(d),f=n("30+C"),h=n("50B7"),v=n("469l"),y=n("oa/T"),g=n("ofer"),b=n("wb2y"),m=n("R/WZ"),w=n("kduo"),k=n("VFWX"),_=i.a.createElement,O=Object(m.a)({profileWrap:{maxWidth:"500px",margin:"auto",padding:"30px"},typographyBox:{width:"55px",background:"#E6E6E6",textAlign:"center"},cardLayout:{maxWidth:"400px",margin:"20px auto"}}),M=!0;t.default=function(){var e=Object(u.b)(),t=O(),n=Object(u.c)((function(e){return e.user})).userInfo,d=Object(u.c)((function(e){return e.post})),m=d.mainPosts,M=d.hasMorePosts,C=d.loadPostLoading,I=Object(s.a)({threshold:1,triggerOnce:!0,unobserveOnEnter:!0,delay:1e3,trackVisibility:!0}),x=Object(r.a)(I,2),V=x[0],j=x[1],P=Object(a.useRouter)().query.id;return Object(o.useEffect)((function(){if(j&&!C&&M){var t,n=null===(t=m[m.length-1])||void 0===t?void 0:t.id;e({type:l.u,lastId:n,data:P})}}),[j]),_(c.a,null,n&&_(p.a,null,_("title",null,n.nickname,"\ub2d8\uc758 \uae00"),_("meta",{name:"description",content:"".concat(n.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),_("meta",{property:"og:title",content:"".concat(n.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),_("meta",{property:"og:description",content:"".concat(n.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")})),n?_(f.a,{className:t.cardLayout},_(h.a,{avatar:_(v.a,{"aria-label":"userProfile"},n.nickname[0]),title:n.nickname}),_(y.a,{style:{display:"flex",justifyContent:"space-between"}},_(g.a,{className:t.typographyBox},"\uc9f9\uc9f9",_("br",null),n.Posts),_(b.a,{style:{height:50},orientation:"vertical"}),_(g.a,{className:t.typographyBox},"\ud314\ub85c\uc6cc",_("br",null),n.Followers),_(b.a,{style:{height:50},orientation:"vertical"}),_(g.a,{className:t.typographyBox},"\ud314\ub85c\uc789",_("br",null),n.Followings))):"",m.map((function(e){var t;return _(i.a.Fragment,{key:e.id},_(w.a,{post:e}),e.id===(null===(t=m[m.length-1])||void 0===t?void 0:t.id)&&M?_("div",{ref:V},_(k.a,null)):"")})))}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),i=n("i2R6"),a=(n("qXWd"),n("48fX")),s=n("tCBg"),u=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){a(n,e);var t=c(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},hJAw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n("Qrvq")}])},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["hJAw",0,2,6,1,3,4,5,7]]]);