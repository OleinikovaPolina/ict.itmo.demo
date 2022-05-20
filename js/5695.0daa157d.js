"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5695,3022],{680:function(t,e,i){i.d(e,{Z:function(){return b}});var s=i(5648),n=i(8083),r=i(6952),o=i(4589),a=r.Z.extend({name:"v-progress-circular",directives:{intersect:n.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=a,c=i(7352),d=i(2936),h=i(3377),u=i(3536),p=i(6505),m=i(3039),v=i(3325),g=i(1824);const f=(0,v.Z)(s.Z,p.Z,u.Z,m.Z,(0,c.d)("btnToggle"),(0,d.d)("inputValue"));var b=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},2102:function(t,e,i){i(7273);var s=i(144),n=i(6290),r=i(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=u.get(o);if(!a){let t;for(t in a=[],d)d[t].forEach((i=>{const s=e[i],n=h(t,i,s);n&&a.push(n)}));const i=a.some((t=>t.startsWith("col-")));a.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(o,a)}return t(e.tag,(0,n.ZP)(i,{class:a}),s)}})},2877:function(t,e,i){i(7273);var s=i(144),n=i(6290),r=i(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((i,s)=>(i[t+(0,r.jC)(s)]=e(),i)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...a,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),v={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=g[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let o=b.get(r);if(!o){let t;for(t in o=[],v)v[t].forEach((i=>{const s=e[i],n=f(t,i,s);n&&o.push(n)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,o)}return t(e.tag,(0,n.ZP)(i,{staticClass:"row",class:o}),s)}})},7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),n=i(2529),r=i(3325),o=(0,r.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,r.Z)(a,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},3385:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(6210),n=i(6952),r=i(3377),o=i(2529),a=i(3712),l=i(8085),c=i(3325),d=(0,c.Z)(s.Z,n.Z,r.Z,o.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},8083:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:o,options:a}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],a)=>{var l;const c=null==(l=t._observe)?void 0:l[i.context._uid];if(!c)return;const d=r.some((t=>t.isIntersecting));!o||s.quiet&&!c.init||s.once&&!d&&!c.init||o(r,a,d),d&&s.once?n(t,e,i):c.init=!0}),a);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,i){var s;const n=null==(s=t._observe)?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e["Z"]=r},6286:function(t,e,i){i.d(e,{Z:function(){return w}});var s=i(4589);const n=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,n=0;if(!a(t)){const i=e.getBoundingClientRect(),r=o(t)?t.touches[t.touches.length-1]:t;s=r.clientX-i.left,n=r.clientY-i.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=i.center?r:r+Math.sqrt((s-r)**2+(n-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",d=(e.clientHeight-2*r)/2+"px",h=i.center?c:s-r+"px",u=i.center?d:n-r+"px";return{radius:r,scale:l,x:h,y:u,centerX:c,centerY:d}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:o,scale:a,x:c,y:d,centerX:h,centerY:u}=l(t,e,i),p=2*o+"px";n.className="v-ripple__animation",n.style.width=p,n.style.height=p,e.appendChild(s);const m=window.getComputedStyle(e);m&&"static"===m.position&&(e.style.position="relative",e.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),r(n,`translate(${c}, ${d}) scale3d(${a},${a},${a})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),r(n,`translate(${h}, ${u}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),n)}};function d(t){return"undefined"===typeof t||!!t}function h(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(t,i,e)}}function u(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{u(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let m=!1;function v(t){m||t.keyCode!==s.Do.enter&&t.keyCode!==s.Do.space||(m=!0,h(t))}function g(t){m=!1,u(t)}function f(t){!0===m&&(m=!1,u(t))}function b(t,e,i){const s=d(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const n=e.value||{};n.center&&(t._ripple.centered=!0),n.class&&(t._ripple.class=e.value.class),n.circle&&(t._ripple.circle=n.circle),s&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",h),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",v),t.addEventListener("keyup",g),t.addEventListener("blur",f),t.addEventListener("dragstart",u,{passive:!0})):!s&&i&&y(t)}function y(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",v),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",u),t.removeEventListener("blur",f)}function _(t,e,i){b(t,e,!1)}function S(t){delete t._ripple,y(t)}function C(t,e){if(e.value===e.oldValue)return;const i=d(e.oldValue);b(t,e,i)}const x={bind:_,unbind:S,update:C};var w=x},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(6257);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),a=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},3536:function(t,e,i){i.d(e,{d:function(){return o}});var s=i(144),n=i(4589);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return s.Z.extend({name:"positionable",props:t.length?(0,n.ji)(r,t):r})}e["Z"]=o()},6257:function(t,e,i){i.d(e,{J:function(){return a},f:function(){return o}});var s=i(144),n=i(1824);function r(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,i){const n=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function a(t,e=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),n=i(6286),r=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const r=n();e["Z"]=r},5695:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"link-arrow"},[0===t.block.type?s("div",{staticClass:"ql-editor pa-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.block.content.text)}}):t._e(),1===t.block.type?s("v-row",t._l(t.block.content.blocks,(function(t,e){return s("v-col",{key:e,attrs:{cols:"12",md:"6"}},[s("BaseNewsBlocks",{attrs:{block:t}})],1)})),1):t._e(),2===t.block.type?s("div",{staticStyle:{position:"relative"}},[s("v-img",{attrs:{width:"100%",src:t.block.content.imgName.croppie}}),s("div",{staticClass:"text-body-1 pt-2",staticStyle:{opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")]),t.edit?s("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(e){return t.$emit("beforeCropInsert")}}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1):t._e()],1):t._e(),3===t.block.type?s("div",[s("CarouselComponent",{attrs:{slider:t.block.content.imagesName,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"pa-2"},[s("img",{class:"carousel-img-"+t.block.id,staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item.croppie},on:{load:function(i){return t.getHeight(e.item.croppie)}}})])])]}},{key:"subtitle",fn:function(){return[s("div",{staticClass:"text-body-1 pl-2",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")])]},proxy:!0},t.edit?{key:"index",fn:function(e){return[s("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(i){return t.$emit("beforeCropMultipleInsertOne",t.block,e.index)}}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}:null],null,!0)})],1):t._e(),4===t.block.type?s("div",[s("div",{staticClass:"d-flex align-start"},[s("div",[s("v-img",{attrs:{width:"50",height:"50",src:i(3336)}})],1),s("div",{staticClass:"pl-4"},[t._v(" "+t._s(t.block.content.text)+" ")])]),s("div",{staticClass:"text-end font-weight-bold",staticStyle:{color:"#2DC0C5"}},[t._v(" "+t._s(t.block.content.author)+" ")])]):t._e(),5===t.block.type?s("div",[s("div",{staticClass:"text-h6 text-sm-h5 default-color"},[t._v(" "+t._s(t.block.content.text)+" ")])]):t._e()],1)},n=[],r={name:"BaseNewsBlocks",components:{CarouselComponent:()=>Promise.all([i.e(8722),i.e(4970)]).then(i.bind(i,8722))},props:{block:{type:Object,default:null},edit:{type:Boolean,default:!1}},emits:["beforeCropInsert","beforeCropMultipleInsertOne"],methods:{getHeight(t){if(t){let e=new Image;e.onload=()=>{let t=e.height;document.querySelectorAll(".carousel-img-"+this.block.id).length&&(t=Math.min(t,document.querySelectorAll(".carousel-img-"+this.block.id)[0].height),document.querySelectorAll(".carousel-img-"+this.block.id).forEach((e=>e.height=t)))},e.src=t}}}},o=r,a=i(1001),l=i(3453),c=i.n(l),d=i(680),h=i(2102),u=i(6428),p=i(7047),m=i(2877),v=(0,a.Z)(o,s,n,!1,null,null,null),g=v.exports;c()(v,{VBtn:d.Z,VCol:h.Z,VIcon:u.Z,VImg:p.Z,VRow:m.Z})},3336:function(t,e,i){t.exports=i.p+"img/bxs_quote-alt-left.c5a4e697.svg"}}]);
//# sourceMappingURL=5695.0daa157d.js.map