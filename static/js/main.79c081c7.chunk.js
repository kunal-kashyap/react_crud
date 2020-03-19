(this.webpackJsonpreact_crud=this.webpackJsonpreact_crud||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(27),o=a.n(n),l=a(30),u=a(21),d=(a(69),a(10)),i=(a(70),a(29)),s=a(14),p=a(15),m=a(17),h=a(16),f=a(18),v=a(56),E=a.n(v).a.create({baseURL:"http://localhost:4000"}),b=a(7),g=a(5),P=a.n(g),O=a(57),y=a.n(O),N="SHOW_PRODUCTS",j=function(e){return function(t){t({type:N,data:e})}},H=function(e){return c.a.createElement("div",{className:"col-md-3 product card"},c.a.createElement("h4",null,e.details.id),c.a.createElement("p",null,e.details.name),c.a.createElement("div",null,"$",e.details.price),c.a.createElement("div",{className:"form-group"},c.a.createElement("span",{className:"btn btn-small btn-primary",onClick:function(){return e.editProductHandler(e.details.id)}},"Edit"),c.a.createElement("span",{className:"btn btn-small btn-danger",onClick:function(){return e.deleteProductHandler(e.details.id)}},"Delete")))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={productsList:[]},a.loadhandler=function(){var e=a.props.fetchProducts;E.get("/products").then((function(t){200===t.status&&e(P()(t,"data",[]))})).catch((function(e){return console.log("Error Occurred",e)}))},a.editProductHandler=function(e){var t=a.props.productsList.find((function(t){return t.id===e}));a.props.history.push("/edit-product",{productDetail:t})},a.deleteProductHandler=function(e){E.delete("/products/".concat(e)).then((function(e){200===e.status&&(alert("Product deleted succesfully!"),a.props.history.push("/"))})).catch((function(e){return console.log("Error Occurred",e)}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadhandler()}},{key:"render",value:function(){var e=this,t=this.props.productsList,a=!y()(t)&&t.map((function(t){return c.a.createElement(H,{key:t.id,details:t,editProductHandler:e.editProductHandler,deleteProductHandler:e.deleteProductHandler})}));return c.a.createElement("div",{className:"products-list"},c.a.createElement("div",{className:"container"},a))}}]),t}(r.Component),w=Object(l.b)((function(e){return{productsList:P()(e,"ProductsReducer.productsList")}}),(function(e){return Object(i.a)({},Object(b.b)({fetchProducts:j},e))}))(k),_=a(13),D=function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,e.label," : "),c.a.createElement("input",{type:e.type,name:e.name,value:e.value,onChange:function(t){return function(t){e.changeHandler(t.target.name,t.target.value)}(t)}}))},I=function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{type:e.type,onClick:e.clickHandler},e.value))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={productName:void 0,productPrice:void 0,productId:void 0},a.saveForm=function(){var e=a.state,t=e.productName,r=e.productPrice,c=e.productId,n={name:t,price:r};E.patch("/products/".concat(c),n).then((function(e){200===e.status&&(alert("Update succesfull!"),a.props.history.push("/"))})).catch((function(e){return console.log("Error Occurred",e)}))},a.changeHandler=function(e,t){a.setState(Object(_.a)({},e,t))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.productName,a=e.productPrice;return c.a.createElement("form",{className:"form"},c.a.createElement("h3",null,"Edit Product"),c.a.createElement("div",{className:"form-block"},c.a.createElement(D,{type:"text",name:"productName",value:t,label:"Product Name",changeHandler:this.changeHandler}),c.a.createElement(D,{type:"text",name:"productPrice",value:a,label:"Product Price",changeHandler:this.changeHandler}),c.a.createElement(I,{type:"button",clickHandler:this.saveForm,value:"Save Product"})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{productName:P()(t,"productName",P()(e,"location.state.productDetail.name")),productPrice:P()(t,"productPrice",P()(e,"location.state.productDetail.price")),productId:P()(t,"productId",P()(e,"location.state.productDetail.id"))}}}]),t}(r.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={productName:null,productPrice:null,productId:null},a.saveForm=function(){var e=a.state,t={name:e.productName,price:e.productPrice,id:e.productId};E.post("/products",t).then((function(e){201===e.status&&(alert("Product Added Succesfully!"),a.props.history.push("/"))})).catch((function(e){return console.log("Error Occurred",e)}))},a.changeHandler=function(e,t){a.setState(Object(_.a)({},e,t))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.productName,a=e.productPrice,r=e.productId;return c.a.createElement("form",{className:"form"},c.a.createElement("h3",null,"Add Product"),c.a.createElement("div",{className:"form-block"},c.a.createElement(D,{type:"text",name:"productName",value:t,label:"Product Name",changeHandler:this.changeHandler}),c.a.createElement(D,{type:"text",name:"productPrice",value:a,label:"Product Price",changeHandler:this.changeHandler}),c.a.createElement(D,{type:"text",name:"productId",value:r,label:"Product Id",changeHandler:this.changeHandler}),c.a.createElement(I,{type:"button",clickHandler:this.saveForm,value:"Add Product"})))}}]),t}(r.Component),L=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("nav",{className:"navbar navbar-default"},c.a.createElement("ul",{className:"list-group"},c.a.createElement(u.b,{className:"list-group-item",to:"/show-product"},"Show Products"),c.a.createElement(u.b,{className:"list-group-item",to:"/add-product"},"Add Product"))),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/show-product",exact:!0,component:w}),c.a.createElement(d.a,{path:"/edit-product",exact:!0,component:S}),c.a.createElement(d.a,{path:"/add-product",exact:!0,component:x})))};a(142);var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(143);var C=a(59);var R=Object(b.c)({ProductsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"kunal"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(i.a)({},e,{productsList:P()(t,"data",[])});default:return e}}}),F=Object(b.e)(R,Object(b.d)(Object(b.a)(C.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(c.a.createElement(l.a,{store:F},c.a.createElement(u.a,null,c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(144)},69:function(e,t,a){},70:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.79c081c7.chunk.js.map