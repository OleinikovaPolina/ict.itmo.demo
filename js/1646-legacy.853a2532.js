"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1646],{95631:function(t,e,i){var n=i(3070).f,r=i(70030),s=i(12248),a=i(49974),o=i(25787),l=i(20408),u=i(70654),c=i(96340),h=i(19781),d=i(62423).fastKey,f=i(29909),v=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,i,u){var c=t((function(t,n){o(t,f),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=n&&l(n,t[u],{that:t,AS_ENTRIES:i})})),f=c.prototype,g=p(e),m=function(t,e,i){var n,r,s=g(t),a=y(t,e);return a?a.value=i:(s.last=a={index:r=d(e,!0),key:e,value:i,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=a),n&&(n.next=a),h?s.size++:t.size++,"F"!==r&&(s.index[r]=a)),t},y=function(t,e){var i,n=g(t),r=d(e);if("F"!==r)return n.index[r];for(i=n.first;i;i=i.next)if(i.key==e)return i};return s(f,{clear:function(){var t=this,e=g(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,i=g(e),n=y(e,t);if(n){var r=n.next,s=n.previous;delete i.index[n.index],n.removed=!0,s&&(s.next=r),r&&(r.previous=s),i.first==n&&(i.first=r),i.last==n&&(i.last=s),h?i.size--:e.size--}return!!n},forEach:function(t){var e,i=g(this),n=a(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),s(f,i?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),h&&n(f,"size",{get:function(){return g(this).size}}),c},setStrong:function(t,e,i){var n=e+" Iterator",r=p(e),s=p(n);u(t,e,(function(t,e){v(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),c(e)}}},77710:function(t,e,i){var n=i(82109),r=i(17854),s=i(1702),a=i(54705),o=i(31320),l=i(62423),u=i(20408),c=i(25787),h=i(60614),d=i(70111),f=i(47293),v=i(17072),p=i(58003),g=i(79587);t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),b=m?"set":"add",x=r[t],Z=x&&x.prototype,k=x,C={},S=function(t){var e=s(Z[t]);o(Z,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:function(t,i){return e(this,0===t?0:t,i),this})},w=a(t,!h(x)||!(y||Z.forEach&&!f((function(){(new x).entries().next()}))));if(w)k=i.getConstructor(e,t,m,b),l.enable();else if(a(t,!0)){var A=new k,j=A[b](y?{}:-0,1)!=A,B=f((function(){A.has(1)})),$=v((function(t){new x(t)})),O=!y&&f((function(){var t=new x,e=5;while(e--)t[b](e,e);return!t.has(-0)}));$||(k=e((function(t,e){c(t,Z);var i=g(new x,t,k);return void 0!=e&&u(e,i[b],{that:i,AS_ENTRIES:m}),i})),k.prototype=Z,Z.constructor=k),(B||O)&&(S("delete"),S("has"),m&&S("get")),(O||j)&&S(b),y&&Z.clear&&delete Z.clear}return C[t]=k,n({global:!0,forced:k!=x},C),p(k,t),y||i.setStrong(k,t,m),k}},40561:function(t,e,i){var n=i(82109),r=i(17854),s=i(51400),a=i(19303),o=i(26244),l=i(47908),u=i(65417),c=i(86135),h=i(81194),d=h("splice"),f=r.TypeError,v=Math.max,p=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var i,n,r,h,d,y,b=l(this),x=o(b),Z=s(t,x),k=arguments.length;if(0===k?i=n=0:1===k?(i=0,n=x-Z):(i=k-2,n=p(v(a(e),0),x-Z)),x+i-n>g)throw f(m);for(r=u(b,n),h=0;h<n;h++)d=Z+h,d in b&&c(r,h,b[d]);if(r.length=n,i<n){for(h=Z;h<x-n;h++)d=h+n,y=h+i,d in b?b[y]=b[d]:delete b[y];for(h=x;h>x-n+i;h--)delete b[h-1]}else if(i>n)for(h=x-n;h>Z;h--)d=h+n-1,y=h+i-1,d in b?b[y]=b[d]:delete b[y];for(h=0;h<i;h++)b[h+Z]=arguments[h+2];return b.length=x-n+i,r}})},51532:function(t,e,i){var n=i(77710),r=i(95631);n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},29254:function(t,e,i){var n=i(82109),r=i(14230),s=i(43429);n({target:"String",proto:!0,forced:s("link")},{link:function(t){return r(this,"a","href",t)}})},17273:function(){},82102:function(t,e,i){var n=i(23796),r=i(4367),s=(i(41539),i(9653),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(26699),i(54747),i(23157),i(17273),i(20144)),a=i(76290),o=i(4589),l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),c=function(){return l.reduce((function(t,e){return t["offset"+(0,o.jC)(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return l.reduce((function(t,e){return t["order"+(0,o.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(c),order:Object.keys(h)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,r=e.data,s=e.children,o=(e.parent,"");for(var l in i)o+=String(i[l]);var u=v.get(o);return u||function(){var t,e;for(e in u=[],d)d[e].forEach((function(t){var n=i[t],r=f(e,t,n);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!i.cols},(0,n.Z)(t,"col-".concat(i.cols),i.cols),(0,n.Z)(t,"offset-".concat(i.offset),i.offset),(0,n.Z)(t,"order-".concat(i.order),i.order),(0,n.Z)(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(o,u)}(),t(i.tag,(0,a.ZP)(r,{class:u}),s)}})},62877:function(t,e,i){var n=i(23796),r=i(4367),s=(i(41539),i(26699),i(32023),i(92222),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(54747),i(17273),i(20144)),a=i(76290),o=i(4589),l=["sm","md","lg","xl"],u=["start","end","center"];function c(t,e){return l.reduce((function(i,n){return i[t+(0,o.jC)(n)]=e(),i}),{})}var h=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=c("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},v=c("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=c("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,i){var n=y[t];if(null!=i){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(i),n.toLowerCase()}}var x=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var i=e.props,r=e.data,s=e.children,o="";for(var l in i)o+=String(i[l]);var u=x.get(o);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var n=i[t],r=b(e,t,n);r&&u.push(r)}));u.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},(0,n.Z)(t,"align-".concat(i.align),i.align),(0,n.Z)(t,"justify-".concat(i.justify),i.justify),(0,n.Z)(t,"align-content-".concat(i.alignContent),i.alignContent),t)),x.set(o,u)}(),t(i.tag,(0,a.ZP)(r,{staticClass:"row",class:u}),s)}})},97620:function(t,e,i){i.d(e,{Z:function(){return v}});var n=i(4367),r=i(46952),s=i(6505),a=i(17352),o=i(48085),l=i(2936),u=i(46286),c=i(4589),h=i(71824),d=i(73325),f=(0,d.Z)(r.Z,s.Z,o.Z,(0,a.d)("listItemGroup"),(0,l.d)("inputValue")),v=f.extend().extend({name:"v-list-item",directives:{Ripple:u.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return(0,n.Z)((0,n.Z)({"v-list-item":!0},s.Z.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(s.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&(0,h.Jk)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=(0,n.Z)({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,i=this.generateRouteLink(),r=i.tag,s=i.data;s.attrs=(0,n.Z)((0,n.Z)({},s.attrs),this.genAttrs()),s[this.to?"nativeOn":"on"]=(0,n.Z)((0,n.Z)({},s[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===c.Do.enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(r="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(r,this.isActive?this.setTextColor(this.color,s):s,a)}})},83385:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(4367),r=i(66210),s=i(46952),a=i(93377),o=i(42529),l=i(93712),u=i(48085),c=i(73325),h=(0,c.Z)(r.Z,s.Z,a.Z,o.Z,l.Z,u.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,n.Z)((0,n.Z)((0,n.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},93377:function(t,e,i){var n=i(23796),r=(i(9653),i(20144));e["Z"]=r.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,n.Z)({},"elevation-".concat(this.elevation),!0)}}})},17352:function(t,e,i){i.d(e,{d:function(){return s}});var n=i(23796),r=i(96257);function s(t,e,i){return(0,r.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,n.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},42529:function(t,e,i){i(9653);var n=i(4589),r=i(20144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),r=(0,n.kb)(this.minWidth),s=(0,n.kb)(this.maxHeight),a=(0,n.kb)(this.maxWidth),o=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),s&&(t.maxHeight=s),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},93712:function(t,e,i){var n=i(23796),r=i(62032),s=(i(74916),i(23123),i(69600),i(20144));e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,s=e.split(" "),a=(0,r.Z)(s);try{for(a.s();!(i=a.n()).done;){var o=i.value;t.push("rounded-".concat(o))}}catch(l){a.e(l)}finally{a.f()}}else e&&t.push("rounded");return t.length>0?(0,n.Z)({},t.join(" "),!0):{}}}})},6505:function(t,e,i){var n=i(23796),r=i(4367),s=(i(29254),i(73210),i(92222),i(74916),i(15306),i(20144)),a=i(46286),o=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:a.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,i=this.exact,s=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,n.Z)(t,this.to?"nativeOn":"on",(0,r.Z)((0,r.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,n.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var a=this.activeClass,o=this.exactActiveClass||a;this.proxyClass&&(a="".concat(a," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:i,exactPath:this.exactPath,activeClass:a,exactActiveClass:o,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:e,data:s}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),i="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,n="_vnode.data.class."+(this.exact?i:e);this.$nextTick((function(){!(0,o.vO)(t.$refs.link,n)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return s}});var n=i(23796),r=i(20144);function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return r.Z.extend({name:"toggleable",model:{prop:e,event:i},props:(0,n.Z)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},(0,n.Z)(t,e,(function(t){this.isActive=!!t})),(0,n.Z)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var a=s();e["Z"]=a},76290:function(t,e,i){i.d(e,{ZP:function(){return u},bp:function(){return d}});var n=i(4367),r=i(75200),s=i(62032),a=(i(74916),i(23123),i(73210),i(47941),i(92222),i(4589)),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e,i={},n=(0,s.Z)(t.split(o.styleList));try{for(n.s();!(e=n.n()).done;){var l=e.value,u=l.split(o.styleProp),c=(0,r.Z)(u,2),h=c[0],d=c[1];h=h.trim(),h&&("string"===typeof d&&(d=d.trim()),i[(0,a._A)(h)]=d)}}catch(f){n.e(f)}finally{n.f()}return i}function u(){var t,e={},i=arguments.length;while(i--)for(var r=0,s=Object.keys(arguments[i]);r<s.length;r++)switch(t=s[r],t){case"class":case"directives":arguments[i][t]&&(e[t]=h(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=c(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=d(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=(0,n.Z)((0,n.Z)({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function c(t,e){return t?e?(t=(0,a.TI)("string"===typeof t?l(t):t),t.concat("string"===typeof e?l(e):e)):t:e}function h(t,e){return e?t&&t?(0,a.TI)(t).concat(e):e:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var i=e<0||arguments.length<=e?void 0:arguments[e];for(var n in i)i[n]&&(t[n]?t[n]=[].concat(i[n],t[n]):t[n]=i[n])}return t}},62032:function(t,e,i){i.d(e,{Z:function(){return r}});i(82526),i(41817),i(41539),i(32165),i(78783),i(33948),i(21703);var n=i(48936);function r(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.Z)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(l)throw a}}}}}}]);
//# sourceMappingURL=1646-legacy.853a2532.js.map