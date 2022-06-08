"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[5679,8154],{2877:function(t,e,n){n(7273);var l=n(144),s=n(6290),i=n(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function r(t,e){return o.reduce(((n,l)=>(n[t+(0,i.jC)(l)]=e(),n)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),u=r("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...a,"space-between","space-around"].includes(t),g=r("justify",(()=>({type:String,default:null,validator:d}))),f=t=>[...a,"space-between","space-around","stretch"].includes(t),m=r("alignContent",(()=>({type:String,default:null,validator:f}))),p={align:Object.keys(u),justify:Object.keys(g),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){let l=h[t];if(null!=n){if(e){const n=e.replace(t,"");l+=`-${n}`}return l+=`-${n}`,l.toLowerCase()}}const b=new Map;e["Z"]=l.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...g,alignContent:{type:String,default:null,validator:f},...m},render(t,{props:e,data:n,children:l}){let i="";for(const s in e)i+=String(e[s]);let o=b.get(i);if(!o){let t;for(t in o=[],p)p[t].forEach((n=>{const l=e[n],s=y(t,n,l);s&&o.push(s)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(i,o)}return t(e.tag,(0,s.ZP)(n,{staticClass:"row",class:o}),l)}})},5679:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.block.title&&t.block.description&&t.block.sliderImagesNames.length?n("v-row",{staticClass:"d-flex align-center justify-center pt-xl-8"},[n("v-col",{staticClass:"text-center d-md-none"},[n("div",{staticClass:"text-h5 text-sm-h4"},[t._v(" "+t._s(t.block.title)+" ")])]),n("v-col",{staticClass:"d-flex flex-column justify-space-around order-2 order-md-0 ",class:t.$vuetify.breakpoint.smAndDown?"text-center":"",attrs:{cols:"12",md:"6",lg:"5"}},[n("div",[n("div",{staticClass:"pb-8 text-h4 text-xl-h3 d-none d-md-block"},[t._v(" "+t._s(t.block.title)+" ")]),n("div",{staticClass:"text-subtitle-1 pb-6 default-color",domProps:{innerHTML:t._s(t.block.description)}})]),n("div",{staticClass:"mx-auto mx-md-0"},[n("BaseButton",{attrs:{link:"/article/2"}})],1)]),n("v-col",{attrs:{cols:"12",md:"6",lg:"7"}},[n("CarouselComponent",{attrs:{slider:t.block.sliderImagesNames.map((function(t){return t.croppie})),columns:1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-col",{attrs:{cols:"12"}},[n("div",[n("img",{staticClass:"carousel-img",staticStyle:{"object-fit":"contain",width:"100%"},attrs:{alt:"...",src:e.item},on:{load:function(e){return t.getHeight()}}})])])]}},{key:"subtitle",fn:function(){return[n("div",{staticClass:"text-body-1",staticStyle:{position:"absolute",opacity:"0.7"}},[t._v(" "+t._s(t.block.sliderText)+" ")])]},proxy:!0}],null,!1,2482566893)})],1)],1):t._e()},s=[],i={name:"BaseStudentsHackathon",components:{CarouselComponent:()=>Promise.all([n.e(3354),n.e(4859)]).then(n.bind(n,3354)),BaseButton:()=>n.e(7625).then(n.bind(n,7625))},props:{block:{type:Object,default:null}},methods:{getHeight(){if(this.block.sliderImagesNames[0]){let t=new Image;t.onload=()=>{let e=t.height;document.querySelectorAll(".carousel-img").length&&(e=Math.min(e,document.querySelectorAll(".carousel-img")[0].height),document.querySelectorAll(".carousel-img").forEach((t=>t.height=e)))},t.src=this.block.sliderImagesNames[0].croppie}}}},o=i,a=n(1001),r=n(3453),c=n.n(r),u=n(2102),d=n(2877),g=(0,a.Z)(o,l,s,!1,null,null,null),f=g.exports;c()(g,{VCol:u.Z,VRow:d.Z})}}]);
//# sourceMappingURL=5679.84569d95.js.map