"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[235],{235:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-sheet",{ref:"person",staticClass:"person rounded-pill mx-auto",class:{"animation--active":e.scrolled},attrs:{"max-width":e.$vuetify.breakpoint.sm?250:280}},[s("div",{staticClass:"person-img-container rounded-circle"},[s("v-img",{attrs:{width:"100%",height:"100%",src:e.person.img}})],1),s("div",{staticClass:"person-text px-2 px-md-5 pb-12 pb-md-12 text-center"},[s("div",{staticClass:"text-h6 pb-1 pt-1 pt-md-3"},[e._v(" "+e._s(e.person.name)+" ")]),s("div",[e._v(e._s(e.person.position))]),s("div",{staticClass:"d-flex align-center justify-center person-link px-1 pb-md-2"},[s("v-icon",{staticClass:"mr-1 person-link-icon",attrs:{right:"",small:e.$vuetify.breakpoint.smAndDown}},[e._v(" mdi-email-outline ")]),s("a",{staticClass:"person-email subtitle-color",attrs:{title:e.person.email,href:"mailto: "+e.person.email}},[e._v(" "+e._s(e.person.email)+" ")])],1)]),s("div",{staticClass:"person-pill rounded-b-pill section-background"})])},l=[],n={name:"BasePersonVertical",props:{person:{type:Object,default:null}},data:()=>({scrolled:!1}),mounted(){this.handleScroll()},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(this.scrolled)window.removeEventListener("scroll",this.handleScroll);else{let e=document.documentElement.clientHeight,{bottom:t}=this.$refs.person.$el.getBoundingClientRect();this.scrolled=t<e&&t>0}}}},r=n,o=s(1001),a=s(3453),c=s.n(a),d=s(6428),p=s(7047),m=s(3385),u=(0,o.Z)(r,i,l,!1,null,"0d41b8b2",null),h=u.exports;c()(u,{VIcon:d.Z,VImg:p.Z,VSheet:m.Z})}}]);
//# sourceMappingURL=235.306adeca.js.map