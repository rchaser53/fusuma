(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(92),a=n.n(i),s=(n(326),n(327),n(328),n(131)),u=n.n(s);n(331);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return b});var b=function(e){function t(e){var n,r,o;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=p(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?d(r):o,m(d(n),"setup",function(){var e,t;window.slide=(e={}.showIndex,t=void 0!==e&&e,new window.WebSlides({loop:!0,showIndex:t,navigateOnScroll:!1})),window.slide.el.addEventListener("ws:slide-change",function(e){n.reloadChart(),n.props.onChangeSlideIndex&&n.props.onChangeSlideIndex(e.detail.currentSlide0)})}),m(d(n),"reloadChart",function(){0}),window.slide)||(!!document.getElementById("webslides")?n.setup():setTimeout(n.setup,0));return n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.a.highlightAll(),e.next=8;break;case 4:t=e.sent,n=t.Mermaid,this.mermaid=new n,this.mermaid.init();case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){l(i,r,o,a,s,"next",e)}function s(e){l(i,r,o,a,s,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){a.a.highlightAll(),this.reloadChart()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.hash!==e.hash||!window.slide}},{key:"render",value:function(){var e=this.props.slides;return o.a.createElement("article",{className:void 0,id:"webslides"},e.map(function(e,t){var n=e.slide,r=e.fusumaProps;return o.a.createElement("section",{key:t,className:u()("aligncenter",r.classes,r.sectionTitle?"section-title":void 0)},o.a.createElement(n,null))}))}}])&&f(n.prototype,r),i&&f(n,i),t}()},133:function(e,t,n){n(134),e.exports=n(339)},332:function(e,t,n){var r=n(333);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},333:function(e,t,n){},334:function(e,t,n){var r=n(335);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},335:function(e,t,n){},336:function(e,t,n){var r={"./0-title.md":337,"./01-many-pages.md":338};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=336},337:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return u}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return p});var r=n(2),o=n.n(r),i=n(3);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=[function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h2",null,"issues"))}],c=[{}],l={slides:u},f="wrapper";function p(e){var t=e.components,n=s(e,["components"]);return Object(i.a)(f,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",null,"issues"))}p.isMDXComponent=!0},338:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return u}),n.d(t,"fusumaProps",function(){return c}),n.d(t,"default",function(){return p});var r=n(2),o=n.n(r),i=n(3);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=[function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),Object(i.a)("br",null),Object(i.a)("h1",null,"1"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"2"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"3"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"4"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"5"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"6"))},function(e){return Object(i.a)(o.a.Fragment,null,Object(i.a)("h1",null,"7"))}],c=[{sectionTitle:"many pages"},{},{},{},{},{},{}],l={slides:u},f="wrapper";function p(e){var t=e.components,n=s(e,["components"]);return Object(i.a)(f,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),Object(i.a)("br",null),Object(i.a)("h1",null,"1"),Object(i.a)("hr",null),Object(i.a)("h1",null,"2"),Object(i.a)("hr",null),Object(i.a)("h1",null,"3"),Object(i.a)("hr",null),Object(i.a)("h1",null,"4"),Object(i.a)("hr",null),Object(i.a)("h1",null,"5"),Object(i.a)("hr",null),Object(i.a)("h1",null,"6"),Object(i.a)("hr",null),Object(i.a)("h1",null,"7"))}p.isMDXComponent=!0},339:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(96),a=n(95),s=n(130);function u(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,s,"next",e)}function s(e){f(i,r,o,a,s,"throw",e)}a(void 0)})}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=h(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?m(r):o,v(m(n),"changeSidebarState",function(){var e="false"!==n.params.get("sidebar")&&"common"===n.mode;n.setState({isSidebar:e})}),v(m(n),"goTo",function(e){window.slide&&window.slide.goToSlide(e)}),v(m(n),"onSetSidebarOpen",function(e){var t=e.isOpen;n.state.isOpenSidebar!==t&&n.setState({isOpenSidebar:t})}),v(m(n),"onChangeSlideIndex",function(e){n.setState({currentIndex:e})}),v(m(n),"onRunPresentationMode",function(){window.slide=null,n.routeMode("host")}),v(m(n),"terminate",function(){window.slide=null,n.routeMode("common")});var i=new URL(window.location.href),a=i.hash.match(/^#slide=(.+?)$/);a=null!==a?a[1]-1:0;var s=t.createProps(e.slides,a),u=s.slides,l=s.contentsList;return n.state={isSidebar:!0,isOpenSidebar:!1,slides:u,contentsList:l,currentIndex:a,SidebarComponent:null,CommentsListComponent:null},n.indexDiff=a,n.params=i.searchParams,n.ContentComponent=null,n.isLive=n.params.get("isLive"),n.routeMode(),n}var r,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),r=t,i=[{key:"componentDidMount",value:function(){var e=p(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.changeSidebarState(),!this.state.isSidebar){e.next=7;break}return e.next=4,Promise.all([n.e(0),n.e(12),n.e(3)]).then(n.bind(null,642));case 4:t=e.sent,r=t.SidebarComponent,this.setState({SidebarComponent:r});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setupLive",value:function(){var e=p(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(13),n.e(4)]).then(n.bind(null,643));case 2:t=e.sent,r=t.CommentsList,this.setState({CommentsListComponent:r});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"routeMode",value:function(){var e=p(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.mode?(this.mode=t||u(),this.changeSidebarState()):this.mode=t||u(),"common"!==this.mode){e.next=5;break}this.ContentComponent=s.a,e.next=17;break;case 5:if("view"!==this.mode){e.next=11;break}return e.next=8,Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,646));case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,Promise.all([n.e(0),n.e(1),n.e(14),n.e(6)]).then(n.bind(null,645));case 13:e.t0=e.sent;case 14:r=e.t0,o=r.default,this.ContentComponent=o;case 17:"host"===this.mode&&this.setState({isOpenSidebar:!1,CommentsListComponent:null});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.isSidebar&&o.a.createElement(o.a.Fragment,null,this.state.SidebarComponent&&o.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,isOpen:this.state.isOpenSidebar,terminate:this.terminate,contents:this.state.contentsList,onStateChange:this.onSetSidebarOpen,currentIndex:this.state.currentIndex,runPresentationMode:this.onRunPresentationMode}),o.a.createElement(a.f,{className:"btn-sidebar",onClick:function(){return e.onSetSidebarOpen({isOpen:!0})}})),this.ContentComponent&&o.a.createElement(this.ContentComponent,{hash:this.props.hash,indexDiff:this.indexDiff,slides:this.state.slides,terminate:this.terminate,currentIndex:this.state.currentIndex,onChangeSlideIndex:this.onChangeSlideIndex}),this.state.CommentsListComponent&&o.a.createElement(this.state.CommentsListComponent,null))}}],f=[{key:"getDerivedStateFromProps",value:function(e,t){return null}},{key:"createProps",value:function(e,t){var n=[],r=[],i={};return e.forEach(function(e){var t=e.slides,o=e.fusumaProps;n.push.apply(n,l(t)),r.push.apply(r,l(o))}),r.reduce(function(e,t,n){var r=t.sectionTitle;return r&&e.push({title:r,index:n+1}),e},i.contentsList=[]),i.slides=n.map(function(e,t){var n,a,s=r[t];return{slide:s.contents?(n={list:i.contentsList},a=n.list,function(){return o.a.createElement("div",{className:"toc size-70 aligncenter"},o.a.createElement("ol",null,a.map(function(e,t){var n=e.index,r=e.title;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#slide=".concat(n),title:r},o.a.createElement("span",{className:"chapter"},r),o.a.createElement("span",{className:"toc-page"},n)))})))}):e,fusumaProps:s}}),i.slides=i.slides.concat(i.slides.splice(0,t)),i}}],i&&d(r.prototype,i),f&&d(r,f),t}(),O=i.hydrate;function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;O(o.a.createElement(y,{slides:e,hash:t}),document.getElementById("root"))}function w(e){return{id:(t=e).id,slides:t.keys().sort().map(function(e){return t(e)})};var t}var j;n(332),n(334);function S(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}(j=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g(w(n(336)).slides),e.next=6,n.e(9).then(n.bind(null,641));case 6:t=e.sent,(0,t.setTargetBlank)();case 9:case"end":return e.stop()}},e)}),function(){var e=this,t=arguments;return new Promise(function(n,r){var o=j.apply(e,t);function i(e){S(o,n,r,i,a,"next",e)}function a(e){S(o,n,r,i,a,"throw",e)}i(void 0)})})()}},[[133,8,10]],[0,12,3]]);