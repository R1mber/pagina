(this["webpackJsonppagina-preguntados"]=this["webpackJsonppagina-preguntados"]||[]).push([[0],{40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a.n(r),c=a(32),s=a.n(c),o=(a(40),a(12)),l=a(7),i=a(1),b=a.n(i),u=a(5),j=a(13),d=a(33),O=Object(d.a)({apiKey:"AIzaSyDIP_rxGJz-bWbM7nYtOau6n_SS5HZBY2k",authDomain:"preguntados-40873.firebaseapp.com",projectId:"preguntados-40873",storageBucket:"preguntados-40873.appspot.com",messagingSenderId:"699473849342",appId:"1:699473849342:web:f5fdb910e6b4457c67eeaf",measurementId:"G-ZS8KWC7DG0"}),m=Object(j.f)(O),p=a(8);function f(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(!1),O=Object(l.a)(d,2),f=O[0],h=O[1],x=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,Object(j.e)(Object(j.g)(Object(j.b)(m,"Materias")));case 4:e.sent.forEach((function(e){t.push(e.data())})),n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error al obtener materias",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!0),console.log(o),""!==o&&void 0!==o){e.next=6;break}return console.log("debe escribir El nombre de la materia"),e.abrupt("return");case 6:return t=(t=o).replace(/\s/g,""),a={id:t,nombre:o,cantidadPreguntas:0},i(""),e.next=12,Object(j.a)(Object(j.b)(m,"Materias"),a);case 12:console.log("registro exitoso"),h(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("h1",{children:"agregar Materia"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g()},children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"nombre",className:"form-label",children:"Nombre Materia"}),Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)},className:"form-control",id:"nombre"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:f,children:"Submit"})]}),a&&a.map((function(e){return Object(p.jsx)("p",{children:e.nombre},e.id)}))]})}a(35);function h(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(""),O=Object(l.a)(d,2),f=(O[0],O[1]),h=Object(r.useState)([]),x=Object(l.a)(h,2),g=x[0],v=x[1],S=Object(r.useState)([]),N=Object(l.a)(S,2),y=(N[0],N[1],Object(r.useState)("")),k=Object(l.a)(y,2),C=k[0],w=k[1],M=Object(r.useState)([]),F=Object(l.a)(M,2),E=(F[0],F[1],Object(r.useState)("")),A=Object(l.a)(E,2),P=A[0],I=A[1],D=Object(r.useState)([]),L=Object(l.a)(D,2),z=(L[0],L[1],Object(r.useState)("")),G=Object(l.a)(z,2),T=G[0],B=G[1],J=Object(r.useState)([]),V=Object(l.a)(J,2),q=(V[0],V[1],Object(r.useState)("")),H=Object(l.a)(q,2),K=H[0],R=H[1],W=Object(r.useState)([]),Y=Object(l.a)(W,2),Z=(Y[0],Y[1],Object(r.useState)("")),_=Object(l.a)(Z,2),X=_[0],Q=_[1],U=Object(r.useState)(""),$=Object(l.a)(U,2),ee=($[0],$[1],Object(r.useState)("")),te=Object(l.a)(ee,2),ae=te[0],re=te[1],ne=Object(r.useState)("hola como estas mathViewMTHx=\\frac{-b\\pm\\sqrt{b^2-\\frac{4/a}{2321}}}{2ab}23mathView bien"),ce=Object(l.a)(ne,2),se=(ce[0],ce[1],Object(r.useState)([])),oe=Object(l.a)(se,2),le=(oe[0],oe[1],Object(r.useRef)(null),function(e,t){if("cls"!==t)switch(t){case"op1":I(e.target.value);break;case"op2":B(e.target.value);break;case"op3":R(e.target.value);break;case"opC":Q(e.target.value);break;default:console.log("no existe opcion")}else I(""),B(""),R(""),Q(""),w("")}),ie=function(){var e=Object(u.a)(b.a.mark((function e(){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),t=0,a="",e.next=6,Object(j.e)(Object(j.g)(Object(j.b)(m,"Materias"),Object(j.i)("id","==",ae)));case 6:return e.sent.forEach((function(e){t=e.data().cantidadPreguntas,a=e.id})),r={id:t+1,pregunta:C,opcionCorrecta:X,opciones:[P,T,K,X],materia:ae},e.next=11,Object(j.h)(Object(j.c)(m,"Materias",a),{cantidadPreguntas:t+1});case 11:return console.log("data updated"),e.next=14,Object(j.a)(Object(j.b)(m,ae),r);case 14:le("cls","cls"),n(!1),alert("Se guardaron los datos correctamente"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0),alert("Ocurrio un error al guardar los datos");case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,Object(j.e)(Object(j.g)(Object(j.b)(m,"Materias")));case 4:e.sent.forEach((function(e){t.push(e.data())})),v(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error al obtener materias",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ue=function(e){e.preventDefault(),console.log(C),console.log(P),console.log(T),console.log(K),console.log(X),console.log(ae),0!==ae&&"0"!==ae&&""!==ae?""!==C&&null!==C&&void 0!==C?""!==P&&null!==P&&void 0!==P?""!==T&&null!==T&&void 0!==T?""!==K&&null!==K&&void 0!==K?""!==X&&null!==X&&void 0!==X?ie():alert("debe ingresar la opcion correcta"):alert("debe ingresar la opcion 3"):alert("debe ingresar la opcion 2"):alert("debe ingresar la opcion 1"):alert("debe ingresar una pregunta"):alert("debe seleccionar una materia")};return Object(r.useEffect)((function(){be()}),[]),Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:"Agregar Pregunta"})," "]}),Object(p.jsxs)("form",{onSubmit:ue,children:[Object(p.jsxs)("div",{className:"form-floating",children:[Object(p.jsxs)("select",{className:"form-select",onChange:function(e){return re(e.target.value)},id:"floatingSelect","aria-label":"Floating label select example",children:[Object(p.jsx)("option",{value:"0",children:"seleccione una materia"}),g.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.nombre},e.id)}))]}),Object(p.jsx)("label",{htmlFor:"floatingSelect",children:"Seleccione una materia"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"form-floating",children:[Object(p.jsx)("textarea",{value:C,onChange:function(e){w(e.target.value),i(e.target.value),f(e.target.value)},className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:100}}),Object(p.jsx)("label",{htmlFor:"floatingTextarea2",children:"Pregunta"})]}),Object(p.jsxs)("div",{className:"mb-0",children:[Object(p.jsx)("label",{htmlFor:"opcion1",className:"form-label",children:"Opcion 1"}),Object(p.jsx)("input",{type:"text",value:P,onChange:function(e){return le(e,"op1")},className:"form-control",id:"opcion1"})]}),Object(p.jsxs)("div",{className:"mb-0",children:[Object(p.jsx)("label",{htmlFor:"opcion2",className:"form-label",children:"Opcion 2"}),Object(p.jsx)("input",{type:"text",value:T,onChange:function(e){return le(e,"op2")},className:"form-control",id:"opcion2"})]}),Object(p.jsxs)("div",{className:"mb-0",children:[Object(p.jsx)("label",{htmlFor:"opcion3",className:"form-label",children:"Opcion 3"}),Object(p.jsx)("input",{type:"text",value:K,onChange:function(e){return le(e,"op3")},className:"form-control",id:"opcion3"})]}),Object(p.jsxs)("div",{className:"mb-0",children:[Object(p.jsx)("label",{htmlFor:"opciontrue",className:"form-label",children:"Opcion Correcta"}),Object(p.jsx)("input",{type:"text",value:X,onChange:function(e){return le(e,"opC")},className:"form-control",id:"opciontrue"})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",disabled:a,children:"Guardar pregunta"}),Object(p.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Verifique sus datos"}),Object(p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(p.jsxs)("div",{className:"modal-body",children:[Object(p.jsxs)("div",{class:"alert alert-success",role:"alert",children:["Materia: ",ae]}),Object(p.jsxs)("div",{class:"alert alert-primary",role:"alert",children:["Pregunta: ",o]}),Object(p.jsxs)("div",{class:"alert alert-success",role:"alert",children:["Opcion 1 : ",P]}),Object(p.jsxs)("div",{class:"alert alert-success",role:"alert",children:["Opcion 2 : ",T]}),Object(p.jsxs)("div",{class:"alert alert-success",role:"alert",children:["Opcion 3 : ",K]}),Object(p.jsxs)("div",{class:"alert alert-info",role:"alert",children:["Opcion Correcta : ",X]})]}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:ue,"data-bs-dismiss":"modal",children:"Guardar Pregunta"})]})]})})})]})}function x(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),s=Object(l.a)(c,2),o=s[0],i=(s[1],function(){var e=Object(u.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(a),""===a&&null===a&&void 0===a){e.next=7;break}return r={id:2,nombre:a},e.next=6,Object(j.a)(Object(j.b)(m,"Areas"),r);case 6:alert("Se agrego correctamente");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(r.useEffect)((function(){console.log(a)}),[a]),Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("h1",{children:"agregar Area"}),Object(p.jsxs)("form",{onSubmit:i,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"nombre",className:"form-label",children:"Nombre de Area"}),Object(p.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"form-control",id:"nombre"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),o&&o.map((function(e){return Object(p.jsx)("p",{children:e.nombre},e.id)}))]})}var g=a(6),v=a(4);function S(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(l.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)([]),O=Object(l.a)(d,2),f=O[0],h=O[1],x=Object(r.useState)([]),S=Object(l.a)(x,2),N=S[0],y=S[1],k=Object(r.useState)(""),C=Object(l.a)(k,2),w=C[0],M=C[1],F=Object(r.useState)(!1),E=Object(l.a)(F,2),A=E[0],P=E[1],I=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,Object(j.e)(Object(j.g)(Object(j.b)(m,"Areas")));case 4:e.sent.forEach((function(e){t.push(Object(v.a)({idArea:e.id},e.data()))})),n(t),console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error al obtener Areas:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,Object(j.e)(Object(j.g)(Object(j.b)(m,"Materias")));case 4:e.sent.forEach((function(e){t.push(Object(v.a)({idMateria:e.id},e.data()))})),h(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error al obtener Materias:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,r,n,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==o&&void 0!==o&&0!==o&&"0"!==o){e.next=4;break}return alert("Seleccione un area"),e.abrupt("return");case 4:if(""!==w&&void 0!==w){e.next=7;break}return alert("Ingrese el nombre de la carrera correctamente"),e.abrupt("return");case 7:if(0!==N.length){e.next=10;break}return alert("Seleccione y verifica las materias de la carrera"),e.abrupt("return");case 10:return P(!0),e.next=13,Object(j.e)(Object(j.g)(Object(j.b)(m,"Carreras")));case 13:return a=e.sent,r={id:a.size+1,area:o,nombre:w,materias:N},e.next=17,Object(j.a)(Object(j.b)(m,"Carreras"),r);case 17:return n=e.sent,console.log(n.id),e.next=21,Object(j.d)(Object(j.c)(m,"Areas",o));case 21:if(!(c=e.sent).exists()){e.next=30;break}return console.log("area seleccionada",c.data().carreras),s=[].concat(Object(g.a)(c.data().carreras),[{idCarrera:n.id,nombre:w}]),e.next=27,Object(j.h)(Object(j.c)(m,"Areas",o),{carreras:s});case 27:console.log("data updated"),e.next=31;break;case 30:alert("Error al de conexion vuelve a intentarlo");case 31:console.log("registro exitoso"),i(""),y([]),M(""),P(!1);case 36:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){I(),D()}),[]),Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("h1",{children:"agregar nueva Carrera"}),Object(p.jsxs)("form",{onSubmit:L,children:[Object(p.jsxs)("select",{className:"form-select",onChange:function(e){return i(e.target.value)},children:[Object(p.jsx)("option",{value:"0",children:"seleccione un Area"}),a.map((function(e){return Object(p.jsx)("option",{value:e.idArea,children:e.nombre},e.idArea)}))]}),o,Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"nombre",className:"form-label",children:"Nombre Carrera"}),Object(p.jsx)("input",{type:"text",value:w,onChange:function(e){return M(e.target.value)},className:"form-control",id:"nombre"}),w]}),Object(p.jsx)("select",{className:"form-select",size:"4","aria-label":"size 3 select example",onChange:function(e){return function(e){var t=f[e];N.includes(t)?console.log("consola set materia"):(console.log(N),y([].concat(Object(g.a)(N),[t])))}(e.target.value)},children:f.map((function(e,t){return Object(p.jsx)("option",{value:t,children:e.nombre},e.id)}))}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:A,children:"Registrar Materia"})]}),Object(p.jsx)("h3",{children:"materias Seleccionadas:"}),N.map((function(e,t){return Object(p.jsxs)("p",{children:[e.nombre," ",Object(p.jsx)("button",{onClick:function(){return function(e){console.log(e,":index");var t=N.filter((function(t,a){return a!==e}));y(t)}(t)},children:"X"})]},e.id)}))]})}a(47);var N=function(){var e=Object(r.useState)({materias:!1,pregunta:!0,area:!1,carrera:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e){n({materias:!1,pregunta:!1,area:!1,carrera:!1}),n(Object(o.a)({},e,!0))};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:"LLenado de datos"}),Object(p.jsx)("button",{className:a.pregunta?"btn btn-primary":"btn btn-secondary",onClick:function(){return c("pregunta")},children:"Preguntas"}),Object(p.jsx)("button",{className:a.materias?"btn btn-primary":"btn btn-secondary",onClick:function(){return c("materias")},children:"Materias"}),Object(p.jsx)("button",{className:a.area?"btn btn-primary":"btn btn-secondary",onClick:function(){return c("area")},children:"Areas"}),Object(p.jsx)("button",{className:a.carrera?"btn btn-primary":"btn btn-secondary",onClick:function(){return c("carrera")},children:"Carreras"})]}),a.materias?Object(p.jsx)(f,{}):null,a.pregunta?Object(p.jsx)(h,{}):null,a.area?Object(p.jsx)(x,{}):null,a.carrera?Object(p.jsx)(S,{}):null]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.4ad80f94.chunk.js.map