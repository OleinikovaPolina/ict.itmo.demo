"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9923,4489],{27852:function(t,e,i){var r=i(82109),n=i(1702),s=i(31236).f,a=i(17466),o=i(41340),c=i(3929),l=i(84488),h=i(84964),d=i(31913),u=n("".endsWith),m=n("".slice),g=Math.min,f=h("endsWith"),v=!d&&!f&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!v&&!f},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,r=e.length,n=void 0===i?r:g(a(i),r),s=o(t);return u?u(e,s,n):m(e,n-s.length,n)===s}})},97047:function(t,e,i){i.d(e,{Z:function(){return m}});var r=i(9726),n=(i(9653),i(69600),i(27852),i(23157),i(68083)),s=i(42529),a=i(73325),o=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i(48085),h=i(76290),d=i(71824),u="undefined"!==typeof window&&"IntersectionObserver"in window,m=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,r.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=t.naturalHeight,s=t.naturalWidth;n||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(r,i)};r()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},68083:function(t,e,i){var r=i(9726);i(41539);function n(t,e,i){if("undefined"!==typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},a=e.value,o="object"===(0,r.Z)(a)?a:{handler:a,options:{}},c=o.handler,l=o.options,h=new IntersectionObserver((function(){var r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=null==(r=t._observe)?void 0:r[i.context._uid];if(l){var h=a.some((function(t){return t.isIntersecting}));!c||n.quiet&&!l.init||n.once&&!h&&!l.init||c(a,o,h),h&&n.once?s(t,e,i):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:h},h.observe(t)}}function s(t,e,i){var r,n=null==(r=t._observe)?void 0:r[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}var a={inserted:n,unbind:s};e["Z"]=a},42529:function(t,e,i){i(9653);var r=i(4589),n=i(20144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,r.kb)(this.height),i=(0,r.kb)(this.minHeight),n=(0,r.kb)(this.minWidth),s=(0,r.kb)(this.maxHeight),a=(0,r.kb)(this.maxWidth),o=(0,r.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),s&&(t.maxHeight=s),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},9923:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hex-container"},[t._l(t.hexArray,(function(e,r){return i("div",{key:r,staticClass:"hex-block",class:"hex-"+r},[i("div",{staticClass:"hex"},[i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 208 268",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_dd_1_5122"+r+")"}},[i("path",{attrs:{d:"M91.6282 17.3119C99.2839 12.896 108.716 12.896 116.372 17.3119L181.628 54.9518C189.284 59.3676 194 67.5284 194 76.36V191.64C194 200.472 189.284 208.632 181.628 213.048L116.372 250.688C108.716 255.104 99.2839 255.104 91.6282 250.688L26.3718 213.048C18.7161 208.632 14 200.472 14 191.64V76.36C14 67.5284 18.7161 59.3676 26.3718 54.9518L91.6282 17.3119Z",fill:"dark"===t.theme?"#070C2D":"white"}}),i("path",{attrs:{d:"M92.3777 18.6112C99.5695 14.4629 108.43 14.4629 115.622 18.6112L180.879 56.2512C188.07 60.3994 192.5 68.065 192.5 76.36V191.64C192.5 199.935 188.07 207.601 180.879 211.749L115.622 249.389C108.43 253.537 99.5695 253.537 92.3777 249.389L27.1213 211.749C19.9296 207.601 15.5 199.935 15.5 191.64V76.36C15.5 68.065 19.9296 60.3994 27.1213 56.2512L92.3777 18.6112Z",stroke:"dark"===t.theme?"#070C2D":"white","stroke-width":"3"}})]),i("defs",[i("filter",{attrs:{id:"filter0_dd_1_5122"+r,x:"0",y:"0",width:"208",height:"268",filterUnits:"userSpaceOnUse","color-interpolation-filters":"dark"===t.theme?"white":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),i("feOffset"),i("feGaussianBlur",{attrs:{stdDeviation:"7"}}),i("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),i("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0.0119097 0 0 0 0 0.263132 0 0 0 0 0.408333 0 0 0 0.1 0"}}),i("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_5122"}}),i("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),i("feOffset"),i("feGaussianBlur",{attrs:{id:"ict-feGaussianBlur-"+r,stdDeviation:"2.5"}}),i("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),i("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.67451 0 0 0 0.2 0"}}),i("feBlend",{attrs:{mode:"normal",in2:"effect1_dropShadow_1_5122",result:""}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_1_5122",result:"shape"}})],1)])])]),i("div",{staticClass:"hex-content text-center d-flex flex-column align-center justify-center",on:{mouseout:function(e){return t.hexHoverNot(r)},mouseover:function(e){return t.hexHover(r)}}},[i("v-img",{staticClass:"mx-auto hex-img",attrs:{width:"100%",contain:"",src:e.img}}),i("div",{staticClass:"hex-text subtitle-color"},[t._v(" "+t._s(e.text)+" ")])],1)])})),i("div",{staticClass:"hex-btn"},[i("base-button",{attrs:{link:t.link,"small-btn":!0}})],1)],2)},n=[],s=(i(41539),i(78783),i(33948),i(54747),i(20629)),a={name:"BaseHexagonContainer",components:{BaseButton:function(){return i.e(7625).then(i.bind(i,37625))}},props:{hexArray:{type:Array,default:null},link:{type:String,default:"/"}},data:function(){return{scrolled:!1}},computed:(0,s.rn)("app",["theme"]),watch:{scrolled:function(t){t&&document.querySelectorAll(".hex-container").forEach((function(t){t.classList.add("active-animation"),setTimeout((function(){t.classList.add("active-animation--finished")}),3e3)}))}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.querySelector(".hex-container"),e=t.getBoundingClientRect(),i=e.bottom,r=document.documentElement.clientHeight;this.scrolled||(this.scrolled=i<r&&i>0)},hexHover:function(t){var e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","10")},hexHoverNot:function(t){var e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","2.5")}}},o=a,c=i(1001),l=i(43453),h=i.n(l),d=i(97047),u=(0,c.Z)(o,r,n,!1,null,"026fb4ac",null),m=u.exports;h()(u,{VImg:d.Z})}}]);
//# sourceMappingURL=9923-legacy.b15b87c5.js.map