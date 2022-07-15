"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6588],{95631:function(t,e,n){var i=n(3070).f,r=n(70030),s=n(12248),a=n(49974),o=n(25787),c=n(20408),l=n(70654),u=n(96340),d=n(19781),f=n(62423).fastKey,h=n(29909),p=h.set,m=h.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,i){o(t,h),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:n})})),h=u.prototype,v=m(e),g=function(t,e,n){var i,r,s=v(t),a=b(t,e);return a?a.value=n:(s.last=a={index:r=f(e,!0),key:e,value:n,previous:i=s.last,next:void 0,removed:!1},s.first||(s.first=a),i&&(i.next=a),d?s.size++:t.size++,"F"!==r&&(s.index[r]=a)),t},b=function(t,e){var n,i=v(t),r=f(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return s(h,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=b(e,t);if(i){var r=i.next,s=i.previous;delete n.index[i.index],i.removed=!0,s&&(s.next=r),r&&(r.previous=s),n.first==i&&(n.first=r),n.last==i&&(n.last=s),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=a(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),s(h,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(h,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",r=m(e),s=m(i);l(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},77710:function(t,e,n){var i=n(82109),r=n(17854),s=n(1702),a=n(54705),o=n(31320),c=n(62423),l=n(20408),u=n(25787),d=n(60614),f=n(70111),h=n(47293),p=n(17072),m=n(58003),v=n(79587);t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),x=g?"set":"add",y=r[t],S=y&&y.prototype,C=y,_={},w=function(t){var e=s(S[t]);o(S,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},k=a(t,!d(y)||!(b||S.forEach&&!h((function(){(new y).entries().next()}))));if(k)C=n.getConstructor(e,t,g,x),c.enable();else if(a(t,!0)){var Z=new C,j=Z[x](b?{}:-0,1)!=Z,z=h((function(){Z.has(1)})),L=p((function(t){new y(t)})),A=!b&&h((function(){var t=new y,e=5;while(e--)t[x](e,e);return!t.has(-0)}));L||(C=e((function(t,e){u(t,S);var n=v(new y,t,C);return void 0!=e&&l(e,n[x],{that:n,AS_ENTRIES:g}),n})),C.prototype=S,S.constructor=C),(z||A)&&(w("delete"),w("has"),g&&w("get")),(A||j)&&w(x),b&&S.clear&&delete S.clear}return _[t]=C,i({global:!0,forced:C!=y},_),m(C,t),b||n.setStrong(C,t,g),C}},51532:function(t,e,n){var i=n(77710),r=n(95631);i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},27852:function(t,e,n){var i=n(82109),r=n(1702),s=n(31236).f,a=n(17466),o=n(41340),c=n(3929),l=n(84488),u=n(84964),d=n(31913),f=r("".endsWith),h=r("".slice),p=Math.min,m=u("endsWith"),v=!d&&!m&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!m},{endsWith:function(t){var e=o(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:p(a(n),i),s=o(t);return f?f(e,s,r):h(e,r-s.length,r)===s}})},17273:function(){},68582:function(){},82102:function(t,e,n){var i=n(23796),r=n(4367),s=(n(41539),n(9653),n(47941),n(74916),n(15306),n(51532),n(78783),n(33948),n(26699),n(54747),n(23157),n(17273),n(20144)),a=n(76290),o=n(4589),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+(0,o.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+(0,o.jC)(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function h(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var p=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,s=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=p.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var i=n[t],r=h(e,t,i);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},(0,i.Z)(t,"col-".concat(n.cols),n.cols),(0,i.Z)(t,"offset-".concat(n.offset),n.offset),(0,i.Z)(t,"order-".concat(n.order),n.order),(0,i.Z)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(o,l)}(),t(n.tag,(0,a.ZP)(r,{class:l}),s)}})},99846:function(t,e,n){n.d(e,{Z:function(){return a}});n(57327),n(41539),n(47941),n(23157),n(92222),n(68582),n(17273),n(73210),n(69600);var i=n(20144);function r(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,r=n.data,s=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var a=r.attrs;if(a){r.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,r,s)}})}var s=n(76290),a=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,r=e.data,a=e.children,o=r.attrs;return o&&(r.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,(0,s.ZP)(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),a)}})},62877:function(t,e,n){var i=n(23796),r=n(4367),s=(n(41539),n(26699),n(32023),n(92222),n(47941),n(74916),n(15306),n(51532),n(78783),n(33948),n(54747),n(17273),n(20144)),a=n(76290),o=n(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,i){return n[t+(0,o.jC)(i)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var i=b[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var y=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},p),{},{alignContent:{type:String,default:null,validator:m}},v),render:function(t,e){var n=e.props,r=e.data,s=e.children,o="";for(var c in n)o+=String(n[c]);var l=y.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var i=n[t],r=x(e,t,i);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},(0,i.Z)(t,"align-".concat(n.align),n.align),(0,i.Z)(t,"justify-".concat(n.justify),n.justify),(0,i.Z)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(o,l)}(),t(n.tag,(0,a.ZP)(r,{staticClass:"row",class:l}),s)}})},97047:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(9726),r=(n(9653),n(69600),n(27852),n(23157),n(68083)),s=n(42529),a=n(73325),o=(0,a.Z)(s.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=n(48085),u=n(76290),d=n(71824),f="undefined"!==typeof window&&"IntersectionObserver"in window,h=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,i.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!f||n||this.eager){if(this.normalisedSrc.lazySrc){var i=new Image;i.src=this.normalisedSrc.lazySrc,this.pollForSize(i,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var r=t.naturalHeight,s=t.naturalWidth;r||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/r):t.complete||!e.isLoading||e.hasError||null==n||setTimeout(i,n)};i()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),n=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},68083:function(t,e,n){var i=n(9726);n(41539);function r(t,e,n){if("undefined"!==typeof window&&"IntersectionObserver"in window){var r=e.modifiers||{},a=e.value,o="object"===(0,i.Z)(a)?a:{handler:a,options:{}},c=o.handler,l=o.options,u=new IntersectionObserver((function(){var i,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=null==(i=t._observe)?void 0:i[n.context._uid];if(l){var u=a.some((function(t){return t.isIntersecting}));!c||r.quiet&&!l.init||r.once&&!u&&!l.init||c(a,o,u),u&&r.once?s(t,e,n):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:u},u.observe(t)}}function s(t,e,n){var i,r=null==(i=t._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var a={inserted:r,unbind:s};e["Z"]=a},42529:function(t,e,n){n(9653);var i=n(4589),r=n(20144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),a=(0,i.kb)(this.maxWidth),o=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},76290:function(t,e,n){n.d(e,{ZP:function(){return l},bp:function(){return f}});var i=n(4367),r=n(75200),s=n(62032),a=(n(74916),n(23123),n(73210),n(47941),n(92222),n(4589)),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,n={},i=(0,s.Z)(t.split(o.styleList));try{for(i.s();!(e=i.n()).done;){var c=e.value,l=c.split(o.styleProp),u=(0,r.Z)(l,2),d=u[0],f=u[1];d=d.trim(),d&&("string"===typeof f&&(f=f.trim()),n[(0,a._A)(d)]=f)}}catch(h){i.e(h)}finally{i.f()}return n}function l(){var t,e={},n=arguments.length;while(n--)for(var r=0,s=Object.keys(arguments[n]);r<s.length;r++)switch(t=s[r],t){case"class":case"directives":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=f(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=(0,i.Z)((0,i.Z)({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function u(t,e){return t?e?(t=(0,a.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?(0,a.TI)(t).concat(e):e:t}function f(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var i in n)n[i]&&(t[i]?t[i]=[].concat(n[i],t[i]):t[i]=n[i])}return t}},66588:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.program?n("div",[n("v-container",[n("v-row",{staticClass:"d-flex align-stretch justify-center"},[n("v-col",{staticClass:"d-flex flex-column justify-space-around",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[n("div",{staticClass:"pb-4 pb-md-4 text-body-2 breadcrumbs text-start"},[n("span",[t._v("Поступление /")]),0===t.program.type?n("router-link",{attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")]):t._e(),1===t.program.type?n("router-link",{attrs:{to:"/magistracy"}},[t._v(" Магистратура ")]):t._e(),n("span",[t._v("/ "+t._s(t.program.direction))])],1),n("div",[n("div",{staticClass:"pb-4 pb-lg-6  text-h5 text-sm-h4 text-xl-h3"},[t._v(" "+t._s(t.program.direction)+" ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" "+t._s(t.program.description)+" ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{href:t.program.links[0].link,text:"Перейти на сайт"}})],1)]),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6",lg:"7"}},[n("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),n("v-container",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"12",md:"10",xl:"12"}},[n("v-row",{attrs:{align:"stretch",justify:"center"}},[n("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"program-info pa-2 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[n("div",{staticClass:"program-info-title text-center pb-2 subtitle-color"},[t._v(" Вступительные испытания и минимальные баллы ЕГЭ ")]),n("div",{staticClass:"subtitle-color text-center"},t._l(t.program.exams,(function(e){return n("p",{key:e,staticClass:"mb-0"},[t._v(" "+t._s(e)+" ")])})),0)])])]),n("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"program-info px-4 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[n("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Количество мест - "),n("b",[t._v(t._s(t.program.numbers))])]),n("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" "+t._s(t.program.type?"Конкурс прошлого года":"Проходной балл прошлого года")+" - "),n("b",[t._v(t._s(t.program.score))])]),n("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Язык обучения - "),n("b",[t._v(t._s(t.program.language))])]),n("div",{staticClass:"subtitle-color"},[t._v(" Форма обучения - "),n("b",[t._v(t._s(t.program.form))])])])])]),n("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"8",md:"4",xl:"3"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"subtitle-color program-info px-6 py-4 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[n("div",{staticClass:"text-h6 text-xl-h5 text-center pb-1 pb-md-3"},[t._v(" Полезные ссылки ")]),n("div",{staticClass:"d-flex flex-column pl-xl-4",staticStyle:{width:"fit-content"}},[t._l(t.program.links,(function(e){return n("a",{key:e.link,staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])})),n("a",{staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:"https://abit.itmo.ru/page/66",target:"_blank"}},[t._v("Правила приема 2022 ")]),n("a",{staticClass:"link-arrow mr-0",attrs:{href:"https://abit.itmo.ru/"+(0===t.program.type?"bachelor":"master")+"#scholarship",target:"_blank"}},[t._v("Стипендии ")])],2)])])])],1)],1)],1),n("v-container",{staticClass:"directions pb-md-16",staticStyle:{position:"relative","z-index":"10"}},[n("div",{staticClass:"d-flex pb-6"},[n("v-col",{attrs:{cols:"3",md:"1"}},[n("v-img",{attrs:{width:"100",src:t.programAreasImg}})],1),n("v-col",{attrs:{cols:"9",md:"6"}},[n("div",{staticClass:"text-h6 text-xl-h4"},[t._v(" Основные направления профессиональной деятельности выпускников: ")])])],1),n("div",{staticClass:"d-flex text-subtitle-1 flex-wrap"},t._l(2,(function(e){return n("v-col",{key:e,staticClass:"py-0",attrs:{cols:"12",md:"6"}},[n("ul",{staticClass:"ict-ul"},t._l(t.program.areas[e-1],(function(i){return n("li",{key:e+i},[t._v(" "+t._s(i)+" ")])})),0)])})),1)]),n("div",{staticClass:"hex-section"},[t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient1"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient2"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),n("v-container",{staticStyle:{position:"relative","z-index":"10"}},[n("div",{staticClass:" text-center mx-auto text-h5 text-sm-h4 text-xl-h3",style:{width:t.$vuetify.breakpoint.smAndDown?"275px":"450px"}},[t._v(" Дисциплины ")]),n("BaseHexagonContainer",{attrs:{link:"/disciplines/"+t.program.code,"hex-array":t.hexArray,small:!0}})],1)],1),n("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left",top:"5px"}}),n("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"65%",position:"right",top:"15px"}}),n("v-container",{staticClass:"py-8 py-md-16"},[n("v-row",{attrs:{justify:"center"}},t._l(t.program.contacts,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",sm:"6",xl:"4"}},[n("BasePerson",{attrs:{person:t,"small-person":!0}})],1)})),1)],1),n("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),n("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"left",top:"15px"}}),n("div",{staticClass:"section-background job"},[n("v-container",{staticClass:"py-10 py-md-12 py-xl-16"},[n("div",{staticClass:"text-center mx-auto pb-6 pb-md-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Где работают выпускники ИКТ ")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"11"}},[n("v-row",{attrs:{justify:"center",align:"stretch"}},t._l(t.usefulLinks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"6",md:"4"}},[n("div",{staticClass:"pa-md-4",staticStyle:{height:"100%"}},[n("BaseUlBlock",{attrs:{item:t,background:"app-background"}})],1)])})),1)],1)],1)],1)],1),n("LineComponent",{attrs:{id:"5",color:"#FF776E",width:"55%",position:"left"}}),n("div",{staticClass:"pt-8 pt-md-12"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Преподаватели ")]),t.program.teachers.length?n("CarouselLeadersComponent",{attrs:{slider:t.program.teachers}}):t._e()],1)],1)],1):n("BaseNotFound")},r=[],s=n(4367),a=(n(41539),n(78783),n(33948),n(20629)),o={name:"ProgramView",components:{BaseNotFound:function(){return n.e(6643).then(n.bind(n,6643))},BasePerson:function(){return n.e(5403).then(n.bind(n,45403))},LineComponent:function(){return n.e(5898).then(n.bind(n,65898))},BaseUlBlock:function(){return n.e(3101).then(n.bind(n,93101))},BaseButton:function(){return n.e(7625).then(n.bind(n,37625))},CarouselLeadersComponent:function(){return Promise.all([n.e(850),n.e(310)]).then(n.bind(n,80850))},HeaderAnimation:function(){return n.e(6914).then(n.bind(n,46914))},BaseHexagonContainer:function(){return n.e(2673).then(n.bind(n,82673))}},props:{animationHeader:{type:Boolean,default:!1}},data:function(){return{scrolledHexLines:!1,hexArray:[{img:n(8756),text:"Проектирование и реализация баз данных"},{img:n(78733),text:"Основы обработки мультимедийных данных"},{img:n(45425),text:"Облачные технологии и услуги"},{img:n(4753),text:"Основы Web программирования"},{img:n(90615),text:"Управление проектами"},{img:n(11095),text:"Дискретная математика"}],usefulLinks:[{name:"Инвестиционный</br>и банковский сектор",img:n(39263),links:[{name:"Сбербанк Технологии"},{name:"Intercontinental Exchange"}]},{name:"Информационная</br>безопасность",img:n(51629),links:[{name:"Dr.Web"},{name:"Avast Software"},{name:"Диджитал Секьюрити"}]},{name:"Компании, занимающиеся</br>автоматизацией бизнеса",img:n(28656),links:[{name:"T-Systems"},{name:"Luxoft"},{name:"KORUS Consulting"},{name:"Горизонты Роста"}]},{name:"Ведущие международные</br>IT‑компании",img:n(23520),links:[{name:"Microsoft"},{name:"EMC Corporation"},{name:"Интермедиа"}]},{name:"Телекоммуникационные</br>компании",img:n(55138),links:[{name:"Alcatel-Lucent"},{name:"Мегафон"},{name:"GS Group"}]}]}},computed:(0,s.Z)((0,s.Z)({},(0,a.rn)("app",["theme"])),{},{program:function(){return this.$store.getters["programs/program"](this.$route.params.id)},programAreasImg:function(){return"dark"===this.theme?n(535):n(92344)}}),created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.scrolledHexLines){var t=document.documentElement.clientHeight,e=document.querySelector(".hex-section");if(e){var n=e.getBoundingClientRect().top+150;n<t&&n>0&&(this.scrolledHexLines=!0)}}}}},c=o,l=n(1001),u=n(43453),d=n.n(u),f=n(82102),h=n(99846),p=n(97047),m=n(62877),v=(0,l.Z)(c,i,r,!1,null,"713119ae",null),g=v.exports;d()(v,{VCol:f.Z,VContainer:h.Z,VImg:p.Z,VRow:m.Z})},8756:function(t,e,n){t.exports=n.p+"img/Vector.0cd0533d.svg"},45425:function(t,e,n){t.exports=n.p+"img/Vector1.3da63373.svg"},90615:function(t,e,n){t.exports=n.p+"img/Vector4.32eca419.svg"},535:function(t,e,n){t.exports=n.p+"img/Vector.1b1f285e.svg"},92344:function(t,e,n){t.exports=n.p+"img/VectorLight.81351552.svg"},39263:function(t,e,n){t.exports=n.p+"img/Vector.462a22d6.svg"},51629:function(t,e,n){t.exports=n.p+"img/Vector1.e6a02c26.svg"},28656:function(t,e,n){t.exports=n.p+"img/Vector2.8e5a0188.svg"},23520:function(t,e,n){t.exports=n.p+"img/Vector3.bd40a703.svg"},55138:function(t,e,n){t.exports=n.p+"img/Vector4.c1a318e0.svg"},11095:function(t,e,n){t.exports=n.p+"img/math.1dce6fa8.svg"},78733:function(t,e,n){t.exports=n.p+"img/med.0663ed09.svg"},4753:function(t,e,n){t.exports=n.p+"img/web.62ed9e04.svg"},62032:function(t,e,n){n.d(e,{Z:function(){return r}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(21703);var i=n(48936);function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}}}]);
//# sourceMappingURL=6588-legacy.66828dd5.js.map