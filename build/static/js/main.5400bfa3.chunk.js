(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(21),t(2)),i=function(e){var n=e.name,t=e.number;return r.a.createElement("p",null,n," ",t)},l=t(3),s=t.n(l),m="/api/persons",d=function(){return s.a.get(m).then(function(e){return e.data})},f=function(e){return s.a.post(m,e).then(function(e){return e.data})},b=function(e){return s.a.put("".concat(m,"/").concat(e.id),e).then(function(e){return e.data})},v=function(e){return s.a.delete("".concat(m,"/").concat(e)).then(function(e){return e.data})},h=function(e){var n=e.persons,t=e.setPersons,a=e.filter,c=e.createMessage;return r.a.createElement("div",null,n.filter(function(e){return e.name.toLowerCase().includes(a)}).map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(i,{key:e.id,name:e.name,number:e.number}),r.a.createElement("button",{onClick:function(){return function(e){window.confirm("Delete "+e.name)&&v(e.id).then(function(){t(n.filter(function(n){return n.id!==e.id})),c("Deleted ".concat(e.name),"red")}).catch(function(){c("Information of ".concat(e.name," has already been removed from server"),"darkRed")})}(e)}},"delete"))}))},p=t(14),E=function(e){var n=e.persons,t=e.setPersons,c=e.createMessage,o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),v=d[0],h=d[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0!==n.filter(function(e){return e.name===l}).length?window.confirm(l+" is already added to phonebook, replace old number with a new one?")&&function(){var e=n.find(function(e){return e.name===l}),a=Object(p.a)({},e,{number:v});b(a).then(function(r){t(n.map(function(e){return e.id!==a.id?e:r})),c("Updated ".concat(e.name),"blue")}).catch(function(){c("Information of ".concat(e.name," has already been removed from server"),"darkRed")})}():f({name:l,number:v}).then(function(e){t(n.concat(e)),c("Added ".concat(e.name),"green")}).catch(function(e){c(JSON.stringify(e.response.data),"darkRed")}),s(""),h("")}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:l,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:v,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.newFilter,t=e.setNewFilter;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}}))},w=function(e){var n=e.message,t=e.color;if(null===n)return null;var a={color:t,backgroundColor:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10,fontStyle:"italic"};return r.a.createElement("div",{style:a},n)},O=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)(null),f=Object(u.a)(m,2),b=f[0],v=f[1],p=Object(a.useState)(null),O=Object(u.a)(p,2),j=O[0],y=O[1];Object(a.useEffect)(function(){d().then(function(e){c(e)})},[]);var k=function(e,n){v(e),y(n),setTimeout(function(){v(null),y(null)},5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(w,{message:b,color:j}),r.a.createElement(g,{newFilter:l,setNewFilter:s}),r.a.createElement("h2",null,"add new"),r.a.createElement(E,{persons:t,setPersons:c,createMessage:k}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{persons:t,setPersons:c,filter:l,createMessage:k}))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5400bfa3.chunk.js.map