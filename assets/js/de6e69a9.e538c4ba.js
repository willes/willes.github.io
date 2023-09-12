"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[5513],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(28957),o=(n(59496),n(49613));const a={title:"IntersectionObserver API \u7528\u6cd5",slug:"/intersection",authors:"oxygen"},i=void 0,c={permalink:"/intersection",source:"@site/blog/2022-10-29-IntersectionObserver\u7528\u6cd5.md",title:"IntersectionObserver API \u7528\u6cd5",description:"\u5f53\u6211\u4eec\u8bf4\u5230\u56fe\u7247\u61d2\u52a0\u8f7d\u3001\u9875\u9762\u6570\u636e\u7684\u6eda\u52a8\u52a0\u8f7d\u8fd9\u4e9b\u4f53\u9a8c\u8bbe\u8ba1\u65f6\uff0c\u4e00\u822c\u80fd\u591f\u60f3\u5230\u57fa\u4e8escroll\u4e8b\u4ef6\uff0c\u901a\u8fc7getBoundingClientRect\u65b9\u6cd5\u83b7\u53d6\u5143\u7d20\u76f8\u5bf9\u4e8e\u89c6\u53e3\u504f\u79fb\u91cftop\uff0c\u6765\u5224\u65ad\u5143\u7d20\u662f\u5426\u53ef\u89c1\uff0cdemo \u5982\u4e0b",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[],readingTime:12.42,hasTruncateMarker:!0,authors:[{name:"Oxygen",title:"Front End Engineer",url:"https://github.com/wood3n",imageURL:"https://raw.githubusercontent.com/wood3n/wood3n/master/31716713.jpg",key:"oxygen"}],frontMatter:{title:"IntersectionObserver API \u7528\u6cd5",slug:"/intersection",authors:"oxygen"},nextItem:{title:"web\u56fe\u50cf\u683c\u5f0f\u5bf9\u6bd4\uff08\u4e09\uff09",permalink:"/webimage3"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u8bf4\u5230\u56fe\u7247\u61d2\u52a0\u8f7d\u3001\u9875\u9762\u6570\u636e\u7684\u6eda\u52a8\u52a0\u8f7d\u8fd9\u4e9b\u4f53\u9a8c\u8bbe\u8ba1\u65f6\uff0c\u4e00\u822c\u80fd\u591f\u60f3\u5230\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event"},(0,o.kt)("inlineCode",{parentName:"a"},"scroll")),"\u4e8b\u4ef6\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect"),"\u65b9\u6cd5\u83b7\u53d6\u5143\u7d20\u76f8\u5bf9\u4e8e\u89c6\u53e3\u504f\u79fb\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"top"),"\uff0c\u6765\u5224\u65ad\u5143\u7d20\u662f\u5426\u53ef\u89c1\uff0cdemo \u5982\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/jovial-snowflake-e42869?fontsize=14&hidenavigation=1&theme=dark"},(0,o.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit jovial-snowflake-e42869"}))),(0,o.kt)("p",null,"\u8fd9\u79cd\u5b9e\u73b0\u65b9\u5f0f\u8f83\u4e3a\u7e41\u7410\uff0c\u4f46\u662f\u73b0\u5728\u6211\u4eec\u6709\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," API\uff0c\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u8fd9\u4e9b\u901a\u8fc7\u8ba1\u7b97\u5143\u7d20\u504f\u79fb\u91cf\u6765\u5224\u65ad\u53ef\u89c6\u6027\u7684\u903b\u8f91\u3002"))}m.isMDXComponent=!0}}]);