"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[9649],{3385:function(t,e,s){s.d(e,{Z:function(){return u}});var n=s(6210),a=s(6952),o=s(3377),i=s(2529),r=s(3712),l=s(8085),c=s(3325),u=(0,c.Z)(n.Z,a.Z,o.Z,i.Z,r.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},6210:function(t,e,s){var n=s(144);function a(t){return function(e,s){for(const n in s)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(const n in e)this.$set(this.$data[t],n,e[n])}}e["Z"]=n.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},6952:function(t,e,s){var n=s(144),a=s(1824),o=s(7093);e["Z"]=n.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,a.N6)("style must be an object",this),e):"string"===typeof e.class?((0,a.N6)("class must be an object",this),e):((0,o.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,a.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,a.N6)("class must be an object",this),e;if((0,o.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[s,n]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},n&&(e.class["text--"+n]=!0)}return e}}})},3377:function(t,e,s){var n=s(144);e["Z"]=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3712:function(t,e,s){var n=s(144);e["Z"]=n.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const s=e.split(" ");for(const e of s)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},9649:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":"",align:"stretch"}},[s("div",{staticClass:"pr-3"},[s("v-sheet",{staticClass:"announ-calendar d-flex flex-column justify-center align-center"},[s("div",{staticClass:"announ-calendar-circles d-flex "},t._l(4,(function(t){return s("div",{key:t,staticClass:"rounded-circle"})})),0),s("div",{staticClass:"announ-calendar-day pt-1"},[t._v(" "+t._s(t.$moment(t.announ.dateStart).format("DD"))+" ")]),s("div",{staticClass:"announ-calendar-month"},[t._v(" "+t._s(t.$moment(t.announ.dateStart).format("MMMM"))+" ")])])],1),s("div",{staticClass:"announ-text d-flex flex-column justify-space-between"},[s("div",[s("div",[s("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:"/announcement/"+t.announ.id}},[t._v(" "+t._s(t.announ.title)+" ")])],1),s("div",[t._v(t._s(t.announ.place+", "+t.$moment(t.announ.dateStart).format("HH:mm")+" "))])]),s("div",{staticClass:"d-flex flex-wrap"},t._l(t.announ.tags,(function(t,e){return s("BaseChip",{key:e,staticClass:"mt-1",attrs:{item:t}})})),1)])])],1)},a=[],o={name:"EventsAnnouncements",components:{BaseChip:()=>s.e(4494).then(s.bind(s,4494))},props:{announ:{type:Object,default:null}}},i=o,r=s(1001),l=s(3453),c=s.n(l),u=s(2877),d=s(3385),h=(0,r.Z)(i,n,a,!1,null,"2632d9ee",null),f=h.exports;c()(h,{VRow:u.Z,VSheet:d.Z})}}]);
//# sourceMappingURL=9649.8b13b5db.js.map