"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5553],{4622:function(t,e,i){i.d(e,{y:function(){return l}});var s=i(4419),n=i(1431),r=i(8085),a=i(3325),o=i(1824);const l=(0,a.Z)(s.Z,n.Z,r.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,o.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==i)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find((t=>!t.disabled));if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((e=>e===t));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},5500:function(t,e,i){var s=i(4589);const n=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:n}=t,r=.5,a=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<s-a&&t.up(t),t.down&&n>s+a&&t.down(t))};function r(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function o(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>a(t,e),touchmove:t=>o(t,e)}}function h(t,e,i){const n=e.value,r=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!r)return;const o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=o,(0,s.XP)(o).forEach((t=>{r.addEventListener(t,o[t],a)}))}function u(t,e,i){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[i.context._uid];(0,s.XP)(r).forEach((t=>{n.removeEventListener(t,r[t])})),delete n._touchHandlers[i.context._uid]}const c={inserted:h,unbind:u};e["Z"]=c},4419:function(t,e,i){var s=i(144),n=i(4589);e["Z"]=s.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.vZ}}})},5553:function(t,e,i){i.r(e),i.d(e,{default:function(){return E}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel-container",class:1===t.columns?"ma-0":""},[s("v-carousel",{ref:"carousel",attrs:{"show-arrows":!1,"hide-delimiters":!0,height:"auto"}},[t._l(t.slider.length,(function(e){return[e%t.columns===1||1===t.columns?s("v-carousel-item",{key:e},[s("v-row",{staticClass:"align-stretch carousel-component",attrs:{justify:"center"}},[t._l(t.columns,(function(i){return[e+i-2<t.slider.length?[t._t("item",null,{item:t.slider[e+i-2],index:i}),t._t("index",null,{index:e+i-2})]:t._e()]}))],2)],1):t._e()]}))],2),t._t("subtitle"),t.slider.length?s("div",{staticClass:"d-flex justify-center align-center pt-6 pt-lg-3"},[s("button",{staticClass:"btn-nav mr-3 d-flex justify-center align-center",attrs:{"aria-label":"prev"},on:{click:t.prev}},[s("span",{staticStyle:{width:"50%",height:"50%","padding-right":"2.5px"}},[s("v-img",{staticStyle:{transform:"rotate(180deg)"},attrs:{height:"100%",width:"100%",contain:"",position:"center",src:i(8813)}})],1)]),t._l(Math.ceil(t.slider.length/t.columns),(function(e){return s("v-btn",{key:e,staticClass:"btn-nav-circle",class:e-1===t.activeIndex?"is-active":"",attrs:{"x-small":"",icon:"","aria-label":"delimiter"},on:{click:function(i){return t.clickDelimiters(e-1)}}},[s("v-icon",{attrs:{"x-small":""}},[t._v(" mdi-circle ")])],1)})),s("button",{staticClass:"btn-nav ml-3 d-flex justify-center align-center",attrs:{"aria-label":"next"},on:{click:t.next}},[s("span",{staticStyle:{width:"50%",height:"50%","padding-left":"2.5px"}},[s("v-img",{attrs:{height:"100%",width:"100%",contain:"",position:"center",src:i(8813)}})],1)])],2):t._e()],2)},n=[],r={name:"CarouselComponent",props:{columns:{type:Number,default:0},slider:{type:Array,default:null}},data:()=>({activeIndex:0}),mounted(){this.$watch((()=>this.$refs.carousel.internalIndex),(t=>{this.activeIndex=t}))},methods:{next(){this.$refs["carousel"].next()},prev(){this.$refs["carousel"].prev()},clickDelimiters(t){const e=t-this.$refs["carousel"].internalIndex;if(e>0)for(let i=0;i<e;i++)this.$refs["carousel"].next();if(e<0)for(let i=0;i<Math.abs(e);i++)this.$refs["carousel"].prev()}}},a=r,o=i(1001),l=i(3453),h=i.n(l),u=i(3150),c=i(5500),d=u.Z,m=i(172),p=i(4622),v=p.y.extend({name:"v-window",directives:{Touch:c.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...p.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var s,n,r;const a={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},o={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},l=null!=(s=null==(n=(r=this.$scopedSlots)[t])?void 0:n.call(r,{on:a,attrs:o}))?s:[this.$createElement(d,{props:{icon:!0},attrs:o,on:a},[this.$createElement(m.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},l)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),g=i(8159),f=p.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return p.y.options.computed.classes.call(this)}},methods:{genData:p.y.options.methods.genData}}),w=i(4589),y=i(1824),x=v.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...v.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,y.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:v.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const s=this.$createElement(d,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(m.Z,{props:{size:18}},this.delimiterIcon)]);e.push(s)}return this.$createElement(f,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(g.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=v.options.render.call(this,t);return e.data.style=`height: ${(0,w.kb)(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),I=i(8625),T=i(7352),C=i(3325);const V=(0,C.Z)(I.Z,(0,T.d)("windowGroup","v-window-item","v-window"));var $=V.extend().extend().extend({name:"v-window-item",directives:{Touch:c.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,w.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,w.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),b=i(7047),_=i(6505);const B=(0,C.Z)($,_.Z);var A=B.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(b.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,w.z9)(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}}),S=i(6428),D=i(2877),k=(0,o.Z)(a,s,n,!1,null,"cc675678",null),E=k.exports;h()(k,{VBtn:u.Z,VCarousel:x,VCarouselItem:A,VIcon:S.Z,VImg:b.Z,VRow:D.Z})},8813:function(t,e,i){t.exports=i.p+"img/arrow.0dcdff3b.svg"}}]);
//# sourceMappingURL=5553.afe809e6.js.map