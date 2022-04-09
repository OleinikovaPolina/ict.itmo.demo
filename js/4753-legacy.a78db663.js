(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4753,7949],{6790:function(t,i,e){"use strict";var s=e(17854),n=e(43157),a=e(26244),r=e(49974),o=s.TypeError,l=function(t,i,e,s,c,d,u,h){var v,m,f=c,g=0,p=!!u&&r(u,h);while(g<s){if(g in e){if(v=p?p(e[g],g,i):e[g],d>0&&n(v))m=a(v),f=l(t,i,v,m,f,d-1)-1;else{if(f>=9007199254740991)throw o("Exceed the acceptable array length");t[f]=v}f++}g++}return f};t.exports=l},34553:function(t,i,e){"use strict";var s=e(82109),n=e(42092).findIndex,a=e(51223),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},84944:function(t,i,e){"use strict";var s=e(82109),n=e(6790),a=e(47908),r=e(26244),o=e(19303),l=e(65417);s({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,i=a(this),e=r(i),s=l(i,0);return s.length=n(s,i,i,e,0,void 0===t?1:o(t)),s}})},40561:function(t,i,e){"use strict";var s=e(82109),n=e(17854),a=e(51400),r=e(19303),o=e(26244),l=e(47908),c=e(65417),d=e(86135),u=e(81194),h=u("splice"),v=n.TypeError,m=Math.max,f=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h},{splice:function(t,i){var e,s,n,u,h,y,b=l(this),S=o(b),C=a(t,S),_=arguments.length;if(0===_?e=s=0:1===_?(e=0,s=S-C):(e=_-2,s=f(m(r(i),0),S-C)),S+e-s>g)throw v(p);for(n=c(b,s),u=0;u<s;u++)h=C+u,h in b&&d(n,u,b[h]);if(n.length=s,e<s){for(u=C;u<S-s;u++)h=u+s,y=u+e,h in b?b[y]=b[h]:delete b[y];for(u=S;u>S-s+e;u--)delete b[u-1]}else if(e>s)for(u=S-s;u>C;u--)h=u+s-1,y=u+e-1,h in b?b[y]=b[h]:delete b[y];for(u=0;u<e;u++)b[u+C]=arguments[u+2];return b.length=S-s+e,n}})},33792:function(t,i,e){var s=e(51223);s("flat")},27852:function(t,i,e){"use strict";var s=e(82109),n=e(1702),a=e(31236).f,r=e(17466),o=e(41340),l=e(3929),c=e(84488),d=e(84964),u=e(31913),h=n("".endsWith),v=n("".slice),m=Math.min,f=d("endsWith"),g=!u&&!f&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!g&&!f},{endsWith:function(t){var i=o(c(this));l(t);var e=arguments.length>1?arguments[1]:void 0,s=i.length,n=void 0===e?s:m(r(e),s),a=o(t);return h?h(i,a,n):v(i,n-a.length,n)===a}})},62877:function(t,i,e){"use strict";var s=e(23796),n=e(4367),a=(e(41539),e(26699),e(32023),e(92222),e(47941),e(74916),e(15306),e(51532),e(78783),e(33948),e(54747),e(17273),e(20144)),r=e(76290),o=e(4589),l=["sm","md","lg","xl"],c=["start","end","center"];function d(t,i){return l.reduce((function(e,s){return e[t+(0,o.jC)(s)]=i(),e}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:v}})),f=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:f}})),p={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,i,e){var s=y[t];if(null!=e){if(i){var n=i.replace(t,"");s+="-".concat(n)}return s+="-".concat(e),s.toLowerCase()}}var S=new Map;i["Z"]=a.Z.extend({name:"v-row",functional:!0,props:(0,n.Z)((0,n.Z)((0,n.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:v}},m),{},{alignContent:{type:String,default:null,validator:f}},g),render:function(t,i){var e=i.props,n=i.data,a=i.children,o="";for(var l in e)o+=String(e[l]);var c=S.get(o);return c||function(){var t,i;for(i in c=[],p)p[i].forEach((function(t){var s=e[t],n=b(i,t,s);n&&c.push(n)}));c.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},(0,s.Z)(t,"align-".concat(e.align),e.align),(0,s.Z)(t,"justify-".concat(e.justify),e.justify),(0,s.Z)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),S.set(o,c)}(),t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:c}),a)}})},97047:function(t,i,e){"use strict";e.d(i,{Z:function(){return v}});var s=e(9726),n=(e(9653),e(69600),e(27852),e(23157),e(68083)),a=e(42529),r=e(73325),o=(0,r.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=e(48085),d=e(76290),u=e(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,v=(0,r.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),i&&t.push('url("'.concat(i,'")'));var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,i,e){if(!h||e||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,i=new Image;this.image=i,i.onload=function(){i.decode?i.decode().catch((function(i){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(i.message?"\nOriginal error: ".concat(i.message):""),t)})).then(t.onLoad):t.onLoad()},i.onerror=this.onError,this.hasError=!1,this.sizes&&(i.sizes=this.sizes),this.normalisedSrc.srcset&&(i.srcset=this.normalisedSrc.srcset),i.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(i),this.getSrc()},pollForSize:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?(i.naturalWidth=a,i.calculatedAspectRatio=a/n):t.complete||!i.isLoading||i.hasError||null==e||setTimeout(s,e)};s()},genContent:function(){var t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var i=l.options.render.call(this,t),e=(0,d.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,e,i.children)}})},16816:function(t,i,e){"use strict";e.d(i,{Z:function(){return r}});var s=e(62032),n=e(4367),a=(e(84944),e(33792),e(34553),e(40561),e(83385)),r=a.Z.extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({},a.Z.options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var i=this.groups.findIndex((function(i){return i._uid===t._uid}));i>-1&&this.groups.splice(i,1)},listClick:function(t){if(!this.expand){var i,e=(0,s.Z)(this.groups);try{for(e.s();!(i=e.n()).done;){var n=i.value;n.toggle(t)}}catch(a){e.e(a)}finally{e.f()}}}},render:function(t){var i={staticClass:"v-list",class:this.classes,style:this.styles,attrs:(0,n.Z)({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,i),[this.$slots.default])}})},97620:function(t,i,e){"use strict";e.d(i,{Z:function(){return m}});var s=e(4367),n=e(46952),a=e(6505),r=e(17352),o=e(48085),l=e(2936),c=e(46286),d=e(4589),u=e(71824),h=e(73325),v=(0,h.Z)(n.Z,a.Z,o.Z,(0,r.d)("listItemGroup"),(0,l.d)("inputValue")),m=v.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)({"v-list-item":!0},a.Z.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(a.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=(0,s.Z)({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var i=this,e=this.generateRouteLink(),n=e.tag,a=e.data;a.attrs=(0,s.Z)((0,s.Z)({},a.attrs),this.genAttrs()),a[this.to?"nativeOn":"on"]=(0,s.Z)((0,s.Z)({},a[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===d.Do.enter&&i.click(t),i.$emit("keydown",t)}}),this.inactive&&(n="div"),this.inactive&&this.to&&(a.on=a.nativeOn,delete a.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(n,this.isActive?this.setTextColor(this.color,a):a,r)}})},10459:function(t,i,e){"use strict";e(73210);var s=e(20144);i["Z"]=s.Z.extend({name:"v-list-item-icon",functional:!0,render:function(t,i){var e=i.data,s=i.children;return e.staticClass="v-list-item__icon ".concat(e.staticClass||"").trim(),t("div",e,s)}})},68083:function(t,i,e){"use strict";var s=e(9726);e(41539);function n(t,i,e){if("undefined"!==typeof window&&"IntersectionObserver"in window){var n=i.modifiers||{},r=i.value,o="object"===(0,s.Z)(r)?r:{handler:r,options:{}},l=o.handler,c=o.options,d=new IntersectionObserver((function(){var s,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,c=null==(s=t._observe)?void 0:s[e.context._uid];if(c){var d=r.some((function(t){return t.isIntersecting}));!l||n.quiet&&!c.init||n.once&&!d&&!c.init||l(r,o,d),d&&n.once?a(t,i,e):c.init=!0}}),c);t._observe=Object(t._observe),t._observe[e.context._uid]={init:!1,observer:d},d.observe(t)}}function a(t,i,e){var s,n=null==(s=t._observe)?void 0:s[e.context._uid];n&&(n.observer.unobserve(t),delete t._observe[e.context._uid])}var r={inserted:n,unbind:a};i["Z"]=r},42529:function(t,i,e){"use strict";e(9653);var s=e(4589),n=e(20144);i["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},i=(0,s.kb)(this.height),e=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),r=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return i&&(t.height=i),e&&(t.minHeight=e),n&&(t.minWidth=n),a&&(t.maxHeight=a),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},74254:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return k}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mt-8 mt-md-16 font-color"},[s("div",{class:t.$vuetify.breakpoint.mdAndUp?"mb-10":"mb-minus",staticStyle:{"z-index":"2",position:"relative"}},[s("v-sheet",{staticClass:"sheet-1 rounded-pill",staticStyle:{position:"relative"},attrs:{color:"#00A1FF"}},[s("v-row",{staticClass:"px-2 px-md-6"},[s("v-col",{staticClass:"d-flex justify-start align-center",class:t.$vuetify.breakpoint.smAndDown?"py-2":"",attrs:{cols:"9",md:"7"}},[s("a",{staticStyle:{width:"100%"},attrs:{href:"https://itmo.ru/ru/",target:"_blank"}},[s("v-img",{attrs:{position:"0 center",contain:"",width:"100%",height:t.$vuetify.breakpoint.smAndDown?"15":t.$vuetify.breakpoint.xl?"48":"36",src:e(92686)}})],1)]),t.$vuetify.breakpoint.mdAndUp?s("v-col",{staticClass:"d-flex justify-end align-center",attrs:{cols:"5"}},[s("div",{staticClass:"text-h6 text-xl-h5"},[t._v(" Факультет ИКТ ")])]):t._e()],1)],1),s("v-sheet",{staticClass:"rounded-r-pill sheet-2",attrs:{color:"#6A30F4"}},[s("v-row",[s("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"5"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",{staticClass:"footer-inf",style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[t._v(" Информация © 1993–2022 Университет ИТМО ")]),s("v-list-item",{staticClass:"footer-inf",style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[t._v(" Разработка © 2022 Факультет ИКТ ")]),s("v-list-item",{style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[s("a",{staticClass:"link font-weight-light text-decoration-underline",attrs:{href:"#"}},[t._v(" Политика по обработке персональных данных ")])]),s("v-list-item",{style:{minHeight:t.$vuetify.breakpoint.smAndDown?"2em":"2.75em"}},[s("a",{staticClass:"link font-weight-thin text-decoration-underline",attrs:{href:"#"}},[t._v(" Правила использования контента ")])])],1)],1),t.$vuetify.breakpoint.mdAndUp?s("v-col",{staticClass:"pa-0",attrs:{cols:"7"}},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-map-marker-radius-outline")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-bank-outline")])],1),s("div",[t._v(" 197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А(юр. адрес) ")])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-email-outline")])],1),s("div",[s("a",{attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",[s("v-list-item-icon",{staticClass:"mr-3"},[s("v-icon",[t._v("mdi-phone-outline")])],1),s("div",[s("a",{attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36")]),t._v(" (Пн-Пт: 11:00-16:00) ")])],1)],1)],1):t._e()],1)],1),t.$vuetify.breakpoint.mdAndUp?s("v-sheet",{staticClass:"rounded-r-pill sheet-3 py-3",attrs:{color:"#00A1FF"}},[s("v-row",{attrs:{"no-gutters":""}},[s("div",{staticClass:"text-h6 pr-4"},[t._v(" Присоединяйся ")]),s("div",{staticClass:"d-flex"},t._l(t.social,(function(t,i){return s("v-btn",{key:i,staticClass:"ml-4",attrs:{icon:"",rounded:"",link:"",href:t.link}},[s("v-img",{attrs:{src:t.icon}})],1)})),1)])],1):t._e()],1),t.$vuetify.breakpoint.mdAndUp?s("v-sheet",{staticClass:"sheet-4 d-flex justify-end",attrs:{color:"#7BDBFA"}},[s("v-sheet",{staticClass:"rounded-l-pill sheet-5",attrs:{color:"#835FFE"}},[s("v-img",{staticClass:"rounded-l-pill",attrs:{height:"100%",width:"100%",position:"100% 0",src:e(96652)}})],1)],1):t._e(),t.$vuetify.breakpoint.smAndDown?s("div",{staticStyle:{position:"relative","overflow-x":"hidden"}},[s("div",{staticStyle:{"z-index":"10",position:"relative"}},[s("v-sheet",{staticClass:"sheet-1 rounded-pill",staticStyle:{position:"relative",top:"1em"},attrs:{color:"#00A1FF"}},[s("div",{staticClass:"d-flex align-center px-2 py-1"},[s("div",{staticClass:"text-subtitle-2"},[t._v(" Факультет ИКТ ")])])]),s("v-sheet",{staticClass:"sheet-6",attrs:{color:"#835FFE"}},[s("v-col",{staticClass:"pa-0"},[s("v-list",{staticStyle:{background:"none!important"},attrs:{dark:"",dense:""}},[s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-map-marker-radius-outline ")])],1),s("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-bank-outline ")])],1),s("div",[t._v(" 197101, г. Санкт-Петербург, Кронверкский пр., 49 литер А(юр. адрес) ")])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-email-outline ")])],1),s("div",[s("a",{attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),s("v-list-item",{staticStyle:{"min-height":"1em"}},[s("v-list-item-icon",{staticClass:"ma-0"},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-phone-outline ")])],1),s("div",[s("a",{attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36")]),t._v(" (Пн-Пт: 11:00-16:00) ")])],1)],1)],1)],1),s("v-sheet",{staticClass:"py-2 pl-7",attrs:{color:"#00A1FF"}},[s("div",{staticClass:"d-flex align-center"},[s("div",{staticClass:"text-subtitle-2 pr-4"},[t._v(" Присоединяйся ")]),s("div",{staticClass:"d-flex"},t._l(t.social,(function(t,i){return s("v-btn",{key:i,staticClass:"ml-2",attrs:{"x-small":"",icon:"",rounded:"",link:"",href:t.link}},[s("v-img",{attrs:{height:"20",width:"20",src:t.icon}})],1)})),1)])])],1),s("v-sheet",{staticClass:"rounded-r-pill",staticStyle:{position:"absolute",top:"0",right:"-30px","z-index":"0"},attrs:{color:"#7BDBFA",height:"200",width:"110%"}})],1):t._e()],1)},n=[],a=e(76465),r=e(84849),o=e(55674),l={name:"TheFooterComponent",data:function(){return{social:[{icon:r,link:"https://itmo.ru/ru/"},{icon:a,link:"https://itmo.ru/ru/"},{icon:o,link:"https://itmo.ru/ru/"}]}}},c=l,d=e(1001),u=e(43453),h=e.n(u),v=e(680),m=e(82102),f=e(96428),g=e(97047),p=e(16816),y=e(97620),b=e(10459),S=e(62877),C=e(83385),_=(0,d.Z)(c,s,n,!1,null,"1a5a39a8",null),k=_.exports;h()(_,{VBtn:v.Z,VCol:m.Z,VIcon:f.Z,VImg:g.Z,VList:p.Z,VListItem:y.Z,VListItemIcon:b.Z,VRow:S.Z,VSheet:C.Z})},55674:function(t,i,e){"use strict";t.exports=e.p+"img/Button-S-Telegram-ic.72844a55.svg"},76465:function(t,i,e){"use strict";t.exports=e.p+"img/Button-S-Vk-ic.52efa767.svg"},84849:function(t,i,e){"use strict";t.exports=e.p+"img/Button-S-Youtube-ic.f614c596.svg"},96652:function(t,i,e){"use strict";t.exports=e.p+"img/footer-building.8d5c9494.svg"},92686:function(t,i,e){"use strict";t.exports=e.p+"img/logoITMO.c2cd98b0.svg"}}]);
//# sourceMappingURL=4753-legacy.a78db663.js.map