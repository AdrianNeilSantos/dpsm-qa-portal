(function() {
var exports = {};
exports.id = "pages/forgot-password";
exports.ids = ["pages/forgot-password"];
exports.modules = {

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\forgot-password.js";






function ForgotPassword(props) {
  let forgotPasswordDetails = {
    upemail: ""
  };
  let message = "";
  return (
    /*#__PURE__*/
    // <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../kbblur.jpg)" }}>
    // 	<Head>
    // 		<title>DPSM-QA-PORTAL</title>
    // 		<link rel="stylesheet" href= "/authentication.css" />
    // 		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    // 		<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    // 		<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>    
    // 	</Head>
    // <div className = "jumbotron" id = "logo">
    // 	<h3> DPSM QA PORTAL </h3>
    // 	<br />
    // 	<br />
    // 	<center><img src="/dpsm-seal.png" width="115" height="115" alt="DPSM-QA-Portal" /></center>
    // 	<br />
    // 	<br />
    // 	<br />
    // 	<br />
    // 	<br />
    // </div>
    // <div className = "jumbotron" id = "recovery-email">
    // 	<Formik
    // 		initialValues={forgotPasswordDetails}
    // 		onSubmit={async (values) => {
    // 		try {
    // 			const res = await axios.post(process.env.API_URL + "/user/forgot-password", {
    // 			upemail: `${values.upemail}`,
    // 			})
    // 			if(res.data.success) {
    // 				values.upemail=""
    // 				let alert = document.getElementById("alert")
    // 				message = res.data.message
    // 				alert.classList.remove("alert-danger")
    // 				alert.classList.add("alert-info")
    // 				alert.setAttribute("style", "visibility: visible");
    // 				window.setTimeout(function(){
    // 					Router.push('/login')
    // 				}, 3000);
    // 			} else {
    // 				let alert = document.getElementById("alert")
    // 				message = res.data.error
    // 				alert.setAttribute("style", "visibility: visible");
    // 			}
    // 		} catch (err) {
    // 			message = err.response.data.error
    // 			let alert = document.getElementById("alert")
    // 			alert.setAttribute("style", "visibility: visible");
    // 			$("#alert").fadeTo(5000, 500).slideUp(500, function(){
    // 				$("#alert").slideUp(500);
    // 			});
    // 			values.upemail=""
    // 			return err
    // 		}
    // 		}}
    // 		>
    // 		{({ values, errors, touched, isSubmitting }) => (
    // 		<Form action="">
    // 			<div className="alert alert-danger" role="alert" id="alert">
    // 			{message}
    // 			</div>
    // 			<p>Input the UP Mail account associated with <br />
    // 			your account for the DPSM QA Portal here. <br />
    // 			Clicking 'Submit' will send an email with <br />
    // 			a link directing you to a reset password page</p>
    // 			<br />
    // 			<label htmlFor="email">UP Email:</label>
    // 			<Field className = "form-control" type="email" id="upemail" name="upemail" />
    // 			<br />
    // 			<Link href = "/login"><a href = "#">Go back to Sign In</a></Link>
    // 			<br />
    // 			<br />
    // 			<button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}>Submit</button>
    // 		</Form>
    // 		)}
    // 	</Formik>
    // </div>
    // 	<style jsx>{`
    // 	.d-flex{
    // 		min-height: 100%;
    // 		min-height: 100vh; 
    // 		display: flex;
    // 		align-items: center;
    // 	}
    // 	.jumbotron#recovery-email{
    // 		background-color:#600;
    // 	}
    // 	.jumbotron#logo{
    // 		background-color: #01942b;
    // 	}
    // 	label, p{
    // 		color:#fff;
    // 	}
    // 	#alert {
    // 		visibility: hidden;
    // 	}
    // `}</style>
    // </div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "DPSM-QA-PORTAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/authentication.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6",
          id: "panel1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/logo.png",
              alt: "Logo",
              style: {
                padding: "25%",
                height: "100%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "login",
            style: {
              padding: "0 0 0 24px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                className: "return",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "material-icons-sharp",
                    children: "arrow_back_ios"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 13
                  }, this), "  Return to Login"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "img-lock",
                  src: "/lock.png",
                  id: "user",
                  alt: "Forgot Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "FORGOT PASSWORD"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "Input the UP Email account associated with  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "your account here in the UPM QA Portal."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "We will send you an email message containing  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "a link that will redirect you to a reset "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "password page."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "login-form",
                id: "recovery-email",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
                  initialValues: forgotPasswordDetails,
                  onSubmit: async values => {
                    try {
                      const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("http://localhost:3001/api" + "/user/forgot-password", {
                        upemail: `${values.upemail}`
                      });

                      if (res.data.success) {
                        values.upemail = "";
                        let alert = document.getElementById("alert");
                        message = res.data.message;
                        alert.classList.remove("alert-danger");
                        alert.classList.add("alert-info");
                        alert.setAttribute("style", "visibility: visible");
                        window.setTimeout(function () {
                          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/login');
                        }, 3000);
                      } else {
                        let alert = document.getElementById("alert");
                        message = res.data.error;
                        alert.setAttribute("style", "visibility: visible");
                      }
                    } catch (err) {
                      message = err.response.data.error;
                      let alert = document.getElementById("alert");
                      alert.setAttribute("style", "visibility: visible");
                      $("#alert").fadeTo(5000, 500).slideUp(500, function () {
                        $("#alert").slideUp(500);
                      });
                      values.upemail = "";
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
                      className: "alert alert-danger",
                      role: "alert",
                      id: "alert",
                      children: message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      type: "email",
                      placeholder: "UP Mail",
                      id: "upemail",
                      name: "upemail"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 16
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      type: "submit",
                      className: "test",
                      disabled: isSubmitting,
                      children: "Submit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 4
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 3
    }, this)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/forgot-password.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvaWdub3JlZHxDOlxcVXNlcnNcXGFkcmlhXFxEb2N1bWVudHNcXEdpdEh1YlxcZHBzbS1xYS1wb3J0YWwtUUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZCIsInByb3BzIiwiZm9yZ290UGFzc3dvcmREZXRhaWxzIiwidXBlbWFpbCIsIm1lc3NhZ2UiLCJwYWRkaW5nIiwiaGVpZ2h0IiwidmFsdWVzIiwicmVzIiwiYXhpb3MiLCJwcm9jZXNzIiwiZGF0YSIsInN1Y2Nlc3MiLCJhbGVydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwiZXJyb3IiLCJlcnIiLCJyZXNwb25zZSIsIiQiLCJmYWRlVG8iLCJzbGlkZVVwIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsTUFBSUMscUJBQXFCLEdBQUc7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBNUI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFH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QUFBO0FBcENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9HRDtBQXNOQTs7QUFHRCwrREFBZS9CLGNBQWYsRTs7Ozs7Ozs7Ozs7QUNuT0EsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQocHJvcHMpe1xyXG5cdGxldCBmb3Jnb3RQYXNzd29yZERldGFpbHMgPSB7IHVwZW1haWw6IFwiXCIgfVxyXG5cdGxldCBtZXNzYWdlID0gXCJcIlxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZSA9IHt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi4va2JibHVyLmpwZylcIiB9fT5cclxuXHRcdC8vIFx0PEhlYWQ+XHJcblx0XHQvLyBcdFx0PHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvYXV0aGVudGljYXRpb24uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+ICAgIFxyXG5cdFx0Ly8gXHQ8L0hlYWQ+XHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ29cIj5cclxuXHRcdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8L2gzPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxjZW50ZXI+PGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTE1XCIgaGVpZ2h0PVwiMTE1XCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPjwvY2VudGVyPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyA8L2Rpdj5cclxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwicmVjb3ZlcnktZW1haWxcIj5cclxuXHRcdC8vIFx0PEZvcm1pa1xyXG5cdFx0Ly8gXHRcdGluaXRpYWxWYWx1ZXM9e2ZvcmdvdFBhc3N3b3JkRGV0YWlsc31cclxuXHRcdC8vIFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG5cdFx0Ly8gXHRcdHRyeSB7XHJcblx0XHQvLyBcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi91c2VyL2ZvcmdvdC1wYXNzd29yZFwiLCB7XHJcblx0XHQvLyBcdFx0XHR1cGVtYWlsOiBgJHt2YWx1ZXMudXBlbWFpbH1gLFxyXG5cdFx0Ly8gXHRcdFx0fSlcclxuXHJcblx0XHQvLyBcdFx0XHRpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcblx0XHQvLyBcdFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdC8vIFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0Ly8gXHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxlcnQtZGFuZ2VyXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhbGVydC1pbmZvXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuXHRcdC8vIFx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHQvLyBcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5lcnJvclxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHQvLyBcdFx0XHR9XHJcblx0XHQvLyBcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHQvLyBcdFx0XHRtZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuXHRcdC8vIFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdC8vIFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdCQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdFx0XHRcdCQoXCIjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0Ly8gXHRcdFx0fSk7XHJcblx0XHQvLyBcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHRcdH19XHJcblx0XHQvLyBcdFx0PlxyXG5cdFx0Ly8gXHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdC8vIFx0XHQ8Rm9ybSBhY3Rpb249XCJcIj5cclxuXHRcdC8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG5cdFx0Ly8gXHRcdFx0e21lc3NhZ2V9XHJcblx0XHQvLyBcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQvLyBcdFx0XHQ8cD5JbnB1dCB0aGUgVVAgTWFpbCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCA8YnIgLz5cclxuXHRcdC8vIFx0XHRcdHlvdXIgYWNjb3VudCBmb3IgdGhlIERQU00gUUEgUG9ydGFsIGhlcmUuIDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0Q2xpY2tpbmcgJ1N1Ym1pdCcgd2lsbCBzZW5kIGFuIGVtYWlsIHdpdGggPGJyIC8+XHJcblx0XHQvLyBcdFx0XHRhIGxpbmsgZGlyZWN0aW5nIHlvdSB0byBhIHJlc2V0IHBhc3N3b3JkIHBhZ2U8L3A+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcblx0XHQvLyBcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiBpZD1cInVwZW1haWxcIiBuYW1lPVwidXBlbWFpbFwiIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+PGEgaHJlZiA9IFwiI1wiPkdvIGJhY2sgdG8gU2lnbiBJbjwvYT48L0xpbms+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0Ly8gXHRcdFx0PGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XHJcblx0XHQvLyBcdFx0PC9Gb3JtPlxyXG5cdFx0Ly8gXHRcdCl9XHJcblx0XHQvLyBcdDwvRm9ybWlrPlxyXG5cdFx0Ly8gPC9kaXY+XHJcblxyXG5cdC8vIFx0PHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuXHQvLyBcdFx0ZGlzcGxheTogZmxleDtcclxuXHQvLyBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jcmVjb3ZlcnktZW1haWx7XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVsLCBwe1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0I2FsZXJ0IHtcclxuXHQvLyBcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdC8vIFx0fVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cdC8vIDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9hdXRoZW50aWNhdGlvbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK1NoYXJwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gICAgXHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQgPSBcInBhbmVsMVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCIgc3R5bGU9e3twYWRkaW5nOiBcIjAgMCAwIDI0cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmID0gXCIvbG9naW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInJldHVyblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0PjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXJyb3dfYmFja19pb3M8L3NwYW4+ICBSZXR1cm4gdG8gTG9naW48L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiaW1nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZSA9IFwiaW1nLWxvY2tcIiBzcmM9XCIvbG9jay5wbmdcIiBpZCA9IFwidXNlclwiIGFsdD1cIkZvcmdvdCBQYXNzd29yZFwiPjwvaW1nPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+PGI+Rk9SR09UIFBBU1NXT1JEPC9iPjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+SW5wdXQgdGhlIFVQIEVtYWlsIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoICA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDxoND55b3VyIGFjY291bnQgaGVyZSBpbiB0aGUgVVBNIFFBIFBvcnRhbC48L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PGg0PldlIHdpbGwgc2VuZCB5b3UgYW4gZW1haWwgbWVzc2FnZSBjb250YWluaW5nICA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDxoND5hIGxpbmsgdGhhdCB3aWxsIHJlZGlyZWN0IHlvdSB0byBhIHJlc2V0IDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0PGg0PnBhc3N3b3JkIHBhZ2UuPC9oND4gICAgXHJcblx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgaWQgPSBcInJlY292ZXJ5LWVtYWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybWlrXHJcblx0XHRcdFx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZXM9e2ZvcmdvdFBhc3N3b3JkRGV0YWlsc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi91c2VyL2ZvcmdvdC1wYXNzd29yZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXBlbWFpbDogYCR7dmFsdWVzLnVwZW1haWx9YCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcImFsZXJ0LWRhbmdlclwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQuY2xhc3NMaXN0LmFkZChcImFsZXJ0LWluZm9cIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiI2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JChcIiNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzLnVwZW1haWw9XCJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlcnJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0gYWN0aW9uPVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGaWVsZCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlVQIE1haWxcIiBpZD1cInVwZW1haWxcIiBuYW1lPVwidXBlbWFpbFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJ0ZXN0XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfT5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtaWs+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0XHJcblxyXG5cdClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=