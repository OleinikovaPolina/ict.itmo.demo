"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[235],{40235:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{ref:"person",staticClass:"person rounded-pill mx-auto",class:{"animation--active":e.scrolled},attrs:{"max-width":e.$vuetify.breakpoint.sm?250:280}},[n("div",{staticClass:"person-img-container rounded-circle"},[n("v-img",{attrs:{width:"100%",height:"100%",src:e.person.img}})],1),n("div",{staticClass:"person-text px-2 px-md-5 pb-12 pb-md-12 text-center"},[n("div",{staticClass:"text-h6 pb-1 pt-1 pt-md-3"},[e._v(" "+e._s(e.person.name)+" ")]),n("div",[e._v(e._s(e.person.position))]),n("div",{staticClass:"d-flex align-center justify-center person-link px-1 pb-md-2"},[n("v-icon",{staticClass:"mr-1 person-link-icon",attrs:{right:"",small:e.$vuetify.breakpoint.smAndDown}},[e._v(" mdi-email-outline ")]),n("a",{staticClass:"person-email subtitle-color",attrs:{title:e.person.email,href:"mailto: "+e.person.email}},[e._v(" "+e._s(e.person.email)+" ")])],1)]),n("div",{staticClass:"person-pill rounded-b-pill section-background"})])},i=[],l={name:"BasePersonVertical",props:{person:{type:Object,default:null}},data:function(){return{scrolled:!1}},mounted:function(){this.handleScroll()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(this.scrolled)window.removeEventListener("scroll",this.handleScroll);else{var e=document.documentElement.clientHeight,t=this.$refs.person.$el.getBoundingClientRect(),n=t.bottom;this.scrolled=n<e&&n>0}}}},o=l,r=n(1001),a=n(43453),c=n.n(a),d=n(96428),p=n(97047),m=n(83385),u=(0,r.Z)(o,s,i,!1,null,"0d41b8b2",null),h=u.exports;c()(u,{VIcon:d.Z,VImg:p.Z,VSheet:m.Z})}}]);
//# sourceMappingURL=235-legacy.5b1844e8.js.map