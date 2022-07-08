"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3021],{7273:function(){},8582:function(){},2102:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const f=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=f.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((s=>{const i=e[s],n=d(t,s,i);n&&a.push(n)}));const s=a.some((t=>t.startsWith("col-")));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(o,a)}return t(e.tag,(0,n.ZP)(s,{class:a}),i)}})},9846:function(t,e,s){s.d(e,{Z:function(){return o}});s(8582),s(7273);var i=s(144);function n(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:n}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var r=s(6290),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let n;const{attrs:o}=s;return o&&(s.attrs={},n=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},2877:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((s,i)=>(s[t+(0,r.jC)(i)]=e(),s)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...a,"space-between","space-around"].includes(t),f=l("justify",(()=>({type:String,default:null,validator:d}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),h=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(h)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let i=g[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const b=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...h},render(t,{props:e,data:s,children:i}){let r="";for(const n in e)r+=String(e[n]);let o=b.get(r);if(!o){let t;for(t in o=[],m)m[t].forEach((s=>{const i=e[s],n=v(t,s,i);n&&o.push(n)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,o)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:o}),i)}})},624:function(t,e,s){s.d(e,{Z:function(){return o}});var i=s(8083),n=s(6952),r=s(4589),o=n.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8083:function(t,e,s){function i(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[s.context._uid];if(!c)return;const u=r.some((t=>t.isIntersecting));!o||i.quiet&&!c.init||i.once&&!u&&!c.init||o(r,a,u),u&&i.once?n(t,e,s):c.init=!0}),a);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,s){var i;const n=null==(i=t._observe)?void 0:i[s.context._uid];n&&(n.observer.unobserve(t),delete t._observe[s.context._uid])}const r={inserted:i,unbind:n};e["Z"]=r},6952:function(t,e,s){var i=s(144),n=s(1824),r=s(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,i]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},6290:function(t,e,s){s.d(e,{ZP:function(){return o},bp:function(){return c}});var i=s(4589);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const s of t.split(n.styleList)){let[t,r]=s.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function o(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=a(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=c(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const i=t[s];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},3021:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad?s("div",[s("v-container",{staticStyle:{position:"relative","z-index":"1"}},[s("BaseStudentsHackathon",{attrs:{block:t.getArticle(2)}})],1),s("div",{staticClass:"hex-section"},[s("v-container",{staticStyle:{"z-index":"10",position:"relative"}},[s("BaseStudentsCompetition",{attrs:{block:t.getArticle(3)}})],1),t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient1"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient2"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),s("LineComponent",{attrs:{id:"1",color:"#FF0281",width:"50%",position:"left",top:"-10px","left-after":"20%"}}),s("LineComponent",{attrs:{id:"2",color:"#FF776E",width:"50%",position:"left",top:"5px"}})],1),s("v-container",{staticClass:"py-6 py-md-12"},[s("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Полезные ссылки ")]),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"9",md:"11"}},[s("v-row",t._l(t.usefulLinks,(function(t,e){return s("v-col",{key:e,attrs:{cols:"12",md:"4"}},[s("BaseUlBlock",{attrs:{item:t}})],1)})),1)],1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),s("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),s("div",{staticClass:"section-background pt-8 pt-md-12 pb-2 pb-md-6"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Сотрудники факультета ")]),s("CarouselLeadersComponent",{attrs:{slider:[t.dean].concat(t.office,t.contacts)}})],1)],1),s("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),s("LineComponent",{attrs:{id:"6",color:"#18FFBA",width:"68%",position:"right",top:"10px"}})],1):s("div",{staticClass:"d-flex justify-center fill-height align-center",staticStyle:{"min-height":"75vh"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],r=s(629),o={name:"StudentsView",components:{BaseStudentsCompetition:()=>s.e(3374).then(s.bind(s,3374)),BaseStudentsHackathon:()=>s.e(3370).then(s.bind(s,7075)),LineComponent:()=>s.e(5898).then(s.bind(s,5898)),BaseUlBlock:()=>s.e(5484).then(s.bind(s,5484)),CarouselLeadersComponent:()=>Promise.all([s.e(4542),s.e(472)]).then(s.bind(s,4542))},data:()=>({isLoad:!1,scrolledHexLines:!1,usefulLinks:[{name:"Административные",img:s(3719),links:[{name:"Студенческий офис",href:"https://student.itmo.ru/ru/studoffice/"},{name:"Интернет-портал ИСУ",href:"https://isu.ifmo.ru/"},{name:"Личный кабинет my.itmo",href:"https://my.itmo.ru/"},{name:"Прохождение практики",href:"https://docs.google.com/document/d/1BC2OQzaQ8bW3ZAfSdk8c_F1_j9JhVi3tWjeekJ_i8Fc/edit#heading=h.y9jim1888njz"}]},{name:"Информационные",img:s(3116),links:[{name:"Поступление",href:"https://abit.itmo.ru/"},{name:"Telegram-канал ИКТ",href:"https://t.me/itmoict"},{name:"Telegram-канал ITMOLNIA",href:"https://t.me/s/itmolnia"},{name:"Сайт ИТМО",href:"https://itmo.ru/ru/"}]},{name:"Другое",img:s(4237),links:[{name:"Центр Карьеры",href:"https://careers.itmo.ru/"},{name:"ITMO.Students",href:"https://student.itmo.ru/ru/"},{name:"Telegram-канал ППА",href:"https://t.me/+OAOaeubBw6IzYjAy"}]}]}),computed:{...(0,r.rn)("news",["articles"]),...(0,r.rn)("contacts",["contacts","dean","office"])},async mounted(){await this.getArticles(),this.isLoad=!0},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,r.nv)("news",["getArticles"]),getArticle(t){return Object.assign({title:this.articles.find((e=>e.id===t)).title},JSON.parse(this.articles.find((e=>e.id===t)).description))},handleScroll(){if(!this.scrolledHexLines){let t=document.documentElement.clientHeight,e=document.querySelector(".hex-section");if(e){let s=e.getBoundingClientRect().top+150;s<t&&s>0&&(this.scrolledHexLines=!0)}}}}},a=o,l=s(1001),c=s(3453),u=s.n(c),d=s(2102),f=s(9846),p=s(624),h=s(2877),m=(0,l.Z)(a,i,n,!1,null,"594ac676",null),g=m.exports;u()(m,{VCol:d.Z,VContainer:f.Z,VProgressCircular:p.Z,VRow:h.Z})},3719:function(t,e,s){t.exports=s.p+"img/building.0d4230b8.svg"},4237:function(t,e,s){t.exports=s.p+"img/calendar.fadab874.svg"},3116:function(t,e,s){t.exports=s.p+"img/news.75c931fd.svg"}}]);
//# sourceMappingURL=3021.0d9c3a0b.js.map