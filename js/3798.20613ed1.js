"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3798],{3798:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.name&&t.description&&t.sliderImagesNames?s("v-row",{staticClass:"d-flex align-center justify-center pt-xl-8"},[s("v-col",{staticClass:"text-center d-md-none"},[s("div",{staticClass:"text-h5 text-sm-h4"},[t._v(" "+t._s(t.name)+" ")])]),s("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0 ",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[s("div",[s("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" "+t._s(t.name)+" ")]),s("div",{staticClass:"text-subtitle-1 pb-6",domProps:{innerHTML:t._s(t.description)}})]),s("div",{staticClass:"mx-auto mx-md-0"},[s("BaseButton",{attrs:{link:"/"}})],1)]),s("v-col",{attrs:{cols:"12",md:"6",lg:"7"}},[s("CarouselComponent",{attrs:{slider:t.sliderImagesNames,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[s("v-col",{attrs:{cols:"12"}},[s("div",[s("img",{staticClass:"carousel-img",staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item},on:{load:function(e){return t.getHeight()}}})])])]}},{key:"subtitle",fn:function(){return[s("div",{staticClass:"text-body-1",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.text)+" ")])]},proxy:!0}],null,!1,1722795681)})],1)],1):t._e()},n=[],a={name:"BaseStudentsHackathon",components:{CarouselComponent:()=>Promise.all([s.e(8722),s.e(1575)]).then(s.bind(s,8722)),BaseButton:()=>s.e(7625).then(s.bind(s,7625))},props:{name:{type:String,default:null},description:{type:String,default:null},text:{type:String,default:null},sliderImagesNames:{type:Array,default:null}},methods:{getHeight(){if(this.sliderImagesNames[0]){let t=new Image;t.onload=()=>{let e=t.height;document.querySelectorAll(".carousel-img").length&&(e=Math.min(e,document.querySelectorAll(".carousel-img")[0].height),document.querySelectorAll(".carousel-img").forEach((t=>t.height=e)))},t.src=this.sliderImagesNames[0]}}}},i=a,o=s(1001),r=s(3453),c=s.n(r),u=s(2102),d=s(2877),m=(0,o.Z)(i,l,n,!1,null,null,null),h=m.exports;c()(m,{VCol:u.Z,VRow:d.Z})}}]);
//# sourceMappingURL=3798.20613ed1.js.map