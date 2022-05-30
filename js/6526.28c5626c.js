"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6526],{7273:function(){},8582:function(){},9846:function(t,e,n){n.d(e,{Z:function(){return i}});n(8582),n(7273);var s=n(144);function r(t){return s.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,r)}})}var a=n(6290),i=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:s}){let r;const{attrs:i}=n;return i&&(n.attrs={},r=Object.keys(i).filter((t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,a.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),s)}})},6290:function(t,e,n){n.d(e,{ZP:function(){return i},bp:function(){return d}});var s=n(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function a(t){const e={};for(const n of t.split(r.styleList)){let[t,a]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof a&&(a=a.trim()),e[(0,s._A)(t)]=a)}return e}function i(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=o(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=d(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function o(t,e){return t?e?(t=(0,s.TI)("string"===typeof t?a(t):t),t.concat("string"===typeof e?a(e):e)):t:e}function c(t,e){return e?t&&t?(0,s.TI)(t).concat(e):e:t}function d(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const s=t[n];for(const t in s)s[t]&&(e[t]?e[t]=[].concat(s[t],e[t]):e[t]=s[t])}return e}},6526:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading&&Object.keys(t.newsOne).length?n("v-container",[t.loading&&t.newsOne?n("BaseNews",{attrs:{data:t.newsOne}}):t._e()],1):t.loading?n("BaseNotFound"):t._e()},r=[],a=n(629),i={name:"NewView",components:{BaseNotFound:()=>n.e(6643).then(n.bind(n,6643)),BaseNews:()=>n.e(9541).then(n.bind(n,9541))},data:()=>({loading:!1}),computed:(0,a.rn)("news",["newsOne"]),watch:{"$route.params":{handler:async function(){this.loading=!1,await this.getNew(this.$route.params.id),this.loading=!0},deep:!0,immediate:!0}},async mounted(){await this.getNew(this.$route.params.id),this.loading=!0},methods:(0,a.nv)("news",["getNew"])},o=i,c=n(1001),d=n(3453),u=n.n(d),l=n(9846),f=(0,c.Z)(o,s,r,!1,null,null,null),p=f.exports;u()(f,{VContainer:l.Z})}}]);
//# sourceMappingURL=6526.28c5626c.js.map