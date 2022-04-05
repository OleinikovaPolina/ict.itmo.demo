"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1653],{46952:function(t,e,i){var n=i(75200),o=i(23796),s=i(4367),r=(i(74916),i(23123),i(73210),i(41539),i(39714),i(20144)),a=i(71824),l=i(17093);e["Z"]=r.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,a.N6)("style must be an object",this),e):"string"===typeof e.class?((0,a.N6)("class must be an object",this),e):((0,l.NA)(t)?e.style=(0,s.Z)((0,s.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,o.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,a.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,a.N6)("class must be an object",this),e;if((0,l.NA)(t))e.style=(0,s.Z)((0,s.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var i=t.toString().trim().split(" ",2),r=(0,n.Z)(i,2),c=r[0],d=r[1];e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,o.Z)({},c+"--text",!0)),d&&(e.class["text--"+d]=!0)}return e}}})},2936:function(t,e,i){i.d(e,{d:function(){return s}});var n=i(23796),o=i(20144);function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return o.Z.extend({name:"toggleable",model:{prop:e,event:i},props:(0,n.Z)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},(0,n.Z)(t,e,(function(t){this.isActive=!!t})),(0,n.Z)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var r=s();e["Z"]=r},11706:function(t,e,i){function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,{e:function(){return n}})},71663:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{value:t.dialog,"max-width":t.$vuetify.breakpoint.xs?300:450,persistent:""}},[i("div",{staticClass:"dialog-theme pt-4 pb-2 pt-md-8 pb-md-6 text-center animation--active"},[i("div",{staticClass:"pill-blue rounded-pill"}),i("div",{staticClass:"circle-purple-1 rounded-circle"}),i("div",{staticClass:"pill-orange rounded-pill"}),i("div",{staticClass:"pill-green rounded-pill"}),i("div",{staticClass:"circle-blue rounded-circle"}),i("div",{staticClass:"circle-green rounded-circle"}),i("div",{staticClass:"circle-purple rounded-circle"}),i("div",{staticClass:"pill-pink rounded-pill"}),i("div",{staticStyle:{"z-index":"5",position:"relative"}},[i("div",{staticClass:"text-h6 text-md-h5"},[t._v(" На какой ты стороне? ")]),i("div",{staticClass:"py-md-4 d-flex justify-center align-center"},[i("div",{staticClass:"subtitle-color"},[t._v(" светлая ")]),i("div",{staticClass:"px-3 dialog-theme-slash"},[t._v(" / ")]),i("div",{staticClass:"subtitle-color-diff"},[t._v(" темная ")])]),i("SwitchComponent"),i("BaseButton",{staticClass:"mx-auto pt-2 pt-md-4",attrs:{text:"Выбрать","click-btn":!0,"small-btn":!0},on:{clickBtnCallback:t.clickBtnCallback}})],1)])])},o=[],s=i(4367),r=(i(41539),i(78783),i(33948),i(20629)),a={name:"TheDialogThemeComponent",components:{BaseButton:function(){return i.e(7625).then(i.bind(i,37625))},SwitchComponent:function(){return i.e(6050).then(i.bind(i,26050))}},props:{dialog:{type:Boolean,default:!1}},methods:(0,s.Z)({clickBtnCallback:function(){localStorage.getItem("theme")||this.changeTheme("light"),this.$emit("changeDialog",!1)}},(0,r.nv)("app",["changeTheme"]))},l=a,c=i(1001),d=i(43453),u=i.n(d),h=i(68932),v=i(23796),f=(i(9653),i(73210),i(26699),i(32023),i(69826),i(43242)),m=i(25795),y=i(65907),p=i(83944),g=i(46952),b=i(48085),w=i(2936),C=i(73325),Z=(0,C.Z)(g.Z,b.Z,w.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return(0,s.Z)({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),k=Z,x=i(4589),S=i(20144),$=S.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new k({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=(0,x.KK)(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&((0,x.qh)(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[x.Do.up,x.Do.pageup],i=[x.Do.down,x.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,o=e.shiftKey||e.deltaX?"x":"y",s="y"===o?e.deltaY:e.deltaX||e.deltaY;"y"===o?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var r=s<0,a=s>0;return!(i||!r)||(!(n||!a)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=(0,x.iZ)(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var o=0;o<e.length;o++){var s=e[o];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,x.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),A=i(60423),E=i(95703),N=i(45600),O=i(71824),T=(0,C.Z)(y.Z,p.Z,$,A.Z,E.Z,m.Z),B=T.extend({name:"v-dialog",directives:{ClickOutside:N.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},(0,v.Z)(t,"v-dialog ".concat(this.contentClass).trim(),!0),(0,v.Z)(t,"v-dialog--active",this.isActive),(0,v.Z)(t,"v-dialog--persistent",this.persistent),(0,v.Z)(t,"v-dialog--fullscreen",this.fullscreen),(0,v.Z)(t,"v-dialog--scrollable",this.scrollable),(0,v.Z)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&(0,O.Jk)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):$.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===x.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=(0,h.Z)(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(f.Z,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:(0,s.Z)({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=(0,s.Z)((0,s.Z)({},t.style),{},{maxWidth:(0,x.kb)(this.maxWidth),width:(0,x.kb)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),_=(0,c.Z)(l,n,o,!1,null,null,null),I=_.exports;u()(_,{VDialog:B})},68932:function(t,e,i){i.d(e,{Z:function(){return l}});var n=i(23748);function o(t){if(Array.isArray(t))return(0,n.Z)(t)}i(82526),i(41817),i(41539),i(32165),i(78783),i(33948),i(91038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i(48936);i(21703);function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return o(t)||s(t)||(0,r.Z)(t)||a()}}}]);
//# sourceMappingURL=1653-legacy.eeb1ed57.js.map