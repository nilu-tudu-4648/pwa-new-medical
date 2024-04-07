"use strict";
exports.id = 5704;
exports.ids = [5704];
exports.modules = {

/***/ 5704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9174);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Disclaimer_PopUp_DisclaimerPopUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6996);












const RegisterScreen = ()=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dob, setDob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toISOString().substring(0, 10));
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [googleLoading, setGoogleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [appleLoading, setAppleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session) {
            const googleToken = session.user.customToken;
            if (googleToken) {
                localStorage.setItem("token", googleToken);
                router.push("/");
            }
        }
    }, [
        session,
        router
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const password = formData.get("password");
        const passwordagain = formData.get("passwordagain");
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const oncologistsHospital = formData.get("oncologistsHospital");
        const emailAddress = formData.get("emailAddress");
        try {
            setLoading(true);
            const response = await fetch(`${"https://mercurial-api.nirmitee.io/api"}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    passwordagain,
                    firstName,
                    lastName,
                    dob,
                    oncologistsHospital,
                    emailAddress
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
            console.error("Signup failed:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleGoogleLogin = ()=>{
        setGoogleLoading(true);
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)("google");
    };
    const handleAppleLogin = ()=>{
        setAppleLoading(true);
        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)("apple");
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "heading-login-container1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: "Sign up"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Join us and enjoy Medication"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                minLength: "3",
                                                name: "firstName",
                                                id: "firstName",
                                                type: "text",
                                                placeholder: "First Name",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "lastName",
                                                minLength: "3",
                                                id: "lastName",
                                                placeholder: "Last Name",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "date",
                                                name: "dob",
                                                className: "register_dob_input",
                                                onFocus: (e)=>e.target.type = "date",
                                                onBlur: (e)=>e.target.type = "text",
                                                placeholder: "Date of Birth",
                                                value: dob,
                                                onChange: (e)=>setDob(e.target.value),
                                                required: true,
                                                style: {
                                                    width: "100%"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "oncologistsHospital",
                                                placeholder: "Hospital",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                name: "emailAddress",
                                                placeholder: "Email Address",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                minLength: "5",
                                                name: "password",
                                                type: "password",
                                                placeholder: "Password",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "input-login-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                minLength: "5",
                                                name: "passwordagain",
                                                type: "password",
                                                placeholder: "Confirm Password",
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button-login-container1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    color: "#fff",
                                                    size: 20
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        margin: "0"
                                                    },
                                                    children: "Signup"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "login-redirect-container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Already have an account?",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/login",
                                                    children: "Login"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "or-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "or-line"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "or-text",
                                            children: "or"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "or-line"
                                        })
                                    ]
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
                                        children: googleLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            color: "#214493",
                                            size: 20
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                        children: appleLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            color: "#214493",
                                            size: 20
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterScreen);


/***/ })

};
;