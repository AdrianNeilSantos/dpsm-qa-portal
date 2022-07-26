self["webpackHotUpdate_N_E"]("pages/faculty/generate-reports",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\components\\sidebar.js",
    _s = $RefreshSig$();






function Sidebar(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)(["user"]),
      _useCookies2 = (0,C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  function handleRemoveCookie() {
    removeCookie("user", {
      path: '/'
    });
  }

  var faculty = true;
  var staff = true;

  if (props.role == 1 || props.role == 2 || props.role == 3) {
    staff = false;

    if (props.role == 2 || props.role == 3) {
      faculty = false;
    }
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("false"),
      isActive = _useState[0],
      setActive = _useState[1];

  var handleToggle = function handleToggle() {
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
            href: "{% url 'accomplishmentCount' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'employmentStatus' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'attainedDegrees' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'personalInformation' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'education' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'workExperience' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'publicService' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'publications' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'trainingsAndSeminars' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'licensureExams' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'researchGrants' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'unitHeadAssignment' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'adminClerkAssignment' %}",
            className: isActive ? "active" : null,
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
            href: "{% url 'deptChairAssignment' %}",
            className: isActive ? "active" : null,
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
          href: "{% url 'facultyLoad' %}",
          className: isActive ? "active" : null,
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
          href: "{% url 'facultyList' %}",
          className: isActive ? "active" : null,
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
          href: "{% url 'pendingApprovals' %}",
          className: isActive ? "active" : null,
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
          href: "{% url 'homepage' %}",
          className: isActive ? "active" : null,
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
          href: "{% url 'signIn' %}",
          className: isActive ? "active" : null,
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
          href: "{% url 'passwordForgot' %}",
          className: "{% if request.resolver_match.view_name == 'passwordForgot' %} active {% endif %}",
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
          href: "{% url 'passwordChange' %}",
          className: "{% if request.resolver_match.view_name == 'passwordChange' %} active {% endif %}",
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
          href: "{% url 'generateReports' %}",
          className: "{% if request.resolver_match.view_name == 'generateReports' %} active {% endif %}",
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
          href: "{% url 'downloadFacultyInfo' %}",
          className: "{% if request.resolver_match.view_name == 'downloadFacultyInfo' %} active {% endif %}",
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "{% url 'signIn' %}",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons-sharp",
            children: "logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
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

_s(Sidebar, "yZaJVGC5RkOfQc1+BZNiFFjZ1s4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiaGFuZGxlUmVtb3ZlQ29va2llIiwicGF0aCIsImZhY3VsdHkiLCJzdGFmZiIsInJvbGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURvQixvQkFHdUJDLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FIakM7QUFBQTtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxTQUhJO0FBQUEsTUFHT0MsWUFIUDs7QUFLcEIsV0FBU0Msa0JBQVQsR0FBOEI7QUFDMUJELGdCQUFZLENBQUMsTUFBRCxFQUFTO0FBQUNFLFVBQUksRUFBQztBQUFOLEtBQVQsQ0FBWjtBQUNIOztBQUVELE1BQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsTUFBR1YsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBZCxJQUFtQlgsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBakMsSUFBc0NYLEtBQUssQ0FBQ1csSUFBTixJQUFjLENBQXZELEVBQTBEO0FBQ3RERCxTQUFLLEdBQUcsS0FBUjs7QUFDQSxRQUFHVixLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFkLElBQW1CWCxLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFwQyxFQUF1QztBQUNuQ0YsYUFBTyxHQUFHLEtBQVY7QUFDSDtBQUNKOztBQWpCbUIsa0JB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6SUosZUE4SUk7QUFBRyxjQUFJLEVBQUMsaUNBQVI7QUFBMEMsbUJBQVMsRUFBQyx1RkFBcEQ7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlJSixlQW1KSTtBQUFHLGNBQUksRUFBQyxvQkFBUjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpESjtBQTBORDs7R0FuUE1kLE87VUFDVUcsa0QsRUFFNEJDLG9EOzs7S0FIdENKLE87QUFxUFAsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFjdWx0eS9nZW5lcmF0ZS1yZXBvcnRzLmRkODY3Y2JhYmJlZDgxN2E4OTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcihwcm9wcykgeyBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlQ29va2llKCkge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcInVzZXJcIiwge3BhdGg6Jy8nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhY3VsdHkgPSB0cnVlXHJcbiAgICBsZXQgc3RhZmYgPSB0cnVlXHJcblxyXG4gICAgaWYocHJvcHMucm9sZSA9PSAxIHx8IHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICBzdGFmZiA9IGZhbHNlXHJcbiAgICAgICAgaWYocHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICBmYWN1bHR5ID0gZmFsc2VcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFwiZmFsc2VcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBcdHNldEFjdGl2ZSghaXNBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIC8vICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxyXG5cdC8vICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtaW5mbyBjb2wtMTIgZC1tZC1ub25lIHRleHQtY2VudGVyXCIgb25DbGljayA9IHtoYW5kbGVUb2dnbGV9PiBNYWluIE1lbnUgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDxkaXYgaWQgPSBcIm1lbnVcIiBjbGFzc05hbWUgPSB7aXNBY3RpdmUgPyBudWxsIDogXCJkLW5vbmUgZC1tZC1ibG9ja1wifT5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuXHQvLyBcdFx0PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5XCIgZGF0YS10b2dnbGUgPSBcImNvbGxhcHNlXCIgZGF0YS10YXJnZXQgPSBcIiNmYWN1bHR5TWVudVwiIGFyaWEtY29udHJvbHMgPSBcImZhY3VsdHlNZW51XCI+IEZhY3VsdHkgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBpZCA9IFwiZmFjdWx0eU1lbnVcIiBjbGFzc05hbWUgPSBcImNvbGxhcHNlIHNob3dcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHlcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkRhc2hib2FyZDwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5CYXNpYyBJbmZvcm1hdGlvbjwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkFjY29tcGxpc2htZW50PC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvZmFjdWx0eS1sb2FkXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExvYWQ8L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS92aWV3L2FsbFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS92aWV3L2FsbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT4gXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFscyAmbmJzcDt7cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnR9PC9zcGFuPn1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvYWRtaW5cIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FkbWluXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcblx0Ly8gXHQgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiBwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudCAmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj4hPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgIXByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcblx0Ly8gXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBjb2wtMTJcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tZGFuZ2VyXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlQ29va2llfT5Mb2cgT3V0PC9hPjwvTGluaz5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQvLyBcdDxzdHlsZSBqc3g+e2BcclxuXHQvLyBcdFx0I21lbnUge1xyXG4gIFx0Ly8gXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxNzgyMztcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0XHQubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3N7XHJcblx0Ly8gXHRcdFx0dGV4dC1pbmRlbnQ6MjAlO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHRcdCNhY3RpdmV7XHJcblx0Ly8gXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNTkxOTtcclxuXHQvLyBcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0YH08L3N0eWxlPlxyXG4gICAgLy8gICAgICAgICA8L2Rpdj5cclxuXHQvLyA8L2Rpdj5cdFx0XHRcclxuICAgIFxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImNsb3NlXCIgaWQ9XCJjbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgR3JvdXAgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+Z3JpZF92aWV3PC9zcGFuPkRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2FjY29tcGxpc2htZW50Q291bnQnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFjY29tcGxpc2htZW50IENvdW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2VtcGxveW1lbnRTdGF0dXMnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVtcGxveW1lbnQgU3RhdHVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2F0dGFpbmVkRGVncmVlcycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QXR0YWluZWQgRGVncmVlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJhc2ljIEluZm9ybWF0aW9uIEdyb3VwICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5wZXJzb248L3NwYW4+QmFzaWMgSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdwZXJzb25hbEluZm9ybWF0aW9uJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+cGVyc29uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGVyc29uYWwgSW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2VkdWNhdGlvbicgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RWR1Y2F0aW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnd29ya0V4cGVyaWVuY2UnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldvcmsgRXhwZXJpZW5jZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBY2NvbXBsaXNobWVudCBHcm91cCAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5lbW9qaV9ldmVudHM8L3NwYW4+QWNjb21wbGlzaG1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdwdWJsaWNTZXJ2aWNlJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QdWJsaWMgU2VydmljZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdwdWJsaWNhdGlvbnMnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlB1YmxpY2F0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICd0cmFpbmluZ3NBbmRTZW1pbmFycycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VHJhaW5pbmdzIGFuZCBTZW1pbmFyczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdsaWNlbnN1cmVFeGFtcycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TGljZW5zdXJlIEV4YW1zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3Jlc2VhcmNoR3JhbnRzJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZXNlYXJjaCBHcmFudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSb2xlIEFzc2lnbm1lbnQgR3JvdXAgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+Um9sZSBBc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAndW5pdEhlYWRBc3NpZ25tZW50JyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz51bml0SGVhZEFzc2lnbm1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnYWRtaW5DbGVya0Fzc2lnbm1lbnQnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPmFkbWluQ2xlcmtBc3NpZ25tZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2RlcHRDaGFpckFzc2lnbm1lbnQnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPmRlcHRDaGFpckFzc2lnbm1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBPdGhlcnMgR3JvdXAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnZmFjdWx0eUxvYWQnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPndvcms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZhY3VsdHkgTG9hZDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnZmFjdWx0eUxpc3QnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmZvcm1hdF9saXN0X2J1bGxldGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5GYWN1bHR5IExpc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3BlbmRpbmdBcHByb3ZhbHMnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPnBlbmRpbmdfYWN0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UGVuZGluZyBBcHByb3ZhbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFwcHJvdmFsLWNvdW50XCI+MjY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnaG9tZXBhZ2UnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5ob21lcGFnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnc2lnbkluJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+c2lnbkluPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdwYXNzd29yZEZvcmdvdCcgJX1cIiBjbGFzc05hbWU9XCJ7JSBpZiByZXF1ZXN0LnJlc29sdmVyX21hdGNoLnZpZXdfbmFtZSA9PSAncGFzc3dvcmRGb3Jnb3QnICV9IGFjdGl2ZSB7JSBlbmRpZiAlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnBhc3N3b3JkRm9yZ290PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdwYXNzd29yZENoYW5nZScgJX1cIiBjbGFzc05hbWU9XCJ7JSBpZiByZXF1ZXN0LnJlc29sdmVyX21hdGNoLnZpZXdfbmFtZSA9PSAncGFzc3dvcmRDaGFuZ2UnICV9IGFjdGl2ZSB7JSBlbmRpZiAlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnBhc3N3b3JkQ2hhbmdlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdnZW5lcmF0ZVJlcG9ydHMnICV9XCIgY2xhc3NOYW1lPVwieyUgaWYgcmVxdWVzdC5yZXNvbHZlcl9tYXRjaC52aWV3X25hbWUgPT0gJ2dlbmVyYXRlUmVwb3J0cycgJX0gYWN0aXZlIHslIGVuZGlmICV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Z2VuZXJhdGVSZXBvcnRzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdkb3dubG9hZEZhY3VsdHlJbmZvJyAlfVwiIGNsYXNzTmFtZT1cInslIGlmIHJlcXVlc3QucmVzb2x2ZXJfbWF0Y2gudmlld19uYW1lID09ICdkb3dubG9hZEZhY3VsdHlJbmZvJyAlfSBhY3RpdmUgeyUgZW5kaWYgJX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5kb3dubG9hZEZhY3VsdHlJbmZvPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdzaWduSW4nICV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5sb2dvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvZ291dDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvYXNpZGU+XHJcblxyXG5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9