"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4777],{4777:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"anim-container"},[i("div",{staticClass:"anim-circle-1 rounded-circle"}),i("div",{staticClass:"anim-circle-2 rounded-circle"}),i("div",{staticClass:"anim-circle-3 rounded-circle"}),i("div",{staticClass:"anim-blue"}),i("div",{staticClass:"anim-circle-4 rounded-circle"}),i("div",{staticClass:"anim-green rounded-pill"}),i("div",{staticClass:"anim-orange rounded-pill"}),i("div",{staticClass:"anim-img-1 rounded-circle",on:{mouseover:function(t){return e.mouseOver(1)}}}),i("div",{staticClass:"anim-pink rounded-pill"}),i("div",{staticClass:"anim-purple rounded-pill"}),e._l([4,3,2,1],(function(t){return i("div",{key:t,staticClass:" rounded-circle",class:"anim-img-"+(t+1),on:{mouseover:function(i){return e.mouseOver(t+1)}}})}))],2)},n=[],s={name:"BaseHeaderAnimation",props:{animationHeader:{type:Boolean,default:!1}},data:()=>({times:[4,3,2,2,2],status:[0,0,0,0,0]}),watch:{animationHeader:function(e){!e&&localStorage.getItem("theme")&&setTimeout((()=>{this.fixPosition()}),4e3)}},mounted(){localStorage.getItem("theme")&&setTimeout((()=>{this.fixPosition()}),4e3)},methods:{fixPosition(){document.querySelector(".anim-container")&&(document.querySelector(".anim-container").classList.add("active-animation-header--finished"),document.querySelector(".anim-img-1").style.top="8%",document.querySelector(".anim-img-2").style.bottom="8%",document.querySelector(".anim-img-3").style.top="0",document.querySelector(".anim-img-4").style.bottom="0",document.querySelector(".anim-img-5").style.top="17.5%")},mouseOver(e){const t=document.querySelector(".active-animation-header--finished .anim-img-"+e);t&&(new Date).getTime()-this.status[e-1]>2e3*this.times[e-1]&&(t.classList.remove("active-animation-"+e),setTimeout((()=>{t.classList.add("active-animation-"+e),this.status[e-1]=(new Date).getTime()}),100))}}},o=s,c=i(1001),r=(0,c.Z)(o,a,n,!1,null,"8fa778e4",null),m=r.exports}}]);
//# sourceMappingURL=4777.7911c0dc.js.map