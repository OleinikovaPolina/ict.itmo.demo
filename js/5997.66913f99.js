"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5997],{7273:function(){},8582:function(){},2102:function(t,e,s){s(7273);var i=s(144),r=s(6290),n=s(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>a.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const p=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:n}){let a="";for(const r in e)a+=String(e[r]);let o=p.get(a);if(!o){let t;for(t in o=[],d)d[t].forEach((s=>{const i=e[s],r=u(t,s,i);r&&o.push(r)}));const s=o.some((t=>t.startsWith("col-")));o.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(a,o)}return t(e.tag,(0,r.ZP)(s,{class:o}),i)}})},9846:function(t,e,s){s.d(e,{Z:function(){return a}});s(8582),s(7273);var i=s(144);function r(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}var n=s(6290),a=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let r;const{attrs:a}=s;return a&&(s.attrs={},r=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},2877:function(t,e,s){s(7273);var i=s(144),r=s(6290),n=s(4589);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((s,i)=>(s[t+(0,n.jC)(i)]=e(),s)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...o,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:u}))),m=t=>[...o,"space-between","space-around","stretch"].includes(t),h=l("alignContent",(()=>({type:String,default:null,validator:m}))),g={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(h)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let i=f[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const b=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:m},...h},render(t,{props:e,data:s,children:i}){let n="";for(const r in e)n+=String(e[r]);let a=b.get(n);if(!a){let t;for(t in a=[],g)g[t].forEach((s=>{const i=e[s],r=v(t,s,i);r&&a.push(r)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(n,a)}return t(e.tag,(0,r.ZP)(s,{staticClass:"row",class:a}),i)}})},7047:function(t,e,s){s.d(e,{Z:function(){return p}});var i=s(8083),r=s(2529),n=s(3325),a=(0,n.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,l=s(8085),c=s(6290),d=s(1824);const u="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,n.Z)(o,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!u||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},8083:function(t,e,s){function i(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},n=e.value,{handler:a,options:o}="object"===typeof n?n:{handler:n,options:{}},l=new IntersectionObserver(((n=[],o)=>{var l;const c=null==(l=t._observe)?void 0:l[s.context._uid];if(!c)return;const d=n.some((t=>t.isIntersecting));!a||i.quiet&&!c.init||i.once&&!d&&!c.init||a(n,o,d),d&&i.once?r(t,e,s):c.init=!0}),o);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:l},l.observe(t)}function r(t,e,s){var i;const r=null==(i=t._observe)?void 0:i[s.context._uid];r&&(r.observer.unobserve(t),delete t._observe[s.context._uid])}const n={inserted:i,unbind:r};e["Z"]=n},2529:function(t,e,s){var i=s(4589),r=s(144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),s=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),n=(0,i.kb)(this.maxHeight),a=(0,i.kb)(this.maxWidth),o=(0,i.kb)(this.width);return e&&(t.height=e),s&&(t.minHeight=s),r&&(t.minWidth=r),n&&(t.maxHeight=n),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},6290:function(t,e,s){s.d(e,{ZP:function(){return a},bp:function(){return c}});var i=s(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function n(t){const e={};for(const s of t.split(r.styleList)){let[t,n]=s.split(r.styleProp);t=t.trim(),t&&("string"===typeof n&&(n=n.trim()),e[(0,i._A)(t)]=n)}return e}function a(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=o(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=c(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function o(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?n(t):t),t.concat("string"===typeof e?n(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const i=t[s];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},5997:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.program?s("div",[s("v-container",[s("v-row",{staticClass:"d-flex align-stretch justify-center"},[s("v-col",{staticClass:"d-flex flex-column justify-space-around",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[s("div",{staticClass:"pb-4 pb-md-4 text-body-2 breadcrumbs text-start"},[s("span",[t._v("Поступление /")]),0===t.program.type?s("router-link",{attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")]):t._e(),1===t.program.type?s("router-link",{attrs:{to:"/magistracy"}},[t._v(" Магистратура ")]):t._e(),s("span",[t._v("/ "+t._s(t.program.direction))])],1),s("div",[s("div",{staticClass:"pb-4 pb-lg-6  text-h5 text-sm-h4 text-xl-h3"},[t._v(" "+t._s(t.program.direction)+" ")]),s("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" "+t._s(t.program.description)+" ")])]),s("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[s("BaseButton",{attrs:{link:"/",text:"Перейти на сайт"}})],1)]),s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6",lg:"7"}},[s("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),s("v-container",{staticClass:"d-flex justify-center"},[s("v-col",{attrs:{cols:"12",md:"10",xl:"12"}},[s("v-row",{attrs:{align:"stretch",justify:"center"}},[s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info pa-2 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info-title text-center pb-2 subtitle-color"},[t._v(" Вступительные испытания и минимальные баллы ЕГЭ ")]),s("div",{staticClass:"subtitle-color text-center"},t._l(t.program.exams,(function(e){return s("p",{key:e,staticClass:"mb-0"},[t._v(" "+t._s(e)+" ")])})),0)])])]),s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info px-4 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Количество мест - "),s("b",[t._v(t._s(t.program.numbers))])]),s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" "+t._s(t.program.type?"Конкурс прошлого года":"Проходной балл прошлого года")+" - "),s("b",[t._v(t._s(t.program.score))])]),s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Язык обучения - "),s("b",[t._v(t._s(t.program.language))])]),s("div",{staticClass:"subtitle-color"},[t._v(" Форма обучения - "),s("b",[t._v(t._s(t.program.form))])])])])]),s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"8",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"subtitle-color program-info px-6 py-4 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"text-h6 text-xl-h5 text-center pb-1 pb-md-3"},[t._v(" Полезные ссылки ")]),s("div",{staticClass:"d-flex flex-column pl-xl-4",staticStyle:{width:"fit-content"}},[t._l(t.program.links,(function(e){return s("a",{key:e.link,staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])})),s("a",{staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:"https://abit.itmo.ru/page/66",target:"_blank"}},[t._v("Правила приема 2022 ")]),s("a",{staticClass:"link-arrow mr-0",attrs:{href:"https://abit.itmo.ru/"+(0===t.program.type?"bachelor":"master")+"#scholarship",target:"_blank"}},[t._v("Стипендии ")])],2)])])])],1)],1)],1),s("v-container",{staticClass:"directions pb-md-16"},[s("div",{staticClass:"d-flex pb-6"},[s("v-col",{attrs:{cols:"3",md:"1"}},[s("v-img",{attrs:{width:"100",src:t.programAreasImg}})],1),s("v-col",{attrs:{cols:"9",md:"6"}},[s("div",{staticClass:"text-h6 text-xl-h4"},[t._v(" Основные направления профессиональной деятельности выпускников: ")])])],1),s("div",{staticClass:"d-flex text-subtitle-1 flex-wrap"},t._l(2,(function(e){return s("v-col",{key:e,staticClass:"py-0",attrs:{cols:"12",md:"6"}},[s("ul",{staticClass:"ict-ul"},t._l(t.program.areas[e-1],(function(i){return s("li",{key:e+i},[t._v(" "+t._s(i)+" ")])})),0)])})),1)]),s("div",{staticClass:"hex-section"},[t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient1"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient2"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),s("v-container",[s("div",{staticClass:" text-center mx-auto text-h5 text-sm-h4 text-xl-h3",style:{width:t.$vuetify.breakpoint.smAndDown?"275px":"450px"}},[t._v(" Дисциплины ")]),s("BaseHexagonContainer",{attrs:{link:"/disciplines/"+t.program.code,"hex-array":t.hexArray}})],1)],1),s("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left",top:"5px"}}),s("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"65%",position:"right",top:"15px"}}),s("v-container",{staticClass:"py-8 py-md-16"},[s("v-row",{attrs:{justify:"center"}},t._l(t.program.contacts,(function(t,e){return s("v-col",{key:e,attrs:{cols:"12",sm:"6",xl:"4"}},[s("BasePerson",{attrs:{person:t,"small-person":!0}})],1)})),1)],1),s("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),s("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"left",top:"15px"}}),s("div",{staticClass:"section-background job"},[s("v-container",{staticClass:"py-10 py-md-12 py-xl-16"},[s("div",{staticClass:"text-center mx-auto pb-6 pb-md-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Где работают выпускники ИКТ ")]),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-row",{attrs:{justify:"center",align:"stretch"}},t._l(t.usefulLinks,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",md:"4"}},[s("div",{staticClass:"pa-md-4",staticStyle:{height:"100%"}},[s("BaseUlBlock",{attrs:{item:t,background:"app-background"}})],1)])})),1)],1)],1)],1)],1),s("LineComponent",{attrs:{id:"5",color:"#FF776E",width:"55%",position:"left"}}),s("div",{staticClass:"pt-8 pt-md-12"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Преподаватели ")]),t.program.teachers.length?s("CarouselLeadersComponent",{attrs:{slider:t.program.teachers}}):t._e()],1)],1)],1):s("BaseNotFound")},r=[],n=s(629),a={name:"ProgramView",components:{BaseNotFound:()=>s.e(6643).then(s.bind(s,6643)),BasePerson:()=>s.e(1894).then(s.bind(s,1894)),LineComponent:()=>s.e(5898).then(s.bind(s,5898)),BaseUlBlock:()=>s.e(9956).then(s.bind(s,5484)),BaseButton:()=>s.e(7625).then(s.bind(s,7625)),CarouselLeadersComponent:()=>Promise.all([s.e(2715),s.e(3931)]).then(s.bind(s,2715)),HeaderAnimation:()=>s.e(2517).then(s.bind(s,2517)),BaseHexagonContainer:()=>s.e(4489).then(s.bind(s,9923))},props:{animationHeader:{type:Boolean,default:!1}},data:()=>({scrolledHexLines:!1,hexArray:[{img:s(8756),text:"Архитектура баз данных"},{img:s(5425),text:"Облачные технологии"},{img:s(8116),text:"Backend разработка"},{img:s(7162),text:"Frontend разработка"},{img:s(615),text:"Управление проектами"},{img:s(3631),text:"Геймификация"}],usefulLinks:[{name:"Инвестиционный</br>и банковский сектор",img:s(9263),links:[{name:"Сбербанк Технологии"},{name:"Intercontinental Exchange"}]},{name:"Информационная</br>безопасность",img:s(1629),links:[{name:"Dr.Web"},{name:"Avast Software"},{name:"Диджитал Секьюрити"}]},{name:"Компании, занимающиеся</br>автоматизацией бизнеса",img:s(8656),links:[{name:"T-Systems"},{name:"Luxoft"},{name:"KORUS Consulting"},{name:"Горизонты Роста"}]},{name:"Ведущие международные</br>IT‑компании",img:s(3520),links:[{name:"Microsoft"},{name:"EMC Corporation"},{name:"Интермедиа"}]},{name:"Телекоммуникационные</br>компании",img:s(5138),links:[{name:"Alcatel-Lucent"},{name:"Мегафон"},{name:"GS Group"}]}]}),computed:{...(0,n.rn)("app",["theme"]),program(){return this.$store.getters["programs/program"](this.$route.params.id)},programAreasImg(){return"dark"===this.theme?s(535):s(2344)}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(!this.scrolledHexLines){let t=document.documentElement.clientHeight,e=document.querySelector(".hex-section");if(e){let s=e.getBoundingClientRect().top+150;s<t&&s>0&&(this.scrolledHexLines=!0)}}}}},o=a,l=s(1001),c=s(3453),d=s.n(c),u=s(2102),p=s(9846),m=s(7047),h=s(2877),g=(0,l.Z)(o,i,r,!1,null,"0b39d102",null),f=g.exports;d()(g,{VCol:u.Z,VContainer:p.Z,VImg:m.Z,VRow:h.Z})},8756:function(t,e,s){t.exports=s.p+"img/Vector.0cd0533d.svg"},5425:function(t,e,s){t.exports=s.p+"img/Vector1.3da63373.svg"},7162:function(t,e,s){t.exports=s.p+"img/Vector2.15f8ca0d.svg"},8116:function(t,e,s){t.exports=s.p+"img/Vector3.8ada9399.svg"},615:function(t,e,s){t.exports=s.p+"img/Vector4.32eca419.svg"},3631:function(t,e,s){t.exports=s.p+"img/Vector5.2bff168f.svg"},535:function(t,e,s){t.exports=s.p+"img/Vector.1b1f285e.svg"},2344:function(t,e,s){t.exports=s.p+"img/VectorLight.81351552.svg"},9263:function(t,e,s){t.exports=s.p+"img/Vector.462a22d6.svg"},1629:function(t,e,s){t.exports=s.p+"img/Vector1.e6a02c26.svg"},8656:function(t,e,s){t.exports=s.p+"img/Vector2.8e5a0188.svg"},3520:function(t,e,s){t.exports=s.p+"img/Vector3.bd40a703.svg"},5138:function(t,e,s){t.exports=s.p+"img/Vector4.c1a318e0.svg"}}]);
//# sourceMappingURL=5997.66913f99.js.map