"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{223:function(e,n,r){r.r(n),r.d(n,{Reviews:function(){return d}});var t=r(885),a=r(791),c=r(861),i=r(757),s=r.n(i),u=r(44),o=function(){var e=(0,c.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("/movie/".concat(n),{params:{api_key:"65573c76cf88d807ccbaf09ca79feb15"}});case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=r(739),h=r(854),f=r(184),d=function(){var e=function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],c=n[1],i=(0,a.useState)(!1),s=(0,t.Z)(i,2),u=s[0],h=s[1],f=(0,a.useState)(null),d=(0,t.Z)(f,2),p=d[0],v=d[1],m=(0,l.UO)().movieId;return(0,a.useEffect)((function(){h(!0),o("".concat(m,"/reviews")).then(c).catch(v).finally((function(){return h(!1)}))}),[m]),{reviews:r,isLoading:u,error:p}}(),n=e.reviews,r=e.isLoading,c=e.error;return(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(h.a,{}),c&&(0,f.jsx)("p",{children:"Oops! Something wrong"}),null!==n&&void 0!==n&&n.length?(0,f.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h2",{children:r}),(0,f.jsx)("p",{children:t})]},n)}))}):(0,f.jsx)("h3",{children:"We don`t have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=223.09e88dbf.chunk.js.map