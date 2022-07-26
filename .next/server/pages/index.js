(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\adria\\Documents\\GitHub\\dpsm-qa-portal-QA\\pages\\index.js";



function Home(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "d-flex justify-content-center"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, this);
}

async function getServerSideProps(context) {
  const data = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(context.req);

  if (context.res) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isExpired)(data.user) || Object.keys(data).length === 0 && data.constructor === Object) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().decode(data.user);
      let role = token.role;
      let destination = '';

      switch (role) {
        case 1:
          destination = '/faculty/basic-info';
          break;

        case 2:
          destination = '/faculty';
          break;

        case 3:
          destination = '/faculty';
          break;

        case 5:
          destination = '/admin';
          break;
      }

      return {
        redirect: {
          destination,
          permanent: false
        }
      };
    }
  }

  return {
    props: {
      data: data && data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC8uL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcHNtLXFhLXBvcnRhbC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL2Rwc20tcWEtcG9ydGFsL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZHBzbS1xYS1wb3J0YWwvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwYXJzZUNvb2tpZXMiLCJyZXEiLCJjb29raWUiLCJoZWFkZXJzIiwiZG9jdW1lbnQiLCJpc0V4cGlyZWQiLCJ1c2VyIiwiZGVjb2RlZCIsImp3dCIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiZXhwIiwiSG9tZSIsInByb3BzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImRhdGEiLCJyZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwidG9rZW4iLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9DLG1EQUFBLENBQWFELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFKLENBQVlELE1BQVosSUFBc0IsRUFBekIsR0FBOEJFLFFBQVEsQ0FBQ0YsTUFBdkQsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTRyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM5QixNQUFJQyxPQUFPLEdBQUdDLDBEQUFBLENBQVdGLElBQVgsQ0FBZDtBQUNBLE1BQUlHLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBakM7QUFDQSxTQUFPSixPQUFPLElBQUlBLE9BQU8sQ0FBQ0ssR0FBUixHQUFjSCxHQUFoQztBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBOztBQUVBLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNqQixzQkFDRTtBQUFLLGFBQVMsRUFBRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFJRDs7QUFFTSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUMsSUFBSSxHQUFHakIsc0RBQVksQ0FBQ2dCLE9BQU8sQ0FBQ2YsR0FBVCxDQUF6Qjs7QUFFQSxNQUFJZSxPQUFPLENBQUNFLEdBQVosRUFBaUI7QUFDZixRQUFJYixtREFBUyxDQUFDWSxJQUFJLENBQUNYLElBQU4sQ0FBVCxJQUF3QmEsTUFBTSxDQUFDQyxJQUFQLENBQVlILElBQVosRUFBa0JJLE1BQWxCLEtBQTZCLENBQTdCLElBQWtDSixJQUFJLENBQUNLLFdBQUwsS0FBcUJILE1BQW5GLEVBQTJGO0FBQ3pGLGFBQU87QUFDTEksZ0JBQVEsRUFBRTtBQUNOQyxxQkFBVyxFQUFFLFFBRFA7QUFFTkMsbUJBQVMsRUFBRTtBQUZMO0FBREwsT0FBUDtBQU1ELEtBUEQsTUFPTztBQUVMLFlBQU1DLEtBQUssR0FBR2xCLDBEQUFBLENBQVdTLElBQUksQ0FBQ1gsSUFBaEIsQ0FBZDtBQUNBLFVBQUlxQixJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBakI7QUFFQSxVQUFJSCxXQUFXLEdBQUcsRUFBbEI7O0FBQ0EsY0FBT0csSUFBUDtBQUNFLGFBQUssQ0FBTDtBQUFRSCxxQkFBVyxHQUFHLHFCQUFkO0FBQXFDOztBQUM3QyxhQUFLLENBQUw7QUFBUUEscUJBQVcsR0FBRyxVQUFkO0FBQTBCOztBQUNsQyxhQUFLLENBQUw7QUFBUUEscUJBQVcsR0FBRyxVQUFkO0FBQTBCOztBQUNsQyxhQUFLLENBQUw7QUFBUUEscUJBQVcsR0FBRyxRQUFkO0FBQXdCO0FBSmxDOztBQU9BLGFBQU87QUFDTEQsZ0JBQVEsRUFBRTtBQUNOQyxxQkFETTtBQUVOQyxtQkFBUyxFQUFFO0FBRkw7QUFETCxPQUFQO0FBTUQ7QUFDRjs7QUFFRCxTQUFPO0FBQ0xYLFNBQUssRUFBRTtBQUNMRyxVQUFJLEVBQUVBLElBQUksSUFBSUE7QUFEVDtBQURGLEdBQVA7QUFLRDtBQUVELCtEQUFlSixJQUFmLEU7Ozs7Ozs7Ozs7O0FDbERGLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIHJldHVybiBjb29raWUucGFyc2UocmVxID8gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIgOiBkb2N1bWVudC5jb29raWUpXHJcbn1cclxuXHJcbi8vIGNoZWNrIHRva2VuIGlmIGV4cGlyZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwaXJlZCh1c2VyKSB7XHJcbiAgbGV0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHVzZXIpXHJcbiAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxyXG4gIHJldHVybiBkZWNvZGVkICYmIGRlY29kZWQuZXhwIDwgbm93XHJcbn0iLCJpbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGlzRXhwaXJlZCB9IGZyb20gXCIuLi9oZWxwZXJzXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBwYXJzZUNvb2tpZXMoY29udGV4dC5yZXEpXHJcbiAgXHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgaWYgKGlzRXhwaXJlZChkYXRhLnVzZXIpIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCAmJiBkYXRhLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicsXHJcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LmRlY29kZShkYXRhLnVzZXIpXHJcbiAgICAgICAgbGV0IHJvbGUgPSB0b2tlbi5yb2xlXHJcblxyXG4gICAgICAgIGxldCBkZXN0aW5hdGlvbiA9ICcnXHJcbiAgICAgICAgc3dpdGNoKHJvbGUpIHtcclxuICAgICAgICAgIGNhc2UgMTogZGVzdGluYXRpb24gPSAnL2ZhY3VsdHkvYmFzaWMtaW5mbyc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOiBkZXN0aW5hdGlvbiA9ICcvZmFjdWx0eSc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAzOiBkZXN0aW5hdGlvbiA9ICcvZmFjdWx0eSc7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSA1OiBkZXN0aW5hdGlvbiA9ICcvYWRtaW4nOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiBkYXRhICYmIGRhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=