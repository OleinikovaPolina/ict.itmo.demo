"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[7591],{7591:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"anim-container"},[t("div",{staticClass:"anim-circle-1 rounded-circle"}),t("div",{staticClass:"anim-circle-2 rounded-circle"}),t("div",{staticClass:"anim-circle-3 rounded-circle"}),t("div",{staticClass:"anim-blue"}),t("div",{staticClass:"anim-circle-4 rounded-circle"}),t("div",{staticClass:"anim-green rounded-pill"}),t("div",{staticClass:"anim-orange rounded-pill"}),t("div",{staticClass:"anim-img-1 rounded-circle",on:{mouseover:function(i){return e.mouseOver(1)}}}),t("div",{staticClass:"anim-img-4 rounded-circle",on:{mouseover:function(i){return e.mouseOver(4)}}}),t("div",{staticClass:"anim-img-3 rounded-circle",on:{mouseover:function(i){return e.mouseOver(3)}}}),t("div",{staticClass:"anim-pink rounded-pill"}),t("div",{staticClass:"anim-purple rounded-pill"}),t("div",{staticClass:"anim-img-5 rounded-circle",on:{mouseover:function(i){return e.mouseOver(5)}}}),t("div",{staticClass:"anim-img-2 rounded-circle",on:{mouseover:function(i){return e.mouseOver(2)}}})])},a=[],s={name:"BaseHeaderAnimation",props:{animationHeader:{type:Boolean,default:!1}},data:()=>({times:[4,3,2,2,2],status:[0,0,0,0,0]}),watch:{animationHeader:function(e){!e&&localStorage.getItem("theme")&&setTimeout((()=>{this.fixPosition()}),4e3)}},mounted(){localStorage.getItem("theme")&&setTimeout((()=>{this.fixPosition()}),4e3)},methods:{fixPosition(){document.querySelector(".anim-container")&&(document.querySelector(".anim-container").classList.add("active-animation-header--finished"),document.querySelector(".anim-img-1").style.top="8%",document.querySelector(".anim-img-2").style.bottom="8%",document.querySelector(".anim-img-3").style.top="0",document.querySelector(".anim-img-4").style.bottom="0",document.querySelector(".anim-img-5").style.top="17.1%")},mouseOver(e){const i=document.querySelector(".active-animation-header--finished .anim-img-"+e);i&&(new Date).getTime()-this.status[e-1]>2e3*this.times[e-1]&&(i.classList.remove("active-animation-"+e),setTimeout((()=>{i.classList.add("active-animation-"+e),this.status[e-1]=(new Date).getTime()}),100))}}},o=s,c=t(1001),r=(0,c.Z)(o,n,a,!1,null,"04ccee88",null),m=r.exports}}]);
//# sourceMappingURL=7591.27de8769.js.map