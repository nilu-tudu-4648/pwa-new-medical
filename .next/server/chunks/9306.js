"use strict";
exports.id = 9306;
exports.ids = [9306];
exports.modules = {

/***/ 9306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Symptoms_SymptomsScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/DisableZoom/DisableZoom.js
var DisableZoom = __webpack_require__(4918);
;// CONCATENATED MODULE: ./components/Symptoms Components/SymptomsTopBar.js




function SymptomsTopBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DisableZoom/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                            children: "Symptoms"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Symptoms_Components_SymptomsTopBar = (SymptomsTopBar);

;// CONCATENATED MODULE: ./components/Symptoms Components/SymptomsBody.js


function SymptomsBody() {
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
                                    children: "No Symptoms Reported"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Currently, there are no symptoms reported. However, it's essential to stay vigilant about your health and seek medical attention if you experience any unusual symptoms."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Remember to monitor your health regularly and consult with a healthcare professional for any concerns or questions you may have."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "In the meantime, you can explore other sections of our website for valuable health information and tips on maintaining well-being."
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Symptoms_Components_SymptomsBody = (SymptomsBody);

;// CONCATENATED MODULE: ./pages/Screens/Symptoms/SymptomsScreen.js





function SymptomsScreen() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Symptoms_Components_SymptomsTopBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Symptoms_Components_SymptomsBody, {})
        ]
    });
}
/* harmony default export */ const Symptoms_SymptomsScreen = (SymptomsScreen);


/***/ })

};
;