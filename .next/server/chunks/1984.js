"use strict";
exports.id = 1984;
exports.ids = [1984];
exports.modules = {

/***/ 1984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9174);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Disclaimer_PopUp_DisclaimerPopUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6996);












const LoginScreen = ()=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    if (session) {
        const { user  } = session;
        const { email , name , image  } = user;
        console.log("Email:", email);
        console.log("Name:", name);
        console.log("Image URL:", image);
    } else {
        console.log("There is no user");
    }
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [googleLoading, setGoogleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [appleLoading, setAppleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedToken =  false ? 0 : null;
        if (storedToken) {
            router.push("/");
        }
    }, []);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const emailAddress = formData.get("emailAddress");
        const password = formData.get("password");
        try {
            setLoading(true);
            const response = await fetch(`${"https://mercurial-api.nirmitee.io/api"}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emailAddress,
                    password
                })
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                router.push("/");
            } else {
                const data = await response.json();
                setErrorMessage(data.message);
                setOpen(true);
            }
        } catch (error) {
            console.error("Error during login:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    let googleToken = session?.user?.customToken;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (googleToken) {
            localStorage.setItem("token", googleToken);
            router.push("/");
        }
    }, [
        googleToken
    ]);
    const handleGoogleLogin = ()=>{
        setGoogleLoading(true);
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)("google");
    };
    const handleAppleLogin = ()=>{
        setAppleLoading(true);
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)("apple");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-main-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logo-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: "/mercurial.png",
                                                alt: "mercurial logo",
                                                width: 160,
                                                height: 135
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "heading-login-container",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: "Welcome!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Login or signup to get your treatments done."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                minLength: "3",
                                                name: "emailAddress",
                                                id: "emailAddress",
                                                type: "text",
                                                placeholder: "Email Address",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                minLength: "5",
                                                name: "password",
                                                id: "password",
                                                type: "password",
                                                placeholder: "Password",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    color: "#fff",
                                                    size: 20
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        margin: "0"
                                                    },
                                                    children: "Login"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "login-redirect-container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Don't have an account?",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "link",
                                                        href: "/signup",
                                                        children: "Signup"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "login-google-container",
                                    onClick: handleGoogleLogin,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "login-google-container-inner",
                                        style: {
                                            marginTop: "30px",
                                            height: "65px"
                                        },
                                        children: googleLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            color: "#214493",
                                            size: 20
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/google.png",
                                                    alt: "google-login",
                                                    width: 40,
                                                    height: 40
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Continue with Google"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "login-google-container",
                                    onClick: handleAppleLogin,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "login-google-container-inner",
                                        style: {
                                            marginTop: "20px",
                                            height: "65px"
                                        },
                                        children: appleLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            color: "#214493",
                                            size: 20
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/apple-logo.png",
                                                    alt: "apple-login",
                                                    width: 30,
                                                    height: 30
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Continue with Apple ID"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7___default()), {
                open: open,
                autoHideDuration: 4000,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default()), {
                    elevation: 6,
                    variant: "filled",
                    onClose: handleClose,
                    severity: "error",
                    style: {
                        backgroundColor: "#f44336",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                        "aria-label": "close",
                        color: "inherit",
                        size: "small",
                        onClick: handleClose,
                        style: {
                            marginLeft: "auto",
                            marginRight: -8
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10___default()), {
                            fontSize: "small"
                        })
                    }),
                    children: errorMessage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Disclaimer_PopUp_DisclaimerPopUp__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginScreen);


/***/ })

};
;