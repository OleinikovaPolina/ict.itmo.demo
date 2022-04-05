"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5022],{8582:function(){},9846:function(t,i,s){s.d(i,{Z:function(){return n}});s(8582),s(7273);var e=s(144);function r(t){return e.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(i,{props:s,data:e,children:r}){e.staticClass=`${t} ${e.staticClass||""}`.trim();const{attrs:a}=e;if(a){e.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const i=a[t];return t.startsWith("data-")?(e.attrs[t]=i,!1):i||"string"===typeof i}));t.length&&(e.staticClass+=` ${t.join(" ")}`)}return s.id&&(e.domProps=e.domProps||{},e.domProps.id=s.id),i(s.tag,e,r)}})}var a=s(6290),n=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:i,data:s,children:e}){let r;const{attrs:n}=s;return n&&(s.attrs={},r=Object.keys(n).filter((t=>{if("slot"===t)return!1;const i=n[t];return t.startsWith("data-")?(s.attrs[t]=i,!1):i||"string"===typeof i}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,(0,a.ZP)(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(r||[])}),e)}})},7047:function(t,i,s){s.d(i,{Z:function(){return m}});var e=s(8083),r=s(2529),a=s(3325),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=s(8085),l=s(6290),d=s(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var m=(0,a.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:e.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],i=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),i&&t.push(`url("${i}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,i,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,i=100){const s=()=>{const{naturalHeight:e,naturalWidth:r}=t;e||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/e):t.complete||!this.isLoading||this.hasError||null==i||setTimeout(s,i)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const i=o.options.render.call(this,t),s=(0,l.ZP)(i.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return i.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(i.tag,s,i.children)}})},459:function(t,i,s){var e=s(144);i["Z"]=e.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:i,children:s}){return i.staticClass=`v-list-item__icon ${i.staticClass||""}`.trim(),t("div",i,s)}})},9155:function(t,i,s){s.r(i),s.d(i,{default:function(){return _}});var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-container",[e("div",{staticClass:"text-center mx-auto pb-5 pb-md-8 text-h5 text-sm-h4 text-xl-h3"},[t._v(" Руководство факультета ИКТ ")]),e("v-row",{staticClass:"pb-4 pb-md-10",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[e("BasePerson",{attrs:{person:t.dean}})],1)],1),e("v-row",{attrs:{justify:"center"}},t._l(t.persons,(function(t,i){return e("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[e("BasePersonVertical",{attrs:{person:t}})],1)})),1),e("div",{staticClass:"text-center mx-auto pt-6 pb-6 pt-md-10 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис образовательных программ ")]),e("v-row",{staticClass:"pb-6 pb-md-10",attrs:{justify:"center"}},t._l(t.persons,(function(t,i){return e("v-col",{key:i,attrs:{cols:"6",sm:"5",md:"3"}},[e("BasePersonVertical",{attrs:{person:t}})],1)})),1)],1),e("LineComponent",{attrs:{id:"1",color:"#18FFBA",width:"65%",position:"left",top:"-10px"}}),e("LineComponent",{attrs:{id:"2",color:"#6A30F4",width:"55%",position:"right",top:"5px"}}),e("div",{staticClass:"section-background py-6"},[e("v-container",[e("div",{staticClass:"text-center mx-auto pb-4 text-h6 text-sm-h5 text-xl-h4"},[t._v(" Офис факультета ИКТ ")]),e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-list",{staticStyle:{background:"none!important"},attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-3"},[e("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-map-marker-radius-outline ")])],1),e("div",[t._v(" 199034, г. Санкт-Петербург, Биржевая линия, д.14, каб. 303 (учебный офис) ")])],1),e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-3"},[e("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-email-outline ")])],1),e("div",[e("a",{staticStyle:{color:"inherit"},attrs:{href:"mailto: dict@itmo.ru"}},[t._v("dict@itmo.ru")])])],1),e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-3"},[e("v-icon",{attrs:{color:"#2DC0C5"}},[t._v(" mdi-phone-outline ")])],1),e("div",[e("a",{staticStyle:{color:"inherit"},attrs:{href:"tel:+78124571536"}},[t._v("+7 (812) 457-15-36 ")]),e("span",{staticClass:"pl-1",staticStyle:{opacity:"0.7"}},[t._v("(Пн-Пт: 11:00-16:00)")])])],1),e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-3"},[e("v-img",{attrs:{height:"24",width:"24",contain:"",src:s(6586)}})],1),e("div",[t._v(" метро Спортивная, 700 м")])],1),e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-3"},[e("v-img",{attrs:{height:"24",width:"24",contain:"",src:s(4818)}})],1),e("div",[t._v("метро Васиолестровская, 1.2 км")])],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}})],1)],1)],1),e("LineComponent",{attrs:{id:"3",color:"#FF0281",width:"65%",position:"right",top:"-10px"}}),e("LineComponent",{attrs:{id:"4",color:"#FF776E",width:"80%",position:"right"}})],1)},r=[],a={name:"ContactsView",components:{LineComponent:()=>s.e(4022).then(s.bind(s,4022)),BasePersonVertical:()=>s.e(814).then(s.bind(s,814)),BasePerson:()=>s.e(3931).then(s.bind(s,314))},data:()=>({persons:[{img:s(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:s(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:s(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"},{img:s(5563),name:"Арсеньева Анна Закировна",position:"Заместитель декана факультета",email:"Aleksandrov@gmail.com"}],dean:{img:s(2559),name:"Капитонов Александр Александрович",position:"Декан факультета",email:"kapitonov.aleksandr@itmo.ru",tel:"+7 920-457-85-96"}})},n=a,o=s(1001),c=s(3453),l=s.n(c),d=s(2102),h=s(9846),m=s(6428),p=s(7047),u=s(6816),g=s(7620),v=s(459),S=s(2877),f=(0,o.Z)(n,e,r,!1,null,"223319f8",null),_=f.exports;l()(f,{VCol:d.Z,VContainer:h.Z,VIcon:m.Z,VImg:p.Z,VList:u.Z,VListItem:g.Z,VListItemIcon:v.Z,VRow:S.Z})},6586:function(t,i,s){t.exports=s.p+"img/undergroundBlue.fdd6d2cf.svg"},4818:function(t,i,s){t.exports=s.p+"img/undergroundGreen.50aa21db.svg"},2559:function(t,i,s){t.exports=s.p+"img/unsplash_v2aKnjMbP_k.90995ed8.png"},5563:function(t,i,s){t.exports=s.p+"img/unsplash_FcLyt7lW5wg.b3369446.png"}}]);
//# sourceMappingURL=5022.d64ada7d.js.map