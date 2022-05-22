"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4353],{2526:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.program?s("div",[s("v-container",[s("v-row",{staticClass:"d-flex align-stretch justify-center"},[s("v-col",{staticClass:"d-flex flex-column justify-space-around",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[s("div",{staticClass:"pb-4 pb-md-4 text-body-2 breadcrumbs text-start"},[s("span",[t._v("Поступление /")]),0===t.program.type?s("router-link",{attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")]):t._e(),1===t.program.type?s("router-link",{attrs:{to:"/magistracy"}},[t._v(" Магистратура ")]):t._e(),s("span",[t._v("/ "+t._s(t.program.direction))])],1),s("div",[s("div",{staticClass:"pb-4 pb-lg-8  text-h5 text-sm-h4 text-xl-h3"},[t._v(" "+t._s(t.program.direction)+" ")]),s("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" "+t._s(t.program.description)+" ")])]),s("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[s("BaseButton",{attrs:{link:"/",text:"Перейти на сайт"}})],1)]),s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6",lg:"7"}},[s("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),s("v-container",{staticClass:"d-flex justify-center"},[s("v-col",{attrs:{cols:"12",md:"10",xl:"12"}},[s("v-row",{attrs:{align:"stretch",justify:"center"}},[s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info pa-2 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info-title text-center pb-2 subtitle-color"},[t._v(" Вступительные испытания и минимальные баллы ЕГЭ ")]),s("div",{staticClass:"subtitle-color text-center"},t._l(t.program.exams,(function(e){return s("p",{key:e,staticClass:"mb-0"},[t._v(" "+t._s(e)+" ")])})),0)])])]),s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"6",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"program-info px-4 py-6 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Количество мест - "),s("b",[t._v(t._s(t.program.numbers))])]),s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Проходной балл прошлого года - "),s("b",[t._v(t._s(t.program.score))])]),s("div",{staticClass:"subtitle-color pb-1 pb-md-2 pb-lg-3"},[t._v(" Язык обучения - "),s("b",[t._v(t._s(t.program.language))])]),s("div",{staticClass:"subtitle-color"},[t._v(" Форма обучения - "),s("b",[t._v(t._s(t.program.form))])])])])]),s("v-col",{staticClass:"px-2 px-lg-4 px-xl-8",attrs:{cols:"8",md:"4",xl:"3"}},[s("div",{staticStyle:{height:"100%"}},[s("div",{staticClass:"subtitle-color program-info px-6 py-4 d-flex flex-column justify-center item-background",staticStyle:{height:"100%"}},[s("div",{staticClass:"text-h6 text-xl-h5 text-center pb-1 pb-md-3"},[t._v(" Полезные ссылки ")]),s("div",{staticClass:"d-flex flex-column pl-xl-4",staticStyle:{width:"fit-content"}},[t._l(t.program.links,(function(e){return s("a",{key:e.link,staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.name))])})),s("a",{staticClass:"link-arrow mb-1 mb-md-2 mr-0",attrs:{href:"https://abit.itmo.ru/page/66",target:"_blank"}},[t._v("Правила приема 2022 ")]),s("a",{staticClass:"link-arrow mr-0",attrs:{href:"https://abit.itmo.ru/"+(0===t.program.type?"bachelor":"master")+"#scholarship",target:"_blank"}},[t._v("Стипендии ")])],2)])])])],1)],1)],1),s("v-container",{staticClass:"directions pb-md-16"},[s("div",{staticClass:"d-flex pb-6"},[s("v-col",{attrs:{cols:"3",md:"1"}},[s("v-img",{attrs:{width:"100",src:t.programAreasImg}})],1),s("v-col",{attrs:{cols:"9",md:"6"}},[s("div",{staticClass:"text-h6 text-xl-h4"},[t._v(" Основные направления профессиональной деятельности выпускников: ")])])],1),s("div",{staticClass:"d-flex text-subtitle-1 flex-wrap"},t._l(2,(function(e){return s("v-col",{key:e,staticClass:"py-0",attrs:{cols:"12",md:"6"}},[s("ul",{staticClass:"ict-ul"},t._l(t.program.areas[e-1],(function(a){return s("li",{key:e+a},[t._v(" "+t._s(a)+" ")])})),0)])})),1)]),s("div",{staticClass:"hex-section"},[t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient1"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?s("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),s("defs",[s("linearGradient",{attrs:{id:"Gradient2"}},[s("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),s("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[s("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),s("v-container",[s("div",{staticClass:" text-center mx-auto text-h5 text-sm-h4 text-xl-h3",style:{width:t.$vuetify.breakpoint.smAndDown?"275px":"450px"}},[t._v(" Дисциплины ")]),s("BaseHexagonContainer",{attrs:{link:"/disciplines/"+t.program.code,"hex-array":t.hexArray}})],1)],1),s("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left",top:"5px"}}),s("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"65%",position:"right",top:"15px"}}),s("v-container",{staticClass:"py-8 py-md-16"},[s("v-row",{attrs:{justify:"center"}},t._l(t.program.contacts,(function(t,e){return s("v-col",{key:e,attrs:{cols:"12",sm:"6",xl:"4"}},[s("BasePerson",{attrs:{person:t,"small-person":!0}})],1)})),1)],1),s("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),s("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"left",top:"15px"}}),s("div",{staticClass:"section-background job"},[s("v-container",{staticClass:"py-10 py-md-12 py-xl-16"},[s("div",{staticClass:"text-center mx-auto pb-6 pb-md-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Где работают выпускники ИКТ ")]),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-row",{attrs:{justify:"center",align:"stretch"}},t._l(t.usefulLinks,(function(t,e){return s("v-col",{key:e,attrs:{cols:"6",md:"4"}},[s("div",{staticClass:"pa-md-4",staticStyle:{height:"100%"}},[s("BaseUlBlock",{attrs:{item:t,background:"app-background"}})],1)])})),1)],1)],1)],1)],1),s("LineComponent",{attrs:{id:"5",color:"#FF776E",width:"55%",position:"left"}}),s("div",{staticClass:"pt-8 pt-md-12"},[s("v-container",[s("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Преподаватели ")]),t.program.teachers.length?s("CarouselLeadersComponent",{attrs:{slider:t.program.teachers}}):t._e()],1)],1)],1):s("BaseNotFound")},i=[],r=s(629),o={name:"ProgramView",components:{BaseNotFound:()=>s.e(6643).then(s.bind(s,6643)),BasePerson:()=>s.e(2964).then(s.bind(s,2964)),LineComponent:()=>s.e(5898).then(s.bind(s,5898)),BaseUlBlock:()=>s.e(9956).then(s.bind(s,5484)),BaseButton:()=>s.e(7625).then(s.bind(s,7625)),CarouselLeadersComponent:()=>Promise.all([s.e(5580),s.e(8335)]).then(s.bind(s,5580)),HeaderAnimation:()=>s.e(8394).then(s.bind(s,8394)),BaseHexagonContainer:()=>s.e(4489).then(s.bind(s,9923))},props:{animationHeader:{type:Boolean,default:!1}},data:()=>({scrolledHexLines:!1,hexArray:[{img:s(8756),text:"Архитектура баз данных"},{img:s(5425),text:"Облачные технологии"},{img:s(8116),text:"Backend разработка"},{img:s(7162),text:"Frontend разработка"},{img:s(615),text:"Управление проектами"},{img:s(3631),text:"Геймификация"}],slider:[{img:s(9582)},{img:s(9582)},{img:s(9582)}],usefulLinks:[{name:"Инвестиционный</br>и банковский сектор",img:s(9263),links:[{name:"Сбербанк Технологии"},{name:"Intercontinental Exchange"}]},{name:"Информационная</br>безопасность",img:s(1629),links:[{name:"Dr.Web"},{name:"Avast Software"},{name:"Диджитал Секьюрити"}]},{name:"Компании, занимающиеся</br>автоматизацией бизнеса",img:s(8656),links:[{name:"T-Systems"},{name:"Luxoft"},{name:"KORUS Consulting"},{name:"Горизонты Роста"}]},{name:"Ведущие международные</br>IT‑компании",img:s(3520),links:[{name:"Microsoft"},{name:"EMC Corporation"},{name:"Интермедиа"}]},{name:"Телекоммуникационные</br>компании",img:s(5138),links:[{name:"Alcatel-Lucent"},{name:"Мегафон"},{name:"GS Group"}]}]}),computed:{...(0,r.rn)("app",["theme"]),program(){return this.$store.getters["programs/program"](this.$route.params.id)},programAreasImg(){return"dark"===this.theme?s(535):s(2344)}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(!this.scrolledHexLines){let t=document.documentElement.clientHeight,e=document.querySelector(".hex-section");if(e){let s=e.getBoundingClientRect().top+150;s<t&&s>0&&(this.scrolledHexLines=!0)}}}}},n=o,l=s(1001),c=s(3453),m=s.n(c),p=s(2102),d=s(9846),g=s(7047),u=s(2877),x=(0,l.Z)(n,a,i,!1,null,"0a6730f4",null),v=x.exports;m()(x,{VCol:p.Z,VContainer:d.Z,VImg:g.Z,VRow:u.Z})},8756:function(t,e,s){t.exports=s.p+"img/Vector.0cd0533d.svg"},5425:function(t,e,s){t.exports=s.p+"img/Vector1.3da63373.svg"},7162:function(t,e,s){t.exports=s.p+"img/Vector2.15f8ca0d.svg"},8116:function(t,e,s){t.exports=s.p+"img/Vector3.8ada9399.svg"},615:function(t,e,s){t.exports=s.p+"img/Vector4.32eca419.svg"},3631:function(t,e,s){t.exports=s.p+"img/Vector5.2bff168f.svg"},535:function(t,e,s){t.exports=s.p+"img/Vector.1b1f285e.svg"},2344:function(t,e,s){t.exports=s.p+"img/VectorLight.81351552.svg"},9263:function(t,e,s){t.exports=s.p+"img/Vector.70293c84.svg"},1629:function(t,e,s){t.exports=s.p+"img/Vector1.e6a02c26.svg"},8656:function(t,e,s){t.exports=s.p+"img/Vector2.8e5a0188.svg"},3520:function(t,e,s){t.exports=s.p+"img/Vector3.bd40a703.svg"},5138:function(t,e,s){t.exports=s.p+"img/Vector4.c1a318e0.svg"}}]);
//# sourceMappingURL=4353.ec6eb1bd.js.map