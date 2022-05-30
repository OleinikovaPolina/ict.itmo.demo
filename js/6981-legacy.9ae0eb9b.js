"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6981],{27852:function(t,i,e){var s=e(82109),n=e(1702),r=e(31236).f,a=e(17466),o=e(41340),c=e(3929),h=e(84488),d=e(84964),l=e(31913),u=n("".endsWith),m=n("".slice),g=Math.min,p=d("endsWith"),v=!l&&!p&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var i=o(h(this));c(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,n=void 0===e?s:g(a(e),s),r=o(t);return u?u(i,r,n):m(i,n-r.length,n)===r}})},97047:function(t,i,e){e.d(i,{Z:function(){return m}});var s=e(9726),n=(e(9653),e(69600),e(27852),e(23157),e(68083)),r=e(42529),a=e(73325),o=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,h=e(48085),d=e(76290),l=e(71824),u="undefined"!==typeof window&&"IntersectionObserver"in window,m=(0,a.Z)(c,h.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!u||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,l.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(i.naturalWidth=r,i.calculatedAspectRatio=r/n):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=c.options.render.call(this,t),e=(0,d.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},42529:function(t,i,e){e(9653);var s=e(4589),n=e(20144);i["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},i=(0,s.kb)(this.height),e=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),a=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},46981:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"anim-container"},[e("div",{staticClass:"anim-blue rounded-pill"}),e("div",{staticClass:"anim-pink rounded-pill"}),e("div",{staticClass:"anim-video"},[e("iframe",{attrs:{src:"https://vk.com/video_ext.php?oid=-189033559&id=456239037&hash=c2f77b600102cde5",width:"100%",height:"100%",frameborder:"0",allow:"autoplay; encrypted-media; fullscreen; picture-in-picture"}}),e("v-img",{staticClass:"anim-video-preview",attrs:{width:"100%",height:"100%",src:"https://sun9-23.userapi.com/impf/90UKl8A03ksEX_WKQ7vHDo4c6jA3WMId3hLY5w/r1Jh-BendX8.jpg?size=800x450&quality=96&keep_aspect_ratio=1&background=000000&sign=4d2eabd5292f20d54d160c3354e3b78e&type=video_thumb"}}),e("div",{staticClass:"anim-video-btn justify-center align-center"},[e("button",{on:{click:t.playVideo}},[t._v(" ▶ ")])])],1)])},n=[],r={name:"TheStudentsVideoComponent",methods:{playVideo:function(){document.querySelector(".anim-video-preview").classList.add("d-none"),document.querySelector(".anim-video-btn").classList.add("d-none"),document.querySelector(".anim-video iframe").src+="&autoplay=1"}}},a=r,o=e(1001),c=e(43453),h=e.n(c),d=e(97047),l=(0,o.Z)(a,s,n,!1,null,"440238fa",null),u=l.exports;h()(l,{VImg:d.Z})}}]);
//# sourceMappingURL=6981-legacy.9ae0eb9b.js.map