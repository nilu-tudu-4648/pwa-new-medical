exports.id = 1205;
exports.ids = [1205];
exports.modules = {

/***/ 7760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function TutorialTopBar() {
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
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Upload Chart"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialTopBar);


/***/ }),

/***/ 2214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const UploadButton = ({ handleFileInputClick , setOpen , setErrorMessage , userId  })=>{
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [uploadProgress, setUploadProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [getURL, setGetURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleFileInputChange = (event)=>{
        const file = event.target.files[0];
        if (file && isValidFileType(file)) {
            setSelectedFile(file);
            setError(null);
        } else {
            setSelectedFile(null);
            setError("Invalid file type");
        }
    };
    const isValidFileType = (file)=>{
        const validTypes = [
            "application/zip",
            "application/pdf"
        ];
        return validTypes.includes(file.type);
    };
    const uploadFileToS3 = async ()=>{
        if (!selectedFile) return;
        try {
            setIsUploading(true);
            setUploadProgress(0);
            const formData = new FormData();
            formData.append("file", selectedFile);
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://mercurial-api.nirmitee.io/api"}/upload-file/${userId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (progressEvent)=>{
                    const percent = Math.round(progressEvent.loaded / progressEvent.total * 100);
                    setUploadProgress(percent);
                }
            });
            setIsUploading(false);
            setUploadProgress(0);
            setGetURL(response.data.url);
            setSelectedFile(null);
            if (response.status === 200) {
                setErrorMessage("File uploaded successfully");
                setOpen(true);
                setTimeout(()=>{
                    window.location.href = "/profile";
                }, 500);
            }
        } catch (err) {
            setIsUploading(false);
            setError(err.message);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "file-upload-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: handleFileInputClick,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            id: "fileInput",
                            style: {
                                display: "none"
                            },
                            accept: ".zip,.pdf",
                            onChange: handleFileInputChange
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "file-upload-icon",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/upload.svg",
                                alt: "file-upload-icon"
                            })
                        }),
                        selectedFile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: selectedFile.name
                        }),
                        !selectedFile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Select file and upload it. Accepted file formats: ZIP, PDF"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "upload-button",
                    onClick: uploadFileToS3,
                    disabled: isUploading,
                    children: "Upload Chart"
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "error",
                    style: {
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    },
                    children: error
                }),
                isUploading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "File uploading..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                color: "gray"
                            },
                            children: "(Please wait)"
                        })
                    ]
                }),
                uploadProgress > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("progress", {
                    value: uploadProgress,
                    max: "100",
                    children: [
                        uploadProgress,
                        "%"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(782);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9174);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Tutorial_Components_UploadButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2214);
/* harmony import */ var _components_Tutorial_Components_TutorialTopBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _components_Tutorial_Components_UploadButton__WEBPACK_IMPORTED_MODULE_10__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _components_Tutorial_Components_UploadButton__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function TutorialScreen() {
    const slides = [
        {
            imgSrc: "/tutorial-iphone.svg",
            title: "If your hospital has a patient application, navigate to that application",
            description: "If your hospital does not have a patient application, please contact your hospital’s medical record department for instructions"
        },
        {
            imgSrc: "/tutorial-image2.svg",
            title: "Navigate to Request Medical Records on your account page"
        },
        {
            imgSrc: "/tutorial-image3.svg",
            title: "Select the appropriate hospital site"
        },
        {
            imgSrc: "/tutorial-image3.svg",
            title: "Send the records to yourself and select a date range that encompasses your date of diagnosis through now"
        },
        {
            imgSrc: "/tutorial-image4.svg",
            title: "Select all information, excluding Hospital Bills"
        },
        {
            imgSrc: "/tutorial-image5.svg",
            title: "Select all information, excluding Hospital Bills"
        }
    ];
    const storedToken =  false ? 0 : null;
    const [showLowerDiv, setShowLowerDiv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const userId = userDetails?._id;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const userDataResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/user`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                if (userDataResponse.status === 200) {
                    const userData = userDataResponse.data;
                    setUserDetails(userData);
                } else {
                    console.error("Error fetching user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        if (storedToken) {
            fetchData();
        } else {
            router.push("/login");
        }
    }, [
        token
    ]);
    const renderSlides = ()=>slides.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tutorialScreen_main_container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lightblue-container-tutorial",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: slide.imgSrc,
                            alt: `slide-${index}`
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-container-tutorial",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: slide.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: slide.description
                            })
                        ]
                    })
                ]
            }, index));
    const settings = {
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleFileInputClick = ()=>{
        document.getElementById("fileInput").click();
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `tutorial-slider ${showLowerDiv ? "hide-upper" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                            ...settings,
                            children: renderSlides()
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `tutorial-skip-container ${showLowerDiv ? "hide-upper" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tutorial-skip-inner-container",
                                onClick: ()=>setShowLowerDiv(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Skip, I already have my Medical Chart"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tutorial-skip-inner-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Only you or your personal representative has the right to request your medical chart. We cannot request your medical chart on your behalf."
                                })
                            })
                        ]
                    })
                ]
            }),
            showLowerDiv && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lower-div-animation",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lightblue-container-tutorial-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tutorial-blue-circle",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/document-tutorial.svg",
                                    alt: "document-tutorial"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "In a few days, your requested records will appear within your hospitals patient portal application."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tutorial-blue-circle-text"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tutorial_Components_UploadButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        userId: userId,
                        handleFileInputClick: handleFileInputClick,
                        setOpen: setOpen,
                        setErrorMessage: setErrorMessage
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_6___default()), {
                open: open,
                autoHideDuration: 4000,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_7___default()), {
                    elevation: 6,
                    variant: "filled",
                    onClose: handleClose,
                    severity: "success",
                    style: {
                        backgroundColor: "#378B29",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                        "aria-label": "close",
                        color: "inherit",
                        size: "small",
                        onClick: handleClose,
                        style: {
                            marginLeft: "auto",
                            marginRight: -8
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9___default()), {
                            fontSize: "small"
                        })
                    }),
                    children: errorMessage
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;