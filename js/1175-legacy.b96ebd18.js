(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1175],{38862:function(e,t,i){var r=i(82109),a=i(17854),n=i(35005),o=i(22104),s=i(1702),l=i(47293),c=a.Array,p=n("JSON","stringify"),u=s(/./.exec),d=s("".charAt),m=s("".charCodeAt),g=s("".replace),f=s(1..toString),h=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,v=function(e,t,i){var r=d(i,t-1),a=d(i,t+1);return u(b,e)&&!u(C,a)||u(C,e)&&!u(b,r)?"\\u"+f(m(e,0),16):e},k=l((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")}));p&&r({target:"JSON",stat:!0,forced:k},{stringify:function(e,t,i){for(var r=0,a=arguments.length,n=c(a);r<a;r++)n[r]=arguments[r];var s=o(p,null,n);return"string"==typeof s?g(s,h,v):s}})},42529:function(e,t,i){"use strict";i(9653);var r=i(4589),a=i(20144);t["Z"]=a.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=(0,r.kb)(this.height),i=(0,r.kb)(this.minHeight),a=(0,r.kb)(this.minWidth),n=(0,r.kb)(this.maxHeight),o=(0,r.kb)(this.maxWidth),s=(0,r.kb)(this.width);return t&&(e.height=t),i&&(e.minHeight=i),a&&(e.minWidth=a),n&&(e.maxHeight=n),o&&(e.maxWidth=o),s&&(e.width=s),e}}})},57460:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return B}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoad?r("v-container",[e.isPreview?r("div",[r("BaseStudentsArticleComponent",{attrs:{block:{title:e.form.title,description:e.form.description,caption:e.form.caption,image1:e.form.image1Croppie,image2:e.form.image2Croppie}}}),r("BaseNews",{attrs:{data:e.previewData}}),r("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(t){e.isPreview=!1}}})],1):r("div",[r("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[e._v(" Статьи ")]),r("div",{staticClass:"input-bordered mb-8"},[r("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("div",{staticClass:"input-bordered pt-3"},[r("div",{staticClass:"input-bordered-label app-background"},[e._v(" Описание "),r("span",{staticClass:"error--text"},[e._v("*")])]),r("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":e.customToolbar,placeholder:"Введите текст"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("div",{staticClass:"text-end mb-6",style:{color:e.cutTegs(e.form.description||"").length>300?"red":"#0071B2"}},[e._v(" "+e._s(e.cutTegs(e.form.description||"").length)+"/300 ")]),r("div",{staticClass:"input-bordered mb-6 py-6"},[r("div",{staticClass:"input-bordered-label app-background"},[e._v(" Изображение 1 "),r("span",{staticClass:"error--text"},[e._v("*")])]),r("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[r("input",{attrs:{id:"image1",type:"file",accept:"image/*"},on:{change:function(t){e.beforeCrop("image1",{w:400,h:300},"Изображение 1",t.target.files[0])}}}),r("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"image1"},on:{drop:function(t){e.beforeCrop("image1",{w:400,h:300},"Изображение 1",t.dataTransfer.files[0])}}},[r("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(42012)}}),e._v(" Выберите изображение или перетащите файл"),r("br"),e._v(" Размер 400*300 ")],1)]),!e.form.image1&&e.form.image1Croppie?r("a",{staticClass:"img-name text-center",attrs:{href:e.form.image1Croppie,target:"_blank"}},[e._v(e._s(e.form.image1Croppie))]):e._e(),e.form.image1?r("div",{staticClass:"text-center"},[e._v(" "+e._s(e.form.image1.name)+" ")]):e._e()]),r("div",{staticClass:"input-bordered mb-6 py-6"},[r("div",{staticClass:"input-bordered-label app-background"},[e._v(" Изображение 2 "),r("span",{staticClass:"error--text"},[e._v("*")])]),r("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Подпись",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.caption,callback:function(t){e.$set(e.form,"caption",t)},expression:"form.caption"}}),r("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[r("input",{attrs:{id:"image2",type:"file",accept:"image/*"},on:{change:function(t){e.beforeCrop("image2",{w:300,h:300},"Изображение 2",t.target.files[0])}}}),r("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"image2"},on:{drop:function(t){e.beforeCrop("image2",{w:300,h:300},"Изображение 2",t.dataTransfer.files[0])}}},[r("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(42012)}}),e._v(" Выберите изображение или перетащите файл"),r("br"),e._v(" Размер 300*300 ")],1)]),!e.form.image2&&e.form.image2Croppie?r("a",{staticClass:"img-name text-center",attrs:{href:e.form.image2Croppie,target:"_blank"}},[e._v(e._s(e.form.image2Croppie))]):e._e(),e.form.image2?r("div",{staticClass:"text-center"},[e._v(" "+e._s(e.form.image2.name)+" ")]):e._e()],1),r("DraggableInputs",{attrs:{blocks:e.form.blocks},on:{changeDialogContent:e.changeDialogContent,changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,deleteBlock:e.deleteBlock,updateBlock:e.updateBlock,beforeCropMultipleInsert:e.beforeCropMultipleInsert}}),r("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:e.addBlock}},[r("v-icon",{attrs:{color:"#0071B2"}},[e._v(" mdi-plus-circle-outline ")]),e._v(" Добавить поле ")],1),r("div",{staticClass:"d-flex pt-6"},[r("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:e.publish}}),r("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:e.preview}})],1)],1),r("DialogPreviewComponent",{attrs:{dialog:e.dialog,"dialog-content":e.dialogContent},on:{changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,beforeCropMultipleInsertOne:e.beforeCropMultipleInsertOne}}),r("DialogCroppieComponent",{attrs:{dialog:e.dialogCroppie,title:e.dialogCroppieOptions.title,size:e.dialogCroppieOptions.size,"data-img":e.dialogCroppieDataImg,"enable-resize":e.dialogCroppieOptions.enableResize},on:{changeDialog:e.changeDialogCroppie,changeCroppie:e.changeCroppie}}),r("DialogCroppieMultipleComponent",{attrs:{dialog:e.dialogCroppieMultiple,"data-img":e.dialogCroppieMultipleDataImg,edit:e.dialogCroppieMultipleEdit},on:{changeDialog:e.changeDialogCroppieMultiple,changeCroppie:e.changeCroppieMultiple}})],1):r("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[r("v-progress-circular",{attrs:{indeterminate:""}})],1)},a=[],n=i(16198),o=i(4367),s=(i(35666),i(41539),i(78783),i(33948),i(47941),i(82526),i(41817),i(38862),i(74916),i(15306),i(20629)),l=i(22100),c=i(47566),p=i(19522),u=i(2739),d={name:"TwoPhotosComponent",components:{VueEditor:u.bR,BaseStudentsArticleComponent:function(){return i.e(9984).then(i.bind(i,39984))},DialogCroppieMultipleComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(4413)]).then(i.bind(i,86229))},DialogCroppieComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(9095)]).then(i.bind(i,44529))},DialogPreviewComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(7145)]).then(i.bind(i,74202))},BaseNews:function(){return i.e(1956).then(i.bind(i,11956))},DraggableInputs:function(){return Promise.all([i.e(2681),i.e(6999),i.e(9980),i.e(3879),i.e(2109)]).then(i.bind(i,53879))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[l.Z,c.Z,p.Z],data:function(){return{customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],isPreview:!1,previewData:{},form:{title:"",description:"",caption:"",image1:null,image1Croppie:null,image1Blob:null,image2:null,image2Croppie:null,image2Blob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}},computed:(0,o.Z)((0,o.Z)({},(0,s.rn)("app",["theme"])),(0,s.rn)("news",["article"])),mounted:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getArticle(e.$route.params.id);case 2:Object.keys(e.article).length&&e.dataToForm(),e.isLoad=!0;case 4:case"end":return t.stop()}}),t)})))()},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,s.nv)("news",["getArticle"])),(0,s.nv)("admin",["addAttachment","updateArticles"])),{},{dataToForm:function(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.dataToFormBlocks(this.article.blocks),this.count=this.form.blocks.length+1;var e=JSON.parse(this.article.description);this.form.caption=e.caption,this.form.description=e.description,this.form.image1Croppie=e.image1,this.form.image2Croppie=e.image2},publish:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=Object.assign({},e.form),i.page=e.article.page,!i.image1Blob){t.next=7;break}return t.next=5,e.addAttachment(i.image1Blob).then((function(e){i.image1=e.data.url})).catch((function(){return{}}));case 5:t.next=8;break;case 7:i.image1=i.image1Croppie;case 8:if(!i.image2Blob){t.next=13;break}return t.next=11,e.addAttachment(i.image2Blob).then((function(e){i.image2=e.data.url})).catch((function(){return{}}));case 11:t.next=14;break;case 13:i.image2=i.image2Croppie;case 14:return i.description=JSON.stringify({description:i.description,caption:i.caption,image1:i.image1,image2:i.image2}),t.next=17,e.publishBlocks(i.blocks);case 17:return i.blocks=t.sent,t.next=20,e.updateArticles(i);case 20:e.$router.push("/favorites").then();case 21:case"end":return t.stop()}}),t)})))()},preview:function(){this.previewData=Object.assign({},this.form),this.isPreview=!0},cutTegs:function(e){var t=/( |<([^>]+)>)/gi;return e.replace(t,"")}})},m=d,g=i(1001),f=i(43453),h=i.n(f),b=i(99846),C=i(96428),v=i(97047),k=i(90624),x=i(40314),w=(0,g.Z)(m,r,a,!1,null,null,null),B=w.exports;h()(w,{VContainer:b.Z,VIcon:C.Z,VImg:v.Z,VProgressCircular:k.Z,VTextField:x.Z})}}]);
//# sourceMappingURL=1175-legacy.b96ebd18.js.map