"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7350],{64765:function(t,e,s){var a=s(46916),i=s(27007),n=s(19670),c=s(84488),l=s(81150),r=s(41340),o=s(58173),d=s(97651);i("search",(function(t,e,s){return[function(e){var s=c(this),i=void 0==e?void 0:o(e,t);return i?a(i,e,s):new RegExp(e)[t](r(s))},function(t){var a=n(this),i=r(t),c=s(e,a,i);if(c.done)return c.value;var o=a.lastIndex;l(o,0)||(a.lastIndex=0);var u=d(a,i);return l(a.lastIndex,o)||(a.lastIndex=o),null===u?-1:u.index}]}))},99762:function(t,e,s){s(68582);var a=s(4589);e["Z"]=(0,a.Ji)("spacer","div","v-spacer")},37350:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-container app-background"},[a("v-container",[a("v-row",{staticClass:"d-flex align-center",staticStyle:{"background-color":"inherit","box-shadow":"none"}},[a("div",{staticClass:"pa-3 pr-lg-8"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{alt:"logo",src:s(74427)}})])],1),t.$vuetify.breakpoint.mdAndUp?a("v-col",{staticClass:"d-flex align-center"},[t._l(t.links,(function(e,s){return[3!==s?a("router-link",{key:s,staticClass:"header-link mr-3",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")]):a("div",{key:s,staticClass:"text-center"},[a("v-menu",{staticClass:"ict-dropdown",attrs:{"offset-y":"",rounded:"b-xl","nudge-left":"15"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("div",t._g(t._b({staticClass:"header-link mr-3 d-flex align-center"},"div",i,!1),s),[a("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),a("div",{staticClass:"dropdown-symbol",style:{transform:"true"===i["aria-expanded"]?"rotate(180deg)":""}},[t._v(" ▼ ")])])]}}],null,!0)},[a("v-list",{staticClass:"dropdown-background"},[a("v-list-item",{staticStyle:{"min-height":"32px"}},[a("router-link",{staticClass:"header-link",attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),a("v-list-item",{staticStyle:{"min-height":"32px"}},[a("router-link",{staticClass:"header-link",attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)]}))],2):t._e(),a("v-col",{staticStyle:{transition:"all .4s"},style:{opacity:t.show||t.$vuetify.breakpoint.mdAndUp?1:0,zIndex:t.show||t.$vuetify.breakpoint.mdAndUp?1:-1},attrs:{cols:"2",md:"1"}},[a("SwitchComponent",{staticClass:"ml-lg-4"})],1),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("v-col",[a("v-text-field",{staticClass:"search-input",staticStyle:{"min-width":"175px"},attrs:{dark:"dark"===t.theme,dense:"",placeholder:"Поиск по сайту","hide-details":"",outlined:"","append-icon":"mdi-magnify",color:"#2DC0C5"},on:{"click:append":function(){}}})],1):t._e(),t.$vuetify.breakpoint.smAndDown?a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"4"}},[a("v-btn",{style:{opacity:t.show?0:1,zIndex:t.show?-1:1},attrs:{icon:"","x-large":"",color:"#2DC0C5"},on:{click:t.clickSearchIcon}},[a("v-icon",{attrs:{size:"40"}},[t._v(" mdi-magnify ")])],1),a("div",{staticClass:"menu",on:{click:t.clickMenu}},[a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"})])],1):t._e(),t.$vuetify.breakpoint.smAndDown?a("v-col",{staticClass:"pa-0",attrs:{cols:"12 "}},[a("v-expand-transition",[a("v-list",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-background"},[a("v-list-item",[a("v-text-field",{ref:"search",staticClass:"search-input",attrs:{dark:"dark"===t.theme,dense:"",placeholder:"Введите название новости или тега","hide-details":"",outlined:"","append-icon":"mdi-magnify",color:"#2DC0C5",height:"100%"},on:{"click:append":function(){}}})],1),t._l(t.links,(function(e,s){return[3!==s?a("v-list-item",{key:s,staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[a("router-link",{staticClass:"header-link text-center",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",staticStyle:{width:"100%"},attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")])],1):a("v-list-item",{key:s,staticClass:"d-flex justify-center align-start pt-1",staticStyle:{"min-height":"33px"}},[a("div",[a("div",{staticClass:"header-link d-flex align-center justify-center",on:{click:function(e){t.symbol=!t.symbol}}},[a("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),a("div",{staticClass:"dropdown-symbol",style:{transform:t.symbol?"rotate(180deg)":""}},[t._v(" ▼ ")])]),a("v-expand-transition",[a("v-list",{directives:[{name:"show",rawName:"v-show",value:t.symbol,expression:"symbol"}],staticClass:"app-background"},[a("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[a("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),a("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[a("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)])]}))],2)],1)],1):t._e()],1)],1)],1)},i=[],n=(s(41539),s(78783),s(33948),s(74916),s(64765),s(20629)),c={name:"TheHeaderComponent",components:{SwitchComponent:function(){return s.e(5766).then(s.bind(s,26050))}},data:function(){return{symbol:!1,show:!1,links:[{text:"Главная",name:["home"],path:""},{text:"События",name:["events","news","new"],path:"events"},{text:"Студентам",name:["students"],path:"students"},{},{text:"Контакты",name:["contacts"],path:"contacts"}]}},computed:(0,n.rn)("app",["theme"]),methods:{clickSearchIcon:function(){var t=this;document.querySelector(".menu").classList.toggle("active"),this.show=!0,setTimeout((function(){t.$refs["search"].$refs.input.focus()}))},closeMenu:function(){document.querySelector(".menu").classList.remove("active"),this.show=!1},clickMenu:function(){document.querySelector(".menu").classList.toggle("active"),this.show=!this.show}}},l=c,r=s(1001),o=s(43453),d=s.n(o),u=s(64995),v=s(82102),m=s(99846),p=s(85827),h=s(96428),f=s(16816),k=s(97620),y=s(76768),x=s(62877),g=s(99762),C=s(29966),w=(0,r.Z)(l,a,i,!1,null,"320943e8",null),b=w.exports;d()(w,{VBtn:u.Z,VCol:v.Z,VContainer:m.Z,VExpandTransition:p.Fx,VIcon:h.Z,VList:f.Z,VListItem:k.Z,VMenu:y.Z,VRow:x.Z,VSpacer:g.Z,VTextField:C.Z})},74427:function(t,e,s){t.exports=s.p+"img/logo.ab909f9e.png"}}]);
//# sourceMappingURL=7350-legacy.728d3f78.js.map