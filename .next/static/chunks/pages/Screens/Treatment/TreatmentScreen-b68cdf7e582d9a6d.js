(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{23765:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Screens/Treatment/TreatmentScreen",function(){return n(46813)}])},46813:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),a=n(67294),s=n(41664),i=n.n(s),l=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"treatment-main-container",children:[(0,r.jsx)("div",{children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("img",{src:"/back-arrow.svg",alt:"back-arrow",width:20,height:20,className:"treatment-topBar-back-button"})})}),(0,r.jsx)("div",{className:"treatment_display_text_container",children:(0,r.jsxs)("h1",{children:["Treatment ",(0,r.jsx)("br",{})," Recommendation"]})})]})})},c=n(7297),o=n(11703),d=n(40044),m=n(30257),h=n(5121),x=n(11163),u=n(70917),p=n(73380),j=n.n(p);function f(){let e=(0,c.Z)(["\n    display: block;\n    margin: 0 auto;\n  "]);return f=function(){return e},e}var g=function(){var e;let t=(0,x.useRouter)(),[n,s]=(0,a.useState)({}),[i,l]=(0,a.useState)(0),[c,p]=(0,a.useState)(!0),[g,C]=(0,a.useState)(100),[b,v]=(0,a.useState)(""),[_,y]=(0,a.useState)(!1);(0,u.iv)(f());let N=(e,t)=>{l(t)};(0,a.useEffect)(()=>{let e=localStorage.getItem("token");if(e){let t=async()=>{try{let t=await h.Z.get("".concat("https://mercurial-api.nirmitee.io/api","/user"),{headers:{Authorization:"Bearer ".concat(e)}});if(200===t.status){let e=t.data;s(e),v(null==e?void 0:e._id)}else console.error("Error fetching user data")}catch(e){console.error("Error fetching user data:",e)}finally{p(!1)}};t()}else t.push("/login")},[]);let{x1:w,y1:Z,x2:S,y2:k}=(e=>{let t=e=>{var t=1e4*Math.sin(e++);return t-Math.floor(t)},n=t(123)*e,r=t(123)*(e-n),a=t(123)*(e-n-r);return{x1:n,y1:r,x2:a,y2:e-n-r-a}})(g),E=async()=>{y(!0);try{let e=await h.Z.get("".concat("https://mercurial-api.nirmitee.io/api","/generate-pdf/").concat(b)),n=e.data.pdfUrl;t.push(n)}catch(e){console.error("Error downloading PDF:",e)}finally{y(!1)}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(m.Z,{className:"treatment-body-main-container",children:[(0,r.jsxs)(m.Z,{className:"treatment-body-upper-main-container",children:[(0,r.jsxs)(m.Z,{className:"treatment-body-svg-container",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"37",viewBox:"0 0 50 37",fill:"none",children:[(0,r.jsx)("path",{d:"M47.777 30.7138C48.6146 30.7138 49.2985 30.0339 49.2471 29.1978C48.8786 23.2142 46.3384 17.5494 42.0748 13.2858C37.4526 8.66363 31.1836 6.06692 24.6468 6.06692C18.1101 6.06692 11.8411 8.66363 7.21889 13.2858C2.95532 17.5494 0.415122 23.2142 0.046625 29.1978C-0.00486455 30.0339 0.679062 30.7138 1.51673 30.7138L6.20649 30.7138C7.04416 30.7138 7.71616 30.0332 7.7911 29.1989C8.14443 25.2659 9.86528 21.5617 12.68 18.7469C15.8538 15.5732 20.1584 13.7901 24.6468 13.7901C29.1353 13.7901 33.4399 15.5732 36.6136 18.747C39.4284 21.5617 41.1493 25.2659 41.5026 29.1989C41.5775 30.0332 42.2495 30.7138 43.0872 30.7138H47.777Z",fill:"#F8DB7A"}),(0,r.jsx)("path",{d:"M1.51675 30.7137C0.679085 30.7137 -0.00484467 30.034 0.0466614 29.1979C0.344143 24.3689 2.05786 19.7215 4.99009 15.845C8.22805 11.5644 12.7749 8.4577 17.9397 6.99707C23.1045 5.53644 28.6049 5.8017 33.6052 7.75256C38.1333 9.51921 42.0271 12.5807 44.8096 16.5387C45.2914 17.224 45.0647 18.1612 44.3511 18.5999L40.3479 21.061C39.6343 21.4997 38.7055 21.272 38.2046 20.6006C36.3177 18.0708 33.7535 16.1108 30.7946 14.9564C27.3631 13.6176 23.5884 13.4355 20.044 14.4379C16.4996 15.4403 13.3793 17.5723 11.1572 20.5099C9.24114 23.043 8.08325 26.0557 7.80064 29.199C7.72564 30.0333 7.05363 30.7137 6.21597 30.7137H1.51675Z",fill:"url(#paint0_linear_26_2892)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_26_2892",x1:w,y1:Z,x2:S,y2:k,gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F8DB7A"}),(0,r.jsx)("stop",{offset:"1.69",stopColor:"#ABDCFC"})]})})]}),(0,r.jsxs)("p",{className:"text-center mb-0",children:[g,"% Percentile"]})]}),(0,r.jsxs)(m.Z,{className:"treatment-body-share-container",children:[(0,r.jsx)("p",{className:"text-center mb-0",children:"Share"}),(0,r.jsx)("img",{src:"/export.svg",alt:"",className:"img-fluid"})]}),(0,r.jsx)(m.Z,{className:"treatment-body-download-container",children:(0,r.jsx)("button",{className:"btn btn-primary",onClick:E,children:_?(0,r.jsx)(j(),{color:"#fff",size:20}):(0,r.jsxs)(r.Fragment,{children:["Download",(0,r.jsx)("img",{src:"/download.svg",alt:"",className:"ml-2"})]})})})]}),(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)(o.Z,{value:i,onChange:N,"aria-label":"basic tabs example",children:[(0,r.jsx)(d.Z,{label:"Treatment recommendation"}),(0,r.jsx)(d.Z,{label:"Other recommendation"})]}),(0,r.jsx)(m.Z,{role:"tabpanel",hidden:0!==i,children:(null==n?void 0:null===(e=n.recommendations)||void 0===e?void 0:e.length)>0?n.recommendations.map((e,t)=>(0,r.jsxs)("div",{className:"treatment-body-description-container",children:[(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("ul",{children:e.recommendation.map((e,t)=>(0,r.jsx)("li",{children:e.point},t))})]},t)):(0,r.jsx)("div",{className:"treatment-body-description-container",style:{textAlign:"center",paddingTop:"40px"},children:(0,r.jsx)("p",{children:"Upload your chart to get treatment recommendations."})})}),(0,r.jsx)(m.Z,{role:"tabpanel",hidden:1!==i,children:(0,r.jsx)("div",{className:"treatment-body-description-container",style:{textAlign:"center",paddingTop:"40px"},children:(0,r.jsx)("h2",{children:"No Other recommendations "})})})]})]})})},C=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"treatment_main_container",children:[(0,r.jsx)(l,{}),(0,r.jsx)(g,{})]})})}}},function(e){e.O(0,[664,121,171,77,774,888,179],function(){return e(e.s=23765)}),_N_E=e.O()}]);