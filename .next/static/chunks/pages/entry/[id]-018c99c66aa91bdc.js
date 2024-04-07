(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{13048:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/entry/[id]",function(){return n(67503)}])},33854:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893),i=n(9008),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Mercurial-AI"}),(0,r.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,r.jsx)("meta",{name:"og:title",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"twitter:card",content:"Mercurial-AI"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{property:"og:type",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),(0,r.jsx)("title",{children:"CarePilot by Mercurial AI"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",integrity:"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("main",{children:t})]})}},67503:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return p},default:function(){return m}});var r=n(85893),i=n(67294),a=n(11163),o=n(33854),s=n(73380),c=n.n(s),l=n(41664),d=n.n(l),u=n(5121),p=!0;function m(e){let{entry:t}=e,n=(0,a.useRouter)(),[s,l]=(0,i.useState)(null),[p,m]=(0,i.useState)(!0);(0,i.useEffect)(()=>{!async function(){try{let e=localStorage.getItem("token"),n=await u.Z.get("".concat("https://mercurial-api.nirmitee.io/api","/entries/").concat(t.id),{headers:{Authorization:"Bearer ".concat(e)}});m(!1),l(n.data)}catch(e){console.log(e)}}()},[]);let f=async()=>{try{let e=localStorage.getItem("token"),r=await u.Z.delete("".concat("https://mercurial-api.nirmitee.io/api","/entries/").concat(t.id),{headers:{Authorization:"Bearer ".concat(e)}});200===r.status&&n.push("/treatment-diary")}catch(e){console.error("Error deleting entry:",e)}};return s?(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12 treatment-diary-main-12",children:(0,r.jsx)("div",{className:"treatment_main_container",children:(0,r.jsxs)("div",{className:"treatmentDiary-main-container",children:[(0,r.jsx)("div",{children:(0,r.jsx)(d(),{href:"/treatment-diary",children:(0,r.jsx)("img",{src:"/back-arrow.svg",alt:"back-arrow",width:20,height:20,className:"treatmentDiary-back-button"})})}),(0,r.jsx)("div",{className:"treatmentDiary_display_text_container",children:(0,r.jsx)("h1",{children:"Treatment Diary"})}),(0,r.jsx)("div",{className:"treatmentDiary_display_image_container",children:(0,r.jsx)("img",{src:"/export.svg",alt:"back-arrow"})})]})})})})}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsx)("div",{className:"treatment_main_container_1",children:(0,r.jsxs)("div",{className:"single-entry-main-container",children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("h1",{children:new Date(s.date).toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"})}),(0,r.jsx)("i",{className:"fa-solid fa-trash",style:{paddingTop:"2px",color:"#11245b"},onClick:f})]}),(0,r.jsx)("p",{children:s.entryText})]})})})})})]}):(0,r.jsx)("div",{className:"spinner-container",style:{display:"flex",justifyContent:"center",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,r.jsx)(c(),{color:"#214493",loading:p,size:50})})}},11163:function(e,t,n){e.exports=n(96885)},73380:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var c=o(n(67294)),l=n(96657),d=(0,n(60010).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,n=e.color,i=void 0===n?"#000000":n,a=e.speedMultiplier,o=e.cssOverride,u=e.size,p=void 0===u?35:u,m=s(e,["loading","color","speedMultiplier","cssOverride","size"]),f=r({background:"transparent !important",width:(0,l.cssValue)(p),height:(0,l.cssValue)(p),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(d," ").concat(.75/(void 0===a?1:a),"s 0s infinite linear"),animationFillMode:"both"},void 0===o?{}:o);return void 0===t||t?c.createElement("span",r({style:f},m)):null}},60010:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0,t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(o,0),r}},96657:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return n[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}},function(e){e.O(0,[664,121,774,888,179],function(){return e(e.s=13048)}),_N_E=e.O()}]);