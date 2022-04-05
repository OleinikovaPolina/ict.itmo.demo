"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5381],{7273:function(){},4995:function(t,e,s){s.d(e,{Z:function(){return y}});var i=s(3385),n=i.Z,r=s(8083),a=s(6952),o=s(4589),l=a.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=l,c=s(7352),u=s(2936),d=s(3377),p=s(3536),f=s(6505),v=s(3039),m=s(3325),g=s(1824);const b=(0,m.Z)(n,f.Z,p.Z,v.Z,(0,c.d)("btnToggle"),(0,u.d)("inputValue"));var y=b.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...f.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},2102:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h=(()=>a.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(h)};function u(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...h,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let a="";for(const n in e)a+=String(e[n]);let o=d.get(a);if(!o){let t;for(t in o=[],c)c[t].forEach((s=>{const i=e[s],n=u(t,s,i);n&&o.push(n)}));const s=o.some((t=>t.startsWith("col-")));o.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(a,o)}return t(e.tag,(0,n.ZP)(s,{class:o}),i)}})},2877:function(t,e,s){s(7273);var i=s(144),n=s(6290),r=s(4589);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((s,i)=>(s[t+(0,r.jC)(i)]=e(),s)),{})}const h=t=>[...o,"baseline","stretch"].includes(t),c=l("align",(()=>({type:String,default:null,validator:h}))),u=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),v={align:Object.keys(c),justify:Object.keys(d),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,s){let i=m[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const b=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...c,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:s,children:i}){let r="";for(const n in e)r+=String(e[n]);let a=b.get(r);if(!a){let t;for(t in a=[],v)v[t].forEach((s=>{const i=e[s],n=g(t,s,i);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,a)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:a}),i)}})},4622:function(t,e,s){s.d(e,{y:function(){return l}});var i=s(4419),n=s(1431),r=s(8085),a=s(3325),o=s(1824);const l=(0,a.Z)(i.Z,n.Z,r.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,o.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==s)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find((t=>!t.disabled));if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex((e=>e===t));this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},3385:function(t,e,s){s.d(e,{Z:function(){return c}});var i=s(6210),n=s(6952),r=s(3377),a=s(2529),o=s(3712),l=s(8085),h=s(3325),c=(0,h.Z)(i.Z,n.Z,r.Z,a.Z,o.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},8083:function(t,e,s){function i(t,e,s){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],o)=>{var l;const h=null==(l=t._observe)?void 0:l[s.context._uid];if(!h)return;const c=r.some((t=>t.isIntersecting));!a||i.quiet&&!h.init||i.once&&!c&&!h.init||a(r,o,c),c&&i.once?n(t,e,s):h.init=!0}),o);t._observe=Object(t._observe),t._observe[s.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,s){var i;const n=null==(i=t._observe)?void 0:i[s.context._uid];n&&(n.observer.unobserve(t),delete t._observe[s.context._uid])}const r={inserted:i,unbind:n};e["Z"]=r},5500:function(t,e,s){var i=s(4589);const n=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t,r=.5,a=16;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&s<e-a&&t.left(t),t.right&&s>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<i-a&&t.up(t),t.down&&n>i+a&&t.down(t))};function r(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function o(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>a(t,e),touchmove:t=>o(t,e)}}function h(t,e,s){const n=e.value,r=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!r)return;const o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[s.context._uid]=o,(0,i.XP)(o).forEach((t=>{r.addEventListener(t,o[t],a)}))}function c(t,e,s){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[s.context._uid];(0,i.XP)(r).forEach((t=>{n.removeEventListener(t,r[t])})),delete n._touchHandlers[s.context._uid]}const u={inserted:h,unbind:c};e["Z"]=u},4419:function(t,e,s){var i=s(144),n=s(4589);e["Z"]=i.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.vZ}}})},3377:function(t,e,s){var i=s(144);e["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},2529:function(t,e,s){var i=s(4589),n=s(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),s=(0,i.kb)(this.minHeight),n=(0,i.kb)(this.minWidth),r=(0,i.kb)(this.maxHeight),a=(0,i.kb)(this.maxWidth),o=(0,i.kb)(this.width);return e&&(t.height=e),s&&(t.minHeight=s),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},3712:function(t,e,s){var i=s(144);e["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const s=e.split(" ");for(const e of s)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,s){var i=s(144),n=s(6286),r=s(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,n=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,s)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,s){s.d(e,{d:function(){return n}});var i=s(144);function n(t="value",e="input"){return i.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const r=n();e["Z"]=r},6290:function(t,e,s){s.d(e,{ZP:function(){return a},bp:function(){return h}});var i=s(4589);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const s of t.split(n.styleList)){let[t,r]=s.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,i._A)(t)]=r)}return e}function a(){const t={};let e,s=arguments.length;while(s--)for(e of Object.keys(arguments[s]))switch(e){case"class":case"directives":arguments[s][e]&&(t[e]=l(t[e],arguments[s][e]));break;case"style":arguments[s][e]&&(t[e]=o(t[e],arguments[s][e]));break;case"staticClass":if(!arguments[s][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[s][e].trim();break;case"on":case"nativeOn":arguments[s][e]&&(t[e]=h(t[e],arguments[s][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][e])break;t[e]||(t[e]={}),t[e]={...arguments[s][e],...t[e]};break;default:t[e]||(t[e]=arguments[s][e])}return t}function o(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function h(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let s=2;s--;){const i=t[s];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},5381:function(t,e,s){s.r(e),s.d(e,{default:function(){return E}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"news-container"},[s("div",{staticClass:"text-body-2 breadcrumbs text-start"},[s("router-link",{attrs:{to:"/events"}},[t._v(" События ")]),s("span",[t._v("/ Новости")])],1),s("div",{staticClass:"pt-4 pb-2 text-h4 text-xl-h3"},[t._v(" Новости ")]),s("v-col",{staticClass:"pl-0",attrs:{cols:"12",md:"6"}},[s("v-text-field",{staticClass:"search-input",attrs:{dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E",placeholder:"Введите название новости или тега","append-icon":"mdi-magnify","hide-details":"",dense:"",outlined:"",clearable:""},on:{"click:append":function(){}}})],1),s("div",{staticClass:"py-3 py-md-6"},[s("div",{staticClass:"font-weight-bold"},[t._v(" Популярные теги ")]),t._l(t.tags,(function(e,i){return s("div",{key:i,staticClass:"d-flex pt-md-2 align-center"},[s("div",{staticClass:"pr-4"},[t._v(" "+t._s(e.name)+" ")]),s("v-chip-group",{attrs:{multiple:""},model:{value:t.tagsSelected[i],callback:function(e){t.$set(t.tagsSelected,i,e)},expression:"tagsSelected[i]"}},t._l(e.items,(function(t,e){return s("BaseChipSelected",{key:e,staticClass:"mr-2",attrs:{item:{type:i,name:t}}})})),1)],1)}))],2),0===t.news.length&&t.isLoad?s("div",[t._v(" По вашему запросу ничего не найдено ")]):t.news.length>0?s("div",[s("v-row",t._l(t.news,(function(t,e){return s("v-col",{key:e,staticClass:"pt-4 pt-md-8",attrs:{cols:"6",md:"3"}},[s("BaseNews",{attrs:{news:t}})],1)})),1),s("div",{staticClass:"d-flex justify-center align-center pt-4 pt-md-8"},[s("button",{staticClass:"btn-nav mr-3",on:{click:t.prev}},[s("v-icon",{attrs:{large:t.$vuetify.breakpoint.mdAndUp,color:"white"}},[t._v(" mdi-chevron-left ")])],1),t._l(t.pages,(function(e){return s("v-btn",{key:e,staticClass:"btn-nav-nums",class:e-1===t.activeIndex?"is-active":"",attrs:{icon:"",small:t.$vuetify.breakpoint.smAndDown},on:{click:function(s){return t.clickDelimiters(e-1)}}},[s("span",[t._v(t._s(e))])])})),s("button",{staticClass:"btn-nav ml-3",on:{click:t.next}},[s("v-icon",{attrs:{large:t.$vuetify.breakpoint.mdAndUp,color:"white"}},[t._v(" mdi-chevron-right ")])],1)],2)],1):t._e()],1)},n=[],r=s(629),a=s(2065),o={name:"NewsView",components:{BaseChipSelected:()=>s.e(2551).then(s.bind(s,2551)),BaseNews:()=>s.e(2047).then(s.bind(s,2047))},data:()=>({news:[{id:1,img:a,date:"12 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"13 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"14 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"15 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"16 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"17 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"18 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]},{id:1,img:a,date:"19 января 2022",name:"Название мероприятия или новости",items:[{type:0,name:"Образование"},{type:0,name:"Blockchain"}]}],tags:[{name:"Факультет:",items:["Факультет","Декан","ППА"]},{name:"Хакатоны:",items:["Факультет","Декан","ППА"]},{name:"Конференции:",items:["Факультет","Декан","ППА"]},{name:"Студ. жизнь:",items:["Факультет","Декан","ППА"]}],tagsSelected:[[],[],[],[]],pages:3,activeIndex:0,isLoad:!1}),computed:{...(0,r.rn)("app",["theme"])},watch:{},mounted(){this.isLoad=!0},methods:{next(){this.activeIndex=this.activeIndex<this.pages-1?this.activeIndex+1:0},prev(){this.activeIndex=this.activeIndex>0?this.activeIndex-1:this.pages-1},clickDelimiters(t){this.activeIndex=t}}},l=o,h=s(1001),c=s(3453),u=s.n(c),d=s(4995),p=s(172),f=s(5827),v=s(4622),m=s(1824),g=s(144),b=g.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:s,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const n=parseInt(this.mobileBreakpoint,10),r=!isNaN(n);return r?e<n:s===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,m.Rn)("mobile-break-point","mobile-breakpoint",this)}}),y=s(549),w=s(5500),x=s(3325),k=s(4589);function $(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function C(t,e,s,i){const n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const a=e.wrapper+i,o=n+r,l=.4*n;return r<=i?i=Math.max(r-l,0):a<=o&&(i=Math.min(i-(a-o-l),e.content-e.wrapper)),s?-i:i}function S(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const O=(0,x.Z)(v.y,b).extend({name:"base-slide-group",directives:{Resize:y.Z,Touch:w.Z},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...v.y.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?$(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+$(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of(0,k.iZ)(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=C(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(p.Z,{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(f.Z5,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=S(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=C(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});O.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var B=s(6952),_=(0,x.Z)(O,B.Z).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...O.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...O.options.methods.genData.call(this)})}}}),Z=s(2102),I=s(9846),V=s(6428),A=s(2877),N=s(9966),M=(0,h.Z)(l,i,n,!1,null,"eda1baa2",null),E=M.exports;u()(M,{VBtn:d.Z,VChipGroup:_,VCol:Z.Z,VContainer:I.Z,VIcon:V.Z,VRow:A.Z,VTextField:N.Z})},2065:function(t,e,s){t.exports=s.p+"img/home-1.e341ac53.png"}}]);
//# sourceMappingURL=5381.40b25628.js.map