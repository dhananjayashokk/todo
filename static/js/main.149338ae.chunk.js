(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{24:function(e,t,n){},33:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n.n(a),i=n(13),o=n.n(i),r=(n(33),n(23),n(24),n(50)),l=n(10),u=n(51),d=n(48),j=function(e){var t=e.filteredtodoName,n=e.setFilteredTodoName,a=e.todoName,s=e.setTodoName,i=function(e){var c=t.map((function(t){return t.id==e.target.id&&(t.status=!t.status),t}));n(c)},o=function(e){var t=Object(l.a)(a).filter((function(t){return t.id!=e.target.id}));s(t)};return Object(c.jsx)("div",{style:{marginTop:"6%"},children:t.map((function(e){return Object(c.jsxs)("div",{style:{display:"flex",marginTop:"2%"},children:[Object(c.jsx)(u.a,{style:{width:"50%"},variant:1==e.status?"success":"danger",children:e.name},"1"),Object(c.jsx)(d.a,{id:e.id,variant:1==e.status?"danger":"success",onClick:i,style:{marginLeft:"2%"},children:1==e.status?"Incomplete":"Complete"}),Object(c.jsx)(d.a,{variant:"danger",id:e.id,onClick:o,style:{marginLeft:"2%"},children:"Delete"})]})}))})},b=n(12),m=n(49),O=n(52),g=function(e){Object(a.useEffect)((function(){E(),z()}),[]);var t=Object(a.useState)([]),n=Object(b.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(""),r=Object(b.a)(o,2),u=r[0],g=r[1],f=Object(a.useState)(""),h=Object(b.a)(f,2),x=h[0],p=h[1],v=Object(a.useState)([]),S=Object(b.a)(v,2),k=S[0],y=S[1],N=Object(a.useState)([]),I=Object(b.a)(N,2),C=I[0],L=I[1],T=Object(a.useState)(""),J=Object(b.a)(T,2),w=J[0],F=J[1];Object(a.useEffect)((function(){console.log("bucketname:",typeof s),localStorage.setItem("buckets",JSON.stringify(s))}),[s]),Object(a.useEffect)((function(){console.log("called",x);var e=Object(l.a)(k).filter((function(e){return e.bucket==x}));console.log("filtered todos",e),L(e)}),[x]);Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(k)),console.log("todoname",k);var e=Object(l.a)(k).filter((function(e){return e.bucket==x}));L(e)}),[k]);var E=function(e){null==localStorage.getItem("buckets")?(console.log("null bucker"),i([])):(console.log("not null bucker",JSON.parse(localStorage.getItem("buckets"))[0].name),i(JSON.parse(localStorage.getItem("buckets"))),p(JSON.parse(localStorage.getItem("buckets"))[0].name))},z=function(e){null==localStorage.getItem("todos")?y([]):y(JSON.parse(localStorage.getItem("todos")))};return Object(c.jsxs)("div",{className:"col-md-12",children:[Object(c.jsx)("div",{style:{width:"50%",margin:"2%"},children:Object(c.jsxs)(m.a,{size:"sm",className:"mb-2",children:[Object(c.jsx)(O.a,{value:u,onChange:function(e){g(e.target.value)},style:{marginLeft:"2%"},"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}),Object(c.jsx)(d.a,{variant:"warning",onClick:function(e){i([].concat(Object(l.a)(s),[{id:parseInt(1e3*Math.random()),name:u}])),s.length<1&&p(u),g("")},style:{marginLeft:"2%"},children:"Add Bucket"})]})}),Object(c.jsx)("div",{style:{width:"50%",margin:"2%"},children:Object(c.jsxs)(m.a,{size:"sm",className:"mb-2",children:[Object(c.jsxs)(O.a,{as:"select",onChange:function(e){console.log("changed"),p(e.target.value)},custom:!0,children:[Object(c.jsx)("option",{disabled:!0,children:"---Select Bucket---"}),s.map((function(e){return Object(c.jsx)("option",{id:e.id,children:e.name},e.id)}))]}),Object(c.jsx)(O.a,{value:w,onChange:function(e){F(e.target.value)},style:{marginLeft:"2%"},"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}),Object(c.jsx)(d.a,{variant:"warning",onClick:function(e){y([].concat(Object(l.a)(k),[{id:parseInt(1e3*Math.random()),name:w,bucket:x,status:0}])),L([].concat(Object(l.a)(C),[{id:parseInt(1e3*Math.random()),name:w,bucket:x,status:0}])),F("")},style:{marginLeft:"2%"},children:"Add To Do"})]})}),Object(c.jsx)(j,{filteredtodoName:C,setFilteredTodoName:L,todoName:k,setTodoName:y})]})},f=function(e){return Object(c.jsxs)("div",{className:"col-md-12",children:[Object(c.jsx)("h1",{children:"To-Do List"}),Object(c.jsx)(g,{})]})},h=n(9),x=Object(h.a)(),p=function(){return Object(c.jsx)(r.b,{history:x,children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container mt-3",children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(c.jsx)(r.a,{exact:!0,path:"/List",component:j})]})})})})},v=function(){return Object(c.jsx)(p,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.149338ae.chunk.js.map