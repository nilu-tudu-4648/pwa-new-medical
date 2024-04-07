"use strict";
(() => {
var exports = {};
exports.id = 2835;
exports.ids = [2835];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1056:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/response.js");

/***/ }),

/***/ 4668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST": () => (/* binding */ POST)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4205);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9116);
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3141);



async function POST(request) {
    const { name , email  } = await request.json();
    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectMongoDB */ .q)();
    await _models_user__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
        name,
        email
    });
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].json */ .Z.json({
        message: "User Registered"
    }, {
        status: 201
    });
}


/***/ }),

/***/ 3141:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
var _response = __webpack_require__(1056);

//# sourceMappingURL=next-response.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7110], () => (__webpack_exec__(4668)));
module.exports = __webpack_exports__;

})();