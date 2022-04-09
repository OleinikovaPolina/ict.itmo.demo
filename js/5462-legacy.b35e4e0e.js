"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5462],{27852:function(t,i,e){var n=e(82109),r=e(1702),s=e(31236).f,a=e(17466),o=e(41340),c=e(3929),l=e(84488),d=e(84964),u=e(31913),h=r("".endsWith),g=r("".slice),m=Math.min,p=d("endsWith"),f=!u&&!p&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!p},{endsWith:function(t){var i=o(l(this));c(t);var e=arguments.length>1?arguments[1]:void 0,n=i.length,r=void 0===e?n:m(a(e),n),s=o(t);return h?h(i,s,r):g(i,r-s.length,r)===s}})},68582:function(){},99846:function(t,i,e){e.d(i,{Z:function(){return a}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var n=e(20144);function r(t){return n.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,e){var n=e.props,r=e.data,s=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var a=r.attrs;if(a){r.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var i=a[t];return t.startsWith("data-")?(r.attrs[t]=i,!1):i||"string"===typeof i}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),i(n.tag,r,s)}})}var s=e(76290),a=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var e,n=i.props,r=i.data,a=i.children,o=r.attrs;return o&&(r.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var i=o[t];return t.startsWith("data-")?(r.attrs[t]=i,!1):i||"string"===typeof i}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,(0,s.ZP)(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),a)}})},62877:function(t,i,e){var n=e(23796),r=e(4367),s=(e(41539),e(26699),e(32023),e(92222),e(47941),e(74916),e(15306),e(51532),e(78783),e(33948),e(54747),e(17273),e(20144)),a=e(76290),o=e(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,i){return c.reduce((function(e,n){return e[t+(0,o.jC)(n)]=i(),e}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),g=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:g}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},f=d("alignContent",(function(){return{type:String,default:null,validator:p}})),v={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(f)},S={align:"align",justify:"justify",alignContent:"align-content"};function y(t,i,e){var n=S[t];if(null!=e){if(i){var r=i.replace(t,"");n+="-".concat(r)}return n+="-".concat(e),n.toLowerCase()}}var b=new Map;i["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:g}},m),{},{alignContent:{type:String,default:null,validator:p}},f),render:function(t,i){var e=i.props,r=i.data,s=i.children,o="";for(var c in e)o+=String(e[c]);var l=b.get(o);return l||function(){var t,i;for(i in l=[],v)v[i].forEach((function(t){var n=e[t],r=y(i,t,n);r&&l.push(r)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},(0,n.Z)(t,"align-".concat(e.align),e.align),(0,n.Z)(t,"justify-".concat(e.justify),e.justify),(0,n.Z)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),b.set(o,l)}(),t(e.tag,(0,a.ZP)(r,{staticClass:"row",class:l}),s)}})},97047:function(t,i,e){e.d(i,{Z:function(){return g}});var n=e(9726),r=(e(9653),e(69600),e(27852),e(23157),e(68083)),s=e(42529),a=e(73325),o=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=e(48085),d=e(76290),u=e(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,g=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!h||e||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=t.naturalHeight,s=t.naturalWidth;r||s?(i.naturalWidth=s,i.calculatedAspectRatio=s/r):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=c.options.render.call(this,t),e=(0,d.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},68083:function(t,i,e){var n=e(9726);e(41539);function r(t,i,e){if("undefined"!==typeof window&&"IntersectionObserver"in window){var r=i.modifiers||{},a=i.value,o="object"===(0,n.Z)(a)?a:{handler:a,options:{}},c=o.handler,l=o.options,d=new IntersectionObserver((function(){var n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=null==(n=t._observe)?void 0:n[e.context._uid];if(l){var d=a.some((function(t){return t.isIntersecting}));!c||r.quiet&&!l.init||r.once&&!d&&!l.init||c(a,o,d),d&&r.once?s(t,i,e):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[e.context._uid]={init:!1,observer:d},d.observe(t)}}function s(t,i,e){var n,r=null==(n=t._observe)?void 0:n[e.context._uid];r&&(r.observer.unobserve(t),delete t._observe[e.context._uid])}var a={inserted:r,unbind:s};i["Z"]=a},42529:function(t,i,e){e(9653);var n=e(4589),r=e(20144);i["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},i=(0,n.kb)(this.height),e=(0,n.kb)(this.minHeight),r=(0,n.kb)(this.minWidth),s=(0,n.kb)(this.maxHeight),a=(0,n.kb)(this.maxWidth),o=(0,n.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),r&&(t.minWidth=r),s&&(t.maxHeight=s),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},45563:function(t,i,e){t.exports=e.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=5462-legacy.b35e4e0e.js.map