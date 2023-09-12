"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[584],{49613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(28957),o=(r(59496),r(49613));const i={title:"Promise A+\u89c4\u8303\u7684\u5b9e\u73b0",authors:"oxygen"},a=void 0,l={permalink:"/2022/01/02/Promise A+\u89c4\u8303\u7684\u5b9e\u73b0",source:"@site/blog/2022-01-02-Promise A+\u89c4\u8303\u7684\u5b9e\u73b0.md",title:"Promise A+\u89c4\u8303\u7684\u5b9e\u73b0",description:"Promise/A+",date:"2022-01-02T00:00:00.000Z",formattedDate:"2022\u5e741\u67082\u65e5",tags:[],readingTime:17.35,hasTruncateMarker:!0,authors:[{name:"Oxygen",title:"Front End Engineer",url:"https://github.com/wood3n",imageURL:"https://raw.githubusercontent.com/wood3n/wood3n/master/31716713.jpg",key:"oxygen"}],frontMatter:{title:"Promise A+\u89c4\u8303\u7684\u5b9e\u73b0",authors:"oxygen"},prevItem:{title:"monorepo",permalink:"/2022/01/02/monorepo"},nextItem:{title:"GitHub\u4e0d\u518d\u652f\u6301\u5bc6\u7801\u767b\u5f55\u9a8c\u8bc1",permalink:"/2021/10/30/GitHub\u4e0d\u518d\u652f\u6301\u5bc6\u7801\u767b\u5f55\u9a8c\u8bc1"}},p={authorsImageUrls:[void 0]},m=[{value:"Promise/A+",id:"promisea",level:2},{value:"Promise \u5bf9\u8c61",id:"promise-\u5bf9\u8c61",level:3}],c={toc:m},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"promisea"},"Promise/A+"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://promisesaplus.com/#terminology"},"https://promisesaplus.com/#terminology"))),(0,o.kt)("h3",{id:"promise-\u5bf9\u8c61"},"Promise \u5bf9\u8c61"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570\uff0c\u5e76\u4e14\u5e26\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"then"),"\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5f53\u524d\u72b6\u6001",(0,o.kt)("inlineCode",{parentName:"li"},"state"),"\uff0c\u53ef\u4ee5\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"pending"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff0c\u4e14",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"rejected"),"\u4e0d\u53ef\u88ab\u6539\u53d8"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"resolve"),"\u503c",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uff0c\u53ef\u4ee5\u662f\u4efb\u4f55 JS \u503c\u7684\u5f62\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"reject"),"\u7684\u539f\u56e0",(0,o.kt)("inlineCode",{parentName:"li"},"reason"))))}s.isMDXComponent=!0}}]);