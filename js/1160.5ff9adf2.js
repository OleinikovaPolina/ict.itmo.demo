"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[1160,4548],{2877:function(t,n,e){e(7273);var l=e(144),a=e(6290),i=e(4589);const s=["sm","md","lg","xl"],o=["start","end","center"];function r(t,n){return s.reduce(((e,l)=>(e[t+(0,i.jC)(l)]=n(),e)),{})}const u=t=>[...o,"baseline","stretch"].includes(t),c=r("align",(()=>({type:String,default:null,validator:u}))),d=t=>[...o,"space-between","space-around"].includes(t),g=r("justify",(()=>({type:String,default:null,validator:d}))),f=t=>[...o,"space-between","space-around","stretch"].includes(t),p=r("alignContent",(()=>({type:String,default:null,validator:f}))),y={align:Object.keys(c),justify:Object.keys(g),alignContent:Object.keys(p)},j={align:"align",justify:"justify",alignContent:"align-content"};function C(t,n,e){let l=j[t];if(null!=e){if(n){const e=n.replace(t,"");l+=`-${e}`}return l+=`-${e}`,l.toLowerCase()}}const h=new Map;n["Z"]=l.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...g,alignContent:{type:String,default:null,validator:f},...p},render(t,{props:n,data:e,children:l}){let i="";for(const a in n)i+=String(n[a]);let s=h.get(i);if(!s){let t;for(t in s=[],y)y[t].forEach((e=>{const l=n[e],a=C(t,e,l);a&&s.push(a)}));s.push({"no-gutters":n.noGutters,"row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),h.set(i,s)}return t(n.tag,(0,a.ZP)(e,{staticClass:"row",class:s}),l)}})}}]);
//# sourceMappingURL=1160.5ff9adf2.js.map