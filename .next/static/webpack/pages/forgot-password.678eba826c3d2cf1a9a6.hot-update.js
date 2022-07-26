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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#",
                className: "return",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
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
                  lineNumber: 149,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "Input the UP Email account associated with  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "your account here in the UPM QA Portal."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "We will send you an email message containing  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "a link that will redirect you to a reset "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
                children: "password page."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "login-form",
                id: "recovery-email",
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
                        lineNumber: 200,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
                        type: "email",
                        placeholder: "UP Mail",
                        id: "upemail",
                        name: "upemail"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 11
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 16
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                        type: "submit",
                        className: "test",
                        disabled: isSubmitting,
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 11
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 10
                    }, _this);
                  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwicHJvcHMiLCJmb3Jnb3RQYXNzd29yZERldGFpbHMiLCJ1cGVtYWlsIiwibWVzc2FnZSIsInBhZGRpbmciLCJoZWlnaHQiLCJ2YWx1ZXMiLCJheGlvcyIsInByb2Nlc3MiLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJlcnJvciIsInJlc3BvbnNlIiwiJCIsImZhZGVUbyIsInNsaWRlVXAiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFBQTs7QUFDN0IsTUFBSUMscUJBQXFCLEdBQUc7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBNUI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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b0IsbUNBQVcsRUFBQyxTQUFoQztBQUEwQywwQkFBRSxFQUFDLFNBQTdDO0FBQXVELDRCQUFJLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRCxlQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTkQsZUFNTTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5OLGVBT0M7QUFBUSw0QkFBSSxFQUFDLFFBQWI7QUFBc0IsaUNBQVMsRUFBRyxNQUFsQztBQUF5QyxnQ0FBUSxFQUFJMEIsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURDO0FBQUE7QUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0dEO0FBc05BOztLQTFOUTlCLGM7QUE2TlQsK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLjY3OGViYTgyNmMzZDJjZjFhOWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIEZvcmdvdFBhc3N3b3JkKHByb3BzKXtcclxuXHRsZXQgZm9yZ290UGFzc3dvcmREZXRhaWxzID0geyB1cGVtYWlsOiBcIlwiIH1cclxuXHRsZXQgbWVzc2FnZSA9IFwiXCJcclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0Ly8gPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGUgPSB7eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2tiYmx1ci5qcGcpXCIgfX0+XHJcblx0XHQvLyBcdDxIZWFkPlxyXG5cdFx0Ly8gXHRcdDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcblx0XHQvLyBcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL2F1dGhlbnRpY2F0aW9uLmNzc1wiIC8+XHJcblx0XHQvLyBcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcblx0XHQvLyBcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblx0XHQvLyBcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrU2hhcnBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiAgICBcclxuXHRcdC8vIFx0PC9IZWFkPlxyXG5cdFx0Ly8gPGRpdiBjbGFzc05hbWUgPSBcImp1bWJvdHJvblwiIGlkID0gXCJsb2dvXCI+XHJcblx0XHQvLyBcdDxoMz4gRFBTTSBRQSBQT1JUQUwgPC9oMz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8Y2VudGVyPjxpbWcgc3JjPVwiL2Rwc20tc2VhbC5wbmdcIiB3aWR0aD1cIjExNVwiIGhlaWdodD1cIjExNVwiIGFsdD1cIkRQU00tUUEtUG9ydGFsXCIgLz48L2NlbnRlcj5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gPC9kaXY+XHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcInJlY292ZXJ5LWVtYWlsXCI+XHJcblx0XHQvLyBcdDxGb3JtaWtcclxuXHRcdC8vIFx0XHRpbml0aWFsVmFsdWVzPXtmb3Jnb3RQYXNzd29yZERldGFpbHN9XHJcblx0XHQvLyBcdFx0b25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuXHRcdC8vIFx0XHR0cnkge1xyXG5cdFx0Ly8gXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvdXNlci9mb3Jnb3QtcGFzc3dvcmRcIiwge1xyXG5cdFx0Ly8gXHRcdFx0dXBlbWFpbDogYCR7dmFsdWVzLnVwZW1haWx9YCxcclxuXHRcdC8vIFx0XHRcdH0pXHJcblxyXG5cdFx0Ly8gXHRcdFx0aWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG5cdFx0Ly8gXHRcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHQvLyBcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdC8vIFx0XHRcdFx0bWVzc2FnZSA9IHJlcy5kYXRhLm1lc3NhZ2VcclxuXHRcdC8vIFx0XHRcdFx0YWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcImFsZXJ0LWRhbmdlclwiKVxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5jbGFzc0xpc3QuYWRkKFwiYWxlcnQtaW5mb1wiKVxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHQvLyBcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9sb2dpbicpXHJcblx0XHQvLyBcdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0Ly8gXHRcdFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0Ly8gXHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEuZXJyb3JcclxuXHRcdC8vIFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0Ly8gXHRcdFx0fVxyXG5cdFx0Ly8gXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Ly8gXHRcdFx0bWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yXHJcblx0XHQvLyBcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHQvLyBcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHQvLyBcdFx0XHQkKFwiI2FsZXJ0XCIpLmZhZGVUbyg1MDAwLCA1MDApLnNsaWRlVXAoNTAwLCBmdW5jdGlvbigpe1xyXG5cdFx0Ly8gXHRcdFx0XHQkKFwiI2FsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcclxuXHRcdC8vIFx0XHRcdH0pO1xyXG5cdFx0Ly8gXHRcdFx0dmFsdWVzLnVwZW1haWw9XCJcIlxyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIGVyclxyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0XHR9fVxyXG5cdFx0Ly8gXHRcdD5cclxuXHRcdC8vIFx0XHR7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcblx0XHQvLyBcdFx0PEZvcm0gYWN0aW9uPVwiXCI+XHJcblx0XHQvLyBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiIGlkPVwiYWxlcnRcIj5cclxuXHRcdC8vIFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0Ly8gXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PHA+SW5wdXQgdGhlIFVQIE1haWwgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggPGJyIC8+XHJcblx0XHQvLyBcdFx0XHR5b3VyIGFjY291bnQgZm9yIHRoZSBEUFNNIFFBIFBvcnRhbCBoZXJlLiA8YnIgLz5cclxuXHRcdC8vIFx0XHRcdENsaWNraW5nICdTdWJtaXQnIHdpbGwgc2VuZCBhbiBlbWFpbCB3aXRoIDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0YSBsaW5rIGRpcmVjdGluZyB5b3UgdG8gYSByZXNldCBwYXNzd29yZCBwYWdlPC9wPlxyXG5cclxuXHRcdC8vIFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdC8vIFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5VUCBFbWFpbDo8L2xhYmVsPlxyXG5cdFx0Ly8gXHRcdFx0PEZpZWxkIGNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJ1cGVtYWlsXCIgbmFtZT1cInVwZW1haWxcIiAvPlxyXG5cclxuXHRcdC8vIFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdC8vIFx0XHRcdDxMaW5rIGhyZWYgPSBcIi9sb2dpblwiPjxhIGhyZWYgPSBcIiNcIj5HbyBiYWNrIHRvIFNpZ24gSW48L2E+PC9MaW5rPlxyXG5cclxuXHRcdC8vIFx0XHRcdDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcclxuXHRcdC8vIFx0XHRcdDxidXR0b24gdHlwZSA9IFwic3VibWl0XCIgY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZCA9IHtpc1N1Ym1pdHRpbmd9PlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0Ly8gXHRcdDwvRm9ybT5cclxuXHRcdC8vIFx0XHQpfVxyXG5cdFx0Ly8gXHQ8L0Zvcm1paz5cclxuXHRcdC8vIDwvZGl2PlxyXG5cclxuXHQvLyBcdDxzdHlsZSBqc3g+e2BcclxuXHQvLyBcdC5kLWZsZXh7XHJcblx0Ly8gXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0Ly8gXHRcdG1pbi1oZWlnaHQ6IDEwMHZoOyBcclxuXHJcblx0Ly8gXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0Ly8gXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI3JlY292ZXJ5LWVtYWlse1xyXG5cdC8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiM2MDA7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuanVtYm90cm9uI2xvZ297XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMTk0MmI7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHRsYWJlbCwgcHtcclxuXHQvLyBcdFx0Y29sb3I6I2ZmZjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdCNhbGVydCB7XHJcblx0Ly8gXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHQvLyBcdH1cclxuXHQvLyBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHQvLyA8L2Rpdj5cclxuXHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvYXV0aGVudGljYXRpb24uY3NzXCIgLz5cclxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+ICAgIFxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiIGlkID0gXCJwYW5lbDFcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dpblwiIHN0eWxlPXt7cGFkZGluZzogXCIwIDAgMCAyNHB4XCJ9fT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJyZXR1cm5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoND48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFycm93X2JhY2tfaW9zPC9zcGFuPiAgUmV0dXJuIHRvIExvZ2luPC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImltZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWUgPSBcImltZy1sb2NrXCIgc3JjPVwiL2xvY2sucG5nXCIgaWQgPSBcInVzZXJcIiBhbHQ9XCJGb3Jnb3QgUGFzc3dvcmRcIj48L2ltZz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIvPjxici8+XHJcblx0XHRcdFx0XHRcdFx0PGgyPjxiPkZPUkdPVCBQQVNTV09SRDwvYj48L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PGg0PklucHV0IHRoZSBVUCBFbWFpbCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCAgPC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+eW91ciBhY2NvdW50IGhlcmUgaW4gdGhlIFVQTSBRQSBQb3J0YWwuPC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDxoND5XZSB3aWxsIHNlbmQgeW91IGFuIGVtYWlsIG1lc3NhZ2UgY29udGFpbmluZyAgPC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+YSBsaW5rIHRoYXQgd2lsbCByZWRpcmVjdCB5b3UgdG8gYSByZXNldCA8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDxoND5wYXNzd29yZCBwYWdlLjwvaDQ+ICAgIFxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiIGlkID0gXCJyZWNvdmVyeS1lbWFpbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1pa1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbml0aWFsVmFsdWVzPXtmb3Jnb3RQYXNzd29yZERldGFpbHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvdXNlci9mb3Jnb3QtcGFzc3dvcmRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZW1haWw6IGAke3ZhbHVlcy51cGVtYWlsfWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzLnVwZW1haWw9XCJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IHJlcy5kYXRhLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhbGVydC1kYW5nZXJcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhbGVydC1pbmZvXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEuZXJyb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChcIiNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGlzU3VibWl0dGluZyB9KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtIGFjdGlvbj1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RmllbGQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJVUCBNYWlsXCIgaWQ9XCJ1cGVtYWlsXCIgbmFtZT1cInVwZW1haWxcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwidGVzdFwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybWlrPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdFxyXG5cclxuXHQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9