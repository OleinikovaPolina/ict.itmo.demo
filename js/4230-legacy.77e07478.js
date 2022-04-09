"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4230],{27852:function(t,i,e){var s=e(82109),n=e(1702),a=e(31236).f,r=e(17466),o=e(41340),c=e(3929),l=e(84488),h=e(84964),d=e(31913),u=n("".endsWith),p=n("".slice),m=Math.min,v=h("endsWith"),g=!d&&!v&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var i=o(l(this));c(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,n=void 0===e?s:m(r(e),s),a=o(t);return u?u(i,a,n):p(i,n-a.length,n)===a}})},29254:function(t,i,e){var s=e(82109),n=e(14230),a=e(43429);s({target:"String",proto:!0,forced:a("link")},{link:function(t){return n(this,"a","href",t)}})},68582:function(){},99846:function(t,i,e){e.d(i,{Z:function(){return r}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var s=e(20144);function n(t){return s.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(i,e){var s=e.props,n=e.data,a=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var i=r[t];return t.startsWith("data-")?(n.attrs[t]=i,!1):i||"string"===typeof i}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),i(s.tag,n,a)}})}var a=e(76290),r=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,i){var e,s=i.props,n=i.data,r=i.children,o=n.attrs;return o&&(n.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var i=o[t];return t.startsWith("data-")?(n.attrs[t]=i,!1):i||"string"===typeof i}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,(0,a.ZP)(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),r)}})},97047:function(t,i,e){e.d(i,{Z:function(){return p}});var s=e(9726),n=(e(9653),e(69600),e(27852),e(23157),e(68083)),a=e(42529),r=e(73325),o=(0,r.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=e(48085),h=e(76290),d=e(71824),u="undefined"!==typeof window&&"IntersectionObserver"in window,p=(0,r.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!u||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?(i.naturalWidth=a,i.calculatedAspectRatio=a/n):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=c.options.render.call(this,t),e=(0,h.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},10459:function(t,i,e){e(73210);var s=e(20144);i["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render:function(t,i){var e=i.data,s=i.children;return e.staticClass="v-list-item__icon ".concat(e.staticClass||"").trim(),t("div",e,s)}})},83385:function(t,i,e){e.d(i,{Z:function(){return d}});var s=e(4367),n=e(66210),a=e(46952),r=e(93377),o=e(42529),c=e(93712),l=e(48085),h=e(73325),d=(0,h.Z)(n.Z,a.Z,r.Z,o.Z,c.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)((0,s.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var i={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,i),this.$slots.default)}})},93377:function(t,i,e){var s=e(23796),n=(e(9653),e(20144));i["Z"]=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,s.Z)({},"elevation-".concat(this.elevation),!0)}}})},17352:function(t,i,e){e.d(i,{d:function(){return a}});var s=e(23796),n=e(96257);function a(t,i,e){return(0,n.f)(t,i,e).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,s.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}a("itemGroup")},93712:function(t,i,e){var s=e(23796),n=e(62032),a=(e(74916),e(23123),e(69600),e(20144));i["Z"]=a.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],i="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof i){var e,a=i.split(" "),r=(0,n.Z)(a);try{for(r.s();!(e=r.n()).done;){var o=e.value;t.push("rounded-".concat(o))}}catch(c){r.e(c)}finally{r.f()}}else i&&t.push("rounded");return t.length>0?(0,s.Z)({},t.join(" "),!0):{}}}})},6505:function(t,i,e){var s=e(23796),n=e(4367),a=(e(29254),e(73210),e(92222),e(74916),e(15306),e(20144)),r=e(46286),o=e(4589);i["Z"]=a.Z.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,i,e=this.exact,a=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,s.Z)(t,this.to?"nativeOn":"on",(0,n.Z)((0,n.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,s.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,o=this.exactActiveClass||r;this.proxyClass&&(r="".concat(r," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),i=this.nuxt?"nuxt-link":"router-link",Object.assign(a.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:r,exactActiveClass:o,append:this.append,replace:this.replace})}else i=(this.href?"a":this.tag)||"div","a"===i&&this.href&&(a.attrs.href=this.href);return this.target&&(a.attrs.target=this.target),{tag:i,data:a}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var i="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),e="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||i,s="_vnode.data.class."+(this.exact?e:i);this.$nextTick((function(){!(0,o.vO)(t.$refs.link,s)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,i,e){e.d(i,{d:function(){return a}});var s=e(23796),n=e(20144);function a(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return n.Z.extend({name:"toggleable",model:{prop:i,event:e},props:(0,s.Z)({},i,{required:!1}),data:function(){return{isActive:!!this[i]}},watch:(t={},(0,s.Z)(t,i,(function(t){this.isActive=!!t})),(0,s.Z)(t,"isActive",(function(t){!!t!==this[i]&&this.$emit(e,t)})),t)})}var r=a();i["Z"]=r},49155:function(t,i,e){e.r(i),e.d(i,{default:function(){return S}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),s("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[s("BasePerson",{attrs:{person:t.dean}})],1)],1),s("v-row",{attrs:{justify:"center"}},t._l(t.persons,(function(t,i){return s("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1),s("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),s("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.persons,(function(t,i){return s("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[s("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),s("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),s("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),s("div",{staticClass:"section-background py-6"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36 ")]),s("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:e(6586)}})],1),s("div",[t._v(" метро Спортивная, 700 м")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-img",{attrs:{height:"24",width:"24",contain:"",src:e(64818)}})],1),s("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}})],1)],1)],1),s("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),s("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},n=[],a=(e(41539),e(78783),e(33948),{name:"ContactsView",components:{LineComponent:function(){return e.e(4022).then(e.bind(e,34022))},BasePersonVertical:function(){return e.e(814).then(e.bind(e,30814))},BasePerson:function(){return e.e(3931).then(e.bind(e,30314))}},data:function(){return{persons:[{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],dean:{img:e(12559),name:"Капитонов Александр Александрович",position:"Декан факультета",email:"kapitonov.aleksandr@itmo.ru",tel:"+7 920-457-85-96"}}}}),r=a,o=e(1001),c=e(43453),l=e.n(c),h=e(82102),d=e(99846),u=e(96428),p=e(97047),m=e(16816),v=e(97620),g=e(10459),f=e(62877),C=(0,o.Z)(r,s,n,!1,null,"223319f8",null),S=C.exports;l()(C,{VCol:h.Z,VContainer:d.Z,VIcon:u.Z,VImg:p.Z,VList:m.Z,VListItem:v.Z,VListItemIcon:g.Z,VRow:f.Z})},6586:function(t,i,e){t.exports=e.p+"img/undergroundBlue.fdd6d2cf.svg"},64818:function(t,i,e){t.exports=e.p+"img/undergroundGreen.50aa21db.svg"},12559:function(t,i,e){t.exports=e.p+"img/unsplash_v2aKnjMbP_k.90995ed8.png"},45563:function(t,i,e){t.exports=e.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=4230-legacy.77e07478.js.map