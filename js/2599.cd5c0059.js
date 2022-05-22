"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2599],{3385:function(t,e,n){n.d(e,{Z:function(){return u}});var s=n(6210),a=n(6952),o=n(3377),i=n(2529),r=n(3712),l=n(8085),c=n(3325),u=(0,c.Z)(s.Z,a.Z,o.Z,i.Z,r.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},6210:function(t,e,n){var s=n(144);function a(t){return function(e,n){for(const s in n)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},6952:function(t,e,n){var s=n(144),a=n(1824),o=n(7093);e["Z"]=s.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,a.N6)("style must be an object",this),e):"string"===typeof e.class?((0,a.N6)("class must be an object",this),e):((0,o.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,a.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,a.N6)("class must be an object",this),e;if((0,o.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,s]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},3377:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3712:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},2599:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":"",align:"stretch"}},[n("div",{staticClass:"pr-3"},[n("v-sheet",{staticClass:"announcement-calendar d-flex flex-column justify-center align-center"},[n("div",{staticClass:"announcement-calendar-circles d-flex "},t._l(4,(function(t){return n("div",{key:t,staticClass:"rounded-circle"})})),0),n("div",{staticClass:"announcement-calendar-day pt-1"},[t._v(" "+t._s(t.$moment(t.announcement.dateStart).format("DD"))+" ")]),n("div",{staticClass:"announcement-calendar-month"},[t._v(" "+t._s(t.$moment(t.announcement.dateStart).format("MMMM"))+" ")])])],1),n("div",{staticClass:"announcement-text d-flex flex-column justify-space-between"},[n("div",[n("div",{staticClass:"pb-1"},[n("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:"/announcement/"+t.announcement.id}},[t._v(" "+t._s(t.announcement.title)+" ")])],1),n("div",[t._v(t._s(t.announcement.place+", "+t.$moment(t.announcement.dateStart).format("HH:mm")+" "))])]),n("div",{staticClass:"d-flex flex-wrap"},t._l(t.announcement.tags,(function(t,e){return n("BaseChip",{key:e,staticClass:"mt-1",attrs:{item:t}})})),1)])])],1)},a=[],o={name:"EventsAnnouncements",components:{BaseChip:()=>n.e(4494).then(n.bind(n,4494))},props:{announcement:{type:Object,default:null}}},i=o,r=n(1001),l=n(3453),c=n.n(l),u=n(2877),d=n(3385),h=(0,r.Z)(i,s,a,!1,null,"daf283e6",null),m=h.exports;c()(h,{VRow:u.Z,VSheet:d.Z})}}]);
//# sourceMappingURL=2599.cd5c0059.js.map