"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[3828],{3150:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(5648),l=i(624),a=l.Z,o=i(7352),n=i(2936),r=i(3377),d=i(3536),c=i(6505),h=i(3039),p=i(3325),u=i(1824);const g=(0,p.Z)(s.Z,c.Z,d.Z,h.Z,(0,o.d)("btnToggle"),(0,n.d)("inputValue"));var m=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...c.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return r.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(a,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),l=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:l(this.color,s),e)}})},2102:function(t,e,i){i(7273);var s=i(144),l=i(6290),a=i(4589);const o=["sm","md","lg","xl"],n=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),r=(()=>o.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d=(()=>o.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c={col:Object.keys(n),offset:Object.keys(r),order:Object.keys(d)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const p=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let o="";for(const l in e)o+=String(e[l]);let n=p.get(o);if(!n){let t;for(t in n=[],c)c[t].forEach((i=>{const s=e[i],l=h(t,i,s);l&&n.push(l)}));const i=n.some((t=>t.startsWith("col-")));n.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(o,n)}return t(e.tag,(0,l.ZP)(i,{class:n}),s)}})},3385:function(t,e,i){i.d(e,{Z:function(){return c}});var s=i(6210),l=i(6952),a=i(3377),o=i(2529),n=i(3712),r=i(8085),d=i(3325),c=(0,d.Z)(s.Z,l.Z,a.Z,o.Z,n.Z,r.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return l}});var s=i(6257);function l(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}l("itemGroup")},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),l=i(6286),a=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:l.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,l=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),l=`${l} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:l,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,a.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return l}});var s=i(144);function l(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const a=l();e["Z"]=a},9154:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad&&Object.keys(t.article).length?s("v-container",[s("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Статьи ")]),t.isPreview?s("div",[s("BaseStudentsHackathon",{attrs:{block:{title:t.form.title,description:t.form.description,sliderImagesNames:t.form.sliderImagesNames,sliderText:t.form.sliderText}}}),s("BaseNews",{staticClass:"mt-16",attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),s("div",{staticClass:"input-bordered pt-3"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Описание статьи "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),s("div",{staticClass:"text-end mb-6",style:{color:t.cutTegs(t.form.description).length>165?"red":"#0071B2"}},[t._v(" "+t._s(t.cutTegs(t.form.description).length)+"/165 ")]),s("div",{staticClass:"input-bordered mb-6 pt-3"},[t.form.slider.length?s("div",{staticClass:"input-bordered-label eye-block app-background pa-0"},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return t.eyeBlock(t.form.sliderImagesNames)}}},[s("v-icon",[t._v(" mdi-eye-outline ")])],1)],1):t._e(),s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Слайдер обложка "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.sliderText,callback:function(e){t.$set(t.form,"sliderText",e)},expression:"form.sliderText"}}),s("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[s("v-col",{staticClass:"input-file-container",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"slider",type:"file",multiple:"",accept:"image/*"},on:{change:function(e){t.beforeCropMultiple("slider","Слайдер обложка",Array.from(e.target.files))}}}),s("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"slider"},on:{drop:function(e){t.beforeCropMultiple("slider","Слайдер обложка",Array.from(e.dataTransfer.files))}}},[s("span",[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(2012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),t.form.slider.length?s("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6}},[s("draggable",{staticClass:"d-flex flex-wrap",staticStyle:{width:"100%"},attrs:{list:t.form.slider},on:{change:function(e){t.changeList(e)}}},t._l(t.form.slider,(function(e,i){return s("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",staticStyle:{cursor:"move"},attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"pl-1"},[t._v(" "+t._s(i+1)+". ")]),s("div",{staticClass:"input-slider-img-block px-2 ml-2"},[s("span",[t._v(t._s(e.name))]),s("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(i)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)],1),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),s("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewSliderComponent",{attrs:{dialog:t.dialogSlider,"dialog-content":t.dialogSliderContent},on:{changeDialog:t.changeDialogSlider,beforeCropMultipleOne:t.beforeCropMultipleOne}}),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),s("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):s("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},l=[],a=i(629),o=i(2739),n=i(9980),r=i.n(n),d=i(2100),c=i(9522),h=i(7566),p={name:"HackathonCompetition",components:{VueEditor:o.bR,draggable:r(),DialogPreviewSliderComponent:()=>i.e(9120).then(i.bind(i,9120)),DialogCroppieMultipleComponent:()=>Promise.all([i.e(6229),i.e(8462)]).then(i.bind(i,6229)),BaseStudentsHackathon:()=>i.e(5679).then(i.bind(i,5679)),DialogCroppieComponent:()=>Promise.all([i.e(4529),i.e(17)]).then(i.bind(i,4529)),DialogPreviewComponent:()=>Promise.all([i.e(4202),i.e(9251)]).then(i.bind(i,4202)),BaseNews:()=>i.e(5356).then(i.bind(i,9541)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(3879),i.e(8792)]).then(i.bind(i,3879)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[d.Z,h.Z,c.Z],data:()=>({customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],isPreview:!1,previewData:{},dialogSliderContent:[],dialogSlider:!1,form:{title:"",description:"",slider:[],sliderImagesNames:[],sliderText:"",blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}),computed:{...(0,a.rn)("news",["article"]),...(0,a.rn)("app",["theme"])},async mounted(){await this.getArticle(this.$route.params.id),Object.keys(this.article).length&&this.dataToForm(),this.isLoad=!0},methods:{...(0,a.nv)("news",["getArticle"]),...(0,a.nv)("admin",["addAttachment","updateArticles"]),cutTegs(t){let e=/( |<([^>]+)>)/gi;return t.replace(e,"")},dataToForm(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.dataToFormBlocks(this.article.blocks),this.count=this.form.blocks.length+1;const t=JSON.parse(this.article.description);this.form.sliderText=t.sliderText,this.form.description=t.description,this.form.sliderImagesNames=t.sliderImagesNames,this.form.slider=[];let e=1;for(let i of t.sliderImagesNames)this.form.slider.push({name:e+" img",id:e}),e+=1,i.original=i.croppie,i.blob=null},async publish(){let t=Object.assign({},this.form);t.page=this.article.page;for(let e of t.sliderImagesNames)e["blob"]&&await this.addAttachment(e["blob"]).then((t=>{e.croppie=t.data.url})).catch((()=>({}))),delete e.original,delete e["blob"];t.description=JSON.stringify({description:t.description,sliderImagesNames:t.sliderImagesNames,sliderText:t.sliderText}),t.blocks=await this.publishBlocks(t.blocks),await this.updateArticles(t),this.$router.push("/favorites").then()},preview(){this.previewData=this.form,this.isPreview=!0},deleteContentImgBlock(t){this.form.slider.splice(t,1),this.form.sliderImagesNames.splice(t,1)},changeList(t){let e=this.form.sliderImagesNames.splice(t.moved.oldIndex,1)[0];this.form.sliderImagesNames.splice(t.moved.newIndex,0,e)},changeDialogSliderContent(t){this.dialogSliderContent=t},changeDialogSlider(t){this.dialogSlider=t},eyeBlock(t){this.updateBlock(),this.changeDialogSliderContent(t),this.changeDialogSlider(!0)}}},u=p,g=i(1001),m=i(3453),f=i.n(m),b=i(3150),v=i(2102),C=i(9846),x=i(6428),k=i(7047),y=i(624),B=i(314),S=(0,g.Z)(u,s,l,!1,null,"ab1d5200",null),$=S.exports;f()(S,{VBtn:b.Z,VCol:v.Z,VContainer:C.Z,VIcon:x.Z,VImg:k.Z,VProgressCircular:y.Z,VTextField:B.Z})}}]);
//# sourceMappingURL=3828.7095f628.js.map