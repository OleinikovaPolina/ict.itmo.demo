"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7213,5634],{5634:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"fit-content"}},[i("router-link",{staticClass:"ict-button text-decoration-none d-flex align-center",attrs:{to:t.link}},[t._v(" "+t._s(t.text)+" ")])],1)},a=[],o={name:"BaseButtonOutlined",props:{link:{type:String,default:""},text:{type:String,default:""}}},s=o,l=i(1001),u=(0,l.Z)(s,n,a,!1,null,"634111b8",null),f=u.exports},7213:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-block pa-4"},[i("div",{staticClass:"text-h6"},[t._v(" "+t._s(t.info.title)+" ")]),t.info.position?i("div",[t._v(" Расположение: "+t._s(t.info.position)+" ")]):t._e(),t.info.tags?i("div",[t._v(" Теги: "+t._s(t.info.tags.map((function(t){return t.name})).join(", "))+" ")]):t._e(),t.info.date||t.info.dateStart?i("div",[t._v(" Дата: "+t._s(t.$moment(t.info.date||t.info.dateStart).format("DD.MM.YYYY"))+" ")]):t._e(),t.info.time?i("div",[t._v(" Время: "+t._s(t.info.time)+" ")]):t._e(),t.info.page?i("div",[t._v(" Страница: "+t._s(t.info.page)+" ")]):t._e(),t.info.datePublish?i("div",{staticClass:"pb-2"},[t._v(" Дата публикации: "+t._s(t.info.datePublish)+" ")]):t._e(),t.info.updatedAt?i("div",{staticClass:"pb-2"},[t._v(" Дата изменения: "+t._s(t.$moment(t.info.updatedAt).format("DD.MM.YYYY"))+" ")]):t._e(),i("div",{staticClass:"pa-3",staticStyle:{position:"absolute",right:"0",bottom:"0"}},[i("BaseButtonOutlined",{staticClass:"rounded-0",attrs:{text:"Редактировать",link:t.link}})],1)])},a=[],o=i(5634),s={name:"BaseBlock",components:{BaseButtonOutlined:o["default"]},props:{info:{type:Object,default:null},link:{type:String,default:""}}},l=s,u=i(1001),f=(0,u.Z)(l,n,a,!1,null,"0b26c86e",null),d=f.exports}}]);
//# sourceMappingURL=7213.68e9c2d1.js.map