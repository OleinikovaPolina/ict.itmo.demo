"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2620],{9762:function(t,e,a){a(8582);var n=a(4589);e["Z"]=(0,n.Ji)("spacer","div","v-spacer")},2620:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Раздел тега"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-select",{staticClass:"search-input",attrs:{items:t.tagsNames,placeholder:"Введите пароль","item-value":"id","item-text":"name",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":"","append-icon":"mdi-chevron-down"},model:{value:t.tagForm.type,callback:function(e){t.$set(t.tagForm,"type",e)},expression:"tagForm.type"}})],1),a("v-col",{attrs:{cols:"6",md:"4"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Название тега"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{placeholder:"Название тега",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.tagForm.name,callback:function(e){t.$set(t.tagForm,"name",e)},expression:"tagForm.name"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"2"}},[a("div",{staticStyle:{width:"fit-content"}},[t.tagForm.id?a("BaseButton",{attrs:{text:"Изменить","click-btn":!0}}):a("BaseButton",{attrs:{text:"Сохранить","click-btn":!0}})],1)])],1),a("div",{staticClass:"pt-5 pt-md-10"},[a("div",{staticClass:"font-weight-bold"},[t._v(" Существуюшие теги ")]),t._l(t.tags,(function(e,n){return a("div",{key:n,staticClass:"d-flex pt-md-2 align-center flex-wrap"},[a("div",{staticClass:"pr-4"},[t._v(" "+t._s(e.name)+" ")]),t._l(e.items,(function(e,n){return a("BaseChip",{key:n,attrs:{item:e},scopedSlots:t._u([{key:"chip-btns",fn:function(){return[a("v-btn",{attrs:{icon:"",dark:"","x-small":""},on:{click:function(a){t.tagForm=e}}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-pencil-outline ")])],1),a("v-btn",{attrs:{icon:"",dark:"","x-small":""}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)]},proxy:!0}],null,!0)})}))],2)}))],2)],1)},i=[],s=a(629),l={name:"AdminTagsView",components:{BaseChip:()=>a.e(7509).then(a.bind(a,7509)),BaseButton:()=>a.e(1992).then(a.bind(a,1992))},data:()=>({tags:[{name:"Факультет",items:[{id:1,type:0,name:"Факультет"},{id:1,type:0,name:"Факультет"},{id:1,type:0,name:"Факультет"}]},{name:"Хакатоны",items:[{id:1,type:1,name:"Факультет"},{id:1,type:1,name:"Факультет"},{id:1,type:1,name:"Факультет"}]},{name:"Конференции",items:[{id:1,type:2,name:"Факультет"},{id:1,type:2,name:"Факультет"},{id:1,type:2,name:"Факультет"}]},{name:"Студ. жизнь",items:[{id:1,type:3,name:"Факультет"},{id:1,type:3,name:"Факультет"},{id:1,type:3,name:"Факультет"}]}],tagsNames:[{id:0,name:"Факультет"},{id:1,name:"Хакатоны"},{id:2,name:"Конференции"},{id:3,name:"Студ. жизнь:"}],tagForm:{}}),computed:{...(0,s.rn)("app",["theme"])}},c=l,o=a(1001),r=a(3453),d=a.n(r),m=a(680),p=a(2102),u=a(9846),v=a(6428),y=a(2877),h=a(6665),f=a(9762),k=a(5978),g=(0,o.Z)(c,n,i,!1,null,null,null),x=g.exports;d()(g,{VBtn:m.Z,VCol:p.Z,VContainer:u.Z,VIcon:v.Z,VRow:y.Z,VSelect:h.Z,VSpacer:f.Z,VTextField:k.Z})}}]);
//# sourceMappingURL=2620.acb9a3a2.js.map