"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1898],{2245:function(){},1835:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(6665),a=i(314),n=i(6290),l=i(4589);const r={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var o=s.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,l.qF)(t,this.itemText),i=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=s.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((t=>t===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l.Do.backspace&&t!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,a=t!==s-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const t=a.Z.options.methods.genInput.call(this);return t.data=(0,n.ZP)(t.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=s.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l.Do.home,l.Do.end].includes(e)||s.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){s.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],a=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},3702:function(t,e,i){i.d(e,{Z:function(){return l}});i(2245);var s=i(172),a=i(8230),n=i(7764),l=n.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},9155:function(t,e,i){var s=i(6286),a=i(144);e["Z"]=a.Z.extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},7764:function(t,e,i){i.d(e,{X:function(){return r}});var s=i(8230),a=i(9155),n=i(4419),l=i(3325);function r(t){t.preventDefault()}e["Z"]=(0,l.Z)(s.Z,a.Z,n.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})},6621:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading&&Object.keys(t.newsOne).length?s("v-container",[t.isPreview?s("div",[s("BaseNews",{attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название новости",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),s("div",{staticClass:"input-bordered mb-6 py-6"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Обложка новости"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"cover",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.target.files[0])}}}),s("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"cover"},on:{change:function(e){t.beforeCrop("cover",{w:480,h:300},"Обложка новости",e.dataTransfer.files[0])}}},[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),t._v(" Выберите изображение обложки или перетащите файл"),s("br"),t._v(" Размер 480*300 ")],1)]),null===t.form.cover&&t.form.coverCroppie?s("a",{staticClass:"img-name text-center",attrs:{href:t.form.coverCroppie,target:"_blank"}},[t._v(t._s(t.form.coverCroppie))]):t._e(),t.form.cover?s("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.cover.name)+" ")]):t._e()]),s("div",{staticClass:"input-bordered"},[s("v-checkbox",{staticClass:"input-blue pl-2",attrs:{dark:"dark"===t.theme,dense:"",label:"Добавить в слайдер"},model:{value:t.form.isSlider,callback:function(e){t.$set(t.form,"isSlider",e)},expression:"form.isSlider"}}),t.form.isSlider?s("div",{staticClass:"py-6"},[s("div",{staticClass:"input-file-container mx-auto",on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"sliderImg",type:"file",accept:"image/*"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.target.files[0])}}}),s("label",{staticClass:"d-flex align-center py-6 px-12 text-center",attrs:{for:"sliderImg"},on:{change:function(e){t.beforeCrop("sliderImg",{w:912,h:388},"Слайдер",e.dataTransfer.files[0])}}},[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",src:i(2012)}}),t._v(" Выберите изображение обложки или перетащите файл"),s("br"),t._v(" Размер 1280*544 ")],1)]),!t.form.sliderImg&&t.form.sliderImgCroppie?s("a",{staticClass:"img-name text-center",attrs:{href:t.form.sliderImgCroppie,target:"_blank"}},[t._v(t._s(t.form.sliderImgCroppie))]):t._e(),t.form.sliderImg?s("div",{staticClass:"text-center"},[t._v(" "+t._s(t.form.sliderImg.name)+" ")]):t._e()]):t._e()],1),s("div",{staticClass:"px-0 mt-4 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("v-row",{staticClass:"pt-4"},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),s("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата выхода поста"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.datePublish,callback:function(e){t.$set(t.form,"datePublish",e)},expression:"form.datePublish"}})],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время выхода"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timePublish,callback:function(e){t.$set(t.form,"timePublish",e)},expression:"form.timePublish"}})],1)],1),s("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"pl-4 subtitle-color  text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Теги"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-autocomplete",{staticClass:"search-input",attrs:{items:t.tags,"item-value":"id","item-text":"name",multiple:"",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":"",chips:"","append-icon":"mdi-chevron-down"},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[s("BaseChip",{staticClass:"mr-3",attrs:{item:i},scopedSlots:t._u([{key:"chip-btns",fn:function(){return[s("v-btn",{attrs:{icon:"",dark:"","x-small":""},on:{click:function(e){return t.removeTag(i)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)]},proxy:!0}],null,!0)})]}}],null,!1,7897401),model:{value:t.form.tagsIds,callback:function(e){t.$set(t.form,"tagsIds",e)},expression:"form.tagsIds"}})],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0,"disabled-btn":t.canBePublished()},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),s("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):t.loading?s("BaseNotFound"):s("div",{staticClass:"d-flex justify-center fill-height align-center"},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},a=[],n=i(629),l=i(2100),r=i(7566),o=i(9522),h={name:"AdminUpdateNewsView",components:{BaseNotFound:()=>i.e(6643).then(i.bind(i,6643)),DialogCroppieMultipleComponent:()=>Promise.all([i.e(6229),i.e(1182)]).then(i.bind(i,6229)),DialogCroppieComponent:()=>Promise.all([i.e(4529),i.e(522)]).then(i.bind(i,4529)),DialogPreviewComponent:()=>Promise.all([i.e(8016),i.e(2541)]).then(i.bind(i,8016)),BaseNews:()=>i.e(5583).then(i.bind(i,9436)),DraggableInputs:()=>Promise.all([i.e(2739),i.e(9980),i.e(3879),i.e(3307)]).then(i.bind(i,3879)),BaseChip:()=>i.e(4494).then(i.bind(i,4494)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[l.Z,r.Z,o.Z],data:()=>({loading:!1,dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",dateStart:null,timeStart:null,datePublish:null,timePublish:null,tagsIds:[],isSlider:!1,sliderImg:null,sliderImgCroppie:null,sliderImgBlob:null,cover:null,coverCroppie:null,coverBlob:null,blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]}}),computed:{...(0,n.rn)("app",["theme"]),...(0,n.rn)("news",["tagsCategories","tags","newsOne"])},async mounted(){await this.getTags(),await this.getNew(this.$route.params.id),Object.keys(this.newsOne).length&&this.dataToForm(),this.loading=!0},methods:{...(0,n.nv)("news",["getTags","getNew"]),...(0,n.nv)("admin",["addAttachment","updateNews"]),dataToForm(){this.form.id=this.newsOne.id,this.form.title=this.newsOne.title,this.form.dateStart=this.$moment(this.newsOne.date).format("YYYY-MM-DD"),this.form.timeStart=this.$moment(this.newsOne.date).format("HH:mm"),this.form.datePublish=this.$moment(this.newsOne.datePublished).format("YYYY-MM-DD"),this.form.timePublish=this.$moment(this.newsOne.datePublished).format("HH:mm"),this.form.tagsIds=this.newsOne.tags.map((t=>t.id)),this.form.coverCroppie=this.newsOne.image.url,this.form.blocks=this.dataToFormBlocks(this.newsOne.blocks),this.count=this.form.blocks.length+1,this.newsOne.slideImage&&(this.form.isSlider=!0,this.form.sliderImgCroppie=this.newsOne.slideImage.url)},canBePublished(){let t=!0;this.form.isSlider&&!this.form.sliderImgCroppie&&(t=!1);for(const e of this.form.blocks)if(-1===e.type){t=!1;break}return!(this.form.coverCroppie&&this.form.title&&this.form.dateStart&&this.form.tagsIds.length&&this.form.blocks.length&&t&&this.form.datePublish&&this.form.timePublish)},removeTag(t){const e=this.form.tagsIds.indexOf(t.id);e>=0&&this.form.tagsIds.splice(e,1)},async publish(){let t=Object.assign({},this.form);if(t.timeStart){let e=t.timeStart.split(":");t.dateStart=new Date(t.dateStart),t.dateStart.setHours(parseInt(e[0]),parseInt(e[1]))}t.date=this.$moment(t.dateStart).format();let e=t.timePublish.split(":");t.datePublish=new Date(t.datePublish),t.datePublish.setHours(parseInt(e[0]),parseInt(e[1])),t.datePublished=this.$moment(t.datePublish).format(),t.coverBlob?await this.addAttachment(t.coverBlob).then((e=>{t.imageId=e.data.id})).catch((()=>({}))):t.imageId=this.newsOne.image.id,t.isSlider&&t.sliderImgBlob&&await this.addAttachment(t.sliderImgBlob).then((e=>{t.slideImageId=e.data.id})).catch((()=>({}))),t.isSlider||(t.slideImageId=null),t.blocks=await this.publishBlocks(t.blocks),await this.updateNews(t),this.$router.push("/published?typeData=1").then()},preview(){this.previewData=Object.assign({},this.form),this.previewData.tags=[],this.previewData.tagsIds.forEach(((t,e)=>{this.previewData.tags[e]=this.tags.find((e=>e.id===t))})),this.isPreview=!0}}},c=h,d=i(1001),u=i(3453),p=i.n(u),m=i(1835),f=i(3150),g=i(3702),v=i(2102),I=i(9846),b=i(6428),C=i(7047),x=i(624),S=i(2877),k=i(314),y=(0,d.Z)(c,s,a,!1,null,null,null),w=y.exports;p()(y,{VAutocomplete:m.Z,VBtn:f.Z,VCheckbox:g.Z,VCol:v.Z,VContainer:I.Z,VIcon:b.Z,VImg:C.Z,VProgressCircular:x.Z,VRow:S.Z,VTextField:k.Z})}}]);
//# sourceMappingURL=1898.5e88255c.js.map