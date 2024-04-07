"use strict";
exports.id = 9520;
exports.ids = [9520];
exports.modules = {

/***/ 9581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AfterVisitSummaries({ visitData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "after-visit-main-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "after-visit-text-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "After Visit Summaries"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "after-visit-color-main-scrolling-container",
                    children: visitData.length > 0 ? visitData.map((visit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "after-visit-color-main-container",
                            style: {
                                marginLeft: index === 0 ? 0 : "10px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "after-visit-color-inner-container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: visit.title.split("/").map((word, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: word
                                                }, i))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: visit.date
                                        })
                                    ]
                                })
                            })
                        }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "no-Data-container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        fontSize: "16px"
                                    },
                                    children: "No Visit Summaries"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    children: "Upload latest chart to see your summaries"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AfterVisitSummaries);


/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Imaging({ imagingData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "Imaging-main-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "Imaging-text-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Imaging"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "Imaging-color-main-scrolling-container",
                    children: imagingData.length > 0 ? imagingData.map((imaging, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Imaging-color-main-container",
                            style: {
                                marginLeft: index === 0 ? 0 : "10px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "Imaging-color-inner-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: imaging.imagingReportType
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: imaging.date
                                    })
                                ]
                            })
                        }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "no-Data-container",
                        style: {
                            backgroundColor: "#EBDFFF"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        fontSize: "16px",
                                        color: "#491B94"
                                    },
                                    children: "No Imaging Reports"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    children: "Upload latest imaging reports to see your results"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Imaging);


/***/ }),

/***/ 8666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ProviderNotes({ providerData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "Provider-main-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "Provider-text-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Provider Notes"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "Provider-color-main-scrolling-container",
                    children: providerData.length > 0 ? providerData.map((provider, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Provider-color-main-container",
                            style: {
                                marginLeft: index === 0 ? 0 : "10px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "Provider-color-inner-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: provider.providerTitle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: provider.date
                                    })
                                ]
                            })
                        }, index)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "no-Data-container",
                        style: {
                            background: "#C7DAFD"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        fontSize: "16px",
                                        color: "#293B5C"
                                    },
                                    children: "No Provider Notes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    children: "Upload latest notes to see your provider notes"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProviderNotes);


/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Profile_Components_TopBarProfile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/ProfilePopUp/ProfilePopUp.js



function ProfilePopUp({ open , handleClose , userDetails , setOpenModal  }) {
    const [editing, setEditing] = (0,external_react_.useState)(false);
    const [formData, setFormData] = (0,external_react_.useState)({
        firstName: userDetails?.firstName || "",
        lastName: userDetails?.lastName || "",
        email: userDetails?.email || "",
        dob: userDetails?.dob ? new Date(userDetails.dob).toISOString().split("T")[0] : "",
        oncologistsHospital: userDetails?.oncologistsHospital || ""
    });
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleEdit = ()=>{
        setFormData({
            firstName: userDetails?.firstName || "",
            lastName: userDetails?.lastName || "",
            email: userDetails?.email || "",
            dob: userDetails?.dob ? new Date(userDetails.dob).toISOString().split("T")[0] : "",
            oncologistsHospital: userDetails?.oncologistsHospital || ""
        });
        setEditing(true);
    };
    const handleSave = ()=>{
        fetch(`${"https://mercurial-api.nirmitee.io/api"}/updateUser/${userDetails._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(formData)
        }).then((response)=>{
            if (!response.ok) {
                throw new Error("Failed to update user data");
            }
            return response.json();
        }).then((data)=>{
            console.log(data);
            setEditing(false);
            setOpenModal(false);
            window.location.reload();
        }).catch((error)=>{
            console.error("Error updating user data:", error);
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
                    show: open,
                    onHide: handleClose,
                    className: "profile-modal fade  bd-example-modal-xl",
                    backdropClassName: "custom-backdrop",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Header, {
                            closeButton: true,
                            className: "modal-header",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal.Title, {
                                className: "modal-title",
                                children: [
                                    userDetails?.firstName && userDetails?.firstName.charAt(0).toUpperCase() + userDetails.firstName.slice(1),
                                    " ",
                                    userDetails?.lastName && userDetails?.lastName.charAt(0).toUpperCase() + userDetails.lastName.slice(1)
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Body, {
                            className: "modal-body",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {},
                                className: "container-fluid",
                                children: editing ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formFirstName",
                                                        style: {
                                                            paddingTop: "20px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "form-lable-form",
                                                                children: "First Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                className: "form-control-form",
                                                                type: "text",
                                                                name: "firstName",
                                                                value: formData.firstName,
                                                                onChange: handleInputChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formLastName",
                                                        style: {
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "form-lable-form",
                                                                children: "Last Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                className: "form-control-form",
                                                                type: "text",
                                                                name: "lastName",
                                                                value: formData.lastName,
                                                                onChange: handleInputChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formEmail",
                                                        style: {
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "form-lable-form",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                className: "form-control-form",
                                                                type: "email",
                                                                name: "email",
                                                                value: formData.email,
                                                                disabled: true,
                                                                onChange: handleInputChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formDOB",
                                                        style: {
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "form-lable-form",
                                                                children: "Date of Birth"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                className: "form-control-form",
                                                                type: "date",
                                                                name: "dob",
                                                                value: formData.dob,
                                                                onChange: handleInputChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                        controlId: "formHospital",
                                                        style: {
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                className: "form-lable-form",
                                                                children: "Hospital"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                className: "form-control-form",
                                                                type: "text",
                                                                name: "oncologistsHospital",
                                                                value: formData.oncologistsHospital,
                                                                onChange: handleInputChange
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-start"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                height: "90px",
                                                width: "90px",
                                                background: "#ffdbac",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: userDetails?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
                                                alt: "User",
                                                className: "profile-image",
                                                style: {
                                                    margin: "auto"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                padding: "0px 0px",
                                                marginLeft: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "profile-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "info-label",
                                                            children: "First Name: "
                                                        }),
                                                        userDetails?.firstName && userDetails?.firstName.charAt(0).toUpperCase() + userDetails.firstName.slice(1),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "profile-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "info-label",
                                                            children: "Last Name: "
                                                        }),
                                                        userDetails?.lastName && userDetails?.lastName.charAt(0).toUpperCase() + userDetails.lastName.slice(1)
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "profile-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "info-label",
                                                            children: "Email:"
                                                        }),
                                                        " ",
                                                        userDetails?.email
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "profile-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "info-label",
                                                            children: "Date of Birth:"
                                                        }),
                                                        " ",
                                                        userDetails?.dob && new Date(userDetails.dob).toLocaleDateString()
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "profile-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "info-label",
                                                            children: "Hospital:"
                                                        }),
                                                        " ",
                                                        userDetails?.oncologistsHospital
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Modal.Footer, {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                paddingBottom: "50px"
                            },
                            children: editing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        variant: "danger",
                                        onClick: ()=>setEditing(false),
                                        className: "profile-button",
                                        style: {
                                            flex: 1,
                                            marginRight: "5px",
                                            backgroundColor: "rgb(231, 136, 35)",
                                            border: "none"
                                        },
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                        variant: "success",
                                        onClick: handleSave,
                                        className: "profile-button",
                                        style: {
                                            flex: 1,
                                            marginLeft: "5px",
                                            backgroundColor: "#214493",
                                            border: "none"
                                        },
                                        children: "Save"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                variant: "secondary",
                                onClick: handleEdit,
                                className: "profile-button",
                                style: {
                                    background: "#e78823",
                                    border: "none",
                                    width: "100%"
                                },
                                children: "Edit Profile"
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const ProfilePopUp_ProfilePopUp = (ProfilePopUp);

;// CONCATENATED MODULE: ./components/Profile Components/TopBarProfile.js





function TopBarProfile({ userDetails  }) {
    const googleImage = userDetails?.image;
    const defaultImage = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [openModal, setOpenModal] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (googleImage) {
            setLoading(false);
        }
    }, [
        googleImage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "profile-topBar-main-container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "profile-topBar-inner-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "circular-div",
                                onClick: ()=>setOpenModal(true),
                                children: !loading ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: googleImage,
                                    alt: "WavingHand",
                                    width: 70,
                                    height: 70,
                                    onError: (e)=>{
                                        e.target.src = defaultImage;
                                    },
                                    onLoad: ()=>setLoading(false),
                                    className: "circular-image"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: defaultImage,
                                    alt: "WavingHand",
                                    width: 70,
                                    height: 70,
                                    className: "circular-image"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "profile-topBar-content-container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    onClick: ()=>setOpenModal(true),
                                    children: [
                                        userDetails.firstName ? userDetails.firstName.charAt(0).toUpperCase() + userDetails.firstName.slice(1) : "",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        userDetails.lastName ? userDetails.lastName.charAt(0).toUpperCase() + userDetails.lastName.slice(1) : ""
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "profile-gettingStarted-button-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/tutorial",
                            className: "link",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: "Upload Chart"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProfilePopUp_ProfilePopUp, {
                open: openModal,
                setOpenModal: setOpenModal,
                handleClose: ()=>setOpenModal(false),
                userDetails: userDetails
            })
        ]
    });
}
/* harmony default export */ const Profile_Components_TopBarProfile = (TopBarProfile);


/***/ }),

/***/ 9520:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3854);
/* harmony import */ var _components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8403);
/* harmony import */ var _components_Profile_Components_TopBarProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1850);
/* harmony import */ var _components_Profile_Components_AfterVisitSummaries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9581);
/* harmony import */ var _components_Profile_Components_ProviderNotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8666);
/* harmony import */ var _components_Profile_Components_Imaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7279);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_11__]);
axios__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ProfileScreen = ()=>{
    const storedToken =  false ? 0 : null;
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [visitData, setVisitData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [providerData, setProviderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [imagingData, setImagingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [loggingOut, setLoggingOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const userDataResponse = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/user`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                if (userDataResponse.status === 200) {
                    const userData = userDataResponse.data;
                    setUserDetails(userData);
                    const extractedData = userData.extractedData;
                    if (extractedData) {
                        setVisitData(extractedData.visit);
                        setProviderData(extractedData.provider);
                        setImagingData(extractedData.imaging);
                    }
                } else {
                    console.error("Error fetching user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally{
                setLoading(false);
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
    const handleLogout = async ()=>{
        try {
            setLoggingOut(true);
            setTimeout(async ()=>{
                await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_10__.signOut)({
                    redirect: false
                });
                localStorage.removeItem("token");
                localStorage.removeItem("disclaimerSeen");
                router.push("/login");
            }, 100);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12 main-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bottomBar-main-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "profile-main-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Profile_Components_TopBarProfile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        userDetails: userDetails
                                    }),
                                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "spinner-container",
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            color: "#214493",
                                            loading: loading,
                                            size: 50
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Profile_Components_AfterVisitSummaries__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                visitData: visitData
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Profile_Components_ProviderNotes__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                providerData: providerData
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Profile_Components_Imaging__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                imagingData: imagingData
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logout-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleLogout,
                                            disabled: loggingOut,
                                            children: loggingOut ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                color: "#fff",
                                                size: 20
                                            }) : "Logout"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;