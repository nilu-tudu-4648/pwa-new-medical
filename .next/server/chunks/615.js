"use strict";
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Labs_LabsScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Labs Component/LabsTopBar.js



function LabsTopBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
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
                        children: "My Labs"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Labs_Component_LabsTopBar = (LabsTopBar);

// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
;// CONCATENATED MODULE: ./components/Labs Component/ReportGraphCards.js



function ReportGraphCards() {
    const data1 = [
        {
            name: "Jan",
            Hemoglobin: 8
        },
        {
            name: "Feb",
            Hemoglobin: 4
        },
        {
            name: "Mar",
            Hemoglobin: 6
        },
        {
            name: "Apr",
            Hemoglobin: 8
        },
        {
            name: "May",
            Hemoglobin: 4
        },
        {
            name: "June",
            Hemoglobin: 12
        },
        {
            name: "July",
            Hemoglobin: 6
        },
        {
            name: "Aug",
            Hemoglobin: 8
        },
        {
            name: "Sep",
            Hemoglobin: 2
        },
        {
            name: "Oct",
            Hemoglobin: 6
        },
        {
            name: "Nov",
            Hemoglobin: 10
        },
        {
            name: "Dec",
            Hemoglobin: 8
        }
    ];
    const data2 = [
        {
            name: "Jan",
            Hematocrit: 30
        },
        {
            name: "Feb",
            Hematocrit: 50
        },
        {
            name: "Mar",
            Hematocrit: 20
        },
        {
            name: "Apr",
            Hematocrit: 70
        },
        {
            name: "May",
            Hematocrit: 40
        },
        {
            name: "Jun",
            Hematocrit: 80
        },
        {
            name: "Jul",
            Hematocrit: 20
        },
        {
            name: "Aug",
            Hematocrit: 60
        },
        {
            name: "Sep",
            Hematocrit: 30
        },
        {
            name: "Oct",
            Hematocrit: 90
        },
        {
            name: "Nov",
            Hematocrit: 40
        },
        {
            name: "Dec",
            Hematocrit: 50
        }
    ];
    const data3 = [
        {
            name: "Jan",
            "White Blood Cell Count": 3000
        },
        {
            name: "Feb",
            "White Blood Cell Count": 12000
        },
        {
            name: "Mar",
            "White Blood Cell Count": 8000
        },
        {
            name: "Apr",
            "White Blood Cell Count": 10000
        },
        {
            name: "May",
            "White Blood Cell Count": 3000
        },
        {
            name: "June",
            "White Blood Cell Count": 8000
        },
        {
            name: "July",
            "White Blood Cell Count": 6000
        },
        {
            name: "Aug",
            "White Blood Cell Count": 12000
        },
        {
            name: "Sep",
            "White Blood Cell Count": 8000
        },
        {
            name: "Oct",
            "White Blood Cell Count": 6000
        },
        {
            name: "Nov",
            "White Blood Cell Count": 10000
        },
        {
            name: "Dec",
            "White Blood Cell Count": 6000
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "report-card-main-section",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "report-card-main-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-card-inner-container shadow-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.LineChart, {
                                data: data1,
                                backgroundColor: "white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                                        stroke: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                        dataKey: "name",
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.YAxis, {
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Legend, {
                                        verticalAlign: "bottom"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Line, {
                                        type: "monotone",
                                        dataKey: "Hemoglobin",
                                        stroke: "#FF5E5E"
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "report-card-main-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-card-inner-container shadow-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.LineChart, {
                                data: data2,
                                backgroundColor: "white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                                        stroke: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                        dataKey: "name",
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.YAxis, {
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Legend, {
                                        verticalAlign: "bottom"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Line, {
                                        type: "monotone",
                                        dataKey: "Hematocrit",
                                        stroke: "#8636EE"
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "report-card-main-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "report-card-inner-container report-container-bottom shadow-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.LineChart, {
                                data: data3,
                                backgroundColor: "white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                                        stroke: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                        dataKey: "name",
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.YAxis, {
                                        axisLine: false,
                                        tickLine: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Legend, {
                                        verticalAlign: "bottom"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Line, {
                                        type: "monotone",
                                        dataKey: "White Blood Cell Count",
                                        stroke: "#ffc658",
                                        position: "top"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Labs_Component_ReportGraphCards = (ReportGraphCards);

;// CONCATENATED MODULE: ./pages/Screens/Labs/LabsScreen.js




function LabsScreen() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12 main-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lab_main_container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Labs_Component_LabsTopBar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Labs_Component_ReportGraphCards, {})
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Labs_LabsScreen = (LabsScreen);


/***/ })

};
;