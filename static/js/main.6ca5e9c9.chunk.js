(this["webpackJsonpimage-uploader"]=this["webpackJsonpimage-uploader"]||[]).push([[0],{13:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(9),i=c.n(s),r=c(6),o=c(2),d=c(3),l=(c(26),c.p+"static/media/image.3710b8a3.svg"),j=(c(13),c(1)),u=function(e){var t=e.isError;return Object(j.jsxs)("div",{className:"modalProgres",children:[Object(j.jsx)("h2",{children:t?"Error While Uploading":"Uploading ..."}),Object(j.jsx)("div",{className:"loader-bar",children:Object(j.jsx)("div",{className:t?"loader-red":"loader-blue"})})]})},b="https://backendimageuploader.herokuapp.com",h=c(10),O=c.n(h),m=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(!1),u=Object(d.a)(j,2),h=u[0],m=u[1],p=Object(o.f)();return{send:function(e,t){e.preventDefault(),l(!0);var c=new FormData;c.append("file",t),O.a.post("".concat(b,"/user/photo"),c,{mode:"no-cors"}).then((function(e){console.log(e),l(!1),201===e.status&&p("/user/photo/upload/".concat(e.data.data._id))})).catch((function(e){m(!0),console.log(e),setTimeout((function(){l(!1),m(!1)}),4e3)}))},drop_handler:function(e){var t=e.dataTransfer.files[0];e.preventDefault(),a(t)},file:c,dragover_handler:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},setFile:a,error:h,show:r}};function p(e){var t=e.children;return i.a.createPortal(Object(j.jsx)("div",{className:"modalBackground",children:t}),document.getElementById("modal"))}var f=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),r=i[0],o=i[1],b=m(),h=b.drop_handler,O=b.file,f=b.show,g=b.setFile,x=b.error,A=b.send,v=b.dragover_handler;return Object(n.useEffect)((function(){a(O?URL.createObjectURL(O):void 0)}),[O]),Object(j.jsxs)("div",{id:"mainContainer",children:[Object(j.jsxs)("div",{className:"imageContainer",children:[Object(j.jsx)("h1",{children:"Upload your image"}),Object(j.jsx)("h3",{children:"File should be Jpeg, Png..."}),Object(j.jsxs)("form",{action:"",method:"POST",children:[Object(j.jsx)("div",{id:"test",onDrop:function(e){!r&&h(e)},name:"file",onDragOver:function(e){return v(e)},className:"uploadImage",style:c?{backgroundImage:"url(".concat(c,")")}:null,children:c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"material-icons material-icons-outlined",id:"image-closer",onClick:function(){!r&&a()},children:"close"}),Object(j.jsx)("div",{className:"preview_container",children:Object(j.jsx)("img",{src:c,alt:"user_image"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:l,alt:"",className:"background_dragdrop"}),Object(j.jsx)("h2",{children:"Drag & Drop your image here "})]})}),Object(j.jsx)("h3",{children:"Or"}),Object(j.jsx)("label",{htmlFor:"file",className:"file-upload",children:c?"Upload":"Choose file"}),c?Object(j.jsx)("input",{id:"file",name:"file",type:"submit",disabled:r,onClick:function(e){o(!0),A(e,O)}}):Object(j.jsx)("input",{id:"file",type:"file",name:"file",onChange:function(){var e=document.getElementById("file").files[0];g(e)}})]})]}),f&&Object(j.jsx)(p,{children:Object(j.jsx)(u,{isError:x})})]})},g=(c(46),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(!0),s=Object(d.a)(a,2),i=s[0],r=s[1],l=Object(n.useState)(!1),u=Object(d.a)(l,2),h=u[0],m=u[1],p=Object(o.g)().id;Object(n.useEffect)((function(){console.log("iniciando fetch"),r(!0),O.a.get("".concat(b,"/user/photo/upload/").concat(p)).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[p]),setTimeout((function(){r(!1)}),1e3);return i?Object(j.jsx)("div",{className:"loading",children:"loading"}):Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"photoUploadedContainer",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(j.jsx)("h2",{children:"Uploaded Successfully!"}),Object(j.jsx)("div",{className:"uploadContainer",children:Object(j.jsx)("img",{src:"".concat(b,"/user/photo/image/").concat(p),alt:""})}),Object(j.jsx)("div",{className:"copyLinkContainer",children:Object(j.jsxs)("div",{className:"textContainer",children:[Object(j.jsx)("input",{defaultValue:"".concat(b,"/user/photo/image/").concat(p)}),h&&Object(j.jsx)("div",{className:"Tooltip",children:Object(j.jsx)("span",{children:"!Copied"})}),Object(j.jsx)("button",{className:"copyLinkButton",onClick:function(){m(!0),navigator.clipboard.writeText("".concat(b,"/user/photo/image/").concat(p)),setTimeout((function(){m(!1)}),4e3)},children:"Copy Link"})]})})]})})}),x=function(){return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(f,{})}),Object(j.jsx)(o.a,{path:"/user/photo/upload/:id",element:Object(j.jsx)(g,{})})]})};var A=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(A,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6ca5e9c9.chunk.js.map