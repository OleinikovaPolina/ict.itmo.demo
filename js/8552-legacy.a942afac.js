"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8552],{34553:function(t,i,e){var s=e(82109),n=e(42092).findIndex,r=e(51223),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},40561:function(t,i,e){var s=e(82109),n=e(17854),r=e(51400),a=e(19303),o=e(26244),c=e(47908),l=e(65417),h=e(86135),d=e(81194),u=d("splice"),v=n.TypeError,p=Math.max,m=Math.min,f=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u},{splice:function(t,i){var e,s,n,d,u,b,C=c(this),y=o(C),x=r(t,y),S=arguments.length;if(0===S?e=s=0:1===S?(e=0,s=y-x):(e=S-2,s=m(p(a(i),0),y-x)),y+e-s>f)throw v(g);for(n=l(C,s),d=0;d<s;d++)u=x+d,u in C&&h(n,d,C[u]);if(n.length=s,e<s){for(d=x;d<y-s;d++)u=d+s,b=d+e,u in C?C[b]=C[u]:delete C[b];for(d=y;d>y-s+e;d--)delete C[d-1]}else if(e>s)for(d=y-s;d>x;d--)u=d+s-1,b=d+e-1,u in C?C[b]=C[u]:delete C[b];for(d=0;d<e;d++)C[d+x]=arguments[d+2];return C.length=y-s+e,n}})},27852:function(t,i,e){var s=e(82109),n=e(1702),r=e(31236).f,a=e(17466),o=e(41340),c=e(3929),l=e(84488),h=e(84964),d=e(31913),u=n("".endsWith),v=n("".slice),p=Math.min,m=h("endsWith"),f=!d&&!m&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!f&&!m},{endsWith:function(t){var i=o(l(this));c(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,n=void 0===e?s:p(a(e),s),r=o(t);return u?u(i,r,n):v(i,n-r.length,n)===r}})},29254:function(t,i,e){var s=e(82109),n=e(14230),r=e(43429);s({target:"String",proto:!0,forced:r("link")},{link:function(t){return n(this,"a","href",t)}})},68582:function(){},99846:function(t,i,e){e.d(i,{Z:function(){return a}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var s=e(20144);function n(t){return s.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,e){var s=e.props,n=e.data,r=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var a=n.attrs;if(a){n.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var i=a[t];return t.startsWith("data-")?(n.attrs[t]=i,!1):i||"string"===typeof i}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),i(s.tag,n,r)}})}var r=e(76290),a=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var e,s=i.props,n=i.data,a=i.children,o=n.attrs;return o&&(n.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var i=o[t];return t.startsWith("data-")?(n.attrs[t]=i,!1):i||"string"===typeof i}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),a)}})},97047:function(t,i,e){e.d(i,{Z:function(){return v}});var s=e(9726),n=(e(9653),e(69600),e(27852),e(23157),e(68083)),r=e(42529),a=e(73325),o=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=e(48085),h=e(76290),d=e(71824),u="undefined"!==typeof window&&"IntersectionObserver"in window,v=(0,a.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!u||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(i.naturalWidth=r,i.calculatedAspectRatio=r/n):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=c.options.render.call(this,t),e=(0,h.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},16816:function(t,i,e){e.d(i,{Z:function(){return a}});var s=e(62032),n=e(4367),r=(e(84944),e(33792),e(34553),e(40561),e(83385)),a=r.Z.extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},r.Z.options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var i=this.groups.findIndex((function(i){return i._uid===t._uid}));i>-1&&this.groups.splice(i,1)},listClick:function(t){if(!this.expand){var i,e=(0,s.Z)(this.groups);try{for(e.s();!(i=e.n()).done;){var n=i.value;n.toggle(t)}}catch(r){e.e(r)}finally{e.f()}}}},render:function(t){var i={staticClass:"v-list",class:this.classes,style:this.styles,attrs:(0,n.Z)({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,i),[this.$slots.default])}})},97620:function(t,i,e){e.d(i,{Z:function(){return p}});var s=e(4367),n=e(46952),r=e(6505),a=e(17352),o=e(48085),c=e(2936),l=e(46286),h=e(4589),d=e(71824),u=e(73325),v=(0,u.Z)(n.Z,r.Z,o.Z,(0,a.d)("listItemGroup"),(0,c.d)("inputValue")),p=v.extend().extend({name:"v-list-item",directives:{Ripple:l.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)({"v-list-item":!0},r.Z.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&(0,d.Jk)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=(0,s.Z)({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var i=this,e=this.generateRouteLink(),n=e.tag,r=e.data;r.attrs=(0,s.Z)((0,s.Z)({},r.attrs),this.genAttrs()),r[this.to?"nativeOn":"on"]=(0,s.Z)((0,s.Z)({},r[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===h.Do.enter&&i.click(t),i.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(r.on=r.nativeOn,delete r.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,r):r,a)}})},10459:function(t,i,e){e(73210);var s=e(20144);i["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render:function(t,i){var e=i.data,s=i.children;return e.staticClass="v-list-item__icon ".concat(e.staticClass||"").trim(),t("div",e,s)}})},83385:function(t,i,e){e.d(i,{Z:function(){return d}});var s=e(4367),n=e(66210),r=e(46952),a=e(93377),o=e(42529),c=e(93712),l=e(48085),h=e(73325),d=(0,h.Z)(n.Z,r.Z,a.Z,o.Z,c.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)((0,s.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var i={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,i),this.$slots.default)}})},68083:function(t,i,e){var s=e(9726);e(41539);function n(t,i,e){if("undefined"!==typeof window&&"IntersectionObserver"in window){var n=i.modifiers||{},a=i.value,o="object"===(0,s.Z)(a)?a:{handler:a,options:{}},c=o.handler,l=o.options,h=new IntersectionObserver((function(){var s,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=null==(s=t._observe)?void 0:s[e.context._uid];if(l){var h=a.some((function(t){return t.isIntersecting}));!c||n.quiet&&!l.init||n.once&&!h&&!l.init||c(a,o,h),h&&n.once?r(t,i,e):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[e.context._uid]={init:!1,observer:h},h.observe(t)}}function r(t,i,e){var s,n=null==(s=t._observe)?void 0:s[e.context._uid];n&&(n.observer.unobserve(t),delete t._observe[e.context._uid])}var a={inserted:n,unbind:r};i["Z"]=a},93377:function(t,i,e){var s=e(23796),n=(e(9653),e(20144));i["Z"]=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,s.Z)({},"elevation-".concat(this.elevation),!0)}}})},17352:function(t,i,e){e.d(i,{d:function(){return r}});var s=e(23796),n=e(96257);function r(t,i,e){return(0,n.f)(t,i,e).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,s.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}r("itemGroup")},42529:function(t,i,e){e(9653);var s=e(4589),n=e(20144);i["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},i=(0,s.kb)(this.height),e=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),a=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},93712:function(t,i,e){var s=e(23796),n=e(62032),r=(e(74916),e(23123),e(69600),e(20144));i["Z"]=r.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],i="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof i){var e,r=i.split(" "),a=(0,n.Z)(r);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.push("rounded-".concat(o))}}catch(c){a.e(c)}finally{a.f()}}else i&&t.push("rounded");return t.length>0?(0,s.Z)({},t.join(" "),!0):{}}}})},6505:function(t,i,e){var s=e(23796),n=e(4367),r=(e(29254),e(73210),e(92222),e(74916),e(15306),e(20144)),a=e(46286),o=e(4589);i["Z"]=r.Z.extend({name:"routable",directives:{Ripple:a.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,i,e=this.exact,r=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,s.Z)(t,this.to?"nativeOn":"on",(0,n.Z)((0,n.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,s.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var a=this.activeClass,o=this.exactActiveClass||a;this.proxyClass&&(a="".concat(a," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),i=this.nuxt?"nuxt-link":"router-link",Object.assign(r.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:a,exactActiveClass:o,append:this.append,replace:this.replace})}else i=(this.href?"a":this.tag)||"div","a"===i&&this.href&&(r.attrs.href=this.href);return this.target&&(r.attrs.target=this.target),{tag:i,data:r}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var i="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),e="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||i,s="_vnode.data.class."+(this.exact?e:i);this.$nextTick((function(){!(0,o.vO)(t.$refs.link,s)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,i,e){e.d(i,{d:function(){return r}});var s=e(23796),n=e(20144);function r(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return n.Z.extend({name:"toggleable",model:{prop:i,event:e},props:(0,s.Z)({},i,{required:!1}),data:function(){return{isActive:!!this[i]}},watch:(t={},(0,s.Z)(t,i,(function(t){this.isActive=!!t})),(0,s.Z)(t,"isActive",(function(t){!!t!==this[i]&&this.$emit(e,t)})),t)})}var a=r();i["Z"]=a},2951:function(t,i,e){e.r(i),e.d(i,{default:function(){return y}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),s("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[s("BasePerson",{attrs:{person:t.dean}})],1)],1),s("v-row",{attrs:{justify:"center"}},t._l(t.contacts,(function(t,i){return s("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1),s("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),s("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.office,(function(t,i){return s("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),s("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),s("div",{staticClass:"section-background py-6"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"5"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+7 (812) 480-04-96"}},[t._v("+7 (812) 480-04-96")]),s("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:e(6586)}})],1),s("div",[t._v(" метро Спортивная, 700 м")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:e(64818)}})],1),s("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"7"}},[s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2597637846309!2d30.292978715440658!3d59.94442446859473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696313cde0dee4d%3A0xabce3576e7e58178!2z0JHQuNGA0LbQtdCy0LDRjyDQu9C40L3QuNGPLCAxNCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5OTAzNA!5e0!3m2!1sru!2sru!4v1650138750227!5m2!1sru!2sru",width:"100%",height:"350",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])],1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),s("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},n=[],r=(e(41539),e(78783),e(33948),e(20629)),a={name:"ContactsView",components:{LineComponent:function(){return e.e(5898).then(e.bind(e,65898))},BasePersonVertical:function(){return e.e(235).then(e.bind(e,40235))},BasePerson:function(){return e.e(9817).then(e.bind(e,82964))}},computed:(0,r.rn)("contacts",["dean","contacts","office"])},o=a,c=e(1001),l=e(43453),h=e.n(l),d=e(82102),u=e(99846),v=e(96428),p=e(97047),m=e(16816),f=e(97620),g=e(10459),b=e(62877),C=(0,c.Z)(o,s,n,!1,null,"20454f13",null),y=C.exports;h()(C,{VCol:d.Z,VContainer:u.Z,VIcon:v.Z,VImg:p.Z,VList:m.Z,VListItem:f.Z,VListItemIcon:g.Z,VRow:b.Z})},6586:function(t,i,e){t.exports=e.p+"img/undergroundBlue.fdd6d2cf.svg"},64818:function(t,i,e){t.exports=e.p+"img/undergroundGreen.50aa21db.svg"}}]);
//# sourceMappingURL=8552-legacy.a942afac.js.map