"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7032],{7273:function(){},8582:function(){},2102:function(t,e,i){i(7273);var n=i(144),s=i(6290),r=i(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");n+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(n+=`-${i}`,n.toLowerCase()):n.toLowerCase()}}const m=new Map;e["Z"]=n.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:r}){let a="";for(const s in e)a+=String(e[s]);let o=m.get(a);if(!o){let t;for(t in o=[],d)d[t].forEach((i=>{const n=e[i],s=h(t,i,n);s&&o.push(s)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),m.set(a,o)}return t(e.tag,(0,s.ZP)(i,{class:o}),n)}})},9846:function(t,e,i){i.d(e,{Z:function(){return a}});i(8582),i(7273);var n=i(144);function s(t){return n.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:n,children:s}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:r}=n;if(r){n.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(n.staticClass+=` ${t.join(" ")}`)}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}var r=i(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:n}){let s;const{attrs:a}=i;return a&&(i.attrs={},s=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,r.ZP)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),n)}})},2877:function(t,e,i){i(7273);var n=i(144),s=i(6290),r=i(4589);const a=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return a.reduce(((i,n)=>(i[t+(0,r.jC)(n)]=e(),i)),{})}const l=t=>[...o,"baseline","stretch"].includes(t),d=c("align",(()=>({type:String,default:null,validator:l}))),h=t=>[...o,"space-between","space-around"].includes(t),m=c("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),u=c("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(d),justify:Object.keys(m),alignContent:Object.keys(u)},f={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let n=f[t];if(null!=i){if(e){const i=e.replace(t,"");n+=`-${i}`}return n+=`-${i}`,n.toLowerCase()}}const v=new Map;e["Z"]=n.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:h},...m,alignContent:{type:String,default:null,validator:p},...u},render(t,{props:e,data:i,children:n}){let r="";for(const s in e)r+=String(e[s]);let a=v.get(r);if(!a){let t;for(t in a=[],g)g[t].forEach((i=>{const n=e[i],s=y(t,i,n);s&&a.push(s)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),v.set(r,a)}return t(e.tag,(0,s.ZP)(i,{staticClass:"row",class:a}),n)}})},7047:function(t,e,i){i.d(e,{Z:function(){return m}});var n=i(8083),s=i(2529),r=i(3325),a=(0,r.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,c=i(8085),l=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,r.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:n,naturalWidth:s}=t;n||s?(this.naturalWidth=s,this.calculatedAspectRatio=s/n):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},8083:function(t,e,i){function n(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const n=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},c=new IntersectionObserver(((r=[],o)=>{var c;const l=null==(c=t._observe)?void 0:c[i.context._uid];if(!l)return;const d=r.some((t=>t.isIntersecting));!a||n.quiet&&!l.init||n.once&&!d&&!l.init||a(r,o,d),d&&n.once?s(t,e,i):l.init=!0}),o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:c},c.observe(t)}function s(t,e,i){var n;const s=null==(n=t._observe)?void 0:n[i.context._uid];s&&(s.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:n,unbind:s};e["Z"]=r},2529:function(t,e,i){var n=i(4589),s=i(144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),s=(0,n.kb)(this.minWidth),r=(0,n.kb)(this.maxHeight),a=(0,n.kb)(this.maxWidth),o=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),s&&(t.minWidth=s),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},6290:function(t,e,i){i.d(e,{ZP:function(){return a},bp:function(){return l}});var n=i(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const i of t.split(s.styleList)){let[t,r]=i.split(s.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,n._A)(t)]=r)}return e}function a(){const t={};let e,i=arguments.length;while(i--)for(e of Object.keys(arguments[i]))switch(e){case"class":case"directives":arguments[i][e]&&(t[e]=c(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=o(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=l(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]={...arguments[i][e],...t[e]};break;default:t[e]||(t[e]=arguments[i][e])}return t}function o(t,e){return t?e?(t=(0,n.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function c(t,e){return e?t&&t?(0,n.TI)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let i=2;i--;){const n=t[i];for(const t in n)n[t]&&(e[t]?e[t]=[].concat(n[t],e[t]):e[t]=n[t])}return e}},7032:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{staticClass:"pb-2 pb-md-4 pb-xl-8"},[i("CarouselComponent",{attrs:{slider:t.slider,columns:1},scopedSlots:t._u([{key:"item",fn:function(t){return[i("v-col",{attrs:{cols:"12"}},[i("div",[i("v-img",{attrs:{width:"100%",height:"400",cover:"",src:t.item.img}})],1)])]}}])})],1),i("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"40%",position:"left",top:"15px"}}),i("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"70%",position:"right",top:"20px"}}),i("div",{staticClass:"section-background py-4 py-md-8 py-xl-14"},[i("v-container",[i("div",{staticClass:"pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Анонсы ")]),i("v-row",t._l(t.items.slice(0,6),(function(t,e){return i("v-col",{key:e,attrs:{cols:"6",md:"4"}},[i("EventsAnnouncements",{attrs:{announ:t}})],1)})),1)],1)],1),i("LineComponent",{attrs:{id:"3",color:"#FF776E",width:"30%",position:"left"}}),i("LineComponent",{attrs:{id:"4",color:"#6A30F4",width:"60%",position:"left",top:"10px"}}),i("NewsComponent",{staticClass:"pb-2 pb-md-8 pb-xl-12"}),i("LineComponent",{attrs:{id:"5",color:"#FF776E",width:"60%",position:"left"}}),i("LineComponent",{attrs:{id:"6",color:"#FF0281",width:"60%",position:"right",top:"20px"}}),i("div",{staticClass:"section-background py-4 py-md-8 py-xl-14"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-2 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Мероприятия ")]),i("v-row",{staticClass:"d-flex align-stretch justify-center"},[i("v-col",{staticClass:"px-8  pr-md-0 pl-md-3",staticStyle:{"z-index":"1"},attrs:{cols:"12",md:"5"}},[i("EventsGalleryComponent",{attrs:{item:t.items[0],"height-item":t.$vuetify.breakpoint.mdAndUp?"400":"250"}})],1),i("v-col",{staticClass:"pl-md-0",staticStyle:{"z-index":"0"},attrs:{cols:"12",md:"7"}},[t.$vuetify.breakpoint.mdAndUp?i("div",{staticClass:"d-flex flex-wrap align-content-space-between",staticStyle:{height:"400px"}},t._l(6,(function(e){return i("div",{key:e,staticStyle:{"padding-left":"20px"},style:{width:1===e||6===e?"44%":"28%"}},[i("EventsGalleryComponent",{attrs:{item:t.items[e],"type-item":1===e||6===e,"height-item":"190"}})],1)})),0):i("div",{staticClass:"d-flex flex-wrap justify-space-between"},t._l(4,(function(e){return i("div",{key:e,class:1===e?"events-item-1":4===e?"events-item-2":"",style:{width:1===e||4===e?"47%":"45%",height:"200px"}},[i("EventsGalleryComponent",{attrs:{item:t.items[e],"type-item":1===e||4===e}})],1)})),0)])],1)],1)],1),i("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"35%",position:"left",top:"-10px"}}),i("LineComponent",{attrs:{id:"8",color:"#6A30F4",width:"75%",position:"right",top:"-5px"}})],1)},s=[],r={name:"EventsView",components:{LineComponent:()=>i.e(4022).then(i.bind(i,4022)),EventsGalleryComponent:()=>i.e(1516).then(i.bind(i,1516)),EventsAnnouncements:()=>i.e(3361).then(i.bind(i,3361)),CarouselComponent:()=>Promise.all([i.e(9256),i.e(5640),i.e(2777)]).then(i.bind(i,5640)),NewsComponent:()=>i.e(2772).then(i.bind(i,2772))},data:()=>({slider:[{img:i(9582)},{img:i(9582)},{img:i(9582)}],items:[{date:new Date,name:"Название мероприятия",place:"Место",month:"января",id:1,img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{date:new Date,name:"Название мероприятия",place:"Место",month:"января",img:i(9582),items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]}]})},a=r,o=i(1001),c=i(3453),l=i.n(c),d=i(2102),h=i(9846),m=i(7047),p=i(2877),u=(0,o.Z)(a,n,s,!1,null,"f7140518",null),g=u.exports;l()(u,{VCol:d.Z,VContainer:h.Z,VImg:m.Z,VRow:p.Z})},9582:function(t,e,i){t.exports=i.p+"img/unsplash_JjjSPPzzpkU.41e7d360.png"}}]);
//# sourceMappingURL=7032.230975b8.js.map