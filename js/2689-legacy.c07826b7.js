"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2689],{19944:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Мероприятия ")]),t.isPreview?a("div",[a("BaseNews",{staticClass:"mt-16",attrs:{data:t.previewData}}),a("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):a("div",[a("div",{staticClass:"input-bordered mb-6"},[a("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("div",{staticClass:"input-bordered mb-6 py-6"},[a("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка мероприятия "),a("span",{staticClass:"error--text"},[t._v("*")])]),a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[a("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",t.coverSizes[t.$route.params.id],"Обложка мероприятия",e.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{drop:function(e){t.beforeCrop("cover",t.coverSizes[t.$route.params.id],"Обложка мероприятия",e.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(42012)}}),t._v(" Выберите изображение обложки или перетащите файл"),a("br"),t._v(" Размер "+t._s(t.getCoverSize())+" ")],1)]),t.form.cover?a("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]),a("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock}}),a("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[a("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),a("v-row",{staticClass:"pt-4"},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата конца мероприятия ")]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateEnd,callback:function(e){t.$set(t.form,"dateEnd",e)},expression:"form.dateEnd"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),a("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),a("div",{staticClass:"d-flex pt-6"},[a("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),a("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),a("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert}}),a("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}})],1)},o=[],n=(i(41539),i(78783),i(33948),i(20629)),r=i(22100),s=i(47566),l={name:"HackathonCompetition",components:{DialogCroppieComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(8019)]).then(i.bind(i,16581))},DialogPreviewComponent:function(){return Promise.all([i.e(680),i.e(2681),i.e(3548),i.e(5920)]).then(i.bind(i,71288))},BaseNews:function(){return i.e(4828).then(i.bind(i,64828))},DraggableInputs:function(){return Promise.all([i.e(680),i.e(2681),i.e(6999),i.e(779),i.e(2048),i.e(8894)]).then(i.bind(i,52048))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[r.Z,s.Z],data:function(){return{coverSizes:[{w:400,h:400},{w:300,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:190,h:190},{w:300,h:190}],isPreview:!1,previewData:{},form:{name:"",dateStart:null,dateEnd:null,timeStart:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}]}}},computed:(0,n.rn)("app",["theme"]),methods:{getCoverSize:function(){return this.coverSizes[this.$route.params.id].w+"*"+this.coverSizes[this.$route.params.id].h+"px"},publish:function(){console.log(this.form)},preview:function(){this.previewData=this.form,this.isPreview=!0}}},c=l,d=i(1001),p=i(43453),u=i.n(p),m=i(82102),v=i(99846),f=i(96428),h=i(97047),b=i(62877),C=i(55978),g=(0,d.Z)(c,a,o,!1,null,null,null),k=g.exports;u()(g,{VCol:m.Z,VContainer:v.Z,VIcon:f.Z,VImg:h.Z,VRow:b.Z,VTextField:C.Z})}}]);
//# sourceMappingURL=2689-legacy.c07826b7.js.map