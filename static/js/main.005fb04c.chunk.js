(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),o=c(7),a=c.n(o),i=(c(13),c(6)),u=c(3),r=(c(14),c(8)),d=c(0),l=function(t){var e=t.setinputText,c=t.todos,n=t.setTodos,s=t.inputText,o=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:s,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(r.a)(c),[{text:s,id:Math.floor(100*Math.random())}])),e("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){o(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All Values"}),Object(d.jsx)("option",{value:"count",children:" Count"}),Object(d.jsx)("option",{value:"repeated",children:"Repeated Values"})]})})]})},j=function(t){var e=t.text,c=t.setTodos,n=t.todos,s=t.todo,o=t.count,a=t.times,i=t.bra,u=t.cket;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsxs)("li",{className:"todo-item",children:[e,"    ",i,o,a,u]}),Object(d.jsx)("button",{onClick:function(){c(n.filter((function(t){return t.id!==s.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash "})})]})},b=function(t){var e=t.todos,c=t.setTodos,n=t.duplicate;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(d.jsx)(j,{todo:t,text:t.text,setTodos:c,todos:e,count:t.count,bra:t.bra,cket:t.cket,times:t.times},t.id)}))})})};var x=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),c=e[0],s=e[1],o=Object(n.useState)([]),a=Object(u.a)(o,2),r=a[0],j=a[1],x=Object(n.useState)("all"),O=Object(u.a)(x,2),f=O[0],h=O[1],p=Object(n.useState)([]),m=Object(u.a)(p,2),v=m[0],N=m[1];Object(n.useEffect)((function(){T()}),[r,f]);var T=function(){switch(f){case"repeated":N(r.filter((function(t,e){return r.map((function(t){return t.text})).indexOf(t.text)!=e})));break;case"count":N(Object.values(r.reduce((function(t,e){var c="".concat(e.text);return t[c]?t[c].count+=1:t[c]=Object(i.a)(Object(i.a)({},e),{},{bra:"(",count:1,times:"x",cket:")"}),t}),{})));break;default:N(r)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:"Program Run"}),Object(d.jsx)(l,{todos:r,setTodos:j,inputText:c,setinputText:s,setStatus:h}),Object(d.jsx)(b,{setTodos:j,todos:r,duplicate:v})]})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),o(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.005fb04c.chunk.js.map