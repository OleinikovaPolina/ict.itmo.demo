"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[812],{95631:function(t,e,n){var i=n(3070).f,r=n(70030),s=n(12248),o=n(49974),a=n(25787),c=n(20408),l=n(70654),u=n(96340),d=n(19781),f=n(62423).fastKey,p=n(29909),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,i){a(t,p),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[l],{that:t,AS_ENTRIES:n})})),p=u.prototype,m=h(e),g=function(t,e,n){var i,r,s=m(t),o=b(t,e);return o?o.value=n:(s.last=o={index:r=f(e,!0),key:e,value:n,previous:i=s.last,next:void 0,removed:!1},s.first||(s.first=o),i&&(i.next=o),d?s.size++:t.size++,"F"!==r&&(s.index[r]=o)),t},b=function(t,e){var n,i=m(t),r=f(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return s(p,{clear:function(){var t=this,e=m(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=m(e),i=b(e,t);if(i){var r=i.next,s=i.previous;delete n.index[i.index],i.removed=!0,s&&(s.next=r),r&&(r.previous=s),n.first==i&&(n.first=r),n.last==i&&(n.last=s),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=m(this),i=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),s(p,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(p,"size",{get:function(){return m(this).size}}),u},setStrong:function(t,e,n){var i=e+" Iterator",r=h(e),s=h(i);l(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},77710:function(t,e,n){var i=n(82109),r=n(17854),s=n(1702),o=n(54705),a=n(31320),c=n(62423),l=n(20408),u=n(25787),d=n(60614),f=n(70111),p=n(47293),v=n(17072),h=n(58003),m=n(79587);t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),x=g?"set":"add",y=r[t],C=y&&y.prototype,w=y,k={},S=function(t){var e=s(C[t]);a(C,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},Z=o(t,!d(y)||!(b||C.forEach&&!p((function(){(new y).entries().next()}))));if(Z)w=n.getConstructor(e,t,g,x),c.enable();else if(o(t,!0)){var _=new w,L=_[x](b?{}:-0,1)!=_,j=p((function(){_.has(1)})),F=v((function(t){new y(t)})),z=!b&&p((function(){var t=new y,e=5;while(e--)t[x](e,e);return!t.has(-0)}));F||(w=e((function(t,e){u(t,C);var n=m(new y,t,w);return void 0!=e&&l(e,n[x],{that:n,AS_ENTRIES:g}),n})),w.prototype=C,C.constructor=w),(j||z)&&(S("delete"),S("has"),g&&S("get")),(z||L)&&S(x),b&&C.clear&&delete C.clear}return k[t]=w,i({global:!0,forced:w!=y},k),h(w,t),b||n.setStrong(w,t,g),w}},40561:function(t,e,n){var i=n(82109),r=n(17854),s=n(51400),o=n(19303),a=n(26244),c=n(47908),l=n(65417),u=n(86135),d=n(81194),f=d("splice"),p=r.TypeError,v=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,i,r,d,f,b,x=c(this),y=a(x),C=s(t,y),w=arguments.length;if(0===w?n=i=0:1===w?(n=0,i=y-C):(n=w-2,i=h(v(o(e),0),y-C)),y+n-i>m)throw p(g);for(r=l(x,i),d=0;d<i;d++)f=C+d,f in x&&u(r,d,x[f]);if(r.length=i,n<i){for(d=C;d<y-i;d++)f=d+i,b=d+n,f in x?x[b]=x[f]:delete x[b];for(d=y;d>y-i+n;d--)delete x[d-1]}else if(n>i)for(d=y-i;d>C;d--)f=d+i-1,b=d+n-1,f in x?x[b]=x[f]:delete x[b];for(d=0;d<n;d++)x[d+C]=arguments[d+2];return x.length=y-i+n,r}})},51532:function(t,e,n){var i=n(77710),r=n(95631);i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},17273:function(){},68582:function(){},82102:function(t,e,n){var i=n(23796),r=n(4367),s=(n(41539),n(9653),n(47941),n(74916),n(15306),n(51532),n(78783),n(33948),n(26699),n(54747),n(23157),n(17273),n(20144)),o=n(76290),a=n(4589),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var v=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,s=e.children,a=(e.parent,"");for(var c in n)a+=String(n[c]);var l=v.get(a);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var i=n[t],r=p(e,t,i);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},(0,i.Z)(t,"col-".concat(n.cols),n.cols),(0,i.Z)(t,"offset-".concat(n.offset),n.offset),(0,i.Z)(t,"order-".concat(n.order),n.order),(0,i.Z)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(a,l)}(),t(n.tag,(0,o.ZP)(r,{class:l}),s)}})},99846:function(t,e,n){n.d(e,{Z:function(){return o}});n(57327),n(41539),n(47941),n(23157),n(92222),n(68582),n(17273),n(73210),n(69600);var i=n(20144);function r(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,r=n.data,s=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));a.length&&(r.staticClass+=" ".concat(a.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,r,s)}})}var s=n(76290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,r=e.data,o=e.children,a=r.attrs;return a&&(r.attrs={},n=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,(0,s.ZP)(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),o)}})},62877:function(t,e,n){var i=n(23796),r=n(4367),s=(n(41539),n(26699),n(32023),n(92222),n(47941),n(74916),n(15306),n(51532),n(78783),n(33948),n(54747),n(17273),n(20144)),o=n(76290),a=n(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,i){return n[t+(0,a.jC)(i)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),h=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:h}})),g={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var i=b[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var y=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,r.Z)((0,r.Z)((0,r.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:h}},m),render:function(t,e){var n=e.props,r=e.data,s=e.children,a="";for(var c in n)a+=String(n[c]);var l=y.get(a);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var i=n[t],r=x(e,t,i);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},(0,i.Z)(t,"align-".concat(n.align),n.align),(0,i.Z)(t,"justify-".concat(n.justify),n.justify),(0,i.Z)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(a,l)}(),t(n.tag,(0,o.ZP)(r,{staticClass:"row",class:l}),s)}})},90624:function(t,e,n){n.d(e,{Z:function(){return o}});n(9653),n(92222);var i=n(68083),r=n(46952),s=n(4589),o=r.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:(0,s.kb)(this.calculatedSize),width:(0,s.kb)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},68083:function(t,e,n){var i=n(9726);n(41539);function r(t,e,n){if("undefined"!==typeof window&&"IntersectionObserver"in window){var r=e.modifiers||{},o=e.value,a="object"===(0,i.Z)(o)?o:{handler:o,options:{}},c=a.handler,l=a.options,u=new IntersectionObserver((function(){var i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,l=null==(i=t._observe)?void 0:i[n.context._uid];if(l){var u=o.some((function(t){return t.isIntersecting}));!c||r.quiet&&!l.init||r.once&&!u&&!l.init||c(o,a,u),u&&r.once?s(t,e,n):l.init=!0}}),l);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:u},u.observe(t)}}function s(t,e,n){var i,r=null==(i=t._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var o={inserted:r,unbind:s};e["Z"]=o},46952:function(t,e,n){var i=n(75200),r=n(23796),s=n(4367),o=(n(74916),n(23123),n(73210),n(41539),n(39714),n(20144)),a=n(71824),c=n(17093);e["Z"]=o.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,a.N6)("style must be an object",this),e):"string"===typeof e.class?((0,a.N6)("class must be an object",this),e):((0,c.NA)(t)?e.style=(0,s.Z)((0,s.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,r.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,a.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,a.N6)("class must be an object",this),e;if((0,c.NA)(t))e.style=(0,s.Z)((0,s.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var n=t.toString().trim().split(" ",2),o=(0,i.Z)(n,2),l=o[0],u=o[1];e.class=(0,s.Z)((0,s.Z)({},e.class),{},(0,r.Z)({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},76290:function(t,e,n){n.d(e,{ZP:function(){return l},bp:function(){return f}});var i=n(4367),r=n(75200),s=n(62032),o=(n(74916),n(23123),n(73210),n(47941),n(92222),n(4589)),a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,n={},i=(0,s.Z)(t.split(a.styleList));try{for(i.s();!(e=i.n()).done;){var c=e.value,l=c.split(a.styleProp),u=(0,r.Z)(l,2),d=u[0],f=u[1];d=d.trim(),d&&("string"===typeof f&&(f=f.trim()),n[(0,o._A)(d)]=f)}}catch(p){i.e(p)}finally{i.f()}return n}function l(){var t,e={},n=arguments.length;while(n--)for(var r=0,s=Object.keys(arguments[n]);r<s.length;r++)switch(t=s[r],t){case"class":case"directives":arguments[n][t]&&(e[t]=d(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=f(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]=(0,i.Z)((0,i.Z)({},arguments[n][t]),e[t]);break;default:e[t]||(e[t]=arguments[n][t])}return e}function u(t,e){return t?e?(t=(0,o.TI)("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?(0,o.TI)(t).concat(e):e:t}function f(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var n=e<0||arguments.length<=e?void 0:arguments[e];for(var i in n)n[i]&&(t[i]?t[i]=[].concat(n[i],t[i]):t[i]=n[i])}return t}},40812:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoad?n("div",[n("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{class:t.$vuetify.breakpoint.xs?"text-center":"",attrs:{cols:"12",sm:"6"}},[n("div",{staticClass:"pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1"},[t._v(" Факультет ИКТ ")]),n("div",{staticClass:"text-subtitle-1"},[t._v(" Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в проектах наших партнеров. ")])]),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6"}},[n("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),n("div",{staticClass:"hex-section",staticStyle:{"z-index":"0",position:"relative"}},[t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient1"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient2"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),n("v-container",{staticStyle:{position:"relative","z-index":"10"}},[n("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.article.title)+" ")]),n("BaseHexagonContainer",{attrs:{"hex-array":JSON.parse(t.article.description).winnersHex,link:"/article/1"}})],1),n("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left"}}),n("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"55%",position:"right",top:"10px"}})],1),n("NewsComponent",{staticClass:"pb-8 pb-xl-12",attrs:{news:t.news.results}}),n("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"left",top:"-10px"}}),n("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"right"}}),n("div",{staticClass:"section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ")]),n("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1),n("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"40%",position:"left"}}),n("LineComponent",{attrs:{id:"6",color:"#FF776E",width:"45%",position:"right",top:"10px"}}),n("div",{staticClass:"ethics"},[n("TheEthicsMobileComponent",{staticClass:"ethics-mobile"}),n("TheEthicsComponent",{staticClass:"ethics-desktop"})],1),n("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"30%",position:"right",top:"-5px"}}),n("LineComponent",{attrs:{id:"8",color:"#FF0281",width:"60%",position:"left",top:"10px","left-after":"15%"}}),n("div",{staticClass:"section-background pt-4 pb-10 pt-lg-12 pb-lg-16"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Клубы факультета ")]),n("v-row",{staticClass:"d-flex align-start justify-space-around"},t._l(t.clubs,(function(e,i){return n("v-col",{key:i,staticClass:"pt-6 text-center d-flex flex-column align-center animation-club",attrs:{cols:"6",md:"3"}},[n("img",{staticClass:"club-img",attrs:{alt:"...",rel:"preload",src:e.img}}),n("div",{staticClass:"club-text"},[n("div",{staticClass:"text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"club-description px-sm-2"},[t._v(" "+t._s(e.description)+" ")]),n("div",{staticClass:"d-flex justify-center club-description pt-2"},[n("div",[n("img",{staticClass:"mr-2",attrs:{alt:"...",rel:"preload",src:e.iconLink,width:t.$vuetify.breakpoint.xs?20:30}})]),n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])])]),2===i&&t.$vuetify.breakpoint.smAndDown?n("LineComponent",{attrs:{id:"11",color:"#6A30F4",width:"100%",position:"right",top:"-20px"}}):t._e(),2===i&&t.$vuetify.breakpoint.smAndDown?n("LineComponent",{attrs:{id:"12",color:"#FF776E",width:"30%",position:"left",top:"-10px"}}):t._e()],1)})),1)],1)],1),n("LineComponent",{attrs:{id:"9",color:"#6A30F4",width:"100%",position:"right"}}),t.$vuetify.breakpoint.mdAndUp?n("LineComponent",{attrs:{id:"10",color:"#FF776E",width:"30%",position:"left",top:"10px"}}):t._e(),n("div",{staticClass:"pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8"},[n("v-container",{staticClass:"animation-numbers"},[n("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Факультет в цифрах ")]),n("v-row",t._l(t.numbers,(function(e,i){return n("v-col",{key:i,staticClass:"text-center",attrs:{cols:"4",md:1===i?6:3}},[n("div",{staticClass:"numbers-name"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"numbers-description subtitle-color",domProps:{innerHTML:t._s(e.description)}})])})),1)],1)],1),n("LineComponent",{attrs:{id:"13",color:"#6A30F4",width:"35%",position:"right"}}),n("LineComponent",{attrs:{id:"14",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),n("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[n("v-container",[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Видео ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Видео ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Мы снимаем полезные и классные видеролики про программирование, насущные вопросы, жизнь в Университете ИТМО. А также рассказываем про программы и возможности, которые реализуются у нас на факультете ИКТ. Если хотите окунуться в жизнь факультета, то погружайся вместе с ИКТ! ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{href:"https://vk.com/video/@ict.itmo",text:"Открыть"}})],1)]),n("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[n("TheStudentsVideoComponent")],1)],1)],1)],1),n("LineComponent",{attrs:{id:"15",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),n("LineComponent",{attrs:{id:"16",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),n("PartnersComponent")],1):n("div",{staticClass:"d-flex justify-center fill-height align-center fill-height",staticStyle:{"min-height":"75vh"}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1)},r=[],s=n(16198),o=n(4367),a=(n(35666),n(41539),n(78783),n(33948),n(92222),n(40561),n(54747),n(20629)),c={name:"HomeView",components:{LineComponent:function(){return n.e(5898).then(n.bind(n,65898))},CarouselLeadersComponent:function(){return Promise.all([n.e(3535),n.e(6035)]).then(n.bind(n,93535))},HeaderAnimation:function(){return n.e(6914).then(n.bind(n,46914))},TheEthicsComponent:function(){return n.e(5281).then(n.bind(n,5281))},TheEthicsMobileComponent:function(){return n.e(4063).then(n.bind(n,14063))},NewsComponent:function(){return n.e(9196).then(n.bind(n,39196))},PartnersComponent:function(){return n.e(3381).then(n.bind(n,83381))},BaseHexagonContainer:function(){return n.e(2673).then(n.bind(n,82673))},TheStudentsVideoComponent:function(){return n.e(129).then(n.bind(n,40129))},BaseButton:function(){return n.e(7625).then(n.bind(n,37625))}},props:{animationHeader:{type:Boolean,default:!1}},data:function(){return{clubs:[{img:n(65280),name:"AIRes",description:"Сообщество разработчиков искусственного интеллекта",link:"https://vk.com/airesclub",iconLink:n(27882)},{img:n(91365),name:"FTML",description:"Клуб frontend-разработчиков",link:"https://vk.com/ftmlclub",iconLink:n(27882)},{img:n(90375),name:"PM's",description:"Объединение специалистов в сфере менеджемента",link:"https://vk.com/pms_itmo",iconLink:n(27882)},{img:n(43654),name:"Info Lab",description:"Проектный клуб разработчиков",link:"https://vk.com/infolab_club",iconLink:n(27882)}],numbers:[{name:">60",description:"преподавателей"},{name:"~1000",description:"студентов"},{name:"6",description:"образовательных<br>программ"}],scrolledClub:[{type:!1},{type:!1},{type:!1},{type:!1}],scrolledNumbers:!1,scrolledHexLines:!1,isLoad:!1}},computed:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,a.rn)("news",["news","article"])),(0,a.rn)("contacts",["contacts","dean","office"])),{},{persons:function(){var t=[this.dean].concat(this.office,this.contacts);return t[1]=t.splice(5,1,t[1])[0],t}}),watch:{scrolledClub:{handler:function(t){t.forEach((function(t,e){t.type&&document.querySelectorAll(".animation-club")[e].classList.add("animation--active")}))},deep:!0},scrolledNumbers:function(t){t&&document.querySelector(".animation-numbers").classList.add("animation--active")}},mounted:function(){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getNews();case 2:return e.next=4,t.getArticle(1);case 4:t.isLoad=!0;case 5:case"end":return e.stop()}}),e)})))()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:(0,o.Z)((0,o.Z)({},(0,a.nv)("news",["getNews","getArticle"])),{},{handleScroll:function(){var t=this,e=document.documentElement.clientHeight;if(document.querySelectorAll(".animation-club").forEach((function(n,i){if(!t.scrolledClub[i].type){var r=n.getBoundingClientRect().bottom;t.scrolledClub[i].type=r<e&&r>0}})),!this.scrolledNumbers){var n=document.querySelector(".animation-numbers");if(n){var i=n.getBoundingClientRect().bottom;this.scrolledNumbers=i<e&&i>0}}if(!this.scrolledHexLines){var r=document.querySelector(".hex-section");if(r){var s=r.getBoundingClientRect().top+150;s<e&&s>0&&(this.scrolledHexLines=!0)}}}})},l=c,u=n(1001),d=n(43453),f=n.n(d),p=n(82102),v=n(99846),h=n(90624),m=n(62877),g=(0,u.Z)(l,i,r,!1,null,"1572432c",null),b=g.exports;f()(g,{VCol:p.Z,VContainer:v.Z,VProgressCircular:h.Z,VRow:m.Z})},27882:function(t,e,n){t.exports=n.p+"img/vkMini.0818e256.svg"},65280:function(t,e,n){t.exports=n.p+"img/aires.0aa3393a.png"},91365:function(t,e,n){t.exports=n.p+"img/ftml.4916d36c.png"},43654:function(t,e,n){t.exports=n.p+"img/infolab.a00dbe65.png"},90375:function(t,e,n){t.exports=n.p+"img/pm.9d3456b7.png"},62032:function(t,e,n){n.d(e,{Z:function(){return r}});n(82526),n(41817),n(41539),n(32165),n(78783),n(33948),n(21703);var i=n(48936);function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,i.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}}}]);
//# sourceMappingURL=812-legacy.0d827d4f.js.map