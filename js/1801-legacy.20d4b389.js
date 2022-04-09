"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1801],{51801:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.blocks}},t._l(t.blocks,(function(e){return i("v-col",{key:e.id,staticClass:"input-bordered mb-6 pa-0 pt-4",staticStyle:{"min-height":"60px"},attrs:{cols:"12",md:t.sizeBlock}},[6===t.sizeBlock||1!==e.type&&3!==e.type?t._e():i("div",{staticClass:"input-bordered-label eye-block app-background pa-0"},[i("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.eyeBlock(e)}}},[i("v-icon",[t._v(" mdi-eye-outline ")])],1)],1),6!==t.sizeBlock?i("div",{staticClass:"input-bordered-label delete-block app-background pa-0"},[i("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return t.deleteBlock(e.id)}}},[i("v-icon",[t._v(" mdi-trash-can-outline ")])],1)],1):t._e(),i("div",{staticClass:"input-bordered-label app-background pa-0"},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[i("div",t._g(t._b({staticClass:"input-border-0 input-blue px-2 py-1 d-flex justify-space-between",staticStyle:{width:"180px"}},"div",a,!1),o),[t._v(" "+t._s(t.getTextType(e))+" "),i("v-icon",{style:{transform:"true"===a["aria-expanded"]?"rotate(180deg)":""},attrs:{color:"#0071B2"}},[t._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[i("v-list",{staticClass:"app-background"},[i("v-radio-group",{staticClass:"ma-0",attrs:{"hide-details":"",value:e.type,dark:"dark"===t.theme},on:{change:function(n){return t.changeTypeBlock(e.id,n)}}},t._l(t.typesInput,(function(t){return i("v-radio",{key:t.id,staticClass:"px-2",attrs:{value:t.id,label:t.text}})})),1)],1)],1)],1),0===e.type?i("vue-editor",{class:{custom:6!==t.sizeBlock},attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}):t._e(),1===e.type?[i("div",{staticClass:"pt-8 px-4"},[i("DraggableInputs",{attrs:{blocks:e.content.blocks,"size-block":6},on:{updateProp:function(t){e.content.blocks=t}}})],1)]:t._e(),2===e.type?[i("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название картинки",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}),i("div",{staticClass:"mx-6 pb-4"},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"img-"+t.sizeBlock+"-"+e.id,type:"file"},on:{change:function(n){t.changeContentImgBlock(e.id,"img",n.target.files[0])}}}),i("label",{staticClass:"d-flex align-center justify-center py-6 px-12 text-center",attrs:{for:"img-"+t.sizeBlock+"-"+e.id},on:{drop:function(n){t.changeContentImgBlock(e.id,"img",n.dataTransfer.files[0])}}},[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}}),t._v(" Выберите изображение или перетащите файл ")],1)])]),e.content.img?i("div",{staticClass:"text-center"},[t._v(" "+t._s(e.content.img.name)+" ")]):t._e()])]:t._e(),3===e.type?[i("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}),i("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[i("v-col",{staticClass:"input-file-container",attrs:{cols:6===t.sizeBlock||t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"images-"+t.sizeBlock+"-"+e.id,type:"file",multiple:""},on:{change:function(n){t.changeContentImagesBlock(e.id,"images",e.content.images.concat(Array.from(n.target.files)))}}}),i("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"images-"+t.sizeBlock+"-"+e.id},on:{drop:function(n){t.changeContentImagesBlock(e.id,"images",e.content.images.concat(Array.from(n.dataTransfer.files)))}}},[i("span",[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:n(42012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),e.content.images.length?i("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:6===t.sizeBlock||t.$vuetify.breakpoint.smAndDown?12:6}},[i("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:e.content.images},on:{change:function(n){t.changeList(e.id,n)}}},t._l(e.content.images,(function(n,o){return i("v-col",{key:o,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[i("div",[t._v(t._s(o+1)+".")]),i("div",{staticClass:"input-slider-img-block px-2 ml-2"},[t._v(" "+t._s(n.name)+" "),i("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(n){return t.deleteContentImgBlock(e.id,o)}}},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)]:t._e(),4===e.type?i("div",[i("div",{staticClass:"ict-border-bottom"},[i("v-textarea",{staticClass:"input-border-0",attrs:{placeholder:"Введите цитату",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}})],1),i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите ФИО человека, должность",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.author,callback:function(n){t.$set(e.content,"author",n)},expression:"element.content.author"}})],1):t._e(),5===e.type?i("v-text-field",{staticClass:"input-border-0",attrs:{placeholder:"Введите подзаголовок",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.content.text,callback:function(n){t.$set(e.content,"text",n)},expression:"element.content.text"}}):t._e()],2)})),1)},o=[],a=n(4367),s=(n(9653),n(69826),n(41539),n(40561),n(21249),n(38862),n(57327),n(74916),n(4723),n(54747),n(20629)),l=n(9980),r=n.n(l),c=n(2739),u={name:"DraggableInputs",components:{draggable:r(),VueEditor:c.bR},props:{blocks:{type:Array,default:null},sizeBlock:{type:Number,default:12}},emits:["updateProp","changeDialog","changeDialogContent"],data:function(){return{customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"]}},computed:(0,a.Z)({typesInput:function(){return 6===this.sizeBlock?[{id:0,text:"Текстовый блок"},{id:2,text:"Изображение"},{id:3,text:"Слайдер"},{id:4,text:"Цитата"},{id:5,text:"Подзаголовок"}]:[{id:0,text:"Текстовый блок"},{id:1,text:"Два блока"},{id:2,text:"Изображение"},{id:3,text:"Слайдер"},{id:4,text:"Цитата"},{id:5,text:"Подзаголовок"}]}},(0,s.rn)("app",{theme:"theme"})),methods:{changeList:function(t,e){var n=this.blocks.find((function(e){return e.id===t})),i=n.content.imagesName.splice(e.moved.oldIndex,1)[0];n.content.imagesName.splice(e.moved.newIndex,0,i),this.changeBlocks(this.blocks.map((function(e){return e.id===t?n:e})))},eyeBlock:function(t){var e=JSON.parse(JSON.stringify(t));this.$emit("changeDialogContent",e),this.$emit("changeDialog",!0)},deleteBlock:function(t){var e=this.blocks.filter((function(e){return e.id!==t}));this.changeBlocks(e)},changeContentImgBlock:function(t,e,n){var i=this.blocks.find((function(e){return e.id===t}));if(i.content.img=n,n.type.match("image.*")){var o=new FileReader;o.onload=function(t){i.content.imgName=t.target.result},o.readAsDataURL(n)}this.changeBlocks(this.blocks.map((function(e){return e.id===t?i:e})))},changeContentImagesBlock:function(t,e,n){var i=this.blocks.find((function(e){return e.id===t}));i.content.images=n,i.content.imagesName=[],n.forEach((function(t){if(t.type.match("image.*")){var e=new FileReader;e.onload=function(t){i.content.imagesName.push(t.target.result)},e.readAsDataURL(t)}})),this.changeBlocks(this.blocks.map((function(e){return e.id===t?i:e})))},deleteContentImgBlock:function(t,e){var n=this.blocks.find((function(e){return e.id===t}));n.content.images.splice(e,1),n.content.imagesName.splice(e,1),this.changeBlocks(this.blocks.map((function(e){return e.id===t?n:e})))},changeBlocks:function(t){this.$emit("updateProp",t)},changeTypeBlock:function(t,e){var n=this.blocks.find((function(e){return e.id===t}));switch(n.type=e,e){case 0:n.content={type:0,text:""};break;case 1:n.content={type:1,blocks:[{id:1e3,type:-1},{id:2e3,type:-1}]};break;case 2:n.content={type:2,img:null,imgName:"",text:""};break;case 3:n.content={type:3,images:[],imagesName:[],text:""};break;case 4:n.content={type:4,text:"",author:""};break;case 5:n.content={type:5,text:""};break;default:n.content={type:-1}}this.changeBlocks(this.blocks.map((function(e){return e.id===t?n:e})))},getTextType:function(t){var e=this.typesInput.find((function(e){return e.id===t.type}));return e?e.text:"Выберите блок"}}},d=u,p=n(1001),h=n(43453),m=n.n(h),f=n(680),g=n(82102),v=n(96428),b=n(97047),k=n(16816),x=n(76768),y=n(73274),C=(n(68309),n(55097)),I=n(70172),B=n(58230),w=n(66210),Z=n(46952),_=n(17352),S=n(89155),$=n(48085),z=n(7764),G=n(4589),D=n(73325),N=n(76290),T=["title"],R=(0,D.Z)(w.Z,Z.Z,S.Z,(0,_.d)("radioGroup"),$.Z),H=R.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return z.Z.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return B.Z.options.computed.computedId.call(this)},hasLabel:B.Z.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return z.Z.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return z.Z.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(C.Z,{on:{click:z.X},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,G.z9)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,(0,y.Z)(t,T));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(I.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput((0,a.Z)({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:(0,N.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),L=(n(2245),n(24622)),V=(0,D.Z)(L.y,B.Z),F=V.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},B.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},B.Z.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=B.Z.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=B.Z.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:L.y.options.methods.onClick},render:function(t){var e=B.Z.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),A=n(55978),E=(0,D.Z)(A.Z),P=E.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return(0,a.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},A.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null==(n=e.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=A.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){A.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),j=(0,p.Z)(d,i,o,!1,null,null,null),O=j.exports;m()(j,{VBtn:f.Z,VCol:g.Z,VIcon:v.Z,VImg:b.Z,VList:k.Z,VMenu:x.Z,VRadio:H,VRadioGroup:F,VTextField:A.Z,VTextarea:P})}}]);
//# sourceMappingURL=1801-legacy.20d4b389.js.map