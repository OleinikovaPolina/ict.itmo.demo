"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6094],{3150:function(t,e,i){i.d(e,{Z:function(){return f}});var s=i(5648),n=i(624),a=n.Z,o=i(7352),l=i(2936),r=i(3377),c=i(3536),d=i(6505),h=i(3039),u=i(3325),p=i(1824);const g=(0,u.Z)(s.Z,d.Z,c.Z,h.Z,(0,o.d)("btnToggle"),(0,l.d)("inputValue"));var f=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...d.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return r.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(a,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},2102:function(t,e,i){i(7273);var s=i(144),n=i(6290),a=i(4589);const o=["sm","md","lg","xl"],l=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),r=(()=>o.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(r),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let o="";for(const n in e)o+=String(e[n]);let l=u.get(o);if(!l){let t;for(t in l=[],d)d[t].forEach((i=>{const s=e[i],n=h(t,i,s);n&&l.push(n)}));const i=l.some((t=>t.startsWith("col-")));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(o,l)}return t(e.tag,(0,n.ZP)(i,{class:l}),s)}})},3385:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(6210),n=i(6952),a=i(3377),o=i(2529),l=i(3712),r=i(8085),c=i(3325),d=(0,c.Z)(s.Z,n.Z,a.Z,o.Z,l.Z,r.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(6257);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),n=i(6286),a=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,a.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const a=n();e["Z"]=a},2307:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad&&Object.keys(t.article).length?s("v-container",[s("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Статьи ")]),t.isPreview?s("div",[s("v-container",[s("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.form.title)+" ")]),s("BaseHexagonContainer",{attrs:{"hex-array":t.form.winnersHex}})],1),s("BaseNews",{attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),s("div",{staticClass:"input-bordered mb-6 pt-3"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Победители "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[s("v-col",{staticClass:"input-file-container",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"winners",type:"file",accept:"image/*",multiple:""},on:{change:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.target.files)))}}}),s("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"winners"},on:{drop:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.dataTransfer.files)))}}},[s("span",[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(2012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),t.form.winners.length?s("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6}},[s("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.form.winners},on:{change:function(e){t.changeList(e)}}},t._l(t.form.winnersHex,(function(e,i){return s("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[s("div",[t._v(t._s(i+1)+".")]),s("div",{staticClass:"input-slider-img-block px-2 ml-2 d-flex align-center"},[s("v-text-field",{staticClass:"ma-0 input-border-0",attrs:{dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"hex.text"}}),s("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(i)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)]),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),s("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.subtitle,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),s("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):s("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],a=i(629),o=i(9980),l=i.n(o),r=i(2100),c=i(7566),d=i(9522),h={name:"HomeArticleComponent",components:{draggable:l(),DialogCroppieMultipleComponent:()=>Promise.all([i.e(4650),i.e(8462)]).then(i.bind(i,4650)),DialogCroppieComponent:()=>Promise.all([i.e(5771),i.e(17)]).then(i.bind(i,5771)),BaseHexagonContainer:()=>i.e(2673).then(i.bind(i,2673)),DialogPreviewComponent:()=>Promise.all([i.e(7114),i.e(4563)]).then(i.bind(i,7114)),BaseNews:()=>i.e(5583).then(i.bind(i,9436)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(2739),i.e(3463),i.e(8032)]).then(i.bind(i,3463)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[r.Z,c.Z,d.Z],data:()=>({dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",winners:[],winnersHex:[],blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}),computed:{...(0,a.rn)("news",["article"]),...(0,a.rn)("app",["theme"])},async mounted(){await this.getArticle(this.$route.params.id),Object.keys(this.article).length&&this.dataToForm(),this.isLoad=!0},methods:{...(0,a.nv)("news",["getArticle"]),...(0,a.nv)("admin",["addAttachment","updateArticles"]),dataToForm(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.dataToFormBlocks(this.article.blocks),this.count=this.form.blocks.length+1;const t=JSON.parse(this.article.description);this.form.winnersHex=t.winnersHex,this.form.winners=[];for(let e=0;e<t.winnersHex.length;e++)this.form.winners.push(null)},async publish(){let t=Object.assign({},this.form);t.page=this.article.page;for(let e=0;e<t.winners.length;e++)t.winners[e]&&await this.addAttachment(t.winners[e]).then((i=>{t.winnersHex[e].img=i.data.url})).catch((()=>({})));t.description=JSON.stringify({winnersHex:t.winnersHex}),t.blocks=await this.publishBlocks(t.blocks),await this.updateArticles(t),this.$router.push("/favorites").then()},cutTegs(t){let e=/( |<([^>]+)>)/gi;return t.replace(e,"")},preview(){this.previewData=this.form,this.isPreview=!0},changeContentImagesBlock(t){t.forEach((t=>{if(t){let e=new FileReader;e.onload=e=>{this.form.winnersHex.push({img:e.target.result,text:t.name.split(".").slice(0,-1).join(".")})},e.readAsDataURL(t)}})),this.form.winners=t},deleteContentImgBlock(t){this.form.winners.splice(t,1),this.form.winnersHex.splice(t,1)},changeList(t){let e=this.form.winnersHex.splice(t.moved.oldIndex,1)[0];this.form.winnersHex.splice(t.moved.newIndex,0,e)}}},u=h,p=i(1001),g=i(3453),f=i.n(g),v=i(3150),m=i(2102),b=i(9846),C=i(6428),x=i(7047),k=i(624),w=i(314),B=(0,p.Z)(u,s,n,!1,null,null,null),y=B.exports;f()(B,{VBtn:v.Z,VCol:m.Z,VContainer:b.Z,VIcon:C.Z,VImg:x.Z,VProgressCircular:k.Z,VTextField:w.Z})}}]);
//# sourceMappingURL=6094.9422cfe1.js.map