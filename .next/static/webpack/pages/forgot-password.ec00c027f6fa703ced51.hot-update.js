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
              lineNumber: 150,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 12
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "FORGOT PASSWORD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Input the UP Email account associated with  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "your account here in the UPM QA Portal."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "We will send you an email message containing  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "a link that will redirect you to a reset "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "password page."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "login-form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwicHJvcHMiLCJmb3Jnb3RQYXNzd29yZERldGFpbHMiLCJ1cGVtYWlsIiwibWVzc2FnZSIsInBhZGRpbmciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDN0IsTUFBSUMscUJBQXFCLEdBQUc7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FBNUI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQztBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0dEO0FBa0tBOztLQXRLUUwsYztBQXlLVCwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuZWMwMGMwMjdmNmZhNzAzY2VkNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQocHJvcHMpe1xyXG5cdGxldCBmb3Jnb3RQYXNzd29yZERldGFpbHMgPSB7IHVwZW1haWw6IFwiXCIgfVxyXG5cdGxldCBtZXNzYWdlID0gXCJcIlxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZSA9IHt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoLi4va2JibHVyLmpwZylcIiB9fT5cclxuXHRcdC8vIFx0PEhlYWQ+XHJcblx0XHQvLyBcdFx0PHRpdGxlPkRQU00tUUEtUE9SVEFMPC90aXRsZT5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCIvYXV0aGVudGljYXRpb24uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUVWU1RRTjMvYXpwckcxQW5tM1FEZ3BKTEltOU5hbzBZejF6dGNRVHdGc3BkM3lENjVWb2hocHV1Q09tTEFTakNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cclxuXHRcdC8vIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj0gXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHRcdC8vIFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+ICAgIFxyXG5cdFx0Ly8gXHQ8L0hlYWQ+XHJcblx0XHQvLyA8ZGl2IGNsYXNzTmFtZSA9IFwianVtYm90cm9uXCIgaWQgPSBcImxvZ29cIj5cclxuXHRcdC8vIFx0PGgzPiBEUFNNIFFBIFBPUlRBTCA8L2gzPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxjZW50ZXI+PGltZyBzcmM9XCIvZHBzbS1zZWFsLnBuZ1wiIHdpZHRoPVwiMTE1XCIgaGVpZ2h0PVwiMTE1XCIgYWx0PVwiRFBTTS1RQS1Qb3J0YWxcIiAvPjwvY2VudGVyPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyBcdDxiciAvPlxyXG5cdFx0Ly8gXHQ8YnIgLz5cclxuXHRcdC8vIFx0PGJyIC8+XHJcblx0XHQvLyA8L2Rpdj5cclxuXHRcdC8vIDxkaXYgY2xhc3NOYW1lID0gXCJqdW1ib3Ryb25cIiBpZCA9IFwicmVjb3ZlcnktZW1haWxcIj5cclxuXHRcdC8vIFx0PEZvcm1pa1xyXG5cdFx0Ly8gXHRcdGluaXRpYWxWYWx1ZXM9e2ZvcmdvdFBhc3N3b3JkRGV0YWlsc31cclxuXHRcdC8vIFx0XHRvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG5cdFx0Ly8gXHRcdHRyeSB7XHJcblx0XHQvLyBcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi91c2VyL2ZvcmdvdC1wYXNzd29yZFwiLCB7XHJcblx0XHQvLyBcdFx0XHR1cGVtYWlsOiBgJHt2YWx1ZXMudXBlbWFpbH1gLFxyXG5cdFx0Ly8gXHRcdFx0fSlcclxuXHJcblx0XHQvLyBcdFx0XHRpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcblx0XHQvLyBcdFx0XHRcdHZhbHVlcy51cGVtYWlsPVwiXCJcclxuXHRcdC8vIFx0XHRcdFx0bGV0IGFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKVxyXG5cdFx0Ly8gXHRcdFx0XHRtZXNzYWdlID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxlcnQtZGFuZ2VyXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhbGVydC1pbmZvXCIpXHJcblx0XHQvLyBcdFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuXHRcdC8vIFx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdFx0XHRsZXQgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpXHJcblx0XHQvLyBcdFx0XHRcdG1lc3NhZ2UgPSByZXMuZGF0YS5lcnJvclxyXG5cdFx0Ly8gXHRcdFx0XHRhbGVydC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInZpc2liaWxpdHk6IHZpc2libGVcIik7XHJcblx0XHQvLyBcdFx0XHR9XHJcblx0XHQvLyBcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHQvLyBcdFx0XHRtZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuXHRcdC8vIFx0XHRcdGxldCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIilcclxuXHRcdC8vIFx0XHRcdGFsZXJ0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogdmlzaWJsZVwiKTtcclxuXHRcdC8vIFx0XHRcdCQoXCIjYWxlcnRcIikuZmFkZVRvKDUwMDAsIDUwMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdFx0XHRcdCQoXCIjYWxlcnRcIikuc2xpZGVVcCg1MDApO1xyXG5cdFx0Ly8gXHRcdFx0fSk7XHJcblx0XHQvLyBcdFx0XHR2YWx1ZXMudXBlbWFpbD1cIlwiXHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gZXJyXHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHRcdH19XHJcblx0XHQvLyBcdFx0PlxyXG5cdFx0Ly8gXHRcdHsoeyB2YWx1ZXMsIGVycm9ycywgdG91Y2hlZCwgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuXHRcdC8vIFx0XHQ8Rm9ybSBhY3Rpb249XCJcIj5cclxuXHRcdC8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgaWQ9XCJhbGVydFwiPlxyXG5cdFx0Ly8gXHRcdFx0e21lc3NhZ2V9XHJcblx0XHQvLyBcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQvLyBcdFx0XHQ8cD5JbnB1dCB0aGUgVVAgTWFpbCBhY2NvdW50IGFzc29jaWF0ZWQgd2l0aCA8YnIgLz5cclxuXHRcdC8vIFx0XHRcdHlvdXIgYWNjb3VudCBmb3IgdGhlIERQU00gUUEgUG9ydGFsIGhlcmUuIDxiciAvPlxyXG5cdFx0Ly8gXHRcdFx0Q2xpY2tpbmcgJ1N1Ym1pdCcgd2lsbCBzZW5kIGFuIGVtYWlsIHdpdGggPGJyIC8+XHJcblx0XHQvLyBcdFx0XHRhIGxpbmsgZGlyZWN0aW5nIHlvdSB0byBhIHJlc2V0IHBhc3N3b3JkIHBhZ2U8L3A+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlVQIEVtYWlsOjwvbGFiZWw+XHJcblx0XHQvLyBcdFx0XHQ8RmllbGQgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiBpZD1cInVwZW1haWxcIiBuYW1lPVwidXBlbWFpbFwiIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+PGEgaHJlZiA9IFwiI1wiPkdvIGJhY2sgdG8gU2lnbiBJbjwvYT48L0xpbms+XHJcblxyXG5cdFx0Ly8gXHRcdFx0PGJyIC8+XHJcblx0XHQvLyBcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0Ly8gXHRcdFx0PGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkID0ge2lzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XHJcblx0XHQvLyBcdFx0PC9Gb3JtPlxyXG5cdFx0Ly8gXHRcdCl9XHJcblx0XHQvLyBcdDwvRm9ybWlrPlxyXG5cdFx0Ly8gPC9kaXY+XHJcblxyXG5cdC8vIFx0PHN0eWxlIGpzeD57YFxyXG5cdC8vIFx0LmQtZmxleHtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHQvLyBcdFx0bWluLWhlaWdodDogMTAwdmg7IFxyXG5cclxuXHQvLyBcdFx0ZGlzcGxheTogZmxleDtcclxuXHQvLyBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jcmVjb3ZlcnktZW1haWx7XHJcblx0Ly8gXHRcdGJhY2tncm91bmQtY29sb3I6IzYwMDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5qdW1ib3Ryb24jbG9nb3tcclxuXHQvLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAxOTQyYjtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGxhYmVsLCBwe1xyXG5cdC8vIFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0fVxyXG5cdC8vIFx0I2FsZXJ0IHtcclxuXHQvLyBcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdC8vIFx0fVxyXG5cdC8vIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cdC8vIDwvZGl2PlxyXG5cclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+RFBTTS1RQS1QT1JUQUw8L3RpdGxlPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcIi9hdXRoZW50aWNhdGlvbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtRVZTVFFOMy9henByRzFBbm0zUURncEpMSW05TmFvMFl6MXp0Y1FUd0ZzcGQzeUQ2NVZvaGhwdXVDT21MQVNqQ1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK1NoYXJwXCIgcmVsPVwic3R5bGVzaGVldFwiLz4gICAgXHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIgaWQgPSBcInBhbmVsMVwiPlxyXG5cdFx0XHRcdFx0PGgxPkhFTExPIFdPUkxEPC9oMT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPXt7cGFkZGluZzogXCIyNSVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2ltZz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCIgc3R5bGU9e3twYWRkaW5nOiBcIjAgMCAwIDI0cHhcIn19PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cInslIHVybCAnc2lnbkluJyAlfVwiIGNsYXNzTmFtZT1cInJldHVyblwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQ+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMtc2hhcnBcIj5hcnJvd19iYWNrX2lvczwvc3Bhbj4gIFJldHVybiB0byBMb2dpbjwvaDQ+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImltZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZSA9IFwiaW1nLWxvY2tcIiBzcmM9XCIvbG9jay5wbmdcIiBpZCA9IFwidXNlclwiIGFsdD1cIkZvcmdvdCBQYXNzd29yZFwiPjwvaW1nPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGI+Rk9SR09UIFBBU1NXT1JEPC9iPjwvaDI+XHJcblx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdDxoND5JbnB1dCB0aGUgVVAgRW1haWwgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggIDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxoND55b3VyIGFjY291bnQgaGVyZSBpbiB0aGUgVVBNIFFBIFBvcnRhbC48L2g0PlxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHQ8aDQ+V2Ugd2lsbCBzZW5kIHlvdSBhbiBlbWFpbCBtZXNzYWdlIGNvbnRhaW5pbmcgIDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxoND5hIGxpbmsgdGhhdCB3aWxsIHJlZGlyZWN0IHlvdSB0byBhIHJlc2V0IDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxoND5wYXNzd29yZCBwYWdlLjwvaDQ+ICAgIFxyXG5cdFx0XHRcdFx0XHQ8YnIvPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcclxuXHJcblx0KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==