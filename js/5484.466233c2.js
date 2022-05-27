"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5484,9956],{7047:function(t,i,e){e.d(i,{Z:function(){return m}});var s=e(8083),r=e(2529),a=e(3325),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=n,o=e(8085),h=e(6290),l=e(1824);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,a.Z)(c,o.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),i&&t.push(`url("${i}")`);const e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,i,e){if(!d||e||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,l.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,i=100){const e=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==i||setTimeout(e,i)};e()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const i=c.options.render.call(this,t),e=(0,h.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},2529:function(t,i,e){var s=e(4589),r=e(144);i["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},i=(0,s.kb)(this.height),e=(0,s.kb)(this.minHeight),r=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),n=(0,s.kb)(this.maxWidth),c=(0,s.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),r&&(t.minWidth=r),a&&(t.maxHeight=a),n&&(t.maxWidth=n),c&&(t.width=c),t}}})},5484:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"useful-block pa-3",class:t.background},[e("div",{staticClass:"text-center pb-2 useful-block-title",domProps:{innerHTML:t._s(t.item.name)}}),e("v-row",[e("v-col",{staticClass:"pr-0",attrs:{cols:"3"}},[e("v-img",{attrs:{width:"100%",height:"100%","max-height":"100",contain:"",src:t.item.img}})],1),e("v-col",{staticClass:"pl-2",attrs:{cols:"9"}},[e("ul",{staticClass:"ict-ul"},t._l(t.item.links,(function(i,s){return e("li",{key:s},[i.href?e("a",{class:i.href?"link-arrow mr-0":"",attrs:{href:i.href}},[t._v(t._s(i.name)+" ")]):t._e(),i.href?t._e():e("span",{staticClass:"subtitle-color"},[t._v(" "+t._s(i.name)+" ")])])})),0)])],1)],1)},r=[],a={name:"BaseUlBlock",props:{item:{type:Object,default:null},background:{type:String,default:"item-background"}}},n=a,c=e(1001),o=e(3453),h=e.n(o),l=e(2102),d=e(7047),m=e(2877),g=(0,c.Z)(n,s,r,!1,null,"2bf6c367",null),u=g.exports;h()(g,{VCol:l.Z,VImg:d.Z,VRow:m.Z})}}]);
//# sourceMappingURL=5484.466233c2.js.map