"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6119],{6119:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hex-container"},[t._l(t.hexArray,(function(e,r){return a("div",{key:r,staticClass:"hex-block",class:"hex-"+r},[a("div",{staticClass:"hex"},[a("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 208 268",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{filter:"url(#filter0_dd_1_5122"+r+")"}},[a("path",{attrs:{d:"M91.6282 17.3119C99.2839 12.896 108.716 12.896 116.372 17.3119L181.628 54.9518C189.284 59.3676 194 67.5284 194 76.36V191.64C194 200.472 189.284 208.632 181.628 213.048L116.372 250.688C108.716 255.104 99.2839 255.104 91.6282 250.688L26.3718 213.048C18.7161 208.632 14 200.472 14 191.64V76.36C14 67.5284 18.7161 59.3676 26.3718 54.9518L91.6282 17.3119Z",fill:"dark"===t.theme?"#070C2D":"white"}}),a("path",{attrs:{d:"M92.3777 18.6112C99.5695 14.4629 108.43 14.4629 115.622 18.6112L180.879 56.2512C188.07 60.3994 192.5 68.065 192.5 76.36V191.64C192.5 199.935 188.07 207.601 180.879 211.749L115.622 249.389C108.43 253.537 99.5695 253.537 92.3777 249.389L27.1213 211.749C19.9296 207.601 15.5 199.935 15.5 191.64V76.36C15.5 68.065 19.9296 60.3994 27.1213 56.2512L92.3777 18.6112Z",stroke:"dark"===t.theme?"#070C2D":"white","stroke-width":"3"}})]),a("defs",[a("filter",{attrs:{id:"filter0_dd_1_5122"+r,x:"0",y:"0",width:"208",height:"268",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[a("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),a("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),a("feOffset"),a("feGaussianBlur",{attrs:{stdDeviation:"7"}}),a("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),a("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0.0119097 0 0 0 0 0.263132 0 0 0 0 0.408333 0 0 0 0.1 0"}}),a("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1_5122"}}),a("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),a("feOffset"),a("feGaussianBlur",{attrs:{id:"ict-feGaussianBlur-"+r,stdDeviation:"2.5"}}),a("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),a("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.67451 0 0 0 0.2 0"}}),a("feBlend",{attrs:{mode:"normal",in2:"effect1_dropShadow_1_5122",result:""}}),a("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_1_5122",result:"shape"}})],1)])])]),a("div",{staticClass:"hex-content text-center d-flex flex-column align-center justify-center",on:{mouseout:function(e){return t.hexHoverNot(r)},mouseover:function(e){return t.hexHover(r)}}},[a("v-img",{staticClass:"mx-auto hex-img",attrs:{width:"100%",contain:"",src:e.img}}),a("div",{staticClass:"hex-text subtitle-color"},[t._v(" "+t._s(e.text)+" ")])],1)])})),a("div",{staticClass:"hex-btn"},[a("base-button",{attrs:{link:t.link,"small-btn":!0}})],1)],2)},i=[],s=a(629),o={name:"BaseHexagonContainer",components:{BaseButton:()=>a.e(7625).then(a.bind(a,7625))},props:{hexArray:{type:Array,default:null},link:{type:String,default:"/"}},data:()=>({scrolled:!1}),computed:(0,s.rn)("app",["theme"]),watch:{scrolled(t){t&&document.querySelectorAll(".hex-container").forEach((function(t){t.classList.add("active-animation"),setTimeout((()=>{t.classList.add("active-animation--finished")}),3e3)}))}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let t=document.querySelector(".hex-container"),{bottom:e}=t.getBoundingClientRect(),a=document.documentElement.clientHeight;this.scrolled||(this.scrolled=e<a&&e>0)},hexHover(t){const e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","10")},hexHoverNot(t){const e=document.querySelector(".active-animation--finished #ict-feGaussianBlur-"+t);e&&e.setAttribute("stdDeviation","2.5")}}},n=o,l=a(1001),c=a(3453),d=a.n(c),u=a(7047),h=(0,l.Z)(n,r,i,!1,null,"fcac4010",null),f=h.exports;d()(h,{VImg:u.Z})}}]);
//# sourceMappingURL=6119.741a971d.js.map