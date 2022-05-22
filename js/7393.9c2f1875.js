"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7393],{7273:function(){},8582:function(){},2102:function(t,e,n){n(7273);var i=n(144),s=n(6290),a=n(4589);const o=["sm","md","lg","xl"],r=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const p=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:a}){let o="";for(const s in e)o+=String(e[s]);let r=p.get(o);if(!r){let t;for(t in r=[],u)u[t].forEach((n=>{const i=e[n],s=d(t,n,i);s&&r.push(s)}));const n=r.some((t=>t.startsWith("col-")));r.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(o,r)}return t(e.tag,(0,s.ZP)(n,{class:r}),i)}})},9846:function(t,e,n){n.d(e,{Z:function(){return o}});n(8582),n(7273);var i=n(144);function s(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:a}=i;if(a){i.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var a=n(6290),o=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let s;const{attrs:o}=n;return o&&(n.attrs={},s=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,a.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},2877:function(t,e,n){n(7273);var i=n(144),s=n(6290),a=n(4589);const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce(((n,i)=>(n[t+(0,a.jC)(i)]=e(),n)),{})}const c=t=>[...r,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...r,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:d}))),m=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:m}))),g={align:Object.keys(u),justify:Object.keys(p),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){let i=v[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const x=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...p,alignContent:{type:String,default:null,validator:m},...f},render(t,{props:e,data:n,children:i}){let a="";for(const s in e)a+=String(e[s]);let o=x.get(a);if(!o){let t;for(t in o=[],g)g[t].forEach((n=>{const i=e[n],s=h(t,n,i);s&&o.push(s)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),x.set(a,o)}return t(e.tag,(0,s.ZP)(n,{staticClass:"row",class:o}),i)}})},6290:function(t,e,n){n.d(e,{ZP:function(){return o},bp:function(){return c}});var i=n(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function a(t){const e={};for(const n of t.split(s.styleList)){let[t,a]=n.split(s.styleProp);t=t.trim(),t&&("string"===typeof a&&(a=a.trim()),e[(0,i._A)(t)]=a)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=r(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function r(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?a(t):t),t.concat("string"===typeof e?a(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},7393:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("BaseStudentsHackathon",{attrs:{text:"","slider-images-names":t.slider,name:"Хакатоны ICT & Info Lab",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam\n            luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies\n            neque proin ac ante suspendisse."}})],1),n("div",{staticClass:"hex-section"},[n("v-container",[n("BaseStudentsHackathon",{attrs:{"hex-array":t.hexArray,title:"Конкурс “Горизонт”",subtitle:"Победители 2021 года",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin."}})],1),n("LineComponent",{attrs:{id:"1",color:"#FF0281",width:"50%",position:"left",top:"-10px","left-after":"20%"}}),n("LineComponent",{attrs:{id:"2",color:"#FF776E",width:"50%",position:"left",top:"5px"}})],1),n("v-container",{staticClass:"py-6 py-md-12"},[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Полезные ссылки ")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"9",md:"11"}},[n("v-row",t._l(t.usefulLinks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[n("BaseUlBlock",{attrs:{item:t}})],1)})),1)],1)],1)],1),n("v-container",{staticClass:"pb-4 pb-md-12"},[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" MicroTik - курс по сетевым технологиям ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" MicroTik - курс по сетевым технологиям ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin. Vitae blandit tristique aliquam volutpat proin maecenas elit leo. Viverra mi, platea velit facilisis. ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{link:"/"}})],1)]),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6"}},[n("TheStudentsTwoPhotoComponent")],1)],1)],1),n("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),n("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),n("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[n("v-container",[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies neque proin ac ante suspendisse. ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{href:"https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A",text:"Открыть YouTube"}})],1)]),n("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[n("TheStudentsVideoComponent")],1)],1)],1)],1),n("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),n("LineComponent",{attrs:{id:"6",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),n("div",{staticClass:"pt-8 pt-md-12"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Сотрудники факультета ")]),n("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1)],1)},s=[],a={name:"StudentsView",components:{BaseStudentsHackathon:()=>n.e(2697).then(n.bind(n,2697)),LineComponent:()=>n.e(4022).then(n.bind(n,4022)),TheStudentsTwoPhotoComponent:()=>n.e(1501).then(n.bind(n,1501)),TheStudentsVideoComponent:()=>n.e(5377).then(n.bind(n,5377)),BaseUlBlock:()=>n.e(7658).then(n.bind(n,7658)),BaseButton:()=>n.e(7625).then(n.bind(n,7625)),CarouselLeadersComponent:()=>Promise.all([n.e(9256),n.e(4681),n.e(544)]).then(n.bind(n,4681))},data:()=>({hexArray:[{img:n(8756),text:"Архитектура баз данных"},{img:n(5425),text:"Облачные технологии"},{img:n(8116),text:"Backend разработка"},{img:n(7162),text:"Frontend разработка"},{img:n(615),text:"Управление проектами"},{img:n(3631),text:"Геймификация"}],slider:[n(9582),n(9582),n(9582)],persons:[{img:n(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],usefulLinks:[{name:"Административные",img:n(3719),links:[{name:"Студенческий офис",href:"#"},{name:"Интернет-портал ИСУ",href:"#"},{name:"Личный кабинет my.itmo",href:"#"}]},{name:"Информационные",img:n(3116),links:[{name:"Telegram-канал ИКТ",href:"#"},{name:"Telegram-канал ITMOLNIA",href:"#"},{name:"Сайт ИТМО",href:"#"}]},{name:"Другое",img:n(4237),links:[{name:"Центр Карьеры",href:"#"},{name:"ITMO.Students",href:"#"},{name:"Telegram-канал ППА",href:"#"}]}]})},o=a,r=n(1001),l=n(3453),c=n.n(l),u=n(2102),d=n(9846),p=n(2877),m=(0,r.Z)(o,i,s,!1,null,"df0b7f4e",null),f=m.exports;c()(m,{VCol:u.Z,VContainer:d.Z,VRow:p.Z})},8756:function(t,e,n){t.exports=n.p+"img/Vector.0cd0533d.svg"},5425:function(t,e,n){t.exports=n.p+"img/Vector1.3da63373.svg"},7162:function(t,e,n){t.exports=n.p+"img/Vector2.15f8ca0d.svg"},8116:function(t,e,n){t.exports=n.p+"img/Vector3.8ada9399.svg"},615:function(t,e,n){t.exports=n.p+"img/Vector4.32eca419.svg"},3631:function(t,e,n){t.exports=n.p+"img/Vector5.2bff168f.svg"},3719:function(t,e,n){t.exports=n.p+"img/building.0d4230b8.svg"},4237:function(t,e,n){t.exports=n.p+"img/calendar.fadab874.svg"},3116:function(t,e,n){t.exports=n.p+"img/news.75c931fd.svg"},9582:function(t,e,n){t.exports=n.p+"img/unsplash_JjjSPPzzpkU.41e7d360.png"},5563:function(t,e,n){t.exports=n.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=7393.9c2f1875.js.map