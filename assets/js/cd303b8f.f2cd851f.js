"use strict";(self.webpackChunkicodex_next=self.webpackChunkicodex_next||[]).push([[2816],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),s=r,d=m["".concat(o,".").concat(s)]||m[s]||k[s]||i;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},73855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=t(28957),r=(t(59496),t(49613));const i={title:"webpack\u5206\u5165\u53e3\u6253\u5305"},l=void 0,p={unversionedId:"engineer/webpack\u4f18\u5316/\u6839\u636e\u5165\u53e3\u62c6\u5206chunk",id:"engineer/webpack\u4f18\u5316/\u6839\u636e\u5165\u53e3\u62c6\u5206chunk",title:"webpack\u5206\u5165\u53e3\u6253\u5305",description:"\u601d\u8def",source:"@site/docs/engineer/webpack\u4f18\u5316/\u6839\u636e\u5165\u53e3\u62c6\u5206chunk.md",sourceDirName:"engineer/webpack\u4f18\u5316",slug:"/engineer/webpack\u4f18\u5316/\u6839\u636e\u5165\u53e3\u62c6\u5206chunk",permalink:"/docs/engineer/webpack\u4f18\u5316/\u6839\u636e\u5165\u53e3\u62c6\u5206chunk",draft:!1,tags:[],version:"current",frontMatter:{title:"webpack\u5206\u5165\u53e3\u6253\u5305"},sidebar:"engineer",previous:{title:"webpack\u6253\u5305\u5206\u6790\u5de5\u5177",permalink:"/docs/engineer/webpack\u4f18\u5316/webpack\u6253\u5305\u5206\u6790\u5de5\u5177"},next:{title:"\u7f16\u5199 webpack loader",permalink:"/docs/webpackloader"}},o={},u=[{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"entry",id:"entry",level:2},{value:"V4-entry",id:"v4-entry",level:3},{value:"V5-entry",id:"v5-entry",level:3},{value:"output",id:"output",level:2},{value:"html-webpack-plugin",id:"html-webpack-plugin",level:2}],c={toc:u},m="wrapper";function k(e){let{components:n,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u662f\u53ef\u4ee5\u8f7b\u6613\u505a\u5230\u5206\u5165\u53e3\u6253\u5305\u7684\uff0c\u4e3b\u8981\u601d\u8def\u5c31\u662f\u4ece\u4e0d\u540c",(0,r.kt)("inlineCode",{parentName:"p"},"entry"),"\u914d\u7f6e\u5165\u53e3\uff0c\u7136\u540e\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin"),"\u7684\u914d\u7f6e\u5206\u522b\u5c06\u4e0d\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"chunks"),"\u63d2\u5165\u5230\u4e0d\u540c\u7684\u9875\u9762\u4e2d\u6700\u7ec8\u751f\u6210\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u5728\u6d4b\u8bd5\u4e4b\u524d\u5148\u770b\u4e00\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"entry"),"\u7684\u914d\u7f6e\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"V4"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"V5"),"\u7684\u914d\u7f6e\u4e0d\u4e00\u6837\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"V5"),"\u7684\u6539\u52a8\u6bd4\u8f83\u5927"),(0,r.kt)("h2",{id:"entry"},"entry"),(0,r.kt)("h3",{id:"v4-entry"},"V4-entry"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://v4.webpack.js.org/configuration/entry-context/#entry"},"Entry and Context | webpack"))),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b V4 \u7248\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u914d\u7f6e\uff0c\u652f\u6301\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u56db\u79cd\u914d\u7f6e\u5f62\u5f0f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\uff1a\u9700\u8981\u4f20\u5165\u6bcf\u4e2a\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u751f\u6210\u7684 chunk \u4f1a\u88ab\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\uff1a\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u5c31\u662f chunk \u7684\u540d\u79f0\uff0c\u5c5e\u6027\u503c\u5c31\u662f\u8be5\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\uff1a\u6839\u636e\u51fd\u6570\u7684\u8fd4\u56de\u503c\u52a8\u6001\u4fee\u6539\u7684\u5165\u53e3\uff0c\u8fd4\u56de\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u8be5\u51fd\u6570\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"webpack"),"\u542f\u52a8\u6216\u8005\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"webpack"),"\u76d1\u89c6\u6587\u4ef6\u66f4\u6539\u4ee5\u540e\u89e6\u53d1")),(0,r.kt)("h3",{id:"v5-entry"},"V5-entry"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/entry-context/#entry"},"Entry and Context | webpack"))),(0,r.kt)("p",null,"V5 \u7248\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u914d\u7f6e\u4e30\u5bcc\u4e86\u8bb8\u591a\uff0c\u4f9d\u65e7\u662f\u652f\u6301\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u56db\u79cd\u914d\u7f6e\u5f62\u5f0f\u3002\u4e0d\u8fc7\u6dfb\u52a0\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u5c5e\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\uff1a\u9700\u8981\u4f20\u5165\u6bcf\u4e2a\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u751f\u6210\u7684 chunk \u4f1a\u88ab\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\uff1a\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u5c31\u662f chunk \u7684\u540d\u79f0\uff0c\u5c5e\u6027\u503c\u5c31\u662f\u8be5\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u4f46\u662f\u540c\u65f6\u652f\u6301\u4ee5\u4e0b\u989d\u5916\u7684\u5c5e\u6027\u914d\u7f6e\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"filename"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"import"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"filename"),"\u914d\u5408\u4f7f\u7528\u6307\u5b9a\u7279\u5b9a\u7684\u5165\u53e3\u6587\u4ef6\u8def\u5f84\u548c\u751f\u6210\u7684 chunk \u540d\u79f0\uff0c\u5982\u679c\u4e0d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"li"},"filename"),"\u5219\u9ed8\u8ba4\u4f7f\u7528\u5c5e\u6027\u540d\u4f5c\u4e3a chunk \u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"filename"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"output.filename"),"\u5b8c\u5168\u4e00\u81f4\uff0c\u540c\u6837\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"li"},"[hash]"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"[contenthash]"),"\u7b49\u6a21\u677f\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependOn"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"dependOn"),"\u7528\u4e8e\u5728\u4e00\u4e2a\u5165\u53e3\u5185\u90e8\u6307\u5b9a\u5176\u4f9d\u8d56\u5176\u4ed6\u5165\u53e3\u751f\u6210\u7684 chunk\uff0c\u901a\u5e38\u7528\u4e8e\u5c06\u7b2c\u4e09\u65b9",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u7684\u6587\u4ef6\u62c6\u51fa\u6765\u5355\u72ec\u751f\u6210\u4e00\u4e2a chunk\uff0c\u7136\u540e\u5176\u4ed6\u5165\u53e3\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"dependOn"),"\u5f15\u5165\u8fd9\u4e2a\u4f9d\u8d56\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  entry: {\n    main: {\n      import: "./src/index.jsx",\n      filename: "main.[contenthash:8].js",\n      dependOn: "react-vendors",\n    },\n    test: {\n      import: "./src/test.jsx",\n      filename: "test.[contenthash:8].js",\n      dependOn: "react-vendors",\n    },\n    "react-vendors": ["react", "react-dom"],\n  },\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201128182308851",src:t(87740).Z,width:"1060",height:"97"})),(0,r.kt)("h2",{id:"output"},"output"),(0,r.kt)("p",null,"\u7531\u4e8e\u6dfb\u52a0\u4e86\u591a\u4e2a\u5165\u53e3\uff0c\u6240\u4ee5\u6700\u540e\u751f\u6210\u7684 bundle \u540d\u4e5f\u9700\u8981\u4f7f\u7528\u52a8\u6001\u751f\u6210\u7684\u914d\u7f6e\uff0c\u5373\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"[name]"),"\u53ef\u66ff\u6362\u6a21\u677f\u5b57\u7b26\u4e32\u6765\u505a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  output: {\n    filename: "[name].[contenthash:8].js",\n    path: path.resolve(__dirname, "dist"),\n  },\n')),(0,r.kt)("h2",{id:"html-webpack-plugin"},"html-webpack-plugin"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"jantimon/html-webpack-plugin (github.com)"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin"),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u6784\u5efa\u751f\u6210\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.css"),"\u63d2\u5165\u5230 HTML \u9875\u9762\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),"\uff0c\u8fd9\u91cc\u4e3b\u8981\u4f7f\u7528\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"filename"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"chunks"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"excludeChunks"),"\u6765\u505a\u5206\u5165\u53e3\u6253\u5305\u7684\u914d\u7f6e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"filename"),"\u6307\u5b9a\u751f\u6210\u7684 HTML \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u6ce8\u610f\u662f\u8def\u5f84\uff0c\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"\u76ee\u5f55\u5199\u5165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chunks"),"\u4e5f\u5c31\u662f\u5f53\u524d\u751f\u6210\u7684 HTML \u9875\u9762\u5305\u542b\u7684 chunk(bundle)\u540d\u79f0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"excludeChunks"),"\u4e5f\u5c31\u662f\u9700\u8981\u6392\u9664\u7684 chunk(bundle)\u540d\u79f0"))),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),"\u914d\u7f6e\u9879\u4e2d\u591a\u6b21\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin"),"\u7684\u5b9e\u4f8b\uff0c\u6bcf\u5f15\u5165\u4e00\u6b21\u5c31\u5e94\u8be5\u989d\u5916\u914d\u7f6e\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"filename"),"\u53bb\u751f\u6210\u5355\u72ec\u7684 HTML \u6587\u4ef6\uff0c\u5426\u5219\u4e0d\u4f1a\u8d77\u4efb\u4f55\u4f5c\u7528\u4e5f\u4e0d\u4f1a\u62a5\u9519\u3002\u63a8\u8350\u662f\u4f7f\u7528\u540c\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\uff0c\u6bd5\u7adf HTML \u90fd\u4e00\u6837\uff0c\u6ca1\u5fc5\u8981\u5355\u72ec\u505a\u4e2a\u9875\u9762\u51fa\u6765\uff0c\u9664\u975e\u9875\u9762\u5e03\u5c40\u4e0d\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"plugins: [\n  new HtmlWebpackPlugin(\n    Object.assign(\n      {},\n      {\n        inject: true,\n        template: 'index.html',\n        chunks: ['main', 'react-vendors'],\n        filename: 'main.html',\n        minify: {\n          removeComments: true,\n          collapseWhitespace: true,\n          removeRedundantAttributes: true,\n          useShortDoctype: true,\n          removeEmptyAttributes: true,\n          removeStyleLinkTypeAttributes: true,\n          keepClosingSlash: true,\n          minifyJS: true,\n          minifyCSS: true,\n          minifyURLs: true,\n        },\n      },\n    ),\n  ),\n  new HtmlWebpackPlugin(\n    Object.assign(\n      {},\n      {\n        inject: true,\n        template: 'index.html',\n        chunks: ['test', 'react-vendors'],\n        filename: 'test.html',\n        minify: {\n          removeComments: true,\n          collapseWhitespace: true,\n          removeRedundantAttributes: true,\n          useShortDoctype: true,\n          removeEmptyAttributes: true,\n          removeStyleLinkTypeAttributes: true,\n          keepClosingSlash: true,\n          minifyJS: true,\n          minifyCSS: true,\n          minifyURLs: true,\n        },\n      },\n    ),\n  ),\n];\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20201128183918079",src:t(15332).Z,width:"1352",height:"216"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220102234044383",src:t(28952).Z,width:"780",height:"250"})))}k.isMDXComponent=!0},87740:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20201128182308851-aca99f0aab02ac2f69b1258f4b48caeb.png"},15332:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20201128183918079-cb479126613de7824997a8790735a908.png"},28952:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20220102234044383-2e200670dce8f111fbe4e340326410c7.png"}}]);