"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9436,5583],{6428:function(t,e,a){a.d(e,{Z:function(){return p}});var s,i=a(6210),n=a(6952),l=a(3039),r=a(8085),o=a(4589),d=a(144),c=a(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function m(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const u=(0,c.Z)(i.Z,n.Z,l.Z,r.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,o.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,o.XP)(t).find((e=>t[e]));return e&&s[e]||(0,o.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const a=[],s=this.getDefaultData();let i="material-icons";const n=t.indexOf("-"),l=n<=-1;l?a.push(t):(i=t.slice(0,n),h(i)&&(i="")),s.class[i]=!0,s.class[t]=!l;const r=this.getSize();return r&&(s.style={fontSize:r}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,a)},renderSvgIcon(t,e){const a={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(a.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const a={class:{"v-icon__component":!0}},s=this.getSize();s&&(a.style={fontSize:s,height:s,width:s}),this.applyColors(a);const i=t.component;return a.props=t.props,a.nativeOn=a.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,a)])}},render(t){const e=this.getIcon();return"string"===typeof e?m(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=d.Z.extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(t,{data:e,children:a}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(u,e,s?[s]:a)}})},6210:function(t,e,a){var s=a(144);function i(t){return function(e,a){for(const s in a)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},3039:function(t,e,a){var s=a(144);e["Z"]=s.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9436:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-space-between align-center pb-1 pb-md-2"},[a("div",{staticClass:"text-h6 text-sm-h4 text-xl-h3",staticStyle:{"line-height":"normal"}},[t._v(" "+t._s(t.data.title)+" ")]),a("div",{staticClass:"d-flex"},[t.data.datePublish?a("div",{staticClass:"d-none d-md-block"},[t._v(" "+t._s(t.$moment(t.data.datePublish).format("DD.MM.YYYY")+", "+t.data.timePublish)+" ")]):t._e(),t.data.datePublished?a("div",{staticClass:"d-none d-md-block"},[t._v(" "+t._s(t.$moment(t.data.datePublished).format("DD.MM.YYYY, HH:mm"))+" ")]):t._e(),t.data.views?a("div",{staticClass:"pl-2 pl-md-6 d-flex align-center"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"#00A1FF"}},[t._v(" mdi-eye ")]),t._v(" "+t._s(t.data.views)+" ")],1):t._e()])]),t.data.datePublish?a("div",{staticClass:"d-md-none"},[t._v(" "+t._s(t.$moment(t.data.datePublish).format("DD.MM.YYYY")+", "+t.data.timePublish)+" ")]):t._e(),t.data.datePublished?a("div",{staticClass:"d-md-none"},[t._v(" "+t._s(t.$moment(t.data.datePublished).format("DD.MM.YYYY, HH:mm"))+" ")]):t._e(),t.data.tags?a("div",{staticClass:"d-flex flex-wrap pb-2"},t._l(t.data.tags,(function(t,e){return a("BaseChip",{key:e,staticClass:"mt-2",attrs:{item:t}})})),1):t._e(),t.data.place?a("div",[a("b",[t._v("Место проведения: ")]),t._v(t._s(t.data.place)+" ")]):t._e(),(t.data.dateStart||t.data.date)&&t.isDate?a("div",[a("b",[t._v("Дата проведения: ")]),t.data.timeStart?a("span",[t._v(t._s(t.data.timeStart)+" ")]):t._e(),"00"!==t.$moment(t.data.dateStart||t.data.date).format("HH")?a("span",[t._v(" "+t._s(t.$moment(t.data.dateStart||t.data.date).format("HH:mm"))+" ")]):t._e(),a("span",[t._v(" "+t._s(t.$moment(t.data.dateStart||t.data.date).format("D MMMM YYYY года"))+" ")]),t.data.dateEnd&&t.$moment(t.data.dateStart).format("D MMMM YYYY года")!==t.$moment(t.data.dateEnd).format("D MMMM YYYY года")?a("span",[t._v(" - "+t._s(t.$moment(t.data.dateEnd).format("D MMMM YYYY года"))+" ")]):t._e()]):t._e(),t._l(t.data.blocks,(function(t,e){return a("div",{key:e,staticClass:"pt-6"},[a("BaseNewsBlocks",{attrs:{block:t,index:e}})],1)}))],2)},i=[],n={name:"BaseNews",components:{BaseNewsBlocks:()=>a.e(3853).then(a.bind(a,3853)),BaseChip:()=>a.e(4494).then(a.bind(a,4494))},props:{data:{type:Object,default:null},isDate:{type:Boolean,default:!0}}},l=n,r=a(1001),o=a(3453),d=a.n(o),c=a(6428),h=(0,r.Z)(l,s,i,!1,null,null,null),m=h.exports;d()(h,{VIcon:c.Z})}}]);
//# sourceMappingURL=9436.3b6d2eda.js.map