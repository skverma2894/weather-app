(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),i=(a(9),a(3)),o=a(0),d="d5e6fe32d8efc4b7591c7a1bac8d0593",u="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),s=Object(i.a)(r,2),h=s[0],l=s[1];return Object(o.jsx)("div",{className:"undefined"!==typeof h.main?"app ".concat(h.weather[0].main):"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return c(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){l(e),c(""),console.log(e)}))}})}),"undefined"!==typeof h.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getFullYear();return"".concat(n," ").concat(t," ").concat(a," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsx)("div",{className:"temp",children:"".concat(Math.round(h.main.temp),"\xb0c")}),Object(o.jsx)("div",{className:"weather",children:"".concat(h.weather[0].main)})]})]}):""]})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.461ee738.chunk.js.map