"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9045,7949],{3150:function(t,e,i){i.d(e,{Z:function(){return v}});var s=i(5648),n=i(624),r=n.Z,a=i(7352),o=i(2936),l=i(3377),c=i(3536),d=i(6505),h=i(3039),u=i(3325),m=i(1824);const p=(0,u.Z)(s.Z,d.Z,c.Z,h.Z,(0,a.d)("btnToggle"),(0,o.d)("inputValue"));var v=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,m.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(r,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},2102:function(t,e,i){i(7273);var s=i(144),n=i(6290),r=i(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>a.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let a="";for(const n in e)a+=String(e[n]);let o=u.get(a);if(!o){let t;for(t in o=[],d)d[t].forEach((i=>{const s=e[i],n=h(t,i,s);n&&o.push(n)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(a,o)}return t(e.tag,(0,n.ZP)(i,{class:o}),s)}})},6428:function(t,e,i){i.d(e,{Z:function(){return p}});var s,n=i(6210),r=i(6952),a=i(3039),o=i(8085),l=i(4589),c=i(144),d=i(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const m=(0,d.Z)(n.Z,r.Z,a.Z,o.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&s[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let n="material-icons";const r=t.indexOf("-"),a=r<=-1;a?i.push(t):(n=t.slice(0,r),h(n)&&(n="")),s.class[n]=!0,s.class[t]=!a;const o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=c.Z.extend({name:"v-icon",$_wrapperFor:m,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(m,e,s?[s]:i)}})},7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),n=i(2529),r=i(3325),a=(0,r.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,r.Z)(o,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},459:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,i)}})},624:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(8083),n=i(6952),r=i(4589),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},8083:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],o)=>{var l;const c=null==(l=t._observe)?void 0:l[i.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!a||s.quiet&&!c.init||s.once&&!d&&!c.init||a(r,o,d),d&&s.once?n(t,e,i):c.init=!0}),o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,i){var s;const n=null==(s=t._observe)?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e["Z"]=r},6286:function(t,e,i){i.d(e,{Z:function(){return w}});var s=i(4589);const n=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function a(t){return"TouchEvent"===t.constructor.name}function o(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,n=0;if(!o(t)){const i=e.getBoundingClientRect(),r=a(t)?t.touches[t.touches.length-1]:t;s=r.clientX-i.left,n=r.clientY-i.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=i.center?r:r+Math.sqrt((s-r)**2+(n-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",d=(e.clientHeight-2*r)/2+"px",h=i.center?c:s-r+"px",u=i.center?d:n-r+"px";return{radius:r,scale:l,x:h,y:u,centerX:c,centerY:d}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:a,scale:o,x:c,y:d,centerX:h,centerY:u}=l(t,e,i),m=2*a+"px";n.className="v-ripple__animation",n.style.width=m,n.style.height=m,e.appendChild(s);const p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),r(n,`translate(${c}, ${d}) scale3d(${o},${o},${o})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),r(n,`translate(${h}, ${u}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),n)}};function d(t){return"undefined"===typeof t||!!t}function h(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||o(t),i._ripple.class&&(e.class=i._ripple.class),a(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(t,i,e)}}function u(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{u(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function m(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let p=!1;function v(t){p||t.keyCode!==s.Do.enter&&t.keyCode!==s.Do.space||(p=!0,h(t))}function g(t){p=!1,u(t)}function f(t){!0===p&&(p=!1,u(t))}function b(t,e,i){const s=d(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const n=e.value||{};n.center&&(t._ripple.centered=!0),n.class&&(t._ripple.class=e.value.class),n.circle&&(t._ripple.circle=n.circle),s&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",m,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",h),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",v),t.addEventListener("keyup",g),t.addEventListener("blur",f),t.addEventListener("dragstart",u,{passive:!0})):!s&&i&&_(t)}function _(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",m),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",v),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",u),t.removeEventListener("blur",f)}function y(t,e,i){b(t,e,!1)}function S(t){delete t._ripple,_(t)}function C(t,e){if(e.value===e.oldValue)return;const i=d(e.oldValue);b(t,e,i)}const x={bind:y,unbind:S,update:C};var w=x},6210:function(t,e,i){var s=i(144);function n(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},6952:function(t,e,i){var s=i(144),n=i(1824),r=i(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},3536:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(144),n=i(4589);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return s.Z.extend({name:"positionable",props:t.length?(0,n.ji)(r,t):r})}e["Z"]=a()},6257:function(t,e,i){i.d(e,{J:function(){return o},f:function(){return a}});var s=i(144),n=i(1824);function r(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function a(t,e,i){const n=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function o(t,e=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3039:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9032:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-8 mt-md-16 font-color"},[s("div",{class:t.$vuetify.breakpoint.mdAndUp?"mb-10":"mb-minus",staticStyle:{"z-index":"2",position:"relative"}},[s("v-sheet",{staticClass:"sheet-1 rounded-pill",staticStyle:{position:"relative"},attrs:{color:"#00A1FF"}},[s("v-row",{staticClass:"px-2 px-md-6"},[s("v-col",{staticClass:"d-flex justify-start align-center",class:t.$vuetify.breakpoint.smAndDown?"py-2":"",attrs:{cols:"9",md:"7"}},[s("a",{staticStyle:{width:"100%"},attrs:{href:"https://itmo.ru/ru/",target:"_blank"}},[s("v-img",{attrs:{position:"0 center",contain:"",width:"100%",height:t.$vuetify.breakpoint.smAndDown?"15":t.$vuetify.breakpoint.xl?"48":"36",src:i(2686)}})],1)]),t.$vuetify.breakpoint.mdAndUp?s("v-col",{staticClass:"d-flex justify-end align-center",attrs:{cols:"5"}},[s("div",{staticClass:"text-h6 text-xl-h5"},[t._v(" Факультет ИКТ ")])]):t._e()],1)],1),s("v-sheet",{staticClass:"rounded-r-pill sheet-2",attrs:{color:"#6A30F4"}},[s("v-row",[s("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"5"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",{staticClass:"footer-inf",style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[t._v(" Информация © 1993–2022 Университет ИТМО ")]),s("v-list-item",{staticClass:"footer-inf",style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[t._v(" Разработка © 2022 Факультет ИКТ ")]),s("v-list-item",{style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[s("a",{staticClass:"link font-weight-light text-decoration-underline",attrs:{target:"_blank",href:"https://itmo.ru/file/pages/79/personal_data_policy.pdf"}},[t._v(" Политика по обработке персональных данных ")])]),s("v-list-item",{style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[s("a",{staticClass:"link font-weight-thin text-decoration-underline",attrs:{target:"_blank",href:"https://itmo.ru/images/pages/79/Pravila_ispolzovanija_informacii.pdf"}},[t._v(" Правила использования контента ")])])],1)],1),t.$vuetify.breakpoint.mdAndUp?s("v-col",{staticClass:"pa-0",attrs:{cols:"7"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-map-marker-radius-outline")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-bank-outline")])],1),s("div",[t._v(" 197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А(юр. адрес) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-email-outline")])],1),s("div",[s("a",{attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-phone-outline")])],1),s("div",[s("a",{attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36")]),t._v(" (Пн-Пт: 11:00-16:00) ")])],1)],1)],1):t._e()],1)],1),t.$vuetify.breakpoint.mdAndUp?s("v-sheet",{staticClass:"rounded-r-pill sheet-3 py-3",attrs:{color:"#00A1FF"}},[s("v-row",{attrs:{"no-gutters":""}},[s("div",{staticClass:"text-h6 pr-4"},[t._v(" Присоединяйся ")]),s("div",{staticClass:"d-flex"},t._l(t.social,(function(t,e){return s("v-btn",{key:e,staticClass:"ml-4",attrs:{icon:"",rounded:"",link:"",href:t.link,target:"_blank"}},[s("v-img",{attrs:{src:t.icon}})],1)})),1)])],1):t._e()],1),t.$vuetify.breakpoint.mdAndUp?s("v-sheet",{staticClass:"sheet-4 d-flex justify-end",attrs:{color:"#7BDBFA"}},[s("v-sheet",{staticClass:"rounded-l-pill sheet-5",attrs:{color:"#835FFE"}},[s("v-img",{staticClass:"rounded-l-pill",attrs:{height:"100%",width:"100%",position:"100% 0",src:i(6652)}})],1)],1):t._e(),t.$vuetify.breakpoint.smAndDown?s("div",{staticStyle:{position:"relative","overflow-x":"hidden"}},[s("div",{staticStyle:{"z-index":"10",position:"relative"}},[s("v-sheet",{staticClass:"sheet-1 rounded-pill",staticStyle:{position:"relative",top:"1em"},attrs:{color:"#00A1FF"}},[s("div",{staticClass:"d-flex align-center px-2 py-1"},[s("div",{staticClass:"text-subtitle-2"},[t._v(" Факультет ИКТ ")])])]),s("v-sheet",{staticClass:"sheet-6",attrs:{color:"#835FFE"}},[s("v-col",{staticClass:"pa-0"},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-bank-outline ")])],1),s("div",[t._v(" 197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А(юр. адрес) ")])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36")]),t._v(" (Пн-Пт: 11:00-16:00) ")])],1)],1)],1)],1),s("v-sheet",{staticClass:"py-2 pl-7",attrs:{color:"#00A1FF"}},[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"text-subtitle-2 pr-4"},[t._v(" Присоединяйся ")]),s("div",{staticClass:"d-flex"},t._l(t.social,(function(t,e){return s("v-btn",{key:e,staticClass:"ml-2",attrs:{"x-small":"",icon:"",rounded:"",link:"",href:t.link,target:"_blank"}},[s("v-img",{attrs:{height:"20",width:"20",src:t.icon}})],1)})),1)])])],1),s("v-sheet",{staticClass:"rounded-r-pill",staticStyle:{position:"absolute",top:"0",right:"-30px","z-index":"0"},attrs:{color:"#7BDBFA",height:"200",width:"110%"}})],1):t._e()],1)},n=[],r=i(6465),a=i(4849),o=i(5674),l={name:"TheFooterComponent",data:()=>({social:[{icon:a,link:"https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A"},{icon:r,link:"https://vk.com/dict_itmo"},{icon:o,link:"https://t.me/itmoict"}]})},c=l,d=i(1001),h=i(3453),u=i.n(h),m=i(3150),p=i(2102),v=i(6428),g=i(7047),f=i(6816),b=i(7620),_=i(459),y=i(2877),S=i(3385),C=(0,d.Z)(c,s,n,!1,null,"47d0521d",null),x=C.exports;u()(C,{VBtn:m.Z,VCol:p.Z,VIcon:v.Z,VImg:g.Z,VList:f.Z,VListItem:b.Z,VListItemIcon:_.Z,VRow:y.Z,VSheet:S.Z})},5674:function(t,e,i){t.exports=i.p+"img/Button-S-Telegram-ic.72844a55.svg"},6465:function(t,e,i){t.exports=i.p+"img/Button-S-Vk-ic.52efa767.svg"},4849:function(t,e,i){t.exports=i.p+"img/Button-S-Youtube-ic.f614c596.svg"},6652:function(t,e,i){t.exports=i.p+"img/footer-building.8d5c9494.svg"},2686:function(t,e,i){t.exports=i.p+"img/logoITMO.c2cd98b0.svg"}}]);
//# sourceMappingURL=9045.efb81431.js.map