(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(4),o=a.n(r),c=(a(23),a(2)),i=a(16),u=a.n(i),m=a(1),s=a(17),d=(a(34),function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(l.useState)(""),i=Object(c.a)(o,2),d=i[0],p=i[1],E=Object(l.useState)(""),b=Object(c.a)(E,2),v=b[0],h=b[1],y=Object(l.useState)(""),O=Object(c.a)(y,2),g=O[0],k=O[1],C=Object(l.useState)(""),f=Object(c.a)(C,2),w=f[0],B=f[1];return n.a.createElement("div",{className:"App"},n.a.createElement(m.Columns,{isCentered:!0},n.a.createElement(m.Column,{isSize:"2/3",style:{marginTop:"10px"}},n.a.createElement(m.Box,null,n.a.createElement(m.Title,null,"Array Converter"),n.a.createElement(m.Field,null,n.a.createElement(m.Label,null,"Elements (separated by comma)"),n.a.createElement(m.Control,null,n.a.createElement(m.Input,{type:"text",placeholder:"Eg: Bread Butter, Orange Milk",value:a,onChange:function(e){return r(e.target.value)}}))),n.a.createElement(m.Field,{isGrouped:!0},n.a.createElement(m.Button,{isColor:"primary",isFullWidth:!0,onClick:function(){var e=a.split(","),t=[],l=[],n=[],r=[],o=!0,c=!1,i=void 0;try{for(var m,s=e[Symbol.iterator]();!(o=(m=s.next()).done);o=!0){var d=m.value,E=u()(d,"_").toLowerCase().trim(),b=d.trim(),v={key:E,value:b};l.push("<option value='".concat(E,"'>").concat(b,"</option>")),t.push(v),n.push(E),r.push('"'.concat(E,'" => "').concat(b,'"'))}}catch(y){c=!0,i=y}finally{try{o||null==s.return||s.return()}finally{if(c)throw i}}p(JSON.stringify(t)),h('<select name="">'.concat(l.join(""),"<select>")),k(JSON.stringify(n)),B("{ ".concat(r.join(", ")," }"))}},"Convert")),n.a.createElement(m.Field,{isGrouped:!0},n.a.createElement(m.Button,{isColor:"warning",isFullWidth:!0,onClick:function(){r(""),p(""),h(""),k(""),B("")}},"Reset")),n.a.createElement(m.Field,null,n.a.createElement(m.Label,null,"Keys"),n.a.createElement(m.Control,null,n.a.createElement(m.Input,{type:"text",placeholder:'["bread_butter","orange_milk"]',value:g}))),n.a.createElement(m.Field,null,n.a.createElement(m.Label,null,"Object"),n.a.createElement(m.Control,null,n.a.createElement(m.TextArea,{placeholder:'[{"key":"bread_butter","value":"Bread Butter"},{"key":"orange_milk","value":"Orange Milk"}]',value:d,readOnly:!0}))),n.a.createElement(m.Field,null,n.a.createElement(m.Label,null,"Selectbox"),n.a.createElement(m.Control,null,n.a.createElement(m.TextArea,{placeholder:"<select name=\"\"><option value='bread_butter'>Bread Butter</option><option value='orange_milk'>Orange Milk</option><select>",value:v,readOnly:!0}))),n.a.createElement(m.Field,null,n.a.createElement(m.Label,null,"Hash"),n.a.createElement(m.Control,null,n.a.createElement(m.TextArea,{placeholder:'{ "bread_butter" => "Bread Butter", "orange_milk" => "Orange Milk" }',value:w,readOnly:!0})))),n.a.createElement(m.Button,{isColor:"success",isOutlined:!0,onClick:s.animateScroll.scrollToTop},n.a.createElement(m.Icon,{className:"fas fa-arrow-up"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.4b7e39a6.chunk.js.map