"use strict";
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 8788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8544);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3139);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_5__, _emotion_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function TreatmentBody() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [percentage, setPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [downloading, setDownloading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const override = _emotion_react__WEBPACK_IMPORTED_MODULE_7__.css`
    display: block;
    margin: 0 auto;
  `;
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedToken =  false ? 0 : null;
        if (storedToken) {
            const fetchData = async ()=>{
                try {
                    const userDataResponse = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/user`, {
                        headers: {
                            Authorization: `Bearer ${storedToken}`
                        }
                    });
                    if (userDataResponse.status === 200) {
                        const userData = userDataResponse.data;
                        setUserDetails(userData);
                        setUserId(userData?._id);
                    } else {
                        console.error("Error fetching user data");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                } finally{
                    setLoading(false);
                }
            };
            fetchData();
        } else {
            router.push("/login");
        }
    }, []);
    const getRandomNumbers = (percentage)=>{
        const seed = 123;
        const random = (seed)=>{
            var x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };
        let x1 = random(seed) * percentage;
        let y1 = random(seed) * (percentage - x1);
        let x2 = random(seed) * (percentage - x1 - y1);
        let y2 = percentage - x1 - y1 - x2;
        return {
            x1,
            y1,
            x2,
            y2
        };
    };
    const { x1 , y1 , x2 , y2  } = getRandomNumbers(percentage);
    const handleDownload = async ()=>{
        setDownloading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/generate-pdf/${userId}`);
            const pdfUrl = response.data.pdfUrl;
            router.push(pdfUrl);
        } catch (error) {
            console.error("Error downloading PDF:", error);
        } finally{
            setDownloading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: "treatment-body-main-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: "treatment-body-upper-main-container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "treatment-body-svg-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "50",
                                    height: "37",
                                    viewBox: "0 0 50 37",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M47.777 30.7138C48.6146 30.7138 49.2985 30.0339 49.2471 29.1978C48.8786 23.2142 46.3384 17.5494 42.0748 13.2858C37.4526 8.66363 31.1836 6.06692 24.6468 6.06692C18.1101 6.06692 11.8411 8.66363 7.21889 13.2858C2.95532 17.5494 0.415122 23.2142 0.046625 29.1978C-0.00486455 30.0339 0.679062 30.7138 1.51673 30.7138L6.20649 30.7138C7.04416 30.7138 7.71616 30.0332 7.7911 29.1989C8.14443 25.2659 9.86528 21.5617 12.68 18.7469C15.8538 15.5732 20.1584 13.7901 24.6468 13.7901C29.1353 13.7901 33.4399 15.5732 36.6136 18.747C39.4284 21.5617 41.1493 25.2659 41.5026 29.1989C41.5775 30.0332 42.2495 30.7138 43.0872 30.7138H47.777Z",
                                            fill: "#F8DB7A"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M1.51675 30.7137C0.679085 30.7137 -0.00484467 30.034 0.0466614 29.1979C0.344143 24.3689 2.05786 19.7215 4.99009 15.845C8.22805 11.5644 12.7749 8.4577 17.9397 6.99707C23.1045 5.53644 28.6049 5.8017 33.6052 7.75256C38.1333 9.51921 42.0271 12.5807 44.8096 16.5387C45.2914 17.224 45.0647 18.1612 44.3511 18.5999L40.3479 21.061C39.6343 21.4997 38.7055 21.272 38.2046 20.6006C36.3177 18.0708 33.7535 16.1108 30.7946 14.9564C27.3631 13.6176 23.5884 13.4355 20.044 14.4379C16.4996 15.4403 13.3793 17.5723 11.1572 20.5099C9.24114 23.043 8.08325 26.0557 7.80064 29.199C7.72564 30.0333 7.05363 30.7137 6.21597 30.7137H1.51675Z",
                                            fill: "url(#paint0_linear_26_2892)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                id: "paint0_linear_26_2892",
                                                x1: x1,
                                                y1: y1,
                                                x2: x2,
                                                y2: y2,
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                        stopColor: "#F8DB7A"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                        offset: "1.69",
                                                        stopColor: "#ABDCFC"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-center mb-0",
                                    children: [
                                        percentage,
                                        "% Percentile"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "treatment-body-share-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-center mb-0",
                                    children: "Share"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/export.svg",
                                    alt: "",
                                    className: "img-fluid"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "treatment-body-download-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-primary",
                                onClick: handleDownload,
                                children: downloading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    color: "#fff",
                                    size: 20
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        "Download",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/download.svg",
                                            alt: "",
                                            className: "ml-2"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_2___default()), {
                            value: value,
                            onChange: handleChange,
                            "aria-label": "basic tabs example",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Treatment recommendation"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Other recommendation"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            role: "tabpanel",
                            hidden: value !== 0,
                            children: userDetails?.recommendations?.length > 0 ? userDetails.recommendations.map((section, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "treatment-body-description-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: section.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: section.recommendation.map((point, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: point.point
                                                }, i))
                                        })
                                    ]
                                }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "treatment-body-description-container",
                                style: {
                                    textAlign: "center",
                                    paddingTop: "40px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Upload your chart to get treatment recommendations."
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            role: "tabpanel",
                            hidden: value !== 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "treatment-body-description-container",
                                style: {
                                    textAlign: "center",
                                    paddingTop: "40px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "No Other recommendations "
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentBody);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function TreatmentTopBar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "treatment-main-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/back-arrow.svg",
                            alt: "back-arrow",
                            width: 20,
                            height: 20,
                            className: "treatment-topBar-back-button"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "treatment_display_text_container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        children: [
                            "Treatment ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " Recommendation"
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentTopBar);


/***/ }),

/***/ 773:
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
/* harmony import */ var _components_Treatment_Components_TreatmentTopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3083);
/* harmony import */ var _components_Treatment_Components_TreatmentBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Treatment_Components_TreatmentBody__WEBPACK_IMPORTED_MODULE_3__]);
_components_Treatment_Components_TreatmentBody__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TreatmentScreen() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "treatment_main_container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Treatment_Components_TreatmentTopBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Treatment_Components_TreatmentBody__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;