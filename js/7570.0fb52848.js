"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7570],{8582:function(){},9846:function(t,e,n){n.d(e,{Z:function(){return a}});n(8582),n(7273);var i=n(144);function s(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var r=n(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let s;const{attrs:a}=n;return a&&(n.attrs={},s=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},9762:function(t,e,n){n(8582);var i=n(4589);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},5827:function(t,e,n){n.d(e,{Fx:function(){return d},Zq:function(){return u},Z5:function(){return c},Qn:function(){return p}});var i=n(6290);function s(t=[],...e){return Array().concat(t,...e)}function r(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const r="transition"+(n.props.group?"-group":""),a={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(a.on.leave=s(a.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:s}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=s+"px"})),a.on.afterLeave=s(a.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:s,height:r}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=s||"",t.style.height=r||""}}))),n.props.hideOnLeave&&(a.on.leave=s(a.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(r,(0,i.ZP)(n.data,a),n.children)}}}function a(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,s){return n("transition",(0,i.ZP)(s.data,{props:{name:t},on:e}),s.children)}}}var o=n(4589);function l(t="",e=!1){const n=e?"width":"height",i=`offset${(0,o.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const r=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition");const c=r("fade-transition"),p=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),d=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),a("expand-transition",l())),u=a("expand-x-transition",l("",!0))},549:function(t,e,n){function i(t,e,n){const i=e.value,s=e.options||{passive:!0};window.addEventListener("resize",i,s),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:s},e.modifiers&&e.modifiers.quiet||i()}function s(t,e,n){var i;if(null==(i=t._onResize)||!i[n.context._uid])return;const{callback:s,options:r}=t._onResize[n.context._uid];window.removeEventListener("resize",s,r),delete t._onResize[n.context._uid]}const r={inserted:i,unbind:s};e["Z"]=r},6286:function(t,e,n){n.d(e,{Z:function(){return k}});var i=n(4589);const s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function a(t){return"TouchEvent"===t.constructor.name}function o(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,n={})=>{let i=0,s=0;if(!o(t)){const n=e.getBoundingClientRect(),r=a(t)?t.touches[t.touches.length-1]:t;i=r.clientX-n.left,s=r.clientY-n.top}let r=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((i-r)**2+(s-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*r)/2+"px",p=(e.clientHeight-2*r)/2+"px",d=n.center?c:i-r+"px",u=n.center?p:s-r+"px";return{radius:r,scale:l,x:d,y:u,centerX:c,centerY:p}},c={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:a,scale:o,x:c,y:p,centerX:d,centerY:u}=l(t,e,n),m=2*a+"px";s.className="v-ripple__animation",s.style.width=m,s.style.height=m,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,`translate(${c}, ${p}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,`translate(${d}, ${u}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),s)}};function p(t){return"undefined"===typeof t||!!t}function d(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||o(t),n._ripple.class&&(e.class=n._ripple.class),a(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{c.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else c.show(t,n,e)}}function u(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{u(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function m(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function h(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,d(t))}function v(t){f=!1,u(t)}function y(t){!0===f&&(f=!1,u(t))}function _(t,e,n){const i=p(e.value);i||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),i&&!n?(t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",m,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",d),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",h),t.addEventListener("keyup",v),t.addEventListener("blur",y),t.addEventListener("dragstart",u,{passive:!0})):!i&&n&&g(t)}function g(t){t.removeEventListener("mousedown",d),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",m),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",h),t.removeEventListener("keyup",v),t.removeEventListener("dragstart",u),t.removeEventListener("blur",y)}function C(t,e,n){_(t,e,!1)}function w(t){delete t._ripple,g(t)}function x(t,e){if(e.value===e.oldValue)return;const n=p(e.oldValue);_(t,e,n)}const b={bind:C,unbind:w,update:x};var k=b},6210:function(t,e,n){var i=n(144);function s(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},6952:function(t,e,n){var i=n(144),s=n(1824),r=n(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,s.N6)("style must be an object",this),e):"string"===typeof e.class?((0,s.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,s.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,s.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},2529:function(t,e,n){var i=n(4589),s=n(144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),s=(0,i.kb)(this.minWidth),r=(0,i.kb)(this.maxHeight),a=(0,i.kb)(this.maxWidth),o=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),s&&(t.minWidth=s),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},3536:function(t,e,n){n.d(e,{d:function(){return a}});var i=n(144),s=n(4589);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return i.Z.extend({name:"positionable",props:t.length?(0,s.ji)(r,t):r})}e["Z"]=a()},6257:function(t,e,n){n.d(e,{J:function(){return o},f:function(){return a}});var i=n(144),s=n(1824);function r(t,e){return()=>(0,s.Kd)(`The ${t} component must be used inside a ${e}`)}function a(t,e,n){const s=e&&n?{register:r(e,n),unregister:r(e,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[t]:{default:s}}})}function o(t,e=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},1706:function(t,e,n){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},8299:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-container app-background"},[n("v-container",[n("v-row",{staticClass:"d-flex align-center",staticStyle:{"background-color":"inherit","box-shadow":"none"}},[n("div",{staticClass:"pa-3 pr-lg-8 pr-xl-12"},[n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"logo",attrs:{viewBox:"0 0 573 279",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M103.885 148.725L27.587 176.116L103.902 242.843L103.885 148.725Z",fill:"url(#paint0_linear_277:1953)"}}),n("path",{attrs:{d:"M168.032 126.396L27.5844 176.118V68.0075L168.032 18.2859V126.396Z",fill:"url(#paint1_linear_277:1953)"}}),n("path",{attrs:{d:"M170.967 128.899L247.265 101.508L170.95 34.7815L170.967 128.899Z",fill:"url(#paint2_linear_277:1953)"}}),n("path",{attrs:{d:"M106.819 151.227L247.268 101.506V209.617L106.819 259.339V151.227Z",fill:"url(#paint3_linear_277:1953)"}}),n("mask",{staticStyle:{"mask-type":"alpha"},attrs:{id:"mask0_277:1953",maskUnits:"userSpaceOnUse",x:"168",y:"34",width:"77",height:"95"}},[n("path",{attrs:{d:"M168.05 128.899L244.348 101.508L168.032 34.7815L168.05 128.899Z",fill:"url(#paint4_linear_277:1953)"}})]),n("g",{attrs:{mask:"url(#mask0_277:1953)"}},[n("path",{attrs:{d:"M166.691 143.009C159.857 127.498 135.378 116.019 160.669 104.887C185.959 93.7549 255.211 89.3757 262.045 104.887C268.881 120.398 241.165 156.958 215.873 168.09C190.584 179.222 173.525 158.521 166.691 143.009Z",fill:"url(#paint5_radial_277:1953)","fill-opacity":"0.25"}})]),n("mask",{staticStyle:{"mask-type":"alpha"},attrs:{id:"mask1_277:1953",maskUnits:"userSpaceOnUse",x:"27",y:"148",width:"77",height:"95"}},[n("path",{attrs:{d:"M103.885 148.725L27.587 176.116L103.902 242.843L103.885 148.725Z",fill:"url(#paint6_linear_277:1953)"}})]),n("g",{attrs:{mask:"url(#mask1_277:1953)"}},[n("path",{attrs:{d:"M105.244 134.614C112.078 150.126 136.556 161.605 111.266 172.737C85.9753 183.869 16.7236 188.249 9.8891 172.737C3.05467 157.226 30.7701 120.666 56.0608 109.534C81.3513 98.4017 98.4092 119.103 105.244 134.614Z",fill:"url(#paint7_radial_277:1953)","fill-opacity":"0.25"}})]),n("path",{attrs:{d:"M293.688 189C292.728 189 291.912 188.664 291.24 187.992C290.568 187.32 290.232 186.456 290.232 185.4V91.8C290.232 90.744 290.568 89.88 291.24 89.208C291.912 88.536 292.776 88.2 293.832 88.2H306.792C307.848 88.2 308.664 88.536 309.24 89.208C309.912 89.88 310.248 90.744 310.248 91.8V157.896L357.624 90.504C358.008 90.024 358.536 89.544 359.208 89.064C359.88 88.488 360.744 88.2 361.8 88.2H373.752C374.712 88.2 375.528 88.536 376.2 89.208C376.872 89.88 377.208 90.744 377.208 91.8V185.544C377.208 186.504 376.872 187.32 376.2 187.992C375.528 188.664 374.712 189 373.752 189H360.792C359.736 189 358.872 188.664 358.2 187.992C357.528 187.32 357.192 186.504 357.192 185.544V120.744L309.96 186.696C309.672 187.08 309.192 187.56 308.52 188.136C307.848 188.712 306.936 189 305.784 189H293.688ZM403.094 189C402.134 189 401.318 188.712 400.646 188.136C399.974 187.464 399.638 186.6 399.638 185.544V91.8C399.638 90.744 399.974 89.88 400.646 89.208C401.318 88.536 402.134 88.2 403.094 88.2H416.198C417.254 88.2 418.07 88.536 418.646 89.208C419.318 89.88 419.654 90.744 419.654 91.8V128.952H432.182L455.654 90.792C456.134 90.024 456.758 89.4 457.526 88.92C458.39 88.44 459.494 88.2 460.838 88.2H475.094C476.054 88.2 476.774 88.488 477.254 89.064C477.83 89.64 478.118 90.36 478.118 91.224C478.118 91.704 477.926 92.28 477.542 92.952L450.326 136.872L480.134 184.104C480.422 184.392 480.566 184.92 480.566 185.688C480.566 186.552 480.23 187.32 479.558 187.992C478.982 188.664 478.214 189 477.254 189H462.422C461.174 189 460.214 188.712 459.542 188.136C458.966 187.56 458.486 187.032 458.102 186.552L432.902 146.952H419.654V185.544C419.654 186.504 419.318 187.32 418.646 187.992C418.07 188.664 417.254 189 416.198 189H403.094ZM521.739 189C520.779 189 519.963 188.664 519.291 187.992C518.619 187.32 518.283 186.504 518.283 185.544V105.912H491.643C490.683 105.912 489.867 105.576 489.195 104.904C488.523 104.232 488.187 103.416 488.187 102.456V91.8C488.187 90.744 488.523 89.88 489.195 89.208C489.867 88.536 490.683 88.2 491.643 88.2H565.083C566.139 88.2 567.003 88.536 567.675 89.208C568.347 89.88 568.683 90.744 568.683 91.8V102.456C568.683 103.416 568.347 104.232 567.675 104.904C567.003 105.576 566.139 105.912 565.083 105.912H538.587V185.544C538.587 186.504 538.251 187.32 537.579 187.992C536.907 188.664 536.043 189 534.987 189H521.739Z",fill:"url(#paint8_linear_277:1953)"}}),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_277:1953",x1:"154.609",y1:"230.903",x2:"43.8175",y2:"154.105",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("linearGradient",{attrs:{id:"paint1_linear_277:1953",x1:"27.5844",y1:"97.2019",x2:"168.032",y2:"97.2019",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("linearGradient",{attrs:{id:"paint2_linear_277:1953",x1:"120.243",y1:"46.7208",x2:"231.035",y2:"123.519",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("linearGradient",{attrs:{id:"paint3_linear_277:1953",x1:"247.268",y1:"180.423",x2:"106.819",y2:"180.423",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("linearGradient",{attrs:{id:"paint4_linear_277:1953",x1:"117.326",y1:"46.7208",x2:"228.118",y2:"123.519",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("radialGradient",{attrs:{id:"paint5_radial_277:1953",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(202.262 130.083) rotate(-121.239) scale(31.8149 51.8589)"}},[n("stop"),n("stop",{attrs:{offset:"1","stop-opacity":"0"}})],1),n("linearGradient",{attrs:{id:"paint6_linear_277:1953",x1:"154.609",y1:"230.903",x2:"43.8175",y2:"154.105",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2DC0C5"}}),n("stop",{attrs:{offset:"1","stop-color":"#2E9CEF"}})],1),n("radialGradient",{attrs:{id:"paint7_radial_277:1953",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(69.673 147.542) rotate(58.7608) scale(31.8149 51.8588)"}},[n("stop"),n("stop",{attrs:{offset:"1","stop-opacity":"0"}})],1),n("linearGradient",{attrs:{id:"paint8_linear_277:1953",x1:"279",y1:"103.373",x2:"517.234",y2:"187.729",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2E9FED"}}),n("stop",{attrs:{offset:"1","stop-color":"#2DBDC9"}})],1)],1)])])],1),t.$vuetify.breakpoint.mdAndUp?n("v-col",{staticClass:"d-flex align-center"},[t._l(t.links,(function(e,i){return[3!==i?n("router-link",{key:i,staticClass:"header-link mr-2 mr-lg-4  mr-xl-8",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")]):n("div",{key:i,staticClass:"text-center"},[n("v-menu",{staticClass:"ict-dropdown",attrs:{"offset-y":"",rounded:"b-xl","nudge-left":"15"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[n("div",t._g(t._b({staticClass:"header-link mr-2 mr-lg-4 mr-xl-8 d-flex align-center"},"div",s,!1),i),[n("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),n("div",{staticClass:"dropdown-symbol",style:{transform:"true"===s["aria-expanded"]?"rotate(180deg)":""}},[t._v(" ▼ ")])])]}}],null,!0)},[n("v-list",{staticClass:"dropdown-background"},[n("v-list-item",{staticStyle:{"min-height":"32px"}},[n("router-link",{staticClass:"header-link",attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),n("v-list-item",{staticStyle:{"min-height":"32px"}},[n("router-link",{staticClass:"header-link",attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)]}))],2):t._e(),n("v-col",{staticStyle:{transition:"all .4s"},style:{opacity:t.show||t.$vuetify.breakpoint.mdAndUp?1:0,zIndex:t.show||t.$vuetify.breakpoint.mdAndUp?1:-1},attrs:{cols:"2",md:"1"}},[n("SwitchComponent",{staticClass:"ml-lg-4"})],1),n("v-spacer"),t.$vuetify.breakpoint.smAndDown?n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"4"}},[n("div",{staticClass:"menu",on:{click:t.clickMenu}},[n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"}),n("div",{staticClass:"bar"})])]):t._e(),t.$vuetify.breakpoint.smAndDown?n("v-col",{staticClass:"pa-0",attrs:{cols:"12 "}},[n("v-expand-transition",[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-background"},[t._l(t.links,(function(e,i){return[3!==i?n("v-list-item",{key:i,staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[n("router-link",{staticClass:"header-link text-center",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",staticStyle:{width:"100%"},attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")])],1):n("v-list-item",{key:i,staticClass:"d-flex justify-center align-start pt-1",staticStyle:{"min-height":"33px"}},[n("div",[n("div",{staticClass:"header-link d-flex align-center justify-center",on:{click:function(e){t.symbol=!t.symbol}}},[n("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),n("div",{staticClass:"dropdown-symbol",style:{transform:t.symbol?"rotate(180deg)":""}},[t._v(" ▼ ")])]),n("v-expand-transition",[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.symbol,expression:"symbol"}],staticClass:"app-background"},[n("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[n("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),n("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[n("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)])]}))],2)],1)],1):t._e()],1)],1)],1)},s=[],r=n(629),a={name:"TheHeaderComponent",components:{SwitchComponent:()=>n.e(7274).then(n.bind(n,6437))},data:()=>({symbol:!1,show:!1,links:[{text:"Главная",name:["home"],path:""},{text:"События",name:["events","news","new","event","announcement"],path:"events"},{text:"Студентам",name:["students"],path:"students"},{},{text:"Контакты",name:["contacts"],path:"contacts"}]}),computed:(0,r.rn)("app",["theme"]),created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let{top:t}=document.body.getBoundingClientRect();0===t?document.querySelector(".navbar-container").classList.remove("shadow"):document.querySelector(".navbar-container").classList.add("shadow")},closeMenu(){document.querySelector(".menu").classList.remove("active"),this.show=!1},clickMenu(){document.querySelector(".menu").classList.toggle("active"),this.show=!this.show}}},o=a,l=n(1001),c=n(3453),p=n.n(c),d=n(2102),u=n(9846),m=n(5827),f=n(6816),h=n(7620),v=n(6768),y=n(2877),_=n(9762),g=(0,l.Z)(o,i,s,!1,null,"41762e30",null),C=g.exports;p()(g,{VCol:d.Z,VContainer:u.Z,VExpandTransition:m.Fx,VList:f.Z,VListItem:h.Z,VMenu:v.Z,VRow:y.Z,VSpacer:_.Z})}}]);
//# sourceMappingURL=7570.0fb52848.js.map