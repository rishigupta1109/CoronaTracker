(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{173:function(e,t,c){},174:function(e,t,c){},175:function(e,t,c){},178:function(e,t,c){},313:function(e,t,c){},314:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(57),s=c.n(r),i=(c(173),c(174),c(175),c(2)),j=function(e){return Object(i.jsx)("div",{id:"Navbar",children:Object(i.jsx)("h1",{id:"site-name",children:"Corona Tracker"})})},d=c(50),o=c.n(d),l=c(144),b=c(105),h=c(17),x=(c(178),c(316)),O=c(321),u=c(164),v=c(160),p=function(e){return Object(i.jsx)(x.a,{width:"100%",height:"100%",children:Object(i.jsx)(O.a,{children:Object(i.jsx)(u.a,{data:e.data,dataKey:e.dataKey,startAngle:90,endAngle:450,paddingAngle:null,innerRadius:null,children:e.data.map((function(e){return Object(i.jsx)(v.a,{fill:e.fill,stroke:0},e.name)}))})})})},f=function(e){var t=[{name:"active",value:e.active,fill:"#f2ec3a"},{name:"recovered",value:e.recovered,fill:"#e3526a"},{name:"deaths",value:e.deaths,fill:"#8F44FD"}];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"chart-container",children:[" ",Object(i.jsx)(p,{data:t,dataKey:"value"})]}),Object(i.jsxs)("div",{className:"white-Box white-container color-conatiner",children:[Object(i.jsxs)("div",{className:"color-block",children:["   ",Object(i.jsx)("div",{style:{backgroundColor:"#f2ec3a",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}),Object(i.jsx)("div",{children:"active"})]}),Object(i.jsxs)("div",{className:"color-block",children:[" ",Object(i.jsx)("div",{style:{backgroundColor:"#e3526a",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}),Object(i.jsx)("div",{children:"recovered"})]}),Object(i.jsxs)("div",{className:"color-block",children:["    ",Object(i.jsx)("div",{style:{backgroundColor:"#8F44FD",height:"10px",width:"10px",borderRadius:"100%",margin:"15px"}}),Object(i.jsx)("div",{children:"deaths"})]})]})]})},g=(c(313),function(e){return Object(i.jsx)("div",{id:"item-container",onClick:function(){e.click(e.country)},style:{backgroundColor:e.filter===e.country?"lightblue":"white"},children:Object(i.jsx)("h2",{className:"country-name",children:e.country})})}),m=function(e){var t=function(t){e.itemclicked(t)};return Object(i.jsx)("div",{id:"countryList",children:e.data.map((function(c){return Object(i.jsx)(g,{click:t,filter:e.filter,country:c.country},c.country)}))})},y=c.p+"static/media/loading.a755c443.png",k=function(e){return Object(i.jsxs)(i.Fragment,{children:[!e.isloading&&!e.error&&Object(i.jsxs)("div",{className:"white-Box white-container",children:[" ",Object(i.jsxs)("div",{className:"data-box",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"cases :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.cases}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"deaths :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.deaths}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("span",{children:["  ",Object(i.jsx)("span",{children:"active :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.active}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})," "]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"recovered :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.recovered}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),"         "]}),Object(i.jsxs)("div",{className:"data-box",children:[Object(i.jsxs)("span",{children:["  ",Object(i.jsx)("span",{children:"Todaycases :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.todayCases}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"Todaydeaths :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.todayDeaths}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:"critical :"})," ",Object(i.jsx)("span",{children:e.ObtainedData.critical}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})]})," "]}),e.isloading&&!e.error&&Object(i.jsxs)("div",{className:"white-Box white-container loading-container",children:[Object(i.jsx)("h3",{children:"loading"}),Object(i.jsx)("img",{id:"loading-img",alt:"loading",src:y})," "]}),!e.isloading&&!1!==e.error&&Object(i.jsxs)("div",{className:"white-Box white-container",children:[Object(i.jsx)("h3",{children:e.error})," "]})]})},w=function(){var e=Object(a.useState)("World"),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:!1}),s=Object(h.a)(r,2),j=s[0],d=s[1],x=Object(a.useState)([]),O=Object(h.a)(x,2),u=O[0],v=O[1],p=Object(a.useState)(!1),g=Object(h.a)(p,2),y=g[0],w=g[1],C=Object(a.useState)(!1),D=Object(h.a)(C,2),N=D[0],F=D[1],S=Object(a.useState)(u),B=Object(h.a)(S,2),E=B[0],R=B[1],T=Object(a.useCallback)((function(e){var t=u,c={cases:0,deaths:0,recovered:0,active:0,todayCases:0,todayDeaths:0,critical:0,bool:!1};for(var a in t)t[a].country!==e||(c={country:t[a].country,cases:t[a].cases,deaths:t[a].deaths,recovered:t[a].recovered,active:t[a].active,todayCases:t[a].todayCases,todayDeaths:t[a].todayDeaths,critical:t[a].critical,bool:!0});d(c)}),[u]),A=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("something went wrong");case 7:return e.next=9,t.json();case 9:c=e.sent,w(!1),v(c),R(c),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),F(e.t0.message),w(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){A()}),[]),Object(a.useEffect)((function(){T("World")}),[T]);return Object(i.jsx)("div",{className:"Container",children:Object(i.jsxs)("div",{className:"white-Box",children:[Object(i.jsxs)("div",{className:"Container content-box",children:[Object(i.jsx)(f,{active:j.active,recovered:j.recovered,deaths:j.deaths,critical:j.critical}),Object(i.jsx)("h1",{id:"heading",children:j.country}),Object(i.jsx)("br",{}),Object(i.jsx)(k,{ObtainedData:j,error:N,isloading:y})]}),Object(i.jsxs)("div",{className:"Container content-box Countrylist",children:[Object(i.jsxs)("div",{id:"dropbox-container",children:[Object(i.jsx)("h1",{id:"filter-text",children:"Search"}),Object(i.jsx)("input",{type:"search",id:"select",onChange:function(e){var t=Object(b.a)(u);console.log(e.target.value);var c=new RegExp("^".concat(e.target.value),"i");console.log(c);var a=[];for(var n in t)-1!==t[n].country.search(c)&&(a=[].concat(Object(b.a)(a),[t[n]]));R(a)}})]}),Object(i.jsx)(m,{itemclicked:function(e){n(e),T(e)},filter:c,data:E})]})]})})};var C=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(w,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,322)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),D()}},[[314,1,2]]]);
//# sourceMappingURL=main.312f2095.chunk.js.map