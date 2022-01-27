"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[493],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),n=a(7294),o=a(2389),i=a(9548),l=a(6010),u="tabItem_LplD";function p(e){var t,a,o,p=e.lazy,m=e.block,c=e.defaultValue,s=e.values,d=e.groupId,f=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),N=g.tabGroupChoices,w=g.setTabGroupChoices,P=(0,n.useState)(b),k=P[0],O=P[1],E=[],A=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=N[d];null!=x&&x!==k&&h.some((function(e){return e.value===x}))&&O(x)}var T=function(e){var t=e.currentTarget,a=E.indexOf(t),r=h[a].value;r!==k&&(A(t),O(r),null!=d&&w(d,r))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;a=E[r]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;a=E[n]||E[E.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":k===t})}),null!=a?a:t)}))),p?(0,n.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function m(e){var t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},8437:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=(a(8215),a(9877),["components"]),l={id:"ParamName",title:"ParamName",sidebar_label:"ParamName",hide_title:!0},u="ParamName",p={unversionedId:"api/type/ParamName",id:"api/type/ParamName",title:"ParamName",description:"Extract the [Name] type variable from a [Param] type.",source:"@site/../docs/api/type/ParamName.mdx",sourceDirName:"api/type",slug:"/api/type/ParamName",permalink:"/router-path/api/type/ParamName",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/ParamName.mdx",tags:[],version:"current",frontMatter:{id:"ParamName",title:"ParamName",sidebar_label:"ParamName",hide_title:!0},sidebar:"docs",previous:{title:"ParamArg",permalink:"/router-path/api/type/ParamArg"},next:{title:"ParamOrString",permalink:"/router-path/api/type/ParamOrString"}},m=[],c={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"paramname"},(0,o.kt)("inlineCode",{parentName:"h1"},"ParamName")),(0,o.kt)("p",null,"Extract the ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#type-variable-name"},(0,o.kt)("inlineCode",{parentName:"a"},"Name"))," type variable from a ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,o.kt)("inlineCode",{parentName:"a"},"Param"))," type."),(0,o.kt)("p",null,"This utility type may be useful for implementing ",(0,o.kt)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom parameters")," whose type\nis in some way based on the type of another parameter. Currently, it's provided\nmostly as a counterpart to ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/ParamArg"},(0,o.kt)("inlineCode",{parentName:"a"},"ParamArg")),", although unfortunately there are no\nreal-world examples of it in use at the time of writing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {Param, ParamName} from '@snout/router-path'\n\ntype ParamA = Param<'a'>      // a parameter named 'a'\ntype Name = ParamName<ParamA> // the extracted Name type is 'a'\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try me!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwAoEMopAGjq9IByGApgL5wBmUEIcA5AAIDOAdhAK4wD0VHRUAtGBQwAFrQBQ4mAE8wRHGgwBBOAF4FeADy0UtAHxxDRzpzgo4QvERh84zYgBM6uqbPmEQ89bgweimnxAlAxM4UXkiAA8YdABjGyc-MLc4YEZnWiA"},"Try this example in the TypeScript Playground")))))}s.isMDXComponent=!0}}]);