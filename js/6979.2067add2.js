"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6979],{6428:function(t,e,i){i.d(e,{Z:function(){return m}});var s,n=i(6210),o=i(6952),r=i(3039),a=i(8085),l=i(4589),c=i(144),d=i(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const u=(0,d.Z)(n.Z,o.Z,r.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&s[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let n="material-icons";const o=t.indexOf("-"),r=o<=-1;r?i.push(t):(n=t.slice(0,o),h(n)&&(n="")),s.class[n]=!0,s.class[t]=!r;const a=this.getSize();return a&&(s.style={fontSize:a}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render(t){const e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var m=c.Z.extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(u,e,s?[s]:i)}})},6816:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(3385),n=s.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(6952),n=i(6505),o=i(7352),r=i(8085),a=i(2936),l=i(6286),c=i(4589),d=i(1824),h=i(3325);const p=(0,h.Z)(s.Z,n.Z,r.Z,(0,o.d)("listItemGroup"),(0,a.d)("inputValue"));var u=p.extend().extend({name:"v-list-item",directives:{Ripple:l.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...n.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(n.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,d.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===c.Do.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,i):i,s)}})},459:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,i)}})},3385:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(6210),n=i(6952),o=i(3377),r=i(2529),a=i(3712),l=i(8085),c=i(3325),d=(0,c.Z)(s.Z,n.Z,o.Z,r.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},6286:function(t,e,i){i.d(e,{Z:function(){return $}});var s=i(4589);const n=80;function o(t,e){t.style.transform=e,t.style.webkitTransform=e}function r(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,n=0;if(!a(t)){const i=e.getBoundingClientRect(),o=r(t)?t.touches[t.touches.length-1]:t;s=o.clientX-i.left,n=o.clientY-i.top}let o=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((s-o)**2+(n-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*o)/2+"px",d=(e.clientHeight-2*o)/2+"px",h=i.center?c:s-o+"px",p=i.center?d:n-o+"px";return{radius:o,scale:l,x:h,y:p,centerX:c,centerY:d}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),n=document.createElement("span");s.appendChild(n),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:r,scale:a,x:c,y:d,centerX:h,centerY:p}=l(t,e,i),u=2*r+"px";n.className="v-ripple__animation",n.style.width=u,n.style.height=u,e.appendChild(s);const m=window.getComputedStyle(e);m&&"static"===m.position&&(e.style.position="relative",e.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),o(n,`translate(${c}, ${d}) scale3d(${a},${a},${a})`),n.dataset.activated=String(performance.now()),setTimeout((()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),o(n,`translate(${h}, ${p}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),n=Math.max(250-s,0);setTimeout((()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),n)}};function d(t){return"undefined"===typeof t||!!t}function h(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,r(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),r(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout((()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),n)}else c.show(t,i,e)}}function p(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{p(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),c.hide(e)}}function u(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let m=!1;function v(t){m||t.keyCode!==s.Do.enter&&t.keyCode!==s.Do.space||(m=!0,h(t))}function g(t){m=!1,p(t)}function f(t){!0===m&&(m=!1,p(t))}function C(t,e,i){const s=d(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const n=e.value||{};n.center&&(t._ripple.centered=!0),n.class&&(t._ripple.class=e.value.class),n.circle&&(t._ripple.circle=n.circle),s&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",p,{passive:!0}),t.addEventListener("touchmove",u,{passive:!0}),t.addEventListener("touchcancel",p),t.addEventListener("mousedown",h),t.addEventListener("mouseup",p),t.addEventListener("mouseleave",p),t.addEventListener("keydown",v),t.addEventListener("keyup",g),t.addEventListener("blur",f),t.addEventListener("dragstart",p,{passive:!0})):!s&&i&&x(t)}function x(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",p),t.removeEventListener("touchmove",u),t.removeEventListener("touchcancel",p),t.removeEventListener("mouseup",p),t.removeEventListener("mouseleave",p),t.removeEventListener("keydown",v),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",p),t.removeEventListener("blur",f)}function b(t,e,i){C(t,e,!1)}function _(t){delete t._ripple,x(t)}function y(t,e){if(e.value===e.oldValue)return;const i=d(e.oldValue);C(t,e,i)}const k={bind:b,unbind:_,update:y};var $=k},6210:function(t,e,i){var s=i(144);function n(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},6952:function(t,e,i){var s=i(144),n=i(1824),o=i(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,o.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,o.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(6257);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},6257:function(t,e,i){i.d(e,{J:function(){return a},f:function(){return r}});var s=i(144),n=i(1824);function o(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function r(t,e,i){const n=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function a(t,e=!1){return s.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),n=i(6286),o=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,o.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},3039:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2936:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const o=n();e["Z"]=o},9155:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),s("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[s("BasePerson",{attrs:{person:t.dean}})],1)],1),s("v-row",{attrs:{justify:"center"}},t._l(t.persons,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1),s("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),s("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.persons,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),s("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),s("div",{staticClass:"section-background py-6"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36 ")]),s("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(6586)}})],1),s("div",[t._v(" метро Спортивная, 700 м")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:i(4818)}})],1),s("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}})],1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),s("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},n=[],o={name:"ContactsView",components:{LineComponent:()=>i.e(4022).then(i.bind(i,4022)),BasePersonVertical:()=>i.e(8682).then(i.bind(i,8682)),BasePerson:()=>i.e(557).then(i.bind(i,9651))},data:()=>({persons:[{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],dean:{img:i(2559),name:"Капитонов Александр Александрович",position:"Декан факультета",email:"kapitonov.aleksandr@itmo.ru",tel:"+7 920-457-85-96"}})},r=o,a=i(1001),l=i(3453),c=i.n(l),d=i(2102),h=i(9846),p=i(6428),u=i(7047),m=i(6816),v=i(7620),g=i(459),f=i(2877),C=(0,a.Z)(r,s,n,!1,null,"223319f8",null),x=C.exports;c()(C,{VCol:d.Z,VContainer:h.Z,VIcon:p.Z,VImg:u.Z,VList:m.Z,VListItem:v.Z,VListItemIcon:g.Z,VRow:f.Z})},6586:function(t,e,i){t.exports=i.p+"img/undergroundBlue.fdd6d2cf.svg"},4818:function(t,e,i){t.exports=i.p+"img/undergroundGreen.50aa21db.svg"},2559:function(t,e,i){t.exports=i.p+"img/unsplash_v2aKnjMbP_k.90995ed8.png"}}]);
//# sourceMappingURL=6979.2067add2.js.map