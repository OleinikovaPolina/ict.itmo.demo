"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5898],{5898:function(t,e,i){i.r(e),i.d(e,{default:function(){return s}});var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ict-line",style:{border:"1px solid "+t.color,backgroundColor:t.color,left:"left"===t.position?0:"auto",right:"right"===t.position?0:"auto",marginTop:t.top},attrs:{id:"ict-line-"+t.id}})},o=[],n={name:"LineComponent",props:{id:{type:String,default:""},color:{type:String,default:""},position:{type:String,default:""},width:{type:String,default:""},top:{type:String,default:"0"},leftAfter:{type:String,default:""}},data:()=>({scrolled:!1}),watch:{scrolled(t){t&&document.querySelector("#ict-line-"+this.id).animate({width:this.width,left:this.leftAfter},{duration:1e3,fill:"forwards"})}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(!this.scrolled){let t=document.documentElement.clientHeight,{bottom:e}=document.querySelector("#ict-line-"+this.id).getBoundingClientRect();this.scrolled=e<t&&e>0}}}},r=n,d=i(1001),c=(0,d.Z)(r,l,o,!1,null,"52059f47",null),s=c.exports}}]);
//# sourceMappingURL=5898.e27188c9.js.map