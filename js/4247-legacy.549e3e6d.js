"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4247],{27852:function(t,e,i){var r=i(82109),n=i(1702),s=i(31236).f,a=i(17466),o=i(41340),c=i(3929),l=i(84488),u=i(84964),h=i(31913),d=n("".endsWith),p=n("".slice),g=Math.min,m=u("endsWith"),f=!h&&!m&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!f&&!m},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,r=e.length,n=void 0===i?r:g(a(i),r),s=o(t);return d?d(e,s,n):p(e,n-s.length,n)===s}})},97047:function(t,e,i){i.d(e,{Z:function(){return p}});var r=i(9726),n=(i(9653),i(69600),i(27852),i(23157),i(68083)),s=i(42529),a=i(73325),o=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i(48085),u=i(76290),h=i(71824),d="undefined"!==typeof window&&"IntersectionObserver"in window,p=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,r.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,h.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=t.naturalHeight,s=t.naturalWidth;n||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(r,i)};r()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},90624:function(t,e,i){i.d(e,{Z:function(){return a}});i(9653),i(92222);var r=i(68083),n=i(46952),s=i(4589),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,s.kb)(this.calculatedSize),width:(0,s.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},22100:function(t,e){e["Z"]={data:function(){return{dialogCroppieDataImg:"",dialogCroppie:!1,dialogCroppieOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}},methods:{changeDialogCroppie:function(t){this.dialogCroppie=t},beforeCrop:function(t,e,i,r){var n=this;this.form[t]=r;var s=new FileReader;s.onload=function(t){n.dialogCroppieDataImg=t.target.result},s.readAsDataURL(r),this.dialogCroppieOptions={title:i,size:e,enableResize:{w:!1,h:!1}},this.changeCroppie=function(e){n.form[t+"Croppie"]=e[0],n.form[t+"Blob"]=e[1]},this.dialogCroppie=!0},changeCroppie:function(){},beforeCropInsert:function(t){this.dialogCroppieDataImg=t.content.imgName.original,this.dialogCroppieOptions={title:"Изображение",size:{w:800,h:350},enableResize:{w:!0,h:!0}},this.changeCroppie=function(e){t.content.imgName.croppie=e[0],t.content.imgName.blob=e[1]},this.dialogCroppie=!0}}}},19522:function(t,e,i){var r=i(16198);i(92222),i(41539),i(54747),i(35666);e["Z"]={data:function(){return{dialogCroppieMultipleEdit:!1,dialogCroppieMultipleDataImg:null,dialogCroppieMultiple:!1}},methods:{changeDialogCroppieMultiple:function(t){this.dialogCroppieMultiple=t},beforeCropMultiple:function(t,e,i){var n=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=[],a=0;case 2:if(!(a<i.length)){e.next=9;break}return o=i[a],e.next=6,n.onloadReader(o).then(function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.push({original:e.target.result,croppie:e.target.result,blob:null});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:a++,e.next=2;break;case 9:n.dialogCroppieMultipleDataImg=s,n.form[t]=n.form[t].concat(i),n.dialogCroppieMultipleEdit=!1,n.changeCroppieMultiple=function(e){e.forEach((function(t,e){s[e].croppie=t[0],s[e].blob=t[1]})),n.form[t+"ImagesNames"]=n.form[t+"ImagesNames"].concat(s),console.log(n.form)},n.dialogCroppieMultiple=!0;case 14:case"end":return e.stop()}}),e)})))()},beforeCropMultipleOne:function(t,e){var i=this;return(0,r.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=[i.form[t+"ImagesNames"][e]],i.dialogCroppieMultipleDataImg=n,i.dialogCroppieMultipleEdit=!0,i.changeCroppieMultiple=function(r){n[0].croppie=r[0][0],n[0].blob=r[0][1],i.form[t+"ImagesNames"][e]=n[0]},i.dialogCroppieMultiple=!0;case 5:case"end":return r.stop()}}),r)})))()},changeCroppieMultiple:function(){},onloadReader:function(t){return new Promise((function(e,i){var r=new FileReader;r.onload=function(t){return e(t)},r.onerror=i,r.readAsDataURL(t)}))},beforeCropMultipleInsert:function(t,e){var i=this;return(0,r.Z)(regeneratorRuntime.mark((function n(){var s,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=[],a=0;case 2:if(!(a<e.length)){n.next=9;break}return o=e[a],n.next=6,i.onloadReader(o).then(function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.push({original:e.target.result,croppie:e.target.result,blob:null});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:a++,n.next=2;break;case 9:i.dialogCroppieMultipleDataImg=s,t.content.images=t.content.images.concat(e),i.dialogCroppieMultipleEdit=!1,i.changeCroppieMultiple=function(e){e.forEach((function(t,e){s[e].croppie=t[0],s[e].blob=t[1]})),t.content.imagesName=t.content.imagesName.concat(s)},i.dialogCroppieMultiple=!0;case 14:case"end":return n.stop()}}),n)})))()},beforeCropMultipleInsertOne:function(t,e){var i=this;return(0,r.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=[t.content.imagesName[e]],i.dialogCroppieMultipleDataImg=n,i.dialogCroppieMultipleEdit=!0,i.changeCroppieMultiple=function(i){n[0].croppie=i[0][0],n[0].blob=i[0][1],t.content.imagesName[e]=n[0]},i.dialogCroppieMultiple=!0;case 5:case"end":return r.stop()}}),r)})))()}}}},47566:function(t,e,i){i(57327),i(41539),i(21249);e["Z"]={data:function(){return{dialog:!1,dialogContent:{},count:1}},methods:{changeDialog:function(t){this.dialog=t},changeDialogContent:function(t){this.dialogContent=t},addBlock:function(){this.form.blocks.push({id:this.count,type:-1,content:null}),this.count++},deleteBlock:function(t){this.form.blocks=this.form.blocks.filter((function(e){return e.id!==t}))},updateBlock:function(){var t=this;this.form.blocks=this.form.blocks.map((function(e){return t.forUpdateBlock(e)}))},forUpdateBlock:function(t){if(1===t.type)return{type:1,id:t.id,content:{blocks:[this.forUpdateBlock(t.content.blocks[0]),this.forUpdateBlock(t.content.blocks[1])]}};var e=Object.assign({},t);return e}}}},42012:function(t,e,i){t.exports=i.p+"img/ep_picture.d53e6301.svg"}}]);
//# sourceMappingURL=4247-legacy.549e3e6d.js.map