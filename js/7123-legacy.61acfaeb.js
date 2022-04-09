"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7123],{68582:function(){},99846:function(t,n,e){e.d(n,{Z:function(){return o}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var a=e(20144);function r(t){return a.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var a=e.props,r=e.data,i=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),n(a.tag,r,i)}})}var i=e(76290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,a=n.props,r=n.data,o=n.children,s=r.attrs;return s&&(r.attrs={},e=Object.keys(s).filter((function(t){if("slot"===t)return!1;var n=s[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,(0,i.ZP)(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(e||[])}),o)}})},62877:function(t,n,e){var a=e(23796),r=e(4367),i=(e(41539),e(26699),e(32023),e(92222),e(47941),e(74916),e(15306),e(51532),e(78783),e(33948),e(54747),e(17273),e(20144)),o=e(76290),s=e(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,n){return c.reduce((function(e,a){return e[t+(0,s.jC)(a)]=n(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:v}})),y={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function C(t,n,e){var a=h[t];if(null!=e){if(n){var r=n.replace(t,"");a+="-".concat(r)}return a+="-".concat(e),a.toLowerCase()}}var b=new Map;n["Z"]=i.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},g),{},{alignContent:{type:String,default:null,validator:v}},m),render:function(t,n){var e=n.props,r=n.data,i=n.children,s="";for(var c in e)s+=String(e[c]);var l=b.get(s);return l||function(){var t,n;for(n in l=[],y)y[n].forEach((function(t){var a=e[t],r=C(n,t,a);r&&l.push(r)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},(0,a.Z)(t,"align-".concat(e.align),e.align),(0,a.Z)(t,"justify-".concat(e.justify),e.justify),(0,a.Z)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),b.set(s,l)}(),t(e.tag,(0,o.ZP)(r,{staticClass:"row",class:l}),i)}})},37123:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Статьи ")]),e("v-row",{staticClass:"flex-wrap pb-4 pb-md-6"},t._l(t.infos,(function(t,n){return e("v-col",{key:n,attrs:{cols:"12",md:"6"}},[e("BaseBlock",{attrs:{info:t,link:"favorites/"+(n+7)}})],1)})),1),e("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Мероприятия ")]),e("v-row",{staticClass:"flex-wrap"},t._l(t.events,(function(t,n){return e("v-col",{key:n,attrs:{cols:"12",md:"6"}},[e("BaseBlock",{attrs:{info:t,link:"favorites/"+n}})],1)})),1)],1)},r=[],i=(e(41539),e(78783),e(33948),{name:"AdminFavoritesView",components:{BaseBlock:function(){return e.e(8437).then(e.bind(e,28437))}},data:function(){return{infos:[{id:1,name:"Хакатоны ICT.Hack & Info Lab",dateChange:"12.01.2021",page:"Студентам"},{id:2,name:"Конкурс Горизонт",dateChange:"12.01.2021",page:"Студентам"}],events:[{id:1,position:"средний, 1 строка, 1 картинка",name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{id:2,position:"средний, 1 строка, 1 картинка",name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"}]}}}),o=i,s=e(1001),c=e(43453),l=e.n(c),u=e(82102),d=e(99846),f=e(62877),p=(0,s.Z)(o,a,r,!1,null,"d2222188",null),g=p.exports;l()(p,{VCol:u.Z,VContainer:d.Z,VRow:f.Z})}}]);
//# sourceMappingURL=7123-legacy.61acfaeb.js.map