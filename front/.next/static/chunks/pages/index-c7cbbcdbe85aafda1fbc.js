_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{PGlZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=new Map,s=new WeakMap,l=0,u=void 0;function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(s.has(n)||(l+=1,s.set(n,l.toString())),s.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n,o){if(void 0===n&&(n={}),void 0===o&&(o=u),"undefined"===typeof window.IntersectionObserver&&void 0!==o){var a=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=function(e){var t=d(e),n=r.get(t);if(!n){var o,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&o.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(n=a.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:a},r.set(t,n)}return n}(n),s=i.id,l=i.observer,c=i.elements,f=c.get(e)||[];return c.has(e)||c.set(e,f),f.push(t),l.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(c.delete(e),l.unobserve(e)),0===c.size&&(l.disconnect(),r.delete(s))}}var f=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!==typeof e.children}var g=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),p(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var s=r.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,o=e.rootMargin,a=e.trackVisibility,i=e.delay,r=e.fallbackInView;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:o,trackVisibility:a,delay:i},r)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,r=i.children,s=i.as,l=i.tag,u=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(i,f);return o.createElement(s||l||"div",a({ref:this.handleNode},u),r)},r}(o.Component);function h(e){var t=void 0===e?{}:e,n=t.threshold,a=t.delay,i=t.trackVisibility,r=t.rootMargin,s=t.root,l=t.triggerOnce,u=t.skip,d=t.initialInView,f=t.fallbackInView,p=o.useRef(),g=o.useState({inView:!!d}),h=g[0],b=g[1],m=o.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),u||e&&(p.current=c(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&l&&p.current&&(p.current(),p.current=void 0)}),{root:s,rootMargin:r,threshold:n,trackVisibility:i,delay:a},f))}),[Array.isArray(n)?n.toString():n,s,r,l,u,i,f,a]);Object(o.useEffect)((function(){p.current||!h.entry||l||u||b({inView:!!d})}));var v=[m,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}g.displayName="InView",g.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return v}));var o=n("ODXe"),a=n("q1tI"),i=n.n(a),r=n("/MKj"),s=n("1zst"),l=n("VFWX"),u=n("kduo"),d=n("hlFM"),c=n("g3U7"),f=n("Z3vd"),p=n("HQNp"),g=(n("p+NB"),i.a.createElement),h=function(){var e=Object(r.b)(),t=Object(a.useState)(""),n=t[0],o=t[1],i=Object(a.useCallback)((function(e){o(e.target.value)}),[]),s=Object(r.c)((function(e){return e.post})),l=s.imagePaths,u=s.addPostDone;Object(a.useEffect)((function(){u&&o("")}),[u]);var h=Object(a.useRef)(),b=Object(a.useCallback)((function(t){var n=new FormData;[].forEach.call(t.target.files,(function(e){n.append("image",e)})),e({type:p.I,data:n})})),m=Object(a.useCallback)((function(){h.current.click()}),[h.current]),v=Object(a.useCallback)((function(t){return function(){e({type:p.w,data:t})}}));return g(d.a,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget),o=n.get("dailyText"),a=new FormData;if(l.forEach((function(e){a.append("image",e)})),a.append("content",o),""!==n.get("dailyText"))return e({type:p.e,data:a})}},g(c.a,{name:"dailyText",id:"dailyText","aria-label":"minimum height",value:n,onChange:i,minRows:5,placeholder:"\uc5b4\ub5a4 \uc2e0\uae30\ud55c \uc77c\uc774 \uc788\uc5c8\ub098\uc694?",autoFocus:!0,style:{width:"100%"}}),g("div",null,g("input",{type:"file",ref:h,name:"image",multiple:!0,hidden:!0,onChange:b}),g(f.a,{onClick:m,variant:"contained"},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc")),g(f.a,{type:"submit",fullWidth:!0,variant:"contained",style:{marginTop:"10px"}},"\uc9f9\uc9f9"),g("div",null,l.map((function(e,t){return g("div",{key:e,style:{display:"inline-block"}},g("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),g("div",null,g(f.a,{onClick:v(t)},"\uc81c\uac70")))}))))},b=n("PGlZ"),m=i.a.createElement,v=!0;t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.user})).me,n=Object(r.c)((function(e){return e.post})),d=n.mainPosts,c=n.hasMorePosts,f=n.loadPostLoading,g=n.retweetFailure,v=Object(b.a)({threshold:1,triggerOnce:!0,unobserveOnEnter:!0,delay:1e3,trackVisibility:!0}),k=Object(o.a)(v,2),P=k[0],y=k[1];return Object(a.useEffect)((function(){g&&alert(g)}),[g]),Object(a.useEffect)((function(){if(y&&!f&&c){var t,n=null===(t=d[d.length-1])||void 0===t?void 0:t.id;e({type:p.o,lastId:n})}}),[y]),m(s.a,null,t&&m(h,null),d.map((function(e){var t;return m(i.a.Fragment,{key:e.id},m(u.a,{post:e}),e.id===(null===(t=d[d.length-1])||void 0===t?void 0:t.id)&&c?m("div",{ref:P},m(l.a,null)):"")})))}},"p+NB":function(e,t,n){"use strict";var o=n("HQNp"),a=n("rfrl"),i={mainPosts:[],singlePost:null,imagePaths:[],hasMorePosts:!0,loadPostLoading:!1,loadPostDone:!1,loadPostFailure:null,loadPostsLoading:!1,loadPostsDone:!1,loadPostsFailure:null,addPostLoading:!1,addPostDone:!1,addPostFailure:null,removePostLoading:!1,removePostDone:!1,removePostFailure:null,addCommentsLoading:!1,addCommentsDone:!1,addCommentsFailure:null,likeButtonLoading:!1,likeButtonDone:!1,likeButtonFailure:null,unlikeButtonLoading:!1,unlikeButtonDone:!1,unlikeButtonFailure:null,uploadImagesLoading:!1,uploadImagesDone:!1,uploadImagesFailure:null,retweetLoading:!1,retweetDone:!1,retweetFailure:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,(function(e){switch(t.type){case o.w:e.imagePaths=e.imagePaths.filter((function(e,n){return n!==t.data}));break;case o.C:e.retweetLoading=!0,e.retweetDone=!1,e.retweetFailure=null;break;case o.D:e.retweetLoading=!1,e.retweetDone=!0,e.mainPosts.unshift(t.data);break;case o.B:e.retweetLoading=!1,e.retweetFailure=t.error;break;case o.I:e.uploadImagesLoading=!0,e.uploadImagesDone=!1,e.uploadImagesFailure=null;break;case o.J:e.imagePaths=t.data,e.uploadImagesLoading=!1,e.uploadImagesDone=!0;break;case o.H:e.uploadImagesLoading=!1,e.uploadImagesFailure=t.error;break;case o.i:e.likeButtonLoading=!0,e.likeButtonDone=!1,e.likeButtonFailure=null;break;case o.j:e.mainPosts.find((function(e){return e.id===t.data.PostId})).Likers.push({id:t.data.UserId}),e.likeButtonLoading=!1,e.likeButtonDone=!0;break;case o.h:e.likeButtonLoading=!1,e.likeButtonFailure=t.error;break;case o.F:e.unlikeButtonLoading=!0,e.unlikeButtonDone=!1,e.unlikeButtonFailure=null;break;case o.G:var n=e.mainPosts.find((function(e){return e.id===t.data.PostId}));n.Likers=n.Likers.filter((function(e){return e.id!==t.data.UserId})),e.unlikeButtonLoading=!1,e.unlikeButtonDone=!0;break;case o.E:e.unlikeButtonLoading=!1,e.unlikeButtonFailure=t.error;break;case o.r:e.loadPostLoading=!0,e.loadPostDone=!1,e.loadPostFailure=null;break;case o.s:e.loadPostLoading=!1,e.loadPostDone=!0,e.singlePost=t.data;break;case o.q:e.loadPostLoading=!1,e.loadPostFailure=t.error;break;case o.l:case o.u:case o.o:e.loadPostsLoading=!0,e.loadPostsDone=!1,e.loadPostsFailure=null;break;case o.m:case o.v:case o.p:e.loadPostsLoading=!1,e.loadPostsDone=!0,e.hasMorePosts=10===t.data.length,e.mainPosts=e.mainPosts.concat(t.data);break;case o.k:case o.t:case o.n:e.loadPostsLoading=!1,e.loadPostsFailure=t.error;break;case o.e:e.addPostLoading=!0,e.addPostDone=!1,e.addPostFailure=null;break;case o.f:e.mainPosts.unshift(t.data),e.addPostLoading=!1,e.addPostDone=!0,e.imagePaths=[];break;case o.d:e.addPostLoading=!1,e.addPostFailure=t.error;break;case o.b:e.addCommentsLoading=!0,e.addCommentsDone=!1,e.addCommentsFailure=null;break;case o.c:e.mainPosts.find((function(e){return e.id===t.data.PostId})).Comments.unshift(t.data),e.addCommentsLoading=!1,e.addCommentsDone=!0;break;case o.a:e.addCommentsLoading=!1,e.addCommentsFailure=t.error;break;case o.z:e.removePostLoading=!0,e.removePostDone=!1,e.removePostFailure=null;break;case o.A:e.mainPosts=e.mainPosts.filter((function(e){return e.id!==t.data.PostId})),e.removePostLoading=!1,e.removePostDone=!0;break;case o.x:e.removePostLoadin=!1,e.removePostFailure=t.error}}))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,6,1,3,4,5,7]]]);