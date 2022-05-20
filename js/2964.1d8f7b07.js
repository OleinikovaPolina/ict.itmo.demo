"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2964,6634],{6428:function(t,e,s){s.d(e,{Z:function(){return m}});var n,i=s(6210),l=s(6952),o=s(3039),r=s(8085),a=s(4589),c=s(144),h=s(3325);function d(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));const p=(0,h.Z)(i.Z,l.Z,o.Z,r.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,a.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,a.XP)(t).find((e=>t[e]));return e&&n[e]||(0,a.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],n=this.getDefaultData();let i="material-icons";const l=t.indexOf("-"),o=l<=-1;o?s.push(t):(i=t.slice(0,l),d(i)&&(i="")),n.class[i]=!0,n.class[t]=!o;const r=this.getSize();return r&&(n.style={fontSize:r}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,s)},renderSvgIcon(t,e){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(s.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s={class:{"v-icon__component":!0}},n=this.getSize();n&&(s.style={fontSize:n,height:n,width:n}),this.applyColors(s);const i=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,s)])}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var m=c.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:s}){let n="";return e.domProps&&(n=e.domProps.textContent||e.domProps.innerHTML||n,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,n?[n]:s)}})},3385:function(t,e,s){s.d(e,{Z:function(){return h}});var n=s(6210),i=s(6952),l=s(3377),o=s(2529),r=s(3712),a=s(8085),c=s(3325),h=(0,c.Z)(n.Z,i.Z,l.Z,o.Z,r.Z,a.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},6210:function(t,e,s){var n=s(144);function i(t){return function(e,s){for(const n in s)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(const n in e)this.$set(this.$data[t],n,e[n])}}e["Z"]=n.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},6952:function(t,e,s){var n=s(144),i=s(1824),l=s(7093);e["Z"]=n.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,i.N6)("style must be an object",this),e):"string"===typeof e.class?((0,i.N6)("class must be an object",this),e):((0,l.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,i.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,i.N6)("class must be an object",this),e;if((0,l.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,n]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},n&&(e.class["text--"+n]=!0)}return e}}})},3377:function(t,e,s){var n=s(144);e["Z"]=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3712:function(t,e,s){var n=s(144);e["Z"]=n.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const s=e.split(" ");for(const e of s)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},3039:function(t,e,s){var n=s(144);e["Z"]=n.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},2964:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-sheet",{staticClass:"person person-horizontal rounded-pill mx-auto d-flex",class:{"person-small":t.smallPerson},attrs:{"max-width":t.smallPerson?520:700}},[s("v-col",{staticClass:"pa-0 ",attrs:{cols:"6",md:"5"}},[s("v-img",{staticClass:"rounded-circle person-img-container",attrs:{src:t.person.img,width:"100%",height:"100%",position:"center",cover:""}})],1),s("v-col",{staticClass:"pa-4 pl-2 pl-md-4 d-flex flex-column justify-center",attrs:{cols:"6",md:"7"}},[s("div",{staticClass:"text-h6",class:t.smallPerson?"text-md-h5":"text-md-h4"},[t._v(" "+t._s(t.person.name)+" ")]),s("div",{staticClass:"py-2"},[t._v(" "+t._s(t.person.position)+" ")]),s("div",{staticClass:"d-flex align-center person-link"},[s("v-icon",{staticClass:"mr-1 mr-md-2",attrs:{color:"white",small:t.$vuetify.breakpoint.smAndDown}},[t._v(" mdi-email-outline ")]),s("a",{staticClass:"person-ellipses",attrs:{title:t.person.email,href:"mailto: "+t.person.email}},[t._v(" "+t._s(t.person.email)+" ")])],1),s("div",{staticClass:"d-flex align-center person-link pt-1 pr-1"},[s("v-icon",{staticClass:"mr-1 mr-md-2",attrs:{color:"white",small:t.$vuetify.breakpoint.smAndDown}},[t._v(" mdi-phone ")]),s("a",{staticClass:"person-ellipses",attrs:{title:t.person.tel,href:"tel: "+t.person.tel}},[t._v(" "+t._s(t.person.tel)+" ")])],1)])],1)},i=[],l={name:"BasePerson",props:{person:{type:Object,default:null},smallPerson:{type:Boolean,default:!1}}},o=l,r=s(1001),a=s(3453),c=s.n(a),h=s(2102),d=s(6428),u=s(7047),p=s(3385),m=(0,r.Z)(o,n,i,!1,null,"07c3685f",null),f=m.exports;c()(m,{VCol:h.Z,VIcon:d.Z,VImg:u.Z,VSheet:p.Z})}}]);
//# sourceMappingURL=2964.1d8f7b07.js.map