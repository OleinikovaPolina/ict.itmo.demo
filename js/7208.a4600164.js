"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7208],{5037:function(t,e,i){i.r(e),i.d(e,{default:function(){return D}});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading&&Object.keys(t.newsOne).length?o("v-container",[t.isPreview?o("div",[o("BaseNews",{attrs:{data:t.previewData}}),o("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):o("div",[o("div",{staticClass:"input-bordered mb-6"},[o("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название новости",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),o("div",{staticClass:"input-bordered mb-6 py-6"},[o("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка новости"),o("span",{staticClass:"error--text"},[t._v("*")])]),o("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[o("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.target.files[0])}}}),o("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.dataTransfer.files[0])}}},[o("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),t._v(" Выберите изображение обложки или перетащите файл"),o("br"),t._v(" Размер 480*300 ")],1)]),t.form.cover?o("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]),o("div",{staticClass:"input-bordered"},[o("v-checkbox",{staticClass:"input-blue pl-2",attrs:{dark:"dark"===t.theme,dense:"",label:"Добавить в слайдер"},model:{value:t.form.isSlider,callback:function(e){t.$set(t.form,"isSlider",e)},expression:"form.isSlider"}}),t.form.isSlider?o("div",{staticClass:"py-6"},[o("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[o("input",{attrs:{id:"sliderImg",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:400},"Слайдер",e.target.files[0])}}}),o("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"sliderImg"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:400},"Слайдер",e.dataTransfer.files[0])}}},[o("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),t._v(" Выберите изображение обложки или перетащите файл"),o("br"),t._v(" Размер 1140*500 ")],1)]),t.form.sliderImg?o("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.sliderImg.name)+" ")]):t._e()]):t._e()],1),o("div",{staticClass:"px-0 mt-4 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[o("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),o("v-row",{staticClass:"pt-4"},[o("v-col",{attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),o("span",{staticClass:"error--text"},[t._v("*")])]),o("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),o("v-col",{attrs:{cols:"12",md:"2"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),o("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата выхода поста"),o("span",{staticClass:"error--text"},[t._v("*")])]),o("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.datePublish,callback:function(e){t.$set(t.form,"datePublish",e)},expression:"form.datePublish"}})],1),o("v-col",{attrs:{cols:"12",md:"2"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время выхода"),o("span",{staticClass:"error--text"},[t._v("*")])]),o("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timePublish,callback:function(e){t.$set(t.form,"timePublish",e)},expression:"form.timePublish"}})],1)],1),o("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"4"}},[o("div",{staticClass:"pl-4 subtitle-color  text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Теги"),o("span",{staticClass:"error--text"},[t._v("*")])]),o("v-autocomplete",{staticClass:"search-input",attrs:{items:t.tags,"item-value":"id","item-text":"name",multiple:"",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":"",chips:"","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[o("BaseChip",{staticClass:"mr-3",attrs:{item:i},scopedSlots:t._u([{key:"chip-btns",fn:function(){return[o("v-btn",{attrs:{icon:"",dark:"","x-small":""},on:{click:function(e){return t.removeTag(i)}}},[o("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)]},proxy:!0}],null,!0)})]}}],null,!1,7897401),model:{value:t.form.tagsIds,callback:function(e){t.$set(t.form,"tagsIds",e)},expression:"form.tagsIds"}})],1),o("div",{staticClass:"d-flex pt-6"},[o("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0,"disabled-btn":t.canBePublished()},on:{clickBtnCallback:t.publish}}),o("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),o("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),o("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),o("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):t.loading?o("BaseNotFound"):o("div",{staticClass:"d-flex justify-center fill-height align-center"},[o("v-progress-circular",{attrs:{indeterminate:""}})],1)},a=[],s=i(629),l=i(2100),n=i(7566),r=i(9522),c={name:"AdminUpdateNewsView",components:{BaseNotFound:()=>i.e(6643).then(i.bind(i,6643)),DialogCroppieMultipleComponent:()=>Promise.all([i.e(9383),i.e(1182)]).then(i.bind(i,9383)),DialogCroppieComponent:()=>Promise.all([i.e(8493),i.e(522)]).then(i.bind(i,8493)),DialogPreviewComponent:()=>Promise.all([i.e(4202),i.e(4117)]).then(i.bind(i,4202)),BaseNews:()=>i.e(5356).then(i.bind(i,9541)),DraggableInputs:()=>Promise.all([i.e(2739),i.e(9980),i.e(1247),i.e(3307)]).then(i.bind(i,1247)),BaseChip:()=>i.e(4494).then(i.bind(i,4494)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[l.Z,n.Z,r.Z],data:()=>({loading:!1,dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",dateStart:null,timeStart:null,datePublish:null,timePublish:null,tagsIds:[],isSlider:!1,sliderImg:null,sliderImgCroppie:null,sliderImgBlob:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]}}),computed:{...(0,s.rn)("app",["theme"]),...(0,s.rn)("news",["tagsCategories","tags","newsOne"])},async mounted(){await this.getTags(),await this.getNew(this.$route.params.id),Object.keys(this.newsOne).length&&this.dataToForm(),this.loading=!0},methods:{...(0,s.nv)("news",["getTags","getNew"]),...(0,s.nv)("admin",["addAttachment","updateNews"]),dataToForm(){this.form.id=this.newsOne.id,this.form.title=this.newsOne.title,this.form.dateStart=this.$moment(this.newsOne.date).format("YYYY-MM-DD"),this.form.timeStart=this.$moment(this.newsOne.date).format("HH:mm"),this.form.tagsIds=this.newsOne.tags.map((t=>t.id)),this.form.coverCroppie=this.newsOne.image.url,this.form.blocks=this.newsOne.blocks;for(let t=0;t<this.form.blocks.length;t++){if(this.form.blocks[t].id=t,0===this.form.blocks[t].type){this.form.blocks[t].content.text=this.form.blocks[t].content.text.replace("<div>","").replace("</div>","");const e=new DOMParser;this.form.blocks[t].content.text=e.parseFromString(this.form.blocks[t].content.text,"text/html").body.innerHTML,this.form.blocks[t].content.text=this.form.blocks[t].content.text.replace(/\r/g,"").replace(/\n/g,"")}if(1===this.form.blocks[t].type){this.form.blocks[t].content.blocks[0].id=1e3*(t+1)+1,this.form.blocks[t].content.blocks[1].id=1e3*(t+1)+2;for(let e of this.form.blocks[t].content.blocks)if(2===e.type&&(e.content.img=null,e.content.imgName.blob=null,e.content.imgName.original=e.content.imgName.croppie),3===e.type){e.content.images=[];let t=1;for(let i of e.content.imagesName)e.content.images.push({name:t+" img"}),t+=1,i.original=i.croppie,i.blob=null}}if(2===this.form.blocks[t].type&&(this.form.blocks[t].content.img=null,this.form.blocks[t].content.imgName.blob=null,this.form.blocks[t].content.imgName.original=this.form.blocks[t].content.imgName.croppie),3===this.form.blocks[t].type){this.form.blocks[t].content.images=[];let e=1;for(let i of this.form.blocks[t].content.imagesName)this.form.blocks[t].content.images.push({name:e+" img",id:e}),e+=1,i.original=i.croppie,i.blob=null}}this.count=this.form.blocks.length+1},canBePublished(){let t=!0;for(const e of this.form.blocks)if(-1===e.type){t=!1;break}return!(this.form.coverCroppie&&this.form.title&&this.form.dateStart&&this.form.tagsIds.length&&this.form.blocks.length&&t)},removeTag(t){const e=this.form.tagsIds.indexOf(t.id);e>=0&&this.form.tagsIds.splice(e,1)},async publish(){let t=Object.assign({},this.form);if(t.timeStart){let e=t.timeStart.split(":");t.dateStart=new Date(t.dateStart),t.dateStart.setHours(parseInt(e[0]),parseInt(e[1]))}t.date=this.$moment(t.dateStart).format(),t.coverBlob?await this.addAttachment(t.coverBlob).then((e=>{t.imageId=e.data.id})).catch((()=>({}))):t.imageId=this.newsOne.image.id;for(let e of t.blocks){if(1===e.type)for(const t of e.content.blocks){if(2===t.type&&t.content.imgName.blob&&await this.addAttachment(t.content.imgName.blob).then((e=>{t.content.imgName.croppie=e.data.url})).catch((()=>({}))),3===t.type){for(let e of t.content.imagesName)e["blob"]&&await this.addAttachment(e["blob"]).then((t=>{e.croppie=t.data.url})).catch((()=>({}))),delete e.original,delete e["blob"];delete t.content.images}delete t.id,2===t.type&&(delete t.content.img,delete t.content.imgName.original,delete t.content.imgName.blob)}if(2===e.type&&e.content.imgName.blob&&await this.addAttachment(e.content.imgName.blob).then((t=>{e.content.imgName.croppie=t.data.url})).catch((()=>({}))),3===e.type){for(let t of e.content.imagesName)t["blob"]&&await this.addAttachment(t["blob"]).then((e=>{t.croppie=e.data.url})).catch((()=>({}))),delete t.original,delete t["blob"];delete e.content.images}delete e.id,2===e.type&&(delete e.content.img,delete e.content.imgName.original,delete e.content.imgName.blob)}await this.updateNews(t),this.$router.push("/published?typeData=1").then()},preview(){this.previewData=Object.assign({},this.form),this.previewData.tags=[],this.previewData.tagsIds.forEach(((t,e)=>{this.previewData.tags[e]=this.tags.find((e=>e.id===t))})),this.isPreview=!0}}},d=c,m=i(1001),p=i(3453),h=i.n(p),g=i(1835),f=i(3150),u=i(3702),b=i(2102),v=i(9846),C=i(6428),k=i(7047),w=i(624),x=i(2877),y=i(314),I=(0,m.Z)(d,o,a,!1,null,null,null),D=I.exports;h()(I,{VAutocomplete:g.Z,VBtn:f.Z,VCheckbox:u.Z,VCol:b.Z,VContainer:v.Z,VIcon:C.Z,VImg:k.Z,VProgressCircular:w.Z,VRow:x.Z,VTextField:y.Z})}}]);
//# sourceMappingURL=7208.a4600164.js.map