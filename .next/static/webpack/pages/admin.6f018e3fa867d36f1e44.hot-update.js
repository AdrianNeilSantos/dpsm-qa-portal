self["webpackHotUpdate_N_E"]("pages/admin",{

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
            className: "{% if request.resolver_match.view_name == 'attainedDegrees' %} active {% endif %}",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwic2V0Q29va2llIiwicmVtb3ZlQ29va2llIiwiaGFuZGxlUmVtb3ZlQ29va2llIiwicGF0aCIsImZhY3VsdHkiLCJzdGFmZiIsInJvbGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURvQixvQkFHdUJDLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FIakM7QUFBQTtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxTQUhJO0FBQUEsTUFHT0MsWUFIUDs7QUFLcEIsV0FBU0Msa0JBQVQsR0FBOEI7QUFDMUJELGdCQUFZLENBQUMsTUFBRCxFQUFTO0FBQUNFLFVBQUksRUFBQztBQUFOLEtBQVQsQ0FBWjtBQUNIOztBQUVELE1BQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsTUFBR1YsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBZCxJQUFtQlgsS0FBSyxDQUFDVyxJQUFOLElBQWMsQ0FBakMsSUFBc0NYLEtBQUssQ0FBQ1csSUFBTixJQUFjLENBQXZELEVBQTBEO0FBQ3RERCxTQUFLLEdBQUcsS0FBUjs7QUFDQSxRQUFHVixLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFkLElBQW1CWCxLQUFLLENBQUNXLElBQU4sSUFBYyxDQUFwQyxFQUF1QztBQUNuQ0YsYUFBTyxHQUFHLEtBQVY7QUFDSDtBQUNKOztBQWpCbUIsa0JBbUJVRywrQ0FBUSxDQUFDLE9BQUQsQ0FuQmxCO0FBQUEsTUFtQmJDLFFBbkJhO0FBQUEsTUFtQkhDLFNBbkJHOztBQXFCcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQkQsYUFBUyxDQUFDLENBQUNELFFBQUYsQ0FBVDtBQUNBLEdBRkQ7O0FBSUE7QUFBQTtBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0g7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNHO0FBQ0E7QUFFSDtBQUNBO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNIO0FBRU87QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRSxPQUFoQjtBQUF3QixZQUFFLEVBQUMsV0FBM0I7QUFBQSxpQ0FDSTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU9JO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBRUk7QUFBUSxtQkFBUyxFQUFDLGNBQWxCO0FBQUEsa0NBQWlDO0FBQU0scUJBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWpDLDRCQUNJO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFDLGlDQUFSO0FBQTBDLHFCQUFTLEVBQUVBLFFBQVEsR0FBRyxRQUFILEdBQWMsSUFBM0U7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBRyxnQkFBSSxFQUFDLDhCQUFSO0FBQXVDLHFCQUFTLEVBQUVBLFFBQVEsR0FBRyxRQUFILEdBQWMsSUFBeEU7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBV0k7QUFBRyxnQkFBSSxFQUFDLDZCQUFSO0FBQXNDLHFCQUFTLEVBQUMsbUZBQWhEO0FBQUEsb0NBQ0k7QUFBTSx1QkFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakRKO0FBMkZEOztHQXBITWQsTztVQUNVRyxrRCxFQUU0QkMsb0Q7OztLQUh0Q0osTztBQXNIUCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi42ZjAxOGUzZmE4NjdkMzZmMWU0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHsgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWUsIHJlbW92ZUNvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNvb2tpZSgpIHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJ1c2VyXCIsIHtwYXRoOicvJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmYWN1bHR5ID0gdHJ1ZVxyXG4gICAgbGV0IHN0YWZmID0gdHJ1ZVxyXG5cclxuICAgIGlmKHByb3BzLnJvbGUgPT0gMSB8fCBwcm9wcy5yb2xlID09IDIgfHwgcHJvcHMucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgc3RhZmYgPSBmYWxzZVxyXG4gICAgICAgIGlmKHByb3BzLnJvbGUgPT0gMiB8fCBwcm9wcy5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgZmFjdWx0eSA9IGZhbHNlXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgXHRzZXRBY3RpdmUoIWlzQWN0aXZlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdiBpZD1cInNpZGViYXJcIj5cclxuXHQvLyAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LWluZm8gY29sLTEyIGQtbWQtbm9uZSB0ZXh0LWNlbnRlclwiIG9uQ2xpY2sgPSB7aGFuZGxlVG9nZ2xlfT4gTWFpbiBNZW51IDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGlkID0gXCJtZW51XCIgY2xhc3NOYW1lID0ge2lzQWN0aXZlID8gbnVsbCA6IFwiZC1ub25lIGQtbWQtYmxvY2tcIn0+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcblx0Ly8gXHRcdDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeVwiIGRhdGEtdG9nZ2xlID0gXCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0ID0gXCIjZmFjdWx0eU1lbnVcIiBhcmlhLWNvbnRyb2xzID0gXCJmYWN1bHR5TWVudVwiPiBGYWN1bHR5IDwvYT5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgaWQgPSBcImZhY3VsdHlNZW51XCIgY2xhc3NOYW1lID0gXCJjb2xsYXBzZSBzaG93XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eVwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5EYXNoYm9hcmQ8L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9iYXNpYy1pbmZvXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvYmFzaWMtaW5mb1wiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+QmFzaWMgSW5mb3JtYXRpb248L2E+PC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgeyAhc3RhZmYgJiYgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9hY2NvbXBsaXNobWVudFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2FjY29tcGxpc2htZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5BY2NvbXBsaXNobWVudDwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiIH19PjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L2ZhY3VsdHktbG9hZFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMb2FkPC9hPjwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiB9fT48YSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIFwiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvdmlldy9hbGxcIiA/ICBcImFjdGl2ZVwiICA6IFwiaW5hY3RpdmVcIiB9PkZhY3VsdHkgTGlzdDwvYT48L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7ICFzdGFmZiAmJiAhZmFjdWx0eSAmJiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9mYWN1bHR5L2FwcHJvdmFsXCIgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgXCIgaWQgPSB7IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvZmFjdWx0eS9hcHByb3ZhbFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbHMgJm5ic3A7e3Byb3BzLmFwcHJvdmFsTGlzdC5mYWN1bHR5Q291bnQgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPntwcm9wcy5hcHByb3ZhbExpc3QuZmFjdWx0eUNvdW50fTwvc3Bhbj59XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L0xpbms+IH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB7IHN0YWZmICYmIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2FkbWluXCIgfX0+PGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyBcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hZG1pblwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+RmFjdWx0eSBMaXN0PC9hPjwvTGluaz4gfVxyXG5cdC8vIFx0ICAgICAgICAgICAgeyAhc3RhZmYgJiYgIWZhY3VsdHkgJiYgcHJvcHMucm9sZUFzc2lnbm1lbnQgJiYgPExpbmsgaHJlZiA9e3sgcGF0aG5hbWU6IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgfX0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3NcIiBpZCA9IHsgcm91dGVyLnBhdGhuYW1lID09PSBcIi9mYWN1bHR5L3JvbGUtYXNzaWdubWVudFwiID8gIFwiYWN0aXZlXCIgIDogXCJpbmFjdGl2ZVwiIH0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlIEFzc2lnbm1lbnQgJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ITwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz4gfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgIXN0YWZmICYmICFmYWN1bHR5ICYmICFwcm9wcy5yb2xlQXNzaWdubWVudCAmJiA8TGluayBocmVmID17eyBwYXRobmFtZTogXCIvZmFjdWx0eS9yb2xlLWFzc2lnbm1lbnRcIiB9fT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBsaXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc1wiIGlkID0geyByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ZhY3VsdHkvcm9sZS1hc3NpZ25tZW50XCIgPyAgXCJhY3RpdmVcIiAgOiBcImluYWN0aXZlXCIgfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGUgQXNzaWdubWVudFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9MaW5rPiB9XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cdC8vIFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgY29sLTEyXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gbGlzdC1ncm91cC1pdGVtLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNvb2tpZX0+TG9nIE91dDwvYT48L0xpbms+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0Ly8gXHQ8c3R5bGUganN4PntgXHJcblx0Ly8gXHRcdCNtZW51IHtcclxuICBcdC8vIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTc4MjM7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0Lmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNze1xyXG5cdC8vIFx0XHRcdHRleHQtaW5kZW50OjIwJTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0XHQjYWN0aXZle1xyXG5cdC8vIFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDU5MTk7XHJcblx0Ly8gXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdGB9PC9zdHlsZT5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcblx0Ly8gPC9kaXY+XHRcdFx0XHJcbiAgICBcclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjbG9zZVwiIGlkPVwiY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5jbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICB7LyogRGFzaGJvYXJkIEdyb3VwICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmdyaWRfdmlldzwvc3Bhbj5EYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdhY2NvbXBsaXNobWVudENvdW50JyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BY2NvbXBsaXNobWVudCBDb3VudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdlbXBsb3ltZW50U3RhdHVzJyAlfVwiIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FbXBsb3ltZW50IFN0YXR1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwieyUgdXJsICdhdHRhaW5lZERlZ3JlZXMnICV9XCIgY2xhc3NOYW1lPVwieyUgaWYgcmVxdWVzdC5yZXNvbHZlcl9tYXRjaC52aWV3X25hbWUgPT0gJ2F0dGFpbmVkRGVncmVlcycgJX0gYWN0aXZlIHslIGVuZGlmICV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXNzaWdubWVudF9pbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BdHRhaW5lZCBEZWdyZWVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2FzaWRlPlxyXG5cclxuXHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==