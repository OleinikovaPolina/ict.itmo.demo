"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1373],{1373:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{ref:"person",staticClass:"person rounded-pill mx-auto",class:{"animation--active":e.scrolled},attrs:{"max-width":e.$vuetify.breakpoint.sm?250:280}},[n("div",{staticClass:"person-img-container rounded-circle"},[n("v-img",{staticClass:"rounded-circle",attrs:{width:"100%",height:"100%",src:e.person.img||s(5736)}})],1),n("div",{staticClass:"person-text px-2 px-md-5 px-lg-6 pb-12 pb-md-12 text-center"},[n("div",{staticClass:"text-h6 pb-1 pt-1 pt-md-3"},[e._v(" "+e._s(e.person.name)+" ")]),n("div",[e._v(e._s(e.person.position))]),n("div",{staticClass:"d-flex align-center justify-center person-link px-1 pb-md-2"},[n("v-icon",{staticClass:"mr-1 person-link-icon",attrs:{right:"",small:e.$vuetify.breakpoint.smAndDown}},[e._v(" mdi-email-outline ")]),n("a",{staticClass:"person-email subtitle-color",attrs:{title:e.person.email,href:"mailto: "+e.person.email}},[e._v(" "+e._s(e.person.email)+" ")])],1)]),n("div",{staticClass:"person-pill rounded-b-pill section-background"})])},i=[],l={name:"BasePersonVertical",props:{person:{type:Object,default:null}},data:()=>({scrolled:!1}),mounted(){this.handleScroll()},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(this.scrolled)window.removeEventListener("scroll",this.handleScroll);else{let e=document.documentElement.clientHeight,{bottom:t}=this.$refs.person.$el.getBoundingClientRect();this.scrolled=t<e&&t>0}}}},o=l,r=s(1001),a=s(3453),c=s.n(a),d=s(6428),p=s(7047),m=s(3385),u=(0,r.Z)(o,n,i,!1,null,"09852486",null),h=u.exports;c()(u,{VIcon:d.Z,VImg:p.Z,VSheet:m.Z})},5736:function(e,t,s){e.exports=s.p+"img/nobody.b7c47e10.png"}}]);
//# sourceMappingURL=1373.daef1b5b.js.map