(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6617,9106],{95631:function(t,e,i){"use strict";var n=i(3070).f,s=i(70030),r=i(12248),o=i(49974),a=i(25787),c=i(20408),l=i(70654),u=i(96340),d=i(19781),h=i(62423).fastKey,p=i(29909),v=p.set,f=p.getterFor;t.exports={getConstructor:function(t,e,i,l){var u=t((function(t,n){a(t,p),v(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&c(n,t[l],{that:t,AS_ENTRIES:i})})),p=u.prototype,m=f(e),g=function(t,e,i){var n,s,r=m(t),o=b(t,e);return o?o.value=i:(r.last=o={index:s=h(e,!0),key:e,value:i,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=o),n&&(n.next=o),d?r.size++:t.size++,"F"!==s&&(r.index[s]=o)),t},b=function(t,e){var i,n=m(t),s=h(e);if("F"!==s)return n.index[s];for(i=n.first;i;i=i.next)if(i.key==e)return i};return r(p,{clear:function(){var t=this,e=m(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=m(e),n=b(e,t);if(n){var s=n.next,r=n.previous;delete i.index[n.index],n.removed=!0,r&&(r.next=s),s&&(s.previous=r),i.first==n&&(i.first=s),i.last==n&&(i.last=r),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=m(this),n=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(p,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(p,"size",{get:function(){return m(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",s=f(e),r=f(n);l(t,e,(function(t,e){v(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},77710:function(t,e,i){"use strict";var n=i(82109),s=i(17854),r=i(1702),o=i(54705),a=i(31320),c=i(62423),l=i(20408),u=i(25787),d=i(60614),h=i(70111),p=i(47293),v=i(17072),f=i(58003),m=i(79587);t.exports=function(t,e,i){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),y=g?"set":"add",_=s[t],S=_&&_.prototype,x=_,C={},k=function(t){var e=r(S[t]);a(S,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!h(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:function(t,i){return e(this,0===t?0:t,i),this})},w=o(t,!d(_)||!(b||S.forEach&&!p((function(){(new _).entries().next()}))));if(w)x=i.getConstructor(e,t,g,y),c.enable();else if(o(t,!0)){var Z=new x,E=Z[y](b?{}:-0,1)!=Z,B=p((function(){Z.has(1)})),L=v((function(t){new _(t)})),$=!b&&p((function(){var t=new _,e=5;while(e--)t[y](e,e);return!t.has(-0)}));L||(x=e((function(t,e){u(t,S);var i=m(new _,t,x);return void 0!=e&&l(e,i[y],{that:i,AS_ENTRIES:g}),i})),x.prototype=S,S.constructor=x),(B||$)&&(k("delete"),k("has"),g&&k("get")),($||E)&&k(y),b&&S.clear&&delete S.clear}return C[t]=x,n({global:!0,forced:x!=_},C),f(x,t),b||i.setStrong(x,t,g),x}},38862:function(t,e,i){var n=i(82109),s=i(17854),r=i(35005),o=i(22104),a=i(1702),c=i(47293),l=s.Array,u=r("JSON","stringify"),d=a(/./.exec),h=a("".charAt),p=a("".charCodeAt),v=a("".replace),f=a(1..toString),m=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,y=function(t,e,i){var n=h(i,e-1),s=h(i,e+1);return d(g,t)&&!d(b,s)||d(b,t)&&!d(g,n)?"\\u"+f(p(t,0),16):t},_=c((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:_},{stringify:function(t,e,i){for(var n=0,s=arguments.length,r=l(s);n<s;n++)r[n]=arguments[n];var a=o(u,null,r);return"string"==typeof a?v(a,m,y):a}})},51532:function(t,e,i){"use strict";var n=i(77710),s=i(95631);n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},27852:function(t,e,i){"use strict";var n=i(82109),s=i(1702),r=i(31236).f,o=i(17466),a=i(41340),c=i(3929),l=i(84488),u=i(84964),d=i(31913),h=s("".endsWith),p=s("".slice),v=Math.min,f=u("endsWith"),m=!d&&!f&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!m&&!f},{endsWith:function(t){var e=a(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,s=void 0===i?n:v(o(i),n),r=a(t);return h?h(e,r,s):p(e,s-r.length,s)===r}})},29253:function(t,e,i){"use strict";var n=i(82109),s=i(14230),r=i(43429);n({target:"String",proto:!0,forced:r("fixed")},{fixed:function(){return s(this,"tt","","")}})},29254:function(t,e,i){"use strict";var n=i(82109),s=i(14230),r=i(43429);n({target:"String",proto:!0,forced:r("link")},{link:function(t){return s(this,"a","href",t)}})},63150:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var n=i(9726),s=i(75200),r=i(4367),o=(i(29253),i(9653),i(41539),i(26699),i(38862),i(55648)),a=i(90624),c=a.Z,l=i(17352),u=i(2936),d=i(93377),h=i(93536),p=i(6505),v=i(19131),f=i(73325),m=i(71824),g=(0,f.Z)(o.Z,p.Z,h.Z,v.Z,(0,l.d)("btnToggle"),(0,u.d)("inputValue")),b=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({"v-btn":!0},p.Z.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return(0,r.Z)({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=(0,s.Z)(e,2),n=i[0],r=i[1];t.$attrs.hasOwnProperty(n)&&(0,m.fK)(n,r,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,r=i.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes((0,n.Z)(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:o(this.color,r),e)}})},82102:function(t,e,i){"use strict";var n=i(23796),s=i(4367),r=(i(41539),i(9653),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(26699),i(54747),i(23157),i(17273),i(20144)),o=i(76290),a=i(4589),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["Z"]=r.Z.extend({name:"v-col",functional:!0,props:(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,s=e.data,r=e.children,a=(e.parent,"");for(var c in i)a+=String(i[c]);var l=v.get(a);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var n=i[t],s=p(e,t,n);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!i.cols},(0,n.Z)(t,"col-".concat(i.cols),i.cols),(0,n.Z)(t,"offset-".concat(i.offset),i.offset),(0,n.Z)(t,"order-".concat(i.order),i.order),(0,n.Z)(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(a,l)}(),t(i.tag,(0,o.ZP)(s,{class:l}),r)}})},62877:function(t,e,i){"use strict";var n=i(23796),s=i(4367),r=(i(41539),i(26699),i(32023),i(92222),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(54747),i(17273),i(20144)),o=i(76290),a=i(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+(0,a.jC)(n)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),f=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:f}})),g={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var n=b[t];if(null!=i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(i),n.toLowerCase()}}var _=new Map;e["Z"]=r.Z.extend({name:"v-row",functional:!0,props:(0,s.Z)((0,s.Z)((0,s.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:f}},m),render:function(t,e){var i=e.props,s=e.data,r=e.children,a="";for(var c in i)a+=String(i[c]);var l=_.get(a);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=i[t],s=y(e,t,n);s&&l.push(s)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},(0,n.Z)(t,"align-".concat(i.align),i.align),(0,n.Z)(t,"justify-".concat(i.justify),i.justify),(0,n.Z)(t,"align-content-".concat(i.alignContent),i.alignContent),t)),_.set(a,l)}(),t(i.tag,(0,o.ZP)(s,{staticClass:"row",class:l}),r)}})},97047:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(9726),s=(i(9653),i(69600),i(27852),i(23157),i(68083)),r=i(42529),o=i(73325),a=(0,o.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=i(48085),u=i(76290),d=i(71824),h="undefined"!==typeof window&&"IntersectionObserver"in window,p=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,n.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},83385:function(t,e,i){"use strict";i.d(e,{Z:function(){return d}});var n=i(4367),s=i(66210),r=i(46952),o=i(93377),a=i(42529),c=i(93712),l=i(48085),u=i(73325),d=(0,u.Z)(s.Z,r.Z,o.Z,a.Z,c.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,n.Z)((0,n.Z)((0,n.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},55648:function(t,e,i){"use strict";var n=i(83385);e["Z"]=n.Z},46286:function(t,e,i){"use strict";i.d(e,{Z:function(){return k}});i(68309),i(92222),i(9653);var n=i(4589),s=80;function r(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}var c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,s=0;if(!a(t)){var r=e.getBoundingClientRect(),c=o(t)?t.touches[t.touches.length-1]:t;n=c.clientX-r.left,s=c.clientY-r.top}var l=0,u=.3;e._ripple&&e._ripple.circle?(u=.15,l=e.clientWidth/2,l=i.center?l:l+Math.sqrt(Math.pow(n-l,2)+Math.pow(s-l,2))/4):l=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var d="".concat((e.clientWidth-2*l)/2,"px"),h="".concat((e.clientHeight-2*l)/2,"px"),p=i.center?d:"".concat(n-l,"px"),v=i.center?h:"".concat(s-l,"px");return{radius:l,scale:u,x:p,y:v,centerX:d,centerY:h}},l={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var o=c(t,e,i),a=o.radius,l=o.scale,u=o.x,d=o.y,h=o.centerX,p=o.centerY,v="".concat(2*a,"px");s.className="v-ripple__animation",s.style.width=v,s.style.height=v,e.appendChild(n);var f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,"translate(".concat(u,", ").concat(d,") scale3d(").concat(l,",").concat(l,",").concat(l,")")),s.dataset.activated=String(performance.now()),setTimeout((function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,"translate(".concat(h,", ").concat(p,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),s)}}}}};function u(t){return"undefined"===typeof t||!!t}function d(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||a(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){l.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),s)}else l.show(t,i,e)}}function h(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){h(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var v=!1;function f(t){v||t.keyCode!==n.Do.enter&&t.keyCode!==n.Do.space||(v=!0,d(t))}function m(t){v=!1,h(t)}function g(t){!0===v&&(v=!1,h(t))}function b(t,e,i){var n=u(e.value);n||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",h),t.addEventListener("mousedown",d),t.addEventListener("mouseup",h),t.addEventListener("mouseleave",h),t.addEventListener("keydown",f),t.addEventListener("keyup",m),t.addEventListener("blur",g),t.addEventListener("dragstart",h,{passive:!0})):!n&&i&&y(t)}function y(t){t.removeEventListener("mousedown",d),t.removeEventListener("touchstart",d),t.removeEventListener("touchend",h),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",h),t.removeEventListener("mouseup",h),t.removeEventListener("mouseleave",h),t.removeEventListener("keydown",f),t.removeEventListener("keyup",m),t.removeEventListener("dragstart",h),t.removeEventListener("blur",g)}function _(t,e,i){b(t,e,!1)}function S(t){delete t._ripple,y(t)}function x(t,e){if(e.value!==e.oldValue){var i=u(e.oldValue);b(t,e,i)}}var C={bind:_,unbind:S,update:x},k=C},93377:function(t,e,i){"use strict";var n=i(23796),s=(i(9653),i(20144));e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,n.Z)({},"elevation-".concat(this.elevation),!0)}}})},17352:function(t,e,i){"use strict";i.d(e,{d:function(){return r}});var n=i(23796),s=i(96257);function r(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,n.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}r("itemGroup")},42529:function(t,e,i){"use strict";i(9653);var n=i(4589),s=i(20144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),s=(0,n.kb)(this.minWidth),r=(0,n.kb)(this.maxHeight),o=(0,n.kb)(this.maxWidth),a=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),s&&(t.minWidth=s),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},93536:function(t,e,i){"use strict";i.d(e,{d:function(){return o}});var n=i(20144),s=i(4589),r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.Z.extend({name:"positionable",props:t.length?(0,s.ji)(r,t):r})}e["Z"]=o()},96257:function(t,e,i){"use strict";i.d(e,{J:function(){return c},f:function(){return a}});var n=i(23796),s=(i(92222),i(20144)),r=i(71824);function o(t,e){return function(){return(0,r.Kd)("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,i){var r=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return s.Z.extend({name:"registrable-inject",inject:(0,n.Z)({},t,{default:r})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s.Z.extend({name:"registrable-provide",provide:function(){return(0,n.Z)({},t,e?this:{register:this.register,unregister:this.unregister})}})}},93712:function(t,e,i){"use strict";var n=i(23796),s=i(62032),r=(i(74916),i(23123),i(69600),i(20144));e["Z"]=r.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,r=e.split(" "),o=(0,s.Z)(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;t.push("rounded-".concat(a))}}catch(c){o.e(c)}finally{o.f()}}else e&&t.push("rounded");return t.length>0?(0,n.Z)({},t.join(" "),!0):{}}}})},6505:function(t,e,i){"use strict";var n=i(23796),s=i(4367),r=(i(29254),i(73210),i(92222),i(74916),i(15306),i(20144)),o=i(46286),a=i(4589);e["Z"]=r.Z.extend({name:"routable",directives:{Ripple:o.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,i=this.exact,r=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,n.Z)(t,this.to?"nativeOn":"on",(0,s.Z)((0,s.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,n.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(r.props,{to:this.to,exact:i,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(r.attrs.href=this.href);return this.target&&(r.attrs.target=this.target),{tag:e,data:r}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),i="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,n="_vnode.data.class."+(this.exact?i:e);this.$nextTick((function(){!(0,a.vO)(t.$refs.link,n)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,e,i){"use strict";i.d(e,{d:function(){return r}});var n=i(23796),s=i(20144);function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return s.Z.extend({name:"toggleable",model:{prop:e,event:i},props:(0,n.Z)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},(0,n.Z)(t,e,(function(t){this.isActive=!!t})),(0,n.Z)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var o=r();e["Z"]=o},16617:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-arrow"},[0===t.block.type?n("div",{staticClass:"ql-editor pa-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.block.content.text)}}):t._e(),1===t.block.type?n("v-row",{staticClass:"align-center"},t._l(t.block.content.blocks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"6"}},[n("BaseNewsBlocks",{attrs:{block:t}})],1)})),1):t._e(),2===t.block.type?n("div",{staticStyle:{position:"relative"}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"...",rel:"preload",src:t.block.content.imgName.croppie}}),n("div",{staticClass:"text-body-1",staticStyle:{opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")]),t.edit?n("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(e){return t.$emit("beforeCropInsert")}}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1):t._e()],1):t._e(),3===t.block.type?n("div",{class:"carousel-block-"+(t.block.id||t.index)},[n("CarouselComponent",{attrs:{slider:t.block.content.imagesName,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-col",{attrs:{cols:"12"}},[n("div",[n("img",{class:"carousel-img-"+(t.block.id||t.index),staticStyle:{"object-fit":"contain",width:"100%","min-height":"150px"},attrs:{alt:"",rel:"preload",src:e.item.croppie},on:{load:function(i){return t.getHeight(e.item.croppie)}}})])])]}},{key:"subtitle",fn:function(){return[n("div",{staticClass:"text-body-1",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")])]},proxy:!0},t.edit?{key:"index",fn:function(e){return[n("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(i){return t.$emit("beforeCropMultipleInsertOne",t.block,e.index)}}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}:null],null,!0)})],1):t._e(),4===t.block.type?n("div",[n("div",{staticClass:"d-flex"},[n("div",[n("v-img",{attrs:{width:"50",height:"50",src:i(33336)}})],1),n("div",{staticClass:"pl-4"},[t._v(" "+t._s(t.block.content.text)+" ")])]),n("div",{staticClass:"text-end font-weight-bold",staticStyle:{color:"#2DC0C5"}},[t._v(" "+t._s(t.block.content.author)+" ")])]):t._e(),5===t.block.type?n("div",[n("div",{staticClass:"text-h6 text-sm-h5 default-color"},[t._v(" "+t._s(t.block.content.text)+" ")])]):t._e()],1)},s=[],r=(i(41539),i(78783),i(33948),i(9653),i(54747),{name:"BaseNewsBlocks",components:{CarouselComponent:function(){return Promise.all([i.e(8149),i.e(3094)]).then(i.bind(i,38149))}},props:{block:{type:Object,default:null},edit:{type:Boolean,default:!1},index:{type:Number,default:0}},emits:["beforeCropInsert","beforeCropMultipleInsertOne"],methods:{getHeight:function(t){var e=this;if(t){var i=new Image;i.onload=function(){var t=i.height,n=document.querySelectorAll(".carousel-img-"+(e.block.id||e.index));n.length&&(t=Math.min(t,n[0].height),n.forEach((function(e){return e.height=t})),document.querySelector(".carousel-block-"+(e.block.id||e.index)+" .v-window__container").style.height="".concat(t+6,"px"))},i.src=t}}}}),o=r,a=i(1001),c=i(43453),l=i.n(c),u=i(63150),d=i(82102),h=i(96428),p=i(97047),v=i(62877),f=(0,a.Z)(o,n,s,!1,null,null,null),m=f.exports;l()(f,{VBtn:u.Z,VCol:d.Z,VIcon:h.Z,VImg:p.Z,VRow:v.Z})},33336:function(t,e,i){"use strict";t.exports=i.p+"img/bxs_quote-alt-left.c5a4e697.svg"}}]);
//# sourceMappingURL=6617-legacy.a7fbc400.js.map