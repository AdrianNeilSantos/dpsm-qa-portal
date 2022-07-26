(function() {
var exports = {};
exports.id = "pages/faculty/generate-reports";
exports.ids = ["pages/faculty/generate-reports"];
exports.modules = {

/***/ "./pages/faculty/generate-reports.js":
/*!*******************************************!*\
  !*** ./pages/faculty/generate-reports.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _services_reports_generateReports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reports/generateReports */ "./services/reports/generateReports.js");

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\faculty\\generate-reports.js";







function GenerateReports(props) {
  let errorMessage = "";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-2935567750",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      userId: props.data.userId,
      facultyId: props.data.facultyId,
      role: props.data.role,
      name: props.data.name,
      approvalList: props.approvalList,
      roleAssignmentFlag: props.roleAssignmentFlag,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
        className: "jsx-2935567750"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        align: "center",
        className: "jsx-2935567750",
        children: " Generate Reports "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        align: "center",
        className: "jsx-2935567750",
        children: " Select one or more categories to generate an Excel spreadsheet containing all faculty information pertaining to those categories "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
        className: "jsx-2935567750"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-2935567750" + " " + "jumbotron",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
          initialValues: {
            reports: []
          },
          onSubmit: async values => {
            try {
              if (values.reports.length > 0) {
                if (props.data.role == 3) {
                  (0,_services_reports_generateReports__WEBPACK_IMPORTED_MODULE_6__.default)(props.token.user, values.reports, null);
                } else if (props.data.role == 2) {
                  (0,_services_reports_generateReports__WEBPACK_IMPORTED_MODULE_6__.default)(props.token.user, values.reports, props.data.unitId);
                }

                values.reports = [];
              } else {
                let alert = document.getElementById("alert");
                alert.setAttribute("style", "visibility: visible");
                errorMessage = "Please select at least one accomplishment type";
              }
            } catch (err) {
              console.error(err.response.data.errors[0].message);
              errorMessage = err.response.data.errors[0].message;
              let alert = document.getElementById("alert");
              alert.setAttribute("style", "visibility: visible");
              return err;
            }
          },
          children: ({
            values,
            errors,
            touched,
            isSubmitting
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
            action: "",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              role: "alert",
              id: "alert",
              className: "jsx-2935567750" + " " + "alert alert-danger",
              children: errorMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              role: "group",
              "aria-labelledby": "checkbox-group",
              className: "jsx-2935567750",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "publicService"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "publicService",
                  className: "jsx-2935567750",
                  children: "\xA0Public Service Accomplishments"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "publication"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "publication",
                  className: "jsx-2935567750",
                  children: "\xA0Publications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "trainingSeminar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "trainingSeminar",
                  className: "jsx-2935567750",
                  children: "\xA0Training/Seminars"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "researchGrant"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "researchGrant",
                  className: "jsx-2935567750",
                  children: "\xA0Research Grants"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "licensureExam"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "licensureExam",
                  className: "jsx-2935567750",
                  children: "\xA0Licensure Exams"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2935567750" + " " + "form-check",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                  type: "checkbox",
                  name: "reports",
                  value: "education"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  class: "form-check-label",
                  for: "education",
                  className: "jsx-2935567750",
                  children: "\xA0Education"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
              className: "jsx-2935567750"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              disabled: isSubmitting,
              className: "jsx-2935567750" + " " + "btn btn-primary",
              children: "Generate Report"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2935567750",
      children: ".d-flex.jsx-2935567750{min-height:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#alert.jsx-2935567750{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWRyaWFcXERvY3VtZW50c1xcR2l0SHViXFxkcHNtLXFhLXBvcnRhbC1RQVxccGFnZXNcXGZhY3VsdHlcXGdlbmVyYXRlLXJlcG9ydHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0djLEFBR29CLEFBT0MsZ0JBTkEsRUFPbEIsZUFMYywwRUFDTSw2RkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhZHJpYVxcRG9jdW1lbnRzXFxHaXRIdWJcXGRwc20tcWEtcG9ydGFsLVFBXFxwYWdlc1xcZmFjdWx0eVxcZ2VuZXJhdGUtcmVwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgaXNFeHBpcmVkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIlxyXG5pbXBvcnQgZ2VuZXJhdGVSZXBvcnRzIGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcG9ydHMvZ2VuZXJhdGVSZXBvcnRzJ1xyXG5cclxuZnVuY3Rpb24gR2VuZXJhdGVSZXBvcnRzKHByb3BzKSB7XHJcblx0bGV0IGVycm9yTWVzc2FnZSA9IFwiXCJcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuICAgICAgICA8TGF5b3V0IHVzZXJJZD17cHJvcHMuZGF0YS51c2VySWR9IGZhY3VsdHlJZD17cHJvcHMuZGF0YS5mYWN1bHR5SWR9IHJvbGU9e3Byb3BzLmRhdGEucm9sZX0gbmFtZT17cHJvcHMuZGF0YS5uYW1lfSBhcHByb3ZhbExpc3Q9e3Byb3BzLmFwcHJvdmFsTGlzdH0gcm9sZUFzc2lnbm1lbnRGbGFnPXtwcm9wcy5yb2xlQXNzaWdubWVudEZsYWd9ID5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGgzIGFsaWduID0gXCJjZW50ZXJcIj4gR2VuZXJhdGUgUmVwb3J0cyA8L2gzPlxyXG5cdFx0XHQ8cCBhbGlnbiA9IFwiY2VudGVyXCI+IFNlbGVjdCBvbmUgb3IgbW9yZSBjYXRlZ29yaWVzIHRvIGdlbmVyYXRlIGFuIEV4Y2VsIHNwcmVhZHNoZWV0IGNvbnRhaW5pbmcgYWxsIGZhY3VsdHkgaW5mb3JtYXRpb24gcGVydGFpbmluZyB0byB0aG9zZSBjYXRlZ29yaWVzIDwvcD5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIj5cclxuXHRcdFx0XHQ8Rm9ybWlrXHJcblx0XHRcdFx0XHRpbml0aWFsVmFsdWVzPXt7cmVwb3J0czogW119fVxyXG5cdFx0XHRcdFx0b25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGlmKHZhbHVlcy5yZXBvcnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocHJvcHMuZGF0YS5yb2xlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGdlbmVyYXRlUmVwb3J0cyhwcm9wcy50b2tlbi51c2VyLCB2YWx1ZXMucmVwb3J0cywgbnVsbClcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvcHMuZGF0YS5yb2xlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGdlbmVyYXRlUmVwb3J0cyhwcm9wcy50b2tlbi51c2VyLCB2YWx1ZXMucmVwb3J0cywgcHJvcHMuZGF0YS51bml0SWQpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlcy5yZXBvcnRzID0gW11cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHRcdFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZSA9IFwiUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgYWNjb21wbGlzaG1lbnQgdHlwZVwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHRcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcblx0XHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9yTWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2hlY2tib3gtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXBvcnRzXCIgdmFsdWU9XCJwdWJsaWNTZXJ2aWNlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJwdWJsaWNTZXJ2aWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7UHVibGljIFNlcnZpY2UgQWNjb21wbGlzaG1lbnRzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcG9ydHNcIiB2YWx1ZT1cInB1YmxpY2F0aW9uXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJwdWJsaWNhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwO1B1YmxpY2F0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXBvcnRzXCIgdmFsdWU9XCJ0cmFpbmluZ1NlbWluYXJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInRyYWluaW5nU2VtaW5hclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwO1RyYWluaW5nL1NlbWluYXJzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcG9ydHNcIiB2YWx1ZT1cInJlc2VhcmNoR3JhbnRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJlc2VhcmNoR3JhbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDtSZXNlYXJjaCBHcmFudHNcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVwb3J0c1wiIHZhbHVlPVwibGljZW5zdXJlRXhhbVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwibGljZW5zdXJlRXhhbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwO0xpY2Vuc3VyZSBFeGFtc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcG9ydHNcIiB2YWx1ZT1cImVkdWNhdGlvblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZWR1Y2F0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7RWR1Y2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdHR5cGUgPSBcInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdEdlbmVyYXRlIFJlcG9ydFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0ey8qPExpbmsgaHJlZj1cIi9mYWN1bHR5XCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiTG9naW5cIj48L2lucHV0PjwvTGluaz4qL31cclxuXHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9Gb3JtaWs+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdC5kLWZsZXh7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoOyBcclxuXHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0XHQjYWxlcnQge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7IFxyXG4gICAgY29uc3QgdG9rZW4gPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcbiAgICBsZXQgZGF0YVxyXG4gICAgbGV0IHBlcnNvbmFsSW5mb1xyXG4gICAgbGV0IGFwcHJvdmFsTGlzdFxyXG4gICAgbGV0IGFjY29tcExpc3RcclxuICAgIGxldCBlbXBMaXN0XHJcbiAgICBsZXQgZWR1Y0xpc3RcclxuICAgIGxldCByb2xlQXNzaWdubWVudEZsYWcgPSBmYWxzZVxyXG4gICAgbGV0IHF1ZXJ5TGlzdFxyXG5cclxuICAgIGlmIChjb250ZXh0LnJlcykge1xyXG4gICAgICAgIGlmIChpc0V4cGlyZWQodG9rZW4udXNlcikgfHwgT2JqZWN0LmtleXModG9rZW4pLmxlbmd0aCA9PT0gMCAmJiB0b2tlbi5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBqd3QuZGVjb2RlKHRva2VuLnVzZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBmYWN1bHR5SWQgPSBkYXRhLmZhY3VsdHlJZFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4udXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwZXJzb25hbCA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYmFzaWMtaW5mby8nICsgZmFjdWx0eUlkLCBoZWFkZXIpXHJcbiAgICAgICAgICAgIHBlcnNvbmFsSW5mbyA9IGF3YWl0IHBlcnNvbmFsLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgbGV0IGFwcHJvdmFsVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9hcHByb3ZhbC8nICsgZmFjdWx0eUlkXHJcbiAgICAgICAgICAgIGxldCBhY2NvbXBVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvYWNjb21wbGlzaG1lbnQnXHJcbiAgICAgICAgICAgIGxldCBlbXBVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvZW1wbG95bWVudCdcclxuICAgICAgICAgICAgbGV0IGVkdWNVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L3JlcG9ydHMvZWR1Y2F0aW9uJ1xyXG4gICAgICAgICAgICBsZXQgcm9sZUFzc2lnbm1lbnRVUkwgPSBwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vdW5pdC9hc3NpZ25tZW50J1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIgfHwgZGF0YS5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92YWxVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjY29tcFVSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICBlbXBVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgZWR1Y1VSTCArPSAnP3VuaXRJZD0nICsgZGF0YS51bml0SWRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuYWNjb21wbGlzaG1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvbXBVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkICYmIGNvbnRleHQucXVlcnkudW5pdElkICE9IDApIGFjY29tcFVSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb250ZXh0LnF1ZXJ5LmVtcGxveW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBVUkwgKz0gJz8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkudW5pdElkKSBlbXBVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5kZWdyZWUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZHVjVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCkgZWR1Y1VSTCArPSAndW5pdElkPScgKyBjb250ZXh0LnF1ZXJ5LnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgYWNjb21wVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgYWNjb21wVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5lbXBsb3ltZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgZW1wVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgZW1wVVJMICs9ICcmZW5kRGF0ZT0nICsgY29udGV4dC5xdWVyeS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5kZWdyZWUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuc3RhcnREYXRlKSBlZHVjVVJMICs9ICcmc3RhcnREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbnRleHQucXVlcnkuZW5kRGF0ZSkgZWR1Y1VSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHByb3ZhbCA9IGF3YWl0IGZldGNoKGFwcHJvdmFsVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhd2FpdCBhcHByb3ZhbC5qc29uKClcclxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGlzdCA9IGFwcHJvdmFsTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvbXBSZXBvcnRzID0gYXdhaXQgZmV0Y2goYWNjb21wVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBhY2NvbXBMaXN0ID0gYXdhaXQgYWNjb21wUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGFjY29tcExpc3QgPSBhY2NvbXBMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcFJlcG9ydHMgPSBhd2FpdCBmZXRjaChlbXBVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGVtcExpc3QgPSBhd2FpdCBlbXBSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgZW1wTGlzdCA9IGVtcExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWR1Y1JlcG9ydHMgPSBhd2FpdCBmZXRjaChlZHVjVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBlZHVjTGlzdCA9IGF3YWl0IGVkdWNSZXBvcnRzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgZWR1Y0xpc3QgPSBlZHVjTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb2xlQXNzaWdubWVudHMgPSBhd2FpdCBmZXRjaChyb2xlQXNzaWdubWVudFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50TGlzdCA9IGF3YWl0IHJvbGVBc3NpZ25tZW50cy5qc29uKClcclxuICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50TGlzdCA9IHJvbGVBc3NpZ25tZW50TGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvbGVBc3NpZ25tZW50TGlzdCAmJiByb2xlQXNzaWdubWVudExpc3QuYXBwcm92ZXJSZW1hcmtzICE9IG51bGwpIHJvbGVBc3NpZ25tZW50RmxhZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnJvbGUgPT0gMyAmJiByb2xlQXNzaWdubWVudExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDEpIHsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL2ZhY3VsdHkvYmFzaWMtaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4gJiYgdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGFwcHJvdmFsTGlzdDogYXBwcm92YWxMaXN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcbiBleHBvcnQgZGVmYXVsdCBHZW5lcmF0ZVJlcG9ydHMiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\adria\\\\Documents\\\\GitHub\\\\dpsm-qa-portal-QA\\\\pages\\\\faculty\\\\generate-reports.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

async function getServerSideProps(context) {
  const token = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(context.req);
  let data;
  let personalInfo;
  let approvalList;
  let accompList;
  let empList;
  let educList;
  let roleAssignmentFlag = false;
  let queryList;

  if (context.res) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isExpired)(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(token.user);
      let facultyId = data.facultyId;
      let header = {
        headers: {
          'Authorization': 'Bearer ' + token.user
        }
      };
      const personal = await fetch("http://localhost:3001/api" + '/faculty/basic-info/' + facultyId, header);
      personalInfo = await personal.json();
      let approvalURL = "http://localhost:3001/api" + '/faculty/approval/' + facultyId;
      let accompURL = "http://localhost:3001/api" + '/faculty/reports/accomplishment';
      let empURL = "http://localhost:3001/api" + '/faculty/reports/employment';
      let educURL = "http://localhost:3001/api" + '/faculty/reports/education';
      let roleAssignmentURL = "http://localhost:3001/api" + '/faculty/basic-info/unit/assignment';

      if (data.role == 2 || data.role == 3) {
        if (data.role == 2) {
          approvalURL += '?unitId=' + data.unitId;
          roleAssignmentURL += '?unitId=' + data.unitId;
          accompURL += '?unitId=' + data.unitId;
          empURL += '?unitId=' + data.unitId;
          educURL += '?unitId=' + data.unitId;
        } else if (data.role == 3) {
          if (context.query.accomplishment == 1) {
            accompURL += '?';
            if (context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId;
          } else if (context.query.employment == 1) {
            empURL += '?';
            if (context.query.unitId) empURL += 'unitId=' + context.query.unitId;
          } else if (context.query.degree == 1) {
            educURL += '?';
            if (context.query.unitId) educURL += 'unitId=' + context.query.unitId;
          }
        }

        if (context.query.accomplishment == 1) {
          if (context.query.startDate) accompURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) accompURL += '&endDate=' + context.query.endDate;
        } else if (context.query.employment == 1) {
          if (context.query.startDate) empURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) empURL += '&endDate=' + context.query.endDate;
        } else if (context.query.degree == 1) {
          if (context.query.startDate) educURL += '&startDate=' + context.query.startDate;
          if (context.query.endDate) educURL += '&endDate=' + context.query.endDate;
        }

        const approval = await fetch(approvalURL, header);
        approvalList = await approval.json();
        approvalList = approvalList.result;
        const accompReports = await fetch(accompURL, header);
        accompList = await accompReports.json();
        accompList = accompList.result;
        const empReports = await fetch(empURL, header);
        empList = await empReports.json();
        empList = empList.result;
        const educReports = await fetch(educURL, header);
        educList = await educReports.json();
        educList = educList.result;
        const roleAssignments = await fetch(roleAssignmentURL, header);
        let roleAssignmentList = await roleAssignments.json();
        roleAssignmentList = roleAssignmentList.result;

        if (data.role == 2) {
          if (roleAssignmentList && roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true;
        } else if (data.role == 3 && roleAssignmentList) {
          roleAssignmentFlag = true;
        }
      } else if (data.role == 1) {
        return {
          redirect: {
            destination: '/faculty/basic-info',
            permanent: true
          }
        };
      }
    }
  }

  return {
    props: {
      token: token && token,
      data: data,
      approvalList: approvalList
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (GenerateReports);

/***/ }),

/***/ "./services/reports/generateReports.js":
/*!*********************************************!*\
  !*** ./services/reports/generateReports.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ generateReports; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function generateReports(token, checked, id) {
  try {
    if (token) {
      let header = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      let data = [];

      try {
        let url = '';

        if (id !== null) {
          url = "http://localhost:3001/api" + "/faculty/reports/accomplishment/download?unitId=" + id;
        } else {
          url = "http://localhost:3001/api" + "/faculty/reports/accomplishment/download";
        }

        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          url: url,
          method: 'POST',
          data: checked,
          headers: {
            Authorization: `Bearer ${token}`
          },
          responseType: 'blob'
        }).then(response => {
          if (response.data.type == 'application/json') {
            console.log(response.data);
            return response.data;
          }

          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'reports.xlsx'); //or any other extension

          document.body.appendChild(link);
          link.click();
          return true;
        });
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js-helpers_index_js"], function() { return __webpack_exec__("./pages/faculty/generate-reports.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2ZhY3VsdHkvZ2VuZXJhdGUtcmVwb3J0cy5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3NlcnZpY2VzL3JlcG9ydHMvZ2VuZXJhdGVSZXBvcnRzLmpzIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJjb29raWVcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiR2VuZXJhdGVSZXBvcnRzIiwicHJvcHMiLCJlcnJvck1lc3NhZ2UiLCJkYXRhIiwidXNlcklkIiwiZmFjdWx0eUlkIiwicm9sZSIsIm5hbWUiLCJhcHByb3ZhbExpc3QiLCJyb2xlQXNzaWdubWVudEZsYWciLCJyZXBvcnRzIiwidmFsdWVzIiwibGVuZ3RoIiwiZ2VuZXJhdGVSZXBvcnRzIiwidG9rZW4iLCJ1c2VyIiwidW5pdElkIiwiYWxlcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJtZXNzYWdlIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJwZXJzb25hbEluZm8iLCJhY2NvbXBMaXN0IiwiZW1wTGlzdCIsImVkdWNMaXN0IiwicXVlcnlMaXN0IiwicmVzIiwiaXNFeHBpcmVkIiwiT2JqZWN0Iiwia2V5cyIsImNvbnN0cnVjdG9yIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsImp3dCIsImhlYWRlciIsImhlYWRlcnMiLCJwZXJzb25hbCIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJhcHByb3ZhbFVSTCIsImFjY29tcFVSTCIsImVtcFVSTCIsImVkdWNVUkwiLCJyb2xlQXNzaWdubWVudFVSTCIsInF1ZXJ5IiwiYWNjb21wbGlzaG1lbnQiLCJlbXBsb3ltZW50IiwiZGVncmVlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImFwcHJvdmFsIiwicmVzdWx0IiwiYWNjb21wUmVwb3J0cyIsImVtcFJlcG9ydHMiLCJlZHVjUmVwb3J0cyIsInJvbGVBc3NpZ25tZW50cyIsInJvbGVBc3NpZ25tZW50TGlzdCIsImFwcHJvdmVyUmVtYXJrcyIsImNoZWNrZWQiLCJpZCIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJheGlvcyIsIm1ldGhvZCIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJ0eXBlIiwibG9nIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUMvQixNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFFRyxzQkFDRjtBQUFBO0FBQUEsNEJBQ00sOERBQUMsdURBQUQ7QUFBUSxZQUFNLEVBQUVELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxNQUEzQjtBQUFtQyxlQUFTLEVBQUVILEtBQUssQ0FBQ0UsSUFBTixDQUFXRSxTQUF6RDtBQUFvRSxVQUFJLEVBQUVKLEtBQUssQ0FBQ0UsSUFBTixDQUFXRyxJQUFyRjtBQUEyRixVQUFJLEVBQUVMLEtBQUssQ0FBQ0UsSUFBTixDQUFXSSxJQUE1RztBQUFrSCxrQkFBWSxFQUFFTixLQUFLLENBQUNPLFlBQXRJO0FBQW9KLHdCQUFrQixFQUFFUCxLQUFLLENBQUNRLGtCQUE5SztBQUFBLDhCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREssZUFFSjtBQUFJLGFBQUssRUFBRyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSSxlQUdMO0FBQUcsYUFBSyxFQUFHLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhLLGVBSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSyxlQUtMO0FBQUEsNENBQWlCLFdBQWpCO0FBQUEsK0JBQ0MsOERBQUMsMENBQUQ7QUFDQyx1QkFBYSxFQUFFO0FBQUNDLG1CQUFPLEVBQUU7QUFBVixXQURoQjtBQUVDLGtCQUFRLEVBQUUsTUFBT0MsTUFBUCxJQUFrQjtBQUM1QixnQkFBSTtBQUNILGtCQUFHQSxNQUFNLENBQUNELE9BQVAsQ0FBZUUsTUFBZixHQUF3QixDQUEzQixFQUE4QjtBQUM3QixvQkFBSVgsS0FBSyxDQUFDRSxJQUFOLENBQVdHLElBQVgsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDekJPLDRGQUFlLENBQUNaLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxJQUFiLEVBQW1CSixNQUFNLENBQUNELE9BQTFCLEVBQW1DLElBQW5DLENBQWY7QUFFQSxpQkFIRCxNQUdPLElBQUlULEtBQUssQ0FBQ0UsSUFBTixDQUFXRyxJQUFYLElBQW1CLENBQXZCLEVBQTBCO0FBQ2hDTyw0RkFBZSxDQUFDWixLQUFLLENBQUNhLEtBQU4sQ0FBWUMsSUFBYixFQUFtQkosTUFBTSxDQUFDRCxPQUExQixFQUFtQ1QsS0FBSyxDQUFDRSxJQUFOLENBQVdhLE1BQTlDLENBQWY7QUFDQTs7QUFDREwsc0JBQU0sQ0FBQ0QsT0FBUCxHQUFpQixFQUFqQjtBQUNBLGVBUkQsTUFTSztBQUNKLG9CQUFJTyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0FGLHFCQUFLLENBQUNHLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIscUJBQTVCO0FBQ0FsQiw0QkFBWSxHQUFHLGdEQUFmO0FBQ0E7QUFDRCxhQWZELENBZUUsT0FBT21CLEdBQVAsRUFBWTtBQUNiQyxxQkFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQUcsQ0FBQ0csUUFBSixDQUFhckIsSUFBYixDQUFrQnNCLE1BQWxCLENBQXlCLENBQXpCLEVBQTRCQyxPQUExQztBQUNBeEIsMEJBQVksR0FBR21CLEdBQUcsQ0FBQ0csUUFBSixDQUFhckIsSUFBYixDQUFrQnNCLE1BQWxCLENBQXlCLENBQXpCLEVBQTRCQyxPQUEzQztBQUNBLGtCQUFJVCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0FGLG1CQUFLLENBQUNHLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIscUJBQTVCO0FBQ0EscUJBQU9DLEdBQVA7QUFDQTtBQUNBLFdBekJGO0FBQUEsb0JBMkJFLENBQUM7QUFBRVYsa0JBQUY7QUFBVWMsa0JBQVY7QUFBa0JFLG1CQUFsQjtBQUEyQkM7QUFBM0IsV0FBRCxrQkFDRCw4REFBQyx3Q0FBRDtBQUFNLGtCQUFNLEVBQUMsRUFBYjtBQUFBLG9DQUNDO0FBQW9DLGtCQUFJLEVBQUMsT0FBekM7QUFBaUQsZ0JBQUUsRUFBQyxPQUFwRDtBQUFBLGtEQUFlLG9CQUFmO0FBQUEsd0JBQ0UxQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFJQztBQUFLLGtCQUFJLEVBQUMsT0FBVjtBQUFrQixpQ0FBZ0IsZ0JBQWxDO0FBQUE7QUFBQSxzQ0FDQztBQUFBLG9EQUFpQixZQUFqQjtBQUFBLHdDQUNDLDhEQUFDLHlDQUFEO0FBQU8sc0JBQUksRUFBQyxVQUFaO0FBQXVCLHNCQUFJLEVBQUMsU0FBNUI7QUFBc0MsdUJBQUssRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBTyx1QkFBSyxFQUFDLGtCQUFiO0FBQWdDLHFCQUFHLEVBQUMsZUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFPQztBQUFBLG9EQUFpQixZQUFqQjtBQUFBLHdDQUNDLDhEQUFDLHlDQUFEO0FBQU8sc0JBQUksRUFBQyxVQUFaO0FBQXVCLHNCQUFJLEVBQUMsU0FBNUI7QUFBc0MsdUJBQUssRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBTyx1QkFBSyxFQUFDLGtCQUFiO0FBQWdDLHFCQUFHLEVBQUMsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEQsZUFhQztBQUFBLG9EQUFpQixZQUFqQjtBQUFBLHdDQUNDLDhEQUFDLHlDQUFEO0FBQU8sc0JBQUksRUFBQyxVQUFaO0FBQXVCLHNCQUFJLEVBQUMsU0FBNUI7QUFBc0MsdUJBQUssRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBTyx1QkFBSyxFQUFDLGtCQUFiO0FBQWdDLHFCQUFHLEVBQUMsaUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJELGVBbUJDO0FBQUEsb0RBQWlCLFlBQWpCO0FBQUEsd0NBQ0MsOERBQUMseUNBQUQ7QUFBTyxzQkFBSSxFQUFDLFVBQVo7QUFBdUIsc0JBQUksRUFBQyxTQUE1QjtBQUFzQyx1QkFBSyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFPLHVCQUFLLEVBQUMsa0JBQWI7QUFBZ0MscUJBQUcsRUFBQyxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQkQsZUF5QkM7QUFBQSxvREFBaUIsWUFBakI7QUFBQSx3Q0FDQyw4REFBQyx5Q0FBRDtBQUFPLHNCQUFJLEVBQUMsVUFBWjtBQUF1QixzQkFBSSxFQUFDLFNBQTVCO0FBQXNDLHVCQUFLLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUVDO0FBQU8sdUJBQUssRUFBQyxrQkFBYjtBQUFnQyxxQkFBRyxFQUFDLGVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCRCxlQStCc0I7QUFBQSxvREFBaUIsWUFBakI7QUFBQSx3Q0FDcEIsOERBQUMseUNBQUQ7QUFBTyxzQkFBSSxFQUFDLFVBQVo7QUFBdUIsc0JBQUksRUFBQyxTQUE1QjtBQUFzQyx1QkFBSyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRG9CLGVBRXBCO0FBQU8sdUJBQUssRUFBQyxrQkFBYjtBQUFnQyxxQkFBRyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRCxlQTJDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEzQ0QsZUE2Q0M7QUFDQSxrQkFBSSxFQUFHLFFBRFA7QUFHQSxzQkFBUSxFQUFJMEIsWUFIWjtBQUFBLGtEQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERTtBQTZHRDs7QUFFSSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDOUMsUUFBTWhCLEtBQUssR0FBR2lCLHNEQUFZLENBQUNELE9BQU8sQ0FBQ0UsR0FBVCxDQUExQjtBQUNBLE1BQUk3QixJQUFKO0FBQ0EsTUFBSThCLFlBQUo7QUFDQSxNQUFJekIsWUFBSjtBQUNBLE1BQUkwQixVQUFKO0FBQ0EsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLFFBQUo7QUFDQSxNQUFJM0Isa0JBQWtCLEdBQUcsS0FBekI7QUFDQSxNQUFJNEIsU0FBSjs7QUFFQSxNQUFJUCxPQUFPLENBQUNRLEdBQVosRUFBaUI7QUFDYixRQUFJQyxtREFBUyxDQUFDekIsS0FBSyxDQUFDQyxJQUFQLENBQVQsSUFBeUJ5QixNQUFNLENBQUNDLElBQVAsQ0FBWTNCLEtBQVosRUFBbUJGLE1BQW5CLEtBQThCLENBQTlCLElBQW1DRSxLQUFLLENBQUM0QixXQUFOLEtBQXNCRixNQUF0RixFQUE4RjtBQUMxRixhQUFPO0FBQ0hHLGdCQUFRLEVBQUU7QUFDTkMscUJBQVcsRUFBRSxRQURQO0FBRU5DLG1CQUFTLEVBQUU7QUFGTDtBQURQLE9BQVA7QUFNSCxLQVBELE1BT087QUFDSDFDLFVBQUksR0FBRzJDLDBEQUFBLENBQVdoQyxLQUFLLENBQUNDLElBQWpCLENBQVA7QUFFQSxVQUFJVixTQUFTLEdBQUdGLElBQUksQ0FBQ0UsU0FBckI7QUFFQSxVQUFJMEMsTUFBTSxHQUFHO0FBQ1RDLGVBQU8sRUFBRTtBQUNMLDJCQUFpQixZQUFZbEMsS0FBSyxDQUFDQztBQUQ5QjtBQURBLE9BQWI7QUFNQSxZQUFNa0MsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsMkJBQUEsR0FBc0Isc0JBQXRCLEdBQStDOUMsU0FBaEQsRUFBMkQwQyxNQUEzRCxDQUE1QjtBQUNBZCxrQkFBWSxHQUFHLE1BQU1nQixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFFQSxVQUFJQyxXQUFXLEdBQUdGLDJCQUFBLEdBQXNCLG9CQUF0QixHQUE2QzlDLFNBQS9EO0FBQ0EsVUFBSWlELFNBQVMsR0FBR0gsMkJBQUEsR0FBc0IsaUNBQXRDO0FBQ0EsVUFBSUksTUFBTSxHQUFHSiwyQkFBQSxHQUFzQiw2QkFBbkM7QUFDQSxVQUFJSyxPQUFPLEdBQUdMLDJCQUFBLEdBQXNCLDRCQUFwQztBQUNBLFVBQUlNLGlCQUFpQixHQUFHTiwyQkFBQSxHQUFzQixxQ0FBOUM7O0FBRUEsVUFBR2hELElBQUksQ0FBQ0csSUFBTCxJQUFhLENBQWIsSUFBa0JILElBQUksQ0FBQ0csSUFBTCxJQUFhLENBQWxDLEVBQXFDO0FBQ2pDLFlBQUdILElBQUksQ0FBQ0csSUFBTCxJQUFhLENBQWhCLEVBQW1CO0FBQ2YrQyxxQkFBVyxJQUFJLGFBQWFsRCxJQUFJLENBQUNhLE1BQWpDO0FBQ0F5QywyQkFBaUIsSUFBSSxhQUFhdEQsSUFBSSxDQUFDYSxNQUF2QztBQUVBc0MsbUJBQVMsSUFBSSxhQUFhbkQsSUFBSSxDQUFDYSxNQUEvQjtBQUNBdUMsZ0JBQU0sSUFBSSxhQUFhcEQsSUFBSSxDQUFDYSxNQUE1QjtBQUNBd0MsaUJBQU8sSUFBSSxhQUFhckQsSUFBSSxDQUFDYSxNQUE3QjtBQUNILFNBUEQsTUFPTyxJQUFHYixJQUFJLENBQUNHLElBQUwsSUFBYSxDQUFoQixFQUFtQjtBQUN0QixjQUFHd0IsT0FBTyxDQUFDNEIsS0FBUixDQUFjQyxjQUFkLElBQWdDLENBQW5DLEVBQXNDO0FBQ2xDTCxxQkFBUyxJQUFJLEdBQWI7QUFDQSxnQkFBR3hCLE9BQU8sQ0FBQzRCLEtBQVIsQ0FBYzFDLE1BQWQsSUFBd0JjLE9BQU8sQ0FBQzRCLEtBQVIsQ0FBYzFDLE1BQWQsSUFBd0IsQ0FBbkQsRUFBc0RzQyxTQUFTLElBQUksWUFBWXhCLE9BQU8sQ0FBQzRCLEtBQVIsQ0FBYzFDLE1BQXZDO0FBQ3pELFdBSEQsTUFHTyxJQUFHYyxPQUFPLENBQUM0QixLQUFSLENBQWNFLFVBQWQsSUFBNEIsQ0FBL0IsRUFBa0M7QUFDckNMLGtCQUFNLElBQUksR0FBVjtBQUNBLGdCQUFHekIsT0FBTyxDQUFDNEIsS0FBUixDQUFjMUMsTUFBakIsRUFBeUJ1QyxNQUFNLElBQUksWUFBWXpCLE9BQU8sQ0FBQzRCLEtBQVIsQ0FBYzFDLE1BQXBDO0FBQzVCLFdBSE0sTUFHQSxJQUFHYyxPQUFPLENBQUM0QixLQUFSLENBQWNHLE1BQWQsSUFBd0IsQ0FBM0IsRUFBOEI7QUFDakNMLG1CQUFPLElBQUksR0FBWDtBQUNBLGdCQUFHMUIsT0FBTyxDQUFDNEIsS0FBUixDQUFjMUMsTUFBakIsRUFBeUJ3QyxPQUFPLElBQUksWUFBWTFCLE9BQU8sQ0FBQzRCLEtBQVIsQ0FBYzFDLE1BQXJDO0FBQzVCO0FBQ0o7O0FBRUQsWUFBR2MsT0FBTyxDQUFDNEIsS0FBUixDQUFjQyxjQUFkLElBQWdDLENBQW5DLEVBQXNDO0FBQ2xDLGNBQUc3QixPQUFPLENBQUM0QixLQUFSLENBQWNJLFNBQWpCLEVBQTRCUixTQUFTLElBQUksZ0JBQWdCeEIsT0FBTyxDQUFDNEIsS0FBUixDQUFjSSxTQUEzQztBQUM1QixjQUFHaEMsT0FBTyxDQUFDNEIsS0FBUixDQUFjSyxPQUFqQixFQUEwQlQsU0FBUyxJQUFJLGNBQWN4QixPQUFPLENBQUM0QixLQUFSLENBQWNLLE9BQXpDO0FBQzdCLFNBSEQsTUFHTyxJQUFHakMsT0FBTyxDQUFDNEIsS0FBUixDQUFjRSxVQUFkLElBQTRCLENBQS9CLEVBQWtDO0FBQ3JDLGNBQUc5QixPQUFPLENBQUM0QixLQUFSLENBQWNJLFNBQWpCLEVBQTRCUCxNQUFNLElBQUksZ0JBQWdCekIsT0FBTyxDQUFDNEIsS0FBUixDQUFjSSxTQUF4QztBQUM1QixjQUFHaEMsT0FBTyxDQUFDNEIsS0FBUixDQUFjSyxPQUFqQixFQUEwQlIsTUFBTSxJQUFJLGNBQWN6QixPQUFPLENBQUM0QixLQUFSLENBQWNLLE9BQXRDO0FBQzdCLFNBSE0sTUFHQSxJQUFHakMsT0FBTyxDQUFDNEIsS0FBUixDQUFjRyxNQUFkLElBQXdCLENBQTNCLEVBQThCO0FBQ2pDLGNBQUcvQixPQUFPLENBQUM0QixLQUFSLENBQWNJLFNBQWpCLEVBQTRCTixPQUFPLElBQUksZ0JBQWdCMUIsT0FBTyxDQUFDNEIsS0FBUixDQUFjSSxTQUF6QztBQUM1QixjQUFHaEMsT0FBTyxDQUFDNEIsS0FBUixDQUFjSyxPQUFqQixFQUEwQlAsT0FBTyxJQUFJLGNBQWMxQixPQUFPLENBQUM0QixLQUFSLENBQWNLLE9BQXZDO0FBQzdCOztBQUVELGNBQU1DLFFBQVEsR0FBRyxNQUFNZCxLQUFLLENBQUNHLFdBQUQsRUFBY04sTUFBZCxDQUE1QjtBQUNBdkMsb0JBQVksR0FBRyxNQUFNd0QsUUFBUSxDQUFDWixJQUFULEVBQXJCO0FBQ0E1QyxvQkFBWSxHQUFHQSxZQUFZLENBQUN5RCxNQUE1QjtBQUVBLGNBQU1DLGFBQWEsR0FBRyxNQUFNaEIsS0FBSyxDQUFDSSxTQUFELEVBQVlQLE1BQVosQ0FBakM7QUFDQWIsa0JBQVUsR0FBRyxNQUFNZ0MsYUFBYSxDQUFDZCxJQUFkLEVBQW5CO0FBQ0FsQixrQkFBVSxHQUFHQSxVQUFVLENBQUMrQixNQUF4QjtBQUVBLGNBQU1FLFVBQVUsR0FBRyxNQUFNakIsS0FBSyxDQUFDSyxNQUFELEVBQVNSLE1BQVQsQ0FBOUI7QUFDQVosZUFBTyxHQUFHLE1BQU1nQyxVQUFVLENBQUNmLElBQVgsRUFBaEI7QUFDQWpCLGVBQU8sR0FBR0EsT0FBTyxDQUFDOEIsTUFBbEI7QUFFQSxjQUFNRyxXQUFXLEdBQUcsTUFBTWxCLEtBQUssQ0FBQ00sT0FBRCxFQUFVVCxNQUFWLENBQS9CO0FBQ0FYLGdCQUFRLEdBQUcsTUFBTWdDLFdBQVcsQ0FBQ2hCLElBQVosRUFBakI7QUFDQWhCLGdCQUFRLEdBQUdBLFFBQVEsQ0FBQzZCLE1BQXBCO0FBRUEsY0FBTUksZUFBZSxHQUFHLE1BQU1uQixLQUFLLENBQUNPLGlCQUFELEVBQW9CVixNQUFwQixDQUFuQztBQUNBLFlBQUl1QixrQkFBa0IsR0FBRyxNQUFNRCxlQUFlLENBQUNqQixJQUFoQixFQUEvQjtBQUNBa0IsMEJBQWtCLEdBQUdBLGtCQUFrQixDQUFDTCxNQUF4Qzs7QUFFQSxZQUFHOUQsSUFBSSxDQUFDRyxJQUFMLElBQWEsQ0FBaEIsRUFBbUI7QUFDZixjQUFHZ0Usa0JBQWtCLElBQUlBLGtCQUFrQixDQUFDQyxlQUFuQixJQUFzQyxJQUEvRCxFQUFxRTlELGtCQUFrQixHQUFHLElBQXJCO0FBQ3hFLFNBRkQsTUFFTyxJQUFHTixJQUFJLENBQUNHLElBQUwsSUFBYSxDQUFiLElBQWtCZ0Usa0JBQXJCLEVBQXlDO0FBQzVDN0QsNEJBQWtCLEdBQUcsSUFBckI7QUFDSDtBQUNKLE9BekRELE1BeURPLElBQUdOLElBQUksQ0FBQ0csSUFBTCxJQUFhLENBQWhCLEVBQW1CO0FBQ3RCLGVBQU87QUFDSHFDLGtCQUFRLEVBQUU7QUFDTkMsdUJBQVcsRUFBRSxxQkFEUDtBQUVOQyxxQkFBUyxFQUFFO0FBRkw7QUFEUCxTQUFQO0FBTUg7QUFDSjtBQUNKOztBQUVELFNBQU87QUFDSDVDLFNBQUssRUFBRTtBQUNIYSxXQUFLLEVBQUVBLEtBQUssSUFBSUEsS0FEYjtBQUVIWCxVQUFJLEVBQUVBLElBRkg7QUFHSEssa0JBQVksRUFBRUE7QUFIWDtBQURKLEdBQVA7QUFPSDtBQUVBLCtEQUFlUixlQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1T0Q7QUFDQTtBQUVlLGVBQWVhLGVBQWYsQ0FBK0JDLEtBQS9CLEVBQXNDMEQsT0FBdEMsRUFBK0NDLEVBQS9DLEVBQW1EO0FBQ2pFLE1BQUk7QUFDSCxRQUFJM0QsS0FBSixFQUFXO0FBRVYsVUFBSWlDLE1BQU0sR0FBRztBQUNaQyxlQUFPLEVBQUU7QUFBRTBCLHVCQUFhLEVBQUcsVUFBUzVELEtBQU07QUFBakM7QUFERyxPQUFiO0FBR0EsVUFBSVgsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBSTtBQUNILFlBQUl3RSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxZQUFJRixFQUFFLEtBQUssSUFBWCxFQUFpQjtBQUNoQkUsYUFBRyxHQUFHeEIsMkJBQUEsR0FBc0Isa0RBQXRCLEdBQTJFc0IsRUFBakY7QUFDQSxTQUZELE1BRU87QUFDTkUsYUFBRyxHQUFHeEIsMkJBQUEsR0FBc0IsMENBQTVCO0FBQ0E7O0FBQ0QsY0FBTTNCLFFBQVEsR0FBRyxNQUFNb0QsNENBQUssQ0FBQztBQUM1QkQsYUFBRyxFQUFFQSxHQUR1QjtBQUU1QkUsZ0JBQU0sRUFBRSxNQUZvQjtBQUc1QjFFLGNBQUksRUFBRXFFLE9BSHNCO0FBSTVCeEIsaUJBQU8sRUFBRTtBQUFFMEIseUJBQWEsRUFBRyxVQUFTNUQsS0FBTTtBQUFqQyxXQUptQjtBQUs1QmdFLHNCQUFZLEVBQUU7QUFMYyxTQUFELENBQUwsQ0FNcEJDLElBTm9CLENBTWR2RCxRQUFELElBQWM7QUFDckIsY0FBR0EsUUFBUSxDQUFDckIsSUFBVCxDQUFjNkUsSUFBZCxJQUFzQixrQkFBekIsRUFBNkM7QUFDNUMxRCxtQkFBTyxDQUFDMkQsR0FBUixDQUFZekQsUUFBUSxDQUFDckIsSUFBckI7QUFDQSxtQkFBT3FCLFFBQVEsQ0FBQ3JCLElBQWhCO0FBQ0E7O0FBQ0EsZ0JBQU13RSxHQUFHLEdBQUdPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxlQUFYLENBQTJCLElBQUlDLElBQUosQ0FBUyxDQUFDN0QsUUFBUSxDQUFDckIsSUFBVixDQUFULENBQTNCLENBQVo7QUFDRCxnQkFBTW1GLElBQUksR0FBR3BFLFFBQVEsQ0FBQ3FFLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxjQUFJLENBQUNFLElBQUwsR0FBWWIsR0FBWjtBQUNBVyxjQUFJLENBQUNsRSxZQUFMLENBQWtCLFVBQWxCLEVBQThCLGNBQTlCLEVBUnFCLENBUTBCOztBQUMvQ0Ysa0JBQVEsQ0FBQ3VFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosSUFBMUI7QUFDQUEsY0FBSSxDQUFDSyxLQUFMO0FBQ0EsaUJBQU8sSUFBUDtBQUNBLFNBbEJzQixDQUF2QjtBQW9CQSxPQTNCRCxDQTJCRyxPQUFPdEUsR0FBUCxFQUFZO0FBQ2RDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsZUFBT0EsR0FBUDtBQUNBO0FBQ0Q7QUFDRCxHQXZDRCxDQXVDRSxPQUFPQSxHQUFQLEVBQVk7QUFDYkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPQSxHQUFQO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7OztBQy9DRCwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9mYWN1bHR5L2dlbmVyYXRlLXJlcG9ydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGlzRXhwaXJlZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCJcclxuaW1wb3J0IGdlbmVyYXRlUmVwb3J0cyBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnRzL2dlbmVyYXRlUmVwb3J0cydcclxuXHJcbmZ1bmN0aW9uIEdlbmVyYXRlUmVwb3J0cyhwcm9wcykge1xyXG5cdGxldCBlcnJvck1lc3NhZ2UgPSBcIlwiXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHRcdDxkaXY+XHJcbiAgICAgICAgPExheW91dCB1c2VySWQ9e3Byb3BzLmRhdGEudXNlcklkfSBmYWN1bHR5SWQ9e3Byb3BzLmRhdGEuZmFjdWx0eUlkfSByb2xlPXtwcm9wcy5kYXRhLnJvbGV9IG5hbWU9e3Byb3BzLmRhdGEubmFtZX0gYXBwcm92YWxMaXN0PXtwcm9wcy5hcHByb3ZhbExpc3R9IHJvbGVBc3NpZ25tZW50RmxhZz17cHJvcHMucm9sZUFzc2lnbm1lbnRGbGFnfSA+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxoMyBhbGlnbiA9IFwiY2VudGVyXCI+IEdlbmVyYXRlIFJlcG9ydHMgPC9oMz5cclxuXHRcdFx0PHAgYWxpZ24gPSBcImNlbnRlclwiPiBTZWxlY3Qgb25lIG9yIG1vcmUgY2F0ZWdvcmllcyB0byBnZW5lcmF0ZSBhbiBFeGNlbCBzcHJlYWRzaGVldCBjb250YWluaW5nIGFsbCBmYWN1bHR5IGluZm9ybWF0aW9uIHBlcnRhaW5pbmcgdG8gdGhvc2UgY2F0ZWdvcmllcyA8L3A+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCI+XHJcblx0XHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdFx0aW5pdGlhbFZhbHVlcz17e3JlcG9ydHM6IFtdfX1cclxuXHRcdFx0XHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRpZih2YWx1ZXMucmVwb3J0cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHByb3BzLmRhdGEucm9sZSA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRnZW5lcmF0ZVJlcG9ydHMocHJvcHMudG9rZW4udXNlciwgdmFsdWVzLnJlcG9ydHMsIG51bGwpXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BzLmRhdGEucm9sZSA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRnZW5lcmF0ZVJlcG9ydHMocHJvcHMudG9rZW4udXNlciwgdmFsdWVzLnJlcG9ydHMsIHByb3BzLmRhdGEudW5pdElkKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXMucmVwb3J0cyA9IFtdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0XHRcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGFjY29tcGxpc2htZW50IHR5cGVcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0ubWVzc2FnZSlcclxuXHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0XHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PEZvcm0gYWN0aW9uPVwiXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvck1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWxsZWRieT1cImNoZWNrYm94LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVwb3J0c1wiIHZhbHVlPVwicHVibGljU2VydmljZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwicHVibGljU2VydmljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwO1B1YmxpYyBTZXJ2aWNlIEFjY29tcGxpc2htZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXBvcnRzXCIgdmFsdWU9XCJwdWJsaWNhdGlvblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwicHVibGljYXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDtQdWJsaWNhdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVwb3J0c1wiIHZhbHVlPVwidHJhaW5pbmdTZW1pbmFyXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJ0cmFpbmluZ1NlbWluYXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDtUcmFpbmluZy9TZW1pbmFyc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXBvcnRzXCIgdmFsdWU9XCJyZXNlYXJjaEdyYW50XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJyZXNlYXJjaEdyYW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jm5ic3A7UmVzZWFyY2ggR3JhbnRzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWNoZWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcG9ydHNcIiB2YWx1ZT1cImxpY2Vuc3VyZUV4YW1cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImxpY2Vuc3VyZUV4YW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDtMaWNlbnN1cmUgRXhhbXNcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZpZWxkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXBvcnRzXCIgdmFsdWU9XCJlZHVjYXRpb25cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImVkdWNhdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwO0VkdWNhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlID0gXCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkID0ge2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRHZW5lcmF0ZSBSZXBvcnRcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdHsvKjxMaW5rIGhyZWY9XCIvZmFjdWx0eVwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD48L0xpbms+Ki99XHJcblx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvRm9ybWlrPlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQuZC1mbGV4e1xyXG5cdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDsgXHJcblxyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0I2FsZXJ0IHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkgeyBcclxuICAgIGNvbnN0IHRva2VuID0gcGFyc2VDb29raWVzKGNvbnRleHQucmVxKVxyXG4gICAgbGV0IGRhdGFcclxuICAgIGxldCBwZXJzb25hbEluZm9cclxuICAgIGxldCBhcHByb3ZhbExpc3RcclxuICAgIGxldCBhY2NvbXBMaXN0XHJcbiAgICBsZXQgZW1wTGlzdFxyXG4gICAgbGV0IGVkdWNMaXN0XHJcbiAgICBsZXQgcm9sZUFzc2lnbm1lbnRGbGFnID0gZmFsc2VcclxuICAgIGxldCBxdWVyeUxpc3RcclxuXHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgICBpZiAoaXNFeHBpcmVkKHRva2VuLnVzZXIpIHx8IE9iamVjdC5rZXlzKHRva2VuKS5sZW5ndGggPT09IDAgJiYgdG9rZW4uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gand0LmRlY29kZSh0b2tlbi51c2VyKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZmFjdWx0eUlkID0gZGF0YS5mYWN1bHR5SWRcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcGVyc29uYWwgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfVVJMICsgJy9mYWN1bHR5L2Jhc2ljLWluZm8vJyArIGZhY3VsdHlJZCwgaGVhZGVyKVxyXG4gICAgICAgICAgICBwZXJzb25hbEluZm8gPSBhd2FpdCBwZXJzb25hbC5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGxldCBhcHByb3ZhbFVSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2ZhY3VsdHkvYXBwcm92YWwvJyArIGZhY3VsdHlJZFxyXG4gICAgICAgICAgICBsZXQgYWNjb21wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2FjY29tcGxpc2htZW50J1xyXG4gICAgICAgICAgICBsZXQgZW1wVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VtcGxveW1lbnQnXHJcbiAgICAgICAgICAgIGxldCBlZHVjVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9yZXBvcnRzL2VkdWNhdGlvbidcclxuICAgICAgICAgICAgbGV0IHJvbGVBc3NpZ25tZW50VVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArICcvZmFjdWx0eS9iYXNpYy1pbmZvL3VuaXQvYXNzaWdubWVudCdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRhdGEucm9sZSA9PSAyIHx8IGRhdGEucm9sZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcHJvdmFsVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVBc3NpZ25tZW50VVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhY2NvbXBVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/dW5pdElkPScgKyBkYXRhLnVuaXRJZFxyXG4gICAgICAgICAgICAgICAgICAgIGVkdWNVUkwgKz0gJz91bml0SWQ9JyArIGRhdGEudW5pdElkXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmFjY29tcGxpc2htZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb21wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCAmJiBjb250ZXh0LnF1ZXJ5LnVuaXRJZCAhPSAwKSBhY2NvbXBVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29udGV4dC5xdWVyeS5lbXBsb3ltZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wVVJMICs9ICc/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnVuaXRJZCkgZW1wVVJMICs9ICd1bml0SWQ9JyArIGNvbnRleHQucXVlcnkudW5pdElkXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWR1Y1VSTCArPSAnPydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS51bml0SWQpIGVkdWNVUkwgKz0gJ3VuaXRJZD0nICsgY29udGV4dC5xdWVyeS51bml0SWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5hY2NvbXBsaXNobWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGFjY29tcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGFjY29tcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZW1wbG95bWVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29udGV4dC5xdWVyeS5zdGFydERhdGUpIGVtcFVSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVtcFVSTCArPSAnJmVuZERhdGU9JyArIGNvbnRleHQucXVlcnkuZW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRleHQucXVlcnkuZGVncmVlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LnN0YXJ0RGF0ZSkgZWR1Y1VSTCArPSAnJnN0YXJ0RGF0ZT0nICsgY29udGV4dC5xdWVyeS5zdGFydERhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZihjb250ZXh0LnF1ZXJ5LmVuZERhdGUpIGVkdWNVUkwgKz0gJyZlbmREYXRlPScgKyBjb250ZXh0LnF1ZXJ5LmVuZERhdGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwcm92YWwgPSBhd2FpdCBmZXRjaChhcHByb3ZhbFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaXN0ID0gYXdhaXQgYXBwcm92YWwuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpc3QgPSBhcHByb3ZhbExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb21wUmVwb3J0cyA9IGF3YWl0IGZldGNoKGFjY29tcFVSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgYWNjb21wTGlzdCA9IGF3YWl0IGFjY29tcFJlcG9ydHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICBhY2NvbXBMaXN0ID0gYWNjb21wTGlzdC5yZXN1bHRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBSZXBvcnRzID0gYXdhaXQgZmV0Y2goZW1wVVJMLCBoZWFkZXIpXHJcbiAgICAgICAgICAgICAgICBlbXBMaXN0ID0gYXdhaXQgZW1wUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVtcExpc3QgPSBlbXBMaXN0LnJlc3VsdFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkdWNSZXBvcnRzID0gYXdhaXQgZmV0Y2goZWR1Y1VSTCwgaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgZWR1Y0xpc3QgPSBhd2FpdCBlZHVjUmVwb3J0cy5qc29uKClcclxuICAgICAgICAgICAgICAgIGVkdWNMaXN0ID0gZWR1Y0xpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZUFzc2lnbm1lbnRzID0gYXdhaXQgZmV0Y2gocm9sZUFzc2lnbm1lbnRVUkwsIGhlYWRlcilcclxuICAgICAgICAgICAgICAgIGxldCByb2xlQXNzaWdubWVudExpc3QgPSBhd2FpdCByb2xlQXNzaWdubWVudHMuanNvbigpXHJcbiAgICAgICAgICAgICAgICByb2xlQXNzaWdubWVudExpc3QgPSByb2xlQXNzaWdubWVudExpc3QucmVzdWx0XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyb2xlQXNzaWdubWVudExpc3QgJiYgcm9sZUFzc2lnbm1lbnRMaXN0LmFwcHJvdmVyUmVtYXJrcyAhPSBudWxsKSByb2xlQXNzaWdubWVudEZsYWcgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5yb2xlID09IDMgJiYgcm9sZUFzc2lnbm1lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZUFzc2lnbm1lbnRGbGFnID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucm9sZSA9PSAxKSB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9mYWN1bHR5L2Jhc2ljLWluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuICYmIHRva2VuLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBhcHByb3ZhbExpc3Q6IGFwcHJvdmFsTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gIFxyXG4gZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVSZXBvcnRzIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVSZXBvcnRzKHRva2VuLCBjaGVja2VkLCBpZCkge1xyXG5cdHRyeSB7XHJcblx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBoZWFkZXIgPSB7XHJcblx0XHRcdFx0aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGRhdGEgPSBbXVxyXG5cdFx0XHR0cnkgeyBcclxuXHRcdFx0XHRsZXQgdXJsID0gJydcclxuXHRcdFx0XHRpZiAoaWQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdHVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9mYWN1bHR5L3JlcG9ydHMvYWNjb21wbGlzaG1lbnQvZG93bmxvYWQ/dW5pdElkPVwiICsgaWRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL2ZhY3VsdHkvcmVwb3J0cy9hY2NvbXBsaXNobWVudC9kb3dubG9hZFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6IGNoZWNrZWQsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gfSxcclxuXHRcdFx0XHRcdHJlc3BvbnNlVHlwZTogJ2Jsb2InXHJcblx0XHRcdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmRhdGEudHlwZSA9PSAnYXBwbGljYXRpb24vanNvbicpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuXHRcdFx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSB1cmw7XHJcblx0XHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAncmVwb3J0cy54bHN4Jyk7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHRcdFx0XHRcdGxpbmsuY2xpY2soKTtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fSAgY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0fSBcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0cmV0dXJuIGVyclxyXG5cdH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==