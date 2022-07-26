self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\forgot-password.js";






function ForgotPassword(props) {
  var _this = this;

  var forgotPasswordDetails = {
    upemail: ""
  };
  var message = "";
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
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
          children: "DPSM-QA-PORTAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "/authentication.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "col-md-6",
          id: "panel1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "login",
            style: {
              padding: "0 0 0 24px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "{% url 'signIn' %}",
              className: "return",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "material-icons-sharp",
                  children: "arrow_back_ios"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 12
                }, this), "  Return to Login"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  className: "img-lock",
                  src: "/lock.png",
                  id: "user",
                  alt: "Forgot Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
                  children: "FORGOT PASSWORD"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "Input the UP Email account associated with  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "your account here in the UPM QA Portal."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "We will send you an email message containing  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "a link that will redirect you to a reset "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "password page."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "login-form",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
                  initialValues: forgotPasswordDetails,
                  onSubmit: /*#__PURE__*/function () {
                    var _ref = (0,C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
                      var res, alert, _alert, _alert2;

                      return C_Users_adria_Documents_GitHub_dpsm_qa_portal_QA_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return axios__WEBPACK_IMPORTED_MODULE_6___default().post("http://localhost:3001/api" + "/user/forgot-password", {
                                upemail: "".concat(values.upemail)
                              });

                            case 3:
                              res = _context.sent;

                              if (res.data.success) {
                                values.upemail = "";
                                alert = document.getElementById("alert");
                                message = res.data.message;
                                alert.classList.remove("alert-danger");
                                alert.classList.add("alert-info");
                                alert.setAttribute("style", "visibility: visible");
                                window.setTimeout(function () {
                                  next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/login');
                                }, 3000);
                              } else {
                                _alert = document.getElementById("alert");
                                message = res.data.error;

                                _alert.setAttribute("style", "visibility: visible");
                              }

                              _context.next = 15;
                              break;

                            case 7:
                              _context.prev = 7;
                              _context.t0 = _context["catch"](0);
                              message = _context.t0.response.data.error;
                              _alert2 = document.getElementById("alert");

                              _alert2.setAttribute("style", "visibility: visible");

                              $("#alert").fadeTo(5000, 500).slideUp(500, function () {
                                $("#alert").slideUp(500);
                              });
                              values.upemail = "";
                              return _context.abrupt("return", _context.t0);

                            case 15:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, null, [[0, 7]]);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }(),
                  children: function children(_ref2) {
                    var values = _ref2.values,
                        errors = _ref2.errors,
                        touched = _ref2.touched,
                        isSubmitting = _ref2.isSubmitting;
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {
                      action: "",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "alert alert-danger",
                        role: "alert",
                        id: "alert",
                        children: message
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
                        htmlFor: "email",
                        children: "UP Email:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
                        className: "form-control",
                        type: "email",
                        id: "upemail",
                        name: "upemail"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/login",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "#",
                          children: "Go back to Sign In"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 33
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        disabled: isSubmitting,
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 11
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 10
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
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

_c = ForgotPassword;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

var _c;

$RefreshReg$(_c, "ForgotPassword");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwicHJvcHMiLCJmb3Jnb3RQYXNzd29yZERldGFpbHMiLCJ1cGVtYWlsIiwibWVzc2FnZSIsInBhZGRpbmciLCJoZWlnaHQiLCJ2YWx1ZXMiLCJheGlvcyIsInByb2Nlc3MiLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJlcnJvciIsInJlc3BvbnNlIiwiJCIsImZhZGVUbyIsInNsaWRlVXAiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFBQTs7QUFDN0IsTUFBSUMscUJBQXFCLEdBQUc7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBNUI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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QUFFLEVBQUMsU0FBbEQ7QUFBNEQsNEJBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVZELGVBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFaRCxlQWNDLDhEQUFDLGtEQUFEO0FBQU0sNEJBQUksRUFBRyxRQUFiO0FBQUEsK0NBQXNCO0FBQUcsOEJBQUksRUFBRyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBZEQsZUFnQkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFoQkQsZUFpQkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFqQkQsZUFtQkM7QUFBUSw0QkFBSSxFQUFHLFFBQWY7QUFBd0IsaUNBQVMsRUFBRyxpQkFBcEM7QUFBc0QsZ0NBQVEsRUFBSTBCLFlBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREM7QUFBQTtBQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvR0Q7QUE4TkE7O0tBbE9ROUIsYztBQXFPVCwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuYmNhNDE2NTkxM2U4MDMwOGQ5MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQocHJvcHMpe1xyXG5cdGxldCBmb3Jnb3RQYXNzd29yZERldGFpbHMgPSB7IHVwZW1haWw6IFwiXCIgfVxyXG5cdGxldCBtZXNzYWdlID0gXCJcIlxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZSA9IHt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi4va2JibHVyLmpwZylcIiB9fT5cclxuXHRcdC8vIFx0PEhlYWQ+XHJcblx0XHQvLyBcdFx0PHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvYXV0aGVudGljYXRpb24uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+ICAgIFxyXG5cdFx0Ly8gXHQ8L0hlYWQ+XHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ29cIj5cclxuXHRcdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8L2gzPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxjZW50ZXI+PGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTE1XCIgaGVpZ2h0PVwiMTE1XCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPjwvY2VudGVyPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyA8L2Rpdj5cclxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwicmVjb3ZlcnktZW1haWxcIj5cclxuXHRcdC8vIFx0PEZvcm1pa1xyXG5cdFx0Ly8gXHRcdGluaXRpYWxWYWx1ZXM9e2ZvcmdvdFBhc3N3b3JkRGV0YWlsc31cclxuXHRcdC8vIFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG5cdFx0Ly8gXHRcdHRyeSB7XHJcblx0XHQvLyBcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi91c2VyL2ZvcmdvdC1wYXNzd29yZFwiLCB7XHJcblx0XHQvLyBcdFx0XHR1cGVtYWlsOiBgJHt2YWx1ZXMudXBlbWFpbH1gLFxyXG5cdFx0Ly8gXHRcdFx0fSlcclxuXHJcblx0XHQvLyBcdFx0XHRpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcblx0XHQvLyBcdFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdC8vIFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0Ly8gXHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxlcnQtZGFuZ2VyXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhbGVydC1pbmZvXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuXHRcdC8vIFx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHQvLyBcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5lcnJvclxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHQvLyBcdFx0XHR9XHJcblx0XHQvLyBcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHQvLyBcdFx0XHRtZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuXHRcdC8vIFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdC8vIFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdCQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdFx0XHRcdCQoXCIjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0Ly8gXHRcdFx0fSk7XHJcblx0XHQvLyBcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHRcdH19XHJcblx0XHQvLyBcdFx0PlxyXG5cdFx0Ly8gXHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdC8vIFx0XHQ8Rm9ybSBhY3Rpb249XCJcIj5cclxuXHRcdC8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG5cdFx0Ly8gXHRcdFx0e21lc3NhZ2V9XHJcblx0XHQvLyBcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQvLyBcdFx0XHQ8cD5JbnB1dCB0aGUgVVAgTWFpbCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCA8YnIgLz5cclxuXHRcdC8vIFx0XHRcdHlvdXIgYWNjb3VudCBmb3IgdGhlIERQU00gUUEgUG9ydGFsIGhlcmUuIDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0Q2xpY2tpbmcgJ1N1Ym1pdCcgd2lsbCBzZW5kIGFuIGVtYWlsIHdpdGggPGJyIC8+XHJcblx0XHQvLyBcdFx0XHRhIGxpbmsgZGlyZWN0aW5nIHlvdSB0byBhIHJlc2V0IHBhc3N3b3JkIHBhZ2U8L3A+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcblx0XHQvLyBcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiBpZD1cInVwZW1haWxcIiBuYW1lPVwidXBlbWFpbFwiIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+PGEgaHJlZiA9IFwiI1wiPkdvIGJhY2sgdG8gU2lnbiBJbjwvYT48L0xpbms+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0Ly8gXHRcdFx0PGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XHJcblx0XHQvLyBcdFx0PC9Gb3JtPlxyXG5cdFx0Ly8gXHRcdCl9XHJcblx0XHQvLyBcdDwvRm9ybWlrPlxyXG5cdFx0Ly8gPC9kaXY+XHJcblxyXG5cdC8vIFx0PHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuXHQvLyBcdFx0ZGlzcGxheTogZmxleDtcclxuXHQvLyBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jcmVjb3ZlcnktZW1haWx7XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVsLCBwe1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0I2FsZXJ0IHtcclxuXHQvLyBcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdC8vIFx0fVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cdC8vIDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9hdXRoZW50aWNhdGlvbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK1NoYXJwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gICAgXHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQgPSBcInBhbmVsMVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCIgc3R5bGU9e3twYWRkaW5nOiBcIjAgMCAwIDI0cHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwieyUgdXJsICdzaWduSW4nICV9XCIgY2xhc3NOYW1lPVwicmV0dXJuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0PjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zLXNoYXJwXCI+YXJyb3dfYmFja19pb3M8L3NwYW4+ICBSZXR1cm4gdG8gTG9naW48L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJpbWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lID0gXCJpbWctbG9ja1wiIHNyYz1cIi9sb2NrLnBuZ1wiIGlkID0gXCJ1c2VyXCIgYWx0PVwiRm9yZ290IFBhc3N3b3JkXCI+PC9pbWc+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj48Yj5GT1JHT1QgUEFTU1dPUkQ8L2I+PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDxoND5JbnB1dCB0aGUgVVAgRW1haWwgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggIDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0PGg0PnlvdXIgYWNjb3VudCBoZXJlIGluIHRoZSBVUE0gUUEgUG9ydGFsLjwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+V2Ugd2lsbCBzZW5kIHlvdSBhbiBlbWFpbCBtZXNzYWdlIGNvbnRhaW5pbmcgIDwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0PGg0PmEgbGluayB0aGF0IHdpbGwgcmVkaXJlY3QgeW91IHRvIGEgcmVzZXQgPC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+cGFzc3dvcmQgcGFnZS48L2g0PiAgICBcclxuXHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtaWtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5pdGlhbFZhbHVlcz17Zm9yZ290UGFzc3dvcmREZXRhaWxzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL3VzZXIvZm9yZ290LXBhc3N3b3JkXCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cGVtYWlsOiBgJHt2YWx1ZXMudXBlbWFpbH1gLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxlcnQtZGFuZ2VyXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGVydC5jbGFzc0xpc3QuYWRkKFwiYWxlcnQtaW5mb1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9sb2dpbicpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IHJlcy5kYXRhLmVycm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiI2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIEZPUk0gKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1cGVtYWlsXCIgbmFtZT1cInVwZW1haWxcIiAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+PGEgaHJlZiA9IFwiI1wiPkdvIGJhY2sgdG8gU2lnbiBJbjwvYT48L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1paz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcclxuXHJcblx0KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==