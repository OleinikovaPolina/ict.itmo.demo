(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8733],{6790:function(t,e,n){"use strict";var i=n(17854),r=n(43157),o=n(26244),a=n(49974),s=i.TypeError,l=function(t,e,n,i,c,p,u,d){var f,v,m=c,h=0,y=!!u&&a(u,d);while(h<i){if(h in n){if(f=y?y(n[h],h,e):n[h],p>0&&r(f))v=o(f),m=l(t,e,f,v,m,p-1)-1;else{if(m>=9007199254740991)throw s("Exceed the acceptable array length");t[m]=f}m++}h++}return m};t.exports=l},84944:function(t,e,n){"use strict";var i=n(82109),r=n(6790),o=n(47908),a=n(26244),s=n(19303),l=n(65417);i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),n=a(e),i=l(e,0);return i.length=r(i,e,e,n,0,void 0===t?1:s(t)),i}})},33792:function(t,e,n){var i=n(51223);i("flat")},68582:function(){},99846:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});n(57327),n(41539),n(47941),n(23157),n(92222),n(68582),n(17273),n(73210),n(69600);var i=n(20144);function r(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,r=n.data,o=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var a=r.attrs;if(a){r.attrs={};var s=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,r,o)}})}var o=n(76290),a=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,r=e.data,a=e.children,s=r.attrs;return s&&(r.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,(0,o.ZP)(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),a)}})},99762:function(t,e,n){"use strict";n(68582);var i=n(4589);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},85827:function(t,e,n){"use strict";n.d(e,{Fx:function(){return d},Zq:function(){return f},Z5:function(){return p},Qn:function(){return u}});n(92222);var i=n(76290);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var o="transition".concat(n.props.group?"-group":""),a={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(a.on.leave=r(a.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),a.on.afterLeave=r(a.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,r=e.left,o=e.width,a=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=r||"",t.style.width=o||"",t.style.height=a||""}}))),n.props.hideOnLeave&&(a.on.leave=r(a.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(o,(0,i.ZP)(n.data,a),n.children)}}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:t},on:e}),r.children)}}}var s=n(23796),l=n(4589);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat((0,l.jC)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=(0,s.Z)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var o="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=o}))},afterEnter:o,enterCancelled:o,leave:function(t){t._initialStyle=(0,s.Z)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),o(e)}function o(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("dialog-top-transition");var p=o("fade-transition"),u=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition")),d=(o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),a("expand-transition",c())),f=a("expand-x-transition",c("",!0))},46286:function(t,e,n){"use strict";n.d(e,{Z:function(){return T}});n(68309),n(92222),n(9653);var i=n(4589),r=80;function o(t,e){t.style.transform=e,t.style.webkitTransform=e}function a(t){return"TouchEvent"===t.constructor.name}function s(t){return"KeyboardEvent"===t.constructor.name}var l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,r=0;if(!s(t)){var o=e.getBoundingClientRect(),l=a(t)?t.touches[t.touches.length-1]:t;i=l.clientX-o.left,r=l.clientY-o.top}var c=0,p=.3;e._ripple&&e._ripple.circle?(p=.15,c=e.clientWidth/2,c=n.center?c:c+Math.sqrt(Math.pow(i-c,2)+Math.pow(r-c,2))/4):c=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var u="".concat((e.clientWidth-2*c)/2,"px"),d="".concat((e.clientHeight-2*c)/2,"px"),f=n.center?u:"".concat(i-c,"px"),v=n.center?d:"".concat(r-c,"px");return{radius:c,scale:p,x:f,y:v,centerX:u,centerY:d}},c={show:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=" ".concat(n.class));var a=l(t,e,n),s=a.radius,c=a.scale,p=a.x,u=a.y,d=a.centerX,f=a.centerY,v="".concat(2*s,"px");r.className="v-ripple__animation",r.style.width=v,r.style.height=v,e.appendChild(i);var m=window.getComputedStyle(e);m&&"static"===m.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),o(r,"translate(".concat(p,", ").concat(u,") scale3d(").concat(c,",").concat(c,",").concat(c,")")),r.dataset.activated=String(performance.now()),setTimeout((function(){r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),o(r,"translate(".concat(d,", ").concat(f,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var n=e[e.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}}}}};function p(t){return"undefined"===typeof t||!!t}function u(t){var e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||s(t),n._ripple.class&&(e.class=n._ripple.class),a(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=function(){c.show(t,n,e)},n._ripple.showTimer=window.setTimeout((function(){n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else c.show(t,n,e)}}function d(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){d(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function f(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var v=!1;function m(t){v||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(v=!0,u(t))}function h(t){v=!1,d(t)}function y(t){!0===v&&(v=!1,d(t))}function g(t,e,n){var i=p(e.value);i||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;var r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",f,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",u),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",h),t.addEventListener("blur",y),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&_(t)}function _(t){t.removeEventListener("mousedown",u),t.removeEventListener("touchstart",u),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",f),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",h),t.removeEventListener("dragstart",d),t.removeEventListener("blur",y)}function w(t,e,n){g(t,e,!1)}function b(t){delete t._ripple,_(t)}function x(t,e){if(e.value!==e.oldValue){var n=p(e.oldValue);g(t,e,n)}}var L={bind:w,unbind:b,update:x},T=L},66210:function(t,e,n){"use strict";var i=n(20144);function r(t){return function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(var r in e)this.$set(this.$data[t],r,e[r])}}e["Z"]=i.Z.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},46952:function(t,e,n){"use strict";var i=n(75200),r=n(23796),o=n(4367),a=(n(74916),n(23123),n(73210),n(41539),n(39714),n(20144)),s=n(71824),l=n(17093);e["Z"]=a.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,s.N6)("style must be an object",this),e):"string"===typeof e.class?((0,s.N6)("class must be an object",this),e):((0,l.NA)(t)?e.style=(0,o.Z)((0,o.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,o.Z)((0,o.Z)({},e.class),{},(0,r.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,s.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,s.N6)("class must be an object",this),e;if((0,l.NA)(t))e.style=(0,o.Z)((0,o.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var n=t.toString().trim().split(" ",2),a=(0,i.Z)(n,2),c=a[0],p=a[1];e.class=(0,o.Z)((0,o.Z)({},e.class),{},(0,r.Z)({},c+"--text",!0)),p&&(e.class["text--"+p]=!0)}return e}}})},93536:function(t,e,n){"use strict";n.d(e,{d:function(){return a}});var i=n(20144),r=n(4589),o={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return i.Z.extend({name:"positionable",props:t.length?(0,r.ji)(o,t):o})}e["Z"]=a()},96257:function(t,e,n){"use strict";n.d(e,{J:function(){return l},f:function(){return s}});var i=n(23796),r=(n(92222),n(20144)),o=n(71824);function a(t,e){return function(){return(0,o.Kd)("The ".concat(t," component must be used inside a ").concat(e))}}function s(t,e,n){var o=e&&n?{register:a(e,n),unregister:a(e,n)}:null;return r.Z.extend({name:"registrable-inject",inject:(0,i.Z)({},t,{default:o})})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.Z.extend({name:"registrable-provide",provide:function(){return(0,i.Z)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},82835:function(t,e,n){"use strict";t.exports=n.p+"img/logo.a58f0e2b.svg"}}]);
//# sourceMappingURL=8733-legacy.af0e225e.js.map