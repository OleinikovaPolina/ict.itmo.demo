"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6822],{17273:function(){},68582:function(){},99846:function(t,n,r){r.d(n,{Z:function(){return i}});r(57327),r(41539),r(47941),r(23157),r(92222),r(68582),r(17273),r(73210),r(69600);var e=r(20144);function a(t){return e.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,r){var e=r.props,a=r.data,o=r.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var i=a.attrs;if(i){a.attrs={};var s=Object.keys(i).filter((function(t){if("slot"===t)return!1;var n=i[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n}));s.length&&(a.staticClass+=" ".concat(s.join(" ")))}return e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),n(e.tag,a,o)}})}var o=r(76290),i=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,a=n.data,i=n.children,s=a.attrs;return s&&(a.attrs={},r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var n=s[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n}))),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,(0,o.ZP)(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},76290:function(t,n,r){r.d(n,{ZP:function(){return u},bp:function(){return d}});var e=r(4367),a=r(75200),o=r(62032),i=(r(74916),r(23123),r(73210),r(47941),r(92222),r(4589)),s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var n,r={},e=(0,o.Z)(t.split(s.styleList));try{for(e.s();!(n=e.n()).done;){var c=n.value,u=c.split(s.styleProp),l=(0,a.Z)(u,2),f=l[0],d=l[1];f=f.trim(),f&&("string"===typeof d&&(d=d.trim()),r[(0,i._A)(f)]=d)}}catch(p){e.e(p)}finally{e.f()}return r}function u(){var t,n={},r=arguments.length;while(r--)for(var a=0,o=Object.keys(arguments[r]);a<o.length;a++)switch(t=o[a],t){case"class":case"directives":arguments[r][t]&&(n[t]=f(n[t],arguments[r][t]));break;case"style":arguments[r][t]&&(n[t]=l(n[t],arguments[r][t]));break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":arguments[r][t]&&(n[t]=d(n[t],arguments[r][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;n[t]||(n[t]={}),n[t]=(0,e.Z)((0,e.Z)({},arguments[r][t]),n[t]);break;default:n[t]||(n[t]=arguments[r][t])}return n}function l(t,n){return t?n?(t=(0,i.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof n?c(n):n)):t:n}function f(t,n){return n?t&&t?(0,i.TI)(t).concat(n):n:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},n=2;n--;){var r=n<0||arguments.length<=n?void 0:arguments[n];for(var e in r)r[e]&&(t[e]?t[e]=[].concat(r[e],t[e]):t[e]=r[e])}return t}},86822:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-container",[r("div",{staticClass:"text-center pb-2 text-h6 pb-sm-10 text-sm-h4 text-xl-h3"},[t._v(" Поступление в БАКАЛАВРИАТ ")]),r("ProgramsComponent",{attrs:{programs:t.programs}})],1)},a=[],o=(r(41539),r(78783),r(33948),r(20629)),i={name:"BaccalaureateView",components:{ProgramsComponent:function(){return r.e(3611).then(r.bind(r,73611))}},computed:(0,o.Se)("programs",{programs:"baccalaureate"})},s=i,c=r(1001),u=r(43453),l=r.n(u),f=r(99846),d=(0,c.Z)(s,e,a,!1,null,null,null),p=d.exports;l()(d,{VContainer:f.Z})},62032:function(t,n,r){r.d(n,{Z:function(){return a}});r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(21703);var e=r(48936);function a(t,n){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,e.Z)(t))||n&&t&&"number"===typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,i=t},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(c)throw i}}}}}}]);
//# sourceMappingURL=6822-legacy.e9686062.js.map