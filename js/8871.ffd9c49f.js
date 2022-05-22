"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8871,6571],{6428:function(t,e,s){s.d(e,{Z:function(){return p}});var a,i=s(6210),n=s(6952),l=s(3039),r=s(8085),o=s(4589),c=s(144),d=s(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));const m=(0,d.Z)(i.Z,n.Z,l.Z,r.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,o.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,o.XP)(t).find((e=>t[e]));return e&&a[e]||(0,o.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],a=this.getDefaultData();let i="material-icons";const n=t.indexOf("-"),l=n<=-1;l?s.push(t):(i=t.slice(0,n),h(i)&&(i="")),a.class[i]=!0,a.class[t]=!l;const r=this.getSize();return r&&(a.style={fontSize:r}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,s)},renderSvgIcon(t,e){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(s.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s={class:{"v-icon__component":!0}},a=this.getSize();a&&(s.style={fontSize:a,height:a,width:a}),this.applyColors(s);const i=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,s)])}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=c.Z.extend({name:"v-icon",$_wrapperFor:m,functional:!0,render(t,{data:e,children:s}){let a="";return e.domProps&&(a=e.domProps.textContent||e.domProps.innerHTML||a,delete e.domProps.textContent,delete e.domProps.innerHTML),t(m,e,a?[a]:s)}})},6210:function(t,e,s){var a=s(144);function i(t){return function(e,s){for(const a in s)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(const a in e)this.$set(this.$data[t],a,e[a])}}e["Z"]=a.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},6952:function(t,e,s){var a=s(144),i=s(1824),n=s(7093);e["Z"]=a.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,i.N6)("style must be an object",this),e):"string"===typeof e.class?((0,i.N6)("class must be an object",this),e):((0,n.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,i.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,i.N6)("class must be an object",this),e;if((0,n.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,a]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},a&&(e.class["text--"+a]=!0)}return e}}})},3039:function(t,e,s){var a=s(144);e["Z"]=a.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8871:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-space-between align-center pb-md-2"},[s("div",{staticClass:"text-h6 text-sm-h4 text-xl-h3",staticStyle:{"line-height":"normal"}},[t._v(" "+t._s(t.data.title)+" ")]),s("div",{staticClass:"d-flex"},[t.data.datePublish?s("div",[t._v(" "+t._s(t.$moment(t.data.datePublish).format("DD.MM.YYYY")+", "+t.data.timePublish)+" ")]):t._e(),s("div",{staticClass:"pl-6 d-flex align-center"},[s("v-icon",{staticClass:"mr-1",attrs:{color:"#00A1FF"}},[t._v(" mdi-eye ")]),t._v(" 0 ")],1)])]),t.data.tags?s("div",{staticClass:"d-flex flex-wrap pb-md-2"},t._l(t.data.tags,(function(t,e){return s("BaseChip",{key:e,staticClass:"mt-2",attrs:{item:t}})})),1):t._e(),t.data.place?s("div",[s("b",[t._v("Место проведения: ")]),t._v(t._s(t.data.place)+" ")]):t._e(),t.data.dateStart||t.data.date?s("div",[s("b",[t._v("Дата проведения: ")]),t.data.timeStart?s("span",[t._v(t._s(t.data.timeStart)+" ")]):t._e(),t.data.dateStart||t.data.date?s("span",[t._v(" "+t._s(t.$moment(t.data.dateStart||t.data.date).format("D MMMM YYYY года"))+" ")]):t._e()]):t._e(),t._l(t.data.blocks,(function(t,e){return s("div",{key:e,staticClass:"pt-6"},[s("BaseNewsBlocks",{attrs:{block:t}})],1)}))],2)},i=[],n={name:"BaseNews",components:{BaseNewsBlocks:()=>s.e(5695).then(s.bind(s,5695)),BaseChip:()=>s.e(4494).then(s.bind(s,4494))},props:{data:{type:Object,default:null}}},l=n,r=s(1001),o=s(3453),c=s.n(o),d=s(6428),h=(0,r.Z)(l,a,i,!1,null,null,null),u=h.exports;c()(h,{VIcon:d.Z})}}]);
//# sourceMappingURL=8871.ffd9c49f.js.map