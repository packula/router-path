"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[955],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),p=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(u.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||i;return t?r.createElement(f,o(o({ref:a},m),{},{components:t})):r.createElement(f,o({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,a,t){var r=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(7462),n=t(7294),i=t(2389),o=t(9548),l=t(6010),u="tabItem_LplD";function p(e){var a,t,i,p=e.lazy,m=e.block,s=e.defaultValue,c=e.values,d=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:h.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,o.lx)(v,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(a=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=h[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,P=g.setTabGroupChoices,N=(0,n.useState)(y),w=N[0],O=N[1],C=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==w&&v.some((function(e){return e.value===x}))&&O(x)}var z=function(e){var a=e.currentTarget,t=C.indexOf(a),r=v[t].value;r!==w&&(E(a),O(r),null!=d&&P(d,r))},T=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;t=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var a=e.value,t=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:z,onClick:z},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),p?(0,n.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function m(e){var a=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(a)},e))}},6366:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),o=(t(8215),t(9877),["components"]),l={id:"normalizeParam",title:"normalizeParam",sidebar_label:"normalizeParam",hide_title:!0},u="normalizeParam",p={unversionedId:"api/normalizeParam",id:"api/normalizeParam",title:"normalizeParam",description:"Produces a [Param] implementation from a supplied string or parameter.",source:"@site/../docs/api/normalizeParam.mdx",sourceDirName:"api",slug:"/api/normalizeParam",permalink:"/router-path/api/normalizeParam",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/normalizeParam.mdx",tags:[],version:"current",frontMatter:{id:"normalizeParam",title:"normalizeParam",sidebar_label:"normalizeParam",hide_title:!0},sidebar:"docs",previous:{title:"Custom parameters",permalink:"/router-path/guides/custom-parameters"},next:{title:"path",permalink:"/router-path/api/path"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Return value",id:"return-value",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],s={toc:m};function c(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"normalizeparam"},(0,i.kt)("inlineCode",{parentName:"h1"},"normalizeParam")),(0,i.kt)("p",null,"Produces a ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param"))," implementation from a supplied string or parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function normalizeParam (p: ParamOrString): Param\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Accepts a single argument - either an existing ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param")),", or the name of a\nparameter as a string."),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param"))," implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the supplied parameter is already a ",(0,i.kt)("a",{parentName:"li",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param"))," implementation, it is\nreturned as-is."),(0,i.kt)("li",{parentName:"ul"},"String values will be converted to a basic string-based parameter with the\nsupplied string becoming the ",(0,i.kt)("a",{parentName:"li",href:"/router-path/api/type/Param#property-name"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))," of the newly created ",(0,i.kt)("a",{parentName:"li",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param")),".")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Unless you are interested in implementing ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom parameters"),", chances are you\ndo not need to use this function at all."),(0,i.kt)("p",null,"However, if you're implementing ",(0,i.kt)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom parameters")," that accept another\nparameter as input, and you want to be able to accept strings as parameters in\nthe same way that ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/path"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," does, then ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeParam")," is what you need. This is\nthe same function used internally when creating path patterns to convert any\nparameters specified as strings into full ",(0,i.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,i.kt)("inlineCode",{parentName:"a"},"Param"))," implementations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {path} from '@snout/router-path'\n\nconst user = path`/user/${'id'}` // internally, 'id' is converted to a Param using normalizeParam\n")),(0,i.kt)("p",null,"A real-world example that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeParam")," are the ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," parameters\nimplemented by ",(0,i.kt)("a",{parentName:"p",href:"https://snout.dev/router-path-extras"},(0,i.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras")),"."))}c.isMDXComponent=!0}}]);