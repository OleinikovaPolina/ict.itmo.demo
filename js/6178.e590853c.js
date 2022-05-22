"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6178],{4862:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[e._v(" Мероприятия ")]),e.isPreview?a("div",[a("BaseNews",{staticClass:"mt-16",attrs:{data:e.previewData}}),a("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(t){e.isPreview=!1}}})],1):a("div",[a("div",{staticClass:"input-bordered mb-6"},[a("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("div",{staticClass:"input-bordered mb-6 py-6"},[a("div",{staticClass:"input-bordered-label app-background"},[e._v(" Обложка мероприятия "),a("span",{staticClass:"error--text"},[e._v("*")])]),a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[a("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(t){e.beforeCrop("cover",e.coverSizes[e.$route.params.id],"Обложка мероприятия",t.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{drop:function(t){e.beforeCrop("cover",e.coverSizes[e.$route.params.id],"Обложка мероприятия",t.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),e._v(" Выберите изображение обложки или перетащите файл"),a("br"),e._v(" Размер "+e._s(e.getCoverSize())+" ")],1)]),e.form.cover?a("div",{staticClass:"text-center"},[e._v(" "+e._s(e.form.cover.name)+" ")]):e._e()]),a("DraggableInputs",{attrs:{blocks:e.form.blocks},on:{changeDialogContent:e.changeDialogContent,changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,deleteBlock:e.deleteBlock,updateBlock:e.updateBlock,beforeCropMultipleInsert:e.beforeCropMultipleInsert}}),a("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:e.addBlock}},[a("v-icon",{attrs:{color:"#0071B2"}},[e._v(" mdi-plus-circle-outline ")]),e._v(" Добавить поле ")],1),e.haveDates()?a("v-row",{staticClass:"pt-4"},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата начала мероприятия"),a("span",{staticClass:"error--text"},[e._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateStart,callback:function(t){e.$set(e.form,"dateStart",t)},expression:"form.dateStart"}})],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата конца мероприятия ")]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateEnd,callback:function(t){e.$set(e.form,"dateEnd",t)},expression:"form.dateEnd"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Время начала ")]),a("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.timeStart,callback:function(t){e.$set(e.form,"timeStart",t)},expression:"form.timeStart"}})],1)],1):e._e(),a("div",{staticClass:"d-flex pt-6"},[a("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:e.publish}}),a("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:e.preview}})],1)],1),a("DialogPreviewComponent",{attrs:{dialog:e.dialog,"dialog-content":e.dialogContent},on:{changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,beforeCropMultipleInsertOne:e.beforeCropMultipleInsertOne}}),a("DialogCroppieComponent",{attrs:{dialog:e.dialogCroppie,title:e.dialogCroppieOptions.title,size:e.dialogCroppieOptions.size,"data-img":e.dialogCroppieDataImg,"enable-resize":e.dialogCroppieOptions.enableResize},on:{changeDialog:e.changeDialogCroppie,changeCroppie:e.changeCroppie}}),a("DialogCroppieMultipleComponent",{attrs:{dialog:e.dialogCroppieMultiple,title:e.dialogCroppieMultipleOptions.title,size:e.dialogCroppieMultipleOptions.size,"data-img":e.dialogCroppieMultipleDataImg,"height-img":e.heightImg,"enable-resize":e.dialogCroppieMultipleOptions.enableResize,edit:e.dialogCroppieMultipleEdit},on:{changeDialog:e.changeDialogCroppieMultiple,changeCroppie:e.changeCroppieMultiple}})],1)},o=[],l=i(629),r=i(2100),s=i(7566),n=i(9522),p={name:"HackathonCompetition",components:{DialogCroppieMultipleComponent:()=>Promise.all([i.e(7852),i.e(5835)]).then(i.bind(i,7852)),DialogCroppieComponent:()=>Promise.all([i.e(5250),i.e(8192)]).then(i.bind(i,5250)),DialogPreviewComponent:()=>Promise.all([i.e(1001),i.e(5375)]).then(i.bind(i,3371)),BaseNews:()=>i.e(1688).then(i.bind(i,1688)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(779),i.e(7557),i.e(1859)]).then(i.bind(i,7557)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[r.Z,s.Z,n.Z],data:()=>({coverSizes:[{w:400,h:400},{w:300,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:300,h:190}],isPreview:!1,previewData:{},form:{name:"",dateStart:null,dateEnd:null,timeStart:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}]}}),computed:(0,l.rn)("app",["theme"]),methods:{haveDates(){return 190!==this.coverSizes[this.$route.params.id].w},getCoverSize(){return this.coverSizes[this.$route.params.id].w+"*"+this.coverSizes[this.$route.params.id].h+"px"},publish(){console.log(this.form)},preview(){this.previewData=this.form,this.isPreview=!0}}},c=p,d=i(1001),u=i(3453),m=i.n(u),h=i(2102),v=i(9846),g=i(6428),C=i(7047),b=i(2877),f=i(314),k=(0,d.Z)(c,a,o,!1,null,null,null),x=k.exports;m()(k,{VCol:h.Z,VContainer:v.Z,VIcon:g.Z,VImg:C.Z,VRow:b.Z,VTextField:f.Z})}}]);
//# sourceMappingURL=6178.e590853c.js.map