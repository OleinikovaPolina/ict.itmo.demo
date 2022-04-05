"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2047,9314],{7047:function(t,s,i){i.d(s,{Z:function(){return m}});var e=i(8083),a=i(2529),r=i(3325),n=(0,r.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=i(8085),h=i(6290),l=i(1824);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,r.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:e.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],s=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),s&&t.push(`url("${s}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,s,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,l.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,s=100){const i=()=>{const{naturalHeight:e,naturalWidth:a}=t;e||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/e):t.complete||!this.isLoading||this.hasError||null==s||setTimeout(i,s)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const s=o.options.render.call(this,t),i=(0,h.ZP)(s.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return s.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(s.tag,i,s.children)}})},2047:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("router-link",{staticClass:"text-decoration-none",attrs:{to:"/new/"+t.news.id}},[i("v-img",{staticClass:"mb-4",attrs:{height:t.$vuetify.breakpoint.xl?"300":t.$vuetify.breakpoint.smAndUp?"200":"160",width:"100%",src:t.news.img}}),i("div",{staticClass:"news-subtitle mb-1"},[t._v(" "+t._s(t.news.date)+" ")]),i("div",{staticClass:"news-name subtitle-color"},[t._v(" "+t._s(t.news.name)+" ")]),i("div",{staticClass:"d-flex flex-wrap pt-md-2"},t._l(t.news.items,(function(t,s){return i("BaseChip",{key:s,staticClass:"mt-2",attrs:{item:t}})})),1)],1)},a=[],r={name:"BaseNews",components:{BaseChip:()=>i.e(5178).then(i.bind(i,5178))},props:{news:{type:Object,default:null}}},n=r,o=i(1001),c=i(3453),h=i.n(c),l=i(7047),d=(0,o.Z)(n,e,a,!1,null,"13c100ab",null),m=d.exports;h()(d,{VImg:l.Z})}}]);
//# sourceMappingURL=2047.edd7c700.js.map