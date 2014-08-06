/*
 * Dragonfly 0.1.0
 * A flexible and light ui framework
 * (c) 2014 Sogou Inc. All rights reserved.
 * https://github.com/bizdevfe/dragonfly
 */

(function(e,t){typeof define=="function"&&define.amd?define([],t):e.D=t()})(this,function(){var e,t,n;return function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("loader/almond",function(){}),function(){var e=this,t=e._,r={},i=Array.prototype,s=Object.prototype,o=Function.prototype,u=i.push,a=i.slice,f=i.concat,l=s.toString,c=s.hasOwnProperty,h=i.forEach,p=i.map,d=i.reduce,v=i.reduceRight,m=i.filter,g=i.every,y=i.some,b=i.indexOf,w=i.lastIndexOf,E=Array.isArray,S=Object.keys,x=o.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.6.0";var N=T.each=T.forEach=function(e,t,n){if(e==null)return e;if(h&&e.forEach===h)e.forEach(t,n);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(n,e[i],i,e)===r)return}else{var o=T.keys(e);for(var i=0,s=o.length;i<s;i++)if(t.call(n,e[o[i]],o[i],e)===r)return}return e};T.map=T.collect=function(e,t,n){var r=[];return e==null?r:p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)};var C="Reduce of empty array with no initial value";T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(C);return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(C);return n},T.find=T.detect=function(e,t,n){var r;return k(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return e==null?r:m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r)},T.reject=function(e,t,n){return T.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},T.every=T.all=function(e,t,n){t||(t=T.identity);var i=!0;return e==null?i:g&&e.every===g?e.every(t,n):(N(e,function(e,s,o){if(!(i=i&&t.call(n,e,s,o)))return r}),!!i)};var k=T.some=T.any=function(e,t,n){t||(t=T.identity);var i=!1;return e==null?i:y&&e.some===y?e.some(t,n):(N(e,function(e,s,o){if(i||(i=t.call(n,e,s,o)))return r}),!!i)};T.contains=T.include=function(e,t){return e==null?!1:b&&e.indexOf===b?e.indexOf(t)!=-1:k(e,function(e){return e===t})},T.invoke=function(e,t){var n=a.call(arguments,2),r=T.isFunction(t);return T.map(e,function(e){return(r?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,T.property(t))},T.where=function(e,t){return T.filter(e,T.matches(t))},T.findWhere=function(e,t){return T.find(e,T.matches(t))},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-Infinity,i=-Infinity;return N(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u>i&&(r=e,i=u)}),r},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);var r=Infinity,i=Infinity;return N(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u<i&&(r=e,i=u)}),r},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r},T.sample=function(e,t,n){return t==null||n?(e.length!==+e.length&&(e=T.values(e)),e[T.random(e.length-1)]):T.shuffle(e).slice(0,Math.max(0,t))};var L=function(e){return e==null?T.identity:T.isFunction(e)?e:T.property(e)};T.sortBy=function(e,t,n){return t=L(t),T.pluck(T.map(e,function(e,r,i){return{value:e,index:r,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),"value")};var A=function(e){return function(t,n,r){var i={};return n=L(n),N(t,function(s,o){var u=n.call(r,s,o,t);e(i,u,s)}),i}};T.groupBy=A(function(e,t,n){T.has(e,t)?e[t].push(n):e[t]=[n]}),T.indexBy=A(function(e,t,n){e[t]=n}),T.countBy=A(function(e,t){T.has(e,t)?e[t]++:e[t]=1}),T.sortedIndex=function(e,t,n,r){n=L(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?T.isArray(e)?a.call(e):e.length===+e.length?T.map(e,T.identity):T.values(e):[]},T.size=function(e){return e==null?0:e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return e==null?void 0:t==null||n?e[0]:t<0?[]:a.call(e,0,t)},T.initial=function(e,t,n){return a.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return e==null?void 0:t==null||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))},T.rest=T.tail=T.drop=function(e,t,n){return a.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,T.identity)};var O=function(e,t,n){return t&&T.every(e,T.isArray)?f.apply(n,e):(N(e,function(e){T.isArray(e)||T.isArguments(e)?t?u.apply(n,e):O(e,t,n):n.push(e)}),n)};T.flatten=function(e,t){return O(e,t,[])},T.without=function(e){return T.difference(e,a.call(arguments,1))},T.partition=function(e,t){var n=[],r=[];return N(e,function(e){(t(e)?n:r).push(e)}),[n,r]},T.uniq=T.unique=function(e,t,n,r){T.isFunction(t)&&(r=n,n=t,t=!1);var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(T.flatten(arguments,!0))},T.intersection=function(e){var t=a.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.contains(t,e)})})},T.difference=function(e){var t=f.apply(i,a.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=T.max(T.pluck(arguments,"length").concat(0)),t=new Array(e);for(var n=0;n<e;n++)t[n]=T.pluck(arguments,""+n);return t},T.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var M=function(){};T.bind=function(e,t){var n,r;if(x&&e.bind===x)return x.apply(e,a.call(arguments,1));if(!T.isFunction(e))throw new TypeError;return n=a.call(arguments,2),r=function(){if(this instanceof r){M.prototype=e.prototype;var i=new M;M.prototype=null;var s=e.apply(i,n.concat(a.call(arguments)));return Object(s)===s?s:i}return e.apply(t,n.concat(a.call(arguments)))}},T.partial=function(e){var t=a.call(arguments,1);return function(){var n=0,r=t.slice();for(var i=0,s=r.length;i<s;i++)r[i]===T&&(r[i]=arguments[n++]);while(n<arguments.length)r.push(arguments[n++]);return e.apply(this,r)}},T.bindAll=function(e){var t=a.call(arguments,1);if(t.length===0)throw new Error("bindAll must be passed function names");return N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=a.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(a.call(arguments,1)))},T.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:T.now(),o=null,s=e.apply(r,i),r=i=null};return function(){var f=T.now();!u&&n.leading===!1&&(u=f);var l=t-(f-u);return r=this,i=arguments,l<=0?(clearTimeout(o),o=null,u=f,s=e.apply(r,i),r=i=null):!o&&n.trailing!==!1&&(o=setTimeout(a,l)),s}},T.debounce=function(e,t,n){var r,i,s,o,u,a=function(){var f=T.now()-o;f<t?r=setTimeout(a,t-f):(r=null,n||(u=e.apply(s,i),s=i=null))};return function(){s=this,i=arguments,o=T.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return T.partial(t,e)},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},T.keys=function(e){if(!T.isObject(e))return[];if(S)return S(e);var t=[];for(var n in e)T.has(e,n)&&t.push(n);return t},T.values=function(e){var t=T.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=e[t[i]];return r},T.pairs=function(e){var t=T.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r},T.invert=function(e){var t={},n=T.keys(e);for(var r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=f.apply(i,a.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=f.apply(i,a.call(arguments,1));for(var r in e)T.contains(n,r)||(t[r]=e[r]);return t},T.defaults=function(e){return N(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var _=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;var o=e.constructor,u=t.constructor;if(o!==u&&!(T.isFunction(o)&&o instanceof o&&T.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1;n.push(e),r.push(t);var a=0,f=!0;if(i=="[object Array]"){a=e.length,f=a==t.length;if(f)while(a--)if(!(f=_(e[a],t[a],n,r)))break}else{for(var c in e)if(T.has(e,c)){a++;if(!(f=T.has(t,c)&&_(e[c],t[c],n,r)))break}if(f){for(c in t)if(T.has(t,c)&&!(a--))break;f=!a}}return n.pop(),r.pop(),f};T.isEqual=function(e,t){return _(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.constant=function(e){return function(){return e}},T.property=function(e){return function(t){return t[e]}},T.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},T.times=function(e,t,n){var r=Array(Math.max(0,e));for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},T.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},T.now=Date.now||function(){return(new Date).getTime()};var D={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};D.unescape=T.invert(D.escape);var P={escape:new RegExp("["+T.keys(D.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(D.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(P[e],function(t){return D[e][t]})}}),T.result=function(e,t){if(e==null)return void 0;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return u.apply(e,arguments),I.call(this,n.apply(T,e))}})};var H=0;T.uniqueId=function(e){var t=++H+"";return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var B=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){var r;n=T.defaults({},n,T.templateSettings);var i=new RegExp([(n.escape||B).source,(n.interpolate||B).source,(n.evaluate||B).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(F,function(e){return"\\"+j[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,T);var a=function(e){return r.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},T.chain=function(e){return T(e).chain()};var I=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=i[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],I.call(this,n)}}),N(["concat","join","slice"],function(e){var t=i[e];T.prototype[e]=function(){return I.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),typeof n=="function"&&n.amd&&n("underscore",[],function(){return T})}.call(this),n("base/string",["require"],function(e){var t={};return t.trim=function(){},t}),n("base/browser",["require"],function(e){var t={};return t.ie=document.documentMode,t}),n("base/class",["require"],function(e){var t={};return t.inherit=function(e,t){function n(){}n.prototype=t.prototype;var r=e.prototype,i=e.prototype=new n;return _.extend(i,r),e.prototype.constructor=e,e.superclass=t.prototype,e},t}),n("base/dom",["require"],function(e){var t={};return t.first=function(){},t}),n("base/base",["require","underscore","base/string","base/browser","base/class","base/dom"],function(e){var t=e("underscore"),n={};return t.extend(n,e("base/string"),e("base/browser"),e("base/class"),e("base/dom")),n}),n("Event",["require"],function(e){function t(){}return t.prototype={on:function(e,t,n){},off:function(e,t){},fire:function(e){}},t}),n("Widget",["require","base/base","Event"],function(e){function r(){}var t=e("base/base"),n=e("Event");return r.prototype={init:function(){},render:function(){},destroy:function(){}},t.inherit(r,n),r}),n("Button",["require","base/base","Widget"],function(e){function r(){}var t=e("base/base"),n=e("Widget");return t.inherit(r,n),r}),n("Table",["require","base/base","Widget"],function(e){function r(){}var t=e("base/base"),n=e("Widget");return t.inherit(r,n),r}),n("main",["require","underscore","Button","Table"],function(e){var t=e("underscore"),n={};n.version="0.1.0";var r=window.D;return n.noConflict=function(){return window.D=r,this},t.extend(n,{Button:e("Button"),Table:e("Table")}),n}),t("main")});