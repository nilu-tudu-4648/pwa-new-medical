(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(69009)}])},33854:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),o=n(9008),s=n.n(o);function i(e){let{children:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Mercurial-AI"}),(0,r.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,r.jsx)("meta",{name:"og:title",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"twitter:card",content:"Mercurial-AI"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{property:"og:type",content:"Mercurial-AI"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),(0,r.jsx)("title",{children:"CarePilot by Mercurial AI"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",integrity:"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("main",{children:t})]})}},85002:function(e,t,n){"use strict";var r=n(85893),o=n(67294),s=n(11163);let i=e=>{let t=t=>{let[n,i]=(0,o.useState)(!1),[l,a]=(0,o.useState)(!1),c=(0,s.useRouter)();return(0,o.useEffect)(()=>{let e=localStorage.getItem("token"),t=async()=>{if(e||"/login"===c.pathname||"/signup"===c.pathname)try{if(e)i(!0);else throw Error("Unauthorized: Token not found")}catch(e){localStorage.removeItem("token"),i(!1),c.push("/login")}finally{a(!0)}else c.push("/login")};t()},[]),l&&n?(0,r.jsx)(e,{...t}):null};return t};t.Z=i},69009:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),s=n(33854),i=n(55993),l=n(11163),a=n(85002),c=n(68710);t.default=(0,a.Z)(function(){let[e,t]=(0,o.useState)(null),[n,a]=(0,o.useState)(null),[u,f]=(0,o.useState)(!0),h=(0,l.useRouter)();return(0,o.useEffect)(()=>{let e=localStorage.getItem("token");t(e),e||h.push("/login")},[]),(0,o.useEffect)(()=>{let t=async()=>{try{let t=await fetch("".concat("https://mercurial-api.nirmitee.io/api","/user"),{headers:{Authorization:"Bearer ".concat(e)}});if(t.ok){let e=await t.json();a(e)}else 401===t.status?(localStorage.removeItem("token"),h.push("/login")):console.error("Error fetching user details")}catch(e){console.error("Error fetching user details:",e)}finally{f(!1)}};e&&t()},[e]),(0,r.jsx)(s.Z,{children:u?(0,r.jsx)(c.Z,{}):e?(0,r.jsx)(i.default,{userDetails:n}):null})})}},function(e){e.O(0,[664,121,873,497,993,774,888,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);