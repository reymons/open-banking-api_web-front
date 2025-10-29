"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[502],{

/***/ 12:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fb/e7aad620b35678302126.png";

/***/ }),

/***/ 822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Form)
});

// UNUSED EXPORTS: DEFAULT_ERROR_MESSAGE

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.63.0_react@19.1.1_/node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(50);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(6865);
;// ./src/comp/ui/form/form.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const form_module = ({"form":"YqHad"});
;// ./src/comp/ui/form/form.tsx
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}





const DEFAULT_ERROR_MESSAGE = "Something went wrong";
const Form = ({ defaultValues, schema, onSubmit, children, options })=>{
    const formRef = (0,react.useRef)(null);
    const form = (0,index_esm/* useForm */.mN)(_object_spread({
        defaultValues,
        resolver: (0,yup/* yupResolver */.t)(schema)
    }, options));
    const handleSubmit = (data)=>_async_to_generator(function*() {
            try {
                yield onSubmit(data);
            } catch (err) {
                form.setError("root", {
                    message: err instanceof Error ? err.message : DEFAULT_ERROR_MESSAGE
                });
            }
        })();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FormProvider */.Op, _object_spread_props(_object_spread({}, form), {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
            className: form_module.form,
            onSubmit: form.handleSubmit(handleSubmit),
            ref: formRef,
            children: children(_object_spread_props(_object_spread({}, form), {
                formRef
            }))
        })
    }));
};


/***/ }),

/***/ 1049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/default-user-pic/6e32946a2054fc231a3e.jpg";

/***/ }),

/***/ 1398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LR: () => (/* binding */ useRegister),
/* harmony export */   Wn: () => (/* binding */ useLogout),
/* harmony export */   vz: () => (/* binding */ useLogin)
/* harmony export */ });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8277);
/* harmony import */ var _stores_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5995);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


function useRegister() {
    return (data)=>_async_to_generator(function*() {
            yield (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__/* .register */ .kz)(data);
        })();
}
function useLogin() {
    const mutateUser = (0,_stores_user__WEBPACK_IMPORTED_MODULE_1__/* .useMutateUser */ .rZ)();
    return (data)=>_async_to_generator(function*() {
            const res = yield (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__/* .login */ .iD)(data);
            mutateUser(res.data);
        })();
}
function useLogout() {
    const mutateUser = (0,_stores_user__WEBPACK_IMPORTED_MODULE_1__/* .useMutateUser */ .rZ)();
    return ()=>_async_to_generator(function*() {
            yield (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__/* .logout */ .ri)();
            mutateUser(null);
        // After we set the user to null,
        // the logic inside the Protected component will redirect
        // a user to the login page,
        // so there's no need for an explicit redirect
        })();
}


/***/ }),

/***/ 2151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/insta/160b28abd8b53903cdf8.png";

/***/ }),

/***/ 2307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ PrimaryContainer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./src/lib/css.ts
var css = __webpack_require__(2783);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/comp/ui/primary-container.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const primary_container_module = ({"wrapper":"iJwuV","glow":"lQNcO","title":"JSFsI"});
;// ./src/comp/ui/primary-container.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}




const PrimaryContainer = ({ className, title, children, w, h, glow = true, ref, style })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(className, primary_container_module.wrapper, glow && primary_container_module.glow),
        ref: ref,
        style: _object_spread_props(_object_spread({}, style), {
            width: w ? `${(0,css/* px2rem */.P)(w)}rem` : undefined,
            height: h ? `${(0,css/* px2rem */.P)(h)}rem` : undefined
        }),
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: primary_container_module.title,
                children: title
            }),
            children
        ]
    });
};


/***/ }),

/***/ 2483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/twitter/8d4756a863850efa85f2.png";

/***/ }),

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ px2rem)
/* harmony export */ });
function px2rem(px, base = 16) {
    return px / base;
}


/***/ }),

/***/ 3834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ requestPasswordReset),
/* harmony export */   x: () => (/* binding */ resetPassword)
/* harmony export */ });
/* harmony import */ var _lib_client_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3791);

// Sends a reset-password link to the specified email
function requestPasswordReset(email) {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.post("/passwords/reset-requests", {
        email
    });
}
function resetPassword(token, password) {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.post("/passwords/reset-requests/submit", {
        token,
        password
    });
}


/***/ }),

/***/ 4720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/flat/8604b7b2370171763650.svg";

/***/ }),

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);

// Page container
// Use it to wrap your pages to provide some meta info
const Page = ({ children, title, description })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                children: `Open Banking | ${title}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                property: "og:description",
                content: description
            }),
            children
        ]
    });
};


/***/ }),

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
;// ./src/comp/ui/logo.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const logo_module = ({"logo":"ed9lr"});
;// ./src/comp/ui/logo.tsx




const Logo = ()=>{
    const png = __webpack_require__(8483);
    const webp1x = __webpack_require__(9870);
    const webp2x = __webpack_require__(8593);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
        className: logo_module.logo,
        to: paths/* paths */.f.home.path,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                    srcSet: `${webp1x}, ${webp2x} 2x`,
                    type: "image/webp"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: png,
                    alt: "Open Banking logo",
                    "aria-hidden": true,
                    style: {
                        objectFit: "contain"
                    },
                    width: 170,
                    height: 40
                })
            ]
        })
    });
};


/***/ }),

/***/ 5147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ MainModalContainer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./src/comp/ui/primary-container.tsx + 1 modules
var primary_container = __webpack_require__(2307);
// EXTERNAL MODULE: ./src/lib/modal.tsx
var lib_modal = __webpack_require__(7007);
// EXTERNAL MODULE: ./src/lib/hooks/use-outside-click.ts
var use_outside_click = __webpack_require__(5323);
;// ./src/comp/main-modal-container.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const main_modal_container_module = ({"wrapper":"WdBvh","background":"pPq45","popUp":"_7xVz-","closing":"CG2uQ","backgroundReverse":"X3HX6","popUpReverse":"ePmjP"});
;// ./src/comp/main-modal-container.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}






const animDuration = 300;
const MainModalContainer = (_param)=>{
    var { children } = _param, rest = _object_without_properties(_param, [
        "children"
    ]);
    const { modal, setCloseHandler } = (0,lib_modal/* useModalContext */.k3)();
    const wrapperRef = (0,react.useRef)(null);
    const cntRef = (0,react.useRef)(null);
    setCloseHandler((done)=>{
        var _wrapperRef_current;
        (_wrapperRef_current = wrapperRef.current) === null || _wrapperRef_current === void 0 ? void 0 : _wrapperRef_current.classList.add(main_modal_container_module.closing);
        setTimeout(done, animDuration);
    });
    (0,use_outside_click/* useOutsideClick */.j)({
        isOpen: true,
        ref: cntRef,
        onClick: ()=>modal.close()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: main_modal_container_module.wrapper,
        ref: wrapperRef,
        style: {
            "--anim-duration": `${animDuration}ms`
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(primary_container/* PrimaryContainer */.W, _object_spread_props(_object_spread({
            ref: cntRef
        }, rest), {
            children: children
        }))
    });
};


/***/ }),

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ AuthPageLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./src/comp/ui/logo.tsx + 1 modules
var logo = __webpack_require__(5144);
// EXTERNAL MODULE: ./src/comp/socials.tsx + 2 modules
var socials = __webpack_require__(5815);
// EXTERNAL MODULE: ./src/comp/ui/primary-container.tsx + 1 modules
var primary_container = __webpack_require__(2307);
;// ./src/comp/layout/auth-page-layout.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const auth_page_layout_module = ({"wrapper":"vG40i","bg":"_6rM5I","left":"_4jIdR","title":"cKeWf","subTitle":"t-X0d","authLink":"gpGcZ","socials":"_8tyV6","formCnt":"wHubk","logoMobile":"uN4sx","inner":"zU4KR"});
;// ./src/comp/layout/auth-page-layout.tsx







const AuthPageLayout = ({ title, subTitle, form, hint })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: auth_page_layout_module.wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classnames_default()("cnt", auth_page_layout_module.inner),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: auth_page_layout_module.logoMobile,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: auth_page_layout_module.left,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "fs-lg fw-500 text-primary",
                                    children: "Open Banking"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: auth_page_layout_module.title,
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: auth_page_layout_module.subTitle,
                                    children: subTitle
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(socials/* Socials */.l, {
                            className: auth_page_layout_module.socials
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(primary_container/* PrimaryContainer */.W, {
                    className: auth_page_layout_module.formCnt,
                    title: form.title,
                    w: 787,
                    children: [
                        form.element,
                        !!hint && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classnames_default()(auth_page_layout_module.authLink, "text-hint fw-500 fsm-sm"),
                            children: [
                                hint.text,
                                " ",
                                hint.link ? /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    to: hint.link.href,
                                    className: "inline-clickable",
                                    children: hint.link.text
                                }) : hint.custom
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 5323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9729);

const useOutsideClick = (opts)=>{
    const { onClick, isOpen, ref, deps = [] } = opts;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const node = ref.current;
        if (!node || !isOpen) return;
        const handleClick = (e)=>{
            if (!node.contains(e.target)) onClick();
        };
        document.addEventListener("click", handleClick, {
            capture: true
        });
        return ()=>{
            document.removeEventListener("click", handleClick, {
                capture: true
            });
        };
    // eslint-disable-next-line
    }, [
        ref,
        isOpen,
        onClick,
        ...deps
    ]);
};


/***/ }),

/***/ 5776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
;// ./src/comp/ui/preloader.tsx

const Preloader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        viewBox: "0 0 200 200",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                id: "a8",
                cx: ".66",
                fx: ".66",
                cy: ".3125",
                fy: ".3125",
                gradientTransform: "scale(1.5)",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "0",
                        stopColor: "#FFFFFF"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: ".3",
                        stopColor: "#FFFFFF",
                        stopOpacity: ".9"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: ".6",
                        stopColor: "#FFFFFF",
                        stopOpacity: ".6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: ".8",
                        stopColor: "#FFFFFF",
                        stopOpacity: ".3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "1",
                        stopColor: "#FFFFFF",
                        stopOpacity: "0"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                // @ts-expect-error: 'transformOrigin' exists for circle element
                transformOrigin: "center",
                fill: "none",
                stroke: "url(#a8)",
                strokeWidth: "15",
                strokeLinecap: "round",
                strokeDasharray: "200 1000",
                strokeDashoffset: "0",
                cx: "100",
                cy: "100",
                r: "70",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                    type: "rotate",
                    attributeName: "transform",
                    calcMode: "spline",
                    dur: "2",
                    values: "360;0",
                    keyTimes: "0;1",
                    keySplines: "0 0 1 1",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                // @ts-expect-error: 'transformOrigin' exists for circle element
                transformOrigin: "center",
                fill: "none",
                opacity: ".2",
                stroke: "#FFFFFF",
                strokeWidth: "15",
                strokeLinecap: "round",
                cx: "100",
                cy: "100",
                r: "70"
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/comp/ui/flat-icon.tsx + 1 modules
var flat_icon = __webpack_require__(8117);
;// ./src/comp/ui/button.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const button_module = ({"button":"IZafq","stretch":"evY0B"});
;// ./src/comp/ui/button.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}






const Button = (_param)=>{
    var { children, kind = "primary", size = "md", loading, beforeEnd, stretch, asLink, type } = _param, rest = _object_without_properties(_param, [
        "children",
        "kind",
        "size",
        "loading",
        "beforeEnd",
        "stretch",
        "asLink",
        "type"
    ]);
    const Element = asLink ? chunk_B7RQU5TL/* Link */.N_ : "button";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Element, _object_spread_props(_object_spread({
        className: classnames_default()(button_module.button, stretch && button_module.stretch),
        "data-kind": kind,
        "data-size": size,
        "aria-busy": loading,
        type: asLink ? type : type !== null && type !== void 0 ? type : "button"
    }, rest), {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Preloader, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                children,
                beforeEnd
            ]
        })
    }));
};
const WithArrow = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, _object_spread_props(_object_spread({}, props), {
        beforeEnd: /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
            type: "arrow-small-right"
        })
    }));
};
WithArrow.displayName = "Button.WithArrow";
Button.WithArrow = WithArrow;


/***/ }),

/***/ 5815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Socials)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/comp/image.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

const Img = (_param)=>{
    var { className, src, alt, w, h, objectFit, loading = "lazy" } = _param, rest = _object_without_properties(_param, [
        "className",
        "src",
        "alt",
        "w",
        "h",
        "objectFit",
        "loading"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", _object_spread({
        className: className,
        width: w,
        height: h,
        src: src,
        alt: alt,
        style: {
            objectFit
        },
        loading: loading
    }, rest));
};

;// ./src/comp/socials.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const socials_module = ({"socials":"mXNzu"});
;// ./src/comp/socials.tsx




const Social = ({ imgSrc, href, label })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": `Visit our ${label} page`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Img, {
                src: imgSrc,
                w: 30,
                h: 30,
                alt: label
            })
        })
    });
};
const Socials = ({ className })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        className: classnames_default()(className, socials_module.socials),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Social, {
                imgSrc: __webpack_require__(12),
                href: "https://facebook.com",
                label: "facebook"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Social, {
                imgSrc: __webpack_require__(2151),
                href: "https://instagram.com",
                label: "instagram"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Social, {
                imgSrc: __webpack_require__(2483),
                href: "https://x.com",
                label: "twitter"
            })
        ]
    });
};


/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ InfoModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);
/* harmony import */ var _lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7007);
/* harmony import */ var _main_modal_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5147);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5776);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




const InfoModal = (_param)=>{
    var { children } = _param, rest = _object_without_properties(_param, [
        "children"
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_modal__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .aF, _object_spread_props(_object_spread({}, rest), {
        children: (modal)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_main_modal_container__WEBPACK_IMPORTED_MODULE_2__/* .MainModalContainer */ .K, {
                title: "Info",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "fsm-sm",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            marginTop: "2rem"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
                            onClick: ()=>modal.close(),
                            stretch: true,
                            children: "Close"
                        })
                    })
                ]
            })
    }));
};


/***/ }),

/***/ 7147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ FormError)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(6865);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/comp/ui/form/form-error.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const form_error_module = ({"error":"eOBsO"});
;// ./src/comp/ui/form/form-error.tsx




const FormError = ()=>{
    const { errors } = (0,index_esm/* useFormState */.lN)();
    return errors.root ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()(form_error_module.error, "fsm-sm"),
        children: errors.root.message
    }) : null;
};


/***/ }),

/***/ 7193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5776);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6865);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}



const SubmitButton = (props)=>{
    const { formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .useFormContext */ .xW)();
    const { isSubmitting, isSubmitSuccessful } = formState;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, _object_spread_props(_object_spread({
        stretch: true
    }, props), {
        loading: isSubmitting,
        disabled: isSubmitSuccessful,
        type: "submit"
    }));
};


/***/ }),

/***/ 7594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ Input),
  D: () => (/* binding */ InputRaw)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
;// ./src/comp/ui/form/form-field.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const form_field_module = ({"label":"z-cxY","error":"tMUu4"});
;// ./src/comp/ui/form/form-field.tsx



const FormField = ({ label, labelId, children, error })=>{
    const hasError = !!error;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(form_field_module.label, hasError && form_field_module.error),
                id: labelId,
                "aria-live": "polite",
                children: hasError ? error.message : label
            }),
            children
        ]
    });
};

;// ./src/comp/ui/form/input.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const input_module = ({"wrapper":"_5OHgl","error":"G7cKd","sideContent":"BBIVB"});
;// ./src/comp/ui/form/input.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}





const InputRaw = (_param)=>{
    var { type, autoComplete, placeholder, beforeEnd, invalid, reg, style } = _param, rest = _object_without_properties(_param, [
        "type",
        "autoComplete",
        "placeholder",
        "beforeEnd",
        "invalid",
        "reg",
        "style"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(input_module.wrapper, invalid && input_module.error),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", _object_spread({
                style: style,
                type: type,
                placeholder: placeholder,
                "aria-invalid": invalid,
                autoComplete: autoComplete
            }, rest, reg)),
            beforeEnd
        ]
    });
};
const Input = (_param)=>{
    var { error, label } = _param, rest = _object_without_properties(_param, [
        "error",
        "label"
    ]);
    const labelId = (0,react.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormField, {
        error: error,
        label: label,
        labelId: labelId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputRaw, _object_spread_props(_object_spread({}, rest), {
            "aria-labelledby": labelId,
            invalid: !!error
        }))
    });
};
const WithSideContent = (_param)=>{
    var { pr, style, side } = _param, rest = _object_without_properties(_param, [
        "pr",
        "style",
        "side"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, _object_spread_props(_object_spread({}, rest), {
        style: _object_spread_props(_object_spread({}, style), {
            paddingRight: pr
        }),
        beforeEnd: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: input_module.sideContent,
            children: side
        })
    }));
};
WithSideContent.displayName = "Input.WithSideContent";
Input.WithSideContent = WithSideContent;


/***/ }),

/***/ 7669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ ProfileControl)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/stores/user.ts + 1 modules
var stores_user = __webpack_require__(5995);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
;// ./src/comp/layout/profile/profile-control.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const profile_control_module = ({"img":"PM-ic"});
;// ./src/comp/layout/profile/profile-control.tsx





const ProfileControl = ({ className })=>{
    const user = (0,stores_user/* useUser */.Jd)();
    if (!user) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
        className: className,
        "aria-label": "Go to your profile",
        to: paths/* paths */.f.profile.path,
        style: {
            display: "inline-block",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: profile_control_module.img,
            alt: "User",
            src: __webpack_require__(1049)
        })
    });
};


/***/ }),

/***/ 8117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ FlatIcon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
;// ./src/comp/ui/flat-icon.scss
// extracted by mini-css-extract-plugin

;// ./src/comp/ui/flat-icon.tsx


const FlatIcon = ({ type, w = 21, h = 21, color, transform })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        className: "flat-icon",
        width: w,
        height: h,
        style: color ? {
            "--color-flat-icon": color
        } : undefined,
        transform: transform,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
            href: `${__webpack_require__(4720)}#${type}`
        })
    });
};


/***/ }),

/***/ 8277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U6: () => (/* binding */ submitVerification),
/* harmony export */   iD: () => (/* binding */ login),
/* harmony export */   kz: () => (/* binding */ register),
/* harmony export */   ri: () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export sendVerificationCode */
/* harmony import */ var _lib_client_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3791);

function register(data) {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.post("/auth/sign-up", data);
}
function login(data) {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.post("/auth/sign-in", data);
}
function logout() {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.delete("/auth/sign-out");
}
function submitVerification(email, code) {
    return _lib_client_http__WEBPACK_IMPORTED_MODULE_0__/* .clientV1 */ .r.post("/auth/verification", {
        email,
        code
    });
}
function sendVerificationCode(email) {
    return clientV1.post("/auth/verification/code", {
        email
    });
}


/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo/14d1d4a9c1d1b0a0db3c.png";

/***/ }),

/***/ 8593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo/f47510dcb8aedba733b3.webp";

/***/ }),

/***/ 9097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EmailInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);
/* harmony import */ var _lib_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2783);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7594);
/* harmony import */ var _ui_flat_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8117);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}




const EmailInput = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_input__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .p.WithSideContent, _object_spread_props(_object_spread({}, props), {
        pr: `${(0,_lib_css__WEBPACK_IMPORTED_MODULE_1__/* .px2rem */ .P)(54)}rem`,
        side: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_flat_icon__WEBPACK_IMPORTED_MODULE_3__/* .FlatIcon */ .f, {
            type: "envelope"
        })
    }));
};


/***/ }),

/***/ 9504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ PasswordInput)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/lib/css.ts
var css = __webpack_require__(2783);
// EXTERNAL MODULE: ./src/comp/ui/flat-icon.tsx + 1 modules
var flat_icon = __webpack_require__(8117);
// EXTERNAL MODULE: ./src/comp/ui/form/input.tsx + 3 modules
var input = __webpack_require__(7594);
;// ./src/comp/ui/form/derived/password-input.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const password_input_module = ({"recoverBtn":"d6VeP"});
;// ./src/comp/ui/form/derived/password-input.tsx
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}







const PasswordInput = (_param)=>{
    var { side, pr } = _param, rest = _object_without_properties(_param, [
        "side",
        "pr"
    ]);
    const [visible, setVisible] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.p.WithSideContent, _object_spread_props(_object_spread({}, rest), {
        pr: pr !== null && pr !== void 0 ? pr : `${(0,css/* px2rem */.P)(54)}rem`,
        type: visible ? "text" : "password",
        side: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                side,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "icon-btn",
                    type: "button",
                    "aria-pressed": visible,
                    "aria-label": visible ? "Hide password" : "Show password",
                    onClick: ()=>setVisible((f)=>!f),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                        type: visible ? "lock-unlocked" : "lock-locked"
                    })
                })
            ]
        })
    }));
};
const WithRecover = (_param)=>{
    var { onRecover } = _param, rest = _object_without_properties(_param, [
        "onRecover"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordInput, _object_spread_props(_object_spread({}, rest), {
        pr: `${(0,css/* px2rem */.P)(120)}rem`,
        side: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: "text-hint",
                    children: "|"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: classnames_default()("inline-clickable", password_input_module.recoverBtn),
                    type: "button",
                    onClick: onRecover,
                    "aria-label": "Recover password",
                    children: "Forgot?"
                })
            ]
        })
    }));
};
WithRecover.displayName = "PasswordInput.WithRecover";
PasswordInput.WithRecover = WithRecover;


/***/ }),

/***/ 9870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo/5f60b030c5c6ec6556b8.webp";

/***/ })

}]);