"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9923,4489],{7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),r=i(2529),a=i(3325),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=i(8085),l=i(6290),h=i(1824);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,a.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},8083:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},a=e.value,{handler:n,options:o}="object"===typeof a?a:{handler:a,options:{}},c=new IntersectionObserver(((a=[],o)=>{var c;const l=null==(c=t._observe)?void 0:c[i.context._uid];if(!l)return;const h=a.some((t=>t.isIntersecting));!n||s.quiet&&!l.init||s.once&&!h&&!l.init||n(a,o,h),h&&s.once?r(t,e,i):l.init=!0}),o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,i){var s;const r=null==(s=t._observe)?void 0:s[i.context._uid];r&&(r.observer.unobserve(t),delete t._observe[i.context._uid])}const a={inserted:s,unbind:r};e["Z"]=a},2529:function(t,e,i){var s=i(4589),r=i(144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),r=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),n=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),a&&(t.maxHeight=a),n&&(t.maxWidth=n),o&&(t.width=o),t}}})},9923:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hex-container"},[t._l(t.hexArray,(function(e,s){return i("div",{key:s,staticClass:"hex-block",class:"hex-"+s},[i("div",{staticClass:"hex"},[i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 208 268",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_dd_1_5122"+s+")"}},[i("path",{attrs:{d:"M91.6282 17.3119C99.2839 12.896 108.716 12.896 116.372 17.3119L181.628 54.9518C189.284 59.3676 194 67.5284 194 76.36V191.64C194 200.472 189.284 208.632 181.628 213.048L116.372 250.688C108.716 255.104 99.2839 255.104 91.6282 250.688L26.3718 213.048C18.7161 208.632 14 200.472 14 191.64V76.36C14 67.5284 18.7161 59.3676 26.3718 54.9518L91.6282 17.3119Z",fill:"dark"===t.theme?"#070C2D":"white"}}),i("path",{attrs:{d:"M92.3777 18.6112C99.5695 14.4629 108.43 14.4629 115.622 18.6112L180.879 56.2512C188.07 60.3994 192.5 68.065 192.5 76.36V191.64C192.5 199.935 188.07 207.601 180.879 211.749L115.622 249.389C108.43 253.537 99.5695 253.537 92.3777 249.389L27.1213 211.749C19.9296 207.601 15.5 199.935 15.5 191.64V76.36C15.5 68.065 19.9296 60.3994 27.1213 56.2512L92.3777 18.6112Z",stroke:"dark"===t.theme?"#070C2D":"white","stroke-width":"3"}})]),i("defs",[i("filter",{attrs:{id:"filter0_dd_1_5122"+s,x:"0",y:"0",width:"208",height:"268",filterUnits:"userSpaceOnUse","color-interpolation-filters":"dark"===t.theme?"white":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),i("feOffset"),i("feGaussianBlur",{attrs:{stdDeviation:"7"}}),i("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),i("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0.0119097 0 0 0 0 0.263132 0 0 0 0 0.408333 0 0 0 0.1 0"}}),i("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_5122"}}),i("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),i("feOffset"),i("feGaussianBlur",{attrs:{id:"ict-feGaussianBlur-"+s,stdDeviation:"2.5"}}),i("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),i("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.67451 0 0 0 0.2 0"}}),i("feBlend",{attrs:{mode:"normal",in2:"effect1_dropShadow_1_5122",result:""}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_1_5122",result:"shape"}})],1)])])]),i("div",{staticClass:"hex-content text-center d-flex flex-column align-center justify-center",on:{mouseout:function(e){return t.hexHoverNot(s)},mouseover:function(e){return t.hexHover(s)}}},[i("v-img",{staticClass:"mx-auto hex-img",attrs:{width:"100%",contain:"",src:e.img}}),i("div",{staticClass:"hex-text subtitle-color"},[t._v(" "+t._s(e.text)+" ")])],1)])})),i("div",{staticClass:"hex-btn"},[i("base-button",{attrs:{link:t.link,"small-btn":!0}})],1)],2)},r=[],a=i(629),n={name:"BaseHexagonContainer",components:{BaseButton:()=>i.e(7625).then(i.bind(i,7625))},props:{hexArray:{type:Array,default:null},link:{type:String,default:"/"}},data:()=>({scrolled:!1}),computed:(0,a.rn)("app",["theme"]),watch:{scrolled(t){t&&document.querySelectorAll(".hex-container").forEach((function(t){t.classList.add("active-animation"),setTimeout((()=>{t.classList.add("active-animation--finished")}),3e3)}))}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let t=document.querySelector(".hex-container"),{bottom:e}=t.getBoundingClientRect(),i=document.documentElement.clientHeight;this.scrolled||(this.scrolled=e<i&&e>0)},hexHover(t){const e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","10")},hexHoverNot(t){const e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","2.5")}}},o=n,c=i(1001),l=i(3453),h=i.n(l),d=i(7047),u=(0,c.Z)(o,s,r,!1,null,"026fb4ac",null),m=u.exports;h()(u,{VImg:d.Z})}}]);
//# sourceMappingURL=9923.040d0143.js.map