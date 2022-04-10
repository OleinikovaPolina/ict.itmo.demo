"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6050,5766],{6428:function(e,t,s){s.d(t,{Z:function(){return p}});var n,i=s(6210),a=s(6952),o=s(3039),r=s(8085),l=s(4589),h=s(144),c=s(3325);function d(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function m(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(n||(n={}));const u=(0,c.Z)(i.Z,a.Z,o.Z,r.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,l.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,l.XP)(e).find((t=>e[t]));return t&&n[t]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const s=[],n=this.getDefaultData();let i="material-icons";const a=e.indexOf("-"),o=a<=-1;o?s.push(e):(i=e.slice(0,a),d(i)&&(i="")),n.class[i]=!0,n.class[e]=!o;const r=this.getSize();return r&&(n.style={fontSize:r}),this.applyColors(n),t(this.hasClickListener?"button":this.tag,n,s)},renderSvgIcon(e,t){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(s.style={fontSize:n,height:n,width:n}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",s,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const s={class:{"v-icon__component":!0}},n=this.getSize();n&&(s.style={fontSize:n,height:n,width:n}),this.applyColors(s);const i=e.component;return s.props=e.props,s.nativeOn=s.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,s)])}},render(e){const t=this.getIcon();return"string"===typeof t?m(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var p=h.Z.extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(e,{data:t,children:s}){let n="";return t.domProps&&(n=t.domProps.textContent||t.domProps.innerHTML||n,delete t.domProps.textContent,delete t.domProps.innerHTML),e(u,t,n?[n]:s)}})},6210:function(e,t,s){var n=s(144);function i(e){return function(t,s){for(const n in s)Object.prototype.hasOwnProperty.call(t,n)||this.$delete(this.$data[e],n);for(const n in t)this.$set(this.$data[e],n,t[n])}}t["Z"]=n.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},3039:function(e,t,s){var n=s(144);t["Z"]=n.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},6050:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"switch",class:e.themeBoolean?"dark":""},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.themeBoolean,expression:"themeBoolean"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.themeBoolean)?e._i(e.themeBoolean,null)>-1:e.themeBoolean},on:{change:function(t){var s=e.themeBoolean,n=t.target,i=!!n.checked;if(Array.isArray(s)){var a=null,o=e._i(s,a);n.checked?o<0&&(e.themeBoolean=s.concat([a])):o>-1&&(e.themeBoolean=s.slice(0,o).concat(s.slice(o+1)))}else e.themeBoolean=i}}}),s("span",{staticClass:"slider"},[s("span",{staticClass:"d-flex justify-center align-center"},[s("v-icon",{attrs:{dark:!e.themeBoolean,size:"20"}},[e._v(" mdi-"+e._s(e.themeBoolean?"moon-waning-crescent":"white-balance-sunny")+" ")])],1)])])},i=[],a=s(629),o={name:"SwitchComponent",data:()=>({themeBoolean:!1}),computed:(0,a.rn)("app",["theme"]),watch:{themeBoolean:function(e){this.changeTheme(e?"dark":"light")},theme:function(e){"dark"===e!==this.themeBoolean&&(this.themeBoolean="dark"===e)}},mounted(){this.themeBoolean="dark"===this.theme},methods:(0,a.nv)("app",["changeTheme"])},r=o,l=s(1001),h=s(3453),c=s.n(h),d=s(6428),m=(0,l.Z)(r,n,i,!1,null,"a025af64",null),u=m.exports;c()(m,{VIcon:d.Z})}}]);
//# sourceMappingURL=6050.2716ea7f.js.map