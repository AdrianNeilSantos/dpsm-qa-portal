(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49],{14176:function(e,a,t){"use strict";t(85893),t(9008),t(41664),t(37940)},81318:function(e,a,t){"use strict";t(85893),t(41664)},8237:function(e,a,t){"use strict";var s=t(85893),r=t(65988),n=t(41664);a.Z=function(e){var a="";switch(e.role){case 1:a="Faculty";break;case 2:a="Unit Head";break;case 3:a="Department Chair";break;default:a="Admin Clerk"}return(0,s.jsxs)("div",{className:"jsx-3546386183 row",children:[(0,s.jsxs)("nav",{className:"jsx-3546386183 navbar navbar-expand-lg",children:[(0,s.jsx)("span",{className:"jsx-3546386183 navbar-text",children:(0,s.jsx)("a",{className:"jsx-3546386183 navbar-brand",children:(0,s.jsx)("img",{src:"/dpsm-seal.png",width:"186",height:"150",alt:"DPSM-QA-Portal",className:"jsx-3546386183 d-inline-block align-top"})})}),(0,s.jsx)("h2",{className:"jsx-3546386183",children:" DPSM QA PORTAL "}),(0,s.jsx)("div",{className:"jsx-3546386183 ml-auto",children:(0,s.jsxs)("h5",{className:"jsx-3546386183",children:[" Currently Logged In: ",(0,s.jsx)(n.default,{href:"/settings/change-password",children:(0,s.jsxs)("a",{className:"jsx-3546386183",children:[" ",e.name," (",a,") "]})})," "]})})]}),(0,s.jsx)(r.default,{id:"3546386183",children:[".navbar.jsx-3546386183{background-color:#910303;width:100%;}","h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}"]})]})}},97752:function(e,a,t){"use strict";var s=t(85893),r=t(9008),n=t(8237),i=t(37940);t(81318),t(14176),t(49704);a.Z=function(e){var a;return e.approvalList&&(a=e.approvalList),(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"DPSM-QA-PORTAL"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"}),(0,s.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),(0,s.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"}),(0,s.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"})]}),(0,s.jsx)(n.Z,{name:e.name,role:e.role}),(0,s.jsxs)("div",{className:"row",id:"layout_row",children:[(0,s.jsx)(i.Z,{role:e.role,approvalList:a,facultyId:e.facultyId,roleAssignment:e.roleAssignmentFlag}),(0,s.jsx)("div",{className:"col",id:"layout_content",children:e.children})]})]})}},37940:function(e,a,t){"use strict";var s=t(85893),r=t(64121),n=t(65988),i=t(41664),l=t(12102),c=t(67294),d=t(11163);a.Z=function(e){var a=(0,d.useRouter)(),t=(0,l.Z)(["user"]),o=(0,r.Z)(t,3),u=(o[0],o[1],o[2]),m=!0,h=!0;1!=e.role&&2!=e.role&&3!=e.role||(h=!1,2!=e.role&&3!=e.role||(m=!1));var p=(0,c.useState)("false"),x=p[0],f=p[1];return(0,s.jsxs)("div",{id:"sidebar",children:[(0,s.jsx)("div",{className:"alert alert-info col-12 d-md-none text-center",onClick:function(){f(!x)},children:" Main Menu "}),(0,s.jsxs)("div",{id:"menu",className:"jsx-1836586042 "+((x?null:"d-none d-md-block")||""),children:[(0,s.jsxs)("div",{className:"jsx-1836586042 list-group col-12",children:[(0,s.jsx)("a",{"data-toggle":"collapse","data-target":"#facultyMenu","aria-controls":"facultyMenu",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:" Faculty "}),(0,s.jsxs)("div",{id:"facultyMenu",className:"jsx-1836586042 collapse show",children:[!h&&!m&&(0,s.jsx)(i.default,{href:{pathname:"/faculty"},children:(0,s.jsx)("a",{id:"/faculty"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Dashboard"})}),!h&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/basic-info"},children:(0,s.jsx)("a",{id:"/faculty/basic-info"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Basic Information"})}),!h&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/accomplishment"},children:(0,s.jsx)("a",{id:"/faculty/accomplishment"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Accomplishment"})}),!h&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/faculty-load"},children:(0,s.jsx)("a",{id:"/faculty/faculty-load"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Faculty Load"})}),!h&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/evaluation"},children:(0,s.jsx)("a",{id:"/faculty/evaluation"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Peer Evaluation"})}),!h&&!m&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/view/all"},children:(0,s.jsx)("a",{id:"/faculty/view/all"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!h&&!m&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/approval"},children:(0,s.jsxs)("a",{id:"/faculty/approval"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:["Pending Approvals \xa0",e.approvalList.facultyCount>0&&(0,s.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:e.approvalList.facultyCount})]})}),h&&(0,s.jsx)(i.default,{href:{pathname:"/admin"},children:(0,s.jsx)("a",{id:"/admin"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!h&&!m&&e.roleAssignment&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/role-assignment"},children:(0,s.jsxs)("a",{id:"/faculty/role-assignment"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:["Role Assignment \xa0",(0,s.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:"!"})]})}),!h&&!m&&!e.roleAssignment&&(0,s.jsx)(i.default,{href:{pathname:"/faculty/role-assignment"},children:(0,s.jsx)("a",{id:"/faculty/role-assignment"===a.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Role Assignment"})})]})]}),(0,s.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,s.jsx)(i.default,{href:"/student",children:(0,s.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Student"})})}),(0,s.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,s.jsx)(i.default,{href:"/alumni",children:(0,s.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Alumni"})})}),(0,s.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,s.jsx)(i.default,{href:"/department-activities",children:(0,s.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Department Activities"})})}),(0,s.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,s.jsx)(i.default,{href:"/login",children:(0,s.jsx)("a",{onClick:function(){u("user")},className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-danger",children:"Log Out"})})}),(0,s.jsx)(n.default,{id:"1836586042",children:["#menu.jsx-1836586042{background-color:#017823;}",".list-group-item-success.jsx-1836586042{text-indent:20%;}","#active.jsx-1836586042{background-color:#005919;color:#fff;}"]})]})]})}},75372:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSP:function(){return E},default:function(){return D}});var s=t(85893),r=t(65988),n=t(97752),i=t(809),l=t.n(i),c=t(92447),d=t(11163),o=t(17513),u=t(9669),m=t.n(u);function h(e,a,t){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)(l().mark((function e(a,t,s){var r,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=8;break}return"0"==a&&(a=null),n="https://api.dpsmqaportal.com/api/faculty/basic-info/unit/"+t,e.next=6,m()({method:"PUT",url:n,data:{incomingUnitHead:a,approverRemarks:null},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 6:return r=e.sent,e.abrupt("return",r.data);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var x=function(e){var a;return null!=e.children&&(a=Object.keys(e.facultyListInfo).map((function(a){var t=!1;if(e.facultyListInfo[a].faculty_personal_info)return e.facultyListInfo[a].facultyId==e.children.incomingUnitHead&&(t=!0),(0,s.jsx)("option",{value:e.facultyListInfo[a].facultyId,selected:t,children:e.facultyListInfo[a].faculty_personal_info.lastName+", "+e.facultyListInfo[a].faculty_personal_info.firstName})}))),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{align:"center",children:" Unit Head Assignment "}),(0,s.jsx)("div",{role:"alert",id:"assignalert",style:{visibility:"hidden"}}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"NOTE: Changing the value on the dropdown will automatically update the value of the incoming unit head and notify the department chair for possible approval"}),(0,s.jsx)("table",{className:"table table-striped table-sm",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Incoming Unit Head"}),(0,s.jsx)("th",{children:"Status"}),(0,s.jsx)("th",{children:"Approver Remarks"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("form",{children:(0,s.jsxs)("select",{name:"faculty",className:"form-control",id:"faculty",onChange:(0,c.Z)(l().mark((function a(){var t,s,r;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=document.getElementById("assignalert"),s=document.getElementById("faculty").value,a.next=4,h(s,e.children.unitId,e.token);case 4:1==(r=a.sent).success?(t.className="alert alert-success",t.style="visibility: visible",t.innerHTML=r.message):(t.className="alert alert-danger",t.style="visibility: visible",r.error?t.innerHTML=r.error[0].message:t.innerHTML=r.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),d.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return a.stop()}}),a)}))),children:[(0,s.jsx)("option",{value:"0",children:"--SELECT FACULTY--"}),a]})})}),(0,s.jsx)("td",{children:e.children.approverRemarks?"Rejected":"Pending"}),(0,s.jsx)("td",{children:e.children.approverRemarks||"None"})]},e.children.unitId)]})})]})]})};function f(e,a,t,s,r){return j.apply(this,arguments)}function j(){return(j=(0,c.Z)(l().mark((function e(a,t,s,r,n){var i,c,d,o,u,h;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=25;break}if(r){e.next=20;break}return i="https://api.dpsmqaportal.com/api/user/"+a,e.next=6,m()({method:"PUT",url:i,data:{role:"1"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:if(1!=e.sent.data.success){e.next=18;break}return c="https://api.dpsmqaportal.com/api/user/"+t,e.next=11,m()({method:"PUT",url:c,data:{role:"2"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 11:if(1!=(d=e.sent).data.success){e.next=17;break}return o="https://api.dpsmqaportal.com/api/faculty/basic-info/unit/"+s,e.next=16,m()({method:"PUT",url:o,data:{incomingUnitHead:null},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 16:e.sent;case 17:return e.abrupt("return",d.data);case 18:e.next=25;break;case 20:return u="https://api.dpsmqaportal.com/api/faculty/basic-info/unit/"+s,e.next=23,m()({method:"PUT",url:u,data:{approverRemarks:r},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 23:return h=e.sent,e.abrupt("return",h.data);case 25:e.next=31;break;case 27:return e.prev=27,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 31:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}var b=function(e){var a,t=0,r=0,n=0;function i(e,a,s){t=e,r=a,n=s}return a=null!=e.children?Object.keys(e.children).map((function(a){var t=e.children[a].currentUnitHead.faculty_personal_info.lastName+", "+e.children[a].currentUnitHead.faculty_personal_info.firstName,r=e.children[a].faculty_personal_info.lastName+", "+e.children[a].faculty_personal_info.firstName;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.children[a].unit}),(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:r}),(0,s.jsx)("td",{children:(0,s.jsxs)("div",{className:"btn-group",children:[(0,s.jsx)("a",{className:"btn btn-info","data-toggle":"modal","data-target":"#approveUnitHead",onClick:function(){i(e.children[a].currentUnitHead.faculty_personal_info.user.userId,e.children[a].faculty_personal_info.user.userId,e.children[a].unitId)},children:"Approve"}),(0,s.jsx)("a",{className:"btn btn-danger","data-toggle":"modal","data-target":"#rejectUnitHead",onClick:function(){i(e.children[a].currentUnitHead.faculty_personal_info.user.userId,e.children[a].faculty_personal_info.user.userId,e.children[a].unitId)},children:"Reject"})]})})]},e.children[a].unitId)})):(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:"4",children:(0,s.jsx)("p",{align:"center",children:"No data available!"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{align:"center",children:" Unit Head Assignment "}),(0,s.jsx)("div",{role:"alert",id:"assignalert",style:{visibility:"hidden"}}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{children:(0,s.jsx)("table",{className:"table table-striped table-sm",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Unit"}),(0,s.jsx)("th",{children:"Current Unit Head"}),(0,s.jsx)("th",{children:"Incoming Unit Head"}),(0,s.jsx)("th",{children:"Action"})]}),a]})})}),(0,s.jsx)("div",{className:"modal fade",id:"approveUnitHead",tabIndex:"-1",role:"dialog","aria-labelledby":"approveUnitHeadLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",id:"approveUnitHeadLabel",children:"Approve Unit Head Change"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:" Are you sure you want to approve the change in unit head role? "})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't approve"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:(0,c.Z)(l().mark((function a(){var s,i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=document.getElementById("assignalert"),$("#approveUnitHead").modal("toggle"),a.next=4,f(t,r,n,!1,e.token);case 4:1==(i=a.sent).success?(s.className="alert alert-success",s.style="visibility: visible",s.innerHTML=i.message):(s.className="alert alert-danger",s.style="visibility: visible",i.error?s.innerHTML=i.error[0].message:s.innerHTML=i.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),d.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return a.stop()}}),a)}))),children:"Yes, approve"})]})]})})}),(0,s.jsx)("div",{className:"modal fade",id:"rejectUnitHead",tabIndex:"-1",role:"dialog","aria-labelledby":"rejectUnitHeadLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",id:"rejectUnitHeadLabel",children:"Reject Unit Head Change"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("p",{children:" Are you sure you want to reject this change in unit head? "}),(0,s.jsx)("div",{className:"form-row",children:(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"approverRemarks",children:" Reason/Remarks for Rejection "}),(0,s.jsx)("input",{className:"form-control",type:"text",name:"approverRemarks",id:"approverRemarks",placeholder:"Input remarks",required:!0})]})}),(0,s.jsx)("hr",{})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't reject"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger",onClick:(0,c.Z)(l().mark((function a(){var s,i,c;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=document.getElementById("assignalert"),$("#rejectUnitHead").modal("toggle"),i=document.getElementById("approverRemarks").value,a.next=5,f(t,r,n,i,e.token);case 5:1==(c=a.sent).success?(s.className="alert alert-success",s.style="visibility: visible",s.innerHTML=c.message):(s.className="alert alert-danger",s.style="visibility: visible",c.error?s.innerHTML=c.error[0].message:s.innerHTML=c.message),$("#assignalert").fadeTo(5e3,500).slideUp(500,(function(){$("#assignalert").slideUp(500)})),d.default.push("/faculty/role-assignment","/faculty/role-assignment");case 9:case"end":return a.stop()}}),a)}))),children:"Yes, reject"})]})]})})})]})},g=(t(41664),t(49704)),v=t.n(g);function y(e,a){return N.apply(this,arguments)}function N(){return(N=(0,c.Z)(l().mark((function e(a,t){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=13;break}return e.prev=2,e.next=5,m().delete("https://api.dpsmqaportal.com/api/user/admin/"+a,{headers:{Authorization:"Bearer ".concat(t)}});case 5:return s=e.sent,e.abrupt("return",s.data);case 9:return e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",e.t0);case 13:e.next=19;break;case 15:return e.prev=15,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,15],[2,9]])})))).apply(this,arguments)}var k=t(74047),C=t(52700),w=t(8127),A=t(58580),L=t(20775);function I(e,a){return U.apply(this,arguments)}function U(){return(U=(0,c.Z)(l().mark((function e(a,t){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=15;break}return e.prev=2,a.append("password","password"),a.append("role","5"),e.next=7,m()({method:"POST",url:"https://api.dpsmqaportal.com/api/user/add",data:a,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 7:return s=e.sent,e.abrupt("return",s.data);case 11:return e.prev=11,e.t0=e.catch(2),console.error(e.t0),e.abrupt("return",e.t0);case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,17],[2,11]])})))).apply(this,arguments)}function T(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,L.Z)(e);if(a){var r=(0,L.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,A.Z)(this,t)}}var H=function(e){(0,w.Z)(t,e);var a=T(t);function t(e){return(0,k.Z)(this,t),a.call(this,e)}return(0,C.Z)(t,[{key:"render",value:function(){var e=this;return(0,s.jsx)(o.J9,{initialValues:{name:"",upemail:""},onSubmit:function(){var a=(0,c.Z)(l().mark((function a(t,s){var r,n,i,c,o;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=s.resetForm,n=document.getElementById("clerkalert"),i=document.getElementById("clerkForm"),c=new FormData(i),a.next=6,I(c,e.props.token);case 6:1==(o=a.sent).success?(n.className="alert alert-success",n.style="visibility: visible",n.innerHTML=o.message):(n.className="alert alert-danger",o.error?n.innerHTML=o.error[0].message:n.innerHTML=o.message),n.setAttribute("style","visibility: visible"),$("#clerkalert").fadeTo(5e3,500).slideUp(500,(function(){$("#clerkalert").slideUp(500)})),r(),d.default.push("/faculty/role-assignment");case 12:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),children:function(e){e.values,e.errors,e.touched;var a=e.isSubmitting;return(0,s.jsxs)(o.l0,{id:"clerkForm",children:[(0,s.jsx)("hr",{className:"jsx-371132353"}),(0,s.jsx)("br",{className:"jsx-371132353"}),(0,s.jsx)("h6",{className:"jsx-371132353",children:"Required"}),(0,s.jsxs)("div",{className:"jsx-371132353 form-row",children:[(0,s.jsxs)("div",{className:"jsx-371132353 form-group col-md-6",children:[(0,s.jsx)("label",{htmlFor:"ClerkName[]",className:"jsx-371132353 required-label",children:" Name "}),(0,s.jsx)("input",{type:"text",name:"name",placeholder:"Input name",required:!0,className:"jsx-371132353 form-control"})]}),(0,s.jsxs)("div",{className:"jsx-371132353 form-group col-md-6",children:[(0,s.jsx)("label",{htmlFor:"ClerkEmail[]",className:"jsx-371132353 required-label",children:" UP Email Address "}),(0,s.jsx)("input",{type:"email",name:"upemail",placeholder:"Input UP Email",required:!0,className:"jsx-371132353 form-control"})]})]}),(0,s.jsx)("br",{className:"jsx-371132353"}),(0,s.jsx)("button",{type:"submit",disabled:a,className:"jsx-371132353 btn btn-primary",children:"Add Clerk"}),(0,s.jsx)(r.default,{id:"371132353",children:['label.required-label.jsx-371132353:after{content:"*";color:#f00;}','h6.jsx-371132353:before{content:"* ";color:#f00;}']})]})}})}}]),t}(t(67294).Component);var _=function(e){var a,t=0;return a=null!=e.children?Object.keys(e.children).map((function(a){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.children[a].name}),(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:"btn-group",children:(0,s.jsx)("a",{className:"btn btn-danger","data-toggle":"modal","data-target":"#deleteClerk",onClick:function(){var s;s=e.children[a].userId,t=s},children:"Delete"})})})]},e.children[a].userId)})):(0,s.jsx)("td",{colSpan:"2",children:(0,s.jsx)("p",{align:"center",children:"No data available!"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{align:"center",children:" Admin Clerk Assignment "}),(0,s.jsx)("div",{className:"alert alert-success",role:"alert",id:"clerkalert",style:{visibility:"hidden"}}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{children:(0,s.jsx)("table",{className:"table table-striped table-sm",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Action"})]}),a]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(H,{token:e.token}),(0,s.jsx)("div",{className:"modal fade",id:"deleteClerk",tabIndex:"-1",role:"dialog","aria-labelledby":"deleteClerkLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",id:"deleteClerkLabel",children:"Delete Admin Clerk"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:" Are you sure you want to delete this admin clerk? "})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't delete"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:(0,c.Z)(l().mark((function a(){var s,r;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=document.getElementById("clerkalert"),$("#deleteClerk").modal("toggle"),a.next=4,y(t,e.token);case 4:1==(r=a.sent).success?(s.className="alert alert-success",s.style="visibility: visible",s.innerHTML=r.message):(s.className="alert alert-danger",r.error?s.innerHTML=r.error[0].message:s.innerHTML=r.message),$("#clerkalert").fadeTo(5e3,500).slideUp(500,(function(){$("#clerkalert").slideUp(500)})),d.default.push("/faculty/role-assignment","/faculty/role-assignment");case 8:case"end":return a.stop()}}),a)}))),children:"Yes, delete"})]})]})})})]})};function M(e,a){return R.apply(this,arguments)}function R(){return(R=(0,c.Z)(l().mark((function e(a,t){var s,r,n,i,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=14;break}return s=v().decode(t),r=s.userId,n="https://api.dpsmqaportal.com/api/user/"+r,e.next=7,m()({method:"PUT",url:n,data:{role:"1"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 7:if(1!=e.sent.data.success){e.next=14;break}return i="https://api.dpsmqaportal.com/api/user/"+a,e.next=12,m()({method:"PUT",url:i,data:{role:"3"},headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 12:return c=e.sent,e.abrupt("return",c.data);case 14:e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var Z=t(89609);var P=function(e){var a;return null!=e.children&&(a=Object.keys(e.children).map((function(a){return{value:e.children[a].facultyId,label:e.children[a].lastName+", "+e.children[a].firstName}}))),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{align:"center",children:" Department Chair Assignment "}),(0,s.jsx)("div",{className:"alert alert-success",role:"alert",id:"deptchairalert",style:{visibility:"hidden"}}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"jumbotron",children:[(0,s.jsxs)("div",{className:"form-group col-md-8",children:[(0,s.jsx)("label",{htmlFor:"deptChair",children:" Select New Department Chair "}),(0,s.jsx)(Z.ZP,{className:"col-md-8",name:"deptChair",id:"deptChair",options:a,required:!0})]}),(0,s.jsx)("button",{className:"btn btn-danger","data-toggle":"modal","data-target":"#assignDeptChair",children:"Assign New Department Chair"})]}),(0,s.jsx)("div",{className:"modal fade",id:"assignDeptChair",tabIndex:"-1",role:"dialog","aria-labelledby":"assignDeptChairLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",id:"assignDeptChairLabel",children:"Assign New Department Chair"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:"Are you sure you want to assign this user as the new department chair? You will lose access to all department chair-specific functionalities, and the user you assigned will gain access to said functionalities. Once you finalize this decision, you will be logged out immediately, and your account will be reverted to a standard faculty account when you log in again."})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"No, don't assign"}),(0,s.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:(0,c.Z)(l().mark((function a(){var t,s,r;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=document.getElementById("deptchairalert"),$("#assignDeptChair").modal("toggle"),0==(s=document.getElementById("deptChair").value)){a.next=8;break}return a.next=6,M(s,e.token);case 6:1==(r=a.sent).success?(t.className="alert alert-success",t.style="visibility: visible",t.innerHTML=r.message,$("#deptchairalert").fadeTo(5e3,500).slideUp(500,(function(){$("#deptchairalert").slideUp(500),d.default.push("/login","/login")}))):(t.className="alert alert-danger",r.error?t.innerHTML=r.error[0].message:t.innerHTML=r.message,$("#deptchairalert").fadeTo(5e3,500).slideUp(500,(function(){$("#deptchairalert").slideUp(500)})),d.default.push("/faculty/role-assignment","/faculty/role-assignment"));case 8:case"end":return a.stop()}}),a)}))),children:"Yes, assign"})]})]})})})]})};var E=!0,D=function(e){return(0,s.jsxs)(n.Z,{userId:e.data.userId,facultyId:e.data.facultyId,role:e.data.role,name:e.data.name,approvalList:e.approvalList,roleAssignmentFlag:e.roleAssignmentFlag,children:[3==e.data.role&&(0,s.jsx)("nav",{className:"jsx-3469655085",children:(0,s.jsxs)("div",{id:"nav-tab",role:"tablist",className:"jsx-3469655085 nav nav-tabs nav-fill nav-justified",children:[(0,s.jsxs)("a",{id:"unit-head-tab","data-toggle":"tab",href:"#unit-head",role:"tab","aria-controls":"unit-head","aria-selected":"true",className:"jsx-3469655085 nav-item nav-link active",children:["Unit Head Assignment ",e.roleAssignmentFlag&&(0,s.jsx)("span",{className:"jsx-3469655085 badge badge-danger",children:"!"})]}),(0,s.jsx)("a",{id:"admin-clerk-tab","data-toggle":"tab",href:"#admin-clerk",role:"tab","aria-controls":"admin-clerk","aria-selected":"false",className:"jsx-3469655085 nav-item nav-link",children:"Admin Clerk Assignment"}),(0,s.jsx)("a",{id:"dept-chair-tab","data-toggle":"tab",href:"#dept-chair",role:"tab","aria-controls":"dept-chair","aria-selected":"false",className:"jsx-3469655085 nav-item nav-link",children:"Department Chair Assignment"})]})}),(0,s.jsx)("br",{className:"jsx-3469655085"}),(0,s.jsx)("br",{className:"jsx-3469655085"}),(0,s.jsxs)("div",{id:"nav-tabContent",className:"jsx-3469655085 tab-content",children:[2==e.data.role&&(0,s.jsx)("div",{id:"unit-head",role:"tabpanel","aria-labelledby":"unit-head-tab",className:"jsx-3469655085 tab-pane fade show active",children:(0,s.jsx)(x,{token:e.token.user,role:e.data.role,facultyListInfo:e.facultyListInfo,children:e.roleAssignmentList})}),3==e.data.role&&(0,s.jsx)("div",{id:"unit-head",role:"tabpanel","aria-labelledby":"unit-head-tab",className:"jsx-3469655085 tab-pane fade show active",children:(0,s.jsx)(b,{token:e.token.user,role:e.data.role,children:e.roleAssignmentList})}),(0,s.jsx)("div",{id:"admin-clerk",role:"tabpanel","aria-labelledby":"admin-clerk-tab",className:"jsx-3469655085 tab-pane fade",children:(0,s.jsx)(_,{token:e.token.user,role:e.data.role,children:e.clerkAssignmentList})}),(0,s.jsx)("div",{id:"dept-chair",role:"tabpanel","aria-labelledby":"dept-chair-tab",className:"jsx-3469655085 tab-pane fade",children:(0,s.jsx)(P,{token:e.token.user,role:e.data.role,children:e.facultyListInfo})})]}),(0,s.jsx)(r.default,{id:"3469655085",children:["a.nav-item.jsx-3469655085:focus{background-color:#78b6c2;}","a.nav-item.jsx-3469655085:hover{background-color:#78b6c2;}","a.active.jsx-3469655085{background-color:#78b6c2;}"]})]})}},5723:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faculty/role-assignment",function(){return t(75372)}])},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[774,155,851,704,669,513,291,888,179],(function(){return a=5723,e(e.s=a);var a}));var a=e.O();_N_E=a}]);