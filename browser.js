// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(i.call(e,r)||a.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&u&&u.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return e!=e}function _(e){return Math.abs(e)}function p(e,r,t){var n,o,u,i;if(e<=0)return 0;if(1===e||0===t)return c(r[0])?0:_(r[0]);for(o=t<0?(1-e)*t:0,n=0,i=0;i<e;i++)!1===c(u=r[o])&&(n+=_(u)),o+=t;return n}function d(e,r,t,n){var o,u,i,a;if(e<=0)return 0;if(1===e||0===t)return c(r[n])?0:_(r[n]);for(u=n,o=0,a=0;a<e;a++)!1===c(i=r[u])&&(o+=_(i)),u+=t;return o}function b(e,r,t){return p(e,r,t)}return f(p,"ndarray",d),f(b,"ndarray",(function(e,r,t,n){return d(e,r,t,n)})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanasum=r();
//# sourceMappingURL=browser.js.map