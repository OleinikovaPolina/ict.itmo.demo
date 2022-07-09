"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1584],{7047:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(8083),a=s(2529),n=s(3325),r=(0,n.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,c=s(8085),l=s(6290),d=s(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,n.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},549:function(t,e,s){function i(t,e,s){const i=e.value,a=e.options||{passive:!0};window.addEventListener("resize",i,a),t._onResize=Object(t._onResize),t._onResize[s.context._uid]={callback:i,options:a},e.modifiers&&e.modifiers.quiet||i()}function a(t,e,s){var i;if(null==(i=t._onResize)||!i[s.context._uid])return;const{callback:a,options:n}=t._onResize[s.context._uid];window.removeEventListener("resize",a,n),delete t._onResize[s.context._uid]}const n={inserted:i,unbind:a};e["Z"]=n},1706:function(t,e,s){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}s.d(e,{e:function(){return i}})},2386:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-container app-background"},[i("v-container",[i("v-row",{staticClass:"d-flex align-center",staticStyle:{"background-color":"inherit","box-shadow":"none"}},[i("div",{staticClass:"pa-3 pr-lg-8 pr-xl-12"},[i("router-link",{attrs:{to:"/"}},[i("v-img",{staticClass:"logo",attrs:{alt:"logo",contain:"",src:s(2835)}})],1)],1),t.$vuetify.breakpoint.mdAndUp?i("v-col",{staticClass:"d-flex align-center"},[t._l(t.links,(function(e,s){return[3!==s?i("router-link",{key:s,staticClass:"header-link mr-2 mr-lg-4  mr-xl-8",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")]):i("div",{key:s,staticClass:"text-center"},[i("v-menu",{staticClass:"ict-dropdown",attrs:{"offset-y":"",rounded:"b-xl","nudge-left":"15"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("div",t._g(t._b({staticClass:"header-link mr-2 mr-lg-4 mr-xl-8 d-flex align-center"},"div",a,!1),s),[i("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),i("div",{staticClass:"dropdown-symbol",style:{transform:"true"===a["aria-expanded"]?"rotate(180deg)":""}},[t._v(" ▼ ")])])]}}],null,!0)},[i("v-list",{staticClass:"dropdown-background"},[i("v-list-item",{staticStyle:{"min-height":"32px"}},[i("router-link",{staticClass:"header-link",attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),i("v-list-item",{staticStyle:{"min-height":"32px"}},[i("router-link",{staticClass:"header-link",attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)]}))],2):t._e(),i("v-col",{staticStyle:{transition:"all .4s"},style:{opacity:t.show||t.$vuetify.breakpoint.mdAndUp?1:0,zIndex:t.show||t.$vuetify.breakpoint.mdAndUp?1:-1},attrs:{cols:"2",md:"1"}},[i("SwitchComponent",{staticClass:"ml-lg-4"})],1),i("v-spacer"),t.$vuetify.breakpoint.smAndDown?i("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"4"}},[i("div",{staticClass:"menu",on:{click:t.clickMenu}},[i("div",{staticClass:"bar"}),i("div",{staticClass:"bar"}),i("div",{staticClass:"bar"})])]):t._e(),t.$vuetify.breakpoint.smAndDown?i("v-col",{staticClass:"pa-0",attrs:{cols:"12 "}},[i("v-expand-transition",[i("v-list",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-background"},[t._l(t.links,(function(e,s){return[3!==s?i("v-list-item",{key:s,staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[i("router-link",{staticClass:"header-link text-center",class:e.name.filter((function(e){return e===t.$route.name})).length>0?"link--active":"",staticStyle:{width:"100%"},attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.text)+" ")])],1):i("v-list-item",{key:s,staticClass:"d-flex justify-center align-start pt-1",staticStyle:{"min-height":"33px"}},[i("div",[i("div",{staticClass:"header-link d-flex align-center justify-center",on:{click:function(e){t.symbol=!t.symbol}}},[i("span",{staticClass:"pr-1",class:["baccalaureate","magistracy","program","disciplines"].filter((function(e){return e===t.$route.name})).length>0?"link--active":""},[t._v("Поступление")]),i("div",{staticClass:"dropdown-symbol",style:{transform:t.symbol?"rotate(180deg)":""}},[t._v(" ▼ ")])]),i("v-expand-transition",[i("v-list",{directives:[{name:"show",rawName:"v-show",value:t.symbol,expression:"symbol"}],staticClass:"app-background"},[i("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[i("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/baccalaureate"}},[t._v(" Бакалавриат ")])],1),i("v-list-item",{staticClass:"d-flex justify-center",staticStyle:{"min-height":"33px"},on:{click:t.closeMenu}},[i("router-link",{staticClass:"header-link text-center",staticStyle:{width:"100%"},attrs:{to:"/magistracy"}},[t._v(" Магистратура ")])],1)],1)],1)],1)])]}))],2)],1)],1):t._e()],1)],1)],1)},a=[],n=s(629),r={name:"TheHeaderComponent",components:{SwitchComponent:()=>s.e(7274).then(s.bind(s,6437))},data:()=>({symbol:!1,show:!1,links:[{text:"Главная",name:["home"],path:""},{text:"События",name:["events","news","new","event","announcement"],path:"events"},{text:"Студентам",name:["students"],path:"students"},{},{text:"Контакты",name:["contacts"],path:"contacts"}]}),computed:(0,n.rn)("app",["theme"]),created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let{top:t}=document.body.getBoundingClientRect();0===t?document.querySelector(".navbar-container").classList.remove("shadow"):document.querySelector(".navbar-container").classList.add("shadow")},closeMenu(){document.querySelector(".menu").classList.remove("active"),this.show=!1},clickMenu(){document.querySelector(".menu").classList.toggle("active"),this.show=!this.show}}},o=r,c=s(1001),l=s(3453),d=s.n(l),h=s(2102),u=s(9846),m=s(5827),p=s(7047),g=s(6816),v=s(7620),y=s(6768),S=s(2877),f=s(9762),_=(0,c.Z)(o,i,a,!1,null,"05e907ae",null),C=_.exports;d()(_,{VCol:h.Z,VContainer:u.Z,VExpandTransition:m.Fx,VImg:p.Z,VList:g.Z,VListItem:v.Z,VMenu:y.Z,VRow:S.Z,VSpacer:f.Z})}}]);
//# sourceMappingURL=1584.4489a9b9.js.map