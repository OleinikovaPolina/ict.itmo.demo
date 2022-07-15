"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[812],{7273:function(){},8582:function(){},2102:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const p=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=p.get(o);if(!a){let t;for(t in a=[],d)d[t].forEach((s=>{const i=e[s],n=u(t,s,i);n&&a.push(n)}));const s=a.some((t=>t.startsWith("col-")));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(o,a)}return t(e.tag,(0,n.ZP)(s,{class:a}),i)}})},9846:function(t,e,s){s.d(e,{Z:function(){return o}});s(8582),s(7273);var i=s(144);function n(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:n}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var r=s(6290),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let n;const{attrs:o}=s;return o&&(s.attrs={},n=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},2877:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((s,i)=>(s[t+(0,r.jC)(i)]=e(),s)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...a,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:u}))),f=t=>[...a,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:f}))),h={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(m)},v={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,s){let i=v[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const g=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:f},...m},render(t,{props:e,data:s,children:i}){let r="";for(const n in e)r+=String(e[n]);let o=g.get(r);if(!o){let t;for(t in o=[],h)h[t].forEach((s=>{const i=e[s],n=b(t,s,i);n&&o.push(n)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),g.set(r,o)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:o}),i)}})},624:function(t,e,s){s.d(e,{Z:function(){return o}});var i=s(8083),n=s(6952),r=s(4589),o=n.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8083:function(t,e,s){function i(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[s.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!o||i.quiet&&!c.init||i.once&&!d&&!c.init||o(r,a,d),d&&i.once?n(t,e,s):c.init=!0}),a);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,s){var i;const n=null==(i=t._observe)?void 0:i[s.context._uid];n&&(n.observer.unobserve(t),delete t._observe[s.context._uid])}const r={inserted:i,unbind:n};e["Z"]=r},6952:function(t,e,s){var i=s(144),n=s(1824),r=s(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,i]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},6290:function(t,e,s){s.d(e,{ZP:function(){return o},bp:function(){return c}});var i=s(4589);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const s of t.split(n.styleList)){let[t,r]=s.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function o(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=a(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=c(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const i=t[s];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},812:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad?s("div",[s("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[s("v-row",{staticClass:"d-flex align-center justify-center"},[s("v-col",{class:t.$vuetify.breakpoint.xs?"text-center":"",attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1"},[t._v(" Факультет ИКТ ")]),s("div",{staticClass:"text-subtitle-1"},[t._v(" Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в проектах наших партнеров. ")])]),s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6"}},[s("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),s("div",{staticClass:"hex-section",staticStyle:{"z-index":"0",position:"relative"}},[t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient1"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient2"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),s("v-container",{staticStyle:{position:"relative","z-index":"10"}},[s("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.article.title)+" ")]),s("BaseHexagonContainer",{attrs:{"hex-array":JSON.parse(t.article.description).winnersHex,link:"/article/1"}})],1),s("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left"}}),s("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"55%",position:"right",top:"10px"}})],1),s("NewsComponent",{staticClass:"pb-8 pb-xl-12",attrs:{news:t.news.results}}),s("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"right"}}),s("div",{staticClass:"section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ")]),s("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1),s("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"40%",position:"left"}}),s("LineComponent",{attrs:{id:"6",color:"#FF776E",width:"45%",position:"right",top:"10px"}}),s("div",{staticClass:"ethics"},[s("TheEthicsMobileComponent",{staticClass:"ethics-mobile"}),s("TheEthicsComponent",{staticClass:"ethics-desktop"})],1),s("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"30%",position:"right",top:"-5px"}}),s("LineComponent",{attrs:{id:"8",color:"#FF0281",width:"60%",position:"left",top:"10px","left-after":"15%"}}),s("div",{staticClass:"section-background pt-4 pb-10 pt-lg-12 pb-lg-16"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Клубы факультета ")]),s("v-row",{staticClass:"d-flex align-start justify-space-around"},t._l(t.clubs,(function(e,i){return s("v-col",{key:i,staticClass:"pt-6 text-center d-flex flex-column align-center animation-club",attrs:{cols:"6",md:"3"}},[s("img",{staticClass:"club-img",attrs:{alt:"...",rel:"preload",src:e.img}}),s("div",{staticClass:"club-text"},[s("div",{staticClass:"text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"club-description px-sm-2"},[t._v(" "+t._s(e.description)+" ")]),s("div",{staticClass:"d-flex justify-center club-description pt-2"},[s("div",[s("img",{staticClass:"mr-2",attrs:{alt:"...",rel:"preload",src:e.iconLink,width:t.$vuetify.breakpoint.xs?20:30}})]),s("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])])]),2===i&&t.$vuetify.breakpoint.smAndDown?s("LineComponent",{attrs:{id:"11",color:"#6A30F4",width:"100%",position:"right",top:"-20px"}}):t._e(),2===i&&t.$vuetify.breakpoint.smAndDown?s("LineComponent",{attrs:{id:"12",color:"#FF776E",width:"30%",position:"left",top:"-10px"}}):t._e()],1)})),1)],1)],1),s("LineComponent",{attrs:{id:"9",color:"#6A30F4",width:"100%",position:"right"}}),t.$vuetify.breakpoint.mdAndUp?s("LineComponent",{attrs:{id:"10",color:"#FF776E",width:"30%",position:"left",top:"10px"}}):t._e(),s("div",{staticClass:"pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8"},[s("v-container",{staticClass:"animation-numbers"},[s("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Факультет в цифрах ")]),s("v-row",t._l(t.numbers,(function(e,i){return s("v-col",{key:i,staticClass:"text-center",attrs:{cols:"4",md:1===i?6:3}},[s("div",{staticClass:"numbers-name"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"numbers-description subtitle-color",domProps:{innerHTML:t._s(e.description)}})])})),1)],1)],1),s("LineComponent",{attrs:{id:"13",color:"#6A30F4",width:"35%",position:"right"}}),s("LineComponent",{attrs:{id:"14",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),s("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[s("v-container",[s("v-row",{staticClass:"d-flex align-center justify-center"},[s("v-col",{staticClass:"text-center d-md-none"},[s("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Видео ")])]),s("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[s("div",[s("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Видео ")]),s("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Мы снимаем полезные и классные видеролики про программирование, насущные вопросы, жизнь в Университете ИТМО. А также рассказываем про программы и возможности, которые реализуются у нас на факультете ИКТ. Если хотите окунуться в жизнь факультета, то погружайся вместе с ИКТ! ")])]),s("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[s("BaseButton",{attrs:{href:"https://vk.com/video/@ict.itmo",text:"Открыть"}})],1)]),s("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[s("TheStudentsVideoComponent")],1)],1)],1)],1),s("LineComponent",{attrs:{id:"15",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),s("LineComponent",{attrs:{id:"16",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),s("PartnersComponent")],1):s("div",{staticClass:"d-flex justify-center fill-height align-center fill-height",staticStyle:{"min-height":"75vh"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],r=s(629),o={name:"HomeView",components:{LineComponent:()=>s.e(5898).then(s.bind(s,5898)),CarouselLeadersComponent:()=>Promise.all([s.e(6703),s.e(6636)]).then(s.bind(s,6703)),HeaderAnimation:()=>s.e(6914).then(s.bind(s,6914)),TheEthicsComponent:()=>s.e(5281).then(s.bind(s,5281)),TheEthicsMobileComponent:()=>s.e(4063).then(s.bind(s,4063)),NewsComponent:()=>s.e(9196).then(s.bind(s,9196)),PartnersComponent:()=>s.e(3381).then(s.bind(s,3381)),BaseHexagonContainer:()=>s.e(2673).then(s.bind(s,2673)),TheStudentsVideoComponent:()=>s.e(129).then(s.bind(s,129)),BaseButton:()=>s.e(7625).then(s.bind(s,7625))},props:{animationHeader:{type:Boolean,default:!1}},data:()=>({clubs:[{img:s(5280),name:"AIRes",description:"Сообщество разработчиков искусственного интеллекта",link:"https://vk.com/airesclub",iconLink:s(7882)},{img:s(1365),name:"FTML",description:"Клуб frontend-разработчиков",link:"https://vk.com/ftmlclub",iconLink:s(7882)},{img:s(375),name:"PM's",description:"Объединение специалистов в сфере менеджемента",link:"https://vk.com/pms_itmo",iconLink:s(7882)},{img:s(3654),name:"Info Lab",description:"Проектный клуб разработчиков",link:"https://vk.com/infolab_club",iconLink:s(7882)}],numbers:[{name:">60",description:"преподавателей"},{name:"~1000",description:"студентов"},{name:"6",description:"образовательных<br>программ"}],scrolledClub:[{type:!1},{type:!1},{type:!1},{type:!1}],scrolledNumbers:!1,scrolledHexLines:!1,isLoad:!1}),computed:{...(0,r.rn)("news",["news","article"]),...(0,r.rn)("contacts",["contacts","dean","office"]),persons(){let t=[this.dean].concat(this.office,this.contacts);return t[1]=t.splice(5,1,t[1])[0],t}},watch:{scrolledClub:{handler:function(t){t.forEach(((t,e)=>{t.type&&document.querySelectorAll(".animation-club")[e].classList.add("animation--active")}))},deep:!0},scrolledNumbers(t){t&&document.querySelector(".animation-numbers").classList.add("animation--active")}},async mounted(){await this.getNews(),await this.getArticle(1),this.isLoad=!0},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,r.nv)("news",["getNews","getArticle"]),handleScroll(){let t=document.documentElement.clientHeight;if(document.querySelectorAll(".animation-club").forEach(((e,s)=>{if(!this.scrolledClub[s].type){let i=e.getBoundingClientRect().bottom;this.scrolledClub[s].type=i<t&&i>0}})),!this.scrolledNumbers){let e=document.querySelector(".animation-numbers");if(e){let s=e.getBoundingClientRect().bottom;this.scrolledNumbers=s<t&&s>0}}if(!this.scrolledHexLines){let e=document.querySelector(".hex-section");if(e){let s=e.getBoundingClientRect().top+150;s<t&&s>0&&(this.scrolledHexLines=!0)}}}}},a=o,l=s(1001),c=s(3453),d=s.n(c),u=s(2102),p=s(9846),f=s(624),m=s(2877),h=(0,l.Z)(a,i,n,!1,null,"1572432c",null),v=h.exports;d()(h,{VCol:u.Z,VContainer:p.Z,VProgressCircular:f.Z,VRow:m.Z})},7882:function(t,e,s){t.exports=s.p+"img/vkMini.0818e256.svg"},5280:function(t,e,s){t.exports=s.p+"img/aires.0aa3393a.png"},1365:function(t,e,s){t.exports=s.p+"img/ftml.4916d36c.png"},3654:function(t,e,s){t.exports=s.p+"img/infolab.a00dbe65.png"},375:function(t,e,s){t.exports=s.p+"img/pm.9d3456b7.png"}}]);
//# sourceMappingURL=812.fcda7d57.js.map