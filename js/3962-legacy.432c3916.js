"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3962,7786],{17786:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-arrow"},[0===t.block.type?i("div",{staticClass:"ql-editor pa-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.block.content.text)}}):t._e(),1===t.block.type?i("v-row",t._l(t.block.content.blocks,(function(t,e){return i("v-col",{key:e,attrs:{cols:"12",md:"6"}},[i("BaseNewsBlocks",{attrs:{block:t}})],1)})),1):t._e(),2===t.block.type?i("div",{staticStyle:{position:"relative"}},[i("v-img",{attrs:{width:"100%",src:t.block.content.imgName.croppie}}),i("div",{staticClass:"text-body-1 pt-2",staticStyle:{opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")]),t.edit?i("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(e){return t.$emit("beforeCropInsert")}}},[i("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1):t._e()],1):t._e(),3===t.block.type?i("div",[i("CarouselComponent",{attrs:{slider:t.block.content.imagesName,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"pa-2"},[i("img",{class:"carousel-img-"+t.block.id,staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item.croppie},on:{load:function(e){return t.getHeight()}}})])])]}},{key:"subtitle",fn:function(){return[i("div",{staticClass:"text-body-1 pl-2",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")])]},proxy:!0},t.edit?{key:"index",fn:function(e){return[i("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(o){return t.$emit("beforeCropMultipleInsertOne",t.block,e.index)}}},[i("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}:null],null,!0)})],1):t._e(),4===t.block.type?i("div",[i("div",{staticClass:"d-flex align-start"},[i("div",[i("v-img",{attrs:{width:"50",height:"50",src:o(33336)}})],1),i("div",{staticClass:"pl-4"},[t._v(" "+t._s(t.block.content.text)+" ")])]),i("div",{staticClass:"text-end font-weight-bold",staticStyle:{color:"#2DC0C5"}},[t._v(" "+t._s(t.block.content.author)+" ")])]):t._e(),5===t.block.type?i("div",[i("div",{staticClass:"text-h6 text-sm-h5 default-color"},[t._v(" "+t._s(t.block.content.text)+" ")])]):t._e()],1)},c=[],l=(o(41539),o(78783),o(33948),o(54747),{name:"BaseNewsBlocks",components:{CarouselComponent:function(){return Promise.all([o.e(4948),o.e(7315)]).then(o.bind(o,64948))}},props:{block:{type:Object,default:null},edit:{type:Boolean,default:!1}},emits:["beforeCropInsert","beforeCropMultipleInsertOne"],methods:{getHeight:function(){if(document.querySelectorAll(".carousel-img-"+this.block.id).length){var t=document.querySelectorAll(".carousel-img-"+this.block.id)[0].height;document.querySelectorAll(".carousel-img-"+this.block.id).forEach((function(e){return e.height=t}))}}}}),n=l,s=o(1001),r=o(43453),a=o.n(r),u=o(680),d=o(82102),b=o(96428),p=o(97047),m=o(62877),k=(0,s.Z)(n,i,c,!1,null,null,null),v=k.exports;a()(k,{VBtn:u.Z,VCol:d.Z,VIcon:b.Z,VImg:p.Z,VRow:m.Z})},33336:function(t,e,o){t.exports=o.p+"img/bxs_quote-alt-left.c5a4e697.svg"}}]);
//# sourceMappingURL=3962-legacy.432c3916.js.map