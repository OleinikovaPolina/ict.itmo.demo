"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6404],{46404:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hex-container"},[t._l(t.hexArray,(function(e,l){return n("div",{key:l,staticClass:"hex-block",class:"hex-"+l},[n("div",{staticClass:"hex"}),n("div",{staticClass:"hex-content text-center d-flex flex-column align-center justify-center"},[n("v-img",{staticClass:"mx-auto hex-img",attrs:{width:"100%",contain:"",src:e.img}}),n("div",{staticClass:"hex-text subtitle-color"},[t._v(" "+t._s(e.text)+" ")])],1)])})),n("div",{staticClass:"hex-btn"},[n("base-button",{attrs:{link:t.link,"small-btn":!0}})],1)],2)},i=[],c=(n(41539),n(78783),n(33948),n(54747),{name:"BaseHexagonContainer",components:{BaseButton:function(){return n.e(7625).then(n.bind(n,37625))}},props:{hexArray:{type:Array,default:null},link:{type:String,default:"/"}},data:function(){return{scrolled:!1}},watch:{scrolled:function(t){t&&document.querySelectorAll(".hex-container").forEach((function(t){t.classList.add("activeAnim")}))}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.querySelector(".hex-container"),e=t.getBoundingClientRect(),n=e.bottom,l=document.documentElement.clientHeight;this.scrolled||(this.scrolled=n<l&&n>0)}}}),s=c,o=n(1001),r=n(43453),a=n.n(r),u=n(97047),d=(0,o.Z)(s,l,i,!1,null,"40e0495e",null),h=d.exports;a()(d,{VImg:u.Z})}}]);
//# sourceMappingURL=6404-legacy.4ddd8878.js.map