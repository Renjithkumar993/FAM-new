"use strict";(self.webpackChunkFredericton_Association_of_Malayalees=self.webpackChunkFredericton_Association_of_Malayalees||[]).push([[237],{7237:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(2483),i=n(6025),a=n(3376),s=n(4655),o=n(8016),l=n(8698),c=n(5882),d=n(4409),u=n(6723);const m=()=>{const{ref:e,inView:t}=(0,i.Wx)({triggerOnce:!1,threshold:.1}),n="".concat(".","/images/fredericton/aboutus.png"),r=(0,a.Zp)();return(0,u.jsx)("section",{className:"about-us-section ".concat(t?"animate":""),ref:e,id:"about",children:(0,u.jsx)(s.A,{children:(0,u.jsxs)(o.A,{className:"align-items-center",children:[(0,u.jsx)(l.A,{xs:12,md:6,className:"order-1 order-md-2",children:(0,u.jsxs)("div",{className:"about-text",children:[(0,u.jsx)("h1",{children:"Malayalee Community"}),(0,u.jsx)("h2",{children:"Celebrating Kerala Culture in Fredericton, Canada"}),d.C.h_.map(((e,t)=>(0,u.jsx)("p",{children:e},t))),(0,u.jsx)(c.A,{variant:"outline-dark mb-5",onClick:()=>r("/contactus"),children:"Get in touch"})]})}),(0,u.jsx)(l.A,{xs:12,md:6,className:"order-2 order-md-1",children:(0,u.jsx)("img",{src:n,alt:"Mission and Vision",className:"mv-mission-image img-fluid"})})]})})})},h=["".concat(".","/images/heroimages/c8.jpg"),"".concat(".","/images/heroimages/c88.jpg")],g=()=>{const{ref:e,inView:t}=(0,i.Wx)({triggerOnce:!1}),n=(0,a.Zp)(),[s,o]=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=setInterval((()=>{o((e=>(e+1)%h.length))}),1e4);return()=>clearInterval(e)}),[]);return(0,u.jsxs)("div",{className:"landing-page",children:[(0,u.jsxs)("div",{className:"hero-section",children:[h.map(((e,t)=>(0,u.jsx)("div",{className:"hero-image ".concat(t===s?"visible":""),style:{backgroundImage:"url(".concat(e,")")}},t))),(0,u.jsx)("div",{className:"overlay"}),(0,u.jsx)("main",{className:"main-content mt-5",children:(0,u.jsxs)("div",{className:"text-content ".concat(t?"slide-in-left":""),ref:e,children:[(0,u.jsxs)("h2",{className:"welcome-message mt-5",children:["Welcome to ",(0,u.jsx)("span",{className:"highlight",children:"FAM"})]}),(0,u.jsxs)("div",{className:"left-aligned-content",children:[(0,u.jsx)("p",{children:"Fredericton Association of Malayalees (FAM) is a registered non-profit organization established under the Society Act in 2021."}),(0,u.jsxs)("div",{className:"button-group",children:[(0,u.jsx)("button",{className:"primary-btn",onClick:()=>{const e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth"})},children:"About Us"}),(0,u.jsx)("button",{className:"secondary-btn",onClick:()=>n("/aboutus"),children:"Learn more"})]})]})]})})]}),(0,u.jsx)("div",{id:"about",children:(0,u.jsx)(m,{})})]})}},4812:(e,t,n)=>{n.d(t,{Am:()=>s});var r=n(2483),i=n(6723);const a=["as","disabled"];function s(e){let{tagName:t,disabled:n,href:r,target:i,rel:a,role:s,onClick:o,tabIndex:l=0,type:c}=e;t||(t=null!=r||null!=i||null!=a?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},d];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==o||o(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?i:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const o=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);const[l,{tagName:c}]=s(Object.assign({tagName:n,disabled:r},o));return(0,i.jsx)(c,Object.assign({},o,l,{ref:t}))}));o.displayName="Button"},5882:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(1097),i=n.n(r),a=n(2483),s=n(4812),o=n(3068),l=n(6723);const c=a.forwardRef(((e,t)=>{let{as:n,bsPrefix:r,variant:a="primary",size:c,active:d=!1,disabled:u=!1,className:m,...h}=e;const g=(0,o.oU)(r,"btn"),[f,{tagName:b}]=(0,s.Am)({tagName:n,disabled:u,...h}),v=b;return(0,l.jsx)(v,{...f,...h,ref:t,disabled:u,className:i()(m,g,d&&"active",a&&"".concat(g,"-").concat(a),c&&"".concat(g,"-").concat(c),h.href&&u&&"disabled")})}));c.displayName="Button";const d=c},6025:(e,t,n)=>{n.d(t,{Wx:()=>m});var r=n(2483),i=Object.defineProperty,a=(e,t,n)=>((e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),s=new Map,o=new WeakMap,l=0,c=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(n=e.root)?(o.has(n)||(l+=1,o.set(n,l.toString())),o.get(n)):"0":e[t]);var n})).toString()}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=d(e);let n=s.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},s.set(t,n)}return n}(n),l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),s.delete(i))}}r.Component;function m(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:s,skip:o,initialInView:l,fallbackInView:c,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[h,g]=r.useState(null),f=r.useRef(),[b,v]=r.useState({inView:!!l,entry:void 0});f.current=d,r.useEffect((()=>{if(o||!h)return;let r;return r=u(h,((e,t)=>{v({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&s&&r&&(r(),r=void 0)}),{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,a,i,s,o,n,c,t]);const y=null==(m=b.entry)?void 0:m.target,p=r.useRef();h||!y||s||o||p.current===y||(p.current=y,v({inView:!!l,entry:void 0}));const x=[g,b.inView,b.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}},4409:e=>{e.exports=JSON.parse('{"C":{"h_":["Welcome to the vibrant and diverse Malayalee Community Group in Fredericton, Canada. We are a community bound by the common thread of the Malayalam language and culture, originating from the picturesque state of Kerala, India.","Our mission is to foster inclusiveness and create a warm, welcoming environment for all. We proudly celebrate our rich cultural heritage through various events, festivals, cultural programs, and social gatherings.","Whether you are a student, professional, or a family with Kerala ethnicity, we warmly invite you to join our community. Come, be a part of our journey as we cherish our traditions, share our stories, and create beautiful memories together."],"oG":[{"list":["Organizing picnics and outdoor activities","Hosting cultural festivals and celebrations"]},{"list":["Providing support to newcomers","Promoting arts and cultural heritage through various events"]}]}}')}}]);
//# sourceMappingURL=237.facafd7e.chunk.js.map