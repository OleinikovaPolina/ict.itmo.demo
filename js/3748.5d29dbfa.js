"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3748],{7273:function(){},8582:function(){},2102:function(t,e,n){n(7273);var i=n(144),s=n(6290),o=n(4589);const a=["sm","md","lg","xl"],r=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,o.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>a.reduce(((t,e)=>(t["order"+(0,o.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const p=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:o}){let a="";for(const s in e)a+=String(e[s]);let r=p.get(a);if(!r){let t;for(t in r=[],d)d[t].forEach((n=>{const i=e[n],s=u(t,n,i);s&&r.push(s)}));const n=r.some((t=>t.startsWith("col-")));r.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(a,r)}return t(e.tag,(0,s.ZP)(n,{class:r}),i)}})},9846:function(t,e,n){n.d(e,{Z:function(){return a}});n(8582),n(7273);var i=n(144);function s(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:o}=i;if(o){i.attrs={};const t=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var o=n(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let s;const{attrs:a}=n;return a&&(n.attrs={},s=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,o.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},2877:function(t,e,n){n(7273);var i=n(144),s=n(6290),o=n(4589);const a=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return a.reduce(((n,i)=>(n[t+(0,o.jC)(i)]=e(),n)),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...r,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:u}))),m=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:m}))),g={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(f)},h={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=h[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const x=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:m},...f},render(t,{props:e,data:n,children:i}){let o="";for(const s in e)o+=String(e[s]);let a=x.get(o);if(!a){let t;for(t in a=[],g)g[t].forEach((n=>{const i=e[n],s=v(t,n,i);s&&a.push(s)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),x.set(o,a)}return t(e.tag,(0,s.ZP)(n,{staticClass:"row",class:a}),i)}})},6290:function(t,e,n){n.d(e,{ZP:function(){return a},bp:function(){return c}});var i=n(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function o(t){const e={};for(const n of t.split(s.styleList)){let[t,o]=n.split(s.styleProp);t=t.trim(),t&&("string"===typeof o&&(o=o.trim()),e[(0,i._A)(t)]=o)}return e}function a(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=r(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function r(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?o(t):t),t.concat("string"===typeof e?o(e):e)):t:e}function l(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function c(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},3748:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("BaseStudentsHackathon",{attrs:{text:"","slider-images-names":t.slider,name:"Хакатоны ICT & Info Lab",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam\n            luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies\n            neque proin ac ante suspendisse."}})],1),n("div",{staticClass:"hex-section"},[t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient1"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?n("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),n("defs",[n("linearGradient",{attrs:{id:"Gradient2"}},[n("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),n("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[n("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),n("v-container",[n("BaseStudentsCompetition",{attrs:{"hex-array":t.hexArray,title:"Конкурс “Горизонт”",subtitle:"Победители 2021 года",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin."}})],1),n("LineComponent",{attrs:{id:"1",color:"#FF0281",width:"50%",position:"left",top:"-10px","left-after":"20%"}}),n("LineComponent",{attrs:{id:"2",color:"#FF776E",width:"50%",position:"left",top:"5px"}})],1),n("v-container",{staticClass:"py-6 py-md-12"},[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Полезные ссылки ")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"9",md:"11"}},[n("v-row",t._l(t.usefulLinks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[n("BaseUlBlock",{attrs:{item:t}})],1)})),1)],1)],1)],1),n("v-container",{staticClass:"pb-4 pb-md-12"},[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" MicroTik - курс по сетевым технологиям ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" MicroTik - курс по сетевым технологиям ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan nulla quis porttitor. Nisl turpis natoque nunc, tellus tincidunt aliquet. Aliquam eu tincidunt nibh suscipit urna, sollicitudin. Vitae blandit tristique aliquam volutpat proin maecenas elit leo. Viverra mi, platea velit facilisis. ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{link:"/"}})],1)]),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"6"}},[n("TheStudentsTwoPhotoComponent")],1)],1)],1),n("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"right"}}),n("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"70%",position:"left",top:"10px"}}),n("div",{staticClass:"section-background pt-4 pt-md-8 pb-4 pb-md-8 "},[n("v-container",[n("v-row",{staticClass:"d-flex align-center justify-center"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h6 text-sm-h5"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" Подкаст ИКТ “Вопросы от декана” ")]),n("div",{staticClass:"text-subtitle-1 pb-6"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dictum mattis nec eu erat iaculis nullam luctus. Nunc sed interdum adipiscing aliquet placerat. Varius aliquet porta volutpat, aenean in. Ultricies neque proin ac ante suspendisse. ")])]),n("div",{class:t.$vuetify.breakpoint.smAndDown?"mx-auto":""},[n("BaseButton",{attrs:{href:"https://www.youtube.com/channel/UC7cJ1RBFsZ7WWjoXV_5Vl1A",text:"Открыть YouTube"}})],1)]),n("v-col",{staticClass:"d-flex justify-center order-1",attrs:{cols:"12",md:"6"}},[n("TheStudentsVideoComponent")],1)],1)],1)],1),n("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"35%",position:"left",top:"-5px"}}),n("LineComponent",{attrs:{id:"6",color:"#18FFBA",width:"68%",position:"right",top:"10px"}}),n("div",{staticClass:"pt-8 pt-md-12"},[n("v-container",[n("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Сотрудники факультета ")]),n("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1)],1)},s=[],o={name:"StudentsView",components:{BaseStudentsCompetition:()=>n.e(4921).then(n.bind(n,4921)),BaseStudentsHackathon:()=>n.e(3798).then(n.bind(n,3798)),LineComponent:()=>n.e(5898).then(n.bind(n,5898)),TheStudentsTwoPhotoComponent:()=>n.e(9147).then(n.bind(n,9147)),TheStudentsVideoComponent:()=>n.e(939).then(n.bind(n,939)),BaseUlBlock:()=>n.e(4530).then(n.bind(n,4530)),BaseButton:()=>n.e(7625).then(n.bind(n,7625)),CarouselLeadersComponent:()=>Promise.all([n.e(9256),n.e(6991),n.e(6517)]).then(n.bind(n,6991))},data:()=>({scrolledHexLines:!1,hexArray:[{img:n(8756),text:"Архитектура баз данных"},{img:n(5425),text:"Облачные технологии"},{img:n(8116),text:"Backend разработка"},{img:n(7162),text:"Frontend разработка"},{img:n(615),text:"Управление проектами"},{img:n(3631),text:"Геймификация"}],slider:[n(4105),n(4105),n(4105)],persons:[{img:n(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:n(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],usefulLinks:[{name:"Административные",img:n(3719),links:[{name:"Студенческий офис",href:"#"},{name:"Интернет-портал ИСУ",href:"#"},{name:"Личный кабинет my.itmo",href:"#"}]},{name:"Информационные",img:n(3116),links:[{name:"Telegram-канал ИКТ",href:"#"},{name:"Telegram-канал ITMOLNIA",href:"#"},{name:"Сайт ИТМО",href:"#"}]},{name:"Другое",img:n(4237),links:[{name:"Центр Карьеры",href:"#"},{name:"ITMO.Students",href:"#"},{name:"Telegram-канал ППА",href:"#"}]}]}),created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){if(!this.scrolledHexLines){let t=document.documentElement.clientHeight,e=document.querySelector(".hex-section");if(e){let n=e.getBoundingClientRect().top+150;n<t&&n>0&&(this.scrolledHexLines=!0)}}}}},a=o,r=n(1001),l=n(3453),c=n.n(l),d=n(2102),u=n(9846),p=n(2877),m=(0,r.Z)(a,i,s,!1,null,"27fbb8b5",null),f=m.exports;c()(m,{VCol:d.Z,VContainer:u.Z,VRow:p.Z})},8756:function(t,e,n){t.exports=n.p+"img/Vector.0cd0533d.svg"},5425:function(t,e,n){t.exports=n.p+"img/Vector1.3da63373.svg"},7162:function(t,e,n){t.exports=n.p+"img/Vector2.15f8ca0d.svg"},8116:function(t,e,n){t.exports=n.p+"img/Vector3.8ada9399.svg"},615:function(t,e,n){t.exports=n.p+"img/Vector4.32eca419.svg"},3631:function(t,e,n){t.exports=n.p+"img/Vector5.2bff168f.svg"},3719:function(t,e,n){t.exports=n.p+"img/building.0d4230b8.svg"},4237:function(t,e,n){t.exports=n.p+"img/calendar.fadab874.svg"},3116:function(t,e,n){t.exports=n.p+"img/news.75c931fd.svg"},4105:function(t,e,n){t.exports=n.p+"img/unsplash_JjjSPPzzpkU2.443f370b.png"},5563:function(t,e,n){t.exports=n.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=3748.5d29dbfa.js.map