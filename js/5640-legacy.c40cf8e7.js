"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5640],{95500:function(t,e,i){i(41539),i(54747);var n=i(4589),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return a(t,e)}}}function l(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(r){var a=u(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=a,(0,n.XP)(a).forEach((function(t){r.addEventListener(t,a[t],o)}))}}function c(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];(0,n.XP)(r).forEach((function(t){s.removeEventListener(t,r[t])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:l,unbind:c};e["Z"]=h},95640:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-container"},[i("v-carousel",{ref:"carousel",attrs:{"show-arrows":!1,"hide-delimiters":!0,height:"auto"}},[t._l(t.slider.length,(function(e){return[e%t.columns===1||1===t.columns?i("v-carousel-item",{key:e},[i("v-row",{staticClass:"align-stretch carousel-component",attrs:{justify:"center"}},[t._l(t.columns,(function(i){return[e+i-2<t.slider.length?[t._t("item",null,{item:t.slider[e+i-2],index:i})]:t._e()]}))],2)],1):t._e()]}))],2),t._t("subtitle"),t.slider.length?i("div",{staticClass:"d-flex justify-center align-center pt-6"},[i("button",{staticClass:"btn-nav mr-3",on:{click:t.prev}},[i("v-icon",{attrs:{large:t.$vuetify.breakpoint.mdAndUp,color:"white"}},[t._v(" mdi-chevron-left ")])],1),t._l(Math.ceil(t.slider.length/t.columns),(function(e){return i("v-btn",{key:e,staticClass:"btn-nav-circle",class:e-1===t.activeIndex?"is-active":"",attrs:{"x-small":"",icon:""},on:{click:function(i){return t.clickDelimiters(e-1)}}},[i("v-icon",{attrs:{"x-small":""}},[t._v(" mdi-circle ")])],1)})),i("button",{staticClass:"btn-nav ml-3",on:{click:t.next}},[i("v-icon",{attrs:{large:t.$vuetify.breakpoint.mdAndUp,color:"white"}},[t._v(" mdi-chevron-right ")])],1)],2):t._e()],2)},s=[],r=(i(9653),{name:"CarouselComponent",props:{columns:{type:Number,default:0},slider:{type:Array,default:null}},data:function(){return{activeIndex:0}},mounted:function(){var t=this;this.$watch((function(){return t.$refs.carousel.internalIndex}),(function(e){t.activeIndex=e}))},methods:{next:function(){this.$refs["carousel"].next()},prev:function(){this.$refs["carousel"].prev()},clickDelimiters:function(t){var e=t-this.$refs["carousel"].internalIndex;if(e>0)for(var i=0;i<e;i++)this.$refs["carousel"].next();if(e<0)for(var n=0;n<Math.abs(e);n++)this.$refs["carousel"].prev()}}}),o=r,a=i(1001),u=i(43453),l=i.n(u),c=i(64995),h=i(4367),d=(i(92222),i(69826),i(41539),i(34553),i(95500)),v=c.Z,f=i(70172),m=i(24622),p=m.y.extend({name:"v-window",directives:{Touch:d.Z},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return(0,h.Z)((0,h.Z)({},m.y.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,r,o=this,a={click:function(t){t.stopPropagation(),o.changedByDelimiters=!0,i()}},u={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},l=null!=(n=null==(s=(r=this.$scopedSlots)[t])?void 0:s.call(r,{on:a,attrs:u}))?n:[this.$createElement(v,{props:{icon:!0},attrs:u,on:a},[this.$createElement(f.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},l)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),g=i(88159),w=m.y.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return m.y.options.computed.classes.call(this)}},methods:{genData:m.y.options.methods.genData}}),x=i(4589),y=i(71824),T=p.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return(0,h.Z)((0,h.Z)({},p.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&(0,y.fK)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:p.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(v,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(f.Z,{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(w,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(g.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=p.options.render.call(this,t);return e.data.style="height: ".concat((0,x.kb)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),C=i(88625),I=i(17352),$=i(73325),b=(0,$.Z)(C.Z,(0,I.d)("windowGroup","v-window-item","v-window")),_=b.extend().extend().extend({name:"v-window-item",directives:{Touch:d.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,x.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=(0,x.kb)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),B=i(97047),k=i(6505),D=(0,$.Z)(_,k.Z),A=D.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(B.Z,{staticClass:"v-carousel__item",props:(0,h.Z)((0,h.Z)({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,x.z9)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),E=i(96428),Z=i(62877),H=(0,a.Z)(o,n,s,!1,null,"e90a0f14",null),S=H.exports;l()(H,{VBtn:c.Z,VCarousel:T,VCarouselItem:A,VIcon:E.Z,VRow:Z.Z})}}]);
//# sourceMappingURL=5640-legacy.c40cf8e7.js.map