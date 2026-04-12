"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(h,s){
var y=require('@stdlib/blas-ext-base-dnanasumors/dist').ndarray;function f(e,r,a,c){return y(e,r,a,c)}s.exports=f
});var v=n(function(k,t){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,a){return x(e,r,a,p(e,a))}t.exports=j
});var q=n(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=i();l(d,"ndarray",R);o.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=q(),u,m=E(_(__dirname,"./native.js"));O(m)?u=b:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
