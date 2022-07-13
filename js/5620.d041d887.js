"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5620],{7273:function(){},8582:function(){},2102:function(t,e,i){i(7273);var s=i(144),n=i(6290),r=i(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=u.get(o);if(!a){let t;for(t in a=[],d)d[t].forEach((i=>{const s=e[i],n=h(t,i,s);n&&a.push(n)}));const i=a.some((t=>t.startsWith("col-")));a.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(o,a)}return t(e.tag,(0,n.ZP)(i,{class:a}),s)}})},9846:function(t,e,i){i.d(e,{Z:function(){return o}});i(8582),i(7273);var s=i(144);function n(t){return s.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:n}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var r=i(6290),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,r.ZP)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},2877:function(t,e,i){i(7273);var s=i(144),n=i(6290),r=i(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((i,s)=>(i[t+(0,r.jC)(s)]=e(),i)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...a,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let o=b.get(r);if(!o){let t;for(t in o=[],g)g[t].forEach((i=>{const s=e[i],n=v(t,i,s);n&&o.push(n)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,o)}return t(e.tag,(0,n.ZP)(i,{staticClass:"row",class:o}),s)}})},7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),n=i(2529),r=i(3325),o=(0,r.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,r.Z)(a,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},624:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(8083),n=i(6952),r=i(4589),o=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8083:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[i.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!o||s.quiet&&!c.init||s.once&&!d&&!c.init||o(r,a,d),d&&s.once?n(t,e,i):c.init=!0}),a);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,i){var s;const n=null==(s=t._observe)?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e["Z"]=r},6952:function(t,e,i){var s=i(144),n=i(1824),r=i(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),a=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},6290:function(t,e,i){i.d(e,{ZP:function(){return o},bp:function(){return c}});var s=i(4589);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const i of t.split(n.styleList)){let[t,r]=i.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,s._A)(t)]=r)}return e}function o(){const t={};let e,i=arguments.length;while(i--)for(e of Object.keys(arguments[i]))switch(e){case"class":case"directives":arguments[i][e]&&(t[e]=l(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=a(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=c(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]={...arguments[i][e],...t[e]};break;default:t[e]||(t[e]=arguments[i][e])}return t}function a(t,e){return t?e?(t=(0,s.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,s.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let i=2;i--;){const s=t[i];for(const t in s)s[t]&&(e[t]?e[t]=[].concat(s[t],e[t]):e[t]=s[t])}return e}},5620:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoad?i("div",[i("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[i("v-row",{staticClass:"d-flex align-center justify-center"},[i("v-col",{class:t.$vuetify.breakpoint.xs?"text-center":"",attrs:{cols:"12",sm:"6"}},[i("div",{staticClass:"pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1"},[t._v(" Факультет ИКТ ")]),i("div",{staticClass:"text-subtitle-1"},[t._v(" Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в проектах наших партнеров. ")])]),i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6"}},[i("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),i("div",{staticClass:"hex-section",staticStyle:{"z-index":"0",position:"relative"}},[t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient1"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient2"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),i("v-container",{staticStyle:{position:"relative","z-index":"10"}},[i("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.article.title)+" ")]),i("BaseHexagonContainer",{attrs:{"hex-array":JSON.parse(t.article.description).winnersHex,link:"/article/1"}})],1),i("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left"}}),i("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"55%",position:"right",top:"10px"}})],1),i("NewsComponent",{staticClass:"pb-8 pb-xl-12",attrs:{news:t.news.results}}),i("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"left",top:"-10px"}}),i("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"right"}}),i("div",{staticClass:"section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ")]),i("CarouselLeadersComponent",{attrs:{slider:[t.dean].concat(t.office,t.contacts)}})],1)],1),i("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"40%",position:"left"}}),i("LineComponent",{attrs:{id:"6",color:"#FF776E",width:"45%",position:"right",top:"10px"}}),i("div",{staticClass:"ethics"},[i("TheEthicsMobileComponent",{staticClass:"ethics-mobile"}),i("TheEthicsComponent",{staticClass:"ethics-desktop"})],1),i("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"30%",position:"right",top:"-5px"}}),i("LineComponent",{attrs:{id:"8",color:"#FF0281",width:"60%",position:"left",top:"10px","left-after":"15%"}}),i("div",{staticClass:"section-background pt-4 pb-10 pt-lg-12 pb-lg-16"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Клубы факультета ")]),i("v-row",{staticClass:"d-flex align-start justify-space-around"},t._l(t.clubs,(function(e,s){return i("v-col",{key:s,staticClass:"pt-6 text-center d-flex flex-column align-center animation-club",attrs:{cols:"6",md:"3"}},[i("v-img",{staticClass:"club-img",attrs:{src:e.img,contain:""}}),i("div",{staticClass:"club-text"},[i("div",{staticClass:"text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"club-description px-sm-2"},[t._v(" "+t._s(e.description)+" ")]),i("div",{staticClass:"d-flex justify-center club-description pt-2"},[i("div",[i("v-img",{staticClass:"mr-2",attrs:{src:e.iconLink,width:t.$vuetify.breakpoint.xs?20:30,contain:""}})],1),i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])])]),2===s&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"11",color:"#6A30F4",width:"100%",position:"right",top:"-20px"}}):t._e(),2===s&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"12",color:"#FF776E",width:"30%",position:"left",top:"-10px"}}):t._e()],1)})),1)],1)],1),i("LineComponent",{attrs:{id:"9",color:"#6A30F4",width:"100%",position:"right"}}),t.$vuetify.breakpoint.mdAndUp?i("LineComponent",{attrs:{id:"10",color:"#FF776E",width:"30%",position:"left",top:"10px"}}):t._e(),i("div",{staticClass:"pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8"},[i("v-container",{staticClass:"animation-numbers"},[i("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Факультет в цифрах ")]),i("v-row",t._l(t.numbers,(function(e,s){return i("v-col",{key:s,staticClass:"text-center",attrs:{cols:"4",md:1===s?6:3}},[i("div",{staticClass:"numbers-name"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"numbers-description subtitle-color",domProps:{innerHTML:t._s(e.description)}})])})),1)],1)],1),i("LineComponent",{attrs:{id:"13",color:"#6A30F4",width:"35%",position:"right"}}),i("LineComponent",{attrs:{id:"14",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),i("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[i("v-container",[i("v-row",{staticClass:"d-flex align-center justify-center"},[i("v-col",{staticClass:"text-center d-md-none"},[i("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Видео ")])]),i("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[i("div",[i("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Видео ")]),i("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Мы снимаем полезные и классные видеролики про программирование, насущные вопросы, жизнь в Университете ИТМО. А также рассказываем про программы и возможности, которые реализуются у нас на факультете ИКТ. Если хотите окунуться в жизнь факультета, то погружайся вместе с ИКТ! ")])]),i("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[i("BaseButton",{attrs:{href:"https://vk.com/video/@ict.itmo",text:"Открыть"}})],1)]),i("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[i("TheStudentsVideoComponent")],1)],1)],1)],1),i("LineComponent",{attrs:{id:"15",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),i("LineComponent",{attrs:{id:"16",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),i("PartnersComponent")],1):i("div",{staticClass:"d-flex justify-center fill-height align-center fill-height",staticStyle:{"min-height":"75vh"}},[i("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],r=i(629),o={name:"HomeView",components:{LineComponent:()=>i.e(5898).then(i.bind(i,5898)),CarouselLeadersComponent:()=>Promise.all([i.e(1555),i.e(2761)]).then(i.bind(i,1555)),HeaderAnimation:()=>i.e(4777).then(i.bind(i,4777)),TheEthicsComponent:()=>i.e(4409).then(i.bind(i,4409)),TheEthicsMobileComponent:()=>i.e(3441).then(i.bind(i,3441)),NewsComponent:()=>i.e(9196).then(i.bind(i,9196)),PartnersComponent:()=>i.e(948).then(i.bind(i,948)),BaseHexagonContainer:()=>i.e(2551).then(i.bind(i,7088)),TheStudentsVideoComponent:()=>i.e(2447).then(i.bind(i,2447)),BaseButton:()=>i.e(7625).then(i.bind(i,7625))},props:{animationHeader:{type:Boolean,default:!1}},data:()=>({clubs:[{img:i(5280),name:"AIRes",description:"Сообщество разработчиков искусственного интеллекта",link:"https://vk.com/airesclub",iconLink:i(7882)},{img:i(1365),name:"FTML",description:"Клуб frontend-разработчиков",link:"https://vk.com/ftmlclub",iconLink:i(7882)},{img:i(375),name:"PM's",description:"Объединение специалистов в сфере менеджемента",link:"https://vk.com/pms_itmo",iconLink:i(7882)},{img:i(3654),name:"Info Lab",description:"Проектный клуб разработчиков",link:"https://vk.com/infolab_club",iconLink:i(7882)}],numbers:[{name:">60",description:"преподавателей"},{name:"~1000",description:"студентов"},{name:"6",description:"образовательных<br>программ"}],scrolledClub:[{type:!1},{type:!1},{type:!1},{type:!1}],scrolledNumbers:!1,scrolledHexLines:!1,isLoad:!1}),computed:{...(0,r.rn)("news",["news","article"]),...(0,r.rn)("contacts",["contacts","dean","office"])},watch:{scrolledClub:{handler:function(t){t.forEach(((t,e)=>{t.type&&document.querySelectorAll(".animation-club")[e].classList.add("animation--active")}))},deep:!0},scrolledNumbers(t){t&&document.querySelector(".animation-numbers").classList.add("animation--active")}},async mounted(){await this.getNews(),await this.getArticle(1),this.isLoad=!0},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,r.nv)("news",["getNews","getArticle"]),handleScroll(){let t=document.documentElement.clientHeight;if(document.querySelectorAll(".animation-club").forEach(((e,i)=>{if(!this.scrolledClub[i].type){let s=e.getBoundingClientRect().bottom;this.scrolledClub[i].type=s<t&&s>0}})),!this.scrolledNumbers){let e=document.querySelector(".animation-numbers");if(e){let i=e.getBoundingClientRect().bottom;this.scrolledNumbers=i<t&&i>0}}if(!this.scrolledHexLines){let e=document.querySelector(".hex-section");if(e){let i=e.getBoundingClientRect().top+150;i<t&&i>0&&(this.scrolledHexLines=!0)}}}}},a=o,l=i(1001),c=i(3453),d=i.n(c),h=i(2102),u=i(9846),p=i(7047),m=i(624),g=i(2877),f=(0,l.Z)(a,s,n,!1,null,"06cdc844",null),v=f.exports;d()(f,{VCol:h.Z,VContainer:u.Z,VImg:p.Z,VProgressCircular:m.Z,VRow:g.Z})},7882:function(t,e,i){t.exports=i.p+"img/vkMini.0818e256.svg"},5280:function(t,e,i){t.exports=i.p+"img/aires.ddb80f96.png"},1365:function(t,e,i){t.exports=i.p+"img/ftml.ca5b3cb1.png"},3654:function(t,e,i){t.exports=i.p+"img/infolab.b86b295a.png"},375:function(t,e,i){t.exports=i.p+"img/pm.d589adae.png"}}]);
//# sourceMappingURL=5620.d041d887.js.map