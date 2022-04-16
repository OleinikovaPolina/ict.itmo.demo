"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5695,3022],{680:function(t,e,s){s.d(e,{Z:function(){return f}});var i=s(5648),n=s(8083),o=s(6952),r=s(4589),a=o.Z.extend({name:"v-progress-circular",directives:{intersect:n.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=a,c=s(7352),h=s(2936),u=s(3377),d=s(3536),p=s(6505),v=s(3039),b=s(3325),g=s(1824);const m=(0,b.Z)(i.Z,p.Z,d.Z,v.Z,(0,c.d)("btnToggle"),(0,h.d)("inputValue"));var f=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return u.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},3385:function(t,e,s){s.d(e,{Z:function(){return h}});var i=s(6210),n=s(6952),o=s(3377),r=s(2529),a=s(3712),l=s(8085),c=s(3325),h=(0,c.Z)(i.Z,n.Z,o.Z,r.Z,a.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,s){var i=s(3385);e["Z"]=i.Z},3377:function(t,e,s){var i=s(144);e["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,s){s.d(e,{d:function(){return n}});var i=s(6257);function n(t,e,s){return(0,i.f)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},3712:function(t,e,s){var i=s(144);e["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const s=e.split(" ");for(const e of s)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,s){var i=s(144),n=s(6286),o=s(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,n=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,o.vO)(this.$refs.link,s)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2936:function(t,e,s){s.d(e,{d:function(){return n}});var i=s(144);function n(t="value",e="input"){return i.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const o=n();e["Z"]=o},5695:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"link-arrow"},[0===t.block.type?i("div",{staticClass:"ql-editor pa-0",staticStyle:{"min-height":"0"},domProps:{innerHTML:t._s(t.block.content.text)}}):t._e(),1===t.block.type?i("v-row",t._l(t.block.content.blocks,(function(t,e){return i("v-col",{key:e,attrs:{cols:"12",md:"6"}},[i("BaseNewsBlocks",{attrs:{block:t}})],1)})),1):t._e(),2===t.block.type?i("div",{staticStyle:{position:"relative"}},[i("v-img",{attrs:{width:"100%",src:t.block.content.imgName.croppie}}),i("div",{staticClass:"text-body-1 pt-2",staticStyle:{opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")]),t.edit?i("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(e){return t.$emit("beforeCropInsert")}}},[i("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1):t._e()],1):t._e(),3===t.block.type?i("div",[i("CarouselComponent",{attrs:{slider:t.block.content.imagesName,columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"pa-2"},[i("img",{class:"carousel-img-"+t.block.id,staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"",src:e.item.croppie},on:{load:function(s){return t.getHeight(e.item.croppie)}}})])])]}},{key:"subtitle",fn:function(){return[i("div",{staticClass:"text-body-1 pl-2",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.content.text)+" ")])]},proxy:!0},t.edit?{key:"index",fn:function(e){return[i("v-btn",{staticClass:"rounded-0 rounded-bl-circle btn-edit",attrs:{icon:"",color:"white"},on:{click:function(s){return t.$emit("beforeCropMultipleInsertOne",t.block,e.index)}}},[i("v-icon",{attrs:{color:"#0071B2"}},[t._v(" mdi-pencil ")])],1)]}}:null],null,!0)})],1):t._e(),4===t.block.type?i("div",[i("div",{staticClass:"d-flex align-start"},[i("div",[i("v-img",{attrs:{width:"50",height:"50",src:s(3336)}})],1),i("div",{staticClass:"pl-4"},[t._v(" "+t._s(t.block.content.text)+" ")])]),i("div",{staticClass:"text-end font-weight-bold",staticStyle:{color:"#2DC0C5"}},[t._v(" "+t._s(t.block.content.author)+" ")])]):t._e(),5===t.block.type?i("div",[i("div",{staticClass:"text-h6 text-sm-h5 default-color"},[t._v(" "+t._s(t.block.content.text)+" ")])]):t._e()],1)},n=[],o={name:"BaseNewsBlocks",components:{CarouselComponent:()=>Promise.all([s.e(8722),s.e(4967)]).then(s.bind(s,8722))},props:{block:{type:Object,default:null},edit:{type:Boolean,default:!1}},emits:["beforeCropInsert","beforeCropMultipleInsertOne"],methods:{getHeight(t){if(t){let e=new Image;e.onload=()=>{let t=e.height;document.querySelectorAll(".carousel-img-"+this.block.id).length&&(t=Math.min(t,document.querySelectorAll(".carousel-img-"+this.block.id)[0].height),document.querySelectorAll(".carousel-img-"+this.block.id).forEach((e=>e.height=t)))},e.src=t}}}},r=o,a=s(1001),l=s(3453),c=s.n(l),h=s(680),u=s(2102),d=s(6428),p=s(7047),v=s(2877),b=(0,a.Z)(r,i,n,!1,null,null,null),g=b.exports;c()(b,{VBtn:h.Z,VCol:u.Z,VIcon:d.Z,VImg:p.Z,VRow:v.Z})},3336:function(t,e,s){t.exports=s.p+"img/bxs_quote-alt-left.c5a4e697.svg"}}]);
//# sourceMappingURL=5695.490d85b6.js.map