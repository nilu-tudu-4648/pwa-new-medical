"use strict";
exports.id = 6514;
exports.ids = [6514];
exports.modules = {

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ News_NewsScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/DisableZoom/DisableZoom.js
var DisableZoom = __webpack_require__(4918);
;// CONCATENATED MODULE: ./components/News Components/NewsTopBar.js




function NewsTopBar() {
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
                            children: "News"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const News_Components_NewsTopBar = (NewsTopBar);

;// CONCATENATED MODULE: ./components/News Components/NewsBody.js


function NewsBody() {
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
                                    children: "No News Published Yet"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We are constantly working to bring you the latest updates. Please check back later for news and updates from us."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "In the meantime, feel free to explore other sections of our website for valuable information."
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const News_Components_NewsBody = (NewsBody);

;// CONCATENATED MODULE: ./pages/Screens/News/NewsScreen.js





function NewsScreen() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(News_Components_NewsTopBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(News_Components_NewsBody, {})
        ]
    });
}
/* harmony default export */ const News_NewsScreen = (NewsScreen);


/***/ })

};
;