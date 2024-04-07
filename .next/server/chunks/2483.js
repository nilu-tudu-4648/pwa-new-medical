"use strict";
exports.id = 2483;
exports.ids = [2483];
exports.modules = {

/***/ 1828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4918);



function OncoChatBody({ messages  }) {
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const filteredMessages = messages.filter((message, index)=>!(message.inputMessage === "..." && messages[index + 1]?.isUser));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "OncoChatBody-main-container",
                children: [
                    filteredMessages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `OncoChatBody-${message.isUser ? "user-chat" : "inner-container"}`,
                            style: index === filteredMessages.length - 1 ? {
                                paddingBottom: "120px"
                            } : {},
                            children: [
                                !message.isUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "OncoChatBody-inner-colored-avatar",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa-solid fa-robot"
                                        })
                                    })
                                }),
                                message.isUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: message.inputMessage
                                }),
                                message.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: message.message
                                }),
                                message.isUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "OncoChatBody-inner-colored-avatar-image-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
                                            alt: "User Avatar"
                                        })
                                    })
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: messagesEndRef
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OncoChatBody);


/***/ }),

/***/ 114:
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
/* harmony import */ var _DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4918);




function OncoChatTopBar() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DisableZoom_DisableZoom__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                            children: "Onco Chat"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "oncoChat_display_image_container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
                            alt: "back-arrow"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OncoChatTopBar);


/***/ }),

/***/ 2543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3612);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_2__);



function OncoChatTopFooter({ onSendMessage  }) {
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (textareaRef.current) {
            autosize__WEBPACK_IMPORTED_MODULE_2___default()(textareaRef.current);
        }
        const handleTouchStart = ()=>{
            document.body.style.zoom = "100%";
        };
        window.addEventListener("touchstart", handleTouchStart);
        return ()=>{
            window.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);
    const handleChange = (e)=>{
        setMessage(e.target.value);
        setError("");
    };
    const handleSend = (e)=>{
        e.preventDefault();
        if (message.trim() === "") {
            setError("Please enter text to send a message.");
        } else {
            onSendMessage(message);
            setMessage("");
            setError("");
        }
        textareaRef.current.style.height = "50px";
        textareaRef.current.style.paddingTop = "12px";
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "OncoChatTopFooter-main-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleSend,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "OncoChatTopFooter-input-container",
                        style: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                placeholder: "Type your message",
                                className: "OncoChatTopFooter-input",
                                value: message,
                                onChange: handleChange,
                                ref: textareaRef,
                                style: {
                                    maxHeight: "200px",
                                    minHeight: "0px",
                                    height: "50px",
                                    width: "100%",
                                    boxSizing: "border-box",
                                    fontSize: "15px",
                                    resize: "vertical",
                                    overflowY: "auto",
                                    borderRadius: "40px",
                                    border: "1px solid #c9c9c9",
                                    background: "#fff",
                                    paddingLeft: "20px",
                                    paddingBottom: "0px",
                                    paddingTop: "20px",
                                    outline: "none",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                    whiteSpace: "pre-wrap",
                                    WebkitBorderRadius: "40px",
                                    MozBorderRadius: "40px",
                                    MsBorderRadius: "40px",
                                    OBorderRadius: "40px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    display: "flex",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        color: "lightgray"
                                    },
                                    children: error
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "onCoChat-footer-button-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "OncoChatTopFooter-image-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/oncoChat-send.svg",
                                alt: "oncoChat-send",
                                className: "OncoChatTopFooter-send-image"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OncoChatTopFooter);


/***/ }),

/***/ 2483:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _components_OncoChat_Components_OncoChatTopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(114);
/* harmony import */ var _components_OncoChat_Components_OncoChatTopFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2543);
/* harmony import */ var _components_OncoChat_Components_OncoChatBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function OncoChatScreen() {
    const storedToken =  false ? 0 : null;
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showingLoading, setShowingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (storedToken) {
            const fetchData = async ()=>{
                try {
                    const userDataResponse = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${"https://mercurial-api.nirmitee.io/api"}/user`, {
                        headers: {
                            Authorization: `Bearer ${storedToken}`
                        }
                    });
                    setUserId(userDataResponse.data._id);
                    const chatHistory = JSON.parse(localStorage.getItem(`chatHistory_${userDataResponse.data._id}`));
                    if (chatHistory) {
                        setMessages(chatHistory);
                    } else {
                        setMessages([
                            {
                                id: 1,
                                message: "Hi! I’m OncoChat! Here to assist you with any questions or concerns you may have about your treatment.",
                                isUser: false
                            }
                        ]);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };
            fetchData();
        } else {
            console.error("User not authenticated");
        }
    }, []);
    const handleSendMessage = async (inputMessage)=>{
        if (inputMessage.toLowerCase() === "hi" || inputMessage.toLowerCase() === "hello") {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    inputMessage,
                    isUser: true
                },
                {
                    id: messages.length + 2,
                    message: "Hey, I'm great, what about you? How can I assist you?",
                    isUser: false
                }
            ]);
            return;
        }
        if (inputMessage.toLowerCase() === "how are you") {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    inputMessage,
                    isUser: true
                },
                {
                    id: messages.length + 2,
                    message: "Thanks for asking, I'm doing great! How about you?",
                    isUser: false
                }
            ]);
            return;
        }
        setMessages([
            ...messages,
            {
                id: messages.length + 1,
                inputMessage,
                isUser: true
            },
            {
                id: messages.length + 2,
                message: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "typing",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dot"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dot"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dot"
                        })
                    ]
                }),
                isUser: false
            }
        ]);
        setShowingLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://mercurial-api.nirmitee.io/api"}/api_completion`, {
                apiKey: "e66013d0-eb55-4446-8901-c7c0d6ef5ede",
                sessionID: "655bea633bf754986662040f",
                history: [
                    {
                        role: "user",
                        content: inputMessage
                    }
                ],
                powerful: false,
                google: true
            });
            if (response.status === 200 && response.data.success) {
                const botResponse = cleanUpResponse(response.data.output.completion);
                setMessages((prevMessages)=>[
                        ...prevMessages.filter((msg)=>typeof msg.message !== "object"),
                        {
                            id: prevMessages.length + 1,
                            message: botResponse,
                            isUser: false
                        }
                    ]);
            }
        } catch (error) {
            console.error("Error fetching bot response:", error);
        } finally{
            setShowingLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userId) {
            localStorage.setItem(`chatHistory_${userId}`, JSON.stringify(messages));
            const expirationTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
            const timeoutId = setTimeout(()=>{
                localStorage.removeItem(`chatHistory_${userId}`);
                console.log("Session data removed after 2 days.");
            }, expirationTime);
            return ()=>clearTimeout(timeoutId);
        }
    }, [
        messages,
        userId
    ]);
    function cleanUpResponse(response) {
        const cleanedResponse = response.replace(/(\d+†source|】|【)/g, "");
        return cleanedResponse;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "OncoChatScreen_main_container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OncoChat_Components_OncoChatTopBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OncoChat_Components_OncoChatBody__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                messages: messages
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OncoChat_Components_OncoChatTopFooter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onSendMessage: handleSendMessage
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OncoChatScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;