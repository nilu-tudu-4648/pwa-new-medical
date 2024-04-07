"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/apple"
const apple_namespaceObject = require("next-auth/providers/apple");
var apple_default = /*#__PURE__*/__webpack_require__.n(apple_namespaceObject);
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(4205);
// EXTERNAL MODULE: ./models/user.js
var models_user = __webpack_require__(9116);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js







const bcrypt = __webpack_require__(7096);
let accessToken;
const generateRandomPassword = ()=>{
    const randomBytes = external_crypto_default().randomBytes(5);
    return parseInt(randomBytes.toString("hex"), 16).toString().padStart(10, "0");
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        strategy: "jwt"
    },
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        apple_default()({
            clientId: process.env.APPLE_CLIENT_ID,
            clientSecret: process.env.APPLE_CLIENT_SECRET,
            profile (profile) {
                console.log("Apple OAuth Profile:", profile);
                const email = profile?.email || "";
                const name = profile?.name || "";
                const image = profile?.picture || "";
                console.log("Email:", email);
                console.log("Name:", name);
                console.log("Image URL:", image);
                return {
                    id: profile?.sub || "",
                    email,
                    name,
                    image
                };
            }
        })
    ],
    callbacks: {
        async signIn ({ user  }) {
            const { email , name , image  } = user;
            const [firstName, ...lastNameParts] = name.split(" ");
            const lastName = lastNameParts.join(" ");
            const today = new Date();
            const password = generateRandomPassword();
            const hashedPassword = await bcrypt.hash(password, 10);
            try {
                await (0,mongodb/* connectMongoDB */.q)();
                let existingUser = await models_user/* default.findOne */.Z.findOne({
                    email
                });
                if (!existingUser) {
                    const newUser = new models_user/* default */.Z({
                        email,
                        firstName,
                        password: hashedPassword,
                        lastName,
                        image,
                        dob: today,
                        oncologistsHospital: "Mercurial-AI",
                        joyrideCompleted: false
                    });
                    newUser.entries = [];
                    existingUser = await newUser.save();
                } else {
                    await models_user/* default.updateOne */.Z.updateOne({
                        email
                    }, {
                        $set: {
                            image,
                            firstName
                        }
                    });
                }
                accessToken = external_jsonwebtoken_default().sign({
                    sub: existingUser._id
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: "48hr"
                });
                return user;
            } catch (error) {
                console.error("Error during sign in: ", error);
                throw error;
            }
        },
        jwt ({ token , profile  }) {
            if (profile) {
                token.id = profile.id;
                token.image = profile.avatar_url || profile.picture;
            }
            return token;
        },
        session: ({ session , token  })=>{
            if (session?.user && accessToken) {
                session.user.customToken = String(accessToken);
            }
            return session;
        },
        authorized ({ auth  }) {
            return !!auth?.user;
        }
    },
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true
            }
        }
    },
    secret: process.env.NEXTAUTH_SECRET
})); // import NextAuth from "next-auth";
 // import AppleProvider from "next-auth/providers/apple";
 // export default NextAuth({
 //   session: {
 //     strategy: "jwt",
 //   },
 //   providers: [
 //     AppleProvider({
 //       clientId: process.env.APPLE_CLIENT_ID,
 //       clientSecret: process.env.APPLE_CLIENT_SECRET,
 //     }),
 //   ],
 //   cookies: {
 //     pkceCodeVerifier: {
 //       name: "next-auth.pkce.code_verifier",
 //       options: {
 //         httpOnly: true,
 //         sameSite: "none",
 //         path: "/",
 //         secure: true,
 //       },
 //     },
 //   },
 //   secret: process.env.NEXTAUTH_SECRET,
 // });


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7110], () => (__webpack_exec__(8504)));
module.exports = __webpack_exports__;

})();