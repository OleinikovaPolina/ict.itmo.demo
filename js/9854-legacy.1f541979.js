"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9854],{40561:function(e,t,i){var n=i(82109),o=i(17854),a=i(51400),l=i(19303),r=i(26244),s=i(47908),c=i(65417),d=i(86135),p=i(81194),u=p("splice"),m=o.TypeError,f=Math.max,g=Math.min,h=9007199254740991,C="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var i,n,o,p,u,b,v=s(this),x=r(v),k=a(e,x),w=arguments.length;if(0===w?i=n=0:1===w?(i=0,n=x-k):(i=w-2,n=g(f(l(t),0),x-k)),x+i-n>h)throw m(C);for(o=c(v,n),p=0;p<n;p++)u=k+p,u in v&&d(o,p,v[u]);if(o.length=n,i<n){for(p=k;p<x-n;p++)u=p+n,b=p+i,u in v?v[b]=v[u]:delete v[b];for(p=x;p>x-n+i;p--)delete v[p-1]}else if(i>n)for(p=x-n;p>k;p--)u=p+n-1,b=p+i-1,u in v?v[b]=v[u]:delete v[b];for(p=0;p<i;p++)v[p+k]=arguments[p+2];return v.length=x-n+i,o}})},6723:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[e._v(" Статьи ")]),e.isPreview?n("div",[n("BaseStudentsCompetition",{attrs:{"hex-array":e.form.winnersHex,title:e.form.name,subtitle:e.form.title,description:e.form.description}}),n("BaseNews",{attrs:{data:e.previewData}}),n("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(t){e.isPreview=!1}}})],1):n("div",[n("div",{staticClass:"input-bordered mb-6"},[n("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("div",{staticClass:"input-bordered pt-3"},[n("div",{staticClass:"input-bordered-label app-background"},[e._v(" Описание статьи "),n("span",{staticClass:"error--text"},[e._v("*")])]),n("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":e.customToolbar,placeholder:"Введите текст"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),n("div",{staticClass:"text-end mb-6",style:{color:e.cutTegs(e.form.description).length>165?"red":"#0071B2"}},[e._v(" "+e._s(e.cutTegs(e.form.description).length)+"/165 ")]),n("div",{staticClass:"input-bordered mb-6 pt-3"},[n("div",{staticClass:"input-bordered-label app-background"},[e._v(" Победители "),n("span",{staticClass:"error--text"},[e._v("*")])]),n("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),n("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[n("v-col",{staticClass:"input-file-container",attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[n("input",{attrs:{id:"winners",type:"file",accept:"image/*",multiple:""},on:{change:function(t){e.changeContentImagesBlock(e.form.winners.concat(Array.from(t.target.files)))}}}),n("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"winners"},on:{drop:function(t){e.changeContentImagesBlock(e.form.winners.concat(Array.from(t.dataTransfer.files)))}}},[n("span",[n("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(42012)}})],1),e._v(" Выберите изображение или перетащите файл ")])]),e.form.winners.length?n("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6}},[n("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:e.form.winners},on:{change:function(t){e.changeList(t)}}},e._l(e.form.winnersHex,(function(t,i){return n("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[n("div",[e._v(e._s(i+1)+".")]),n("div",{staticClass:"input-slider-img-block px-2 ml-2 d-flex align-center"},[n("v-text-field",{staticClass:"ma-0 input-border-0",attrs:{dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:t.text,callback:function(i){e.$set(t,"text",i)},expression:"hex.text"}}),n("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(t){return e.deleteContentImgBlock(i)}}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):e._e()],1)],1),n("DraggableInputs",{attrs:{blocks:e.form.blocks},on:{changeDialogContent:e.changeDialogContent,changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,deleteBlock:e.deleteBlock,updateBlock:e.updateBlock,beforeCropMultipleInsert:e.beforeCropMultipleInsert}}),n("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:e.addBlock}},[n("v-icon",{attrs:{color:"#0071B2"}},[e._v(" mdi-plus-circle-outline ")]),e._v(" Добавить поле ")],1),n("v-row",{staticClass:"pt-4"},[n("v-col",{attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата начала мероприятия"),n("span",{staticClass:"error--text"},[e._v("*")])]),n("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateStart,callback:function(t){e.$set(e.form,"dateStart",t)},expression:"form.dateStart"}})],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата конца мероприятия ")]),n("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateEnd,callback:function(t){e.$set(e.form,"dateEnd",t)},expression:"form.dateEnd"}})],1)],1),n("div",{staticClass:"d-flex pt-6"},[n("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:e.publish}}),n("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:e.preview}})],1)],1),n("DialogPreviewComponent",{attrs:{dialog:e.dialog,"dialog-content":e.dialogContent},on:{changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,beforeCropMultipleInsertOne:e.beforeCropMultipleInsertOne}}),n("DialogCroppieComponent",{attrs:{dialog:e.dialogCroppie,title:e.dialogCroppieOptions.title,size:e.dialogCroppieOptions.size,"data-img":e.dialogCroppieDataImg,"enable-resize":e.dialogCroppieOptions.enableResize},on:{changeDialog:e.changeDialogCroppie,changeCroppie:e.changeCroppie}}),n("DialogCroppieMultipleComponent",{attrs:{dialog:e.dialogCroppieMultiple,title:e.dialogCroppieMultipleOptions.title,size:e.dialogCroppieMultipleOptions.size,"data-img":e.dialogCroppieMultipleDataImg,"height-img":e.heightImg,"enable-resize":e.dialogCroppieMultipleOptions.enableResize,edit:e.dialogCroppieMultipleEdit},on:{changeDialog:e.changeDialogCroppieMultiple,changeCroppie:e.changeCroppieMultiple}})],1)},o=[],a=(i(41539),i(78783),i(33948),i(74916),i(15306),i(54747),i(4723),i(69600),i(47042),i(23123),i(68309),i(40561),i(20629)),l=i(2739),r=i(9980),s=i.n(r),c=i(22100),d=i(47566),p=i(19522),u={name:"CompetitionComponent",components:{VueEditor:l.bR,draggable:s(),DialogCroppieMultipleComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(3793)]).then(i.bind(i,47852))},DialogCroppieComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(3074)]).then(i.bind(i,75250))},BaseStudentsCompetition:function(){return i.e(4921).then(i.bind(i,14921))},DialogPreviewComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(7198)]).then(i.bind(i,61001))},BaseNews:function(){return i.e(1688).then(i.bind(i,11688))},DraggableInputs:function(){return Promise.all([i.e(2681),i.e(6999),i.e(7557),i.e(8032)]).then(i.bind(i,77557))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[c.Z,d.Z,p.Z],data:function(){return{customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{name:"",description:"",dateStart:null,dateEnd:null,title:"",winners:[],winnersHex:[],blocks:[{id:0,type:-1,content:null}]}}},computed:(0,a.rn)("app",["theme"]),methods:{cutTegs:function(e){var t=/( |<([^>]+)>)/gi;return e.replace(t,"")},publish:function(){console.log(this.form)},preview:function(){this.previewData=this.form,this.isPreview=!0},changeContentImagesBlock:function(e){var t=this;this.form.winnersHex=[],e.forEach((function(e){if(e.type.match("image.*")){var i=new FileReader;i.onload=function(i){t.form.winnersHex.push({img:i.target.result,text:e.name.split(".").slice(0,-1).join(".")})},i.readAsDataURL(e)}})),this.form.winners=e},deleteContentImgBlock:function(e){this.form.winners.splice(e,1),this.form.winnersHex.splice(e,1)},changeList:function(e){var t=this.form.winnersHex.splice(e.moved.oldIndex,1)[0];this.form.winnersHex.splice(e.moved.newIndex,0,t)}}},m=u,f=i(1001),g=i(43453),h=i.n(g),C=i(680),b=i(82102),v=i(99846),x=i(96428),k=i(97047),w=i(62877),B=i(40314),D=(0,f.Z)(m,n,o,!1,null,"06ecc138",null),y=D.exports;h()(D,{VBtn:C.Z,VCol:b.Z,VContainer:v.Z,VIcon:x.Z,VImg:k.Z,VRow:w.Z,VTextField:B.Z})}}]);
//# sourceMappingURL=9854-legacy.1f541979.js.map