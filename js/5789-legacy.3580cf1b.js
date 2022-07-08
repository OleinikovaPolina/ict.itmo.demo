(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5789],{6790:function(t,e,i){"use strict";var n=i(17854),s=i(43157),r=i(26244),a=i(49974),o=n.TypeError,c=function(t,e,i,n,l,d,u,h){var p,m,v=l,f=0,g=!!u&&a(u,h);while(f<n){if(f in i){if(p=g?g(i[f],f,e):i[f],d>0&&s(p))m=r(p),v=c(t,e,p,m,v,d-1)-1;else{if(v>=9007199254740991)throw o("Exceed the acceptable array length");t[v]=p}v++}f++}return v};t.exports=c},34553:function(t,e,i){"use strict";var n=i(82109),s=i(42092).findIndex,r=i(51223),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},84944:function(t,e,i){"use strict";var n=i(82109),s=i(6790),r=i(47908),a=i(26244),o=i(19303),c=i(65417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),i=a(e),n=c(e,0);return n.length=s(n,e,e,i,0,void 0===t?1:o(t)),n}})},33792:function(t,e,i){var n=i(51223);n("flat")},27852:function(t,e,i){"use strict";var n=i(82109),s=i(1702),r=i(31236).f,a=i(17466),o=i(41340),c=i(3929),l=i(84488),d=i(84964),u=i(31913),h=s("".endsWith),p=s("".slice),m=Math.min,v=d("endsWith"),f=!u&&!v&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!v},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,s=void 0===i?n:m(a(i),n),r=o(t);return h?h(e,r,s):p(e,s-r.length,s)===r}})},37268:function(t,e,i){"use strict";var n=i(82109),s=i(14230),r=i(43429);n({target:"String",proto:!0,forced:r("small")},{small:function(){return s(this,"small","","")}})},68582:function(){},99846:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});i(57327),i(41539),i(47941),i(23157),i(92222),i(68582),i(17273),i(73210),i(69600);var n=i(20144);function s(t){return n.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,s=i.data,r=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var a=s.attrs;if(a){s.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,r)}})}var r=i(76290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,s=e.data,a=e.children,o=s.attrs;return o&&(s.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),a)}})},96428:function(t,e,i){"use strict";i.d(e,{Z:function(){return v}});var n,s=i(4367),r=(i(37268),i(41539),i(26699),i(32023),i(74916),i(77601),i(9653),i(73210),i(69826),i(47042),i(66210)),a=i(46952),o=i(19131),c=i(48085),l=i(4589),d=i(20144),u=i(73325);function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var m=(0,u.Z)(r.Z,a.Z,o.Z,c.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((function(e){return t[e]}));return e&&n[e]||(0,l.kb)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:(0,s.Z)({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=(0,s.Z)((0,s.Z)({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=(0,s.Z)((0,s.Z)({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",r=t.indexOf("-"),a=r<=-1;a?i.push(t):(s=t.slice(0,r),h(s)&&(s="")),n.class[s]=!0,n.class[t]=!a;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),v=d.Z.extend({name:"v-icon",$_wrapperFor:m,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(m,i,s?[s]:n)}})},97047:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(9726),s=(i(9653),i(69600),i(27852),i(23157),i(68083)),r=i(42529),a=i(73325),o=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i(48085),d=i(76290),u=i(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,p=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,d.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},16816:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var n=i(62032),s=i(4367),r=(i(84944),i(33792),i(34553),i(40561),i(83385)),a=r.Z.extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return(0,s.Z)((0,s.Z)({},r.Z.options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=(0,n.Z)(this.groups);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.toggle(t)}}catch(r){i.e(r)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:(0,s.Z)({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},10459:function(t,e,i){"use strict";i(73210);var n=i(20144);e["Z"]=n.Z.extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,n=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,n)}})},68083:function(t,e,i){"use strict";var n=i(9726);i(41539);function s(t,e,i){if("undefined"!==typeof window&&"IntersectionObserver"in window){var s=e.modifiers||{},a=e.value,o="object"===(0,n.Z)(a)?a:{handler:a,options:{}},c=o.handler,l=o.options,d=new IntersectionObserver((function(){var n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=null==(n=t._observe)?void 0:n[i.context._uid];if(l){var d=a.some((function(t){return t.isIntersecting}));!c||s.quiet&&!l.init||s.once&&!d&&!l.init||c(a,o,d),d&&s.once?r(t,e,i):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:d},d.observe(t)}}function r(t,e,i){var n,s=null==(n=t._observe)?void 0:n[i.context._uid];s&&(s.observer.unobserve(t),delete t._observe[i.context._uid])}var a={inserted:s,unbind:r};e["Z"]=a},46286:function(t,e,i){"use strict";i.d(e,{Z:function(){return x}});i(68309),i(92222),i(9653);var n=i(4589),s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function a(t){return"TouchEvent"===t.constructor.name}function o(t){return"KeyboardEvent"===t.constructor.name}var c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,s=0;if(!o(t)){var r=e.getBoundingClientRect(),c=a(t)?t.touches[t.touches.length-1]:t;n=c.clientX-r.left,s=c.clientY-r.top}var l=0,d=.3;e._ripple&&e._ripple.circle?(d=.15,l=e.clientWidth/2,l=i.center?l:l+Math.sqrt(Math.pow(n-l,2)+Math.pow(s-l,2))/4):l=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var u="".concat((e.clientWidth-2*l)/2,"px"),h="".concat((e.clientHeight-2*l)/2,"px"),p=i.center?u:"".concat(n-l,"px"),m=i.center?h:"".concat(s-l,"px");return{radius:l,scale:d,x:p,y:m,centerX:u,centerY:h}},l={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var a=c(t,e,i),o=a.radius,l=a.scale,d=a.x,u=a.y,h=a.centerX,p=a.centerY,m="".concat(2*o,"px");s.className="v-ripple__animation",s.style.width=m,s.style.height=m,e.appendChild(n);var v=window.getComputedStyle(e);v&&"static"===v.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,"translate(".concat(d,", ").concat(u,") scale3d(").concat(l,",").concat(l,",").concat(l,")")),s.dataset.activated=String(performance.now()),setTimeout((function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,"translate(".concat(h,", ").concat(p,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),s)}}}}};function d(t){return"undefined"===typeof t||!!t}function u(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||o(t),i._ripple.class&&(e.class=i._ripple.class),a(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){l.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),s)}else l.show(t,i,e)}}function h(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){h(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var m=!1;function v(t){m||t.keyCode!==n.Do.enter&&t.keyCode!==n.Do.space||(m=!0,u(t))}function f(t){m=!1,h(t)}function g(t){!0===m&&(m=!1,h(t))}function _(t,e,i){var n=d(e.value);n||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",h),t.addEventListener("mousedown",u),t.addEventListener("mouseup",h),t.addEventListener("mouseleave",h),t.addEventListener("keydown",v),t.addEventListener("keyup",f),t.addEventListener("blur",g),t.addEventListener("dragstart",h,{passive:!0})):!n&&i&&y(t)}function y(t){t.removeEventListener("mousedown",u),t.removeEventListener("touchstart",u),t.removeEventListener("touchend",h),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",h),t.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h),t.removeEventListener("keydown",v),t.removeEventListener("keyup",f),t.removeEventListener("dragstart",h),t.removeEventListener("blur",g)}function b(t,e,i){_(t,e,!1)}function C(t){delete t._ripple,y(t)}function S(t,e){if(e.value!==e.oldValue){var i=d(e.oldValue);_(t,e,i)}}var w={bind:b,unbind:C,update:S},x=w},66210:function(t,e,i){"use strict";var n=i(20144);function s(t){return function(e,i){for(var n in i)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(var s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=n.Z.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},46952:function(t,e,i){"use strict";var n=i(75200),s=i(23796),r=i(4367),a=(i(74916),i(23123),i(73210),i(41539),i(39714),i(20144)),o=i(71824),c=i(17093);e["Z"]=a.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,o.N6)("style must be an object",this),e):"string"===typeof e.class?((0,o.N6)("class must be an object",this),e):((0,c.NA)(t)?e.style=(0,r.Z)((0,r.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,r.Z)((0,r.Z)({},e.class),{},(0,s.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,o.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,o.N6)("class must be an object",this),e;if((0,c.NA)(t))e.style=(0,r.Z)((0,r.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var i=t.toString().trim().split(" ",2),a=(0,n.Z)(i,2),l=a[0],d=a[1];e.class=(0,r.Z)((0,r.Z)({},e.class),{},(0,s.Z)({},l+"--text",!0)),d&&(e.class["text--"+d]=!0)}return e}}})},96257:function(t,e,i){"use strict";i.d(e,{J:function(){return c},f:function(){return o}});var n=i(23796),s=(i(92222),i(20144)),r=i(71824);function a(t,e){return function(){return(0,r.Kd)("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,i){var r=e&&i?{register:a(e,i),unregister:a(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:(0,n.Z)({},t,{default:r})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s.Z.extend({name:"registrable-provide",provide:function(){return(0,n.Z)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},19131:function(t,e,i){"use strict";i(37268);var n=i(20144);e["Z"]=n.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},61376:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),n("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("BasePerson",{attrs:{person:t.dean}})],1)],1),n("v-row",{attrs:{justify:"center"}},t._l(t.contacts,(function(t,e){return n("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[n("BasePersonVertical",{attrs:{person:t}})],1)})),1),n("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),n("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.office,(function(t,e){return n("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[n("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),n("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),n("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),n("div",{staticClass:"section-background py-6"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),n("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),n("div",[n("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),n("div",[n("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+7 (812) 480-04-96"}},[t._v("+7 (812) 480-04-96")]),n("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(6586)}})],1),n("div",[t._v(" метро Спортивная, 700 м")])],1),n("v-list-item",[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(64818)}})],1),n("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("iframe",{staticStyle:{border:"0"},attrs:{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2597637846309!2d30.292978715440658!3d59.94442446859473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696313cde0dee4d%3A0xabce3576e7e58178!2z0JHQuNGA0LbQtdCy0LDRjyDQu9C40L3QuNGPLCAxNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5OTAzNA!5e0!3m2!1sru!2sru!4v1650138750227!5m2!1sru!2sru",width:"100%",height:"350",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])],1)],1)],1),n("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),n("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},s=[],r=(i(41539),i(78783),i(33948),i(20629)),a={name:"ContactsView",components:{LineComponent:function(){return i.e(5898).then(i.bind(i,65898))},BasePersonVertical:function(){return i.e(1373).then(i.bind(i,1373))},BasePerson:function(){return i.e(7303).then(i.bind(i,45403))}},computed:(0,r.rn)("contacts",["dean","contacts","office"])},o=a,c=i(1001),l=i(43453),d=i.n(l),u=i(82102),h=i(99846),p=i(96428),m=i(97047),v=i(16816),f=i(97620),g=i(10459),_=i(62877),y=(0,c.Z)(o,n,s,!1,null,"68a25c4c",null),b=y.exports;d()(y,{VCol:u.Z,VContainer:h.Z,VIcon:p.Z,VImg:m.Z,VList:v.Z,VListItem:f.Z,VListItemIcon:g.Z,VRow:_.Z})},6586:function(t,e,i){"use strict";t.exports=i.p+"img/undergroundBlue.fdd6d2cf.svg"},64818:function(t,e,i){"use strict";t.exports=i.p+"img/undergroundGreen.50aa21db.svg"}}]);
//# sourceMappingURL=5789-legacy.3580cf1b.js.map