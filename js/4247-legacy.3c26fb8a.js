"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4247],{27852:function(e,t,i){var n=i(82109),r=i(1702),a=i(31236).f,o=i(17466),s=i(41340),c=i(3929),l=i(84488),u=i(84964),h=i(31913),p=r("".endsWith),d=r("".slice),g=Math.min,m=u("endsWith"),f=!h&&!m&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!f&&!m},{endsWith:function(e){var t=s(l(this));c(e);var i=arguments.length>1?arguments[1]:void 0,n=t.length,r=void 0===i?n:g(o(i),n),a=s(e);return p?p(t,a,r):d(t,r-a.length,r)===a}})},97047:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(9726),r=(i(9653),i(69600),i(27852),i(23157),i(68083)),a=i(42529),o=i(73325),s=(0,o.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=s,l=i(48085),u=i(76290),h=i(71824),p="undefined"!==typeof window&&"IntersectionObserver"in window,d=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient(".concat(this.gradient,")")),t&&e.push('url("'.concat(t,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(e,t,i){if(!p||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,t=new Image;this.image=t,t.onload=function(){t.decode?t.decode().catch((function(t){(0,h.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(e.normalisedSrc.src)+(t.message?"\nOriginal error: ".concat(t.message):""),e)})).then(e.onLoad):e.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=e.naturalHeight,a=e.naturalWidth;r||a?(t.naturalWidth=a,t.calculatedAspectRatio=a/r):e.complete||!t.isLoading||t.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var e=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),e},__genPlaceholder:function(){if(this.$slots.placeholder){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(e){var t=c.options.render.call(this,e),i=(0,u.ZP)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:p?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,i,t.children)}})},90624:function(e,t,i){i.d(t,{Z:function(){return o}});i(9653),i(92222);var n=i(68083),r=i(46952),a=i(4589),o=r.Z.extend({name:"v-progress-circular",directives:{intersect:n.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,a.kb)(this.calculatedSize),width:(0,a.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(e,t){return this.$createElement("circle",{class:"v-progress-circular__".concat(e),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg:function(){var e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},e)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(e,t,i){this.isVisible=i}},render:function(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},22100:function(e,t){t["Z"]={data:function(){return{dialogCroppieDataImg:"",dialogCroppie:!1,dialogCroppieOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}},methods:{changeDialogCroppie:function(e){this.dialogCroppie=e},beforeCrop:function(e,t,i,n){var r=this;this.form[e]=n;var a=new FileReader;a.onload=function(e){r.dialogCroppieDataImg=e.target.result},a.readAsDataURL(n),this.dialogCroppieOptions={title:i,size:t,enableResize:{w:!1,h:!1}},this.changeCroppie=function(t){r.form[e+"Croppie"]=t[0],r.form[e+"Blob"]=t[1]},this.dialogCroppie=!0},changeCroppie:function(){},beforeCropInsert:function(e){this.dialogCroppieDataImg=e.content.imgName.original,this.dialogCroppieOptions={title:"Изображение",size:{w:800,h:350},enableResize:{w:!0,h:!0}},this.changeCroppie=function(t){e.content.imgName.croppie=t[0],e.content.imgName.blob=t[1]},this.dialogCroppie=!0}}}},19522:function(e,t,i){var n=i(16198);i(92222),i(41539),i(54747),i(35666);t["Z"]={data:function(){return{dialogCroppieMultipleEdit:!1,dialogCroppieMultipleDataImg:null,dialogCroppieMultiple:!1}},methods:{changeDialogCroppieMultiple:function(e){this.dialogCroppieMultiple=e},beforeCropMultiple:function(e,t,i){var r=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=[],o=0;case 2:if(!(o<i.length)){t.next=9;break}return s=i[o],t.next=6,r.onloadReader(s).then(function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.push({original:t.target.result,croppie:t.target.result,blob:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:o++,t.next=2;break;case 9:r.dialogCroppieMultipleDataImg=a,r.form[e]=r.form[e].concat(i),r.dialogCroppieMultipleEdit=!1,r.changeCroppieMultiple=function(t){t.forEach((function(e,t){a[t].croppie=e[0],a[t].blob=e[1]})),r.form[e+"ImagesNames"]=r.form[e+"ImagesNames"].concat(a)},r.dialogCroppieMultiple=!0;case 14:case"end":return t.stop()}}),t)})))()},beforeCropMultipleOne:function(e,t){var i=this;return(0,n.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=[i.form[e+"ImagesNames"][t]],i.dialogCroppieMultipleDataImg=r,i.dialogCroppieMultipleEdit=!0,i.changeCroppieMultiple=function(n){r[0].croppie=n[0][0],r[0].blob=n[0][1],i.form[e+"ImagesNames"][t]=r[0]},i.dialogCroppieMultiple=!0;case 5:case"end":return n.stop()}}),n)})))()},changeCroppieMultiple:function(){},onloadReader:function(e){return new Promise((function(t,i){var n=new FileReader;n.onload=function(e){return t(e)},n.onerror=i,n.readAsDataURL(e)}))},beforeCropMultipleInsert:function(e,t){var i=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=[],o=0;case 2:if(!(o<t.length)){r.next=9;break}return s=t[o],r.next=6,i.onloadReader(s).then(function(){var e=(0,n.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.push({original:t.target.result,croppie:t.target.result,blob:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:o++,r.next=2;break;case 9:i.dialogCroppieMultipleDataImg=a,e.content.images=e.content.images.concat(t),i.dialogCroppieMultipleEdit=!1,i.changeCroppieMultiple=function(t){t.forEach((function(e,t){a[t].croppie=e[0],a[t].blob=e[1]})),e.content.imagesName=e.content.imagesName.concat(a)},i.dialogCroppieMultiple=!0;case 14:case"end":return r.stop()}}),r)})))()},beforeCropMultipleInsertOne:function(e,t){var i=this;return(0,n.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=[e.content.imagesName[t]],i.dialogCroppieMultipleDataImg=r,i.dialogCroppieMultipleEdit=!0,i.changeCroppieMultiple=function(i){r[0].croppie=i[0][0],r[0].blob=i[0][1],e.content.imagesName[t]=r[0]},i.dialogCroppieMultiple=!0;case 5:case"end":return n.stop()}}),n)})))()}}}},47566:function(e,t,i){var n=i(62032),r=i(16198);i(35666),i(57327),i(41539),i(21249),i(78783),i(33948),i(74916),i(15306);t["Z"]={data:function(){return{dialog:!1,dialogContent:{},count:1}},methods:{changeDialog:function(e){this.dialog=e},changeDialogContent:function(e){this.dialogContent=e},addBlock:function(){this.form.blocks.push({id:this.count,type:-1,content:null}),this.count++},deleteBlock:function(e){this.form.blocks=this.form.blocks.filter((function(t){return t.id!==e}))},updateBlock:function(){var e=this;this.form.blocks=this.form.blocks.map((function(t){return e.forUpdateBlock(t)}))},forUpdateBlock:function(e){if(1===e.type)return{type:1,id:e.id,content:{blocks:[this.forUpdateBlock(e.content.blocks[0]),this.forUpdateBlock(e.content.blocks[1])]}};var t=Object.assign({},e);return t},publishBlocks:function(e){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function i(){var r,a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:r=(0,n.Z)(e),i.prev=1,o=regeneratorRuntime.mark((function e(){var i,r,o,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.value,1!==i.type){e.next=18;break}r=(0,n.Z)(i.content.blocks),e.prev=3,s=regeneratorRuntime.mark((function e(){var i,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=o.value,2!==i.type||!i.content.imgName.blob){e.next=4;break}return e.next=4,t.addAttachment(i.content.imgName.blob).then((function(e){i.content.imgName.croppie=e.data.url})).catch((function(){return{}}));case 4:if(3!==i.type){e.next=22;break}r=(0,n.Z)(i.content.imagesName),e.prev=6,s=regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.value,!i["blob"]){e.next=4;break}return e.next=4,t.addAttachment(i["blob"]).then((function(e){i.croppie=e.data.url})).catch((function(){return{}}));case 4:delete i.original,delete i["blob"];case 6:case"end":return e.stop()}}),e)})),r.s();case 9:if((a=r.n()).done){e.next=13;break}return e.delegateYield(s(),"t0",11);case 11:e.next=9;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e["catch"](6),r.e(e.t1);case 18:return e.prev=18,r.f(),e.finish(18);case 21:delete i.content.images;case 22:delete i.id,2===i.type&&(delete i.content.img,delete i.content.imgName.original,delete i.content.imgName.blob);case 24:case"end":return e.stop()}}),e,null,[[6,15,18,21]])})),r.s();case 6:if((o=r.n()).done){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e["catch"](3),r.e(e.t1);case 15:return e.prev=15,r.f(),e.finish(15);case 18:if(2!==i.type||!i.content.imgName.blob){e.next=21;break}return e.next=21,t.addAttachment(i.content.imgName.blob).then((function(e){i.content.imgName.croppie=e.data.url})).catch((function(){return{}}));case 21:if(3!==i.type){e.next=39;break}c=(0,n.Z)(i.content.imagesName),e.prev=23,u=regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=l.value,!i["blob"]){e.next=4;break}return e.next=4,t.addAttachment(i["blob"]).then((function(e){i.croppie=e.data.url})).catch((function(){return{}}));case 4:delete i.original,delete i["blob"];case 6:case"end":return e.stop()}}),e)})),c.s();case 26:if((l=c.n()).done){e.next=30;break}return e.delegateYield(u(),"t2",28);case 28:e.next=26;break;case 30:e.next=35;break;case 32:e.prev=32,e.t3=e["catch"](23),c.e(e.t3);case 35:return e.prev=35,c.f(),e.finish(35);case 38:delete i.content.images;case 39:delete i.id,2===i.type&&(delete i.content.img,delete i.content.imgName.original,delete i.content.imgName.blob);case 41:case"end":return e.stop()}}),e,null,[[3,12,15,18],[23,32,35,38]])})),r.s();case 4:if((a=r.n()).done){i.next=8;break}return i.delegateYield(o(),"t0",6);case 6:i.next=4;break;case 8:i.next=13;break;case 10:i.prev=10,i.t1=i["catch"](1),r.e(i.t1);case 13:return i.prev=13,r.f(),i.finish(13);case 16:return i.abrupt("return",e);case 17:case"end":return i.stop()}}),i,null,[[1,10,13,16]])})))()},dataToFormBlocks:function(e){for(var t=0;t<e.length;t++){if(e[t].id=t,0===e[t].type){e[t].content.text=e[t].content.text.replace("<div>","").replace("</div>","");var i=new DOMParser;e[t].content.text=i.parseFromString(e[t].content.text,"text/html").body.innerHTML,e[t].content.text=e[t].content.text.replace(/\r/g,"").replace(/\n/g,"")}if(1===e[t].type){e[t].content.blocks[0].id=1e3*(t+1)+1,e[t].content.blocks[1].id=1e3*(t+1)+2;var r,a=(0,n.Z)(e[t].content.blocks);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(2===o.type&&(o.content.img=null,o.content.imgName.blob=null,o.content.imgName.original=o.content.imgName.croppie),3===o.type){o.content.images=[];var s,c=1,l=(0,n.Z)(o.content.imagesName);try{for(l.s();!(s=l.n()).done;){var u=s.value;o.content.images.push({name:c+" img"}),c+=1,u.original=u.croppie,u.blob=null}}catch(m){l.e(m)}finally{l.f()}}}}catch(m){a.e(m)}finally{a.f()}}if(2===e[t].type&&(e[t].content.img=null,e[t].content.imgName.blob=null,e[t].content.imgName.original=e[t].content.imgName.croppie),3===e[t].type){e[t].content.images=[];var h,p=1,d=(0,n.Z)(e[t].content.imagesName);try{for(d.s();!(h=d.n()).done;){var g=h.value;e[t].content.images.push({name:p+" img",id:p}),p+=1,g.original=g.croppie,g.blob=null}}catch(m){d.e(m)}finally{d.f()}}}return e}}}},42012:function(e,t,i){e.exports=i.p+"img/ep_picture.d53e6301.svg"}}]);
//# sourceMappingURL=4247-legacy.3c26fb8a.js.map