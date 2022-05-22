"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7393],{68582:function(){},99846:function(t,n,e){e.d(n,{Z:function(){return o}});e(57327),e(41539),e(47941),e(23157),e(92222),e(68582),e(17273),e(73210),e(69600);var i=e(20144);function a(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var i=e.props,a=e.data,s=e.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var o=a.attrs;if(o){a.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n}));r.length&&(a.staticClass+=" ".concat(r.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),n(i.tag,a,s)}})}var s=e(76290),o=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,i=n.props,a=n.data,o=n.children,r=a.attrs;return r&&(a.attrs={},e=Object.keys(r).filter((function(t){if("slot"===t)return!1;var n=r[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,(0,s.ZP)(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),o)}})},62877:function(t,n,e){var i=e(23796),a=e(4367),s=(e(41539),e(26699),e(32023),e(92222),e(47941),e(74916),e(15306),e(51532),e(78783),e(33948),e(54747),e(17273),e(20144)),o=e(76290),r=e(4589),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,n){return c.reduce((function(e,i){return e[t+(0,r.jC)(i)]=n(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},m=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:p}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),h={align:Object.keys(m),justify:Object.keys(f),alignContent:Object.keys(v)},x={align:"align",justify:"justify",alignContent:"align-content"};function C(t,n,e){var i=x[t];if(null!=e){if(n){var a=n.replace(t,"");i+="-".concat(a)}return i+="-".concat(e),i.toLowerCase()}}var b=new Map;n["Z"]=s.Z.extend({name:"v-row",functional:!0,props:(0,a.Z)((0,a.Z)((0,a.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},m),{},{justify:{type:String,default:null,validator:p}},f),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,n){var e=n.props,a=n.data,s=n.children,r="";for(var c in e)r+=String(e[c]);var l=b.get(r);return l||function(){var t,n;for(n in l=[],h)h[n].forEach((function(t){var i=e[t],a=C(n,t,i);a&&l.push(a)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},(0,i.Z)(t,"align-".concat(e.align),e.align),(0,i.Z)(t,"justify-".concat(e.justify),e.justify),(0,i.Z)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),b.set(r,l)}(),t(e.tag,(0,o.ZP)(a,{staticClass:"row",class:l}),s)}})},57393:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-container",[e("BaseStudentsHackathon",{attrs:{text:"","slider-images-names":t.slider,name:"Хакатоны ICT & Info Lab",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam\n            luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies\n            neque proin ac ante suspendisse."}})],1),e("div",{staticClass:"hex-section"},[e("v-container",[e("BaseStudentsHackathon",{attrs:{"hex-array":t.hexArray,title:"Конкурс “Горизонт”",subtitle:"Победители 2021 года",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin."}})],1),e("LineComponent",{attrs:{id:"1",color:"#FF0281",width:"50%",position:"left",top:"-10px","left-after":"20%"}}),e("LineComponent",{attrs:{id:"2",color:"#FF776E",width:"50%",position:"left",top:"5px"}})],1),e("v-container",{staticClass:"py-6 py-md-12"},[e("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Полезные ссылки ")]),e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"9",md:"11"}},[e("v-row",t._l(t.usefulLinks,(function(t,n){return e("v-col",{key:n,attrs:{cols:"12",md:"4"}},[e("BaseUlBlock",{attrs:{item:t}})],1)})),1)],1)],1)],1),e("v-container",{staticClass:"pb-4 pb-md-12"},[e("v-row",{staticClass:"d-flex align-center justify-center"},[e("v-col",{staticClass:"text-center d-md-none"},[e("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" MicroTik - курс по сетевым технологиям ")])]),e("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[e("div",[e("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" MicroTik - курс по сетевым технологиям ")]),e("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin. Vitae blandit tristique aliquam volutpat proin maecenas elit leo. Viverra mi, platea velit facilisis. ")])]),e("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[e("BaseButton",{attrs:{link:"/"}})],1)]),e("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6"}},[e("TheStudentsTwoPhotoComponent")],1)],1)],1),e("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),e("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),e("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[e("v-container",[e("v-row",{staticClass:"d-flex align-center justify-center"},[e("v-col",{staticClass:"text-center d-md-none"},[e("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")])]),e("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[e("div",[e("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")]),e("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies neque proin ac ante suspendisse. ")])]),e("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[e("BaseButton",{attrs:{href:"https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A",text:"Открыть YouTube"}})],1)]),e("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[e("TheStudentsVideoComponent")],1)],1)],1)],1),e("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),e("LineComponent",{attrs:{id:"6",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),e("div",{staticClass:"pt-8 pt-md-12"},[e("v-container",[e("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Сотрудники факультета ")]),e("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1)],1)},a=[],s=(e(41539),e(78783),e(33948),{name:"StudentsView",components:{BaseStudentsHackathon:function(){return e.e(4128).then(e.bind(e,94128))},LineComponent:function(){return e.e(4022).then(e.bind(e,34022))},TheStudentsTwoPhotoComponent:function(){return e.e(1501).then(e.bind(e,71501))},TheStudentsVideoComponent:function(){return e.e(5377).then(e.bind(e,85377))},BaseUlBlock:function(){return e.e(7658).then(e.bind(e,17658))},BaseButton:function(){return e.e(7625).then(e.bind(e,37625))},CarouselLeadersComponent:function(){return Promise.all([e.e(4893),e.e(680),e.e(9466),e.e(544)]).then(e.bind(e,14681))}},data:function(){return{hexArray:[{img:e(8756),text:"Архитектура баз данных"},{img:e(45425),text:"Облачные технологии"},{img:e(18116),text:"Backend разработка"},{img:e(37162),text:"Frontend разработка"},{img:e(90615),text:"Управление проектами"},{img:e(63631),text:"Геймификация"}],slider:[e(59582),e(59582),e(59582)],persons:[{img:e(45563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:e(45563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],usefulLinks:[{name:"Административные",img:e(53719),links:[{name:"Студенческий офис",href:"#"},{name:"Интернет-портал ИСУ",href:"#"},{name:"Личный кабинет my.itmo",href:"#"}]},{name:"Информационные",img:e(43116),links:[{name:"Telegram-канал ИКТ",href:"#"},{name:"Telegram-канал ITMOLNIA",href:"#"},{name:"Сайт ИТМО",href:"#"}]},{name:"Другое",img:e(54237),links:[{name:"Центр Карьеры",href:"#"},{name:"ITMO.Students",href:"#"},{name:"Telegram-канал ППА",href:"#"}]}]}}}),o=s,r=e(1001),c=e(43453),l=e.n(c),u=e(82102),d=e(99846),m=e(62877),p=(0,r.Z)(o,i,a,!1,null,"df0b7f4e",null),f=p.exports;l()(p,{VCol:u.Z,VContainer:d.Z,VRow:m.Z})},8756:function(t,n,e){t.exports=e.p+"img/Vector.0cd0533d.svg"},45425:function(t,n,e){t.exports=e.p+"img/Vector1.3da63373.svg"},37162:function(t,n,e){t.exports=e.p+"img/Vector2.15f8ca0d.svg"},18116:function(t,n,e){t.exports=e.p+"img/Vector3.8ada9399.svg"},90615:function(t,n,e){t.exports=e.p+"img/Vector4.32eca419.svg"},63631:function(t,n,e){t.exports=e.p+"img/Vector5.2bff168f.svg"},53719:function(t,n,e){t.exports=e.p+"img/building.0d4230b8.svg"},54237:function(t,n,e){t.exports=e.p+"img/calendar.fadab874.svg"},43116:function(t,n,e){t.exports=e.p+"img/news.75c931fd.svg"},59582:function(t,n,e){t.exports=e.p+"img/unsplash_JjjSPPzzpkU.41e7d360.png"},45563:function(t,n,e){t.exports=e.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=7393-legacy.1a1fedf8.js.map