(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2058],{95631:function(t,e,i){"use strict";var n=i(3070).f,s=i(70030),r=i(12248),o=i(49974),a=i(25787),l=i(20408),c=i(70654),u=i(96340),d=i(19781),h=i(62423).fastKey,f=i(29909),p=f.set,v=f.getterFor;t.exports={getConstructor:function(t,e,i,c){var u=t((function(t,n){a(t,f),p(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&l(n,t[c],{that:t,AS_ENTRIES:i})})),f=u.prototype,g=v(e),m=function(t,e,i){var n,s,r=g(t),o=b(t,e);return o?o.value=i:(r.last=o={index:s=h(e,!0),key:e,value:i,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=o),n&&(n.next=o),d?r.size++:t.size++,"F"!==s&&(r.index[s]=o)),t},b=function(t,e){var i,n=g(t),s=h(e);if("F"!==s)return n.index[s];for(i=n.first;i;i=i.next)if(i.key==e)return i};return r(f,{clear:function(){var t=this,e=g(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=g(e),n=b(e,t);if(n){var s=n.next,r=n.previous;delete i.index[n.index],n.removed=!0,r&&(r.next=s),s&&(s.previous=r),i.first==n&&(i.first=s),i.last==n&&(i.last=r),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=g(this),n=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(f,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&n(f,"size",{get:function(){return g(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",s=v(e),r=v(n);c(t,e,(function(t,e){p(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},77710:function(t,e,i){"use strict";var n=i(82109),s=i(17854),r=i(1702),o=i(54705),a=i(31320),l=i(62423),c=i(20408),u=i(25787),d=i(60614),h=i(70111),f=i(47293),p=i(17072),v=i(58003),g=i(79587);t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),x=m?"set":"add",C=s[t],k=C&&C.prototype,w=C,y={},Z=function(t){var e=r(k[t]);a(k,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return b&&!h(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!h(t))&&e(this,0===t?0:t)}:function(t,i){return e(this,0===t?0:t,i),this})},B=o(t,!d(C)||!(b||k.forEach&&!f((function(){(new C).entries().next()}))));if(B)w=i.getConstructor(e,t,m,x),l.enable();else if(o(t,!0)){var S=new w,D=S[x](b?{}:-0,1)!=S,$=f((function(){S.has(1)})),A=p((function(t){new C(t)})),O=!b&&f((function(){var t=new C,e=5;while(e--)t[x](e,e);return!t.has(-0)}));A||(w=e((function(t,e){u(t,k);var i=g(new C,t,w);return void 0!=e&&c(e,i[x],{that:i,AS_ENTRIES:m}),i})),w.prototype=k,k.constructor=w),($||O)&&(Z("delete"),Z("has"),m&&Z("get")),(O||D)&&Z(x),b&&k.clear&&delete k.clear}return y[t]=w,n({global:!0,forced:w!=C},y),v(w,t),b||i.setStrong(w,t,m),w}},40561:function(t,e,i){"use strict";var n=i(82109),s=i(17854),r=i(51400),o=i(19303),a=i(26244),l=i(47908),c=i(65417),u=i(86135),d=i(81194),h=d("splice"),f=s.TypeError,p=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var i,n,s,d,h,b,x=l(this),C=a(x),k=r(t,C),w=arguments.length;if(0===w?i=n=0:1===w?(i=0,n=C-k):(i=w-2,n=v(p(o(e),0),C-k)),C+i-n>g)throw f(m);for(s=c(x,n),d=0;d<n;d++)h=k+d,h in x&&u(s,d,x[h]);if(s.length=n,i<n){for(d=k;d<C-n;d++)h=d+n,b=d+i,h in x?x[b]=x[h]:delete x[b];for(d=C;d>C-n+i;d--)delete x[d-1]}else if(i>n)for(d=C-n;d>k;d--)h=d+n-1,b=d+i-1,h in x?x[b]=x[h]:delete x[b];for(d=0;d<i;d++)x[d+k]=arguments[d+2];return x.length=C-n+i,s}})},38862:function(t,e,i){var n=i(82109),s=i(17854),r=i(35005),o=i(22104),a=i(1702),l=i(47293),c=s.Array,u=r("JSON","stringify"),d=a(/./.exec),h=a("".charAt),f=a("".charCodeAt),p=a("".replace),v=a(1..toString),g=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,x=function(t,e,i){var n=h(i,e-1),s=h(i,e+1);return d(m,t)&&!d(b,s)||d(b,t)&&!d(m,n)?"\\u"+v(f(t,0),16):t},C=l((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:C},{stringify:function(t,e,i){for(var n=0,s=arguments.length,r=c(s);n<s;n++)r[n]=arguments[n];var a=o(u,null,r);return"string"==typeof a?p(a,g,x):a}})},51532:function(t,e,i){"use strict";var n=i(77710),s=i(95631);n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},29254:function(t,e,i){"use strict";var n=i(82109),s=i(14230),r=i(43429);n({target:"String",proto:!0,forced:r("link")},{link:function(t){return s(this,"a","href",t)}})},63150:function(t,e,i){"use strict";i.d(e,{Z:function(){return b}});var n=i(9726),s=i(75200),r=i(4367),o=(i(29253),i(9653),i(41539),i(26699),i(38862),i(55648)),a=i(90624),l=a.Z,c=i(17352),u=i(2936),d=i(93377),h=i(93536),f=i(6505),p=i(19131),v=i(73325),g=i(71824),m=(0,v.Z)(o.Z,f.Z,h.Z,p.Z,(0,c.d)("btnToggle"),(0,u.d)("inputValue")),b=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({"v-btn":!0},f.Z.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return d.Z.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return(0,r.Z)({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=(0,s.Z)(e,2),n=i[0],r=i[1];t.$attrs.hasOwnProperty(n)&&(0,g.fK)(n,r,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,r=i.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes((0,n.Z)(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:o(this.color,r),e)}})},82102:function(t,e,i){"use strict";var n=i(23796),s=i(4367),r=(i(41539),i(9653),i(47941),i(74916),i(15306),i(51532),i(78783),i(33948),i(26699),i(54747),i(23157),i(17273),i(20144)),o=i(76290),a=i(4589),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["Z"]=r.Z.extend({name:"v-col",functional:!0,props:(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,s=e.data,r=e.children,a=(e.parent,"");for(var l in i)a+=String(i[l]);var c=p.get(a);return c||function(){var t,e;for(e in c=[],h)h[e].forEach((function(t){var n=i[t],s=f(e,t,n);s&&c.push(s)}));var s=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!s||!i.cols},(0,n.Z)(t,"col-".concat(i.cols),i.cols),(0,n.Z)(t,"offset-".concat(i.offset),i.offset),(0,n.Z)(t,"order-".concat(i.order),i.order),(0,n.Z)(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(a,c)}(),t(i.tag,(0,o.ZP)(s,{class:c}),r)}})},83385:function(t,e,i){"use strict";i.d(e,{Z:function(){return d}});var n=i(4367),s=i(66210),r=i(46952),o=i(93377),a=i(42529),l=i(93712),c=i(48085),u=i(73325),d=(0,u.Z)(s.Z,r.Z,o.Z,a.Z,l.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,n.Z)((0,n.Z)((0,n.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},55648:function(t,e,i){"use strict";var n=i(83385);e["Z"]=n.Z},93377:function(t,e,i){"use strict";var n=i(23796),s=(i(9653),i(20144));e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,n.Z)({},"elevation-".concat(this.elevation),!0)}}})},17352:function(t,e,i){"use strict";i.d(e,{d:function(){return r}});var n=i(23796),s=i(96257);function r(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(0,n.Z)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}r("itemGroup")},42529:function(t,e,i){"use strict";i(9653);var n=i(4589),s=i(20144);e["Z"]=s.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,n.kb)(this.height),i=(0,n.kb)(this.minHeight),s=(0,n.kb)(this.minWidth),r=(0,n.kb)(this.maxHeight),o=(0,n.kb)(this.maxWidth),a=(0,n.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),s&&(t.minWidth=s),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},93712:function(t,e,i){"use strict";var n=i(23796),s=i(62032),r=(i(74916),i(23123),i(69600),i(20144));e["Z"]=r.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,r=e.split(" "),o=(0,s.Z)(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;t.push("rounded-".concat(a))}}catch(l){o.e(l)}finally{o.f()}}else e&&t.push("rounded");return t.length>0?(0,n.Z)({},t.join(" "),!0):{}}}})},6505:function(t,e,i){"use strict";var n=i(23796),s=i(4367),r=(i(29254),i(73210),i(92222),i(74916),i(15306),i(20144)),o=i(46286),a=i(4589);e["Z"]=r.Z.extend({name:"routable",directives:{Ripple:o.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,i=this.exact,r=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},(0,n.Z)(t,this.to?"nativeOn":"on",(0,s.Z)((0,s.Z)({},this.$listeners),"click"in this?{click:this.click}:void 0)),(0,n.Z)(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(r.props,{to:this.to,exact:i,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(r.attrs.href=this.href);return this.target&&(r.attrs.target=this.target),{tag:e,data:r}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),i="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,n="_vnode.data.class."+(this.exact?i:e);this.$nextTick((function(){!(0,a.vO)(t.$refs.link,n)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},2936:function(t,e,i){"use strict";i.d(e,{d:function(){return r}});var n=i(23796),s=i(20144);function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return s.Z.extend({name:"toggleable",model:{prop:e,event:i},props:(0,n.Z)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},(0,n.Z)(t,e,(function(t){this.isActive=!!t})),(0,n.Z)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var o=r();e["Z"]=o},22436:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return D}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoad&&Object.keys(t.article).length?n("v-container",[n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Статьи ")]),t.isPreview?n("div",[n("BaseStudentsCompetition",{attrs:{block:{winnersHex:t.form.winnersHex,subtitle:t.form.subtitle,title:t.form.title,description:t.form.description}}}),n("BaseNews",{attrs:{data:t.previewData}}),n("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):n("div",[n("div",{staticClass:"input-bordered mb-6"},[n("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("div",{staticClass:"input-bordered pt-3"},[n("div",{staticClass:"input-bordered-label app-background"},[t._v(" Описание статьи "),n("span",{staticClass:"error--text"},[t._v("*")])]),n("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),n("div",{staticClass:"text-end mb-6",style:{color:t.cutTegs(t.form.description).length>165?"red":"#0071B2"}},[t._v(" "+t._s(t.cutTegs(t.form.description).length)+"/165 ")]),n("div",{staticClass:"input-bordered mb-6 pt-3"},[n("div",{staticClass:"input-bordered-label app-background"},[t._v(" Победители "),n("span",{staticClass:"error--text"},[t._v("*")])]),n("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}}),n("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[n("v-col",{staticClass:"input-file-container",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[n("input",{attrs:{id:"winners",type:"file",accept:"image/*",multiple:""},on:{change:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.target.files)))}}}),n("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"winners"},on:{drop:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.dataTransfer.files)))}}},[n("span",[n("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(42012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),t.form.winners.length?n("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6}},[n("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.form.winners},on:{change:function(e){t.changeList(e)}}},t._l(t.form.winnersHex,(function(e,i){return n("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[n("div",[t._v(t._s(i+1)+".")]),n("div",{staticClass:"input-slider-img-block px-2 ml-2 d-flex align-center"},[n("v-text-field",{staticClass:"ma-0 input-border-0",attrs:{dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"hex.text"}}),n("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(i)}}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)],1),n("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),n("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),n("div",{staticClass:"d-flex pt-6"},[n("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),n("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),n("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),n("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.subtitle,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),n("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):n("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[n("v-progress-circular",{attrs:{indeterminate:""}})],1)},s=[],r=i(16198),o=i(4367),a=(i(35666),i(41539),i(78783),i(33948),i(47941),i(82526),i(41817),i(38862),i(74916),i(15306),i(54747),i(69600),i(47042),i(23123),i(68309),i(40561),i(20629)),l=i(2739),c=i(9980),u=i.n(c),d=i(22100),h=i(47566),f=i(19522),p={name:"CompetitionComponent",components:{VueEditor:l.bR,draggable:u(),DialogCroppieMultipleComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(5937)]).then(i.bind(i,86229))},DialogCroppieComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(2418)]).then(i.bind(i,44529))},BaseStudentsCompetition:function(){return i.e(3374).then(i.bind(i,73374))},DialogPreviewComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(4253)]).then(i.bind(i,38016))},BaseNews:function(){return i.e(5583).then(i.bind(i,79436))},DraggableInputs:function(){return Promise.all([i.e(2681),i.e(6999),i.e(918),i.e(8792)]).then(i.bind(i,70918))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[d.Z,h.Z,f.Z],data:function(){return{customToolbar:[{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",description:"",subtitle:"",winners:[],winnersHex:[],blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}},computed:(0,o.Z)((0,o.Z)({},(0,a.rn)("news",["article"])),(0,a.rn)("app",["theme"])),mounted:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getArticle(t.$route.params.id);case 2:Object.keys(t.article).length&&t.dataToForm(),t.isLoad=!0;case 4:case"end":return e.stop()}}),e)})))()},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,a.nv)("news",["getArticle"])),(0,a.nv)("admin",["addAttachment","updateArticles"])),{},{dataToForm:function(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.dataToFormBlocks(this.article.blocks),this.count=this.form.blocks.length+1;var t=JSON.parse(this.article.description);this.form.subtitle=t.subtitle,this.form.description=t.description,this.form.winnersHex=t.winnersHex,this.form.winners=[];for(var e=0;e<t.winnersHex.length;e++)this.form.winners.push(null)},publish:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=Object.assign({},t.form),i.page=t.article.page,n=regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.winners[n]){e.next=3;break}return e.next=3,t.addAttachment(i.winners[n]).then((function(t){i.winnersHex[n].img=t.data.url})).catch((function(){return{}}));case 3:case"end":return e.stop()}}),e)})),s=0;case 4:if(!(s<i.winners.length)){e.next=9;break}return e.delegateYield(n(s),"t0",6);case 6:s++,e.next=4;break;case 9:return i.description=JSON.stringify({description:i.description,subtitle:i.subtitle,winnersHex:i.winnersHex}),e.next=12,t.publishBlocks(i.blocks);case 12:return i.blocks=e.sent,e.next=15,t.updateArticles(i);case 15:t.$router.push("/favorites").then();case 16:case"end":return e.stop()}}),e)})))()},cutTegs:function(t){var e=/( |<([^>]+)>)/gi;return t.replace(e,"")},preview:function(){this.previewData=this.form,this.isPreview=!0},changeContentImagesBlock:function(t){var e=this;t.forEach((function(t){if(t){var i=new FileReader;i.onload=function(i){e.form.winnersHex.push({img:i.target.result,text:t.name.split(".").slice(0,-1).join(".")})},i.readAsDataURL(t)}})),this.form.winners=t},deleteContentImgBlock:function(t){this.form.winners.splice(t,1),this.form.winnersHex.splice(t,1)},changeList:function(t){var e=this.form.winnersHex.splice(t.moved.oldIndex,1)[0];this.form.winnersHex.splice(t.moved.newIndex,0,e)}})},v=p,g=i(1001),m=i(43453),b=i.n(m),x=i(63150),C=i(82102),k=i(99846),w=i(96428),y=i(97047),Z=i(90624),B=i(40314),S=(0,g.Z)(v,n,s,!1,null,null,null),D=S.exports;b()(S,{VBtn:x.Z,VCol:C.Z,VContainer:k.Z,VIcon:w.Z,VImg:y.Z,VProgressCircular:Z.Z,VTextField:B.Z})}}]);
//# sourceMappingURL=2058-legacy.212aab4b.js.map