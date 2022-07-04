"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8696],{7273:function(){},8582:function(){},2102:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>a.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const u=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let a="";for(const n in e)a+=String(e[n]);let o=u.get(a);if(!o){let t;for(t in o=[],d)d[t].forEach((s=>{const i=e[s],n=h(t,s,i);n&&o.push(n)}));const s=o.some((t=>t.startsWith("col-")));o.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(a,o)}return t(e.tag,(0,n.ZP)(s,{class:o}),i)}})},9846:function(t,e,s){s.d(e,{Z:function(){return a}});s(8582),s(7273);var i=s(144);function n(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:n}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var r=s(6290),a=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let n;const{attrs:a}=s;return a&&(s.attrs={},n=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},2877:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((s,i)=>(s[t+(0,r.jC)(i)]=e(),s)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let i=f[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:s,children:i}){let r="";for(const n in e)r+=String(e[n]);let a=y.get(r);if(!a){let t;for(t in a=[],g)g[t].forEach((s=>{const i=e[s],n=v(t,s,i);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(r,a)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:a}),i)}})},7047:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(8083),n=s(2529),r=s(3325),a=(0,r.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,l=s(8085),c=s(6290),d=s(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,r.Z)(o,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:n}=t;i||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},624:function(t,e,s){s.d(e,{Z:function(){return a}});var i=s(8083),n=s(6952),r=s(4589),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8083:function(t,e,s){function i(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],o)=>{var l;const c=null==(l=t._observe)?void 0:l[s.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!a||i.quiet&&!c.init||i.once&&!d&&!c.init||a(r,o,d),d&&i.once?n(t,e,s):c.init=!0}),o);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,s){var i;const n=null==(i=t._observe)?void 0:i[s.context._uid];n&&(n.observer.unobserve(t),delete t._observe[s.context._uid])}const r={inserted:i,unbind:n};e["Z"]=r},6952:function(t,e,s){var i=s(144),n=s(1824),r=s(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,i]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},2529:function(t,e,s){var i=s(4589),n=s(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),s=(0,i.kb)(this.minHeight),n=(0,i.kb)(this.minWidth),r=(0,i.kb)(this.maxHeight),a=(0,i.kb)(this.maxWidth),o=(0,i.kb)(this.width);return e&&(t.height=e),s&&(t.minHeight=s),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},6290:function(t,e,s){s.d(e,{ZP:function(){return a},bp:function(){return c}});var i=s(4589);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const s of t.split(n.styleList)){let[t,r]=s.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function a(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=o(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=c(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function o(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const i=t[s];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},8696:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad?s("div",[s("v-container",{staticClass:"pb-8 pb-xl-10"},[s("CarouselComponent",{attrs:{slider:t.slider,columns:1},scopedSlots:t._u([{key:"item",fn:function(t){return[s("v-col",{attrs:{cols:"12"}},[s("div",[s("v-img",{attrs:{width:"100%",src:t.item.img}})],1)])]}}],null,!1,2294057812)})],1),s("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"40%",position:"left",top:"10px"}}),s("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"70%",position:"right",top:"17.5px"}}),s("div",{staticClass:"section-background py-4 py-md-8 py-xl-14"},[s("v-container",[s("div",{staticClass:"pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Анонсы ")]),s("v-row",t._l(t.announcements.results,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",md:"4"}},[s("EventsAnnouncements",{attrs:{announcement:t}})],1)})),1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#FF776E",width:"30%",position:"left"}}),s("LineComponent",{attrs:{id:"4",color:"#6A30F4",width:"60%",position:"left",top:"10px"}}),t.news?s("NewsComponent",{staticClass:"pb-2 pb-md-8 pb-xl-12",attrs:{news:t.news.results}}):t._e(),s("LineComponent",{attrs:{id:"5",color:"#FF776E",width:"60%",position:"left"}}),s("LineComponent",{attrs:{id:"6",color:"#FF0281",width:"60%",position:"right",top:"20px"}}),t.events.length?s("div",{staticClass:"section-background py-4 py-md-8 py-xl-14"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Мероприятия ")]),s("div",{staticClass:"d-flex align-stretch justify-center flex-wrap"},[s("div",{staticClass:"px-8 pr-md-0 pl-md-3 pb-4 pb-md-0",staticStyle:{"z-index":"1"},style:{width:t.$vuetify.breakpoint.mdAndUp?"36%":"100%"}},[s("EventsGalleryComponent",{attrs:{item:t.events[0]}})],1),s("div",{staticClass:"pl-md-0",staticStyle:{"z-index":"0"},style:{width:t.$vuetify.breakpoint.mdAndUp?"64%":"100%"}},[t.$vuetify.breakpoint.mdAndUp?s("div",{staticClass:"d-flex flex-wrap align-content-space-between fill-height"},t._l(6,(function(e){return s("div",{key:e,staticStyle:{"padding-left":"20px"},style:{width:1===e||6===e?"43%":"28%"}},[s("EventsGalleryComponent",{attrs:{item:t.events[e],"type-item":1===e||6===e}})],1)})),0):s("div",{staticClass:"d-flex flex-wrap justify-space-between align-stretch"},t._l(4,(function(e){return s("div",{key:e,staticClass:"pt-2 pt-sm-6",class:2===e?"pb-5":3===e?"pt-5 pt-sm-11":"",style:{width:1===e||4===e?"48%":"45%"}},[s("EventsGalleryComponent",{attrs:{item:t.events[e+1],"type-item":1===e||4===e}})],1)})),0)])])])],1):t._e(),s("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"35%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"8",color:"#6A30F4",width:"75%",position:"right",top:"-5px"}})],1):s("div",{staticClass:"d-flex justify-center fill-height align-center",staticStyle:{"min-height":"75vh"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],r=s(629),a={name:"EventsView",components:{LineComponent:()=>s.e(5898).then(s.bind(s,5898)),EventsGalleryComponent:()=>s.e(5873).then(s.bind(s,5873)),EventsAnnouncements:()=>s.e(2599).then(s.bind(s,2599)),CarouselComponent:()=>Promise.all([s.e(1945),s.e(5451)]).then(s.bind(s,1945)),NewsComponent:()=>s.e(9196).then(s.bind(s,9196))},data:()=>({slider:[{img:s(1637)},{img:s(1637)},{img:s(1637)}],isLoad:!1}),computed:(0,r.rn)("news",["news","announcements","events"]),async mounted(){await this.getNews(),await this.getAnnouncements(),await this.getEvents(),this.isLoad=!0},methods:(0,r.nv)("news",["getNews","getAnnouncements","getEvents"])},o=a,l=s(1001),c=s(3453),d=s.n(c),h=s(2102),u=s(9846),p=s(7047),m=s(624),g=s(2877),f=(0,l.Z)(o,i,n,!1,null,null,null),v=f.exports;d()(f,{VCol:h.Z,VContainer:u.Z,VImg:p.Z,VProgressCircular:m.Z,VRow:g.Z})},1637:function(t,e,s){t.exports=s.p+"img/12.c28ee5a3.png"}}]);
//# sourceMappingURL=8696.5d3ab26e.js.map