"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2624,5817],{99762:function(e,t,i){i(68582);var a=i(4589);t["Z"]=(0,a.Ji)("spacer","div","v-spacer")},48404:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{value:e.dialog,width:e.size.w+100}},[i("v-card",{staticClass:"py-6"},[i("v-card-title",[i("div",{staticClass:"text-h5 text-center mx-auto pb-3"},[e._v(" "+e._s(e.title)+" ")])]),e.dialog?i("v-card-text",[i("vue-croppie",{ref:"croppieRef",class:e.enableResize.w?"":"enable-resize-x-false",attrs:{"enable-orientation":!0,"enable-resize":e.enableResize.h,boundary:{width:e.size.w,height:e.size.h},viewport:{width:e.size.w,height:e.size.h,type:"square"}}})],1):e._e(),i("v-card-actions",[i("v-spacer"),i("BaseButton",{attrs:{text:"Обрезать","click-btn":!0},on:{clickBtnCallback:e.crop}})],1)],1)],1)],1)},s=[],n=(i(41539),i(78783),i(33948),{name:"DeleteCroppie",components:{BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},props:{title:{type:String,default:""},dataImg:{type:String,default:""},dialog:{type:Boolean,default:!1},size:{type:Object,default:null},enableResize:{type:Object,default:null}},emits:["changeDialog","changeCroppie"],watch:{dialog:function(e){e&&setTimeout(this.bind,300)}},methods:{bind:function(){this.$refs.croppieRef.bind({url:this.dataImg})},crop:function(){var e=this,t={type:"base64"};this.enableResize.x&&this.enableResize.y&&(t.size={width:this.size.w,height:this.size.w}),this.$refs.croppieRef.result(t,(function(t){e.$emit("changeCroppie",t)})),this.$emit("changeDialog",!1)}}}),l=n,r=i(1001),c=i(43453),o=i.n(c),p=i(53237),u=i(37118),h=i(67336),d=i(99762),f=(0,r.Z)(l,a,s,!1,null,null,null),b=f.exports;o()(f,{VCard:p.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VDialog:h.Z,VSpacer:d.Z})}}]);
//# sourceMappingURL=2624-legacy.26a4edee.js.map