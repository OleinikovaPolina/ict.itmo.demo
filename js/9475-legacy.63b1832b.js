"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9475],{26621:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading&&Object.keys(t.newsOne).length?a("v-container",[t.isPreview?a("div",[a("BaseNews",{attrs:{data:t.previewData}}),a("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):a("div",[a("div",{staticClass:"input-bordered mb-6"},[a("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название новости",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),a("div",{staticClass:"input-bordered mb-6 py-6"},[a("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка новости"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[a("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(42012)}}),t._v(" Выберите изображение обложки или перетащите файл"),a("br"),t._v(" Размер 480*300 ")],1)]),null===t.form.cover&&t.form.coverCroppie?a("a",{staticClass:"img-name text-center",attrs:{href:t.form.coverCroppie,target:"_blank"}},[t._v(t._s(t.form.coverCroppie))]):t._e(),t.form.cover?a("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]),a("div",{staticClass:"input-bordered"},[a("v-checkbox",{staticClass:"input-blue pl-2",attrs:{dark:"dark"===t.theme,dense:"",label:"Добавить в слайдер"},model:{value:t.form.isSlider,callback:function(e){t.$set(t.form,"isSlider",e)},expression:"form.isSlider"}}),t.form.isSlider?a("div",{staticClass:"py-6"},[a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[a("input",{attrs:{id:"sliderImg",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"sliderImg"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(42012)}}),t._v(" Выберите изображение обложки или перетащите файл"),a("br"),t._v(" Размер 1280*544 ")],1)]),!t.form.sliderImg&&t.form.sliderImgCroppie?a("a",{staticClass:"img-name text-center",attrs:{href:t.form.sliderImgCroppie,target:"_blank"}},[t._v(t._s(t.form.sliderImgCroppie))]):t._e(),t.form.sliderImg?a("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.sliderImg.name)+" ")]):t._e()]):t._e()],1),a("div",{staticClass:"px-0 mt-4 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[a("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),a("v-row",{staticClass:"pt-4"},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),a("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата выхода поста"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.datePublish,callback:function(e){t.$set(t.form,"datePublish",e)},expression:"form.datePublish"}})],1),a("v-col",{attrs:{cols:"12",md:"2"}},[a("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время выхода"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timePublish,callback:function(e){t.$set(t.form,"timePublish",e)},expression:"form.timePublish"}})],1)],1),a("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"pl-4 subtitle-color  text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Теги"),a("span",{staticClass:"error--text"},[t._v("*")])]),a("v-autocomplete",{staticClass:"search-input",attrs:{items:t.tags,"item-value":"id","item-text":"name",multiple:"",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":"",chips:"","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[a("BaseChip",{staticClass:"mr-3",attrs:{item:i},scopedSlots:t._u([{key:"chip-btns",fn:function(){return[a("v-btn",{attrs:{icon:"",dark:"","x-small":""},on:{click:function(e){return t.removeTag(i)}}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)]},proxy:!0}],null,!0)})]}}],null,!1,7897401),model:{value:t.form.tagsIds,callback:function(e){t.$set(t.form,"tagsIds",e)},expression:"form.tagsIds"}})],1),a("div",{staticClass:"d-flex pt-6"},[a("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0,"disabled-btn":t.canBePublished()},on:{clickBtnCallback:t.publish}}),a("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),a("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),a("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),a("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):t.loading?a("BaseNotFound"):a("div",{staticClass:"d-flex justify-center fill-height align-center"},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)},r=[],s=i(62032),n=i(16198),o=i(4367),l=(i(35666),i(41539),i(78783),i(33948),i(47941),i(21249),i(40561),i(74916),i(23123),i(54747),i(69826),i(20629)),c=i(22100),d=i(47566),u=i(19522),m={name:"AdminUpdateNewsView",components:{BaseNotFound:function(){return i.e(6643).then(i.bind(i,6643))},DialogCroppieMultipleComponent:function(){return Promise.all([i.e(3548),i.e(1045)]).then(i.bind(i,86229))},DialogCroppieComponent:function(){return Promise.all([i.e(3548),i.e(9945)]).then(i.bind(i,44529))},DialogPreviewComponent:function(){return Promise.all([i.e(3548),i.e(2020)]).then(i.bind(i,74202))},BaseNews:function(){return i.e(1548).then(i.bind(i,41541))},DraggableInputs:function(){return Promise.all([i.e(2739),i.e(9980),i.e(3879),i.e(2082)]).then(i.bind(i,53879))},BaseChip:function(){return i.e(4494).then(i.bind(i,44494))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[c.Z,d.Z,u.Z],data:function(){return{loading:!1,dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",dateStart:null,timeStart:null,datePublish:null,timePublish:null,tagsIds:[],isSlider:!1,sliderImg:null,sliderImgCroppie:null,sliderImgBlob:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]}}},computed:(0,o.Z)((0,o.Z)({},(0,l.rn)("app",["theme"])),(0,l.rn)("news",["tagsCategories","tags","newsOne"])),mounted:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTags();case 2:return e.next=4,t.getNew(t.$route.params.id);case 4:Object.keys(t.newsOne).length&&t.dataToForm(),t.loading=!0;case 6:case"end":return e.stop()}}),e)})))()},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,l.nv)("news",["getTags","getNew"])),(0,l.nv)("admin",["addAttachment","updateNews"])),{},{dataToForm:function(){this.form.id=this.newsOne.id,this.form.title=this.newsOne.title,this.form.dateStart=this.$moment(this.newsOne.date).format("YYYY-MM-DD"),this.form.timeStart=this.$moment(this.newsOne.date).format("HH:mm"),this.form.datePublish=this.$moment(this.newsOne.datePublished).format("YYYY-MM-DD"),this.form.timePublish=this.$moment(this.newsOne.datePublished).format("HH:mm"),this.form.tagsIds=this.newsOne.tags.map((function(t){return t.id})),this.form.coverCroppie=this.newsOne.image.url,this.form.blocks=this.dataToFormBlocks(this.newsOne.blocks),this.count=this.form.blocks.length+1,this.newsOne.slideImage&&(this.form.isSlider=!0,this.form.sliderImgCroppie=this.newsOne.slideImage.url)},canBePublished:function(){var t=!0;this.form.isSlider&&!this.form.sliderImgCroppie&&(t=!1);var e,i=(0,s.Z)(this.form.blocks);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(-1===a.type){t=!1;break}}}catch(r){i.e(r)}finally{i.f()}return!(this.form.coverCroppie&&this.form.title&&this.form.dateStart&&this.form.tagsIds.length&&this.form.blocks.length&&t&&this.form.datePublish&&this.form.timePublish)},removeTag:function(t){var e=this.form.tagsIds.indexOf(t.id);e>=0&&this.form.tagsIds.splice(e,1)},publish:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=Object.assign({},t.form),i.timeStart&&(a=i.timeStart.split(":"),i.dateStart=new Date(i.dateStart),i.dateStart.setHours(parseInt(a[0]),parseInt(a[1]))),i.date=t.$moment(i.dateStart).format(),r=i.timePublish.split(":"),i.datePublish=new Date(i.datePublish),i.datePublish.setHours(parseInt(r[0]),parseInt(r[1])),i.datePublished=t.$moment(i.datePublish).format(),!i.coverBlob){e.next=12;break}return e.next=10,t.addAttachment(i.coverBlob).then((function(t){i.imageId=t.data.id})).catch((function(){return{}}));case 10:e.next=13;break;case 12:i.imageId=t.newsOne.image.id;case 13:if(!i.isSlider||!i.sliderImgBlob){e.next=16;break}return e.next=16,t.addAttachment(i.sliderImgBlob).then((function(t){i.slideImageId=t.data.id})).catch((function(){return{}}));case 16:return i.isSlider||(i.slideImageId=null),e.next=19,t.publishBlocks(i.blocks);case 19:return i.blocks=e.sent,e.next=22,t.updateNews(i);case 22:t.$router.push("/published?typeData=1").then();case 23:case"end":return e.stop()}}),e)})))()},preview:function(){var t=this;this.previewData=Object.assign({},this.form),this.previewData.tags=[],this.previewData.tagsIds.forEach((function(e,i){t.previewData.tags[i]=t.tags.find((function(t){return t.id===e}))})),this.isPreview=!0}})},p=m,h=i(1001),f=i(43453),g=i.n(f),b=i(71835),v=i(63150),C=i(83702),k=i(82102),x=i(99846),w=i(96428),I=i(97047),y=i(90624),_=i(62877),D=i(40314),B=(0,h.Z)(p,a,r,!1,null,null,null),S=B.exports;g()(B,{VAutocomplete:b.Z,VBtn:v.Z,VCheckbox:C.Z,VCol:k.Z,VContainer:x.Z,VIcon:w.Z,VImg:I.Z,VProgressCircular:y.Z,VRow:_.Z,VTextField:D.Z})}}]);
//# sourceMappingURL=9475-legacy.63b1832b.js.map