"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[850],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(7294),i=a(2389),l=a(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(3616),u=a(6010),s="tabItem_vU9c";function c(e){var t,a,n,i=e.lazy,l=e.block,c=e.defaultValue,h=e.values,m=e.groupId,d=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,p.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),k=b.tabGroupChoices,P=b.setTabGroupChoices,w=(0,r.useState)(y),N=w[0],T=w[1],C=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=k[m];null!=A&&A!==N&&v.some((function(e){return e.value===A}))&&T(A)}var E=function(e){var t=e.currentTarget,a=C.indexOf(t),n=v[a].value;n!==N&&(O(t),T(n),null!=m&&P(m,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},d)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:E,onClick:E},null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},2186:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=(a(8215),a(6396),["components"]),o={id:"PathPattern",title:"PathPattern",sidebar_label:"PathPattern",hide_title:!0},p="PathPattern",u={unversionedId:"api/type/PathPattern",id:"api/type/PathPattern",title:"PathPattern",description:"The PathPattern interface is implemented by the [path pattern] objects that",source:"@site/../docs/api/type/PathPattern.mdx",sourceDirName:"api/type",slug:"/api/type/PathPattern",permalink:"/router-path/api/type/PathPattern",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/PathPattern.mdx",tags:[],version:"current",frontMatter:{id:"PathPattern",title:"PathPattern",sidebar_label:"PathPattern",hide_title:!0},sidebar:"docs",previous:{title:"ParamOrString",permalink:"/router-path/api/type/ParamOrString"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>build</code>",id:"method-build",children:[{value:"Parameters",id:"method-build-parameters",children:[],level:4},{value:"Return value",id:"method-build-return-value",children:[],level:4}],level:3},{value:"<code>match</code>",id:"method-match",children:[{value:"Parameters",id:"method-match-parameters",children:[],level:4},{value:"Return value",id:"method-match-return-value",children:[],level:4}],level:3},{value:"<code>test</code>",id:"method-test",children:[{value:"Parameters",id:"method-test-parameters",children:[],level:4},{value:"Return value",id:"method-test-return-value",children:[],level:4}],level:3}],level:2},{value:"Type variables",id:"type-variables",children:[{value:"<code>Params</code>",id:"type-variable-params",children:[],level:3}],level:2}],c={toc:s};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pathpattern"},(0,i.kt)("inlineCode",{parentName:"h1"},"PathPattern")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PathPattern")," interface is implemented by the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/path-patterns"},"path pattern")," objects that\nare created when using the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/path"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," function."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"method-build"},(0,i.kt)("inlineCode",{parentName:"h3"},"build")),(0,i.kt)("p",null,"Build a path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function build (args: { [paramName: string]: any }): string\n")),(0,i.kt)("h4",{id:"method-build-parameters"},"Parameters"),(0,i.kt)("p",null,"Accepts a single argument - an object containing the arguments for each route\nparameter."),(0,i.kt)("p",null,"The keys of the ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," object must match the names of the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/path-patterns"},"path pattern"),"'s route\nparameters. The values must also be of the correct type for each parameter. When\na parameter accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," arguments, omitting the argument is also\nallowed."),(0,i.kt)("h4",{id:"method-build-return-value"},"Return value"),(0,i.kt)("p",null,"A path string matching the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/path-patterns"},"path pattern"),", with each of the parameters filled\nwith a formatted version of the supplied argument."),(0,i.kt)("h3",{id:"method-match"},(0,i.kt)("inlineCode",{parentName:"h3"},"match")),(0,i.kt)("p",null,"Check if a path matches the pattern, and return arguments if the match is\nsuccessful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function match (path: string): { [paramName: string]: any } | undefined\n")),(0,i.kt)("h4",{id:"method-match-parameters"},"Parameters"),(0,i.kt)("p",null,"Accepts a single argument - the path string to match against."),(0,i.kt)("h4",{id:"method-match-return-value"},"Return value"),(0,i.kt)("p",null,"If the supplied path string matches the pattern, ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," will return an object\nwith keys matching the names of the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/path-patterns"},"path pattern"),"'s route parameters. The\nstring arguments will be parsed into values of the appropriate type for each\nparameter."),(0,i.kt)("p",null,"If the path does not match the pattern, ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"method-test"},(0,i.kt)("inlineCode",{parentName:"h3"},"test")),(0,i.kt)("p",null,"Check if a path matches the pattern."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function test (path: string): boolean\n")),(0,i.kt)("h4",{id:"method-test-parameters"},"Parameters"),(0,i.kt)("p",null,"Accepts a single argument - the path string to match against."),(0,i.kt)("h4",{id:"method-test-return-value"},"Return value"),(0,i.kt)("p",null,"A boolean value indicating whether the path matched the pattern or not."),(0,i.kt)("h2",{id:"type-variables"},"Type variables"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PathPattern")," type is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"generic")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PathPattern<Params extends Array<Param<string, any>>>\n")),(0,i.kt)("h3",{id:"type-variable-params"},(0,i.kt)("inlineCode",{parentName:"h3"},"Params")),(0,i.kt)("p",null,"The type of parameters contained in the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/path-patterns"},"path pattern"),"."),(0,i.kt)("p",null,"Typically, you would not need to manually specify this type variable, as the\nparameter types are automatically inferred when calling the ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/path"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," function to\ncreate path patterns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {path} from '@snout/router-path'\n\nconst user = path`/user/${'id'}` // user has a type of PathPattern<[Param<'id', string>]>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try me!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzAQxgCwL5wGZQiOAcgAEBnAOwgFcYB6PGgUygFoV1CAoTgYwnNLwqpZnAC8cdmgAGtYc1oASBIWAATQhmlxatOPKhw0yUnGRwYATzCM4EbHAAKqNM5gxm5ADwBtZ1GQQL1UNABo4QShgcgBzAD4AXTigA"},"Try this example in the TypeScript Playground")))))}h.isMDXComponent=!0}}]);