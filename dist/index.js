"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(g,u){
var p=require('@stdlib/blas-ext-base-dnanasumors/dist');function y(e,r,a){return p(e,r,a)}u.exports=y
});var v=n(function(h,t){
var x=require('@stdlib/blas-ext-base-dnanasumors/dist').ndarray;function f(e,r,a,c){return x(e,r,a,c)}t.exports=f
});var q=n(function(k,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=i(),l=v();j(d,"ndarray",l);o.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=q(),s,m=_(R(__dirname,"./native.js"));E(m)?s=O:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
