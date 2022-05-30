"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[919,1498],{62877:function(t,e,n){var l=n(23796),a=n(4367),i=(n(41539),n(26699),n(32023),n(92222),n(47941),n(74916),n(15306),n(51532),n(78783),n(33948),n(54747),n(17273),n(20144)),o=n(76290),r=n(4589),s=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return s.reduce((function(n,l){return n[t+(0,r.jC)(l)]=e(),n}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),g=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},m=u("justify",(function(){return{type:String,default:null,validator:g}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:p}})),h={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var l=y[t];if(null!=n){if(e){var a=e.replace(t,"");l+="-".concat(a)}return l+="-".concat(n),l.toLowerCase()}}var C=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:(0,a.Z)((0,a.Z)((0,a.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:g}},m),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var n=e.props,a=e.data,i=e.children,r="";for(var s in n)r+=String(n[s]);var c=C.get(r);return c||function(){var t,e;for(e in c=[],h)h[e].forEach((function(t){var l=n[t],a=b(e,t,l);a&&c.push(a)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},(0,l.Z)(t,"align-".concat(n.align),n.align),(0,l.Z)(t,"justify-".concat(n.justify),n.justify),(0,l.Z)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(r,c)}(),t(n.tag,(0,o.ZP)(a,{staticClass:"row",class:c}),i)}})},90919:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.block.title&&t.block.description&&t.block.sliderImagesNames.length?n("v-row",{staticClass:"d-flex align-center justify-center pt-xl-8"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h5 text-sm-h4"},[t._v(" "+t._s(t.block.title)+" ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0 ",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" "+t._s(t.block.title)+" ")]),n("div",{staticClass:"text-subtitle-1 pb-6",domProps:{innerHTML:t._s(t.block.description)}})]),n("div",{staticClass:"mx-auto mx-md-0"},[n("BaseButton",{attrs:{link:"/article/2"}})],1)]),n("v-col",{attrs:{cols:"12",md:"6",lg:"7"}},[n("CarouselComponent",{attrs:{slider:t.block.sliderImagesNames.map((function(t){return t.croppie})),columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-col",{attrs:{cols:"12"}},[n("div",[n("img",{staticClass:"carousel-img",staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"...",src:e.item},on:{load:function(e){return t.getHeight()}}})])])]}},{key:"subtitle",fn:function(){return[n("div",{staticClass:"text-body-1",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.sliderText)+" ")])]},proxy:!0}],null,!1,2482566893)})],1)],1):t._e()},a=[],i=(n(41539),n(78783),n(33948),n(54747),{name:"BaseStudentsHackathon",components:{CarouselComponent:function(){return Promise.all([n.e(9072),n.e(5093)]).then(n.bind(n,9072))},BaseButton:function(){return n.e(7625).then(n.bind(n,37625))}},props:{block:{type:Object,default:null}},methods:{getHeight:function(){if(this.block.sliderImagesNames[0]){var t=new Image;t.onload=function(){var e=t.height;document.querySelectorAll(".carousel-img").length&&(e=Math.min(e,document.querySelectorAll(".carousel-img")[0].height),document.querySelectorAll(".carousel-img").forEach((function(t){return t.height=e})))},t.src=this.block.sliderImagesNames[0].croppie}}}}),o=i,r=n(1001),s=n(43453),c=n.n(s),u=n(82102),d=n(62877),f=(0,r.Z)(o,l,a,!1,null,null,null),g=f.exports;c()(f,{VCol:u.Z,VRow:d.Z})}}]);
//# sourceMappingURL=919-legacy.46d858f9.js.map