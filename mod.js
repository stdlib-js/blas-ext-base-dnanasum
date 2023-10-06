// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,x=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,s,l,f,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(c(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,n;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var $,C=Object.prototype,I=C.toString,R=C.__defineGetter__,B=C.__defineSetter__,M=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=$;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function z(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var N=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,W=function(r){return N.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function K(r){var e=W(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=W(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return W(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=q(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:D,join:J,normalize:X,relative:H,resolve:U,sep:"/"}));var ir=Object,or=/./;function ar(r){return"boolean"==typeof r}var ur="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function cr(){return ur&&"symbol"==typeof Symbol.toStringTag}var sr=Object.prototype.toString;var lr=Object.prototype.hasOwnProperty;var fr,pr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof pr?pr.toStringTag:"";fr=cr()?function(r){var e,t,n,i,o;if(null==r)return sr.call(r);t=r[gr],o=gr,e=null!=(i=r)&&lr.call(i,o);try{r[gr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return sr.call(r)};var dr=fr,br=Boolean,yr=Boolean.prototype.toString;var hr=cr();function vr(r){return"object"==typeof r&&(r instanceof br||(hr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===dr(r)))}function wr(r){return ar(r)||vr(r)}function mr(){return new Function("return this;")()}Z(wr,"isPrimitive",ar),Z(wr,"isObject",vr);var jr="object"==typeof self?self:null,_r="object"==typeof window?window:null,Er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},xr="object"==typeof Er?Er:null,Or="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!ar(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return mr()}if(Or)return Or;if(jr)return jr;if(_r)return _r;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Sr.document&&Sr.document.childNodes,Ar=Int8Array;function Tr(){return/^\s*function\s*([^(]*)/i}var Pr,Vr=/^\s*function\s*([^(]*)/i;Z(Tr,"REGEXP",Vr),Pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===dr(r)};var Fr=Pr;function $r(r){return null!==r&&"object"==typeof r}var Cr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r);function Ir(r){var e,t,n,i;if(("Object"===(t=dr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Vr.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z($r,"isObjectLikeArray",Cr);var Rr="function"==typeof or||"object"==typeof Ar||"function"==typeof kr?function(r){return Ir(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ir(r).toLowerCase():e};var Br,Mr,Lr=Object.getPrototypeOf;Mr=Object.getPrototypeOf,Br="function"===Rr(Mr)?Lr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gr=Br;function Zr(r){return null==r?null:(r=ir(r),Gr(r))}function qr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===dr(r))return!0;r=Zr(r)}return!1}function zr(r){return r!=r}function Nr(r){return Math.abs(r)}function Wr(r,e,t){var n,i,o,a;if(r<=0)return 0;if(1===r||0===t)return zr(e[0])?0:Nr(e[0]);for(i=t<0?(1-r)*t:0,n=0,a=0;a<r;a++)!1===zr(o=e[i])&&(n+=Nr(o)),i+=t;return n}Z(Wr,"ndarray",(function(r,e,t,n){var i,o,a,u;if(r<=0)return 0;if(1===r||0===t)return zr(e[n])?0:Nr(e[n]);for(o=n,i=0,u=0;u<r;u++)!1===zr(a=e[o])&&(i+=Nr(a)),o+=t;return i}));var Ur,Xr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return qr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,nr.join)("/home/runner/work/blas-ext-base-dnanasum/blas-ext-base-dnanasum/node_modules/@stdlib/blas-ext-base-dnanasumors/lib","./native.js")),Dr=Ur=qr(Xr)?Wr:Xr;const{ndarray:Jr}=Ur;function Hr(r,e,t){return Dr(r,e,t)}function Kr(r,e,t,n){return Jr(r,e,t,n)}Z(Hr,"ndarray",Kr);export{Hr as default,Kr as ndarray};
//# sourceMappingURL=mod.js.map
