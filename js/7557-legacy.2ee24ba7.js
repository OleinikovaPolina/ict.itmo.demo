"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7557],{77557:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.blocks}},t._l(t.blocks,(function(e){return i("v-col",{key:e.id,staticClass:"input-bordered mb-6 pa-0 pt-4",staticStyle:{"min-height":"60px",cursor:"move"},attrs:{cols:"12"}},[1!==e.type&&3!==e.type||3===e.type&&0===e.content.imagesName.length?t._e():i("div",{staticClass:"input-bordered-label eye-block app-background pa-0"},[i("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.eyeBlock(e)}}},[i("v-icon",[t._v(" mdi-eye-outline ")])],1)],1),i("div",{staticClass:"input-bordered-label delete-block app-background pa-0"},[i("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.deleteBlock(e.id)}}},[i("v-icon",[t._v(" mdi-trash-can-outline ")])],1)],1),i("div",{staticClass:"input-bordered-label app-background pa-0"},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,o=n.attrs;return[i("div",t._g(t._b({staticClass:"input-border-0 input-blue px-2 py-1 d-flex justify-space-between",staticStyle:{width:"180px"}},"div",o,!1),a),[t._v(" "+t._s(t.getTextType(e))+" "),i("v-icon",{style:{transform:"true"===o["aria-expanded"]?"rotate(180deg)":""},attrs:{color:"#0071B2"}},[t._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[i("v-list",{staticClass:"app-background"},[i("v-radio-group",{staticClass:"ma-0",attrs:{"hide-details":"",value:e.type,dark:"dark"===t.theme},on:{change:function(n){return t.changeTypeBlock(e,n)}}},t._l(t.typesInput,(function(t){return i("v-radio",{key:t.id,staticClass:"px-2",attrs:{value:t.id,label:t.text}})})),1)],1)],1)],1),0===e.type?i("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}):t._e(),1===e.type?[i("div",{staticClass:"pt-8 px-4"},[i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:e.content.blocks}},t._l(e.content.blocks,(function(a,o){return i("v-col",{key:a.id,class:t.$vuetify.breakpoint.mdAndUp?o%2===0?"pl-0":"pr-0":"px-0",attrs:{cols:"12",md:"6"}},[i("div",{staticClass:"input-bordered mb-3",staticStyle:{"min-height":"60px"}},[i("div",{staticClass:"input-bordered-label app-background pa-0"},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("div",t._g(t._b({staticClass:"input-border-0 input-blue px-2 py-1 d-flex justify-space-between",staticStyle:{width:"180px"}},"div",o,!1),n),[t._v(" "+t._s(t.getTextType(a))+" "),i("v-icon",{style:{transform:"true"===o["aria-expanded"]?"rotate(180deg)":""},attrs:{color:"#0071B2"}},[t._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[i("v-list",{staticClass:"app-background"},[i("v-radio-group",{staticClass:"ma-0",attrs:{"hide-details":"",value:a.type,dark:"dark"===t.theme},on:{change:function(e){return t.changeTypeBlock(a,e)}}},t._l(t.typesInput.filter((function(t){return 1!==t.id})),(function(t){return i("v-radio",{key:t.id,staticClass:"px-2",attrs:{value:t.id,label:t.text}})})),1)],1)],1)],1),0===a.type?i("vue-editor",{attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:a.content.text,callback:function(e){t.$set(a.content,"text",e)},expression:"element2.content.text"}}):t._e(),2===a.type?[i("v-text-field",{staticClass:"mx-6 mt-6 mb-2 input-light-blue",attrs:{placeholder:"Название картинки",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:a.content.text,callback:function(e){t.$set(a.content,"text",e)},expression:"element2.content.text"}}),i("div",{staticClass:"mx-6 pb-4"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"img-6-"+a.id+"-"+e.id,type:"file",accept:"image/*"},on:{change:function(e){t.changeContentImgBlock(a,e.target.files[0])}}}),i("label",{staticClass:"d-flex align-center justify-center py-6 px-12 text-center",attrs:{for:"img-6-"+a.id+"-"+e.id},on:{drop:function(e){t.changeContentImgBlock(a,e.dataTransfer.files[0])}}},[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}}),t._v(" Выберите изображение или перетащите файл ")],1)])]),a.content.img?i("div",{staticClass:"text-center"},[t._v(" "+t._s(a.content.img.name)+" ")]):t._e()])]:t._e(),3===a.type?[i("v-text-field",{staticClass:"mx-6 mt-6 mb-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:a.content.text,callback:function(e){t.$set(a.content,"text",e)},expression:"element2.content.text"}}),i("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[i("v-col",{staticClass:"input-file-container",attrs:{cols:"12"},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"images-6-"+a.id+"-"+e.id,type:"file",accept:"image/*",multiple:""},on:{change:function(e){t.changeContentImagesBlock(a,Array.from(e.target.files))}}}),i("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"images-6-"+a.id+"-"+e.id},on:{drop:function(e){t.changeContentImagesBlock(a,Array.from(e.dataTransfer.files))}}},[i("span",[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),a.content.images.length?i("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:"12"}},[i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:a.content.images},on:{change:function(e){t.changeList(a,e)}}},t._l(a.content.images,(function(e,n){return i("v-col",{key:n,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[i("div",[t._v(t._s(n+1)+".")]),i("div",{staticClass:"input-slider-img-block px-2 ml-2"},[t._v(" "+t._s(e.name)+" "),i("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(a,n)}}},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)]:t._e(),4===a.type?i("div",[i("div",{staticClass:"ict-border-bottom"},[i("v-textarea",{staticClass:"input-border-0",attrs:{placeholder:"Введите цитату",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:a.content.text,callback:function(e){t.$set(a.content,"text",e)},expression:"element2.content.text"}})],1),i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите ФИО человека, должность",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:a.content.author,callback:function(e){t.$set(a.content,"author",e)},expression:"element2.content.author"}})],1):t._e(),5===a.type?i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите подзаголовок",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:a.content.text,callback:function(e){t.$set(a.content,"text",e)},expression:"element2.content.text"}}):t._e()],2)])})),1)],1)]:t._e(),2===e.type?[i("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название картинки",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}),i("div",{staticClass:"mx-6 pb-4"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"img-"+t.sizeBlock+"-"+e.id,type:"file",accept:"image/*"},on:{change:function(n){t.changeContentImgBlock(e,n.target.files[0])}}}),i("label",{staticClass:"d-flex align-center justify-center py-6 px-12 text-center",attrs:{for:"img-"+t.sizeBlock+"-"+e.id},on:{drop:function(n){t.changeContentImgBlock(e,n.dataTransfer.files[0])}}},[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}}),t._v(" Выберите изображение или перетащите файл ")],1)])]),e.content.img?i("div",{staticClass:"text-center"},[t._v(" "+t._s(e.content.img.name)+" ")]):t._e()])]:t._e(),3===e.type?[i("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}),i("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[i("v-col",{staticClass:"input-file-container",attrs:{cols:6===t.sizeBlock||t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"images-"+t.sizeBlock+"-"+e.id,type:"file",accept:"image/*",multiple:""},on:{change:function(n){t.changeContentImagesBlock(e,Array.from(n.target.files))}}}),i("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"images-"+t.sizeBlock+"-"+e.id},on:{drop:function(n){t.changeContentImagesBlock(e,Array.from(n.dataTransfer.files))}}},[i("span",[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),e.content.images.length?i("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:6===t.sizeBlock||t.$vuetify.breakpoint.smAndDown?12:6}},[i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:e.content.images},on:{change:function(n){t.changeList(e,n)}}},t._l(e.content.images,(function(n,a){return i("v-col",{key:a,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[i("div",[t._v(t._s(a+1)+".")]),i("div",{staticClass:"input-slider-img-block px-2 ml-2"},[t._v(" "+t._s(n.name)+" "),i("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(n){return t.deleteContentImgBlock(e,a)}}},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)]:t._e(),4===e.type?i("div",[i("div",{staticClass:"ict-border-bottom"},[i("v-textarea",{staticClass:"input-border-0",attrs:{placeholder:"Введите цитату",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}})],1),i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите ФИО человека, должность",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.author,callback:function(n){t.$set(e.content,"author",n)},expression:"element.content.author"}})],1):t._e(),5===e.type?i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите подзаголовок",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}):t._e()],2)})),1)},a=[],o=n(4367),s=(n(9653),n(40561),n(74916),n(4723),n(69826),n(41539),n(20629)),l=n(9980),r=n.n(l),c=n(2739),d={name:"DraggableInputs",components:{draggable:r(),VueEditor:c.bR},props:{blocks:{type:Array,default:null},sizeBlock:{type:Number,default:12}},emits:["beforeCropMultipleInsert","updateBlock","deleteBlock","changeDialog","changeDialogContent","beforeCropInsert"],data:function(){return{customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],typesInput:[{id:0,text:"Текстовый блок"},{id:1,text:"Два блока"},{id:2,text:"Изображение"},{id:3,text:"Слайдер"},{id:4,text:"Цитата"},{id:5,text:"Подзаголовок"}]}},computed:(0,o.Z)({},(0,s.rn)("app",{theme:"theme"})),methods:{changeList:function(t,e){var n=t.content.imagesName.splice(e.moved.oldIndex,1)[0];t.content.imagesName.splice(e.moved.newIndex,0,n)},eyeBlock:function(t){this.$emit("updateBlock"),this.$emit("changeDialogContent",t),this.$emit("changeDialog",!0)},deleteBlock:function(t){this.$emit("deleteBlock",t)},changeContentImgBlock:function(t,e){var n=this;if(t.content.img=e,e.type.match("image.*")){var i=new FileReader;i.onload=function(e){t.content.imgName.original=e.target.result,t.content.imgName.croppie=e.target.result},i.readAsDataURL(e)}setTimeout((function(){n.$emit("beforeCropInsert",t)}),300)},changeContentImagesBlock:function(t,e){this.$emit("beforeCropMultipleInsert",t,e)},deleteContentImgBlock:function(t,e){t.content.images.splice(e,1),t.content.imagesName.splice(e,1)},changeTypeBlock:function(t,e){switch(t.type=e,e){case 0:t.content={type:0,text:""};break;case 1:t.content={type:1,blocks:[{id:1e3,type:-1},{id:2e3,type:-1}]};break;case 2:t.content={type:2,img:null,imgName:{original:"",croppie:"",blob:null},text:""};break;case 3:t.content={type:3,images:[],imagesName:[],text:""};break;case 4:t.content={type:4,text:"",author:""};break;case 5:t.content={type:5,text:""};break;default:t.content={type:-1}}this.$emit("updateBlock")},getTextType:function(t){var e=this.typesInput.find((function(e){return e.id===t.type}));return e?e.text:"Выберите блок"}}},u=d,p=n(1001),h=n(43453),m=n.n(h),f=n(680),g=n(82102),v=n(96428),x=n(97047),b=n(16816),k=n(76768),y=n(73274),C=(n(68309),n(55097)),_=n(70172),I=n(58230),w=n(66210),B=n(46952),$=n(17352),Z=n(89155),S=n(48085),T=n(7764),D=n(4589),G=n(73325),z=n(76290),N=["title"],R=(0,G.Z)(w.Z,B.Z,Z.Z,(0,$.d)("radioGroup"),S.Z),A=R.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return(0,o.Z)((0,o.Z)({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return T.Z.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return I.Z.options.computed.computedId.call(this)},hasLabel:I.Z.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return T.Z.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return T.Z.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(C.Z,{on:{click:T.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,D.z9)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,(0,y.Z)(t,N));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput((0,o.Z)({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:(0,z.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),H=(n(2245),n(24622)),L=(0,G.Z)(H.y,I.Z),V=L.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return(0,o.Z)((0,o.Z)({},I.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},I.Z.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=I.Z.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=I.Z.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:H.y.options.methods.onClick},render:function(t){var e=I.Z.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),F=n(40314),j=(0,G.Z)(F.Z),E=j.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return(0,o.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},F.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null==(n=e.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=F.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){F.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),M=(0,p.Z)(u,i,a,!1,null,null,null),K=M.exports;m()(M,{VBtn:f.Z,VCol:g.Z,VIcon:v.Z,VImg:x.Z,VList:b.Z,VMenu:k.Z,VRadio:A,VRadioGroup:V,VTextField:F.Z,VTextarea:E})}}]);
//# sourceMappingURL=7557-legacy.2ee24ba7.js.map