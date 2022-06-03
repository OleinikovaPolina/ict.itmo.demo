"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7165],{7047:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(8083),n=i(2529),a=i(3325),o=(0,a.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=o,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,a.Z)(r,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=r.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=r.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),r=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),a&&(t.maxHeight=a),o&&(t.maxWidth=o),r&&(t.width=r),t}}})},5700:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isLoad?i("div",[i("v-container",{staticStyle:{"z-index":"1",position:"relative"}},[i("v-row",{staticClass:"d-flex align-center justify-center"},[i("v-col",{class:t.$vuetify.breakpoint.xs?"text-center":"",attrs:{cols:"12",sm:"6"}},[i("div",{staticClass:"pb-6 pb-md-4 pb-lg-10 text-h4 text-md-h3 text-xl-h1"},[t._v(" Факультет ИКТ ")]),i("div",{staticClass:"text-subtitle-1"},[t._v(" Факультет Инфокоммуникационных технологий является главной отправной точкой в развитии твоих профессиональных навыков. Мы дадим тебе базовые знания в программировании, что сейчас очень востребовано и высокооплачиваемо на рынке труда, и дадим тебе практические навыки, которые ты сможешь реализовать в проектах наших партнеров. ")])]),i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6"}},[i("HeaderAnimation",{attrs:{"animation-header":t.animationHeader}})],1)],1)],1),i("div",{staticClass:"hex-section",staticStyle:{"z-index":"0",position:"relative"}},[t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M-6 1C64.8333 46.1667 238.502 138.878 415.5 175C472.674 186.668 575.485 189.732 691.5 188.004",stroke:"url(#Gradient1)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient1"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#6A30F4"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"}})])],1)],1)]):t._e(),t.scrolledHexLines?i("svg",{staticClass:"hex-section-line",attrs:{width:"100%",height:"100%",viewBox:"0 0 1440 812",fill:"none",preserveAspectRatio:"xMinYMin slice",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{id:"one",d:"M-6 13C64.8333 58.1667 238.502 148.878 415.5 185C506.728 203.618 714.147 200.329 906 190.621",stroke:"url(#Gradient2)","stroke-width":"2","stroke-linecap":"round"}}),i("defs",[i("linearGradient",{attrs:{id:"Gradient2"}},[i("stop",{staticClass:"line-stop-1",attrs:{offset:"0","stop-color":"#18FFBA"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})]),i("stop",{staticClass:"line-stop-2",attrs:{offset:"0","stop-opacity":"0"}},[i("animate",{attrs:{attributeName:"offset",values:"0;1",dur:"1.5s",fill:"freeze"}})])],1)],1)]):t._e(),i("v-container",{staticStyle:{position:"relative","z-index":"10"}},[i("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.article.title)+" ")]),i("BaseHexagonContainer",{attrs:{"hex-array":JSON.parse(t.article.description).winnersHex,link:"/article/1"}})],1),i("LineComponent",{attrs:{id:"1",color:"#FF776E",width:"55%",position:"left"}}),i("LineComponent",{attrs:{id:"2",color:"#FF0281",width:"55%",position:"right",top:"10px"}})],1),i("NewsComponent",{staticClass:"pb-8 pb-xl-12",attrs:{news:t.news.results}}),i("LineComponent",{attrs:{id:"3",color:"#6A30F4",width:"35%",position:"left",top:"-10px"}}),i("LineComponent",{attrs:{id:"4",color:"#18FFBA",width:"75%",position:"right"}}),i("div",{staticClass:"section-background pt-4 pt-xl-8 pb-4 pb-md-8 pb-xl-14"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-4 pb-sm-6 pb-xl-8 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ")]),i("CarouselLeadersComponent",{attrs:{slider:t.persons}})],1)],1),i("LineComponent",{attrs:{id:"5",color:"#FF0281",width:"40%",position:"left"}}),i("LineComponent",{attrs:{id:"6",color:"#FF776E",width:"45%",position:"right",top:"10px"}}),i("div",{staticClass:"ethics"},[i("TheEthicsMobileComponent",{staticClass:"ethics-mobile"}),i("TheEthicsComponent",{staticClass:"ethics-desktop"})],1),i("LineComponent",{attrs:{id:"7",color:"#18FFBA",width:"30%",position:"right",top:"-5px"}}),i("LineComponent",{attrs:{id:"8",color:"#FF0281",width:"60%",position:"left",top:"10px","left-after":"15%"}}),i("div",{staticClass:"section-background pt-4 pb-10 pt-lg-12 pb-lg-16"},[i("v-container",[i("div",{staticClass:"text-center mx-auto pb-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Клубы факультета ")]),i("v-row",{staticClass:"d-flex align-start justify-space-around"},t._l(t.clubs,(function(e,s){return i("v-col",{key:s,staticClass:"pt-6 text-center d-flex flex-column align-center animation-club",attrs:{cols:"6",md:"3"}},[i("v-img",{staticClass:"club-img",attrs:{src:e.img,contain:""}}),i("div",{staticClass:"club-text"},[i("div",{staticClass:"text-h6 text-xl-h4 club-name pb-1 pt-4 pt-md-8"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"club-description px-sm-2"},[t._v(" "+t._s(e.description)+" ")]),i("div",{staticClass:"d-flex justify-center club-description pt-2"},[i("div",[i("v-img",{staticClass:"mr-2",attrs:{src:e.iconLink,width:t.$vuetify.breakpoint.xs?20:30,contain:""}})],1),i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.link))])])]),2===s&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"11",color:"#6A30F4",width:"100%",position:"right",top:"-20px"}}):t._e(),2===s&&t.$vuetify.breakpoint.smAndDown?i("LineComponent",{attrs:{id:"12",color:"#FF776E",width:"30%",position:"left",top:"-10px"}}):t._e()],1)})),1)],1)],1),i("LineComponent",{attrs:{id:"9",color:"#6A30F4",width:"100%",position:"right"}}),t.$vuetify.breakpoint.mdAndUp?i("LineComponent",{attrs:{id:"10",color:"#FF776E",width:"30%",position:"left",top:"10px"}}):t._e(),i("div",{staticClass:"pt-2 pt-sm-8 pt-xl-14 pb-sm-4 pb-xl-8"},[i("v-container",{staticClass:"animation-numbers"},[i("div",{staticClass:"text-center mx-auto pb-sm-6 text-h6 text-sm-h4 text-xl-h3"},[t._v(" Факультет в цифрах ")]),i("v-row",t._l(t.numbers,(function(e,s){return i("v-col",{key:s,staticClass:"text-center",attrs:{cols:"4",md:1===s?6:3}},[i("div",{staticClass:"numbers-name"},[t._v(" "+t._s(e.name)+" ")]),i("div",{staticClass:"numbers-description subtitle-color",domProps:{innerHTML:t._s(e.description)}})])})),1)],1)],1),i("PartnersComponent")],1):i("div",{staticClass:"d-flex justify-center fill-height align-center fill-height",staticStyle:{"min-height":"75vh"}},[i("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],a=i(629),o={name:"HomeView",components:{LineComponent:()=>i.e(5898).then(i.bind(i,5898)),CarouselLeadersComponent:()=>Promise.all([i.e(2715),i.e(2618)]).then(i.bind(i,2715)),HeaderAnimation:()=>i.e(8394).then(i.bind(i,8394)),TheEthicsComponent:()=>i.e(865).then(i.bind(i,865)),TheEthicsMobileComponent:()=>i.e(5237).then(i.bind(i,5237)),NewsComponent:()=>i.e(9196).then(i.bind(i,9196)),PartnersComponent:()=>i.e(1555).then(i.bind(i,1555)),BaseHexagonContainer:()=>i.e(4489).then(i.bind(i,9923))},props:{animationHeader:{type:Boolean,default:!1}},data:()=>({clubs:[{img:i(5280),name:"AIRes",description:"Сообщество разработчиков искусственного интеллекта",link:"https://vk.com/airesclub",iconLink:i(7882)},{img:i(1365),name:"FTML",description:"Клуб frontend-разработчиков",link:"https://vk.com/ftmlclub",iconLink:i(7882)},{img:i(375),name:"PM's",description:"Объединение специалистов в сфере менеджемента",link:"https://vk.com/pms_itmo",iconLink:i(7882)},{img:i(3654),name:"Info Lab",description:"Проектный клуб разработчиков",link:"https://vk.com/infolab_club",iconLink:i(7882)}],numbers:[{name:">60",description:"преподавателей"},{name:"~1000",description:"студентов"},{name:"6",description:"образовательных<br>программ"}],persons:[{img:i(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Александрова А.А.",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:i(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],scrolledClub:[{type:!1},{type:!1},{type:!1},{type:!1}],scrolledNumbers:!1,scrolledHexLines:!1,isLoad:!1}),computed:(0,a.rn)("news",["news","article"]),watch:{scrolledClub:{handler:function(t){t.forEach(((t,e)=>{t.type&&document.querySelectorAll(".animation-club")[e].classList.add("animation--active")}))},deep:!0},scrolledNumbers(t){t&&document.querySelector(".animation-numbers").classList.add("animation--active")}},async mounted(){await this.getNews(),await this.getArticle(1),this.isLoad=!0},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{...(0,a.nv)("news",["getNews","getArticle"]),handleScroll(){let t=document.documentElement.clientHeight;if(document.querySelectorAll(".animation-club").forEach(((e,i)=>{if(!this.scrolledClub[i].type){let s=e.getBoundingClientRect().bottom;this.scrolledClub[i].type=s<t&&s>0}})),!this.scrolledNumbers){let e=document.querySelector(".animation-numbers").getBoundingClientRect().bottom;this.scrolledNumbers=e<t&&e>0}if(!this.scrolledHexLines){let e=document.querySelector(".hex-section");if(e){let i=e.getBoundingClientRect().top+150;i<t&&i>0&&(this.scrolledHexLines=!0)}}}}},r=o,l=i(1001),c=i(3453),d=i.n(c),h=i(2102),m=i(9846),p=i(7047),u=i(624),g=i(2877),v=(0,l.Z)(r,s,n,!1,null,"3ad5bbbf",null),b=v.exports;d()(v,{VCol:h.Z,VContainer:m.Z,VImg:p.Z,VProgressCircular:u.Z,VRow:g.Z})},7882:function(t,e,i){t.exports=i.p+"img/vkMini.0818e256.svg"},5280:function(t,e,i){t.exports=i.p+"img/aires.ddb80f96.png"},1365:function(t,e,i){t.exports=i.p+"img/ftml.ca5b3cb1.png"},3654:function(t,e,i){t.exports=i.p+"img/infolab.b86b295a.png"},375:function(t,e,i){t.exports=i.p+"img/pm.d589adae.png"}}]);
//# sourceMappingURL=7165.d51480cd.js.map