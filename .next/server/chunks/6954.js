"use strict";
exports.id = 6954;
exports.ids = [6954];
exports.modules = {

/***/ 6954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Medication_MedicationScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Medication Components/MedicationTopBar.js



function MedicationTopBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "labs_main_container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "treatment-main-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/back-arrow.svg",
                                alt: "back-arrow",
                                width: 20,
                                height: 20,
                                className: "treatment-topBar-back-button"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "treatment_display_text_container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "My Medication"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Medication_Components_MedicationTopBar = (MedicationTopBar);

;// CONCATENATED MODULE: ./components/Medication Components/MedicationBody.jsx


function MedicationBody() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-fluid",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginTop: "0px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "no-data-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "no-data-section-text-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "No Medication Suggestions Found"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We're sorry, but it seems we don't have any medication suggestions for you at the moment."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "If you have specific health concerns or conditions, we recommend consulting with a healthcare professional for personalized advice."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "In the meantime, feel free to explore other resources on our website for general health information."
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Medication_Components_MedicationBody = (MedicationBody);

;// CONCATENATED MODULE: ./pages/Screens/Medication/MedicationScreen.js




function MedicationScreen() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12 main-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "news_main_container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Medication_Components_MedicationTopBar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Medication_Components_MedicationBody, {})
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Medication_MedicationScreen = (MedicationScreen);


/***/ })

};
;