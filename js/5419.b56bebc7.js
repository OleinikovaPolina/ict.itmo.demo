"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5419],{7273:function(){},8582:function(){},2102:function(t,e,n){n(7273);var a=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],i=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(i),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(a+=`-${n}`,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["Z"]=a.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:s}){let o="";for(const r in e)o+=String(e[r]);let i=f.get(o);if(!i){let t;for(t in i=[],u)u[t].forEach((n=>{const a=e[n],r=d(t,n,a);r&&i.push(r)}));const n=i.some((t=>t.startsWith("col-")));i.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(o,i)}return t(e.tag,(0,r.ZP)(n,{class:i}),a)}})},9846:function(t,e,n){n.d(e,{Z:function(){return o}});n(8582),n(7273);var a=n(144);function r(t){return a.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(a.staticClass+=` ${t.join(" ")}`)}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,r)}})}var s=n(6290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:a}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),a)}})},2877:function(t,e,n){n(7273);var a=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],i=["start","end","center"];function l(t,e){return o.reduce(((n,a)=>(n[t+(0,s.jC)(a)]=e(),n)),{})}const c=t=>[...i,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...i,"space-between","space-around"].includes(t),f=l("justify",(()=>({type:String,default:null,validator:d}))),p=t=>[...i,"space-between","space-around","stretch"].includes(t),g=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){let a=y[t];if(null!=n){if(e){const n=e.replace(t,"");a+=`-${n}`}return a+=`-${n}`,a.toLowerCase()}}const v=new Map;e["Z"]=a.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:n,children:a}){let s="";for(const r in e)s+=String(e[r]);let o=v.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const a=e[n],r=h(t,n,a);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),v.set(s,o)}return t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),a)}})},6290:function(t,e,n){n.d(e,{ZP:function(){return o},bp:function(){return c}});var a=n(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,a._A)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=i(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function i(t,e){return t?e?(t=(0,a.TI)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function l(t,e){return e?t&&t?(0,a.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const a=t[n];for(const t in a)a[t]&&(e[t]?e[t]=[].concat(a[t],e[t]):e[t]=a[t])}return e}},5419:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Статьи ")]),n("v-row",{staticClass:"flex-wrap pb-4 pb-md-6"},t._l(t.infos,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"6"}},[n("BaseBlock",{attrs:{info:t,link:"favorites/"+(e+7)}})],1)})),1),n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-sm-h5 text-md-h4"},[t._v(" Мероприятия ")]),n("v-row",{staticClass:"flex-wrap"},t._l(t.events,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12",md:"6"}},[n("BaseBlock",{attrs:{info:Object.assign(e,{position:t.eventsPosition[a]}),link:"favorites/"+a}})],1)})),1)],1)},r=[],s={name:"AdminFavoritesView",components:{BaseBlock:()=>n.e(7791).then(n.bind(n,7791))},data:()=>({infos:[{name:"Хакатоны ICT.Hack & Info Lab",dateChange:"12.01.2021",page:"Студентам"},{name:"Конкурс Горизонт",dateChange:"12.01.2021",page:"Студентам"}],eventsPosition:["большой слева","средний, 1 строка, 1 картинка","маленький, 1 строка, 2 картинка","маленький, 1 строка, 3 картинка","маленький, 2 строка, 1 картинка","маленький, 2 строка, 2 картинка","средний, 2 строка, 3 картинка"],events:[{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"},{name:"Название ",date:"12.01.2021",time:"17:00",dateChange:"12.01.2021"}]})},o=s,i=n(1001),l=n(3453),c=n.n(l),u=n(2102),d=n(9846),f=n(2877),p=(0,i.Z)(o,a,r,!1,null,null,null),g=p.exports;c()(p,{VCol:u.Z,VContainer:d.Z,VRow:f.Z})}}]);
//# sourceMappingURL=5419.b56bebc7.js.map