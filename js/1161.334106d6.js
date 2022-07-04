"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1161],{7273:function(){},8582:function(){},9846:function(t,e,s){s.d(e,{Z:function(){return o}});s(8582),s(7273);var r=s(144);function i(t){return r.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:r,children:i}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:n}=r;if(n){r.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(r.staticClass+=` ${t.join(" ")}`)}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,i)}})}var n=s(6290),o=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:r}){let i;const{attrs:o}=s;return o&&(s.attrs={},i=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),r)}})},624:function(t,e,s){s.d(e,{Z:function(){return o}});var r=s(8083),i=s(6952),n=s(4589),o=i.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,n.kb)(this.calculatedSize),width:(0,n.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8083:function(t,e,s){function r(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const r=e.modifiers||{},n=e.value,{handler:o,options:a}="object"===typeof n?n:{handler:n,options:{}},c=new IntersectionObserver(((n=[],a)=>{var c;const l=null==(c=t._observe)?void 0:c[s.context._uid];if(!l)return;const u=n.some((t=>t.isIntersecting));!o||r.quiet&&!l.init||r.once&&!u&&!l.init||o(n,a,u),u&&r.once?i(t,e,s):l.init=!0}),a);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:c},c.observe(t)}function i(t,e,s){var r;const i=null==(r=t._observe)?void 0:r[s.context._uid];i&&(i.observer.unobserve(t),delete t._observe[s.context._uid])}const n={inserted:r,unbind:i};e["Z"]=n},6952:function(t,e,s){var r=s(144),i=s(1824),n=s(7093);e["Z"]=r.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,i.N6)("style must be an object",this),e):"string"===typeof e.class?((0,i.N6)("class must be an object",this),e):((0,n.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,i.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,i.N6)("class must be an object",this),e;if((0,n.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,r]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},r&&(e.class["text--"+r]=!0)}return e}}})},6290:function(t,e,s){s.d(e,{ZP:function(){return o},bp:function(){return l}});var r=s(4589);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function n(t){const e={};for(const s of t.split(i.styleList)){let[t,n]=s.split(i.styleProp);t=t.trim(),t&&("string"===typeof n&&(n=n.trim()),e[(0,r._A)(t)]=n)}return e}function o(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=c(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=a(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function a(t,e){return t?e?(t=(0,r.TI)("string"===typeof t?n(t):t),t.concat("string"===typeof e?n(e):e)):t:e}function c(t,e){return e?t&&t?(0,r.TI)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const r=t[s];for(const t in r)r[t]&&(e[t]?e[t]=[].concat(r[t],e[t]):e[t]=r[t])}return e}},1161:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading&&Object.keys(t.article).length?s("v-container",[s("BaseNews",{attrs:{data:t.article}})],1):t.loading?s("BaseNotFound"):s("div",{staticClass:"d-flex justify-center fill-height align-center",staticStyle:{"min-height":"75vh"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},i=[],n=s(629),o={name:"ArticleView",components:{BaseNotFound:()=>s.e(6643).then(s.bind(s,6643)),BaseNews:()=>s.e(3433).then(s.bind(s,1956))},data:()=>({loading:!1}),computed:(0,n.rn)("news",["article"]),watch:{"$route.params":{handler:async function(){this.loading=!1,await this.getArticle(this.$route.params.id),this.loading=!0},deep:!0,immediate:!0}},async mounted(){await this.getArticle(this.$route.params.id),this.loading=!0},methods:(0,n.nv)("news",["getArticle"])},a=o,c=s(1001),l=s(3453),u=s.n(l),d=s(9846),h=s(624),f=(0,c.Z)(a,r,i,!1,null,null,null),v=f.exports;u()(f,{VContainer:d.Z,VProgressCircular:h.Z})}}]);
//# sourceMappingURL=1161.334106d6.js.map