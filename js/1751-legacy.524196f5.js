"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1751,4192,7198],{61001:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{value:t.dialog,width:"85%"}},[n("v-card",{staticClass:"py-6"},[n("v-btn",{staticClass:"btn-dialog-close mr-1 mt-1",attrs:{icon:"",large:""},on:{click:function(e){return t.$emit("changeDialog",!1)}}},[n("v-icon",{attrs:{large:"",color:"#0071B2"}},[t._v(" mdi-close ")])],1),n("v-card-title",[n("div",{staticClass:"text-h5 text-center mx-auto pb-3"},[t._v(" "+t._s(3===t.dialogContent.type?"Просмотр слайдера":"Просмотр двойного блока")+" ")])]),t.dialog?n("v-card-text",[1===t.dialogContent.type?n("v-row",t._l(t.dialogContent.content.blocks,(function(e,o){return n("v-col",{key:o,attrs:{cols:"12",md:"6"}},[n("BaseNewsBlocks",{attrs:{block:e,edit:!0},on:{beforeCropMultipleInsertOne:function(e,n){t.$emit("beforeCropMultipleInsertOne",e,n)},beforeCropInsert:function(n){return t.$emit("beforeCropInsert",e)}}})],1)})),1):t._e(),3===t.dialogContent.type?n("div",{staticStyle:{position:"relative"}},[n("CarouselComponent",{attrs:{slider:t.dialogContent.content.imagesName.map((function(t){return t.croppie})),columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"pa-2"},[n("img",{staticClass:"carousel-img",staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item},on:{load:function(n){return t.getHeight(e.item)}}})])])]}},{key:"subtitle",fn:function(){return[n("div",{staticClass:"text-body-1 pl-2",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.dialogContent.content.text)+" ")])]},proxy:!0},{key:"index",fn:function(e){return[n("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(n){return t.$emit("beforeCropMultipleInsertOne",t.dialogContent,e.index)}}},[n("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}],null,!1,3201536923)})],1):t._e()],1):t._e()],1)],1)],1)},i=[],l=(n(41539),n(78783),n(33948),n(54747),{name:"DialogPreviewComponent",components:{CarouselComponent:function(){return Promise.all([n.e(8722),n.e(4090)]).then(n.bind(n,48722))},BaseNewsBlocks:function(){return n.e(5695).then(n.bind(n,85695))}},props:{dialog:{type:Boolean,default:!1},dialogContent:{type:Object,default:null}},emits:["changeDialog","beforeCropInsert","beforeCropMultipleInsertOne"],watch:{dialog:{handler:function(t){t&&this.dialogContent.content.imagesName&&this.dialogContent.content.imagesName[0].croppie&&this.getHeight(this.dialogContent.content.imagesName[0].croppie)},deep:!0}},methods:{getHeight:function(t){if(t){var e=new Image;e.onload=function(){var t=e.height;document.querySelectorAll(".carousel-img").length&&(t=Math.min(t,document.querySelectorAll(".carousel-img")[0].height),document.querySelectorAll(".carousel-img").forEach((function(e){return e.height=t})))},e.src=t}}}}),r=l,a=n(1001),c=n(43453),s=n.n(c),u=n(680),d=n(53237),g=n(37118),m=n(82102),p=n(67336),f=n(96428),C=n(62877),h=(0,a.Z)(r,o,i,!1,null,"331fa977",null),v=h.exports;s()(h,{VBtn:u.Z,VCard:d.Z,VCardText:g.ZB,VCardTitle:g.EB,VCol:m.Z,VDialog:p.Z,VIcon:f.Z,VRow:C.Z})}}]);
//# sourceMappingURL=1751-legacy.524196f5.js.map