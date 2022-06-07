"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3589],{17273:function(){},68582:function(){},99846:function(t,n,e){e.d(n,{Z:function(){return a}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var r=e(20144);function o(t){return r.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var r=e.props,o=e.data,i=e.children;o.staticClass="".concat(t," ").concat(o.staticClass||"").trim();var a=o.attrs;if(a){o.attrs={};var s=Object.keys(a).filter((function(t){if("slot"===t)return!1;var n=a[t];return t.startsWith("data-")?(o.attrs[t]=n,!1):n||"string"===typeof n}));s.length&&(o.staticClass+=" ".concat(s.join(" ")))}return r.id&&(o.domProps=o.domProps||{},o.domProps.id=r.id),n(r.tag,o,i)}})}var i=e(76290),a=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,o=n.data,a=n.children,s=o.attrs;return s&&(o.attrs={},e=Object.keys(s).filter((function(t){if("slot"===t)return!1;var n=s[t];return t.startsWith("data-")?(o.attrs[t]=n,!1):n||"string"===typeof n}))),r.id&&(o.domProps=o.domProps||{},o.domProps.id=r.id),t(r.tag,(0,i.ZP)(o,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),a)}})},76290:function(t,n,e){e.d(n,{ZP:function(){return u},bp:function(){return d}});var r=e(4367),o=e(75200),i=e(62032),a=(e(74916),e(23123),e(73210),e(47941),e(92222),e(4589)),s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var n,e={},r=(0,i.Z)(t.split(s.styleList));try{for(r.s();!(n=r.n()).done;){var c=n.value,u=c.split(s.styleProp),l=(0,o.Z)(u,2),f=l[0],d=l[1];f=f.trim(),f&&("string"===typeof d&&(d=d.trim()),e[(0,a._A)(f)]=d)}}catch(p){r.e(p)}finally{r.f()}return e}function u(){var t,n={},e=arguments.length;while(e--)for(var o=0,i=Object.keys(arguments[e]);o<i.length;o++)switch(t=i[o],t){case"class":case"directives":arguments[e][t]&&(n[t]=f(n[t],arguments[e][t]));break;case"style":arguments[e][t]&&(n[t]=l(n[t],arguments[e][t]));break;case"staticClass":if(!arguments[e][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[e][t].trim();break;case"on":case"nativeOn":arguments[e][t]&&(n[t]=d(n[t],arguments[e][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[e][t])break;n[t]||(n[t]={}),n[t]=(0,r.Z)((0,r.Z)({},arguments[e][t]),n[t]);break;default:n[t]||(n[t]=arguments[e][t])}return n}function l(t,n){return t?n?(t=(0,a.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof n?c(n):n)):t:n}function f(t,n){return n?t&&t?(0,a.TI)(t).concat(n):n:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},n=2;n--;){var e=n<0||arguments.length<=n?void 0:arguments[n];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},3589:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"fill-height"},["1"===t.$route.params.id?e("HomeArticleComponent"):t._e(),"2"===t.$route.params.id?e("HackathonComponent"):t._e(),"3"===t.$route.params.id?e("CompetitionComponent"):t._e(),"4"===t.$route.params.id?e("TwoPhotosComponent"):t._e()],1)},o=[],i=(e(41539),e(78783),e(33948),{name:"AdminUpdateArticlesView",components:{HomeArticleComponent:function(){return Promise.all([e.e(314),e.e(4247),e.e(9980),e.e(6094)]).then(e.bind(e,72307))},TwoPhotosComponent:function(){return Promise.all([e.e(314),e.e(4247),e.e(2739),e.e(5488)]).then(e.bind(e,47138))},HackathonComponent:function(){return Promise.all([e.e(314),e.e(4247),e.e(2739),e.e(9980),e.e(3828)]).then(e.bind(e,99154))},CompetitionComponent:function(){return Promise.all([e.e(314),e.e(4247),e.e(2739),e.e(9980),e.e(9792)]).then(e.bind(e,33503))}}}),a=i,s=e(1001),c=e(43453),u=e.n(c),l=e(99846),f=(0,s.Z)(a,r,o,!1,null,null,null),d=f.exports;u()(f,{VContainer:l.Z})},62032:function(t,n,e){e.d(n,{Z:function(){return o}});e(82526),e(41817),e(41539),e(32165),e(78783),e(33948),e(21703);var r=e(48936);function o(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,r.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==e["return"]||e["return"]()}finally{if(c)throw a}}}}}}]);
//# sourceMappingURL=3589-legacy.980b2840.js.map