"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1806],{678:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoad?a("v-container",[e.isPreview?a("div",[a("BaseStudentsArticleComponent",{attrs:{block:{title:e.form.title,description:e.form.description,caption:e.form.caption,image1:e.form.image1Croppie,image2:e.form.image2Croppie}}}),a("BaseNews",{attrs:{data:e.previewData}}),a("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(t){e.isPreview=!1}}})],1):a("div",[a("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[e._v(" Статьи ")]),a("div",{staticClass:"input-bordered mb-8"},[a("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("div",{staticClass:"input-bordered pt-3"},[a("div",{staticClass:"input-bordered-label app-background"},[e._v(" Описание "),a("span",{staticClass:"error--text"},[e._v("*")])]),a("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":e.customToolbar,placeholder:"Введите текст"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("div",{staticClass:"text-end mb-6",style:{color:e.cutTegs(e.form.description||"").length>300?"red":"#0071B2"}},[e._v(" "+e._s(e.cutTegs(e.form.description||"").length)+"/300 ")]),a("div",{staticClass:"input-bordered mb-6 py-6"},[a("div",{staticClass:"input-bordered-label app-background"},[e._v(" Изображение 1 "),a("span",{staticClass:"error--text"},[e._v("*")])]),a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[a("input",{attrs:{id:"image1",type:"file",accept:"image/*"},on:{change:function(t){e.beforeCrop("image1",{w:400,h:300},"Изображение 1",t.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"image1"},on:{drop:function(t){e.beforeCrop("image1",{w:400,h:300},"Изображение 1",t.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),e._v(" Выберите изображение или перетащите файл"),a("br"),e._v(" Размер 400*300 ")],1)]),!e.form.image1&&e.form.image1Croppie?a("a",{staticClass:"img-name text-center",attrs:{href:e.form.image1Croppie,target:"_blank"}},[e._v(e._s(e.form.image1Croppie))]):e._e(),e.form.image1?a("div",{staticClass:"text-center"},[e._v(" "+e._s(e.form.image1.name)+" ")]):e._e()]),a("div",{staticClass:"input-bordered mb-6 py-6"},[a("div",{staticClass:"input-bordered-label app-background"},[e._v(" Изображение 2 "),a("span",{staticClass:"error--text"},[e._v("*")])]),a("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Подпись",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.caption,callback:function(t){e.$set(e.form,"caption",t)},expression:"form.caption"}}),a("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[a("input",{attrs:{id:"image2",type:"file",accept:"image/*"},on:{change:function(t){e.beforeCrop("image2",{w:300,h:300},"Изображение 2",t.target.files[0])}}}),a("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"image2"},on:{drop:function(t){e.beforeCrop("image2",{w:300,h:300},"Изображение 2",t.dataTransfer.files[0])}}},[a("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),e._v(" Выберите изображение или перетащите файл"),a("br"),e._v(" Размер 300*300 ")],1)]),!e.form.image2&&e.form.image2Croppie?a("a",{staticClass:"img-name text-center",attrs:{href:e.form.image2Croppie,target:"_blank"}},[e._v(e._s(e.form.image2Croppie))]):e._e(),e.form.image2?a("div",{staticClass:"text-center"},[e._v(" "+e._s(e.form.image2.name)+" ")]):e._e()],1),a("DraggableInputs",{attrs:{blocks:e.form.blocks},on:{changeDialogContent:e.changeDialogContent,changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,deleteBlock:e.deleteBlock,updateBlock:e.updateBlock,beforeCropMultipleInsert:e.beforeCropMultipleInsert}}),a("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:e.addBlock}},[a("v-icon",{attrs:{color:"#0071B2"}},[e._v(" mdi-plus-circle-outline ")]),e._v(" Добавить поле ")],1),a("div",{staticClass:"d-flex pt-6"},[a("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:e.publish}}),a("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:e.preview}})],1)],1),a("DialogPreviewComponent",{attrs:{dialog:e.dialog,"dialog-content":e.dialogContent},on:{changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,beforeCropMultipleInsertOne:e.beforeCropMultipleInsertOne}}),a("DialogCroppieComponent",{attrs:{dialog:e.dialogCroppie,title:e.dialogCroppieOptions.title,size:e.dialogCroppieOptions.size,"data-img":e.dialogCroppieDataImg,"enable-resize":e.dialogCroppieOptions.enableResize},on:{changeDialog:e.changeDialogCroppie,changeCroppie:e.changeCroppie}}),a("DialogCroppieMultipleComponent",{attrs:{dialog:e.dialogCroppieMultiple,"data-img":e.dialogCroppieMultipleDataImg,edit:e.dialogCroppieMultipleEdit},on:{changeDialog:e.changeDialogCroppieMultiple,changeCroppie:e.changeCroppieMultiple}})],1):a("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)},o=[],r=i(629),n=i(2100),l=i(7566),s=i(9522),c=i(2739),p={name:"TwoPhotosComponent",components:{VueEditor:c.bR,BaseStudentsArticleComponent:()=>i.e(9984).then(i.bind(i,9984)),DialogCroppieMultipleComponent:()=>Promise.all([i.e(4650),i.e(9547)]).then(i.bind(i,4650)),DialogCroppieComponent:()=>Promise.all([i.e(5771),i.e(8192)]).then(i.bind(i,5771)),DialogPreviewComponent:()=>Promise.all([i.e(7114),i.e(587)]).then(i.bind(i,7114)),BaseNews:()=>i.e(5583).then(i.bind(i,9436)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(9980),i.e(3463),i.e(2109)]).then(i.bind(i,3463)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[n.Z,l.Z,s.Z],data:()=>({customToolbar:[{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],isPreview:!1,previewData:{},form:{title:"",description:"",caption:"",image1:null,image1Croppie:null,image1Blob:null,image2:null,image2Croppie:null,image2Blob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}),computed:{...(0,r.rn)("app",["theme"]),...(0,r.rn)("news",["article"])},async mounted(){await this.getArticle(this.$route.params.id),Object.keys(this.article).length&&this.dataToForm(),this.isLoad=!0},methods:{...(0,r.nv)("news",["getArticle"]),...(0,r.nv)("admin",["addAttachment","updateArticles"]),dataToForm(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.dataToFormBlocks(this.article.blocks),this.count=this.form.blocks.length+1;const e=JSON.parse(this.article.description);this.form.caption=e.caption,this.form.description=e.description,this.form.image1Croppie=e.image1,this.form.image2Croppie=e.image2},async publish(){let e=Object.assign({},this.form);e.page=this.article.page,e.image1Blob?await this.addAttachment(e.image1Blob).then((t=>{e.image1=t.data.url})).catch((()=>({}))):e.image1=e.image1Croppie,e.image2Blob?await this.addAttachment(e.image2Blob).then((t=>{e.image2=t.data.url})).catch((()=>({}))):e.image2=e.image2Croppie,e.description=JSON.stringify({description:e.description,caption:e.caption,image1:e.image1,image2:e.image2}),e.blocks=await this.publishBlocks(e.blocks),await this.updateArticles(e),this.$router.push("/favorites").then()},preview(){this.previewData=Object.assign({},this.form),this.isPreview=!0},cutTegs(e){let t=/( |<([^>]+)>)/gi;return e.replace(t,"")}}},d=p,m=i(1001),g=i(3453),u=i.n(g),h=i(9846),f=i(6428),b=i(7047),C=i(624),v=i(314),k=(0,m.Z)(d,a,o,!1,null,null,null),x=k.exports;u()(k,{VContainer:h.Z,VIcon:f.Z,VImg:b.Z,VProgressCircular:C.Z,VTextField:v.Z})}}]);
//# sourceMappingURL=1806.451aaf71.js.map