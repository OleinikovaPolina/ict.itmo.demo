"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1811],{40561:function(e,t,i){var o=i(82109),l=i(17854),a=i(51400),n=i(19303),r=i(26244),s=i(47908),c=i(65417),p=i(86135),d=i(81194),u=d("splice"),g=l.TypeError,m=Math.max,f=Math.min,h=9007199254740991,C="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var i,o,l,d,u,b,v=s(this),k=r(v),x=a(e,k),M=arguments.length;if(0===M?i=o=0:1===M?(i=0,o=k-x):(i=M-2,o=f(m(n(t),0),k-x)),k+i-o>h)throw g(C);for(l=c(v,o),d=0;d<o;d++)u=x+d,u in v&&p(l,d,v[u]);if(l.length=o,i<o){for(d=x;d<k-o;d++)u=d+o,b=d+i,u in v?v[b]=v[u]:delete v[b];for(d=k;d>k-o+i;d--)delete v[d-1]}else if(i>o)for(d=k-o;d>x;d--)u=d+o-1,b=d+i-1,u in v?v[b]=v[u]:delete v[b];for(d=0;d<i;d++)v[d+x]=arguments[d+2];return v.length=k-o+i,l}})},82933:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[e._v(" Статьи ")]),e.isPreview?o("div",[o("BaseStudentsHackathon",{attrs:{name:e.form.name,description:e.form.description,"slider-images-names":e.form.sliderImagesNames.map((function(e){return e.croppie})),text:e.form.sliderText}}),o("BaseNews",{staticClass:"mt-16",attrs:{data:e.previewData}}),o("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(t){e.isPreview=!1}}})],1):o("div",[o("div",{staticClass:"input-bordered mb-6"},[o("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("div",{staticClass:"input-bordered pt-3"},[o("div",{staticClass:"input-bordered-label app-background"},[e._v(" Описание статьи "),o("span",{staticClass:"error--text"},[e._v("*")])]),o("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":e.customToolbar,placeholder:"Введите текст"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),o("div",{staticClass:"text-end mb-6",style:{color:e.cutTegs(e.form.description).length>165?"red":"#0071B2"}},[e._v(" "+e._s(e.cutTegs(e.form.description).length)+"/165 ")]),o("div",{staticClass:"input-bordered mb-6 pt-3"},[o("div",{staticClass:"input-bordered-label eye-block app-background pa-0"},[o("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return e.eyeBlock(e.form.sliderImagesNames)}}},[o("v-icon",[e._v(" mdi-eye-outline ")])],1)],1),o("div",{staticClass:"input-bordered-label app-background"},[e._v(" Слайдер обложка "),o("span",{staticClass:"error--text"},[e._v("*")])]),o("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===e.theme,"hide-details":""},model:{value:e.form.sliderText,callback:function(t){e.$set(e.form,"sliderText",t)},expression:"form.sliderText"}}),o("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[o("v-col",{staticClass:"input-file-container",attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[o("input",{attrs:{id:"slider",type:"file",multiple:"",accept:"image/*"},on:{change:function(t){e.beforeCropMultiple("slider","Слайдер обложка",Array.from(t.target.files))}}}),o("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"slider"},on:{drop:function(t){e.beforeCropMultiple("slider","Слайдер обложка",Array.from(t.dataTransfer.files))}}},[o("span",[o("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(42012)}})],1),e._v(" Выберите изображение или перетащите файл ")])]),e.form.slider.length?o("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:6}},[o("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:e.form.slider},on:{change:function(t){e.changeList(t)}}},e._l(e.form.slider,(function(t,i){return o("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[o("div",{staticClass:"pl-1"},[e._v(" "+e._s(i+1)+". ")]),o("div",{staticClass:"input-slider-img-block px-2 ml-2"},[e._v(" "+e._s(t.name)+" "),o("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(t){return e.deleteContentImgBlock(i)}}},[o("v-icon",{attrs:{small:""}},[e._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):e._e()],1)],1),o("DraggableInputs",{attrs:{blocks:e.form.blocks},on:{changeDialogContent:e.changeDialogContent,changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,deleteBlock:e.deleteBlock,updateBlock:e.updateBlock,beforeCropMultipleInsert:e.beforeCropMultipleInsert}}),o("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:e.addBlock}},[o("v-icon",{attrs:{color:"#0071B2"}},[e._v(" mdi-plus-circle-outline ")]),e._v(" Добавить поле ")],1),o("v-row",{staticClass:"pt-4"},[o("v-col",{attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата начала мероприятия"),o("span",{staticClass:"error--text"},[e._v("*")])]),o("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateStart,callback:function(t){e.$set(e.form,"dateStart",t)},expression:"form.dateStart"}})],1),o("v-col",{attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Дата конца мероприятия ")]),o("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.dateEnd,callback:function(t){e.$set(e.form,"dateEnd",t)},expression:"form.dateEnd"}})],1),o("v-col",{attrs:{cols:"12",md:"2"}},[o("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[e._v(" Время начала ")]),o("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===e.theme,color:"dark"===e.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:e.form.timeStart,callback:function(t){e.$set(e.form,"timeStart",t)},expression:"form.timeStart"}})],1)],1),o("div",{staticClass:"d-flex pt-6"},[o("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:e.publish}}),o("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:e.preview}})],1)],1),o("DialogPreviewSliderComponent",{attrs:{dialog:e.dialogSlider,"dialog-content":e.dialogSliderContent},on:{changeDialog:e.changeDialogSlider,beforeCropMultipleOne:e.beforeCropMultipleOne}}),o("DialogPreviewComponent",{attrs:{dialog:e.dialog,"dialog-content":e.dialogContent},on:{changeDialog:e.changeDialog,beforeCropInsert:e.beforeCropInsert,beforeCropMultipleInsertOne:e.beforeCropMultipleInsertOne}}),o("DialogCroppieComponent",{attrs:{dialog:e.dialogCroppie,title:e.dialogCroppieOptions.title,size:e.dialogCroppieOptions.size,"data-img":e.dialogCroppieDataImg,"enable-resize":e.dialogCroppieOptions.enableResize},on:{changeDialog:e.changeDialogCroppie,changeCroppie:e.changeCroppie}}),o("DialogCroppieMultipleComponent",{attrs:{dialog:e.dialogCroppieMultiple,title:e.dialogCroppieMultipleOptions.title,size:e.dialogCroppieMultipleOptions.size,"data-img":e.dialogCroppieMultipleDataImg,"height-img":e.heightImg,"enable-resize":e.dialogCroppieMultipleOptions.enableResize},on:{changeDialog:e.changeDialogCroppieMultiple,changeCroppie:e.changeCroppieMultiple}})],1)},l=[],a=(i(41539),i(78783),i(33948),i(74916),i(15306),i(40561),i(20629)),n=i(2739),r=i(9980),s=i.n(r),c=i(22100),p=(i(54747),i(92222),{data:function(){return{heightImg:0,dialogCroppieMultipleDataImg:null,dialogCroppieMultiple:!1,dialogCroppieMultipleOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}},methods:{getHeight:function(e){var t=this;if(e){var i=new Image;i.onload=function(){t.heightImg=i.height},i.src=e}},changeDialogCroppieMultiple:function(e){this.dialogCroppieMultiple=e},beforeCropMultiple:function(e,t,i){var o=this,l=[];i.forEach((function(t,i){var a=new FileReader;a.onload=function(t){if(0===i)if(0===o.form[e+"ImagesNames"].length)o.getHeight(t.target.result);else{var a=Object.assign({},o.form[e+"ImagesNames"][0]);o.getHeight(a.original)}l.push({original:t.target.result,croppie:t.target.result,blob:null})},a.readAsDataURL(t)})),this.dialogCroppieMultipleDataImg=l,this.form[e]=this.form[e].concat(i),this.dialogCroppieMultipleOptions={title:t,size:{w:1140,h:400},enableResize:{w:!0,h:!1}},this.changeCroppieMultiple=function(t){t.forEach((function(e,t){l[t].croppie=e[0],l[t].blob=e[1]})),o.form[e+"ImagesNames"]=o.form[e+"ImagesNames"].concat(l)},this.dialogCroppieMultiple=!0},beforeCropMultipleOne:function(e,t,i){var o=this,l=[this.form[e+"ImagesNames"][t]];this.dialogCroppieMultipleDataImg=l,this.dialogCroppieMultipleOptions={title:i,size:{w:1140,h:400},enableResize:{w:!0,h:!1}},this.changeCroppieMultiple=function(i){l[0].croppie=i[0][0],l[0].blob=i[0][1],o.form[e+"ImagesNames"][t]=l[0]},this.dialogCroppieMultiple=!0},changeCroppieMultiple:function(){},beforeCropMultipleInsert:function(e,t){var i=this,o=[];t.forEach((function(t,l){var a=new FileReader;a.onload=function(t){if(0===l)if(0===e.content.imagesName.length)i.getHeight(t.target.result);else{var a=Object.assign({},e.content.imagesName[0]);i.getHeight(a.original)}o.push({original:t.target.result,croppie:t.target.result,blob:null})},a.readAsDataURL(t)})),this.dialogCroppieMultipleDataImg=o,e.content.images=e.content.images.concat(t),this.dialogCroppieMultipleOptions={title:"Слайдер",size:{w:1140,h:400},enableResize:{w:!0,h:!1}},this.changeCroppieMultiple=function(t){t.forEach((function(e,t){o[t].croppie=e[0],o[t].blob=e[1]})),e.content.imagesName=e.content.imagesName.concat(o)},this.dialogCroppieMultiple=!0},beforeCropMultipleInsertOne:function(e,t){var i=[e.content.imagesName[t]];this.dialogCroppieMultipleDataImg=i,this.dialogCroppieMultipleOptions={title:"Слайдер",size:{w:1140,h:400},enableResize:{w:!0,h:!1}},this.changeCroppieMultiple=function(o){i[0].croppie=o[0][0],i[0].blob=o[0][1],e.content.imagesName[t]=i[0]},this.dialogCroppieMultiple=!0}}}),d=i(47566),u={name:"HackathonCompetition",components:{DialogPreviewSliderComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(95)]).then(i.bind(i,53716))},VueEditor:n.bR,draggable:s(),DialogCroppieMultipleComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(7429)]).then(i.bind(i,90458))},BaseStudentsHackathon:function(){return i.e(2697).then(i.bind(i,72697))},DialogCroppieComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(3074)]).then(i.bind(i,75250))},DialogPreviewComponent:function(){return Promise.all([i.e(2681),i.e(3548),i.e(5135)]).then(i.bind(i,1347))},BaseNews:function(){return i.e(4828).then(i.bind(i,64828))},DraggableInputs:function(){return Promise.all([i.e(2681),i.e(6999),i.e(6807),i.e(8032)]).then(i.bind(i,26807))},BaseButtonOutlined:function(){return i.e(2149).then(i.bind(i,2149))},BaseButton:function(){return i.e(1992).then(i.bind(i,1992))}},mixins:[c.Z,d.Z,p],data:function(){return{customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],isPreview:!1,previewData:{},dialogSliderContent:[],dialogSlider:!1,form:{name:"",description:"",dateStart:null,dateEnd:null,timeStart:null,slider:[],sliderImagesNames:[],sliderText:"",blocks:[{id:0,type:-1,content:null}]}}},computed:(0,a.rn)("app",["theme"]),methods:{cutTegs:function(e){var t=/( |<([^>]+)>)/gi;return e.replace(t,"")},publish:function(){console.log(this.form)},preview:function(){this.previewData=this.form,this.isPreview=!0},deleteContentImgBlock:function(e){this.form.slider.splice(e,1),this.form.sliderImagesNames.splice(e,1)},changeList:function(e){var t=this.form.sliderImagesNames.splice(e.moved.oldIndex,1)[0];this.form.sliderImagesNames.splice(e.moved.newIndex,0,t)},changeDialogSliderContent:function(e){this.dialogSliderContent=e},changeDialogSlider:function(e){this.dialogSlider=e},eyeBlock:function(e){this.updateBlock(),this.changeDialogSliderContent(e),this.changeDialogSlider(!0)}}},g=u,m=i(1001),f=i(43453),h=i.n(f),C=i(680),b=i(82102),v=i(99846),k=i(96428),x=i(97047),M=i(62877),w=i(55978),D=(0,m.Z)(g,o,l,!1,null,"baf39eb2",null),I=D.exports;h()(D,{VBtn:C.Z,VCol:b.Z,VContainer:v.Z,VIcon:k.Z,VImg:x.Z,VRow:M.Z,VTextField:w.Z})}}]);
//# sourceMappingURL=1811-legacy.e82d5660.js.map