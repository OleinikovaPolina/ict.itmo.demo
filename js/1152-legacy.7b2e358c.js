"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1152,2108],{99762:function(t,e,i){i(68582);var n=i(4589);e["Z"]=(0,n.Ji)("spacer","div","v-spacer")},39383:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{value:t.dialog,width:"1100",persistent:""}},[i("v-card",{staticClass:"py-6"},[t.edit?i("v-btn",{staticClass:"btn-dialog-close mr-1 mt-1",attrs:{icon:"",large:""},on:{click:function(e){return t.$emit("changeDialog",!1)}}},[i("v-icon",{attrs:{large:"",color:"#0071B2"}},[t._v(" mdi-close ")])],1):t._e(),i("v-card-title",[i("div",{staticClass:"text-h5 text-center mx-auto pb-3"},[t._v(" Слайдер ")])]),t.dialog?i("v-card-text",[i("vue-croppie",{ref:"croppieRef",attrs:{boundary:{width:950,height:400},viewport:{width:800,height:350,type:"square"}}})],1):t._e(),i("v-card-actions",[i("v-spacer"),i("BaseButton",{attrs:{text:"Обрезать","click-btn":!0},on:{clickBtnCallback:function(e){return t.crop(t.index)}}})],1)],1)],1)],1)},a=[],r=(i(41539),i(78783),i(33948),{name:"DialogCroppieMultipleComponent",components:{BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},props:{dataImg:{type:Array,default:null},dialog:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},emits:["changeDialog","changeCroppie"],data:function(){return{res:[],index:0}},watch:{dialog:function(t){var e=this;t&&setTimeout((function(){e.bind(0)}),500)}},methods:{bind:function(t){this.index=t,0===t&&(this.res=[]),this.$refs.croppieRef.bind({url:this.dataImg[t].original})},crop:function(t){var e=this,i={type:"base64"},n=[];this.$refs.croppieRef.result(i,(function(a){n.push(a),i.type="blob",e.$refs.croppieRef.result(i,(function(i){n.push(i),e.res.push(n),t===e.dataImg.length-1?(e.$emit("changeCroppie",e.res),e.$emit("changeDialog",!1)):e.bind(t+1)}))}))}}}),o=r,c=i(1001),s=i(43453),l=i.n(s),u=i(63150),p=i(53237),d=i(37118),h=i(67336),f=i(96428),g=i(99762),v=(0,c.Z)(o,n,a,!1,null,null,null),m=v.exports;l()(v,{VBtn:u.Z,VCard:p.Z,VCardActions:d.h7,VCardText:d.ZB,VCardTitle:d.EB,VDialog:h.Z,VIcon:f.Z,VSpacer:g.Z})}}]);
//# sourceMappingURL=1152-legacy.7b2e358c.js.map