self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\forgot-password.js";






function ForgotPassword(props) {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-6",
          id: "panel1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "HELLO WORLD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              lineNumber: 135,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "login",
          style: {
            padding: "0 0 0 24px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "{% url 'signIn' %}",
            className: "return",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "material-icons-sharp",
                children: "arrow_back_ios"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 11
              }, this), "  Return to Login"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 6
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
                lineNumber: 148,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 12
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "FORGOT PASSWORD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Input the UP Email account associated with  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "your account here in the UPM QA Portal."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "We will send you an email message containing  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "a link that will redirect you to a reset "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "password page."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "login-form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwicHJvcHMiLCJmb3Jnb3RQYXNzd29yZERldGFpbHMiLCJ1cGVtYWlsIiwibWVzc2FnZSIsInBhZGRpbmciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsTUFBSUMscUJBQXFCLEdBQUc7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBNUI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQztBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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O0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvR0Q7QUFxS0E7O0tBektRTCxjO0FBNEtULCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC4wYjQ1ZjE1OTY5NWRmOGJkNzVjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBGb3Jnb3RQYXNzd29yZChwcm9wcyl7XHJcblx0bGV0IGZvcmdvdFBhc3N3b3JkRGV0YWlscyA9IHsgdXBlbWFpbDogXCJcIiB9XHJcblx0bGV0IG1lc3NhZ2UgPSBcIlwiXHJcblxyXG5cdHJldHVybihcclxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlID0ge3sgYmFja2dyb3VuZEltYWdlOiBcInVybCguLi9rYmJsdXIuanBnKVwiIH19PlxyXG5cdFx0Ly8gXHQ8SGVhZD5cclxuXHRcdC8vIFx0XHQ8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG5cdFx0Ly8gXHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9hdXRoZW50aWNhdGlvbi5jc3NcIiAvPlxyXG5cdFx0Ly8gXHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0Ly8gXHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdFx0Ly8gXHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK1NoYXJwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gICAgXHJcblx0XHQvLyBcdDwvSGVhZD5cclxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwibG9nb1wiPlxyXG5cdFx0Ly8gXHQ8aDM+IERQU00gUUEgUE9SVEFMIDwvaDM+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGNlbnRlcj48aW1nIHNyYz1cIi9kcHNtLXNlYWwucG5nXCIgd2lkdGg9XCIxMTVcIiBoZWlnaHQ9XCIxMTVcIiBhbHQ9XCJEUFNNLVFBLVBvcnRhbFwiIC8+PC9jZW50ZXI+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIDwvZGl2PlxyXG5cdFx0Ly8gPGRpdiBjbGFzc05hbWUgPSBcImp1bWJvdHJvblwiIGlkID0gXCJyZWNvdmVyeS1lbWFpbFwiPlxyXG5cdFx0Ly8gXHQ8Rm9ybWlrXHJcblx0XHQvLyBcdFx0aW5pdGlhbFZhbHVlcz17Zm9yZ290UGFzc3dvcmREZXRhaWxzfVxyXG5cdFx0Ly8gXHRcdG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcblx0XHQvLyBcdFx0dHJ5IHtcclxuXHRcdC8vIFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL3VzZXIvZm9yZ290LXBhc3N3b3JkXCIsIHtcclxuXHRcdC8vIFx0XHRcdHVwZW1haWw6IGAke3ZhbHVlcy51cGVtYWlsfWAsXHJcblx0XHQvLyBcdFx0XHR9KVxyXG5cclxuXHRcdC8vIFx0XHRcdGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuXHRcdC8vIFx0XHRcdFx0dmFsdWVzLnVwZW1haWw9XCJcIlxyXG5cdFx0Ly8gXHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHQvLyBcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5tZXNzYWdlXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhbGVydC1kYW5nZXJcIilcclxuXHRcdC8vIFx0XHRcdFx0YWxlcnQuY2xhc3NMaXN0LmFkZChcImFsZXJ0LWluZm9cIilcclxuXHRcdC8vIFx0XHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0Ly8gXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0Ly8gXHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG5cdFx0Ly8gXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdC8vIFx0XHRcdH0gZWxzZSB7XHJcblx0XHQvLyBcdFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdC8vIFx0XHRcdFx0bWVzc2FnZSA9IHJlcy5kYXRhLmVycm9yXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdH1cclxuXHRcdC8vIFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdC8vIFx0XHRcdG1lc3NhZ2UgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvclxyXG5cdFx0Ly8gXHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0Ly8gXHRcdFx0YWxlcnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCIpO1xyXG5cdFx0Ly8gXHRcdFx0JChcIiNhbGVydFwiKS5mYWRlVG8oNTAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRcdFx0JChcIiNhbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcblx0XHQvLyBcdFx0XHR9KTtcclxuXHRcdC8vIFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdC8vIFx0XHRcdHJldHVybiBlcnJcclxuXHRcdC8vIFx0XHR9XHJcblx0XHQvLyBcdFx0fX1cclxuXHRcdC8vIFx0XHQ+XHJcblx0XHQvLyBcdFx0eyh7IHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG5cdFx0Ly8gXHRcdDxGb3JtIGFjdGlvbj1cIlwiPlxyXG5cdFx0Ly8gXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBpZD1cImFsZXJ0XCI+XHJcblx0XHQvLyBcdFx0XHR7bWVzc2FnZX1cclxuXHRcdC8vIFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdC8vIFx0XHRcdDxwPklucHV0IHRoZSBVUCBNYWlsIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0eW91ciBhY2NvdW50IGZvciB0aGUgRFBTTSBRQSBQb3J0YWwgaGVyZS4gPGJyIC8+XHJcblx0XHQvLyBcdFx0XHRDbGlja2luZyAnU3VibWl0JyB3aWxsIHNlbmQgYW4gZW1haWwgd2l0aCA8YnIgLz5cclxuXHRcdC8vIFx0XHRcdGEgbGluayBkaXJlY3RpbmcgeW91IHRvIGEgcmVzZXQgcGFzc3dvcmQgcGFnZTwvcD5cclxuXHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHQvLyBcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+VVAgRW1haWw6PC9sYWJlbD5cclxuXHRcdC8vIFx0XHRcdDxGaWVsZCBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIGlkPVwidXBlbWFpbFwiIG5hbWU9XCJ1cGVtYWlsXCIgLz5cclxuXHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHQvLyBcdFx0XHQ8TGluayBocmVmID0gXCIvbG9naW5cIj48YSBocmVmID0gXCIjXCI+R28gYmFjayB0byBTaWduIEluPC9hPjwvTGluaz5cclxuXHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHRcdC8vIFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHJcblx0XHQvLyBcdFx0XHQ8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQgPSB7aXNTdWJtaXR0aW5nfT5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdC8vIFx0XHQ8L0Zvcm0+XHJcblx0XHQvLyBcdFx0KX1cclxuXHRcdC8vIFx0PC9Gb3JtaWs+XHJcblx0XHQvLyA8L2Rpdj5cclxuXHJcblx0Ly8gXHQ8c3R5bGUganN4PntgXHJcblx0Ly8gXHQuZC1mbGV4e1xyXG5cdC8vIFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdC8vIFx0XHRtaW4taGVpZ2h0OiAxMDB2aDsgXHJcblxyXG5cdC8vIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8vIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0Lmp1bWJvdHJvbiNyZWNvdmVyeS1lbWFpbHtcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjojNjAwO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0Lmp1bWJvdHJvbiNsb2dve1xyXG5cdC8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5NDJiO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0bGFiZWwsIHB7XHJcblx0Ly8gXHRcdGNvbG9yOiNmZmY7XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQjYWxlcnQge1xyXG5cdC8vIFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0Ly8gXHR9XHJcblx0Ly8gYH08L3N0eWxlPlxyXG5cclxuXHJcblx0Ly8gPC9kaXY+XHJcblxyXG5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5EUFNNLVFBLVBPUlRBTDwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiL2F1dGhlbnRpY2F0aW9uLmNzc1wiIC8+XHJcblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1FVlNUUU4zL2F6cHJHMUFubTNRRGdwSkxJbTlOYW8wWXoxenRjUVR3RnNwZDN5RDY1Vm9oaHB1dUNPbUxBU2pDXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XHJcblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrU2hhcnBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPiAgICBcclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBpZCA9IFwicGFuZWwxXCI+XHJcblx0XHRcdFx0XHQ8aDE+SEVMTE8gV09STEQ8L2gxPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9e3twYWRkaW5nOiBcIjI1JVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PjwvaW1nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIiBzdHlsZT17e3BhZGRpbmc6IFwiMCAwIDAgMjRweFwifX0+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwieyUgdXJsICdzaWduSW4nICV9XCIgY2xhc3NOYW1lPVwicmV0dXJuXCI+XHJcblx0XHRcdFx0XHRcdDxoND48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucy1zaGFycFwiPmFycm93X2JhY2tfaW9zPC9zcGFuPiAgUmV0dXJuIHRvIExvZ2luPC9oND5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiaW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lID0gXCJpbWctbG9ja1wiIHNyYz1cIi9sb2NrLnBuZ1wiIGlkID0gXCJ1c2VyXCIgYWx0PVwiRm9yZ290IFBhc3N3b3JkXCI+PC9pbWc+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdDxici8+PGJyLz5cclxuXHRcdFx0XHRcdFx0PGgyPjxiPkZPUkdPVCBQQVNTV09SRDwvYj48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHQ8aDQ+SW5wdXQgdGhlIFVQIEVtYWlsIGFjY291bnQgYXNzb2NpYXRlZCB3aXRoICA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8aDQ+eW91ciBhY2NvdW50IGhlcmUgaW4gdGhlIFVQTSBRQSBQb3J0YWwuPC9oND5cclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0PGg0PldlIHdpbGwgc2VuZCB5b3UgYW4gZW1haWwgbWVzc2FnZSBjb250YWluaW5nICA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8aDQ+YSBsaW5rIHRoYXQgd2lsbCByZWRpcmVjdCB5b3UgdG8gYSByZXNldCA8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8aDQ+cGFzc3dvcmQgcGFnZS48L2g0PiAgICBcclxuXHRcdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdFxyXG5cclxuXHQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9