"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{9960:function(t,e,n){n.d(e,{Z:function(){return h}});var a=n(3366),r=n(7294),i=n(3727),o=n(2263),s=n(3919),l=n(412),u=(0,r.createContext)({collectLink:function(){}}),p=n(4996),c=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(t){var e,n,h=t.isNavLink,m=t.to,g=t.href,f=t.activeClassName,v=t.isActive,k=t["data-noBrokenLinkCheck"],w=t.autoAddBaseUrl,y=void 0===w||w,N=(0,a.Z)(t,d),b=(0,o.Z)().siteConfig,S=b.trailingSlash,T=b.baseUrl,x=(0,p.C)().withBaseUrl,C=(0,r.useContext)(u),A=m||g,B=(0,s.Z)(A),U=null==A?void 0:A.replace("pathname://",""),Z=void 0!==U?(n=U,y&&function(t){return t.startsWith("/")}(n)?x(n):n):void 0;Z&&B&&(Z=(0,c.applyTrailingSlash)(Z,{trailingSlash:S,baseUrl:T}));var P=(0,r.useRef)(!1),R=h?i.OL:i.rU,L=l.Z.canUseIntersectionObserver,O=(0,r.useRef)();(0,r.useEffect)((function(){return!L&&B&&null!=Z&&window.docusaurus.prefetch(Z),function(){L&&O.current&&O.current.disconnect()}}),[O,Z,L,B]);var I=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,j=!Z||!B||I;return Z&&B&&!I&&!k&&C.collectLink(Z),j?r.createElement("a",Object.assign({href:Z},A&&!B&&{target:"_blank",rel:"noopener noreferrer"},N)):r.createElement(R,Object.assign({},N,{onMouseEnter:function(){P.current||null==Z||(window.docusaurus.preload(Z),P.current=!0)},innerRef:function(t){var e,n;L&&t&&B&&(e=t,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},O.current=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(O.current.unobserve(e),O.current.disconnect(),n())}))})),O.current.observe(e))},to:Z||""},h&&{isActive:v,activeClassName:f}))}},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},4996:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return e+n;var p=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+p:p}(i,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},8802:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=e.trailingSlash,a=e.baseUrl;if(t.startsWith("#"))return t;if(void 0===n)return t;var r,i=t.split(/[#?]/)[0],o="/"===i||i===a?i:(r=i,n?function(t){return t.endsWith("/")?t:t+"/"}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));return t.replace(i,o)}},8780:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(9964);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},772:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(6010),r=n(7294),i="sandbox_1v7C",o="inline_2C0A";function s(t){var e,n=t.codeMirror,s=void 0===n||n,l=t.height,u=t.hideDevTools,p=void 0===u||u,c=t.id,d=t.inline,h=void 0!==d&&d,m=t.previewWindow,g=void 0===m?"console":m,f=new URL("https://codesandbox.io/");f.pathname="/embed/"+c,s&&f.searchParams.append("codemirror","1"),p&&f.searchParams.append("hidedevtools","1"),g&&f.searchParams.append("previewwindow",g);var v=(0,a.Z)(i,((e={})[o]=h,e));return r.createElement("iframe",{className:v,style:{height:l},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",src:f.toString()})}},4832:function(t,e,n){n.d(e,{b:function(){return i},w:function(){return o}});var a,r,i="snout-router-path-getting-started-t56te",o=(a=i,(r=new URL("https://codesandbox.io/")).pathname="/s/"+a,r.toString())},9756:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return g},default:function(){return v}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9960),s=n(6396),l=n(8215),u=n(772),p=n(4832),c=["components"],d={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},h=void 0,m={unversionedId:"guides/getting-started",id:"guides/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Welcome to Snout Router Path! \ud83d\udc3d",source:"@site/../docs/guides/getting-started.mdx",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/router-path/guides/getting-started",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/guides/getting-started.mdx",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"Index",permalink:"/router-path/guides/index"},next:{title:"Path patterns",permalink:"/router-path/guides/path-patterns"}},g=[{value:"Step 1: Installation",id:"installation",children:[],level:2},{value:"Step 2: Create a path pattern",id:"creation",children:[],level:2},{value:"Step 3: Use your new path pattern",id:"usage",children:[],level:2},{value:"Step 4: Enjoy TypeScript goodness!",id:"type-safety",children:[],level:2},{value:"That&#39;s it!",id:"conclusion",children:[],level:2}],f={toc:g};function v(t){var e=t.components,n=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("strong",{parentName:"p"},"Snout Router Path"),"! \ud83d\udc3d"),(0,i.kt)("p",null,"In this guide, we'll walk you through how to install ",(0,i.kt)("strong",{parentName:"p"},"Snout Router Path"),",\ncreate your first path pattern, match a path against your new pattern, and build\na path from the same pattern. Let's dive in!"),(0,i.kt)("h2",{id:"installation"},"Step 1: Installation"),(0,i.kt)("p",null,"You can install ",(0,i.kt)("strong",{parentName:"p"},"Snout Router Path")," from the NPM registry using any modern\npackage manager:"),(0,i.kt)(s.Z,{groupId:"package-managers",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @snout/router-path\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @snout/router-path\n"))),(0,i.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm add @snout/router-path\n")))),(0,i.kt)("h2",{id:"creation"},"Step 2: Create a path pattern"),(0,i.kt)("p",null,"To create a path pattern, call the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/path"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," function by using it in a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"tagged\ntemplate literal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {path} from '@snout/router-path'\n\nconst user = path`/user/${'id'}`\n")),(0,i.kt)("h2",{id:"usage"},"Step 3: Use your new path pattern"),(0,i.kt)("p",null,"Your new path pattern can be used to check if a path matches, and determine what\nthe path's arguments are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"user.test('/user/111')  // returns true\nuser.match('/user/111') // returns {id: '111'}\n")),(0,i.kt)("p",null,"It can also be used to turn a set of arguments into a path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"user.build({id: '111'}) // returns '/user/111'\n")),(0,i.kt)("p",null,"You can even try it out live right now:"),(0,i.kt)(u.Z,{inline:!0,id:p.b,height:"300px",mdxType:"Sandbox"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This embedded example doesn't have great ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," support."),(0,i.kt)(o.Z,{to:p.w,mdxType:"Link"},"Open the full sandbox")," for a better preview.")),(0,i.kt)("h2",{id:"type-safety"},"Step 4: Enjoy TypeScript goodness!"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"? One of the great things about ",(0,i.kt)("strong",{parentName:"p"},"Snout Router Path")," is the\nway it infers type information for your path patterns. You can have more\nconfidence when matching and building paths, because ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," will warn you\nwhen you're using your patterns incorrectly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"// TypeScript \"knows\" that a successful match will contain an 'id':\n\nconst match = user.match('/user/111')\n\nif (match) {\n  console.log(match.id)          // no error\n  console.log(match.nonexistent) // type error\n}\n\n// TypeScript \"knows\" that we need an 'id' when building the path:\n\nuser.build({id: '111'}) // no error\nuser.build({})          // type error\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try me!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzAQxgCwL5wGZQiOAcgAEBnAOwgFcYB6PGgUygFoV1CAoTgYwnNLwqpZnAC8cdmgAGtYc1oASBIWAATQhmndatOABUAnmEYBlHlGBh4AIgDWlAO6kbcdKjjI4pKjx6NSUmwqABs4EFQeNDhHYBCwvnIYZGByTzTVDQAubkTBcMjoiXkoADoImCiACkI5EShaAEZmwgBKbmBsOCqKqNbETjg4PIgQxlKQiABzHsLS9X6hpeXdOEo4ZjwoQeH+UlHxyZnetFLKckYAD2BBRiT+1ZhjRg2oLc4MHT0jE3NLazg9icLjcaA8jheF0YanSRHUhBiaDucAARlQ4mpUlNQS8pDlOCVSmiMVUEOoskRmo1NA89OtNtACfUieiQmpSRhFssVnoniZXlsgA"},"Try this example in the TypeScript Playground")))),(0,i.kt)("h2",{id:"conclusion"},"That's it!"),(0,i.kt)("p",null,"You're now ready to start using ",(0,i.kt)("strong",{parentName:"p"},"Snout Router Path")," in your application. Want\nto dive deeper into the features available to you? Here are some good places to\nstart:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/router-path/guides/path-patterns"},"path patterns")," guide covers creating path patterns, matching paths, and\nbuilding paths in greater detail."),(0,i.kt)("li",{parentName:"ul"},"Learn how to create ",(0,i.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"custom parameters")," that expand on the capabilities of\n",(0,i.kt)("strong",{parentName:"li"},"Snout Router Path"),", while maintaining excellent ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," integration."),(0,i.kt)("li",{parentName:"ul"},"Check out ",(0,i.kt)("a",{parentName:"li",href:"https://snout.dev/router-path-extras"},(0,i.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras"))," for some commonly desired parameter\ntype implementations.")))}v.isMDXComponent=!0}}]);