"use strict";(self.webpackChunkFredericton_Association_of_Malayalees=self.webpackChunkFredericton_Association_of_Malayalees||[]).push([[298,878],{2407:(e,t,n)=>{n.d(t,{A:()=>d});n(5043);var r=n(2698),i=n(8446),a=n(5865),s=n(3639),o=n(6658),c=n(3216),l=n(5475),u=n(579);const d=()=>{const e=(0,c.zy)().pathname.split("/").filter((e=>e));return(0,u.jsx)("div",{style:{marginTop:"60px",marginBottom:"20px"},children:(0,u.jsxs)(r.A,{separator:(0,u.jsx)(o.A,{fontSize:"small"}),"aria-label":"breadcrumb",sx:{fontSize:"0.8rem",display:"flex",alignItems:"center"},children:[(0,u.jsxs)(i.A,{color:"inherit",to:"/",component:l.N_,sx:{display:"flex",alignItems:"center",fontSize:"0.8rem",textDecoration:"none",padding:"6px 8px",borderRadius:"4px",background:"#f0f0f0",transition:"background 0.3s","&:hover":{background:"#e0e0e0"}},children:[(0,u.jsx)(s.A,{sx:{mr:.5},fontSize:"inherit"}),"Home"]}),e.map(((t,n)=>{const r="/".concat(e.slice(0,n+1).join("/")),s=n===e.length-1,o=(e=>e.replace(/-/g," ").replace(/\b\w/g,(e=>e.toUpperCase())))(t);return s?(0,u.jsx)(a.A,{color:"textPrimary",sx:{display:"flex",alignItems:"center",fontSize:"0.8rem",padding:"6px 8px",borderRadius:"4px",background:"#f0f0f0"},children:o},r):(0,u.jsx)(i.A,{color:"inherit",to:r,component:l.N_,sx:{display:"flex",alignItems:"center",fontSize:"0.8rem",textDecoration:"none",padding:"6px 8px",borderRadius:"4px",background:"#f0f0f0",transition:"background 0.3s","&:hover":{background:"#e0e0e0"}},children:o},r)}))]})})}},506:(e,t,n)=>{n.d(t,{A:()=>i});n(5043);var r=n(579);const i=()=>{const e="".concat(".","/images/herosection/culture.png");return(0,r.jsx)("div",{className:"full-width-image-container",children:(0,r.jsx)("img",{src:e,alt:"Culture",className:"full-width-image"})})}},1878:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(5043);var r=n(8129),i=n(3077),a=n(7070);function s(e,t){[...t].reverse().forEach((n=>{const r=e.getVariant(n);r&&(0,i.U)(e,r),e.variantChildren&&e.variantChildren.forEach((e=>{s(e,t)}))}))}function o(){let e=!1;const t=new Set,n={subscribe:e=>(t.add(e),()=>{t.delete(e)}),start(n,i){(0,r.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const s=[];return t.forEach((e=>{s.push((0,a._)(e,n,{transitionOverride:i}))})),Promise.all(s)},set:n=>((0,r.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((e=>{!function(e,t){Array.isArray(t)?s(e,t):"string"===typeof t?s(e,[t]):(0,i.U)(e,t)}(e,n)}))),stop(){t.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var c=n(4930),l=n(293);const u=function(){const e=(0,c.M)(o);return(0,l.E)(e.mount,[]),e};var d=n(1984),m=n(3204),h=n(579);const f=()=>{const e=u();return(0,h.jsxs)(d.P.div,{className:"join-container mb-5",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},onHoverStart:()=>e.start({scale:1.05}),onHoverEnd:()=>e.start({scale:1}),children:[(0,h.jsxs)("div",{className:"join-content",children:[(0,h.jsx)("h1",{className:"join-content-h1",children:"Join the Fredericton Association of Malayalees today!"}),(0,h.jsx)("p",{children:"Become a member and be part of our vibrant community."})]}),(0,h.jsxs)(d.P.button,{className:"join-signup-button",whileHover:{backgroundColor:"#d43f13",color:"#fff",scale:1.1},whileTap:{scale:.9},children:[(0,h.jsx)(m.NPy,{style:{marginRight:"10px"}})," Join Community"]})]})}},5298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r=n(5043),i=n(3519),a=n(1072),s=n(8602),o=(n(8421),n(4409)),c=n(3801),l=n(1802),u=n(506),d=n(5246),m=n(1725),h=n.n(m),f=/[A-Z]/g,p=/^ms-/,g={};function v(e){return"-"+e.toLowerCase()}const x=function(e){if(g.hasOwnProperty(e))return g[e];var t=e.replace(f,v);return g[e]=p.test(t)?"-"+t:t};function b(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let a=0;a<i;a++){const r=n[a];if(e[r]!==t[r]||!Object.prototype.hasOwnProperty.call(t,r))return!1}return!0}var y=n(5173),j=n.n(y);const w=j().oneOfType([j().string,j().number]),A={all:j().bool,grid:j().bool,aural:j().bool,braille:j().bool,handheld:j().bool,print:j().bool,projection:j().bool,screen:j().bool,tty:j().bool,tv:j().bool,embossed:j().bool},N={orientation:j().oneOf(["portrait","landscape"]),scan:j().oneOf(["progressive","interlace"]),aspectRatio:j().string,deviceAspectRatio:j().string,height:w,deviceHeight:w,width:w,deviceWidth:w,color:j().bool,colorIndex:j().bool,monochrome:j().bool,resolution:w,type:Object.keys(A)},{type:C,...k}=N,O={minAspectRatio:j().string,maxAspectRatio:j().string,minDeviceAspectRatio:j().string,maxDeviceAspectRatio:j().string,minHeight:w,maxHeight:w,minDeviceHeight:w,maxDeviceHeight:w,minWidth:w,maxWidth:w,minDeviceWidth:w,maxDeviceWidth:w,minColor:j().number,maxColor:j().number,minColorIndex:j().number,maxColorIndex:j().number,minMonochrome:j().number,maxMonochrome:j().number,minResolution:w,maxResolution:w,...k};var M={all:{...A,...O},types:A,matchers:N,features:O};const E=e=>{const t=[];return Object.keys(M.all).forEach((n=>{const r=e[n];null!=r&&t.push(((e,t)=>{const n=x(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")})(n,r))})),t.join(" and ")},S=(0,r.createContext)(void 0),R=e=>{if(!e)return;return Object.keys(e).reduce(((t,n)=>(t[x(n)]=e[n],t)),{})},F=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{e.current=!0}),[]),e.current},I=e=>{const t=()=>(e=>e.query||E(e))(e),[n,i]=(0,r.useState)(t);return(0,r.useEffect)((()=>{const e=t();n!==e&&i(e)}),[e]),n},W=(e,t,n)=>{const i=(e=>{const t=(0,r.useContext)(S),n=()=>R(e)||R(t),[i,a]=(0,r.useState)(n);return(0,r.useEffect)((()=>{const e=n();b(i,e)||a(e)}),[e,t]),i})(t),a=I(e);if(!a)throw new Error("Invalid or missing MediaQuery!");const s=((e,t)=>{const n=()=>h()(e,t||{},!!t),[i,a]=(0,r.useState)(n),s=F();return(0,r.useEffect)((()=>{if(s){const e=n();return a(e),()=>{e&&e.dispose()}}}),[e,t]),i})(a,i),o=(e=>{const[t,n]=(0,r.useState)(e.matches);return(0,r.useEffect)((()=>{const t=e=>{n(e.matches)};return e.addListener(t),n(e.matches),()=>{e.removeListener(t)}}),[e]),t})(s),c=F();return(0,r.useEffect)((()=>{c&&n&&n(o)}),[o]),(0,r.useEffect)((()=>()=>{s&&s.dispose()}),[]),o};var L=n(2407),V=n(7689),_=n(1878),z=n(579);const H=()=>{W({maxWidth:768});const[e,t]=(0,d.Wx)({triggerOnce:!1}),[n,r]=(0,d.Wx)({triggerOnce:!1}),[m,h]=(0,d.Wx)({triggerOnce:!1}),[f,p]=(0,d.Wx)({triggerOnce:!1}),g="".concat(".","/images/fredericton/image1.jpg"),v="".concat(".","/images/fredericton/image4.jpg");return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(V.A,{pageTitle:"About Us - Fredericton Association of Malayalees",description:"Learn more about the Fredericton Association of Malayalees."}),(0,z.jsx)("div",{className:"about-us-page",children:(0,z.jsxs)(i.A,{className:"about-us-content",children:[(0,z.jsx)(L.A,{})," ",(0,z.jsx)(a.A,{className:"mb-1 ".concat(t?"animate":""),ref:e,children:(0,z.jsx)(s.A,{children:(0,z.jsx)("h1",{className:"about-heading",children:"About Fredericton Association of Malayalees"})})}),(0,z.jsxs)(a.A,{className:"align-items-center",children:[(0,z.jsx)(s.A,{md:6,className:"".concat(r?"animate":"align-items-center"),ref:n,children:(0,z.jsx)("div",{className:"about-description",children:o.C.h_.map(((e,t)=>(0,z.jsx)("p",{children:e},t)))})}),(0,z.jsx)(s.A,{md:6,className:"".concat(r?"animate":""),ref:n,children:(0,z.jsx)("div",{className:"image-container",children:(0,z.jsx)("img",{src:g,alt:"About Us",className:"about-image"})})})]}),(0,z.jsx)(a.A,{className:"statistics mt-4 ",children:o.C.oG.map(((e,t)=>(0,z.jsx)(s.A,{md:6,className:"stat-item ".concat(h?"animate":""),ref:m,children:(0,z.jsx)("ul",{children:e.list.map(((e,t)=>(0,z.jsx)("li",{children:e},t)))})},t)))}),(0,z.jsxs)(a.A,{className:"mt-5 align-items-center",children:[(0,z.jsx)(s.A,{md:6,className:"".concat(p?"animate":""),ref:f,children:(0,z.jsx)("div",{className:"image-container",children:(0,z.jsx)("img",{src:v,alt:"Activities",className:"about-image"})})}),(0,z.jsx)(s.A,{md:6,className:"".concat(p?"animate":""),ref:f,children:(0,z.jsxs)("div",{className:"mission-description",children:[(0,z.jsx)("h2",{children:"Fredericton Association of Malayalees"}),(0,z.jsx)("p",{children:"Through FAM (Fredericton Association of Malayalees), we unite and join hands to pass the culture on to generations. As a team, we conduct cultural activities, linguistic programs, festivals, charity activities, etc. FAM is a forum where we can meet, exchange views, and foster friendships."}),(0,z.jsx)("p",{children:"Malayalees in Fredericton are represented in FAM, which advocates for their wellbeing and cultural needs. With all our cooperative efforts, FAM pledges to keep our next generation abreast of our mother tongue, culture, and enriched heritage."}),(0,z.jsx)("p",{children:"We are open to collaborating and engaging with other cultural groups and ethnicities. Let us hold our hands to form a composite culture with every color and song to be felt and experienced in its original essence under a single umbrella."})]})})]}),(0,z.jsxs)(a.A,{className:"mt-5",children:[(0,z.jsx)(s.A,{md:6,className:"".concat(p?"animate":""),ref:f,children:(0,z.jsxs)("div",{className:"mission-vision",children:[(0,z.jsx)("h2",{children:"Our Mission"}),(0,z.jsx)("p",{children:c.b.mission})]})}),(0,z.jsx)(s.A,{md:6,className:"".concat(p?"animate":""),ref:f,children:(0,z.jsxs)("div",{className:"mission-vision",children:[(0,z.jsx)("h2",{children:"Our Vision"}),(0,z.jsx)("p",{children:c.b.vision})]})})]})]})}),(0,z.jsx)(_.default,{}),(0,z.jsx)(u.A,{}),(0,z.jsx)(l.A,{})]})}},1238:(e,t)=>{t.Y=function(e,t){return o(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,a=t[n];if(!a)return!1;switch(n){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),a=u(a);break;case"resolution":i=l(i),a=l(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=c(i),a=c(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(r){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!n||!i&&n}))};var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),a=t[1],s=t[2],o=t[3]||"",c={};return c.inverse=!!a&&"not"===a.toLowerCase(),c.type=s?s.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],c.expressions=o.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},1725:(e,t,n)=>{var r=n(1238).Y,i="undefined"!==typeof window?window.matchMedia:null;function a(e,t,n){var a,s=this;function o(e){s.matches=e.matches,s.media=e.media}i&&!n&&(a=i.call(window,e)),a?(this.matches=a.matches,this.media=a.media,a.addListener(o)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(o)}}e.exports=function(e,t,n){return new a(e,t,n)}},5246:(e,t,n)=>{n.d(t,{Wx:()=>m});var r=n(5043),i=Object.defineProperty,a=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),s=new Map,o=new WeakMap,c=0,l=void 0;function u(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(n=e.root)?(o.has(n)||(c+=1,o.set(n,c.toString())),o.get(n)):"0":e[t]);var n})).toString()}function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=u(e);let n=s.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},s.set(t,n)}return n}(n),c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),s.delete(i))}}r.Component;function m(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:s,skip:o,initialInView:c,fallbackInView:l,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[h,f]=r.useState(null),p=r.useRef(),[g,v]=r.useState({inView:!!c,entry:void 0});p.current=u,r.useEffect((()=>{if(o||!h)return;let r;return r=d(h,((e,t)=>{v({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&s&&r&&(r(),r=void 0)}),{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,a,i,s,o,n,l,t]);const x=null==(m=g.entry)?void 0:m.target,b=r.useRef();h||!x||s||o||b.current===x||(b.current=x,v({inView:!!c,entry:void 0}));const y=[f,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}},4409:e=>{e.exports=JSON.parse('{"C":{"h_":["Welcome to the vibrant and diverse Malayalee Community Group in Fredericton, Canada. We are a community bound by the common thread of the Malayalam language and culture, originating from the picturesque state of Kerala, India.","Our mission is to foster inclusiveness and create a warm, welcoming environment for all. We proudly celebrate our rich cultural heritage through various events, festivals, cultural programs, and social gatherings.","Whether you are a student, professional, or a family with Kerala ethnicity, we warmly invite you to join our community. Come, be a part of our journey as we cherish our traditions, share our stories, and create beautiful memories together."],"oG":[{"list":["Organizing picnics and outdoor activities","Hosting cultural festivals and celebrations"]},{"list":["Providing support to newcomers","Promoting arts and cultural heritage through various events"]}]}}')},3801:e=>{e.exports=JSON.parse('{"b":{"mission":"Our mission is to foster a vibrant and supportive community that celebrates Malayalam culture and heritage, while promoting inclusiveness and cultural exchange.","vision":"Our vision is to be a leading cultural organization that preserves and promotes the rich heritage of Kerala, and serves as a hub for cultural, social, and educational activities for the Malayalee community in Fredericton."}}')}}]);
//# sourceMappingURL=298.0cdb02ac.chunk.js.map