"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8858],{37268:function(e,t,n){var i=n(82109),s=n(14230),a=n(43429);i({target:"String",proto:!0,forced:a("small")},{small:function(){return s(this,"small","","")}})},96428:function(e,t,n){n.d(t,{Z:function(){return p}});var i,s=n(4367),a=(n(37268),n(41539),n(26699),n(32023),n(74916),n(77601),n(9653),n(73210),n(69826),n(47042),n(66210)),o=n(46952),r=n(19131),l=n(48085),h=n(4589),c=n(20144),u=n(73325);function m(e){return["fas","far","fal","fab","fad","fak"].some((function(t){return e.includes(t)}))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(i||(i={}));var f=(0,u.Z)(a.Z,o.Z,r.Z,l.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,h.RB)(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,h.XP)(e).find((function(t){return e[t]}));return t&&i[t]||(0,h.kb)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:(0,s.Z)({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var e=this.getSize(),t=(0,s.Z)((0,s.Z)({},this.getDefaultData()),{},{style:e?{fontSize:e,height:e,width:e}:void 0});return this.applyColors(t),t},applyColors:function(e){e.class=(0,s.Z)((0,s.Z)({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var n=[],i=this.getDefaultData(),s="material-icons",a=e.indexOf("-"),o=a<=-1;o?n.push(e):(s=e.slice(0,a),m(s)&&(s="")),i.class[s]=!0,i.class[e]=!o;var r=this.getSize();return r&&(i.style={fontSize:r}),this.applyColors(i),t(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(e,t){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var s=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(s,n)])}},render:function(e){var t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}}),p=c.Z.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(e,t){var n=t.data,i=t.children,s="";return n.domProps&&(s=n.domProps.textContent||n.domProps.innerHTML||s,delete n.domProps.textContent,delete n.domProps.innerHTML),e(f,n,s?[s]:i)}})},19131:function(e,t,n){n(37268);var i=n(20144);t["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},17953:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"switch",class:e.themeBoolean?"dark":"",attrs:{for:"switch"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.themeBoolean,expression:"themeBoolean"}],attrs:{id:"switch",type:"checkbox"},domProps:{checked:Array.isArray(e.themeBoolean)?e._i(e.themeBoolean,null)>-1:e.themeBoolean},on:{change:function(t){var n=e.themeBoolean,i=t.target,s=!!i.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);i.checked?o<0&&(e.themeBoolean=n.concat([a])):o>-1&&(e.themeBoolean=n.slice(0,o).concat(n.slice(o+1)))}else e.themeBoolean=s}}}),n("span",{staticClass:"slider"},[n("span",{staticClass:"d-flex justify-center align-center"},[n("v-icon",{attrs:{dark:!e.themeBoolean,size:"20"}},[e._v(" mdi-"+e._s(e.themeBoolean?"moon-waning-crescent":"white-balance-sunny")+" ")])],1)])])},s=[],a=n(20629),o={name:"SwitchComponent",data:function(){return{themeBoolean:!1}},computed:(0,a.rn)("app",["theme"]),watch:{themeBoolean:function(e){this.changeTheme(e?"dark":"light")},theme:function(e){"dark"===e!==this.themeBoolean&&(this.themeBoolean="dark"===e)}},mounted:function(){this.themeBoolean="dark"===this.theme},methods:(0,a.nv)("app",["changeTheme"])},r=o,l=n(1001),h=n(43453),c=n.n(h),u=n(96428),m=(0,l.Z)(r,i,s,!1,null,"92f83af4",null),d=m.exports;c()(m,{VIcon:u.Z})}}]);
//# sourceMappingURL=8858-legacy.99992cc2.js.map