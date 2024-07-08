"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[256],{5680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=n,y=m["".concat(l,".").concat(c)]||m[c]||g[c]||o;return t?r.createElement(y,i(i({ref:a},u),{},{components:t})):r.createElement(y,i({ref:a},u))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9365:(e,a,t)=>{t.d(a,{A:()=>i});var r=t(6540),n=t(870);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:t},a)}},1470:(e,a,t)=>{t.d(a,{A:()=>P});var r=t(8168),n=t(6540),o=t(870),i=t(3104),p=t(6347),l=t(7485),s=t(1682),u=t(9466);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function g(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function c(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function y(e){let{queryString:a=!1,groupId:t}=e;const r=(0,p.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function d(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=g(e),[i,p]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[l,s]=y({queryString:t,groupId:r}),[m,d]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,u.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),h=(()=>{const e=l??m;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),d(e)}),[s,d,o]),tabValues:o}}var h=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:p,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),g=e=>{const a=e.currentTarget,t=u.indexOf(a),r=s[t].value;r!==p&&(m(a),l(r))},c=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:p===a?0:-1,"aria-selected":p===a,key:a,ref:e=>u.push(e),onKeyDown:c,onClick:g},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":p===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function N(e){const a=d(e);return n.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},n.createElement(v,(0,r.A)({},e,a)),n.createElement(b,(0,r.A)({},e,a)))}function P(e){const a=(0,h.A)();return n.createElement(N,(0,r.A)({key:String(a)},e))}},5295:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(8168),n=(t(6540),t(5680));t(9365),t(1470);const o={id:"Param",title:"Param",sidebar_label:"Param",hide_title:!0},i="Param",p={unversionedId:"api/type/Param",id:"api/type/Param",title:"Param",description:"The Param interface can be used to implement [custom route parameters].",source:"@site/../docs/api/type/Param.mdx",sourceDirName:"api/type",slug:"/api/type/Param",permalink:"/router-path/api/type/Param",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/Param.mdx",tags:[],version:"current",frontMatter:{id:"Param",title:"Param",sidebar_label:"Param",hide_title:!0},sidebar:"docs",previous:{title:"NormalizeParam",permalink:"/router-path/api/type/NormalizeParam"},next:{title:"ParamArg",permalink:"/router-path/api/type/ParamArg"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>name</code>",id:"property-name",level:3},{value:"<code>exp</code>",id:"property-exp",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>format</code>",id:"method-format",level:3},{value:"Parameters",id:"method-format-parameters",level:4},{value:"Return value",id:"method-format-return-value",level:4},{value:"<code>parse</code>",id:"method-parse",level:3},{value:"Parameters",id:"method-parse-parameters",level:4},{value:"Return value",id:"method-parse-return-value",level:4},{value:"Type variables",id:"type-variables",level:2},{value:"<code>Name</code>",id:"type-variable-name",level:3},{value:"<code>Arg</code>",id:"type-variable-arg",level:3}],u={toc:s},m="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"param"},(0,n.yg)("inlineCode",{parentName:"h1"},"Param")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"Param")," interface can be used to implement ",(0,n.yg)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom route parameters"),"."),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"property-name"},(0,n.yg)("inlineCode",{parentName:"h3"},"name")),(0,n.yg)("p",null,"The name of the parameter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"readonly name: Name\n")),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safe-parameter-names"},"Type-safe parameter names")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h3",{id:"property-exp"},(0,n.yg)("inlineCode",{parentName:"h3"},"exp")),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expression")," used to determine whether a segment (or segments) of a\npath match the parameter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"readonly exp: RegExp\n")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The expression ",(0,n.yg)("strong",{parentName:"p"},"must")," have exactly one ",(0,n.yg)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group"),".")),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#matching-and-parsing"},"Matching and parsing")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"method-format"},(0,n.yg)("inlineCode",{parentName:"h3"},"format")),(0,n.yg)("p",null,"Format an argument for use in a path."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function format(arg: Arg): string;\n")),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#formatting"},"Formatting")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h4",{id:"method-format-parameters"},"Parameters"),(0,n.yg)("p",null,"Accepts a single argument - the value to format. The value must have a type\nmatching the ",(0,n.yg)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.yg)("inlineCode",{parentName:"a"},"Arg"))," type variable."),(0,n.yg)("h4",{id:"method-format-return-value"},"Return value"),(0,n.yg)("p",null,"A formatted string representing the supplied value."),(0,n.yg)("p",null,"The strings produced by ",(0,n.yg)("inlineCode",{parentName:"p"},"format")," should match ",(0,n.yg)("a",{parentName:"p",href:"#property-exp"},(0,n.yg)("inlineCode",{parentName:"a"},"exp")),", and the resulting\n",(0,n.yg)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content should be able to be parsed by ",(0,n.yg)("a",{parentName:"p",href:"#method-parse"},(0,n.yg)("inlineCode",{parentName:"a"},"parse")),"."),(0,n.yg)("h3",{id:"method-parse"},(0,n.yg)("inlineCode",{parentName:"h3"},"parse")),(0,n.yg)("p",null,"Parse a successful match against ",(0,n.yg)("a",{parentName:"p",href:"#property-exp"},(0,n.yg)("inlineCode",{parentName:"a"},"exp")),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function parse(match: string): Arg;\n")),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#matching-and-parsing"},"Matching and parsing")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h4",{id:"method-parse-parameters"},"Parameters"),(0,n.yg)("p",null,"Accepts a single argument - the ",(0,n.yg)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content of a successful match\nagainst ",(0,n.yg)("a",{parentName:"p",href:"#property-exp"},(0,n.yg)("inlineCode",{parentName:"a"},"exp")),"."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"parse")," should be capable of parsing ",(0,n.yg)("em",{parentName:"p"},"any")," ",(0,n.yg)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content that can\noccur in a successful match of ",(0,n.yg)("a",{parentName:"p",href:"#property-exp"},(0,n.yg)("inlineCode",{parentName:"a"},"exp"))," against the strings that are produced by\n",(0,n.yg)("a",{parentName:"p",href:"#method-format"},(0,n.yg)("inlineCode",{parentName:"a"},"format")),"."),(0,n.yg)("h4",{id:"method-parse-return-value"},"Return value"),(0,n.yg)("p",null,"The parsed value of the parameter. The value must have a type matching the\n",(0,n.yg)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.yg)("inlineCode",{parentName:"a"},"Arg"))," type variable."),(0,n.yg)("h2",{id:"type-variables"},"Type variables"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"Param")," type is a ",(0,n.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"generic")," type:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Param<Name extends string, Arg = string>\n")),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safety"},"Type safety")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h3",{id:"type-variable-name"},(0,n.yg)("inlineCode",{parentName:"h3"},"Name")),(0,n.yg)("p",null,"The parameter's ",(0,n.yg)("a",{parentName:"p",href:"#property-name"},(0,n.yg)("inlineCode",{parentName:"a"},"name"))," as a ",(0,n.yg)("inlineCode",{parentName:"p"},"string")," ",(0,n.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"},"literal type"),"."),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safe-parameter-names"},"Type-safe parameter names")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.yg)("h3",{id:"type-variable-arg"},(0,n.yg)("inlineCode",{parentName:"h3"},"Arg")),(0,n.yg)("p",null,"The type of argument the parameter accepts."),(0,n.yg)("p",null,"Leaving off the ",(0,n.yg)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.yg)("inlineCode",{parentName:"a"},"Arg"))," type variable creates a ",(0,n.yg)("inlineCode",{parentName:"p"},"Param")," where the ",(0,n.yg)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.yg)("inlineCode",{parentName:"a"},"Arg"))," type\nis ",(0,n.yg)("inlineCode",{parentName:"p"},"string"),", meaning that the following types are equivalent:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { Param } from "@snout/router-path";\n\ntype ParamB = Param<"param-name">;\ntype ParamA = Param<"param-name", string>;\n')),(0,n.yg)("admonition",{title:"See also",type:"info"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safety"},"Type safety")," in the ",(0,n.yg)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))))}g.isMDXComponent=!0}}]);