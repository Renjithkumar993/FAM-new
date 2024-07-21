"use strict";(self.webpackChunkFredericton_Association_of_Malayalees=self.webpackChunkFredericton_Association_of_Malayalees||[]).push([[964],{7964:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(2483),i=n(4655),r=n(8016),o=n(8698),s=n(5882),c=n(6405);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return h(this,n)}}function y(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var a=n.match(/(.*?)([0-9]+)(.*)/),i=a?a[1]:"",r=a?a[3]:"",o=a?a[2]:n,s=o.length>=t?o:(y(Array(t)).map((function(){return"0"})).join("")+o).slice(-1*t);return"".concat(i).concat(s).concat(r)}var b={daysInHours:!1,zeroPadTime:2};function S(e,t){var n=e.days,a=e.hours,i=e.minutes,r=e.seconds,o=Object.assign(Object.assign({},b),t),s=o.daysInHours,c=o.zeroPadTime,l=o.zeroPadDays,u=void 0===l?c:l,m=Math.min(2,c),d=s?T(a+24*n,c):T(a,m);return{days:s?"":T(n,u),hours:d,minutes:T(i,m),seconds:T(r,m)}}var w=function(e){d(n,e);var t=v(n);function n(){var e;return l(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return m(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,a.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(a.Component);w.propTypes={count:c.number,children:c.element,onComplete:c.func};var j=function(e){d(n,e);var t=v(n);function n(e){var i;if(l(this,n),(i=t.call(this,e)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,a.createRef)(),i.tick=function(){var e=i.calcTimeDelta(),t=e.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(e,void 0,t)},i.start=function(){if(!i.isStarted()){var e=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=e?i.calcOffsetStartTimestamp()-e:0;var t=i.calcTimeDelta();i.setTimeDeltaState(t,"STARTED",i.props.onStart),i.props.controlled||t.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},e.date){var r=i.calcTimeDelta();i.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return m(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,a=e.precision,i=e.controlled,r=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.now,i=void 0===a?Date.now:a,r=n.precision,o=void 0===r?0:r,s=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=l);var m=s?t:t-i(),d=Math.min(20,Math.max(0,o)),f=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(d))),p=Math.abs(f)/1e3;return{total:f,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:f<=0}}(t,{now:n,precision:a,controlled:i,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var a=this;if(this.mounted){var i=e.completed&&!this.state.timeDelta.completed,r=e.completed&&"STARTED"===t;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var i=t||n.status;return e.completed&&!a.props.overtime?i="COMPLETED":t||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:e,status:i}}),(function(){n&&n(a.state.timeDelta),a.props.onComplete&&(i||r)&&a.props.onComplete(e,r)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,a=e.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:S(i,{daysInHours:t,zeroPadTime:n,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,i=e.onComplete;return(0,a.createElement)(w,{ref:this.legacyCountdownRef,count:t,onComplete:i},n)}var r=this.props,o=r.className,s=r.overtime,c=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!s)return(0,a.cloneElement)(c,{countdown:u});var m=u.formatted,d=m.days,f=m.hours,p=m.minutes,h=m.seconds;return(0,a.createElement)("span",{className:o},u.total<0?"-":"",d,d?":":"",f,":",p,":",h)}}]),n}(a.Component);j.defaultProps=Object.assign(Object.assign({},b),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),j.propTypes={date:(0,c.oneOfType)([(0,c.instanceOf)(Date),c.string,c.number]),daysInHours:c.bool,zeroPadTime:c.number,zeroPadDays:c.number,controlled:c.bool,intervalDelay:c.number,precision:c.number,autoStart:c.bool,overtime:c.bool,className:c.string,children:c.element,renderer:c.func,now:c.func,onMount:c.func,onStart:c.func,onPause:c.func,onStop:c.func,onTick:c.func,onComplete:c.func};const D=j;var x=n(5489),P=n(1068),M=n.n(P),O=n(3376),C=n(6723);const A=()=>{const[e,t]=(0,a.useState)([]),n=(0,O.Zp)();if((0,a.useEffect)((()=>{const e=x.map((e=>({...e,eventId:e.title.replace(/\s+/g,"").toLowerCase()})));t(e)}),[]),0===e.length)return(0,C.jsx)("div",{children:"Loading..."});const c="".concat(".","/images/fredericton/upcoming.png"),l="".concat(".","/images/events/onam.jpeg"),u=e[0],{eventId:m,title:d,description:f,date:p,isOpen:h}=u,v=M().tz(p,"UTC");return(0,C.jsx)(i.A,{fluid:!0,className:"mv-notification-container",children:(0,C.jsxs)(r.A,{className:"align-items-center justify-content-center",children:[(0,C.jsx)(o.A,{xs:12,md:6,className:"event-image-container order-1 order-md-2",children:(0,C.jsx)("img",{src:l,alt:d,className:"event-image img-fluid"})}),(0,C.jsxs)(o.A,{xs:12,md:6,className:"event-info",children:[(0,C.jsx)(r.A,{className:"justify-content-center",children:(0,C.jsx)(o.A,{xs:12,className:"text-center",children:(0,C.jsx)("img",{src:c,alt:d,className:"img-fluid"})})}),(0,C.jsx)("h4",{className:"event-title",children:d}),(0,C.jsx)("p",{className:"event-description text-black",children:f}),(0,C.jsx)("h5",{className:"event-date",children:v.format("MMMM D, YYYY")}),(0,C.jsx)(D,{date:v.toDate(),renderer:e=>{let{days:t,hours:n,minutes:a,seconds:i,completed:r}=e;return r?(0,C.jsx)("span",{children:"The event has started!"}):(0,C.jsxs)("div",{className:"mv-statistics",children:[(0,C.jsxs)("div",{className:"stat-box",children:[(0,C.jsx)("h3",{children:t}),(0,C.jsx)("p",{children:"Days"})]}),(0,C.jsxs)("div",{className:"stat-box",children:[(0,C.jsx)("h3",{children:n}),(0,C.jsx)("p",{children:"Hours"})]}),(0,C.jsxs)("div",{className:"stat-box",children:[(0,C.jsx)("h3",{children:a}),(0,C.jsx)("p",{children:"Minutes"})]}),(0,C.jsxs)("div",{className:"stat-box",children:[(0,C.jsx)("h3",{children:i}),(0,C.jsx)("p",{children:"Seconds"})]})]})}}),(0,C.jsx)(s.A,{className:"mv-register-btn mt-3 mb-3",variant:"primary",onClick:()=>((e,t)=>{t&&n("/events/".concat(e))})(m,h),children:"Register"})]})]})})}},5489:e=>{e.exports=JSON.parse('[{"title":"FAM Onam 2024","date":"2024-09-14","description":"A fun-filled day with games, activities, and delicious food.","image":"onam.jpeg","details":"Join us for a traditional Onam celebration with various activities including games, cultural performances, and a grand feast.","time":"10:00 AM - 5:00 PM","location":"Fredericton, NB","price":{"adults":"$25","children":"$12","kids":"Free entry"},"isOpen":true,"formIframe":"","performanceIframe":""},{"title":"Christmas and New Year Celebration","date":"2023-12-23","description":"Celebrate the festive season with our combined Christmas and New Year party featuring music, dance, and a visit from Santa.","image":"images/events/EVEnt2.jpeg","details":"Join us for a grand celebration of Christmas and New Year. Enjoy live music, dance performances, and a special visit from Santa Claus. The event will feature delicious holiday treats and a spectacular fireworks display to welcome the new year.","time":"6:00 PM - 1:00 AM","location":"Fredericton, NB","price":{"adults":"$30","children":"$15","kids":"Free entry"},"isOpen":false,"formIframe":"https://www.zeffy.com/embed/ticketing/12345678-9abc-def0-1234-56789abcdef0","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.274308336435!2d-66.64458378446987!3d45.96358997910885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca43ae1f0f3b7a5%3A0x32a4958fdbb5a905!2sFredericton%2C%20NB!5e0!3m2!1sen!2sca!4v1605295357034!5m2!1sen!2sca"},{"title":"FAM Family Picnic","date":"2024-06-29","description":"A day of family fun with games, food, and activities for all ages.","image":"images/events/EVEnt3.jpeg","details":"Join us for the FAM Family Picnic, a day filled with fun activities for all ages. Enjoy outdoor games, delicious food, and various entertainment options. This event is perfect for spending quality time with family and friends in a beautiful park setting.","time":"11:00 AM - 4:00 PM","location":"Fredericton, NB","price":{"adults":"Free entry","children":"Free entry","kids":"Free entry"},"isOpen":false,"formIframe":"https://www.zeffy.com/embed/ticketing/09876543-21f0-edcb-5432-1fedcba98765","mapIframe":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.274308336435!2d-66.64458378446987!3d45.96358997910885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca43ae1f0f3b7a5%3A0x32a4958fdbb5a905!2sFredericton%2C%20NB!5e0!3m2!1sen!2sca!4v1605295357034!5m2!1sen!2sca"}]')}}]);
//# sourceMappingURL=964.ff9ddf2d.chunk.js.map