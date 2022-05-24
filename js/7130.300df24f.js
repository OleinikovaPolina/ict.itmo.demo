"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7130],{624:function(t,e,s){s.d(e,{Z:function(){return n}});var i=s(8083),r=s(6952),a=s(4589),n=r.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,a.kb)(this.calculatedSize),width:(0,a.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},6952:function(t,e,s){var i=s(144),r=s(1824),a=s(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,a.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,a.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,i]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},765:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"text-decoration-none",staticStyle:{height:"100%"},attrs:{to:"/new/"+t.news.id}},[t.isLoad?s("v-img",{staticClass:"mb-4",style:{width:"100%"},attrs:{src:t.news.image["url"],"min-height":t.$vuetify.breakpoint.xsOnly?"65px":"100px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)]},proxy:!0}],null,!1,2426952748)}):t._e(),s("div",{staticClass:"news-subtitle mb-1"},[t._v(" "+t._s(t.$moment(t.news.date).format("D MMMM YYYY"))+" ")]),s("div",{staticClass:"news-name subtitle-color"},[t._v(" "+t._s(t.news.title)+" ")]),s("div",{staticClass:"d-flex flex-wrap pt-md-2"},t._l(t.news.tags,(function(t,e){return s("BaseChip",{key:e,staticClass:"mt-2",attrs:{item:t}})})),1)],1)},r=[],a={name:"BaseNews",components:{BaseChip:()=>s.e(4494).then(s.bind(s,4494))},props:{news:{type:Object,default:null}},data:()=>({isLoad:!0}),watch:{news:function(){this.isLoad=!1,setTimeout((()=>{this.isLoad=!0}))}}},n=a,l=s(1001),o=s(3453),c=s.n(o),u=s(7047),h=s(624),d=s(2877),m=(0,l.Z)(n,i,r,!1,null,"889e8d96",null),v=m.exports;c()(m,{VImg:u.Z,VProgressCircular:h.Z,VRow:d.Z})}}]);
//# sourceMappingURL=7130.300df24f.js.map