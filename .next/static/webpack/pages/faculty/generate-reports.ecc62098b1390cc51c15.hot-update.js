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
            href: "{% url 'employmentStatus' %}",
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
            href: "{% url 'attainedDegrees' %}",
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
            href: "{% url 'personalInformation' %}",
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
            href: "{% url 'education' %}",
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
            href: "{% url 'workExperience' %}",
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
            href: "{% url 'publicService' %}",
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
            href: "{% url 'publications' %}",
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
            href: "{% url 'trainingsAndSeminars' %}",
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
            href: "{% url 'licensureExams' %}",
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
            href: "{% url 'researchGrants' %}",
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
            href: "{% url 'unitHeadAssignment' %}",
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
            href: "{% url 'adminClerkAssignment' %}",
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
            href: "{% url 'deptChairAssignment' %}",
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
          href: "{% url 'facultyLoad' %}",
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
          href: "{% url 'facultyList' %}",
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
          href: "{% url 'pendingApprovals' %}",
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
          href: "{% url 'homepage' %}",
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
          href: "{% url 'signIn' %}",
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
          href: "{% url 'passwordForgot' %}",
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
          href: "{% url 'passwordChange' %}",
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
          href: "{% url 'generateReports' %}",
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
          href: "",
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiaGFuZGxlUmVtb3ZlQ29va2llIiwicGF0aCIsImZhY3VsdHkiLCJzdGFmZiIsInJvbGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURvQixvQkFHdUJDLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FIakM7QUFBQTtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxTQUhJO0FBQUEsTUFHT0MsWUFIUDs7QUFLcEIsV0FBU0Msa0JBQVQsR0FBOEI7QUFDMUJELGdCQUFZLENBQUMsTUFBRCxFQUFTO0FBQUNFLFVBQUksRUFBQztBQUFOLEtBQVQsQ0FBWjtBQUNIOztBQUVELE1BQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsTUFBR1YsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBZCxJQUFtQlgsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBakMsSUFBc0NYLEtBQUssQ0FBQ1csSUFBTixJQUFjLENBQXZELEVBQTBEO0FBQ3RERCxTQUFLLEdBQUcsS0FBUjs7QUFDQSxRQUFHVixLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFkLElBQW1CWCxLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFwQyxFQUF1QztBQUNuQ0YsYUFBTyxHQUFHLEtBQVY7QUFDSDtBQUNKOztBQWpCbUIsa0JB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QUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6SUosZUE4SUk7QUFBRyxjQUFJLEVBQUMsRUFBUjtBQUFXLG1CQUFTLEVBQUVBLFFBQVEsR0FBRyxJQUFILEdBQVUsUUFBeEM7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlJSixlQW1KSTtBQUFHLGNBQUksRUFBQyxFQUFSO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakRKO0FBME5EOztHQW5QTWQsTztVQUNVRyxrRCxFQUU0QkMsb0Q7OztLQUh0Q0osTztBQXFQUCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mYWN1bHR5L2dlbmVyYXRlLXJlcG9ydHMuZWNjNjIwOThiMTM5MGNjNTFjMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7IFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVDb29raWUoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKFwidXNlclwiLCB7cGF0aDonLyd9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmFjdWx0eSA9IHRydWVcclxuICAgIGxldCBzdGFmZiA9IHRydWVcclxuXHJcbiAgICBpZihwcm9wcy5yb2xlID09IDEgfHwgcHJvcHMucm9sZSA9PSAyIHx8IHByb3BzLnJvbGUgPT0gMykge1xyXG4gICAgICAgIHN0YWZmID0gZmFsc2VcclxuICAgICAgICBpZihwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIGZhY3VsdHkgPSBmYWxzZVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJmYWxzZVwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIFx0c2V0QWN0aXZlKCFpc0FjdGl2ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgIDxkaXYgaWQ9XCJzaWRlYmFyXCI+XHJcblx0Ly8gICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1pbmZvIGNvbC0xMiBkLW1kLW5vbmUgdGV4dC1jZW50ZXJcIiBvbkNsaWNrID0ge2hhbmRsZVRvZ2dsZX0+IE1haW4gTWVudSA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPGRpdiBpZCA9IFwibWVudVwiIGNsYXNzTmFtZSA9IHtpc0FjdGl2ZSA/IG51bGwgOiBcImQtbm9uZSBkLW1kLWJsb2NrXCJ9PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG5cdC8vIFx0XHQ8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnlcIiBkYXRhLXRvZ2dsZSA9IFwiY29sbGFwc2VcIiBkYXRhLXRhcmdldCA9IFwiI2ZhY3VsdHlNZW51XCIgYXJpYS1jb250cm9scyA9IFwiZmFjdWx0eU1lbnVcIj4gRmFjdWx0eSA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGlkID0gXCJmYWN1bHR5TWVudVwiIGNsYXNzTmFtZSA9IFwiY29sbGFwc2Ugc2hvd1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHlcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eVwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RGFzaGJvYXJkPC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2Jhc2ljLWluZm9cIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkJhc2ljIEluZm9ybWF0aW9uPC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvYWNjb21wbGlzaG1lbnRcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QWNjb21wbGlzaG1lbnQ8L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9mYWN1bHR5LWxvYWRcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9mYWN1bHR5LWxvYWRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTG9hZDwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3ZpZXcvYWxsXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3ZpZXcvYWxsXCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5GYWN1bHR5IExpc3Q8L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hcHByb3ZhbFwiIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYXBwcm92YWxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PiBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpbmcgQXBwcm92YWxzICZuYnNwO3twcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50ID4gMCAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj57cHJvcHMuYXBwcm92YWxMaXN0LmZhY3VsdHlDb3VudH08L3NwYW4+fVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyBzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9hZG1pblwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWRtaW5cIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuXHQvLyBcdCAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIHByb3BzLnJvbGVBc3NpZ25tZW50ICYmIDxMaW5rIGhyZWYgPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiIH19PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgUm9sZSBBc3NpZ25tZW50ICZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPiE8L3NwYW4+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiAhcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnRcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHQvLyBcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGNvbC0xMlwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1kYW5nZXJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVDb29raWV9PkxvZyBPdXQ8L2E+PC9MaW5rPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdC8vIFx0PHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0XHQjbWVudSB7XHJcbiAgXHQvLyBcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3ODIzO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHRcdC5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc3tcclxuXHQvLyBcdFx0XHR0ZXh0LWluZGVudDoyMCU7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0I2FjdGl2ZXtcclxuXHQvLyBcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OTE5O1xyXG5cdC8vIFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHRgfTwvc3R5bGU+XHJcbiAgICAvLyAgICAgICAgIDwvZGl2PlxyXG5cdC8vIDwvZGl2Plx0XHRcdFxyXG4gICAgXHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY2xvc2VcIiBpZD1cImNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+Y2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgey8qIERhc2hib2FyZCBHcm91cCAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5ncmlkX3ZpZXc8L3NwYW4+RGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnYWNjb21wbGlzaG1lbnRDb3VudCcgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWNjb21wbGlzaG1lbnQgQ291bnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnZW1wbG95bWVudFN0YXR1cycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RW1wbG95bWVudCBTdGF0dXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnYXR0YWluZWREZWdyZWVzJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BdHRhaW5lZCBEZWdyZWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQmFzaWMgSW5mb3JtYXRpb24gR3JvdXAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPnBlcnNvbjwvc3Bhbj5CYXNpYyBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3BlcnNvbmFsSW5mb3JtYXRpb24nICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5wZXJzb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QZXJzb25hbCBJbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnZWR1Y2F0aW9uJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FZHVjYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICd3b3JrRXhwZXJpZW5jZScgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+V29yayBFeHBlcmllbmNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEFjY29tcGxpc2htZW50IEdyb3VwICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmVtb2ppX2V2ZW50czwvc3Bhbj5BY2NvbXBsaXNobWVudFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3B1YmxpY1NlcnZpY2UnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlB1YmxpYyBTZXJ2aWNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3B1YmxpY2F0aW9ucycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHVibGljYXRpb25zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3RyYWluaW5nc0FuZFNlbWluYXJzJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UcmFpbmluZ3MgYW5kIFNlbWluYXJzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2xpY2Vuc3VyZUV4YW1zJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MaWNlbnN1cmUgRXhhbXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAncmVzZWFyY2hHcmFudHMnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJlc2VhcmNoIEdyYW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFJvbGUgQXNzaWdubWVudCBHcm91cCAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5Sb2xlIEFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICd1bml0SGVhZEFzc2lnbm1lbnQnICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnVuaXRIZWFkQXNzaWdubWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdhZG1pbkNsZXJrQXNzaWdubWVudCcgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+YWRtaW5DbGVya0Fzc2lnbm1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAnZGVwdENoYWlyQXNzaWdubWVudCcgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+ZGVwdENoYWlyQXNzaWdubWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE90aGVycyBHcm91cCAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdmYWN1bHR5TG9hZCcgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+d29yazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RmFjdWx0eSBMb2FkPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdmYWN1bHR5TGlzdCcgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+Zm9ybWF0X2xpc3RfYnVsbGV0ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZhY3VsdHkgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInslIHVybCAncGVuZGluZ0FwcHJvdmFscycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+cGVuZGluZ19hY3Rpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QZW5kaW5nIEFwcHJvdmFsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBwcm92YWwtY291bnRcIj4yNjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdob21lcGFnZScgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPmhvbWVwYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdzaWduSW4nICV9XCIgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IG51bGwgOiBcImFjdGl2ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFzc2lnbm1lbnRfaW5kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5zaWduSW48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3Bhc3N3b3JkRm9yZ290JyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+cGFzc3dvcmRGb3Jnb3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ3Bhc3N3b3JkQ2hhbmdlJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+cGFzc3dvcmRDaGFuZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7JSB1cmwgJ2dlbmVyYXRlUmVwb3J0cycgJX1cIiBjbGFzc05hbWU9e2lzQWN0aXZlID8gbnVsbCA6IFwiYWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPmdlbmVyYXRlUmVwb3J0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBudWxsIDogXCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hc3NpZ25tZW50X2luZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+ZG93bmxvYWRGYWN1bHR5SW5mbzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+bG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Mb2dvdXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2FzaWRlPlxyXG5cclxuXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==