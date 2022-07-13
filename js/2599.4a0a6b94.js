"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[2599],{3385:function(t,e,n){n.d(e,{Z:function(){return c}});var s=n(6210),i=n(6952),a=n(3377),r=n(2529),o=n(3712),l=n(8085),u=n(3325),c=(0,u.Z)(s.Z,i.Z,a.Z,r.Z,o.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},6210:function(t,e,n){var s=n(144);function i(t){return function(e,n){for(const s in n)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},3377:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},2529:function(t,e,n){var s=n(4589),i=n(144);e["Z"]=i.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),n=(0,s.kb)(this.minHeight),i=(0,s.kb)(this.minWidth),a=(0,s.kb)(this.maxHeight),r=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),i&&(t.minWidth=i),a&&(t.maxHeight=a),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},3712:function(t,e,n){var s=n(144);e["Z"]=s.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},2599:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":"",align:"stretch"}},[n("div",{staticClass:"pr-3"},[n("v-sheet",{staticClass:"announcement-calendar d-flex flex-column justify-center align-center"},[n("div",{staticClass:"announcement-calendar-circles d-flex "},t._l(4,(function(t){return n("div",{key:t,staticClass:"rounded-circle"})})),0),n("div",{staticClass:"announcement-calendar-day pt-1"},[t._v(" "+t._s(t.$moment(t.announcement.dateStart).format("DD"))+" ")]),n("div",{staticClass:"announcement-calendar-month"},[t._v(" "+t._s(t.$moment(t.announcement.dateStart).format("MMMM"))+" ")])])],1),n("div",{staticClass:"announcement-text d-flex flex-column justify-space-between"},[n("div",[n("div",{staticClass:"pb-1"},[n("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:"/announcement/"+t.announcement.id}},[t._v(" "+t._s(t.announcement.title)+" ")])],1),n("div",[t._v(t._s(t.announcement.place+", "+t.$moment(t.announcement.dateStart).format("HH:mm")+" "))])]),n("div",{staticClass:"d-flex flex-wrap"},t._l(t.announcement.tags,(function(t,e){return n("BaseChip",{key:e,staticClass:"mt-1",attrs:{item:t}})})),1)])])],1)},i=[],a={name:"EventsAnnouncements",components:{BaseChip:()=>n.e(4494).then(n.bind(n,4494))},props:{announcement:{type:Object,default:null}}},r=a,o=n(1001),l=n(3453),u=n.n(l),c=n(2877),d=n(3385),h=(0,o.Z)(r,s,i,!1,null,"daf283e6",null),m=h.exports;u()(h,{VRow:c.Z,VSheet:d.Z})}}]);
//# sourceMappingURL=2599.4a0a6b94.js.map