"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1548],{41541:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"d-flex justify-space-between align-center pb-md-2"},[e("div",{staticClass:"text-h6 text-sm-h4 text-xl-h3",staticStyle:{"line-height":"normal"}},[t._v(" "+t._s(t.data.title)+" ")]),e("div",{staticClass:"d-flex"},[t.data.datePublish?e("div",[t._v(" "+t._s(t.$moment(t.data.datePublish).format("DD.MM.YYYY")+", "+t.data.timePublish)+" ")]):t._e(),t.data.datePublished?e("div",[t._v(" "+t._s(t.$moment(t.data.datePublished).format("DD.MM.YYYY, HH:mm"))+" ")]):t._e(),t.data.views?e("div",{staticClass:"pl-6 d-flex align-center"},[e("v-icon",{staticClass:"mr-1",attrs:{color:"#00A1FF"}},[t._v(" mdi-eye ")]),t._v(" "+t._s(t.data.views)+" ")],1):t._e()])]),t.data.tags?e("div",{staticClass:"d-flex flex-wrap pb-md-2"},t._l(t.data.tags,(function(t,a){return e("BaseChip",{key:a,staticClass:"mt-2",attrs:{item:t}})})),1):t._e(),t.data.place?e("div",[e("b",[t._v("Место проведения: ")]),t._v(t._s(t.data.place)+" ")]):t._e(),(t.data.dateStart||t.data.date)&&t.isDate?e("div",[e("b",[t._v("Дата проведения: ")]),t.data.timeStart?e("span",[t._v(t._s(t.data.timeStart)+" ")]):t._e(),"00"!==t.$moment(t.data.dateStart||t.data.date).format("HH")?e("span",[t._v(" "+t._s(t.$moment(t.data.dateStart||t.data.date).format("HH:mm"))+" ")]):t._e(),e("span",[t._v(" "+t._s(t.$moment(t.data.dateStart||t.data.date).format("D MMMM YYYY года"))+" ")]),t.data.dateEnd&&t.$moment(t.data.dateStart).format("D MMMM YYYY года")!==t.$moment(t.data.dateEnd).format("D MMMM YYYY года")?e("span",[t._v(" - "+t._s(t.$moment(t.data.dateEnd).format("D MMMM YYYY года"))+" ")]):t._e()]):t._e(),t._l(t.data.blocks,(function(t,a){return e("div",{key:a,staticClass:"pt-6"},[e("BaseNewsBlocks",{attrs:{block:t,index:a}})],1)}))],2)},d=[],n=(e(41539),e(78783),e(33948),{name:"BaseNews",components:{BaseNewsBlocks:function(){return e.e(3853).then(e.bind(e,83853))},BaseChip:function(){return e.e(4494).then(e.bind(e,44494))}},props:{data:{type:Object,default:null},isDate:{type:Boolean,default:!0}}}),i=n,l=e(1001),m=e(43453),r=e.n(m),o=e(96428),c=(0,l.Z)(i,s,d,!1,null,null,null),_=c.exports;r()(c,{VIcon:o.Z})}}]);
//# sourceMappingURL=1548-legacy.471bac14.js.map