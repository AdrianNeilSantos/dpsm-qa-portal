(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{14176:function(s,e,a){"use strict";a(85893),a(9008),a(41664),a(37940)},81318:function(s,e,a){"use strict";a(85893),a(41664)},8237:function(s,e,a){"use strict";var t=a(85893),i=a(65988),l=a(41664);e.Z=function(s){var e="";switch(s.role){case 1:e="Faculty";break;case 2:e="Unit Head";break;case 3:e="Department Chair";break;default:e="Admin Clerk"}return(0,t.jsxs)("div",{className:"jsx-3546386183 row",children:[(0,t.jsxs)("nav",{className:"jsx-3546386183 navbar navbar-expand-lg",children:[(0,t.jsx)("span",{className:"jsx-3546386183 navbar-text",children:(0,t.jsx)("a",{className:"jsx-3546386183 navbar-brand",children:(0,t.jsx)("img",{src:"/dpsm-seal.png",width:"186",height:"150",alt:"DPSM-QA-Portal",className:"jsx-3546386183 d-inline-block align-top"})})}),(0,t.jsx)("h2",{className:"jsx-3546386183",children:" DPSM QA PORTAL "}),(0,t.jsx)("div",{className:"jsx-3546386183 ml-auto",children:(0,t.jsxs)("h5",{className:"jsx-3546386183",children:[" Currently Logged In: ",(0,t.jsx)(l.default,{href:"/settings/change-password",children:(0,t.jsxs)("a",{className:"jsx-3546386183",children:[" ",s.name," (",e,") "]})})," "]})})]}),(0,t.jsx)(i.default,{id:"3546386183",children:[".navbar.jsx-3546386183{background-color:#910303;width:100%;}","h2.jsx-3546386183,h5.jsx-3546386183{font-family:Georgia;color:#fff;}"]})]})}},97752:function(s,e,a){"use strict";var t=a(85893),i=a(9008),l=a(8237),n=a(37940);a(81318),a(14176),a(49704);e.Z=function(s){var e;return s.approvalList&&(e=s.approvalList),(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"DPSM-QA-PORTAL"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"}),(0,t.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),(0,t.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"}),(0,t.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"})]}),(0,t.jsx)(l.Z,{name:s.name,role:s.role}),(0,t.jsxs)("div",{className:"row",id:"layout_row",children:[(0,t.jsx)(n.Z,{role:s.role,approvalList:e,facultyId:s.facultyId,roleAssignment:s.roleAssignmentFlag}),(0,t.jsx)("div",{className:"col",id:"layout_content",children:s.children})]})]})}},37940:function(s,e,a){"use strict";var t=a(85893),i=a(64121),l=a(65988),n=a(41664),c=a(12102),r=a(67294),o=a(11163);e.Z=function(s){var e=(0,o.useRouter)(),a=(0,c.Z)(["user"]),d=(0,i.Z)(a,3),u=(d[0],d[1],d[2]),m=!0,p=!0;1!=s.role&&2!=s.role&&3!=s.role||(p=!1,2!=s.role&&3!=s.role||(m=!1));var h=(0,r.useState)("false"),j=h[0],x=h[1];return(0,t.jsxs)("div",{id:"sidebar",children:[(0,t.jsx)("div",{className:"alert alert-info col-12 d-md-none text-center",onClick:function(){x(!j)},children:" Main Menu "}),(0,t.jsxs)("div",{id:"menu",className:"jsx-1836586042 "+((j?null:"d-none d-md-block")||""),children:[(0,t.jsxs)("div",{className:"jsx-1836586042 list-group col-12",children:[(0,t.jsx)("a",{"data-toggle":"collapse","data-target":"#facultyMenu","aria-controls":"facultyMenu",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:" Faculty "}),(0,t.jsxs)("div",{id:"facultyMenu",className:"jsx-1836586042 collapse show",children:[!p&&!m&&(0,t.jsx)(n.default,{href:{pathname:"/faculty"},children:(0,t.jsx)("a",{id:"/faculty"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Dashboard"})}),!p&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/basic-info"},children:(0,t.jsx)("a",{id:"/faculty/basic-info"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Basic Information"})}),!p&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/accomplishment"},children:(0,t.jsx)("a",{id:"/faculty/accomplishment"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Accomplishment"})}),!p&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/faculty-load"},children:(0,t.jsx)("a",{id:"/faculty/faculty-load"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Faculty Load"})}),!p&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/evaluation"},children:(0,t.jsx)("a",{id:"/faculty/evaluation"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Peer Evaluation"})}),!p&&!m&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/view/all"},children:(0,t.jsx)("a",{id:"/faculty/view/all"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!p&&!m&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/approval"},children:(0,t.jsxs)("a",{id:"/faculty/approval"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:["Pending Approvals \xa0",s.approvalList.facultyCount>0&&(0,t.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:s.approvalList.facultyCount})]})}),p&&(0,t.jsx)(n.default,{href:{pathname:"/admin"},children:(0,t.jsx)("a",{id:"/admin"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success ",children:"Faculty List"})}),!p&&!m&&s.roleAssignment&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/role-assignment"},children:(0,t.jsxs)("a",{id:"/faculty/role-assignment"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:["Role Assignment \xa0",(0,t.jsx)("span",{className:"jsx-1836586042 badge badge-danger",children:"!"})]})}),!p&&!m&&!s.roleAssignment&&(0,t.jsx)(n.default,{href:{pathname:"/faculty/role-assignment"},children:(0,t.jsx)("a",{id:"/faculty/role-assignment"===e.pathname?"active":"inactive",className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-success",children:"Role Assignment"})})]})]}),(0,t.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,t.jsx)(n.default,{href:"/student",children:(0,t.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Student"})})}),(0,t.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,t.jsx)(n.default,{href:"/alumni",children:(0,t.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Alumni"})})}),(0,t.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,t.jsx)(n.default,{href:"/department-activities",children:(0,t.jsx)("a",{className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-secondary",children:"Department Activities"})})}),(0,t.jsx)("div",{className:"jsx-1836586042 list-group col-12",children:(0,t.jsx)(n.default,{href:"/login",children:(0,t.jsx)("a",{onClick:function(){u("user")},className:"jsx-1836586042 list-group-item list-group-item-action list-group-item-danger",children:"Log Out"})})}),(0,t.jsx)(l.default,{id:"1836586042",children:["#menu.jsx-1836586042{background-color:#017823;}",".list-group-item-success.jsx-1836586042{text-indent:20%;}","#active.jsx-1836586042{background-color:#005919;color:#fff;}"]})]})]})}},36369:function(s,e,a){"use strict";a.r(e);var t=a(85893),i=a(97752);e.default=function(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("br",{}),(0,t.jsx)("h4",{align:"center",children:" Change Password "}),(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{className:"form-group col-md-6",children:[(0,t.jsx)("label",{htmlFor:"old-password",children:"Original Password:"}),(0,t.jsx)("input",{className:"form-control",type:"password",id:"old-password",name:"old-password"})]}),(0,t.jsxs)("div",{className:"form-group col-md-6",children:[(0,t.jsx)("label",{htmlFor:"new-password",children:"New Password:"}),(0,t.jsx)("input",{className:"form-control",type:"password",id:"new-password",name:"new-password"})]}),(0,t.jsxs)("div",{className:"form-group col-md-6",children:[(0,t.jsx)("label",{htmlFor:"confirm-new-password",children:"Confirm New Password:"}),(0,t.jsx)("input",{className:"form-control",type:"password",id:"confirm-new-password",name:"confirm-new-password"})]}),(0,t.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Change Password"})]})]})}},50700:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/change-password",function(){return a(36369)}])},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}},function(s){s.O(0,[155,851,704,774,888,179],(function(){return e=50700,s(s.s=e);var e}));var e=s.O();_N_E=e}]);