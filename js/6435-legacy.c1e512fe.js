"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6435],{5391:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.isPreview?i("div",[i("BaseNews",{attrs:{data:t.previewData}}),i("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):i("div",[i("div",{staticClass:"d-flex pb-6"},[i("BaseButtonOutlined",{staticClass:"rounded-r-0",attrs:{text:"Анонсы",active:0===t.typeData,"click-btn":!0},on:{clickBtnCallback:function(e){return t.changeTypeData(0)}}}),i("BaseButtonOutlined",{staticClass:"rounded-l-0 ml-2",attrs:{text:"Новости",active:1===t.typeData,"click-btn":!0},on:{clickBtnCallback:function(e){return t.changeTypeData(1)}}})],1),i("div",{staticClass:"input-bordered mb-6"},[i("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название "+(1===t.typeData?"новости":"анонса"),outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),1===t.typeData?i("div",{staticClass:"input-bordered mb-6 py-6"},[i("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка новости"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.target.files[0])}}}),i("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.dataTransfer.files[0])}}},[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:a(42012)}}),t._v(" Выберите изображение обложки или перетащите файл"),i("br"),t._v(" Размер 480*300 ")],1)]),t.form.cover?i("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]):t._e(),i("div",{staticClass:"input-bordered"},[i("v-checkbox",{staticClass:"input-blue pl-2",attrs:{dark:"dark"===t.theme,dense:"",label:"Добавить в слайдер"},model:{value:t.form.isSlider,callback:function(e){t.$set(t.form,"isSlider",e)},expression:"form.isSlider"}}),t.form.isSlider?i("div",{staticClass:"py-6"},[i("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[i("input",{attrs:{id:"sliderImg",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.target.files[0])}}}),i("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"sliderImg"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.dataTransfer.files[0])}}},[i("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:a(42012)}}),t._v(" Выберите изображение обложки или перетащите файл"),i("br"),t._v(" Размер 1280*544 ")],1)]),t.form.sliderImg?i("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.sliderImg.name)+" ")]):t._e()]):t._e()],1),i("div",{staticClass:"px-0 mt-4 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[i("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),i("v-row",{staticClass:"pt-4"},[i("v-col",{attrs:{cols:"12",md:"3"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),0===t.typeData?i("v-col",{attrs:{cols:"12",md:"3"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата конца мероприятия ")]),i("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateEnd,callback:function(e){t.$set(t.form,"dateEnd",e)},expression:"form.dateEnd"}})],1):t._e(),i("v-col",{attrs:{cols:"12",md:"2"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),i("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"3"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата выхода поста"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.datePublish,callback:function(e){t.$set(t.form,"datePublish",e)},expression:"form.datePublish"}})],1),i("v-col",{attrs:{cols:"12",md:"2"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время выхода"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timePublish,callback:function(e){t.$set(t.form,"timePublish",e)},expression:"form.timePublish"}})],1)],1),0===t.typeData?i("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"4"}},[i("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Место проведения"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("v-text-field",{staticClass:"search-input",attrs:{placeholder:"Введите место мероприятия",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}})],1):t._e(),i("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"4"}},[i("div",{staticClass:"pl-4 subtitle-color  text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Теги"),i("span",{staticClass:"error--text"},[t._v("*")])]),i("v-autocomplete",{staticClass:"search-input",attrs:{items:t.tags,"item-value":"id","item-text":"name",multiple:"",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":"",chips:"","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[i("BaseChip",{staticClass:"mr-3",attrs:{item:a},scopedSlots:t._u([{key:"chip-btns",fn:function(){return[i("v-btn",{attrs:{icon:"",dark:"","x-small":""},on:{click:function(e){return t.removeTag(a)}}},[i("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)]},proxy:!0}],null,!0)})]}}],null,!1,7897401),model:{value:t.form.tagsIds,callback:function(e){t.$set(t.form,"tagsIds",e)},expression:"form.tagsIds"}})],1),i("div",{staticClass:"d-flex pt-6"},[i("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0,"disabled-btn":t.canBePublished()},on:{clickBtnCallback:t.publish}}),i("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),i("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),i("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),i("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1)},r=[],s=a(62032),n=a(16198),l=a(4367),o=(a(35666),a(41539),a(78783),a(33948),a(40561),a(74916),a(23123),a(54747),a(69826),a(20629)),c=a(22100),d=a(47566),u=a(19522),p={name:"AdminCreateEntryView",components:{DialogCroppieMultipleComponent:function(){return Promise.all([a.e(3548),a.e(1045)]).then(a.bind(a,86229))},DialogCroppieComponent:function(){return Promise.all([a.e(3548),a.e(9945)]).then(a.bind(a,44529))},DialogPreviewComponent:function(){return Promise.all([a.e(3548),a.e(4518)]).then(a.bind(a,38016))},BaseNews:function(){return a.e(5583).then(a.bind(a,79436))},DraggableInputs:function(){return Promise.all([a.e(2739),a.e(9980),a.e(918),a.e(2082)]).then(a.bind(a,70918))},BaseChip:function(){return a.e(4494).then(a.bind(a,44494))},BaseButtonOutlined:function(){return a.e(2149).then(a.bind(a,2149))},BaseButton:function(){return a.e(1992).then(a.bind(a,1992))}},mixins:[c.Z,d.Z,u.Z],data:function(){return{dialog:!1,dialogContent:{},typeData:0,isPreview:!1,previewData:{},form:{title:"",dateStart:null,dateEnd:null,timeStart:null,datePublish:null,timePublish:null,place:"",tagsIds:[],isSlider:!1,sliderImg:null,sliderImgCroppie:null,sliderImgBlob:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]}}},computed:(0,l.Z)((0,l.Z)({},(0,o.rn)("app",["theme"])),(0,o.rn)("news",["tagsCategories","tags"])),mounted:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTags();case 2:case"end":return e.stop()}}),e)})))()},methods:(0,l.Z)((0,l.Z)((0,l.Z)({},(0,o.nv)("news",["getTags"])),(0,o.nv)("admin",["addAttachment","addNews","addAnnouncement"])),{},{canBePublished:function(){var t=!0;1!==this.typeData||this.form.cover||(t=!1),0!==this.typeData||this.form.place||(t=!1),this.form.isSlider&&!this.form.sliderImg&&(t=!1);var e,a=(0,s.Z)(this.form.blocks);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(-1===i.type){t=!1;break}}}catch(r){a.e(r)}finally{a.f()}return!(this.form.title&&this.form.dateStart&&this.form.tagsIds.length&&this.form.blocks.length&&t&&this.form.datePublish&&this.form.timePublish)},changeTypeData:function(t){this.typeData=t},removeTag:function(t){var e=this.form.tagsIds.indexOf(t.id);e>=0&&this.form.tagsIds.splice(e,1)},publish:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=Object.assign({},t.form),a.timeStart&&(i=a.timeStart.split(":"),a.dateStart=new Date(a.dateStart),a.dateStart.setHours(parseInt(i[0]),parseInt(i[1]))),a.dateStart=t.$moment(a.dateStart).format(),0===t.typeData&&a.dateEnd&&(a.dateEnd=t.$moment(a.dateEnd).format()),1===t.typeData&&(a.date=a.dateStart),r=a.timePublish.split(":"),a.datePublish=new Date(a.datePublish),a.datePublish.setHours(parseInt(r[0]),parseInt(r[1])),a.datePublished=t.$moment(a.datePublish).format(),1!==t.typeData){e.next=12;break}return e.next=12,t.addAttachment(a.coverBlob).then((function(t){a.imageId=t.data.id})).catch((function(){return{}}));case 12:if(!a.isSlider||!a.sliderImgBlob){e.next=15;break}return e.next=15,t.addAttachment(a.sliderImgBlob).then((function(t){a.slideImageId=t.data.id})).catch((function(){return{}}));case 15:return e.next=17,t.publishBlocks(a.blocks);case 17:if(a.blocks=e.sent,1!==t.typeData){e.next=21;break}return e.next=21,t.addNews(a);case 21:if(0!==t.typeData){e.next=24;break}return e.next=24,t.addAnnouncement(a);case 24:t.$router.push("/published").then();case 25:case"end":return e.stop()}}),e)})))()},preview:function(){var t=this;this.previewData=Object.assign({},this.form),this.previewData.tags=[],this.previewData.tagsIds.forEach((function(e,a){t.previewData.tags[a]=t.tags.find((function(t){return t.id===e}))})),this.isPreview=!0}})},m=p,f=a(1001),h=a(43453),v=a.n(h),b=a(71835),g=a(63150),C=a(83702),k=a(82102),x=a(99846),y=a(96428),D=a(97047),w=a(62877),I=a(40314),B=(0,f.Z)(m,i,r,!1,null,null,null),_=B.exports;v()(B,{VAutocomplete:b.Z,VBtn:g.Z,VCheckbox:C.Z,VCol:k.Z,VContainer:x.Z,VIcon:y.Z,VImg:D.Z,VRow:w.Z,VTextField:I.Z})}}]);
//# sourceMappingURL=6435-legacy.c1e512fe.js.map