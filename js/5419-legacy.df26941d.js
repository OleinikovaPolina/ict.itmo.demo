"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5419],{17273:function(){},68582:function(){},99846:function(t,e,n){n.d(e,{Z:function(){return o}});n(57327),n(41539),n(47941),n(23157),n(92222),n(68582),n(17273),n(73210),n(69600);var a=n(20144);function r(t){return a.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,r=n.data,i=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,i)}})}var i=n(76290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,r=e.data,o=e.children,s=r.attrs;return s&&(r.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,(0,i.ZP)(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})},76290:function(t,e,n){n.d(e,{ZP:function(){return l},bp:function(){return d}});var a=n(4367),r=n(75200),i=n(62032),o=(n(74916),n(23123),n(73210),n(47941),n(92222),n(4589)),s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,n={},a=(0,i.Z)(t.split(s.styleList));try{for(a.s();!(e=a.n()).done;){var c=e.value,l=c.split(s.styleProp),u=(0,r.Z)(l,2),f=u[0],d=u[1];f=f.trim(),f&&("string"===typeof d&&(d=d.trim()),n[(0,o._A)(f)]=d)}}catch(v){a.e(v)}finally{a.f()}return n}function l(){var t,e={},n=arguments.length;while(n--)for(var r=0,i=Object.keys(arguments[n]);r<i.length;r++)switch(t=i[r],t){case"class":case"directives":arguments[n][t]&&(e[t]=f(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=(0,a.Z)((0,a.Z)({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function u(t,e){return t?e?(t=(0,o.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function f(t,e){return e?t&&t?(0,o.TI)(t).concat(e):e:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var a in n)n[a]&&(t[a]?t[a]=[].concat(n[a],t[a]):t[a]=n[a])}return t}},15419:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Статьи ")]),n("v-row",{staticClass:"flex-wrap pb-4 pb-md-6"},t._l(t.infos,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"6"}},[n("BaseBlock",{attrs:{info:t,link:"favorites/"+(e+7)}})],1)})),1),n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Мероприятия ")]),n("v-row",{staticClass:"flex-wrap"},t._l(t.events,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12",md:"6"}},[n("BaseBlock",{attrs:{info:Object.assign(e,{position:t.eventsPosition[a]}),link:"favorites/"+a}})],1)})),1)],1)},r=[],i=(n(41539),n(78783),n(33948),{name:"AdminFavoritesView",components:{BaseBlock:function(){return n.e(7639).then(n.bind(n,27639))}},data:function(){return{infos:[{name:"Хакатоны ICT.Hack & Info Lab",dateChange:"12.01.2021",page:"Студентам"},{name:"Конкурс Горизонт",dateChange:"12.01.2021",page:"Студентам"}],eventsPosition:["большой слева","средний, 1 строка, 1 картинка","маленький, 1 строка, 2 картинка","маленький, 1 строка, 3 картинка","маленький, 2 строка, 1 картинка","маленький, 2 строка, 2 картинка","средний, 2 строка, 3 картинка"],events:[{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"}]}}}),o=i,s=n(1001),c=n(43453),l=n.n(c),u=n(82102),f=n(99846),d=n(62877),v=(0,s.Z)(o,a,r,!1,null,null,null),m=v.exports;l()(v,{VCol:u.Z,VContainer:f.Z,VRow:d.Z})},62032:function(t,e,n){n.d(e,{Z:function(){return r}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(21703);var a=n(48936);function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,a.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}}}]);
//# sourceMappingURL=5419-legacy.df26941d.js.map