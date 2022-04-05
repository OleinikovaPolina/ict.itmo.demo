"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6409],{83385:function(t,e,n){n.d(e,{Z:function(){return d}});var s=n(4367),a=n(66210),o=n(46952),i=n(93377),r=n(42529),l=n(93712),c=n(48085),u=n(73325),d=(0,u.Z)(a.Z,o.Z,i.Z,r.Z,l.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return(0,s.Z)((0,s.Z)((0,s.Z)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},66210:function(t,e,n){var s=n(20144);function a(t){return function(e,n){for(var s in n)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(var a in e)this.$set(this.$data[t],a,e[a])}}e["Z"]=s.Z.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},46952:function(t,e,n){var s=n(75200),a=n(23796),o=n(4367),i=(n(74916),n(23123),n(73210),n(41539),n(39714),n(20144)),r=n(71824),l=n(17093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,l.NA)(t)?e.style=(0,o.Z)((0,o.Z)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=(0,o.Z)((0,o.Z)({},e.class),{},(0,a.Z)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,l.NA)(t))e.style=(0,o.Z)((0,o.Z)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var n=t.toString().trim().split(" ",2),i=(0,s.Z)(n,2),c=i[0],u=i[1];e.class=(0,o.Z)((0,o.Z)({},e.class),{},(0,a.Z)({},c+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},93377:function(t,e,n){var s=n(23796),a=(n(9653),n(20144));e["Z"]=a.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:(0,s.Z)({},"elevation-".concat(this.elevation),!0)}}})},93712:function(t,e,n){var s=n(23796),a=n(62032),o=(n(74916),n(23123),n(69600),n(20144));e["Z"]=o.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var n,o=e.split(" "),i=(0,a.Z)(o);try{for(i.s();!(n=i.n()).done;){var r=n.value;t.push("rounded-".concat(r))}}catch(l){i.e(l)}finally{i.f()}}else e&&t.push("rounded");return t.length>0?(0,s.Z)({},t.join(" "),!0):{}}}})},16409:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"4",md:"3"}},[n("v-sheet",{staticClass:"announ-calendar d-flex flex-column justify-center align-center"},[n("div",{staticClass:"announ-calendar-circles d-flex "},t._l(4,(function(t){return n("div",{key:t,staticClass:"rounded-circle"})})),0),n("div",{staticClass:"announ-calendar-day pt-1"},[t._v(" "+t._s(t.announ.date.getDate())+" ")]),n("div",{staticClass:"announ-calendar-month"},[t._v(" "+t._s(t.announ.month)+" ")])])],1),n("v-col",{staticClass:"announ-text",attrs:{cols:"8",md:"9"}},[n("div",[n("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:"/new/"+t.announ.id}},[t._v(" "+t._s(t.announ.name)+" ")])],1),n("div",[t._v(t._s(t.announ.place+", "+t.announ.date.getHours()+":"+t.announ.date.getMinutes()+" "))]),n("div",{staticClass:"d-flex flex-wrap"},t._l(t.announ.items,(function(t,e){return n("BaseChip",{key:e,attrs:{item:t}})})),1)])],1)],1)},a=[],o=(n(41539),n(78783),n(33948),{name:"EventsAnnouncements",components:{BaseChip:function(){return n.e(5178).then(n.bind(n,45178))}},props:{announ:{type:Object,default:null}}}),i=o,r=n(1001),l=n(43453),c=n.n(l),u=n(82102),d=n(62877),h=n(83385),f=(0,r.Z)(i,s,a,!1,null,"3662ec9d",null),v=f.exports;c()(f,{VCol:u.Z,VRow:d.Z,VSheet:h.Z})}}]);
//# sourceMappingURL=6409-legacy.41471ba1.js.map