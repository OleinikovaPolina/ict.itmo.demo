"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[4777],{14777:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"anim-container"},[i("div",{staticClass:"anim-circle-1 rounded-circle"}),i("div",{staticClass:"anim-circle-2 rounded-circle"}),i("div",{staticClass:"anim-circle-3 rounded-circle"}),i("div",{staticClass:"anim-blue"}),i("div",{staticClass:"anim-circle-4 rounded-circle"}),i("div",{staticClass:"anim-green rounded-pill"}),i("div",{staticClass:"anim-orange rounded-pill"}),i("div",{staticClass:"anim-img-1 rounded-circle",on:{mouseover:function(t){return e.mouseOver(1)}}}),i("div",{staticClass:"anim-pink rounded-pill"}),i("div",{staticClass:"anim-purple rounded-pill"}),e._l([4,3,2,1],(function(t){return i("div",{key:t,staticClass:" rounded-circle",class:"anim-img-"+(t+1),on:{mouseover:function(i){return e.mouseOver(t+1)}}})}))],2)},a=[],o={name:"BaseHeaderAnimation",props:{animationHeader:{type:Boolean,default:!1}},data:function(){return{times:[4,3,2,2,2],status:[0,0,0,0,0]}},watch:{animationHeader:function(e){var t=this;!e&&localStorage.getItem("theme")&&setTimeout((function(){t.fixPosition()}),4e3)}},mounted:function(){var e=this;localStorage.getItem("theme")&&setTimeout((function(){e.fixPosition()}),4e3)},methods:{fixPosition:function(){document.querySelector(".anim-container")&&(document.querySelector(".anim-container").classList.add("active-animation-header--finished"),document.querySelector(".anim-img-1").style.top="8%",document.querySelector(".anim-img-2").style.bottom="8%",document.querySelector(".anim-img-3").style.top="0",document.querySelector(".anim-img-4").style.bottom="0",document.querySelector(".anim-img-5").style.top="17.5%")},mouseOver:function(e){var t=this,i=document.querySelector(".active-animation-header--finished .anim-img-"+e);i&&(new Date).getTime()-this.status[e-1]>2e3*this.times[e-1]&&(i.classList.remove("active-animation-"+e),setTimeout((function(){i.classList.add("active-animation-"+e),t.status[e-1]=(new Date).getTime()}),100))}}},s=o,c=i(1001),r=(0,c.Z)(s,n,a,!1,null,"8fa778e4",null),m=r.exports}}]);
//# sourceMappingURL=4777-legacy.022c7f0d.js.map