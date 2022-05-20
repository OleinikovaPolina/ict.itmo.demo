"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4738],{5424:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(3325),l=i(5827),a=i(172),o=i(6952),c=i(7352),n=i(8085),r=i(2936),h=i(6505),p=i(3039),u=i(1824),d=(0,s.Z)(o.Z,p.Z,h.Z,n.Z,(0,c.d)("chipGroup"),(0,r.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const l=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(l,s),e)}})},4738:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-chip",{staticClass:"rounded ict-chip",style:{border:"1px solid "+t.item.category.color+" !important"},attrs:{value:t.item.id,color:t.item.category.color}},[t._v(" "+t._s(t.item.name)+" ")])],1)},l=[],a={name:"BaseChipSelected",props:{item:{type:Object,default:null}}},o=a,c=i(1001),n=i(3453),r=i.n(n),h=i(5424),p=(0,c.Z)(o,s,l,!1,null,null,null),u=p.exports;r()(p,{VChip:h.Z})}}]);
//# sourceMappingURL=4738.7509dc97.js.map