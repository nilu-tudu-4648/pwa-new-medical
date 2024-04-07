"use strict";
exports.id = 3325;
exports.ids = [3325];
exports.modules = {

/***/ 7942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TreatmentDiaryComp() {
    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toISOString().substring(0, 10));
    const [entryText, setEntryText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [entries, setEntries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDate(new Date().toISOString().substring(0, 10));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedToken =  false ? 0 : null;
        async function fetchEntries() {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/entries`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                setEntries(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching entries:", error);
            }
        }
        fetchEntries();
    }, []);
    const openPopup = ()=>{
        setShowPopup(true);
    };
    const closePopup = ()=>{
        setShowPopup(false);
    };
    const handleDateChange = (e)=>{
        setDate(e.target.value);
    };
    const handleEntryTextChange = (e)=>{
        setEntryText(e.target.value);
    };
    const saveEntry = async ()=>{
        try {
            const storedToken =  false ? 0 : null;
            if (date && entryText) {
                const newEntry = {
                    date,
                    entryText
                };
                await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${"https://mercurial-api.nirmitee.io/api"}/entries`, newEntry, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                setEntries([
                    ...entries,
                    newEntry
                ]);
                setDate("");
                setEntryText("");
                closePopup();
                window.location.reload();
            }
        } catch (error) {
            console.error("Error saving entry:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "treatment_main_container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "treatmentDiary-main-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/back-arrow.svg",
                                    alt: "back-arrow",
                                    width: 20,
                                    height: 20,
                                    className: "treatmentDiary-back-button"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "treatmentDiary_display_text_container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Treatment Diary"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "treatmentDiary_display_image_container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/export.svg",
                                alt: "back-arrow"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "treatmentDiary-body-main-container",
                    children: [
                        loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "spinner-container",
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {
                                color: "#214493",
                                loading: loading,
                                size: 50
                            })
                        }) : entries.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "0px",
                                marginBottom: "0px",
                                background: "#E6EFFF",
                                borderRadius: "10px",
                                padding: "36px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        fontSize: "16px"
                                    },
                                    children: "No Entries available"
                                })
                            })
                        }) : entries.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `treatmentDiary-task-container ${index !== 0 ? "with-margin" : ""}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/entry/[id]",
                                        as: `/entry/${entry?._id}`,
                                        className: "link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "treatmentDiary-task-text-container",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "truncate-text",
                                                children: entry?.entryText
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "treatmentDiary-taskDate-text-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: new Date(entry?.date).toLocaleDateString("en-GB", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit"
                                            })
                                        })
                                    })
                                ]
                            }, entry?._id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "add-task-div",
                            onClick: openPopup,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/plus.svg",
                                alt: ""
                            })
                        })
                    ]
                }),
                showPopup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "popup-container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "popup-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "New Entry"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-solid fa-circle-xmark",
                                        onClick: closePopup
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "date",
                                placeholder: "Date",
                                value: date,
                                onChange: handleDateChange,
                                className: "popup-input-date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                placeholder: "Enter your text here",
                                value: entryText,
                                onChange: handleEntryTextChange,
                                className: "popup-textarea-entry"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: saveEntry,
                                className: "popup-button-save",
                                children: "Save"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentDiaryComp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3325:
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
/* harmony import */ var _components_Treatment_Components_TreatmentDiaryComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Treatment_Components_TreatmentDiaryComp__WEBPACK_IMPORTED_MODULE_2__]);
_components_Treatment_Components_TreatmentDiaryComp__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function TreatmentDiaryScreen() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "treatment_main_container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Treatment_Components_TreatmentDiaryComp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreatmentDiaryScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;