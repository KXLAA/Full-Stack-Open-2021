(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(20),a=t.n(c),u=t(9),o=t(21),i=t(5),s=t(3),b=t(0),l=function(e){var n=e.numbers,t=e.setFoundNumbers,c=Object(r.useState)(""),a=Object(s.a)(c,2),u=a[0],o=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Filter shown with: "}),Object(b.jsx)("input",{type:"search",value:u,onChange:function(e){var r=e.target.value;if(""!==r){var c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));t(c)}else t(n);o(r.trim())},placeholder:"Filter"})]})},m=t(6),j=t.n(m),d="/api/persons",h=function(){return j.a.get(d).then((function(e){return e.data}))},f=function(e){return j.a.post(d,e).then((function(e){return e.data}))},O=function(e){return j.a.delete("".concat(d,"/").concat(e))},x=function(e,n){return j.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.foundNumbers,t=e.deleteNumbers;return Object(b.jsx)(b.Fragment,{children:n.map((function(e){return Object(b.jsxs)("p",{children:[e.name," ",e.number," ",Object(b.jsxs)("button",{onClick:function(){return t(e.id,e.name)},children:[" ","DELETE"," "]})]},e.id)}))})},v=function(e){var n=e.newNumber,t=e.handleChange,r=e.addNumbers;return console.log(n),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Full Name:"}),"  ",Object(b.jsx)("input",{required:!0,name:"name",type:"text",value:n.name,onChange:t}),"  ",Object(b.jsx)("label",{htmlFor:"number",children:"Phone Number:"})," ","  ",Object(b.jsx)("input",{name:"number",type:"text",value:n.number,onChange:t}),Object(b.jsx)("button",{onClick:r,type:"submit",children:"ADD NUMBER"})]})})},g=function(e){var n=e.name;return null===n?null:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"success",children:n})})},w=function(e){return null===e.error?null:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"error"})})},N=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),m=Object(s.a)(a,2),j=m[0],d=m[1],N=Object(r.useState)({name:"",number:""}),F=Object(s.a)(N,2),S=F[0],y=F[1],C=Object(r.useState)(null),k=Object(s.a)(C,2),D=k[0],E=k[1],A=Object(r.useState)(null),I=Object(s.a)(A,2),T=I[0],B=I[1];Object(r.useEffect)((function(){h().then((function(e){c(e),d(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{error:T}),Object(b.jsx)(g,{name:D}),Object(b.jsx)("h2",{children:"Phone-Book"}),Object(b.jsx)(l,{numbers:t,setFoundNumbers:d}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(p,{foundNumbers:j,deleteNumbers:function(e,n){window.confirm(" Are you sure you want to delete ".concat(n," ? "))&&(O(e),d(j.filter((function(n){return n.id!==e}))))}}),Object(b.jsx)("h2",{children:"Add New Number"}),Object(b.jsx)(v,{newNumber:S,handleChange:function(e){var n=e.target,t=n.name,r=n.value;y((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},t,r))}))},addNumbers:function(e){e.preventDefault();var n={name:S.name,number:S.number,date:(new Date).toISOString()},r=t.find((function(e){return e.name===n.name}));if(r){window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one ?"));var a=Object(i.a)(Object(i.a)({},r),{},{name:n.name,number:n.number,date:(new Date).toISOString()});x(r.id,a).then((function(e){c(t.map((function(n){return n.id!==e.name?n:e}))),E("Updated: ".concat(e.name)),setTimeout((function(){E(null)}),5e3)})).catch((function(e){console.log(e),B("Information on".concat(a.name," has already been removed from server")),setTimeout((function(){B(null)}),5e3)}))}else f(n).then((function(e){d([].concat(Object(o.a)(j),[e])),E("Added: ".concat(n.name)),setTimeout((function(){E(null)}),5e3)}));y({name:" ",number:" "})}})]})};t(45);a.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d0b4d178.chunk.js.map