(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),a=n.n(o),u=i.a.createElement;function c(){return u("nav",{id:"navbar",className:"navbar has-shadow is-spaced"},u("div",{className:"container"},u("div",{className:"navbar-brand"},u("img",{className:"navbar-item",src:"/favicon.svg",width:"60px",alt:""}),u("h2",{className:"navbar-item"},d)),u("a",{className:"navbar-item navbar-end button is-primary is-hidden-mobile"},"Apply!")))}var s=i.a.createElement;function f(){return s("footer",{className:"footer"},s("div",{className:"content has-text-centered"},s("p",null,s("strong",null,d," Demo")," by ",s("a",{href:"https://stitch.money/"},"Stitch"),". The source code is ",s("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT")," licensed.")))}var l=i.a.createElement,d="Martian Money";function p(e){var t=e.children;return l(i.a.Fragment,null,l(a.a,null,l("title",null,d),l("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),l("link",{rel:"alternate icon",href:"/favicon.ico"}),l("meta",{name:"description",content:"Providing the financial services you'll need for your new Martian life!"}),l("meta",{name:"og:title",content:d})),l(c,null),t,l(f,null))}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=i.props[s],l=r[s]||new Set;l.has(f)?o=!1:(l.add(f),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(a.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("a3WO");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return i}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("BsWD");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},UdIf:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r="c05f0a6c-4d56-4306-830b-1a0a35fd5075",i="http://localhost:3000/report"},VtrM:function(e,t,n){"use strict";var r=n("q1tI"),i=Object.prototype.hasOwnProperty;function o(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}var a=new WeakMap,u=0;var c=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):a.has(e[n])?r=a.get(e[n]):(r=u,a.set(e[n],u++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var s="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),f={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(o()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var a=Math.min(i.retryCount||0,8),u=~~((Math.random()+.5)*(1<<a))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(s?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(s?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"===typeof t){for(r in o=0,t){if(i.call(t,r)&&++o&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!==t&&n!==n},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}};function l(){return"undefined"===typeof navigator.onLine||navigator.onLine}var d=Object(r.createContext)({});d.displayName="SWRConfigContext";var p=d,h=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},y="undefined"===typeof window,m=y?null:window.requestIdleCallback||function(e){return setTimeout(e,1)},b=y?r.useEffect:r.useLayoutEffect,g={},w={},O={},_={},j={},S={},I={};if(!y&&window.addEventListener){var M=function(e){if(o()&&l())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return M(O)}),!1),window.addEventListener("focus",(function(){return M(O)}),!1),window.addEventListener("online",(function(){return M(_)}),!1)}var x=function(e,t){void 0===t&&(t=!0);var n=c.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var a=j[r];if(r&&a){for(var u=c.get(r),s=c.get(i),f=c.get(o),l=[],d=0;d<a.length;++d)l.push(a[d](t,u,s,f,d>0));return Promise.all(l).then((function(){return c.get(r)}))}return Promise.resolve(c.get(r))},A=function(e,t,n,r){var i=j[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},C=function(e,t,n){return void 0===n&&(n=!0),h(void 0,void 0,void 0,(function(){var r,i,o,a,u,s,f,l,d,p,h,y;return v(this,(function(v){switch(v.label){case 0:if(r=c.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,x(e,n)];if(S[i]=Date.now()-1,I[i]=0,a=S[i],u=w[i],!t||"function"!==typeof t)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,t(c.get(i))];case 2:return s=v.sent(),[3,4];case 3:return l=v.sent(),f=l,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];v.label=6;case 6:return v.trys.push([6,8,,9]),[4,t];case 7:return s=v.sent(),[3,9];case 8:return d=v.sent(),f=d,[3,9];case 9:return[3,11];case 10:s=t,v.label=11;case 11:if(a!==S[i]||u!==w[i]){if(f)throw f;return[2,s]}if("undefined"!==typeof s&&c.set(i,s),c.set(o,f),I[i]=Date.now()-1,p=j[i]){for(h=[],y=0;y<p.length;++y)h.push(p[y](!!n,s,f,void 0,y>0));return[2,Promise.all(h).then((function(){if(f)throw f;return c.get(i)}))]}if(f)throw f;return[2,s]}}))}))};p.Provider;var k=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,a,u={};t.length>=1&&(i=t[0]),t.length>2?(a=t[1],u=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(u=t[1]);var s=c.serializeKey(i),d=s[0],y=s[1],M=s[2],x=s[3];u=Object.assign({},f,Object(r.useContext)(p),u);var k=Object(r.useRef)(u);b((function(){k.current=u})),"undefined"===typeof a&&(a=u.fetcher);var E=function(){var e=c.get(d);return"undefined"===typeof e?u.initialData:e},R=E(),T=c.get(M),P=!!c.get(x),D=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),V=Object(r.useRef)({data:R,error:T,isValidating:P});Object(r.useDebugValue)(V.current.data);var W=Object(r.useState)(null)[1],H=Object(r.useCallback)((function(e){var t=!1;for(var n in e)V.current[n]!==e[n]&&(V.current[n]=e[n],D.current[n]&&(t=!0));if(t||u.suspense){if(N.current)return;W({})}}),[]),N=Object(r.useRef)(!1),K=Object(r.useRef)(d),q=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];N.current||(t=k.current)[e].apply(t,n)}}),L=Object(r.useCallback)((function(e,t){return C(K.current,e,t)}),[]),z=function(e,t){t&&(e[d]?e[d].push(t):e[d]=[t])},U=function(e,t){if(e[d]){var n=e[d],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},F=Object(r.useCallback)((function(t){return void 0===t&&(t={}),h(e,void 0,void 0,(function(){var e,n,r,i,o,s,f;return v(this,(function(l){switch(l.label){case 0:if(!d||!a)return[2,!1];if(N.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof g[d]&&t.dedupe,l.label=1;case 1:return l.trys.push([1,6,,7]),H({isValidating:!0}),c.set(x,!0),n||A(d,void 0,void 0,!0),r=void 0,i=void 0,n?(i=w[d],[4,g[d]]):[3,3];case 2:return r=l.sent(),[3,5];case 3:return u.loadingTimeout&&!c.get(d)&&setTimeout((function(){e&&q.current.emit("onLoadingSlow",d,u)}),u.loadingTimeout),g[d]=null!==y?a.apply(void 0,y):a(d),w[d]=i=Date.now(),[4,g[d]];case 4:r=l.sent(),setTimeout((function(){delete g[d],delete w[d]}),u.dedupingInterval),q.current.emit("onSuccess",r,d,u),l.label=5;case 5:return w[d]>i||S[d]&&(i<=S[d]||i<=I[d]||0===I[d])?(H({isValidating:!1}),[2,!1]):(c.set(d,r),c.set(M,void 0),c.set(x,!1),o={isValidating:!1},"undefined"!==typeof V.current.error&&(o.error=void 0),u.compare(V.current.data,r)||(o.data=r),H(o),n||A(d,r,void 0,!1),[3,7]);case 6:return s=l.sent(),delete g[d],delete w[d],c.set(M,s),V.current.error!==s&&(H({isValidating:!1,error:s}),n||A(d,void 0,s,!1)),q.current.emit("onError",s,d,u),u.shouldRetryOnError&&(f=(t.retryCount||0)+1,q.current.emit("onErrorRetry",s,d,u,F,Object.assign({dedupe:!0},t,{retryCount:f}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[d]);b((function(){if(d){N.current=!1;var e=V.current.data,t=E();K.current!==d&&(K.current=d),u.compare(e,t)||H({data:t});var n=function(){return F({dedupe:!0})};(u.revalidateOnMount||!u.initialData&&void 0===u.revalidateOnMount)&&("undefined"!==typeof t?m(n):n());var r=!1,i=function(){!r&&k.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),k.current.focusThrottleInterval))},o=function(){k.current.revalidateOnReconnect&&n()},a=function(e,t,r,i,o){void 0===e&&(e=!0),void 0===o&&(o=!0);var a={},c=!1;return"undefined"===typeof t||u.compare(V.current.data,t)||(a.data=t,c=!0),V.current.error!==r&&(a.error=r,c=!0),"undefined"!==typeof i&&V.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&H(a),!!e&&(o?n():F())};return z(O,i),z(_,o),z(j,a),function(){H=function(){return null},N.current=!0,U(O,i),U(_,o),U(j,a)}}}),[d,F]),b((function(){var t=null,n=function(){return h(e,void 0,void 0,(function(){return v(this,(function(e){switch(e.label){case 0:return V.current.error||!k.current.refreshWhenHidden&&!o()||!k.current.refreshWhenOffline&&!l()?[3,2]:[4,F({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return k.current.refreshInterval&&!V.current.error&&(t=setTimeout(n,k.current.refreshInterval)),[2]}}))}))};return k.current.refreshInterval&&(t=setTimeout(n,k.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[u.refreshInterval,u.refreshWhenHidden,u.refreshWhenOffline,F]);var B=Object(r.useMemo)((function(){var e={revalidate:F,mutate:L};return Object.defineProperties(e,{error:{get:function(){return D.current.error=!0,K.current===d?V.current.error:T},enumerable:!0},data:{get:function(){return D.current.data=!0,K.current===d?V.current.data:R},enumerable:!0},isValidating:{get:function(){return D.current.isValidating=!0,V.current.isValidating},enumerable:!0}}),e}),[F]);if(u.suspense){var J=c.get(d),X=c.get(M);if("undefined"===typeof J&&(J=R),"undefined"===typeof X&&(X=T),"undefined"===typeof J&&"undefined"===typeof X){if(g[d]||F(),g[d]&&"function"===typeof g[d].then)throw g[d];J=g[d]}if("undefined"===typeof J&&X)throw X;return{error:X,data:J,revalidate:F,mutate:L,isValidating:V.current.isValidating}}return B};t.a=k},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),o=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},fO3t:function(e,t,n){"use strict";function r(e){sessionStorage.setItem("stitchNonce",e)}function i(e){sessionStorage.setItem("stitchVerifier",e)}function o(){return sessionStorage.getItem("stitchVerifier")}function a(e){sessionStorage.setItem("stitchToken",e)}n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},ml1f:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return y}));var r=n("o0o1"),i=n.n(r),o=n("ODXe"),a=n("HaE+"),u=n("a3WO");var c=n("BsWD");function s(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var t=String.fromCharCode.apply(String,s(e));return window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,e.abrupt("return",new Uint8Array(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=crypto.getRandomValues(new Uint8Array(32)),n=f(t),e.next=4,l(n).then(f);case 4:return r=e.sent,e.abrupt("return",[n,r]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return f(crypto.getRandomValues(new Uint8Array(32)))}function y(e){return Object.entries(e).map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&")}}}]);