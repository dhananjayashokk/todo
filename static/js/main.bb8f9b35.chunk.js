(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(t,e,n){},35:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(2),i=(n(0),n(14)),s=n.n(i),a=(n(33),n(34),n(35),n(11)),r=n(51),o=n(49),d=function(t){var e=t.filteredtodoName,n=t.setFilteredTodoName,i=t.todoName,s=t.setTodoName,d=function(t){var c=e.map((function(e){return e.id==t.target.id&&(e.status=!e.status),e}));n(c)},j=function(t){var e=Object(a.a)(i).filter((function(e){return e.id!=t.target.id}));s(e)};return Object(c.jsx)("div",{style:{marginTop:"6%"},children:e.map((function(t){return Object(c.jsxs)("div",{style:{display:"flex",marginTop:"2%"},children:[Object(c.jsx)(r.a,{style:{width:"50%"},variant:1==t.status?"success":"danger",children:t.name},"1"),Object(c.jsx)(o.a,{id:t.id,variant:1==t.status?"danger":"success",onClick:d,style:{marginLeft:"2%"},children:1==t.status?"Incomplete":"Complete"}),Object(c.jsx)(o.a,{variant:"danger",id:t.id,onClick:j,style:{marginLeft:"2%"},children:"Delete"})]})}))})},j=(n(13),n(50),n(52),function(t){return Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("h1",{children:"To-Do List"})})}),l=n(4),u=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(c.jsx)(l.b,{exact:!0,path:"/List",component:d}),Object(c.jsx)(l.a,{to:"/"})]})})},m=n(21);s.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(m.a,{children:Object(c.jsx)(u,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.bb8f9b35.chunk.js.map