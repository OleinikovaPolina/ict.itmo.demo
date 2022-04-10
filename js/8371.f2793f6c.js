"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[8371],{680:function(t,e,i){i.d(e,{Z:function(){return b}});var s=i(5648),a=i(8083),n=i(6952),r=i(4589),o=n.Z.extend({name:"v-progress-circular",directives:{intersect:a.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=o,c=i(7352),d=i(2936),h=i(3377),u=i(3536),p=i(6505),m=i(3039),g=i(3325),v=i(1824);const f=(0,g.Z)(s.Z,p.Z,u.Z,m.Z,(0,c.d)("btnToggle"),(0,d.d)("inputValue"));var b=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,v.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:a(this.color,s),e)}})},2877:function(t,e,i){i(7273);var s=i(144),a=i(6290),n=i(4589);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((i,s)=>(i[t+(0,n.jC)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),h=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let n="";for(const a in e)n+=String(e[a]);let r=b.get(n);if(!r){let t;for(t in r=[],g)g[t].forEach((i=>{const s=e[i],a=f(t,i,s);a&&r.push(a)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(n,r)}return t(e.tag,(0,a.ZP)(i,{staticClass:"row",class:r}),s)}})},7047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(8083),a=i(2529),n=i(3325),r=(0,n.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,l=i(8085),c=i(6290),d=i(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,n.Z)(o,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},3385:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(6210),a=i(6952),n=i(3377),r=i(2529),o=i(3712),l=i(8085),c=i(3325),d=(0,c.Z)(s.Z,a.Z,n.Z,r.Z,o.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(6257);function a(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}a("itemGroup")},2529:function(t,e,i){var s=i(4589),a=i(144);e["Z"]=a.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),a=(0,s.kb)(this.minWidth),n=(0,s.kb)(this.maxHeight),r=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),a=i(6286),n=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:a.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,a=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),a=`${a} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:a,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,n.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(144);function a(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const n=a();e["Z"]=n},2100:function(t,e){e["Z"]={data:function(){return{dialogCroppieDataImg:"",dialogCroppie:!1,dialogCroppieOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}},methods:{changeDialogCroppie(t){this.dialogCroppie=t},beforeCrop(t,e,i,s){this.form[t]=s;let a=new FileReader;a.onload=t=>{this.dialogCroppieDataImg=t.target.result},a.readAsDataURL(s),this.dialogCroppieOptions={title:i,size:e,enableResize:{w:!1,h:!1}},this.changeCroppie=e=>{this.form[t+"Croppie"]=e},this.dialogCroppie=!0},changeCroppie(){},beforeCropInsert(t){this.dialogCroppieDataImg=t.content.imgName.original,this.dialogCroppieOptions={title:"Изображение",size:{w:1140,h:400},enableResize:{w:!0,h:!0}},this.changeCroppie=e=>{t.content.imgName.croppie=e},this.dialogCroppie=!0}}}},8371:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Статьи ")]),t.isPreview?s("div",[s("v-row",{staticClass:"d-flex align-stretch justify-center pt-xl-8"},[s("v-col",{staticClass:"text-center d-md-none"},[s("div",{staticClass:"text-h5 text-sm-h4"},[t._v(" "+t._s(t.form.name)+" ")])]),s("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0 ",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[s("div",[s("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" "+t._s(t.form.name)+" ")]),s("div",{staticClass:"text-subtitle-1 pb-6",domProps:{innerHTML:t._s(t.form.description)}})]),s("div",{staticClass:"mx-auto mx-md-0"},[s("BaseButton2",{attrs:{link:"/"}})],1)]),s("v-col",{attrs:{cols:"12",md:"6",lg:"7"}},[s("CarouselComponent",{attrs:{slider:t.form.sliderImagesNames,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[s("v-col",{attrs:{cols:"12"}},[s("div",[s("v-img",{attrs:{width:"100%",height:t.$vuetify.breakpoint.xs?200:t.$vuetify.breakpoint.xl?600:400,cover:"",src:e.item}})],1)])]}}])})],1)],1),s("BaseNews",{staticClass:"mt-16",attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("div",{staticClass:"input-bordered mb-6 pt-3"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Описание статьи "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("vue-editor",{staticClass:"custom",attrs:{"editor-toolbar":t.customToolbar,placeholder:"Введите текст"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),s("div",{staticClass:"input-bordered mb-6 pt-3"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Слайдер обложка "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"mx-6 my-2 input-light-blue",attrs:{placeholder:"Название слайдера",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.sliderText,callback:function(e){t.$set(t.form,"sliderText",e)},expression:"form.sliderText"}}),s("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[s("v-col",{staticClass:"input-file-container",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"slider",type:"file",multiple:""},on:{change:function(e){t.changeContentImagesBlock(t.form.slider.concat(Array.from(e.target.files)))}}}),s("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"slider"},on:{drop:function(e){t.changeContentImagesBlock(t.form.slider.concat(Array.from(e.dataTransfer.files)))}}},[s("span",[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(2012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),t.form.slider.length?s("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6}},[s("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.form.slider},on:{change:function(e){t.changeList(e)}}},t._l(t.form.slider,(function(e,i){return s("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"pl-1"},[t._v(" "+t._s(i+1)+". ")]),s("div",{staticClass:"input-slider-img-block px-2 ml-2"},[t._v(" "+t._s(e.name)+" "),s("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(i)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)],1),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,updateProp:t.updateProp,beforeCropInsert:t.beforeCropInsert}}),s("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("v-row",{staticClass:"pt-4"},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата начала мероприятия"),s("span",{staticClass:"error--text"},[t._v("*")])]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Дата конца мероприятия ")]),s("v-text-field",{staticClass:"search-input",attrs:{type:"date",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.dateEnd,callback:function(e){t.$set(t.form,"dateEnd",e)},expression:"form.dateEnd"}})],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("div",{staticClass:"pl-4 subtitle-color text-body-2",staticStyle:{opacity:"0.7"}},[t._v(" Время начала ")]),s("v-text-field",{staticClass:"search-input",attrs:{type:"time",outlined:"",dense:"",dark:"dark"===t.theme,color:"dark"===t.theme?"#00A1FF":"#005A8E","hide-details":""},model:{value:t.form.timeStart,callback:function(e){t.$set(t.form,"timeStart",e)},expression:"form.timeStart"}})],1)],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.title,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}})],1)},a=[],n=i(629),r=i(2739),o=i(9980),l=i.n(o),c=i(2100),d={name:"HackathonCompetition",components:{VueEditor:r.bR,draggable:l(),DialogCroppieComponent:()=>Promise.all([i.e(8404),i.e(17)]).then(i.bind(i,8404)),CarouselComponent:()=>Promise.all([i.e(5640),i.e(955)]).then(i.bind(i,5640)),DialogPreviewComponent:()=>Promise.all([i.e(1288),i.e(823)]).then(i.bind(i,1288)),BaseNews:()=>i.e(4828).then(i.bind(i,4828)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(4634),i.e(8032)]).then(i.bind(i,4634)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992)),BaseButton2:()=>i.e(7625).then(i.bind(i,7625))},mixins:[c.Z],data:()=>({customToolbar:[{align:""},{align:"center"},{align:"justify"},{list:"ordered"},{list:"bullet"},"bold","italic","underline","link","clean"],dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{name:"",description:"",dateStart:null,dateEnd:null,timeStart:null,slider:[],sliderImagesNames:[],sliderText:"",blocks:[{id:0,type:-1,content:null}]}}),computed:(0,n.rn)("app",["theme"]),methods:{changeDialog(t){this.dialog=t},changeDialogContent(t){this.form=JSON.parse(JSON.stringify(this.form)),this.dialogContent=this.form.blocks.find((e=>e.id===t.id))},addBlock(){this.form.blocks.push({id:this.count,type:-1,content:null}),this.count++},publish(){console.log(this.form)},preview(){this.previewData=this.form,this.isPreview=!0},updateProp(t){this.form.blocks=t},changeContentImagesBlock(t){this.form.sliderImagesNames=[],t.forEach((t=>{if(t.type.match("image.*")){let e=new FileReader;e.onload=t=>{this.form.sliderImagesNames.push(t.target.result)},e.readAsDataURL(t)}})),this.form.slider=t},deleteContentImgBlock(t){this.form.slider.splice(t,1),this.form.sliderImagesNames.splice(t,1)},changeList(t){let e=this.form.sliderImagesNames.splice(t.moved.oldIndex,1)[0];this.form.sliderImagesNames.splice(t.moved.newIndex,0,e)}}},h=d,u=i(1001),p=i(3453),m=i.n(p),g=i(680),v=i(2102),f=i(9846),b=i(6428),C=i(7047),x=i(2877),y=i(5978),S=(0,u.Z)(h,s,a,!1,null,null,null),k=S.exports;m()(S,{VBtn:g.Z,VCol:v.Z,VContainer:f.Z,VIcon:b.Z,VImg:C.Z,VRow:x.Z,VTextField:y.Z})},2012:function(t,e,i){t.exports=i.p+"img/ep_picture.d53e6301.svg"}}]);
//# sourceMappingURL=8371.f2793f6c.js.map