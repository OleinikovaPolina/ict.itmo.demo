"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8980],{8582:function(){},9846:function(t,e,i){i.d(e,{Z:function(){return o}});i(8582),i(7273);var s=i(144);function n(t){return s.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:n}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var r=i(6290),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,r.ZP)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},6428:function(t,e,i){i.d(e,{Z:function(){return p}});var s,n=i(6210),r=i(6952),o=i(3039),a=i(8085),l=i(4589),c=i(144),d=i(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const m=(0,d.Z)(n.Z,r.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&s[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let n="material-icons";const r=t.indexOf("-"),o=r<=-1;o?i.push(t):(n=t.slice(0,r),h(n)&&(n="")),s.class[n]=!0,s.class[t]=!o;const a=this.getSize();return a&&(s.style={fontSize:a}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=c.Z.extend({name:"v-icon",$_wrapperFor:m,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(m,e,s?[s]:i)}})},7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),n=i(2529),r=i(3325),o=(0,r.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,r.Z)(a,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},6816:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(3385),n=s.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},459:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,i)}})},8083:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[i.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!o||s.quiet&&!c.init||s.once&&!d&&!c.init||o(r,a,d),d&&s.once?n(t,e,i):c.init=!0}),a);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,i){var s;const n=null==(s=t._observe)?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e["Z"]=r},6286:function(t,e,i){i.d(e,{Z:function(){return w}});var s=i(4589);const n=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,n=0;if(!a(t)){const i=e.getBoundingClientRect(),r=o(t)?t.touches[t.touches.length-1]:t;s=r.clientX-i.left,n=r.clientY-i.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=i.center?r:r+Math.sqrt((s-r)**2+(n-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",d=(e.clientHeight-2*r)/2+"px",h=i.center?c:s-r+"px",u=i.center?d:n-r+"px";return{radius:r,scale:l,x:h,y:u,centerX:c,centerY:d}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:o,scale:a,x:c,y:d,centerX:h,centerY:u}=l(t,e,i),m=2*o+"px";n.className="v-ripple__animation",n.style.width=m,n.style.height=m,e.appendChild(s);const p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),r(n,`translate(${c}, ${d}) scale3d(${a},${a},${a})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),r(n,`translate(${h}, ${u}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),n)}};function d(t){return"undefined"===typeof t||!!t}function h(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(t,i,e)}}function u(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{u(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function m(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let p=!1;function v(t){p||t.keyCode!==s.Do.enter&&t.keyCode!==s.Do.space||(p=!0,h(t))}function g(t){p=!1,u(t)}function f(t){!0===p&&(p=!1,u(t))}function _(t,e,i){const s=d(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const n=e.value||{};n.center&&(t._ripple.centered=!0),n.class&&(t._ripple.class=e.value.class),n.circle&&(t._ripple.circle=n.circle),s&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",m,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",h),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",v),t.addEventListener("keyup",g),t.addEventListener("blur",f),t.addEventListener("dragstart",u,{passive:!0})):!s&&i&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",m),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",v),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",u),t.removeEventListener("blur",f)}function y(t,e,i){_(t,e,!1)}function S(t){delete t._ripple,b(t)}function C(t,e){if(e.value===e.oldValue)return;const i=d(e.oldValue);_(t,e,i)}const x={bind:y,unbind:S,update:C};var w=x},6210:function(t,e,i){var s=i(144);function n(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},6952:function(t,e,i){var s=i(144),n=i(1824),r=i(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),a=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},6257:function(t,e,i){i.d(e,{J:function(){return a},f:function(){return o}});var s=i(144),n=i(1824);function r(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,i){const n=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function a(t,e=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3039:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2951:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),s("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[s("BasePerson",{attrs:{person:t.dean}})],1)],1),s("v-row",{attrs:{justify:"center"}},t._l(t.contacts,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1),s("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),s("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.office,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),s("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),s("div",{staticClass:"section-background py-6"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"5"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+7 (812) 480-04-96"}},[t._v("+7 (812) 480-04-96")]),s("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(6586)}})],1),s("div",[t._v(" метро Спортивная, 700 м")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(4818)}})],1),s("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"7"}},[s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2597637846309!2d30.292978715440658!3d59.94442446859473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696313cde0dee4d%3A0xabce3576e7e58178!2z0JHQuNGA0LbQtdCy0LDRjyDQu9C40L3QuNGPLCAxNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5OTAzNA!5e0!3m2!1sru!2sru!4v1650138750227!5m2!1sru!2sru",width:"100%",height:"350",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])],1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),s("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},n=[],r=i(629),o={name:"ContactsView",components:{LineComponent:()=>i.e(5898).then(i.bind(i,5898)),BasePersonVertical:()=>i.e(1373).then(i.bind(i,1373)),BasePerson:()=>i.e(7719).then(i.bind(i,1894))},computed:(0,r.rn)("contacts",["dean","contacts","office"])},a=o,l=i(1001),c=i(3453),d=i.n(c),h=i(2102),u=i(9846),m=i(6428),p=i(7047),v=i(6816),g=i(7620),f=i(459),_=i(2877),b=(0,l.Z)(a,s,n,!1,null,"20454f13",null),y=b.exports;d()(b,{VCol:h.Z,VContainer:u.Z,VIcon:m.Z,VImg:p.Z,VList:v.Z,VListItem:g.Z,VListItemIcon:f.Z,VRow:_.Z})},6586:function(t,e,i){t.exports=i.p+"img/undergroundBlue.fdd6d2cf.svg"},4818:function(t,e,i){t.exports=i.p+"img/undergroundGreen.50aa21db.svg"}}]);
//# sourceMappingURL=8980.18e24a05.js.map