exports.id = "components_layout_js-helpers_index_js";
exports.ids = ["components_layout_js-helpers_index_js"];
exports.modules = {

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\content.js";




function Content(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\footer.js";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light bg-light",
    children: "\xA9 Copyright 2021 DPSM"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\header.js";



function Header(props) {
  let roleName = "";

  switch (props.role) {
    case 1:
      roleName = "Faculty";
      break;

    case 2:
      roleName = "Unit Head";
      break;

    case 3:
      roleName = "Department Chair";
      break;

    default:
      roleName = "Admin Clerk";
      break;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "topbar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "topbanner",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: " QUALITY ASSURANCE PORTAL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./components/content.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\layout.js";







function Layout(props) {
  let approvalList;
  if (props.approvalList) approvalList = props.approvalList;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "DPSM-QA-PORTAL MOD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/testStyle.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        hrsef: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: props.name,
      role: props.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      id: "layout_row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {
        role: props.role,
        approvalList: approvalList,
        facultyId: props.facultyId,
        roleAssignment: props.roleAssignmentFlag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col",
        id: "layout_content",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\sidebar.js";





function Sidebar(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const [cookies, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)(["user"]);

  function handleRemoveCookie() {
    removeCookie("user", {
      path: '/'
    });
  }

  let faculty = true;
  let staff = true;

  if (props.role == 1 || props.role == 2 || props.role == 3) {
    staff = false;

    if (props.role == 2 || props.role == 3) {
      faculty = false;
    }
  }

  const {
    0: isActive,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    /*#__PURE__*/
    //     <div id="sidebar">
    //     <div className = "alert alert-info col-12 d-md-none text-center" onClick = {handleToggle}> Main Menu </div>
    //         <div id = "menu" className = {isActive ? null : "d-none d-md-block"}>
    //             <div className="list-group col-12">
    // 		<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" data-target = "#facultyMenu" aria-controls = "facultyMenu"> Faculty </a>
    //             <div id = "facultyMenu" className = "collapse show">
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty" ?  "active"  : "inactive" }>Dashboard</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/basic-info" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/basic-info" ?  "active"  : "inactive" }>Basic Information</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/accomplishment" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>Accomplishment</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/faculty-load" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/faculty-load" ?  "active"  : "inactive" }>Faculty Load</a></Link> }
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty/view/all" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/view/all" ?  "active"  : "inactive" }>Faculty List</a></Link> }
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty/approval" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/approval" ?  "active"  : "inactive" }> 
    //                         Pending Approvals &nbsp;{props.approvalList.facultyCount > 0 && <span className="badge badge-danger">{props.approvalList.facultyCount}</span>}
    //                     </a>
    //                 </Link> }
    //                 { staff && <Link href={{ pathname: "/admin" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/admin" ?  "active"  : "inactive" }>Faculty List</a></Link> }
    // 	            { !staff && !faculty && props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
    //                         Role Assignment &nbsp;<span className="badge badge-danger">!</span>
    //                     </a>
    //                 </Link> }
    //                 { !staff && !faculty && !props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
    //                         Role Assignment
    //                     </a>
    //                 </Link> }
    //             </div>
    //             </div>
    // 	        <div className="list-group col-12">
    //                 <Link href="/login"><a className = "list-group-item list-group-item-action list-group-item-danger" onClick={handleRemoveCookie}>Log Out</a></Link>
    //             </div>
    // 	<style jsx>{`
    // 		#menu {
    // 			background-color: #017823;
    // 		}
    // 		.list-group-item-success{
    // 			text-indent:20%;
    // 		}
    // 		#active{
    // 			background-color: #005919;
    // 			color: #fff;
    // 		}
    // 	`}</style>
    //         </div>
    // </div>			
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "top",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "close",
          id: "close-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sidebar",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "dropdown-btn",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "grid_view"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 50
          }, this), "Dashboard", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fa fa-caret-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Accomplishment Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Employment Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Attained Degrees"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "dropdown-btn",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "person"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 50
          }, this), "Basic Information", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fa fa-caret-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "person"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Personal Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Education"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Work Experience"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "dropdown-btn",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "emoji_events"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 50
          }, this), "Accomplishment", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fa fa-caret-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Public Service"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Publications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Trainings and Seminars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Licensure Exams"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Research Grants"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "dropdown-btn",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 50
          }, this), "Role Assignment", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fa fa-caret-down"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "dropdown-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "unitHeadAssignment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "adminClerkAssignment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: isActive ? null : "active",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "assignment_ind"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "deptChairAssignment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "work"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Faculty Load"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "format_list_bulleted"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Faculty List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "pending_actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Pending Approvals"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "approval-count",
            children: "26"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "homepage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "signIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "passwordForgot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "passwordChange"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "generateReports"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: isActive ? null : "active",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "assignment_ind"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "downloadFacultyInfo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: handleRemoveCookie,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "material-icons-sharp",
              children: "logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCookies": function() { return /* binding */ parseCookies; },
/* harmony export */   "isExpired": function() { return /* binding */ isExpired; }
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || "" : document.cookie);
} // check token if expired

function isExpired(user) {
  let decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(user);
  let now = new Date().getTime() / 1000;
  return decoded && decoded.exp < now;
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXGFkcmlhXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJjaGlsZHJlbiIsIkZvb3RlciIsIkhlYWRlciIsInJvbGVOYW1lIiwicm9sZSIsIkxheW91dCIsImFwcHJvdmFsTGlzdCIsIm5hbWUiLCJmYWN1bHR5SWQiLCJyb2xlQXNzaWdubWVudEZsYWciLCJTaWRlYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29va2llcyIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsInVzZUNvb2tpZXMiLCJoYW5kbGVSZW1vdmVDb29raWUiLCJwYXRoIiwiZmFjdWx0eSIsInN0YWZmIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJkb2N1bWVudCIsImlzRXhwaXJlZCIsInVzZXIiLCJkZWNvZGVkIiwiand0Iiwibm93IiwiRGF0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QSxHQUFHLENBQUNFLE9BQUosQ0FBWUQsTUFBWixJQUFzQixFQUF6QixHQUE4QkUsUUFBUSxDQUFDRixNQUF2RCxDQUFQO0FBQ0QsQyxDQUVEOztBQUNPLFNBQVNHLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzlCLE1BQUlDLE9BQU8sR0FBR0MsMERBQUEsQ0FBV0YsSUFBWCxDQUFkO0FBQ0EsTUFBSUcsR0FBRyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFqQztBQUNBLFNBQU9KLE9BQU8sSUFBSUEsT0FBTyxDQUFDSyxHQUFSLEdBQWNILEdBQWhDO0FBQ0QsQzs7Ozs7Ozs7OztBQ1pELGUiLCJmaWxlIjoiY29tcG9uZW50c19sYXlvdXRfanMtaGVscGVyc19pbmRleF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInIFxyXG5cclxuZnVuY3Rpb24gQ29udGVudChwcm9wcyl7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzcyA9IFwicm93XCI+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgJmNvcHk7IENvcHlyaWdodCAyMDIxIERQU01cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcblx0bGV0IHJvbGVOYW1lID0gXCJcIlxyXG5cdHN3aXRjaChwcm9wcy5yb2xlKXtcclxuXHRcdGNhc2UgMTogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJGYWN1bHR5XCI7IFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJVbml0IEhlYWRcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAzOiBcclxuXHRcdFx0cm9sZU5hbWUgPSBcIkRlcGFydG1lbnQgQ2hhaXJcIjsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDogXHJcblx0XHRcdHJvbGVOYW1lID0gXCJBZG1pbiBDbGVya1wiOyBcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdFxyXG4gICAgcmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wYmFubmVyXCI+XHJcblx0XHRcdFx0PGltZyBzcmM9XCIvbG9nby5wbmdcIi8+XHJcblx0XHRcdFx0PGgyPiBRVUFMSVRZIEFTU1VSQU5DRSBQT1JUQUw8L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgICBsZXQgYXBwcm92YWxMaXN0XHJcbiAgICBpZihwcm9wcy5hcHByb3ZhbExpc3QpIGFwcHJvdmFsTGlzdCA9IHByb3BzLmFwcHJvdmFsTGlzdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRQU00tUUEtUE9SVEFMIE1PRDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi90ZXN0U3R5bGUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocnNlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuNC4xL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogTUFURVJJQUwgQ0ROICovfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrU2hhcnBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjUuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE2LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbmFtZT17IHByb3BzLm5hbWUgfSByb2xlPXtwcm9wcy5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIiBpZCA9IFwibGF5b3V0X3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgcm9sZSA9IHtwcm9wcy5yb2xlfSBhcHByb3ZhbExpc3Q9e2FwcHJvdmFsTGlzdH0gZmFjdWx0eUlkID0ge3Byb3BzLmZhY3VsdHlJZH0gcm9sZUFzc2lnbm1lbnQ9e3Byb3BzLnJvbGVBc3NpZ25tZW50RmxhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGlkID0gXCJsYXlvdXRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykgeyBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlQ29va2llKCkge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcInVzZXJcIiwge3BhdGg6Jy8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhY3VsdHkgPSB0cnVlXHJcbiAgICBsZXQgc3RhZmYgPSB0cnVlXHJcblxyXG4gICAgaWYocHJvcHMucm9sZSA9PSAxIHx8IHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICBzdGFmZiA9IGZhbHNlXHJcbiAgICAgICAgaWYocHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICBmYWN1bHR5ID0gZmFsc2VcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBcdHNldEFjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIC8vICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG5cdC8vICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtaW5mbyBjb2wtMTIgZC1tZC1ub25lIHRleHQtY2VudGVyXCIgb25DbGljayA9IHtoYW5kbGVUb2dnbGV9PiBNYWluIE1lbnUgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgaWQgPSBcIm1lbnVcIiBjbGFzc05hbWUgPSB7aXNBY3RpdmUgPyBudWxsIDogXCJkLW5vbmUgZC1tZC1ibG9ja1wifT5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuXHQvLyBcdFx0PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCIgZGF0YS10b2dnbGUgPSBcImNvbGxhcHNlXCIgZGF0YS10YXJnZXQgPSBcIiNmYWN1bHR5TWVudVwiIGFyaWEtY29udHJvbHMgPSBcImZhY3VsdHlNZW51XCI+IEZhY3VsdHkgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBpZCA9IFwiZmFjdWx0eU1lbnVcIiBjbGFzc05hbWUgPSBcImNvbGxhcHNlIHNob3dcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHlcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkRhc2hib2FyZDwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5CYXNpYyBJbmZvcm1hdGlvbjwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkFjY29tcGxpc2htZW50PC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExvYWQ8L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS92aWV3L2FsbFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS92aWV3L2FsbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT4gXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFscyAmbmJzcDt7cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnR9PC9zcGFuPn1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvYWRtaW5cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcblx0Ly8gXHQgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiBwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudCAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgIXByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcblx0Ly8gXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tZGFuZ2VyXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlQ29va2llfT5Mb2cgT3V0PC9hPjwvTGluaz5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQvLyBcdDxzdHlsZSBqc3g+e2BcclxuXHQvLyBcdFx0I21lbnUge1xyXG4gIFx0Ly8gXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxNzgyMztcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0XHQubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3N7XHJcblx0Ly8gXHRcdFx0dGV4dC1pbmRlbnQ6MjAlO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHRcdCNhY3RpdmV7XHJcblx0Ly8gXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNTkxOTtcclxuXHQvLyBcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0YH08L3N0eWxlPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuXHQvLyA8L2Rpdj5cdFx0XHRcclxuICAgIFxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImNsb3NlXCIgaWQ9XCJjbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgR3JvdXAgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+Z3JpZF92aWV3PC9zcGFuPkRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFjY29tcGxpc2htZW50IENvdW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVtcGxveW1lbnQgU3RhdHVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkF0dGFpbmVkIERlZ3JlZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBCYXNpYyBJbmZvcm1hdGlvbiBHcm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+cGVyc29uPC9zcGFuPkJhc2ljIEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPnBlcnNvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FZHVjYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Xb3JrIEV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQWNjb21wbGlzaG1lbnQgR3JvdXAgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+ZW1vamlfZXZlbnRzPC9zcGFuPkFjY29tcGxpc2htZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHVibGljIFNlcnZpY2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHVibGljYXRpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRyYWluaW5ncyBhbmQgU2VtaW5hcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TGljZW5zdXJlIEV4YW1zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJlc2VhcmNoIEdyYW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFJvbGUgQXNzaWdubWVudCBHcm91cCAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5Sb2xlIEFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz51bml0SGVhZEFzc2lnbm1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+YWRtaW5DbGVya0Fzc2lnbm1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+ZGVwdENoYWlyQXNzaWdubWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE90aGVycyBHcm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj53b3JrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5GYWN1bHR5IExvYWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmZvcm1hdF9saXN0X2J1bGxldGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5GYWN1bHR5IExpc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPnBlbmRpbmdfYWN0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UGVuZGluZyBBcHByb3ZhbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwcHJvdmFsLWNvdW50XCI+MjY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPmhvbWVwYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+c2lnbkluPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+cGFzc3dvcmRGb3Jnb3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5wYXNzd29yZENoYW5nZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPmdlbmVyYXRlUmVwb3J0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPmRvd25sb2FkRmFjdWx0eUluZm88L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlUmVtb3ZlQ29va2llfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5sb2dvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Mb2dvdXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvYXNpZGU+XHJcblxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxKSB7XHJcbiAgcmV0dXJuIGNvb2tpZS5wYXJzZShyZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgXCJcIiA6IGRvY3VtZW50LmNvb2tpZSlcclxufVxyXG5cclxuLy8gY2hlY2sgdG9rZW4gaWYgZXhwaXJlZFxyXG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcmVkKHVzZXIpIHtcclxuICBsZXQgZGVjb2RlZCA9IGp3dC5kZWNvZGUodXNlcilcclxuICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXHJcbiAgcmV0dXJuIGRlY29kZWQgJiYgZGVjb2RlZC5leHAgPCBub3dcclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=