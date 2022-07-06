"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9612],{3150:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(5648),n=i(624),o=n.Z,r=i(7352),a=i(2936),l=i(3377),c=i(3536),u=i(6505),d=i(3039),h=i(3325),p=i(1824);const v=(0,h.Z)(s.Z,u.Z,c.Z,d.Z,(0,r.d)("btnToggle"),(0,a.d)("inputValue"));var m=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...u.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},3385:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(6210),n=i(6952),o=i(3377),r=i(2529),a=i(3712),l=i(8085),c=i(3325),u=(0,c.Z)(s.Z,n.Z,o.Z,r.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},6286:function(t,e,i){i.d(e,{Z:function(){return B}});var s=i(4589);const n=80;function o(t,e){t.style.transform=e,t.style.webkitTransform=e}function r(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,n=0;if(!a(t)){const i=e.getBoundingClientRect(),o=r(t)?t.touches[t.touches.length-1]:t;s=o.clientX-i.left,n=o.clientY-i.top}let o=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((s-o)**2+(n-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*o)/2+"px",u=(e.clientHeight-2*o)/2+"px",d=i.center?c:s-o+"px",h=i.center?u:n-o+"px";return{radius:o,scale:l,x:d,y:h,centerX:c,centerY:u}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:r,scale:a,x:c,y:u,centerX:d,centerY:h}=l(t,e,i),p=2*r+"px";n.className="v-ripple__animation",n.style.width=p,n.style.height=p,e.appendChild(s);const v=window.getComputedStyle(e);v&&"static"===v.position&&(e.style.position="relative",e.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),o(n,`translate(${c}, ${u}) scale3d(${a},${a},${a})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),o(n,`translate(${d}, ${h}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),n)}};function u(t){return"undefined"===typeof t||!!t}function d(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,r(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),r(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(t,i,e)}}function h(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{h(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let v=!1;function m(t){v||t.keyCode!==s.Do.enter&&t.keyCode!==s.Do.space||(v=!0,d(t))}function f(t){v=!1,h(t)}function g(t){!0===v&&(v=!1,h(t))}function b(t,e,i){const s=u(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const n=e.value||{};n.center&&(t._ripple.centered=!0),n.class&&(t._ripple.class=e.value.class),n.circle&&(t._ripple.circle=n.circle),s&&!i?(t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",h),t.addEventListener("mousedown",d),t.addEventListener("mouseup",h),t.addEventListener("mouseleave",h),t.addEventListener("keydown",m),t.addEventListener("keyup",f),t.addEventListener("blur",g),t.addEventListener("dragstart",h,{passive:!0})):!s&&i&&_(t)}function _(t){t.removeEventListener("mousedown",d),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",h),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",h),t.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h),t.removeEventListener("keydown",m),t.removeEventListener("keyup",f),t.removeEventListener("dragstart",h),t.removeEventListener("blur",g)}function C(t,e,i){b(t,e,!1)}function x(t){delete t._ripple,_(t)}function y(t,e){if(e.value===e.oldValue)return;const i=u(e.oldValue);b(t,e,i)}const k={bind:C,unbind:x,update:y};var B=k},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(6257);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),o=(0,s.kb)(this.maxHeight),r=(0,s.kb)(this.maxWidth),a=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),o&&(t.maxHeight=o),r&&(t.maxWidth=r),a&&(t.width=a),t}}})},3536:function(t,e,i){i.d(e,{d:function(){return r}});var s=i(144),n=i(4589);const o={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(t=[]){return s.Z.extend({name:"positionable",props:t.length?(0,n.ji)(o,t):o})}e["Z"]=r()},6257:function(t,e,i){i.d(e,{J:function(){return a},f:function(){return r}});var s=i(144),n=i(1824);function o(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function r(t,e,i){const n=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function a(t,e=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),n=i(6286),o=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,o.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const o=n();e["Z"]=o},5634:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"fit-content"}},[i("router-link",{staticClass:"ict-button text-decoration-none d-flex align-center",attrs:{to:t.link}},[t._v(" "+t._s(t.text)+" ")])],1)},n=[],o={name:"BaseButtonOutlined",props:{link:{type:String,default:""},text:{type:String,default:""}}},r=o,a=i(1001),l=(0,a.Z)(r,s,n,!1,null,"634111b8",null),c=l.exports},9612:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-block pa-4"},[i("div",{staticClass:"text-h6 mr-7"},[t._v(" "+t._s(t.info.title)+" ")]),t.info.position?i("div",[t._v(" Расположение: "+t._s(t.info.position)+" ")]):t._e(),t.info.tags?i("div",[t._v(" Теги: "+t._s(t.info.tags.map((function(t){return t.name})).join(", "))+" ")]):t._e(),t.info.date||t.info.dateStart?i("div",[t._v(" Дата: "+t._s(t.$moment(t.info.date||t.info.dateStart).format("DD.MM.YYYY"))+" ")]):t._e(),t.info.time?i("div",[t._v(" Время: "+t._s(t.info.time)+" ")]):t._e(),t.info.page?i("div",[t._v(" Страница: "+t._s(t.info.page)+" ")]):t._e(),t.info.datePublish?i("div",{staticClass:"pb-2"},[t._v(" Дата публикации: "+t._s(t.info.datePublish)+" ")]):t._e(),t.info.updatedAt?i("div",{staticClass:"pb-2"},[t._v(" Дата изменения: "+t._s(t.$moment(t.info.updatedAt).format("DD.MM.YYYY"))+" ")]):t._e(),i("div",{staticClass:"pa-3",staticStyle:{position:"absolute",right:"0",bottom:"0"}},[i("BaseButtonOutlined",{staticClass:"rounded-0",attrs:{text:"Редактировать",link:t.link}})],1),i("div",{staticClass:"pa-3",staticStyle:{position:"absolute",right:"0",top:"0"}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("deleteEntry")}}},[i("v-icon",{attrs:{color:"#00A1FF"}},[t._v(" mdi-close ")])],1)],1)])},n=[],o=i(5634),r={name:"BaseBlock",components:{BaseButtonOutlined:o["default"]},props:{info:{type:Object,default:null},link:{type:String,default:""}},emits:["deleteEntry"]},a=r,l=i(1001),c=i(3453),u=i.n(c),d=i(3150),h=i(6428),p=(0,l.Z)(a,s,n,!1,null,"d5c09fa6",null),v=p.exports;u()(p,{VBtn:d.Z,VIcon:h.Z})}}]);
//# sourceMappingURL=9612.6249ea76.js.map