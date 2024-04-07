"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4918:function(e,t,r){var o=r(85893);r(67294),t.Z=function(){return(0,o.jsx)(o.Fragment,{})}},11197:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var o=r(85893),n=r(67294),s=r(5121),a=r(41664),i=r.n(a),l=r(4918),c=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{}),(0,o.jsxs)("div",{className:"treatment-main-container",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i(),{href:"/",children:(0,o.jsx)("img",{src:"/back-arrow.svg",alt:"back-arrow",width:20,height:20,className:"treatment-topBar-back-button"})})}),(0,o.jsx)("div",{className:"treatment_display_text_container",children:(0,o.jsx)("h1",{children:"Onco Chat"})}),(0,o.jsx)("div",{className:"oncoChat_display_image_container",children:(0,o.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/6596/6596121.png",alt:"back-arrow"})})]})]})},d=new Map;function u(e){var t=d.get(e);t&&t.destroy()}function h(e){var t=d.get(e);t&&t.update()}var p=null;"undefined"==typeof window?((p=function(e){return e}).destroy=function(e){return e},p.update=function(e){return e}):((p=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!d.has(e)){var t,r=null,o=window.getComputedStyle(e),n=(t=e.value,function(){a({testForHeightReduction:""===t||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),s=(function(t){e.removeEventListener("autosize:destroy",s),e.removeEventListener("autosize:update",i),e.removeEventListener("input",n),window.removeEventListener("resize",i),Object.keys(t).forEach(function(r){return e.style[r]=t[r]}),d.delete(e)}).bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",s),e.addEventListener("autosize:update",i),e.addEventListener("input",n),window.addEventListener("resize",i),e.style.overflowX="hidden",e.style.wordWrap="break-word",d.set(e,{destroy:s,update:i}),i()}function a(t){var n,s,i=t.restoreTextAlign,l=void 0===i?null:i,c=t.testForHeightReduction,d=o.overflowY;if(0!==e.scrollHeight&&("vertical"===o.resize?e.style.resize="none":"both"===o.resize&&(e.style.resize="horizontal"),(void 0===c||c)&&(n=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],r=e[1];t.style.scrollBehavior="auto",t.scrollTop=r,t.style.scrollBehavior=null})}}(e),e.style.height=""),s="content-box"===o.boxSizing?e.scrollHeight-(parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)):e.scrollHeight+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),"none"!==o.maxHeight&&s>parseFloat(o.maxHeight)?("hidden"===o.overflowY&&(e.style.overflow="scroll"),s=parseFloat(o.maxHeight)):"hidden"!==o.overflowY&&(e.style.overflow="hidden"),e.style.height=s+"px",l&&(e.style.textAlign=l),n&&n(),r!==s&&(e.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=s),d!==o.overflow&&!l)){var u=o.textAlign;"hidden"===o.overflow&&(e.style.textAlign="start"===u?"end":"start"),a({restoreTextAlign:u,testForHeightReduction:!0})}}function i(){a({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],u),e},p.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],h),e});var g=p,f=function(e){let{onSendMessage:t}=e,[r,s]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),l=(0,n.useRef)(null);(0,n.useEffect)(()=>{l.current&&g(l.current);let e=()=>{document.body.style.zoom="100%"};return window.addEventListener("touchstart",e),()=>{window.removeEventListener("touchstart",e)}},[]);let c=e=>{s(e.target.value),i("")},d=e=>{e.preventDefault(),""===r.trim()?i("Please enter text to send a message."):(t(r),s(""),i("")),l.current.style.height="50px",l.current.style.paddingTop="12px"};return(0,o.jsx)("div",{className:"OncoChatTopFooter-main-container",children:(0,o.jsx)("form",{onSubmit:d,children:(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("div",{className:"OncoChatTopFooter-input-container",style:{width:"100%"},children:[(0,o.jsx)("textarea",{placeholder:"Type your message",className:"OncoChatTopFooter-input",value:r,onChange:c,ref:l,style:{maxHeight:"200px",minHeight:"0px",height:"50px",width:"100%",boxSizing:"border-box",fontSize:"15px",resize:"vertical",overflowY:"auto",borderRadius:"40px",border:"1px solid #c9c9c9",background:"#fff",paddingLeft:"20px",paddingBottom:"0px",paddingTop:"20px",outline:"none",wordWrap:"break-word",overflowWrap:"break-word",whiteSpace:"pre-wrap",WebkitBorderRadius:"40px",MozBorderRadius:"40px",MsBorderRadius:"40px",OBorderRadius:"40px"}}),(0,o.jsx)("div",{style:{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"},children:a&&(0,o.jsx)("div",{style:{color:"lightgray"},children:a})})]}),(0,o.jsx)("div",{className:"onCoChat-footer-button-container",children:(0,o.jsx)("button",{type:"submit",className:"OncoChatTopFooter-image-container",children:(0,o.jsx)("img",{src:"/oncoChat-send.svg",alt:"oncoChat-send",className:"OncoChatTopFooter-send-image"})})})]})})})},m=function(e){let{messages:t}=e,r=(0,n.useRef)(null);(0,n.useEffect)(()=>{s()},[t]);let s=()=>{var e;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},a=t.filter((e,r)=>{var o;return!("..."===e.inputMessage&&(null===(o=t[r+1])||void 0===o?void 0:o.isUser))});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{}),(0,o.jsxs)("div",{className:"OncoChatBody-main-container",children:[a.map((e,t)=>(0,o.jsxs)("div",{className:"OncoChatBody-".concat(e.isUser?"user-chat":"inner-container"),style:t===a.length-1?{paddingBottom:"120px"}:{},children:[!e.isUser&&(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"OncoChatBody-inner-colored-avatar",children:(0,o.jsx)("i",{className:"fa-solid fa-robot"})})}),e.isUser&&(0,o.jsx)("span",{children:e.inputMessage}),e.message&&(0,o.jsx)("span",{children:e.message}),e.isUser&&(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"OncoChatBody-inner-colored-avatar-image-container",children:(0,o.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/6596/6596121.png",alt:"User Avatar"})})})]},t)),(0,o.jsx)("div",{ref:r})]})]})},v=function(){let e=localStorage.getItem("token"),[t,r]=(0,n.useState)([]),[a,i]=(0,n.useState)(!1),[l,d]=(0,n.useState)(null);(0,n.useEffect)(()=>{if(e){let t=async()=>{try{let t=await s.Z.get("".concat("https://mercurial-api.nirmitee.io/api","/user"),{headers:{Authorization:"Bearer ".concat(e)}});d(t.data._id);let o=JSON.parse(localStorage.getItem("chatHistory_".concat(t.data._id)));o?r(o):r([{id:1,message:"Hi! I’m OncoChat! Here to assist you with any questions or concerns you may have about your treatment.",isUser:!1}])}catch(e){console.error("Error fetching user data:",e)}};t()}else console.error("User not authenticated")},[]);let u=async e=>{if("hi"===e.toLowerCase()||"hello"===e.toLowerCase()){r([...t,{id:t.length+1,inputMessage:e,isUser:!0},{id:t.length+2,message:"Hey, I'm great, what about you? How can I assist you?",isUser:!1}]);return}if("how are you"===e.toLowerCase()){r([...t,{id:t.length+1,inputMessage:e,isUser:!0},{id:t.length+2,message:"Thanks for asking, I'm doing great! How about you?",isUser:!1}]);return}r([...t,{id:t.length+1,inputMessage:e,isUser:!0},{id:t.length+2,message:(0,o.jsxs)("div",{className:"typing",children:[(0,o.jsx)("div",{className:"dot"}),(0,o.jsx)("div",{className:"dot"}),(0,o.jsx)("div",{className:"dot"})]}),isUser:!1}]),i(!0);try{let t=await s.Z.post("".concat("https://mercurial-api.nirmitee.io/api","/api_completion"),{apiKey:"e66013d0-eb55-4446-8901-c7c0d6ef5ede",sessionID:"655bea633bf754986662040f",history:[{role:"user",content:e}],powerful:!1,google:!0});if(200===t.status&&t.data.success){let e=function(e){let t=e.replace(/(\d+†source|】|【)/g,"");return t}(t.data.output.completion);r(t=>[...t.filter(e=>"object"!=typeof e.message),{id:t.length+1,message:e,isUser:!1}])}}catch(e){console.error("Error fetching bot response:",e)}finally{i(!1)}};return(0,n.useEffect)(()=>{if(l){localStorage.setItem("chatHistory_".concat(l),JSON.stringify(t));let e=new Date().getTime()+1728e5,r=setTimeout(()=>{localStorage.removeItem("chatHistory_".concat(l)),console.log("Session data removed after 2 days.")},e);return()=>clearTimeout(r)}},[t,l]),(0,o.jsxs)("div",{className:"OncoChatScreen_main_container",children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{messages:t}),(0,o.jsx)(f,{onSendMessage:u})]})}}}]);