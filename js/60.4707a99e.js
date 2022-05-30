"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[60],{3150:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(5648),n=i(624),a=n.Z,o=i(7352),r=i(2936),l=i(3377),c=i(3536),h=i(6505),d=i(3039),p=i(3325),u=i(1824);const g=(0,p.Z)(s.Z,h.Z,c.Z,d.Z,(0,o.d)("btnToggle"),(0,r.d)("inputValue"));var m=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...h.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return l.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(a,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},2102:function(t,e,i){i(7273);var s=i(144),n=i(6290),a=i(4589);const o=["sm","md","lg","xl"],r=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const p=new Map;e["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let o="";for(const n in e)o+=String(e[n]);let r=p.get(o);if(!r){let t;for(t in r=[],h)h[t].forEach((i=>{const s=e[i],n=d(t,i,s);n&&r.push(n)}));const i=r.some((t=>t.startsWith("col-")));r.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(o,r)}return t(e.tag,(0,n.ZP)(i,{class:r}),s)}})},7047:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(8083),n=i(2529),a=i(3325),o=(0,a.Z)(n.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=o,l=i(8085),c=i(6290),h=i(1824);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,a.Z)(r,l.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=r.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=r.options.render.call(this,t),i=(0,c.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},624:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(8083),n=i(6952),a=i(4589),o=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,a.kb)(this.calculatedSize),width:(0,a.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},3385:function(t,e,i){i.d(e,{Z:function(){return h}});var s=i(6210),n=i(6952),a=i(3377),o=i(2529),r=i(3712),l=i(8085),c=i(3325),h=(0,c.Z)(s.Z,n.Z,a.Z,o.Z,r.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,i){var s=i(3385);e["Z"]=s.Z},3377:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(6257);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},2529:function(t,e,i){var s=i(4589),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),o=(0,s.kb)(this.maxWidth),r=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),a&&(t.maxHeight=a),o&&(t.maxWidth=o),r&&(t.width=r),t}}})},3712:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,i){var s=i(144),n=i(6286),a=i(4589);e["Z"]=s.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,a.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const a=n();e["Z"]=a},2100:function(t,e){e["Z"]={data:()=>({dialogCroppieDataImg:"",dialogCroppie:!1,dialogCroppieOptions:{title:"",size:{w:0,h:0},enableResize:{x:!1,y:!1}}}),methods:{changeDialogCroppie(t){this.dialogCroppie=t},beforeCrop(t,e,i,s){this.form[t]=s;let n=new FileReader;n.onload=t=>{this.dialogCroppieDataImg=t.target.result},n.readAsDataURL(s),this.dialogCroppieOptions={title:i,size:e,enableResize:{w:!1,h:!1}},this.changeCroppie=e=>{this.form[t+"Croppie"]=e[0],this.form[t+"Blob"]=e[1]},this.dialogCroppie=!0},changeCroppie(){},beforeCropInsert(t){this.dialogCroppieDataImg=t.content.imgName.original,this.dialogCroppieOptions={title:"Изображение",size:{w:800,h:350},enableResize:{w:!0,h:!0}},this.changeCroppie=e=>{t.content.imgName.croppie=e[0],t.content.imgName.blob=e[1]},this.dialogCroppie=!0}}}},9522:function(t,e){e["Z"]={data:()=>({dialogCroppieMultipleEdit:!1,dialogCroppieMultipleDataImg:null,dialogCroppieMultiple:!1}),methods:{changeDialogCroppieMultiple(t){this.dialogCroppieMultiple=t},async beforeCropMultiple(t,e,i){let s=[];for(let n=0;n<i.length;n++){let t=i[n];await this.onloadReader(t).then((async t=>{s.push({original:t.target.result,croppie:t.target.result,blob:null})}))}this.dialogCroppieMultipleDataImg=s,this.form[t]=this.form[t].concat(i),this.dialogCroppieMultipleEdit=!1,this.changeCroppieMultiple=e=>{e.forEach(((t,e)=>{s[e].croppie=t[0],s[e].blob=t[1]})),this.form[t+"ImagesNames"]=this.form[t+"ImagesNames"].concat(s),console.log(this.form)},this.dialogCroppieMultiple=!0},async beforeCropMultipleOne(t,e){let i=[this.form[t+"ImagesNames"][e]];this.dialogCroppieMultipleDataImg=i,this.dialogCroppieMultipleEdit=!0,this.changeCroppieMultiple=s=>{i[0].croppie=s[0][0],i[0].blob=s[0][1],this.form[t+"ImagesNames"][e]=i[0]},this.dialogCroppieMultiple=!0},changeCroppieMultiple(){},onloadReader(t){return new Promise(((e,i)=>{let s=new FileReader;s.onload=t=>e(t),s.onerror=i,s.readAsDataURL(t)}))},async beforeCropMultipleInsert(t,e){let i=[];for(let s=0;s<e.length;s++){let t=e[s];await this.onloadReader(t).then((async t=>{i.push({original:t.target.result,croppie:t.target.result,blob:null})}))}this.dialogCroppieMultipleDataImg=i,t.content.images=t.content.images.concat(e),this.dialogCroppieMultipleEdit=!1,this.changeCroppieMultiple=e=>{e.forEach(((t,e)=>{i[e].croppie=t[0],i[e].blob=t[1]})),t.content.imagesName=t.content.imagesName.concat(i)},this.dialogCroppieMultiple=!0},async beforeCropMultipleInsertOne(t,e){let i=[t.content.imagesName[e]];this.dialogCroppieMultipleDataImg=i,this.dialogCroppieMultipleEdit=!0,this.changeCroppieMultiple=s=>{i[0].croppie=s[0][0],i[0].blob=s[0][1],t.content.imagesName[e]=i[0]},this.dialogCroppieMultiple=!0}}}},7566:function(t,e){e["Z"]={data:()=>({dialog:!1,dialogContent:{},count:1}),methods:{changeDialog(t){this.dialog=t},changeDialogContent(t){this.dialogContent=t},addBlock(){this.form.blocks.push({id:this.count,type:-1,content:null}),this.count++},deleteBlock(t){this.form.blocks=this.form.blocks.filter((e=>e.id!==t))},updateBlock(){this.form.blocks=this.form.blocks.map((t=>this.forUpdateBlock(t)))},forUpdateBlock(t){if(1===t.type)return{type:1,id:t.id,content:{blocks:[this.forUpdateBlock(t.content.blocks[0]),this.forUpdateBlock(t.content.blocks[1])]}};{let e=Object.assign({},t);return e}}}}},60:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isLoad&&Object.keys(t.article).length?s("v-container",[s("div",{staticClass:"pb-2 pb-md-4 text-h6 text-md-h5"},[t._v(" Статьи ")]),t.isPreview?s("div",[s("v-container",[s("v-col",{staticClass:" text-center mx-auto text-h6 text-sm-h5 text-md-h4 text-xl-h3",attrs:{cols:"10",sm:"7",lg:"6"}},[t._v(" "+t._s(t.form.title)+" ")]),s("BaseHexagonContainer",{attrs:{"hex-array":t.form.winnersHex}})],1),s("BaseNews",{attrs:{data:t.previewData}}),s("BaseButtonOutlined",{attrs:{text:"Назад","click-btn":!0},on:{clickBtnCallback:function(e){t.isPreview=!1}}})],1):s("div",[s("div",{staticClass:"input-bordered mb-6"},[s("v-text-field",{staticClass:"input-border-0 text-h6 input-blue font-weight-bold",attrs:{placeholder:"Название",outlined:"",dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),s("div",{staticClass:"input-bordered mb-6 pt-3"},[s("div",{staticClass:"input-bordered-label app-background"},[t._v(" Победители "),s("span",{staticClass:"error--text"},[t._v("*")])]),s("div",{staticClass:"mx-6 pb-4 d-flex flex-wrap"},[s("v-col",{staticClass:"input-file-container",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6},on:{dragover:function(t){t.preventDefault()},drop:function(t){t.preventDefault()}}},[s("input",{attrs:{id:"winners",type:"file",accept:"image/*",multiple:""},on:{change:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.target.files)))}}}),s("label",{staticClass:"d-flex align-center py-md-6 px-md-12 text-center",attrs:{for:"winners"},on:{drop:function(e){t.changeContentImagesBlock(t.form.winners.concat(Array.from(e.dataTransfer.files)))}}},[s("span",[s("v-img",{staticStyle:{"z-index":"0"},attrs:{width:"80",height:"80",contain:"",src:i(2012)}})],1),t._v(" Выберите изображение или перетащите файл ")])]),t.form.winners.length?s("v-col",{staticClass:"pl-6 py-0 d-flex flex-wrap align-start justify-space-between",attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:6}},[s("draggable",{staticClass:"d-flex flex-wrap",attrs:{list:t.form.winners},on:{change:function(e){t.changeList(e)}}},t._l(t.form.winnersHex,(function(e,i){return s("v-col",{key:i,staticClass:"d-flex mt-2 pa-0",attrs:{cols:"12",md:"6"}},[s("div",[t._v(t._s(i+1)+".")]),s("div",{staticClass:"input-slider-img-block px-2 ml-2 d-flex align-center"},[s("v-text-field",{staticClass:"ma-0 input-border-0",attrs:{dense:"",dark:"dark"===t.theme,"hide-details":""},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"hex.text"}}),s("v-btn",{attrs:{icon:"","x-small":"",color:"#0071B2"},on:{click:function(e){return t.deleteContentImgBlock(i)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)])})),1)],1):t._e()],1)]),s("DraggableInputs",{attrs:{blocks:t.form.blocks},on:{changeDialogContent:t.changeDialogContent,changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,deleteBlock:t.deleteBlock,updateBlock:t.updateBlock,beforeCropMultipleInsert:t.beforeCropMultipleInsert}}),s("div",{staticClass:"px-0 subtitle-color",staticStyle:{cursor:"pointer",width:"fit-content"},on:{click:t.addBlock}},[s("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-plus-circle-outline ")]),t._v(" Добавить поле ")],1),s("div",{staticClass:"d-flex pt-6"},[s("BaseButton",{attrs:{text:"Опубликовать","click-btn":!0},on:{clickBtnCallback:t.publish}}),s("BaseButtonOutlined",{staticClass:"ml-4",attrs:{text:"Предпросмотр","click-btn":!0},on:{clickBtnCallback:t.preview}})],1)],1),s("DialogPreviewComponent",{attrs:{dialog:t.dialog,"dialog-content":t.dialogContent},on:{changeDialog:t.changeDialog,beforeCropInsert:t.beforeCropInsert,beforeCropMultipleInsertOne:t.beforeCropMultipleInsertOne}}),s("DialogCroppieComponent",{attrs:{dialog:t.dialogCroppie,title:t.dialogCroppieOptions.subtitle,size:t.dialogCroppieOptions.size,"data-img":t.dialogCroppieDataImg,"enable-resize":t.dialogCroppieOptions.enableResize},on:{changeDialog:t.changeDialogCroppie,changeCroppie:t.changeCroppie}}),s("DialogCroppieMultipleComponent",{attrs:{dialog:t.dialogCroppieMultiple,"data-img":t.dialogCroppieMultipleDataImg,edit:t.dialogCroppieMultipleEdit},on:{changeDialog:t.changeDialogCroppieMultiple,changeCroppie:t.changeCroppieMultiple}})],1):s("v-container",{staticClass:"d-flex justify-center fill-height align-center"},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)},n=[],a=i(629),o=i(9980),r=i.n(o),l=i(2100),c=i(7566),h=i(9522),d={name:"HomeArticleComponent",components:{draggable:r(),DialogCroppieMultipleComponent:()=>Promise.all([i.e(9383),i.e(8462)]).then(i.bind(i,9383)),DialogCroppieComponent:()=>Promise.all([i.e(8493),i.e(17)]).then(i.bind(i,8493)),BaseHexagonContainer:()=>i.e(4489).then(i.bind(i,9923)),DialogPreviewComponent:()=>Promise.all([i.e(4202),i.e(9251)]).then(i.bind(i,4202)),BaseNews:()=>i.e(5356).then(i.bind(i,9541)),DraggableInputs:()=>Promise.all([i.e(6999),i.e(2739),i.e(1247),i.e(8032)]).then(i.bind(i,1247)),BaseButtonOutlined:()=>i.e(2149).then(i.bind(i,2149)),BaseButton:()=>i.e(1992).then(i.bind(i,1992))},mixins:[l.Z,c.Z,h.Z],data:()=>({dialog:!1,dialogContent:{},isPreview:!1,previewData:{},form:{title:"",winners:[],winnersHex:[],blocks:[{id:0,type:-1,content:null}],attachmentsIds:[]},isLoad:!1}),computed:{...(0,a.rn)("news",["article"]),...(0,a.rn)("app",["theme"])},async mounted(){await this.getArticle(this.$route.params.id),Object.keys(this.article).length&&this.dataToForm(),this.isLoad=!0},methods:{...(0,a.nv)("news",["getArticle"]),...(0,a.nv)("admin",["addAttachment","updateArticles"]),dataToForm(){this.form.id=this.article.id,this.form.title=this.article.title,this.form.blocks=this.article.blocks;for(let e=0;e<this.form.blocks.length;e++){if(this.form.blocks[e].id=e,0===this.form.blocks[e].type){this.form.blocks[e].content.text=this.form.blocks[e].content.text.replace("<div>","").replace("</div>","");const t=new DOMParser;this.form.blocks[e].content.text=t.parseFromString(this.form.blocks[e].content.text,"text/html").body.innerHTML,this.form.blocks[e].content.text=this.form.blocks[e].content.text.replace(/\r/g,"").replace(/\n/g,"")}if(1===this.form.blocks[e].type){this.form.blocks[e].content.blocks[0].id=1e3*(e+1)+1,this.form.blocks[e].content.blocks[1].id=1e3*(e+1)+2;for(let t of this.form.blocks[e].content.blocks)if(2===t.type&&(t.content.img=null,t.content.imgName.blob=null,t.content.imgName.original=t.content.imgName.croppie),3===t.type){t.content.images=[];let e=1;for(let i of t.content.imagesName)t.content.images.push({name:e+" img"}),e+=1,i.original=i.croppie,i.blob=null}}if(2===this.form.blocks[e].type&&(this.form.blocks[e].content.img=null,this.form.blocks[e].content.imgName.blob=null,this.form.blocks[e].content.imgName.original=this.form.blocks[e].content.imgName.croppie),3===this.form.blocks[e].type){this.form.blocks[e].content.images=[];let t=1;for(let i of this.form.blocks[e].content.imagesName)this.form.blocks[e].content.images.push({name:t+" img",id:t}),t+=1,i.original=i.croppie,i.blob=null}}this.count=this.form.blocks.length+1;const t=JSON.parse(this.article.description);this.form.winnersHex=t.winnersHex,this.form.winners=[];for(let e=0;e<t.winnersHex.length;e++)this.form.winners.push(null)},async publish(){let t=Object.assign({},this.form);t.page=this.article.page;for(let e=0;e<t.winners.length;e++)t.winners[e]&&await this.addAttachment(t.winners[e]).then((i=>{t.winnersHex[e].img=i.data.url})).catch((()=>({})));t.description=JSON.stringify({winnersHex:t.winnersHex});for(let e of t.blocks){if(1===e.type)for(const t of e.content.blocks){if(2===t.type&&t.content.imgName.blob&&await this.addAttachment(t.content.imgName.blob).then((e=>{t.content.imgName.croppie=e.data.url})).catch((()=>({}))),3===t.type){for(let e of t.content.imagesName)e["blob"]&&await this.addAttachment(e["blob"]).then((t=>{e.croppie=t.data.url})).catch((()=>({}))),delete e.original,delete e["blob"];delete t.content.images}delete t.id,2===t.type&&(delete t.content.img,delete t.content.imgName.original,delete t.content.imgName.blob)}if(2===e.type&&e.content.imgName.blob&&await this.addAttachment(e.content.imgName.blob).then((t=>{e.content.imgName.croppie=t.data.url})).catch((()=>({}))),3===e.type){for(let t of e.content.imagesName)t["blob"]&&await this.addAttachment(t["blob"]).then((e=>{t.croppie=e.data.url})).catch((()=>({}))),delete t.original,delete t["blob"];delete e.content.images}delete e.id,2===e.type&&(delete e.content.img,delete e.content.imgName.original,delete e.content.imgName.blob)}await this.updateArticles(t),this.$router.push("/favorites").then()},cutTegs(t){let e=/( |<([^>]+)>)/gi;return t.replace(e,"")},preview(){this.previewData=this.form,this.isPreview=!0},changeContentImagesBlock(t){t.forEach((t=>{if(t){let e=new FileReader;e.onload=e=>{this.form.winnersHex.push({img:e.target.result,text:t.name.split(".").slice(0,-1).join(".")})},e.readAsDataURL(t)}})),this.form.winners=t},deleteContentImgBlock(t){this.form.winners.splice(t,1),this.form.winnersHex.splice(t,1)},changeList(t){let e=this.form.winnersHex.splice(t.moved.oldIndex,1)[0];this.form.winnersHex.splice(t.moved.newIndex,0,e)}}},p=d,u=i(1001),g=i(3453),m=i.n(g),b=i(3150),f=i(2102),v=i(9846),C=i(6428),x=i(7047),k=i(624),y=i(314),S=(0,u.Z)(p,s,n,!1,null,null,null),w=S.exports;m()(S,{VBtn:b.Z,VCol:f.Z,VContainer:v.Z,VIcon:C.Z,VImg:x.Z,VProgressCircular:k.Z,VTextField:y.Z})},2012:function(t,e,i){t.exports=i.p+"img/ep_picture.d53e6301.svg"}}]);
//# sourceMappingURL=60.4707a99e.js.map