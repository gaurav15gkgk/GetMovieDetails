(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(11),c(12),c(3)),l=c.n(i),o=c(6),u=c(4),j=c(0);function d(e){var t=e.movie;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(j.jsxs)("div",{className:"card--content",children:[Object(j.jsx)("h3",{className:"card--title",children:t.title}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(j.jsx)("p",{className:"card--desc",children:t.overview})]})]})}c(15);function b(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],b=s[1],h=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=2f6925ff8eb840b4ecfea2ec62492812&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,b(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"form",onSubmit:h,children:[Object(j.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(j.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"Enter Movie name",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(j.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(j.jsx)(d,{movie:e},e.id)}))})]})}var h=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"title",children:"Search Movies Here"}),Object(j.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.40f1254f.chunk.js.map