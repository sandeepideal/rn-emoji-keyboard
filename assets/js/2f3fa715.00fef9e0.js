"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,title:"About"},i="About",l={unversionedId:"documentation/about",id:"documentation/about",title:"About",description:"This is a documentation website of the current stable release.",source:"@site/docs/documentation/about.md",sourceDirName:"documentation",slug:"/documentation/about",permalink:"/rn-emoji-keyboard/docs/documentation/about",draft:!1,editUrl:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard/tree/master/docs/docs/documentation/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"About"},sidebar:"documentation",next:{title:"Getting Started",permalink:"/rn-emoji-keyboard/docs/documentation/start"}},s={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Library Overview",id:"library-overview",level:2},{value:"Learning resources",id:"learning-resources",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about"},"About"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is a documentation website of the current stable release.")),(0,n.kt)("p",null,"RN Emoji Keyboard aims to provide Emoji picker feature that is missing in native keyboards."),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"At the beginning we wanted to allow user to select any emoji for post reactions in our example app ","[Holidaily]"," but unfortunately, there isn't native feature to call out keyboard with option to select only emoji (or even default switched to emoji) neither any library with this feature (or more precisely - any good enough for us). Thus, the motivation for building this library was to allow user picking any emoji without allowing to type anything from keyboard. If you want to build features like emoji picker in chat app or Messenger like emoji reaction, this library is perfect for you."),(0,n.kt)("h2",{id:"library-overview"},"Library Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Preview",src:r(6164).Z,width:"223",height:"480"})),(0,n.kt)("p",null,"The library gives you the possibility to choose from two modes: modal or static.\nTo find out more about the static mode, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/static"},"here"),").\nTo find out more about the modal mode, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modal"},"here"),"."),(0,n.kt)("p",null,"The library supports skintone modifiers by default from 1.0.0 version. After a long press on certain emojis, panel with multiple options appears."),(0,n.kt)("p",null,"We put a lot of effort into optimising and improving performance of this library.\nThe library's current score (based on RN-Perf Monitor plugin for Flipper): 90"),(0,n.kt)("h3",{id:"learning-resources"},"Learning resources"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Apps")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard/tree/master/example"},"Example app")," - react-native application with features overview and test cases."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/TheWidlarzGroup/holidaily"},"Holidaily")," - our company's example project that uses RN Emoji Keyboard."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Talks")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.react-native.eu/"},"Showcase of rn-emoji-keyboard library. Enhance your communication with the language of emoji")," - talk about the library at the React Native EU 2022 conference"))}c.isMDXComponent=!0},6164:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/preview-small-f0c3709d394a668dd9692c540f513424.gif"}}]);