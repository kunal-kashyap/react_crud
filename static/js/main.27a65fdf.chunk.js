(this.webpackJsonpreact_authorization=this.webpackJsonpreact_authorization||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),o=(t(14),t(3)),i=t(4),u=t(5),s=t(7),m=t(6),h=t(8),d=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("input",{type:e.type,name:e.name,value:e.value,onChange:function(a){return function(a){e.changeHandler(a.target.name,a.target.value)}(a)}}))},p=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:e.type,onClick:e.clickHandler},e.value))},f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={userName:null,password:null},t.clickHandler=function(){alert("clicked")},t.changeHandler=function(e,a){t.setState(Object(o.a)({},e,a))},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.userName,t=e.password;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form"},r.a.createElement("h3",null,"Login Form"),r.a.createElement("div",{className:"form-block"},r.a.createElement(d,{type:"text",name:"userName",value:a,label:"Username",changeHandler:this.changeHandler}),r.a.createElement(d,{type:"password",name:"password",value:t,label:"Password",changeHandler:this.changeHandler}),r.a.createElement(p,{type:"button",clickHandler:this.clickHandler,value:"Login"}))))}}]),a}(n.Component);t(15);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"Auth"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.27a65fdf.chunk.js.map