"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9359],{7273:function(){},8582:function(){},9846:function(t,r,n){n.d(r,{Z:function(){return a}});n(8582),n(7273);var e=n(144);function s(t){return e.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(r,{props:n,data:e,children:s}){e.staticClass=`${t} ${e.staticClass||""}`.trim();const{attrs:o}=e;if(o){e.attrs={};const t=Object.keys(o).filter((t=>{if("slot"===t)return!1;const r=o[t];return t.startsWith("data-")?(e.attrs[t]=r,!1):r||"string"===typeof r}));t.length&&(e.staticClass+=` ${t.join(" ")}`)}return n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),r(n.tag,e,s)}})}var o=n(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:r,data:n,children:e}){let s;const{attrs:a}=n;return a&&(n.attrs={},s=Object.keys(a).filter((t=>{if("slot"===t)return!1;const r=a[t];return t.startsWith("data-")?(n.attrs[t]=r,!1):r||"string"===typeof r}))),r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),t(r.tag,(0,o.ZP)(n,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(s||[])}),e)}})},6290:function(t,r,n){n.d(r,{ZP:function(){return a},bp:function(){return u}});var e=n(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function o(t){const r={};for(const n of t.split(s.styleList)){let[t,o]=n.split(s.styleProp);t=t.trim(),t&&("string"===typeof o&&(o=o.trim()),r[(0,e._A)(t)]=o)}return r}function a(){const t={};let r,n=arguments.length;while(n--)for(r of Object.keys(arguments[n]))switch(r){case"class":case"directives":arguments[n][r]&&(t[r]=c(t[r],arguments[n][r]));break;case"style":arguments[n][r]&&(t[r]=i(t[r],arguments[n][r]));break;case"staticClass":if(!arguments[n][r])break;void 0===t[r]&&(t[r]=""),t[r]&&(t[r]+=" "),t[r]+=arguments[n][r].trim();break;case"on":case"nativeOn":arguments[n][r]&&(t[r]=u(t[r],arguments[n][r]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][r])break;t[r]||(t[r]={}),t[r]={...arguments[n][r],...t[r]};break;default:t[r]||(t[r]=arguments[n][r])}return t}function i(t,r){return t?r?(t=(0,e.TI)("string"===typeof t?o(t):t),t.concat("string"===typeof r?o(r):r)):t:r}function c(t,r){return r?t&&t?(0,e.TI)(t).concat(r):r:t}function u(...t){if(!t[0])return t[1];if(!t[1])return t[0];const r={};for(let n=2;n--;){const e=t[n];for(const t in e)e[t]&&(r[t]?r[t]=[].concat(e[t],r[t]):r[t]=e[t])}return r}},9359:function(t,r,n){n.r(r),n.d(r,{default:function(){return d}});var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",[n("div",{staticClass:"text-center pb-2 text-h6 pb-sm-10 text-sm-h4 text-xl-h3"},[t._v(" Поступление в МАГИСТРАТУРУ ")]),n("ProgramsComponent",{attrs:{programs:t.programs}})],1)},s=[],o=n(629),a={name:"MagistracyView",components:{ProgramsComponent:()=>n.e(6054).then(n.bind(n,6054))},computed:(0,o.Se)("programs",{programs:"magistracy"})},i=a,c=n(1001),u=n(3453),l=n.n(u),f=n(9846),p=(0,c.Z)(i,e,s,!1,null,null,null),d=p.exports;l()(p,{VContainer:f.Z})}}]);
//# sourceMappingURL=9359.de19cddc.js.map