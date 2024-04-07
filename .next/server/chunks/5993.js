"use strict";
exports.id = 5993;
exports.ids = [5993];
exports.modules = {

/***/ 5993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8403);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5517);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8710);
/* harmony import */ var react_simple_pull_to_refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7758);
/* harmony import */ var react_simple_pull_to_refresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_simple_pull_to_refresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4918);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_joyride__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([react_joyride__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const HomePageScreen = ({ userDetails  })=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [joyrideCompleted, setJoyrideCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showJoyride, setShowJoyride] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const storedToken =  false ? 0 : null;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchJoyrideStatus = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/joyrideStatus`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                const { joyrideCompleted  } = response.data;
                setJoyrideCompleted(joyrideCompleted);
                setShowJoyride(!joyrideCompleted);
            } catch (error) {
                console.error("Error fetching Joyride status:", error);
            }
        };
        fetchJoyrideStatus();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setLoading(false);
        }, 500);
        return ()=>clearTimeout(timeout);
    }, []);
    const handleJoyrideCallback = (data)=>{
        if (data.status === "finished" || data.status === "skipped") {
            setJoyrideCompleted(true);
            axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(`${"https://mercurial-api.nirmitee.io/api"}/updateUserJoyrideStatus`, {
                userId: userDetails._id,
                joyrideCompleted: true
            }).then((response)=>{
                console.log("Joyride completion status updated successfully");
            }).catch((error)=>{
                console.error("Error updating Joyride completion status:", error);
            });
        }
    };
    const joyrideSteps = [
        {
            target: ".hello-user",
            content: "This is the greeting section for Utkarsh!"
        },
        {
            target: ".upload-chart",
            content: "Click here to upload your medical record."
        },
        {
            target: ".labs-link",
            content: "Explore your lab results here."
        },
        {
            target: ".medication-link",
            content: "Access your medication details here."
        },
        {
            target: ".recommendation-link",
            content: "View Treatment Recommendation."
        },
        {
            target: ".treatment-diary-link",
            content: "Access Treatment Diary."
        }
    ];
    const handleRefresh = async ()=>{
        setLoading(false);
        window.location.reload();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12 col-md-12 col-sm-12 main-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bottomBar-main-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        })
                    })
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: typeof (react_simple_pull_to_refresh__WEBPACK_IMPORTED_MODULE_8___default()) !== "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_simple_pull_to_refresh__WEBPACK_IMPORTED_MODULE_8___default()), {
                    onRefresh: handleRefresh,
                    style: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "homepage-main-container",
                                    children: [
                                        userDetails && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/profile",
                                            className: "link",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "greet-container-homepage hello-user",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "wavingHand-container",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                src: "/WavingHand.png",
                                                                alt: "WavingHand",
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "wavingHand-text-container",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                children: [
                                                                    "Hello",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    userDetails.firstName,
                                                                    "!"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Welcome to CoPilot by Mercurial AI. To experience the full benefits, upload your medical record."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "getStart-container-homepage",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "getStarted-text-container",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            children: "Let’s get started"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                "Get started with uploading ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " charts"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "getStarted-button-container upload-chart",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/tutorial",
                                                        className: "link",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            children: "Upload Chart"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "utilities-container-homepage",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        children: "Your Utilities"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "utilities-inner-container",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/labs",
                                                            className: "link labs-link",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inner-image-utilities-container",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: "/utilities1.svg",
                                                                        alt: "Labs",
                                                                        width: 72,
                                                                        height: 72,
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: "Labs"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/medication",
                                                            className: "link medication-link",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inner-image-utilities-container-1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: "/utilities2.svg",
                                                                        alt: "Medication",
                                                                        width: 72,
                                                                        height: 72,
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: "Medication"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/treatment",
                                            className: "link recommendation-link",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "recommendation-main-container-homepage",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "recommendation-inner-image-container",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: "/recommendation-homepage.svg",
                                                            alt: "Treatment Recommendation",
                                                            width: 152,
                                                            height: 152,
                                                            style: {
                                                                cursor: "pointer"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "recommendation-inner-text-container",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                children: [
                                                                    "Treatment ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "Recommendation"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Based on your genetics, demographics, and imaging studies, CoPilot recommends you ask your doctor about..."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/treatment-diary",
                                            className: "link treatment-diary-link",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "treatment-main-container-homepage",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "treatment-inner-text-container",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                                children: [
                                                                    "Treatment ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "Diary"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Keep track of how you’re feeling during your treatment."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "treatment-inner-image-container",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: "/treatment-homepage.svg",
                                                            alt: "Treatment Diary",
                                                            width: 152,
                                                            height: 152,
                                                            style: {
                                                                cursor: "pointer"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "joyride_homepage-main-container",
                                            children: showJoyride && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_joyride__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                steps: joyrideSteps,
                                                callback: handleJoyrideCallback,
                                                continuous: true,
                                                disableOverlay: false,
                                                showProgress: true,
                                                showSkipButton: true,
                                                run: !joyrideCompleted,
                                                locale: {
                                                    last: "Thanks"
                                                },
                                                styles: {
                                                    options: {
                                                        arrowColor: "white",
                                                        backgroundColor: "white",
                                                        overlayColor: "#2c2c2c",
                                                        primaryColor: "#e78823",
                                                        textColor: "#11245B",
                                                        width: 1000,
                                                        zIndex: 1000
                                                    }
                                                }
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePageScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;