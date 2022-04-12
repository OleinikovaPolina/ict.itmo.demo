"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9944],{2877:function(t,e,i){i(7273);var s=i(144),a=i(6290),r=i(4589);const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce(((i,s)=>(i[t+(0,r.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...o,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:h}))),g=t=>[...o,"space-between","space-around","stretch"].includes(t),u=l("alignContent",(()=>({type:String,default:null,validator:g}))),m={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(u)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...p,alignContent:{type:String,default:null,validator:g},...u},render(t,{props:e,data:i,children:s}){let r="";for(const a in e)r+=String(e[a]);let n=b.get(r);if(!n){let t;for(t in n=[],m)m[t].forEach((i=>{const s=e[i],a=f(t,i,s);a&&n.push(a)}));n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,n)}return t(e.tag,(0,a.ZP)(i,{staticClass:"row",class:n}),s)}})},7047:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(8083),a=i(2529),r=i(3325),n=(0,r.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,r.Z)(o,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},2529:function(t,e,i){var s=i(4589),a=i(144);e["Z"]=a.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),a=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),n=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),r&&(t.maxHeight=r),n&&(t.maxWidth=n),o&&(t.width=o),t}}})},2100:function(t,e){e["Z"]={data:()=>({dialogCroppieDataImg:"",dialogCroppie:!1,dialogCroppieOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}),methods:{changeDialogCroppie(t){this.dialogCroppie=t},beforeCrop(t,e,i,s){this.form[t]=s;let a=new FileReader;a.onload=t=>{this.dialogCroppieDataImg=t.target.result},a.readAsDataURL(s),this.dialogCroppieOptions={title:i,size:e,enableResize:{w:!1,h:!1}},this.changeCroppie=e=>{this.form[t+"Croppie"]=e[0],this.form[t+"Blob"]=e[1]},this.dialogCroppie=!0},changeCroppie(){},beforeCropInsert(t){this.dialogCroppieDataImg=t.content.imgName.original,this.dialogCroppieOptions={title:"Изображение",size:{w:1140,h:400},enableResize:{w:!0,h:!0}},this.changeCroppie=e=>{t.content.imgName.croppie=e[0],t.content.imgName.blob=e[1]},this.dialogCroppie=!0}}}},7566:function(t,e){e["Z"]={data:()=>({dialog:!1,dialogContent:{}}),methods:{changeDialog(t){this.dialog=t},changeDialogContent(t){this.dialogContent=t},addBlock(){this.form.blocks.push({id:this.count,type:-1,content:null}),this.count++},deleteBlock(t){this.form.blocks=this.form.blocks.filter((e=>e.id!==t))},updateBlock(){this.form.blocks=this.form.blocks.map((t=>this.forUpdateBlock(t)))},forUpdateBlock(t){if(1===t.type)return{type:1,id:t.id,content:{blocks:[this.forUpdateBlock(t.content.blocks[0]),this.forUpdateBlock(t.content.blocks[1])]}};{let e=Object.assign({},t);return e}}}}},9944:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Мероприятия ")]),t.isPreview?s("div",[s("BaseNews",{staticClass:"mt-16",attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("div",{staticClass:"input-bordered mb-6 py-6"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка мероприятия "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",t.coverSizes[t.$route.params.id],"Обложка мероприятия",e.target.files[0])}}}),s("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{drop:function(e){t.beforeCrop("cover",t.coverSizes[t.$route.params.id],"Обложка мероприятия",e.dataTransfer.files[0])}}},[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),t._v(" Выберите изображение обложки или перетащите файл"),s("br"),t._v(" Размер "+t._s(t.getCoverSize())+" ")],1)]),t.form.cover?s("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock}}),s("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("v-row",{staticClass:"pt-4"},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата конца мероприятия ")]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateEnd,callback:function(e){t.$set(t.form,"dateEnd",e)},expression:"form.dateEnd"}})],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),s("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}})],1)},a=[],r=i(629),n=i(2100),o=i(7566),l={name:"HackathonCompetition",components:{DialogCroppieComponent:()=>Promise.all([i.e(6581),i.e(8192)]).then(i.bind(i,6581)),DialogPreviewComponent:()=>Promise.all([i.e(1288),i.e(3203)]).then(i.bind(i,1288)),BaseNews:()=>i.e(4828).then(i.bind(i,4828)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(779),i.e(2048),i.e(1859)]).then(i.bind(i,2048)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[n.Z,o.Z],data:()=>({coverSizes:[{w:400,h:400},{w:300,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:300,h:190}],isPreview:!1,previewData:{},form:{name:"",dateStart:null,dateEnd:null,timeStart:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}]}}),computed:(0,r.rn)("app",["theme"]),methods:{getCoverSize(){return this.coverSizes[this.$route.params.id].w+"*"+this.coverSizes[this.$route.params.id].h+"px"},publish(){console.log(this.form)},preview(){this.previewData=this.form,this.isPreview=!0}}},c=l,d=i(1001),h=i(3453),p=i.n(h),g=i(2102),u=i(9846),m=i(6428),v=i(7047),f=i(2877),b=i(5978),C=(0,d.Z)(c,s,a,!1,null,null,null),S=C.exports;p()(C,{VCol:g.Z,VContainer:u.Z,VIcon:m.Z,VImg:v.Z,VRow:f.Z,VTextField:b.Z})},2012:function(t,e,i){t.exports=i.p+"img/ep_picture.d53e6301.svg"}}]);
//# sourceMappingURL=9944.78071018.js.map