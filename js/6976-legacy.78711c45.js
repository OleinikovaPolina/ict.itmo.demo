"use strict";(self["webpackChunkict_itmo"]=self["webpackChunkict_itmo"]||[]).push([[6976],{40561:function(e,t,r){var i=r(82109),n=r(17854),o=r(51400),l=r(19303),f=r(26244),a=r(47908),c=r(65417),h=r(86135),s=r(81194),u=s("splice"),d=n.TypeError,p=Math.max,m=Math.min,g=9007199254740991,k="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,i,n,s,u,w,x=a(this),M=f(x),b=o(e,M),v=arguments.length;if(0===v?r=i=0:1===v?(r=0,i=M-b):(r=v-2,i=m(p(l(t),0),M-b)),M+r-i>g)throw d(k);for(n=c(x,i),s=0;s<i;s++)u=b+s,u in x&&h(n,s,x[u]);if(n.length=i,r<i){for(s=b;s<M-i;s++)u=s+i,w=s+r,u in x?x[w]=x[u]:delete x[w];for(s=M;s>M-i+r;s--)delete x[s-1]}else if(r>i)for(s=M-i;s>b;s--)u=s+i-1,w=s+r-1,u in x?x[w]=x[u]:delete x[w];for(s=0;s<r;s++)x[s+b]=arguments[s+2];return x.length=M-i+r,n}})}}]);
//# sourceMappingURL=6976-legacy.78711c45.js.map