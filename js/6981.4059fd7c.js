"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6981],{7047:function(t,i,e){e.d(i,{Z:function(){return m}});var s=e(8083),r=e(2529),a=e(3325),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=e(8085),h=e(6290),d=e(1824);const l="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,a.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),i&&t.push(`url("${i}")`);const e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,i,e){if(!l||e||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,i=100){const e=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==i||setTimeout(e,i)};e()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const i=o.options.render.call(this,t),e=(0,h.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:l?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},2529:function(t,i,e){var s=e(4589),r=e(144);i["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},i=(0,s.kb)(this.height),e=(0,s.kb)(this.minHeight),r=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),n=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),r&&(t.minWidth=r),a&&(t.maxHeight=a),n&&(t.maxWidth=n),o&&(t.width=o),t}}})},6981:function(t,i,e){e.r(i),e.d(i,{default:function(){return m}});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"anim-container"},[e("div",{staticClass:"anim-blue rounded-pill"}),e("div",{staticClass:"anim-pink rounded-pill"}),e("div",{staticClass:"anim-video"},[e("iframe",{attrs:{src:"https://vk.com/video_ext.php?oid=-189033559&id=456239037&hash=c2f77b600102cde5",width:"100%",height:"100%",frameborder:"0",allow:"autoplay; encrypted-media; fullscreen; picture-in-picture"}}),e("v-img",{staticClass:"anim-video-preview",attrs:{width:"100%",height:"100%",src:"https://sun9-23.userapi.com/impf/90UKl8A03ksEX_WKQ7vHDo4c6jA3WMId3hLY5w/r1Jh-BendX8.jpg?size=800x450&quality=96&keep_aspect_ratio=1&background=000000&sign=4d2eabd5292f20d54d160c3354e3b78e&type=video_thumb"}}),e("div",{staticClass:"anim-video-btn justify-center align-center"},[e("button",{on:{click:t.playVideo}},[t._v(" ▶ ")])])],1)])},r=[],a={name:"TheStudentsVideoComponent",methods:{playVideo(){document.querySelector(".anim-video-preview").classList.add("d-none"),document.querySelector(".anim-video-btn").classList.add("d-none"),document.querySelector(".anim-video iframe").src+="&autoplay=1"}}},n=a,o=e(1001),c=e(3453),h=e.n(c),d=e(7047),l=(0,o.Z)(n,s,r,!1,null,"440238fa",null),m=l.exports;h()(l,{VImg:d.Z})}}]);
//# sourceMappingURL=6981.4059fd7c.js.map