"use strict";
exports.id = 7110;
exports.ids = [7110];
exports.modules = {

/***/ 4205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ connectMongoDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongoDB = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
        console.log("Connected to MONGODB");
    } catch (error) {
        console.log("Erro connecting to database: ", error);
    }
};


/***/ }),

/***/ 9116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const entrySchema = new Schema({
    _id: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    date: Date,
    entryText: String,
    userId: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "User"
    }
});
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    oncologistsHospital: {
        type: String,
        required: false
    },
    joyrideCompleted: {
        type: Boolean,
        default: false
    },
    entries: [
        entrySchema
    ]
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ })

};
;