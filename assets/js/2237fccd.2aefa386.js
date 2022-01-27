"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),o=r(2389),l=r(9548),u=r(6010),i="tabItem_LplD";function c(e){var t,r,o,c=e.lazy,p=e.block,s=e.defaultValue,m=e.values,f=e.groupId,d=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(t=null!=s?s:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),P=g.tabGroupChoices,k=g.setTabGroupChoices,w=(0,a.useState)(h),O=w[0],E=w[1],N=[],A=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=P[f];null!=T&&T!==O&&v.some((function(e){return e.value===T}))&&E(T)}var j=function(e){var t=e.currentTarget,r=N.indexOf(t),n=v[r].value;n!==O&&(A(t),E(n),null!=f&&k(f,n))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;r=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},d)},v.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),c?(0,a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},3470:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=(r(8215),r(9877),["components"]),u={id:"AnyParam",title:"AnyParam",sidebar_label:"AnyParam",hide_title:!0},i="AnyParam",c={unversionedId:"api/type/AnyParam",id:"api/type/AnyParam",title:"AnyParam",description:"A utility type for use when you need to be able to accept any valid [Param]",source:"@site/../docs/api/type/AnyParam.mdx",sourceDirName:"api/type",slug:"/api/type/AnyParam",permalink:"/router-path/api/type/AnyParam",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/AnyParam.mdx",tags:[],version:"current",frontMatter:{id:"AnyParam",title:"AnyParam",sidebar_label:"AnyParam",hide_title:!0},sidebar:"docs",previous:{title:"path",permalink:"/router-path/api/path"},next:{title:"NormalizeParam",permalink:"/router-path/api/type/NormalizeParam"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anyparam"},(0,o.kt)("inlineCode",{parentName:"h1"},"AnyParam")),(0,o.kt)("p",null,"A utility type for use when you need to be able to accept any valid ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,o.kt)("inlineCode",{parentName:"a"},"Param")),"\ntype."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {AnyParam} from '@snout/router-path'\n")),(0,o.kt)("p",null,"Functionally equivalent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"Param<string, any>\n")))}m.isMDXComponent=!0}}]);