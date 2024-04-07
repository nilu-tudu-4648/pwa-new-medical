"use strict";
exports.id = 3758;
exports.ids = [3758];
exports.modules = {

/***/ 8710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loader() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "typing-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        class: "dot-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        class: "dot-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        class: "dot-2"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 5002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const RequireAuth = (WrappedComponent)=>{
    const AuthComponent = (props)=>{
        const [authenticated, setAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const [authChecked, setAuthChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            const storedToken =  false ? 0 : null;
            const checkAuthentication = async ()=>{
                if (!storedToken && router.pathname !== "/login" && router.pathname !== "/signup") {
                    router.push("/login");
                } else {
                    try {
                        if (storedToken) {
                            setAuthenticated(true);
                        } else {
                            throw new Error("Unauthorized: Token not found");
                        }
                    } catch (error) {
                        localStorage.removeItem("token");
                        setAuthenticated(false);
                        router.push("/login");
                    } finally{
                        setAuthChecked(true);
                    }
                }
            };
            checkAuthentication();
        }, []);
        return authChecked ? authenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
            ...props
        }) : null : null;
    };
    return AuthComponent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequireAuth);


/***/ })

};
;