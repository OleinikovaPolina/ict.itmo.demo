"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9477],{95631:function(t,e,i){var n=i(3070).f,r=i(70030),s=i(12248),o=i(49974),a=i(25787),c=i(20408),l=i(70654),u=i(96340),d=i(19781),h=i(62423).fastKey,f=i(29909),p=f.set,v=f.getterFor;t.exports={getConstructor:function(t,e,i,l){var u=t((function(t,n){a(t,f),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&c(n,t[l],{that:t,AS_ENTRIES:i})})),f=u.prototype,m=v(e),g=function(t,e,i){var n,r,s=m(t),o=b(t,e);return o?o.value=i:(s.last=o={index:r=h(e,!0),key:e,value:i,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=o),n&&(n.next=o),d?s.size++:t.size++,"F"!==r&&(s.index[r]=o)),t},b=function(t,e){var i,n=m(t),r=h(e);if("F"!==r)return n.index[r];for(i=n.first;i;i=i.next)if(i.key==e)return i};return s(f,{clear:function(){var t=this,e=m(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=m(e),n=b(e,t);if(n){var r=n.next,s=n.previous;delete i.index[n.index],n.removed=!0,s&&(s.next=r),r&&(r.previous=s),i.first==n&&(i.first=r),i.last==n&&(i.last=s),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=m(this),n=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),s(f,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(f,"size",{get:function(){return m(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",r=v(e),s=v(n);l(t,e,(function(t,e){p(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},77710:function(t,e,i){var n=i(82109),r=i(17854),s=i(1702),o=i(54705),a=i(31320),c=i(62423),l=i(20408),u=i(25787),d=i(60614),h=i(70111),f=i(47293),p=i(17072),v=i(58003),m=i(79587);t.exports=function(t,e,i){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),x=g?"set":"add",y=r[t],C=y&&y.prototype,S=y,w={},k=function(t){var e=s(C[t]);a(C,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!h(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:function(t,i){return e(this,0===t?0:t,i),this})},_=o(t,!d(y)||!(b||C.forEach&&!f((function(){(new y).entries().next()}))));if(_)S=i.getConstructor(e,t,g,x),c.enable();else if(o(t,!0)){var Z=new S,z=Z[x](b?{}:-0,1)!=Z,L=f((function(){Z.has(1)})),N=p((function(t){new y(t)})),A=!b&&f((function(){var t=new y,e=5;while(e--)t[x](e,e);return!t.has(-0)}));N||(S=e((function(t,e){u(t,C);var i=m(new y,t,S);return void 0!=e&&l(e,i[x],{that:i,AS_ENTRIES:g}),i})),S.prototype=C,C.constructor=S),(L||A)&&(k("delete"),k("has"),g&&k("get")),(A||z)&&k(x),b&&C.clear&&delete C.clear}return w[t]=S,n({global:!0,forced:S!=y},w),v(S,t),b||i.setStrong(S,t,g),S}},40561:function(t,e,i){var n=i(82109),r=i(17854),s=i(51400),o=i(19303),a=i(26244),c=i(47908),l=i(65417),u=i(86135),d=i(81194),h=d("splice"),f=r.TypeError,p=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var i,n,r,d,h,b,x=c(this),y=a(x),C=s(t,y),S=arguments.length;if(0===S?i=n=0:1===S?(i=0,n=y-C):(i=S-2,n=v(p(o(e),0),y-C)),y+i-n>m)throw f(g);for(r=l(x,n),d=0;d<n;d++)h=C+d,h in x&&u(r,d,x[h]);if(r.length=n,i<n){for(d=C;d<y-n;d++)h=d+n,b=d+i,h in x?x[b]=x[h]:delete x[b];for(d=y;d>y-n+i;d--)delete x[d-1]}else if(i>n)for(d=y-n;d>C;d--)h=d+n-1,b=d+i-1,h in x?x[b]=x[h]:delete x[b];for(d=0;d<i;d++)x[d+C]=arguments[d+2];return x.length=y-n+i,r}})},51532:function(t,e,i){var n=i(77710),r=i(95631);n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},27852:function(t,e,i){var n=i(82109),r=i(1702),s=i(31236).f,o=i(17466),a=i(41340),c=i(3929),l=i(84488),u=i(84964),d=i(31913),h=r("".endsWith),f=r("".slice),p=Math.min,v=u("endsWith"),m=!d&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!m&&!v},{endsWith:function(t){var e=a(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,r=void 0===i?n:p(o(i),n),s=a(t);return h?h(e,s,r):f(e,r-s.length,r)===s}})},17273:function(){},68582:function(){},82102:function(t,e,i){var n=i(23796),r=i(4367),s=(i(41539),i(9653),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(26699),i(54747),i(23157),i(17273),i(20144)),o=i(76290),a=i(4589),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,r=e.data,s=e.children,a=(e.parent,"");for(var c in i)a+=String(i[c]);var l=p.get(a);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var n=i[t],r=f(e,t,n);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!i.cols},(0,n.Z)(t,"col-".concat(i.cols),i.cols),(0,n.Z)(t,"offset-".concat(i.offset),i.offset),(0,n.Z)(t,"order-".concat(i.order),i.order),(0,n.Z)(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(a,l)}(),t(i.tag,(0,o.ZP)(r,{class:l}),s)}})},99846:function(t,e,i){i.d(e,{Z:function(){return o}});i(57327),i(41539),i(47941),i(23157),i(92222),i(68582),i(17273),i(73210),i(69600);var n=i(20144);function r(t){return n.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,r=i.data,s=i.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));a.length&&(r.staticClass+=" ".concat(a.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,s)}})}var s=i(76290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,r=e.data,o=e.children,a=r.attrs;return a&&(r.attrs={},i=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,(0,s.ZP)(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}})},62877:function(t,e,i){var n=i(23796),r=i(4367),s=(i(41539),i(26699),i(32023),i(92222),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(54747),i(17273),i(20144)),o=i(76290),a=i(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+(0,a.jC)(n)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,i){var n=b[t];if(null!=i){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(i),n.toLowerCase()}}var y=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:v}},m),render:function(t,e){var i=e.props,r=e.data,s=e.children,a="";for(var c in i)a+=String(i[c]);var l=y.get(a);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=i[t],r=x(e,t,n);r&&l.push(r)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},(0,n.Z)(t,"align-".concat(i.align),i.align),(0,n.Z)(t,"justify-".concat(i.justify),i.justify),(0,n.Z)(t,"align-content-".concat(i.alignContent),i.alignContent),t)),y.set(a,l)}(),t(i.tag,(0,o.ZP)(r,{staticClass:"row",class:l}),s)}})},97047:function(t,e,i){i.d(e,{Z:function(){return f}});var n=i(9726),r=(i(9653),i(69600),i(27852),i(23157),i(68083)),s=i(42529),o=i(73325),a=(0,o.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=i(48085),u=i(76290),d=i(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,f=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=t.naturalHeight,s=t.naturalWidth;r||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},90624:function(t,e,i){i.d(e,{Z:function(){return o}});i(9653),i(92222);var n=i(68083),r=i(46952),s=i(4589),o=r.Z.extend({name:"v-progress-circular",directives:{intersect:n.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,s.kb)(this.calculatedSize),width:(0,s.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},68083:function(t,e,i){var n=i(9726);i(41539);function r(t,e,i){if("undefined"!==typeof window&&"IntersectionObserver"in window){var r=e.modifiers||{},o=e.value,a="object"===(0,n.Z)(o)?o:{handler:o,options:{}},c=a.handler,l=a.options,u=new IntersectionObserver((function(){var n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,l=null==(n=t._observe)?void 0:n[i.context._uid];if(l){var u=o.some((function(t){return t.isIntersecting}));!c||r.quiet&&!l.init||r.once&&!u&&!l.init||c(o,a,u),u&&r.once?s(t,e,i):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:u},u.observe(t)}}function s(t,e,i){var n,r=null==(n=t._observe)?void 0:n[i.context._uid];r&&(r.observer.unobserve(t),delete t._observe[i.context._uid])}var o={inserted:r,unbind:s};e["Z"]=o},46952:function(t,e,i){var n=i(75200),r=i(23796),s=i(4367),o=(i(74916),i(23123),i(73210),i(41539),i(39714),i(20144)),a=i(71824),c=i(17093);e["Z"]=o.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,a.N6)("style must be an object",this),e):"string"===typeof e.class?((0,a.N6)("class must be an object",this),e):((0,c.NA)(t)?e.style=(0,s.Z)((0,s.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,r.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,a.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,a.N6)("class must be an object",this),e;if((0,c.NA)(t))e.style=(0,s.Z)((0,s.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var i=t.toString().trim().split(" ",2),o=(0,n.Z)(i,2),l=o[0],u=o[1];e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,r.Z)({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},42529:function(t,e,i){i(9653);var n=i(4589),r=i(20144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),r=(0,n.kb)(this.minWidth),s=(0,n.kb)(this.maxHeight),o=(0,n.kb)(this.maxWidth),a=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},76290:function(t,e,i){i.d(e,{ZP:function(){return l},bp:function(){return h}});var n=i(4367),r=i(75200),s=i(62032),o=(i(74916),i(23123),i(73210),i(47941),i(92222),i(4589)),a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,i={},n=(0,s.Z)(t.split(a.styleList));try{for(n.s();!(e=n.n()).done;){var c=e.value,l=c.split(a.styleProp),u=(0,r.Z)(l,2),d=u[0],h=u[1];d=d.trim(),d&&("string"===typeof h&&(h=h.trim()),i[(0,o._A)(d)]=h)}}catch(f){n.e(f)}finally{n.f()}return i}function l(){var t,e={},i=arguments.length;while(i--)for(var r=0,s=Object.keys(arguments[i]);r<s.length;r++)switch(t=s[r],t){case"class":case"directives":arguments[i][t]&&(e[t]=d(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=u(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=h(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=(0,n.Z)((0,n.Z)({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function u(t,e){return t?e?(t=(0,o.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?(0,o.TI)(t).concat(e):e:t}function h(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var i=e<0||arguments.length<=e?void 0:arguments[e];for(var n in i)i[n]&&(t[n]?t[n]=[].concat(i[n],t[n]):t[n]=i[n])}return t}},69477:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoad?i("div",[i("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[i("v-row",{staticClass:"d-flex align-center justify-center"},[i("v-col",{class:t.$vuetify.breakpoint.xs?"text-center":"",attrs:{cols:"12",sm:"6"}},[i("div",{staticClass:"pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1"},[t._v(" Факультет ИКТ ")]),i("div",{staticClass:"text-subtitle-1"},[t._v(" Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в проектах наших партнеров. ")])]),i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6"}},[i("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),i("div",{staticClass:"hex-section",staticStyle:{"z-index":"0",position:"relative"}},[t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient1"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient2"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),i("v-container",{staticStyle:{position:"relative","z-index":"10"}},[i("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.article.title)+" ")]),i("BaseHexagonContainer",{attrs:{"hex-array":JSON.parse(t.article.description).winnersHex,link:"/article/1"}})],1),i("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left"}}),i("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"55%",position:"right",top:"10px"}})],1),i("NewsComponent",{staticClass:"pb-8 pb-xl-12",attrs:{news:t.news.results}}),i("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"left",top:"-10px"}}),i("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"right"}}),i("div",{staticClass:"section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ")]),i("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1),i("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"40%",position:"left"}}),i("LineComponent",{attrs:{id:"6",color:"#FF776E",width:"45%",position:"right",top:"10px"}}),i("div",{staticClass:"ethics"},[i("TheEthicsMobileComponent",{staticClass:"ethics-mobile"}),i("TheEthicsComponent",{staticClass:"ethics-desktop"})],1),i("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"30%",position:"right",top:"-5px"}}),i("LineComponent",{attrs:{id:"8",color:"#FF0281",width:"60%",position:"left",top:"10px","left-after":"15%"}}),i("div",{staticClass:"section-background pt-4 pb-10 pt-lg-12 pb-lg-16"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Клубы факультета ")]),i("v-row",{staticClass:"d-flex align-start justify-space-around"},t._l(t.clubs,(function(e,n){return i("v-col",{key:n,staticClass:"pt-6 text-center d-flex flex-column align-center animation-club",attrs:{cols:"6",md:"3"}},[i("v-img",{staticClass:"club-img",attrs:{src:e.img,contain:""}}),i("div",{staticClass:"club-text"},[i("div",{staticClass:"text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"club-description px-sm-2"},[t._v(" "+t._s(e.description)+" ")]),i("div",{staticClass:"d-flex justify-center club-description pt-2"},[i("div",[i("v-img",{staticClass:"mr-2",attrs:{src:e.iconLink,width:t.$vuetify.breakpoint.xs?20:30,contain:""}})],1),i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])])]),2===n&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"11",color:"#6A30F4",width:"100%",position:"right",top:"-20px"}}):t._e(),2===n&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"12",color:"#FF776E",width:"30%",position:"left",top:"-10px"}}):t._e()],1)})),1)],1)],1),i("LineComponent",{attrs:{id:"9",color:"#6A30F4",width:"100%",position:"right"}}),t.$vuetify.breakpoint.mdAndUp?i("LineComponent",{attrs:{id:"10",color:"#FF776E",width:"30%",position:"left",top:"10px"}}):t._e(),i("div",{staticClass:"pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8"},[i("v-container",{staticClass:"animation-numbers"},[i("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Факультет в цифрах ")]),i("v-row",t._l(t.numbers,(function(e,n){return i("v-col",{key:n,staticClass:"text-center",attrs:{cols:"4",md:1===n?6:3}},[i("div",{staticClass:"numbers-name"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"numbers-description subtitle-color",domProps:{innerHTML:t._s(e.description)}})])})),1)],1)],1),i("LineComponent",{attrs:{id:"13",color:"#6A30F4",width:"35%",position:"right"}}),i("LineComponent",{attrs:{id:"14",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),i("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[i("v-container",[i("v-row",{staticClass:"d-flex align-center justify-center"},[i("v-col",{staticClass:"text-center d-md-none"},[i("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Видео ")])]),i("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[i("div",[i("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Видео ")]),i("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Мы снимаем полезные и классные видеролики про программирование, насущные вопросы, жизнь в Университете ИТМО. А также рассказываем про программы и возможности, которые реализуются у нас на факультете ИКТ. Если хотите окунуться в жизнь факультета, то погружайся вместе с ИКТ! ")])]),i("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[i("BaseButton",{attrs:{href:"https://vk.com/video/@ict.itmo",text:"Открыть"}})],1)]),i("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[i("TheStudentsVideoComponent")],1)],1)],1)],1),i("LineComponent",{attrs:{id:"15",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),i("LineComponent",{attrs:{id:"16",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),i("PartnersComponent")],1):i("div",{staticClass:"d-flex justify-center fill-height align-center fill-height",staticStyle:{"min-height":"75vh"}},[i("v-progress-circular",{attrs:{indeterminate:""}})],1)},r=[],s=i(16198),o=i(4367),a=(i(35666),i(41539),i(78783),i(33948),i(92222),i(40561),i(54747),i(20629)),c={name:"HomeView",components:{LineComponent:function(){return i.e(5898).then(i.bind(i,65898))},CarouselLeadersComponent:function(){return Promise.all([i.e(1555),i.e(2761)]).then(i.bind(i,71555))},HeaderAnimation:function(){return i.e(5843).then(i.bind(i,95843))},TheEthicsComponent:function(){return i.e(4409).then(i.bind(i,54409))},TheEthicsMobileComponent:function(){return i.e(3441).then(i.bind(i,43441))},NewsComponent:function(){return i.e(9196).then(i.bind(i,39196))},PartnersComponent:function(){return i.e(948).then(i.bind(i,60948))},BaseHexagonContainer:function(){return i.e(2551).then(i.bind(i,7088))},TheStudentsVideoComponent:function(){return i.e(2447).then(i.bind(i,42447))},BaseButton:function(){return i.e(7625).then(i.bind(i,37625))}},props:{animationHeader:{type:Boolean,default:!1}},data:function(){return{clubs:[{img:i(65280),name:"AIRes",description:"Сообщество разработчиков искусственного интеллекта",link:"https://vk.com/airesclub",iconLink:i(27882)},{img:i(91365),name:"FTML",description:"Клуб frontend-разработчиков",link:"https://vk.com/ftmlclub",iconLink:i(27882)},{img:i(90375),name:"PM's",description:"Объединение специалистов в сфере менеджемента",link:"https://vk.com/pms_itmo",iconLink:i(27882)},{img:i(43654),name:"Info Lab",description:"Проектный клуб разработчиков",link:"https://vk.com/infolab_club",iconLink:i(27882)}],numbers:[{name:">60",description:"преподавателей"},{name:"~1000",description:"студентов"},{name:"6",description:"образовательных<br>программ"}],scrolledClub:[{type:!1},{type:!1},{type:!1},{type:!1}],scrolledNumbers:!1,scrolledHexLines:!1,isLoad:!1}},computed:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,a.rn)("news",["news","article"])),(0,a.rn)("contacts",["contacts","dean","office"])),{},{persons:function(){var t=[this.dean].concat(this.office,this.contacts);return t[1]=t.splice(5,1,t[1])[0],t}}),watch:{scrolledClub:{handler:function(t){t.forEach((function(t,e){t.type&&document.querySelectorAll(".animation-club")[e].classList.add("animation--active")}))},deep:!0},scrolledNumbers:function(t){t&&document.querySelector(".animation-numbers").classList.add("animation--active")}},mounted:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getNews();case 2:return e.next=4,t.getArticle(1);case 4:t.isLoad=!0;case 5:case"end":return e.stop()}}),e)})))()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:(0,o.Z)((0,o.Z)({},(0,a.nv)("news",["getNews","getArticle"])),{},{handleScroll:function(){var t=this,e=document.documentElement.clientHeight;if(document.querySelectorAll(".animation-club").forEach((function(i,n){if(!t.scrolledClub[n].type){var r=i.getBoundingClientRect().bottom;t.scrolledClub[n].type=r<e&&r>0}})),!this.scrolledNumbers){var i=document.querySelector(".animation-numbers");if(i){var n=i.getBoundingClientRect().bottom;this.scrolledNumbers=n<e&&n>0}}if(!this.scrolledHexLines){var r=document.querySelector(".hex-section");if(r){var s=r.getBoundingClientRect().top+150;s<e&&s>0&&(this.scrolledHexLines=!0)}}}})},l=c,u=i(1001),d=i(43453),h=i.n(d),f=i(82102),p=i(99846),v=i(97047),m=i(90624),g=i(62877),b=(0,u.Z)(l,n,r,!1,null,"75591fee",null),x=b.exports;h()(b,{VCol:f.Z,VContainer:p.Z,VImg:v.Z,VProgressCircular:m.Z,VRow:g.Z})},27882:function(t,e,i){t.exports=i.p+"img/vkMini.0818e256.svg"},65280:function(t,e,i){t.exports=i.p+"img/aires.ddb80f96.png"},91365:function(t,e,i){t.exports=i.p+"img/ftml.ca5b3cb1.png"},43654:function(t,e,i){t.exports=i.p+"img/infolab.b86b295a.png"},90375:function(t,e,i){t.exports=i.p+"img/pm.d589adae.png"},62032:function(t,e,i){i.d(e,{Z:function(){return r}});i(82526),i(41817),i(41539),i(32165),i(78783),i(33948),i(21703);var n=i(48936);function r(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.Z)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}}}]);
//# sourceMappingURL=9477-legacy.31de8bc3.js.map