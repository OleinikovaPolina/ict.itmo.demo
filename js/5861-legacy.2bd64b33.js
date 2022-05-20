"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5861,5695],{27852:function(t,e,i){var n=i(82109),r=i(1702),s=i(31236).f,o=i(17466),a=i(41340),c=i(3929),l=i(84488),d=i(84964),u=i(31913),h=r("".endsWith),p=r("".slice),m=Math.min,v=d("endsWith"),g=!u&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var e=a(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,r=void 0===i?n:m(o(i),n),s=a(t);return h?h(e,s,r):p(e,r-s.length,r)===s}})},29253:function(t,e,i){var n=i(82109),r=i(14230),s=i(43429);n({target:"String",proto:!0,forced:s("fixed")},{fixed:function(){return r(this,"tt","","")}})},97047:function(t,e,i){i.d(e,{Z:function(){return p}});var n=i(9726),r=(i(9653),i(69600),i(27852),i(23157),i(68083)),s=i(42529),o=i(73325),a=(0,o.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=i(48085),d=i(76290),u=i(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,p=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=t.naturalHeight,s=t.naturalWidth;r||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,d.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},68083:function(t,e,i){var n=i(9726);i(41539);function r(t,e,i){if("undefined"!==typeof window&&"IntersectionObserver"in window){var r=e.modifiers||{},o=e.value,a="object"===(0,n.Z)(o)?o:{handler:o,options:{}},c=a.handler,l=a.options,d=new IntersectionObserver((function(){var n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,l=null==(n=t._observe)?void 0:n[i.context._uid];if(l){var d=o.some((function(t){return t.isIntersecting}));!c||r.quiet&&!l.init||r.once&&!d&&!l.init||c(o,a,d),d&&r.once?s(t,e,i):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:d},d.observe(t)}}function s(t,e,i){var n,r=null==(n=t._observe)?void 0:n[i.context._uid];r&&(r.observer.unobserve(t),delete t._observe[i.context._uid])}var o={inserted:r,unbind:s};e["Z"]=o},46286:function(t,e,i){i.d(e,{Z:function(){return k}});i(68309),i(92222),i(9653);var n=i(4589),r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}var c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,r=0;if(!a(t)){var s=e.getBoundingClientRect(),c=o(t)?t.touches[t.touches.length-1]:t;n=c.clientX-s.left,r=c.clientY-s.top}var l=0,d=.3;e._ripple&&e._ripple.circle?(d=.15,l=e.clientWidth/2,l=i.center?l:l+Math.sqrt(Math.pow(n-l,2)+Math.pow(r-l,2))/4):l=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var u="".concat((e.clientWidth-2*l)/2,"px"),h="".concat((e.clientHeight-2*l)/2,"px"),p=i.center?u:"".concat(n-l,"px"),m=i.center?h:"".concat(r-l,"px");return{radius:l,scale:d,x:p,y:m,centerX:u,centerY:h}},l={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),r=document.createElement("span");n.appendChild(r),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var o=c(t,e,i),a=o.radius,l=o.scale,d=o.x,u=o.y,h=o.centerX,p=o.centerY,m="".concat(2*a,"px");r.className="v-ripple__animation",r.style.width=m,r.style.height=m,e.appendChild(n);var v=window.getComputedStyle(e);v&&"static"===v.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,"translate(".concat(d,", ").concat(u,") scale3d(").concat(l,",").concat(l,",").concat(l,")")),r.dataset.activated=String(performance.now()),setTimeout((function(){r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,"translate(".concat(h,", ").concat(p,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),r=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),r)}}}}};function d(t){return"undefined"===typeof t||!!t}function u(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){l.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),r)}else l.show(t,i,e)}}function h(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){h(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var m=!1;function v(t){m||t.keyCode!==n.Do.enter&&t.keyCode!==n.Do.space||(m=!0,u(t))}function g(t){m=!1,h(t)}function f(t){!0===m&&(m=!1,h(t))}function _(t,e,i){var n=d(e.value);n||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),n&&!i?(t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",h),t.addEventListener("mousedown",u),t.addEventListener("mouseup",h),t.addEventListener("mouseleave",h),t.addEventListener("keydown",v),t.addEventListener("keyup",g),t.addEventListener("blur",f),t.addEventListener("dragstart",h,{passive:!0})):!n&&i&&b(t)}function b(t){t.removeEventListener("mousedown",u),t.removeEventListener("touchstart",u),t.removeEventListener("touchend",h),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",h),t.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h),t.removeEventListener("keydown",v),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",h),t.removeEventListener("blur",f)}function y(t,e,i){_(t,e,!1)}function S(t){delete t._ripple,b(t)}function w(t,e){if(e.value!==e.oldValue){var i=d(e.oldValue);_(t,e,i)}}var C={bind:y,unbind:S,update:w},k=C},42529:function(t,e,i){i(9653);var n=i(4589),r=i(20144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),r=(0,n.kb)(this.minWidth),s=(0,n.kb)(this.maxHeight),o=(0,n.kb)(this.maxWidth),a=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},93536:function(t,e,i){i.d(e,{d:function(){return o}});var n=i(20144),r=i(4589),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.Z.extend({name:"positionable",props:t.length?(0,r.ji)(s,t):s})}e["Z"]=o()},96257:function(t,e,i){i.d(e,{J:function(){return c},f:function(){return a}});var n=i(23796),r=(i(92222),i(20144)),s=i(71824);function o(t,e){return function(){return(0,s.Kd)("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,i){var s=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return r.Z.extend({name:"registrable-inject",inject:(0,n.Z)({},t,{default:s})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.Z.extend({name:"registrable-provide",provide:function(){return(0,n.Z)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},85695:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-arrow"},[0===t.block.type?n("div",{staticClass:"ql-editor pa-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.block.content.text)}}):t._e(),1===t.block.type?n("v-row",t._l(t.block.content.blocks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"6"}},[n("BaseNewsBlocks",{attrs:{block:t}})],1)})),1):t._e(),2===t.block.type?n("div",{staticStyle:{position:"relative"}},[n("v-img",{attrs:{width:"100%",src:t.block.content.imgName.croppie}}),n("div",{staticClass:"text-body-1 pt-2",staticStyle:{opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")]),t.edit?n("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(e){return t.$emit("beforeCropInsert")}}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1):t._e()],1):t._e(),3===t.block.type?n("div",[n("CarouselComponent",{attrs:{slider:t.block.content.imagesName,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"pa-2"},[n("img",{class:"carousel-img-"+t.block.id,staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item.croppie},on:{load:function(i){return t.getHeight(e.item.croppie)}}})])])]}},{key:"subtitle",fn:function(){return[n("div",{staticClass:"text-body-1 pl-2",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")])]},proxy:!0},t.edit?{key:"index",fn:function(e){return[n("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(i){return t.$emit("beforeCropMultipleInsertOne",t.block,e.index)}}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}:null],null,!0)})],1):t._e(),4===t.block.type?n("div",[n("div",{staticClass:"d-flex align-start"},[n("div",[n("v-img",{attrs:{width:"50",height:"50",src:i(33336)}})],1),n("div",{staticClass:"pl-4"},[t._v(" "+t._s(t.block.content.text)+" ")])]),n("div",{staticClass:"text-end font-weight-bold",staticStyle:{color:"#2DC0C5"}},[t._v(" "+t._s(t.block.content.author)+" ")])]):t._e(),5===t.block.type?n("div",[n("div",{staticClass:"text-h6 text-sm-h5 default-color"},[t._v(" "+t._s(t.block.content.text)+" ")])]):t._e()],1)},r=[],s=(i(41539),i(78783),i(33948),i(54747),{name:"BaseNewsBlocks",components:{CarouselComponent:function(){return Promise.all([i.e(8722),i.e(2033)]).then(i.bind(i,48722))}},props:{block:{type:Object,default:null},edit:{type:Boolean,default:!1}},emits:["beforeCropInsert","beforeCropMultipleInsertOne"],methods:{getHeight:function(t){var e=this;if(t){var i=new Image;i.onload=function(){var t=i.height;document.querySelectorAll(".carousel-img-"+e.block.id).length&&(t=Math.min(t,document.querySelectorAll(".carousel-img-"+e.block.id)[0].height),document.querySelectorAll(".carousel-img-"+e.block.id).forEach((function(e){return e.height=t})))},i.src=t}}}}),o=s,a=i(1001),c=i(43453),l=i.n(c),d=i(680),u=i(82102),h=i(96428),p=i(97047),m=i(62877),v=(0,a.Z)(o,n,r,!1,null,null,null),g=v.exports;l()(v,{VBtn:d.Z,VCol:u.Z,VIcon:h.Z,VImg:p.Z,VRow:m.Z})},33336:function(t,e,i){t.exports=i.p+"img/bxs_quote-alt-left.c5a4e697.svg"}}]);
//# sourceMappingURL=5861-legacy.2bd64b33.js.map