"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[833],{

/***/ 4833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/comp/layout/page.tsx
var page = __webpack_require__(4794);
// EXTERNAL MODULE: ./src/comp/layout/auth-page-layout.tsx + 1 modules
var auth_page_layout = __webpack_require__(5314);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.7.1/node_modules/yup/index.esm.js
var index_esm = __webpack_require__(8895);
// EXTERNAL MODULE: ./src/lib/modal.tsx
var lib_modal = __webpack_require__(7007);
// EXTERNAL MODULE: ./src/comp/ui/form/form.tsx + 1 modules
var form_form = __webpack_require__(822);
// EXTERNAL MODULE: ./src/comp/ui/form/derived/email-input.tsx
var email_input = __webpack_require__(9097);
// EXTERNAL MODULE: ./src/comp/ui/form/derived/password-input.tsx + 1 modules
var password_input = __webpack_require__(9504);
// EXTERNAL MODULE: ./src/comp/ui/form/form-error.tsx + 1 modules
var form_error = __webpack_require__(7147);
// EXTERNAL MODULE: ./src/comp/ui/form/submit-button.tsx
var submit_button = __webpack_require__(7193);
// EXTERNAL MODULE: ./src/comp/main-modal-container.tsx + 1 modules
var main_modal_container = __webpack_require__(5147);
// EXTERNAL MODULE: ./src/api/password.ts
var api_password = __webpack_require__(3834);
;// ./src/features/password/comp/request-password-reset-form.tsx
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




const schema = index_esm/* object */.Ik({
    email: index_esm/* string */.Yj().required().email().label("Email")
});
const RequestPasswordResetForm = ({ onSuccess })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
        schema: schema,
        defaultValues: {
            email: ""
        },
        onSubmit: ({ email })=>_async_to_generator(function*() {
                yield (0,api_password/* requestPasswordReset */.w)(email);
                onSuccess();
            })(),
        children: ({ register, formState })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(email_input/* EmailInput */.j, {
                        reg: register("email"),
                        placeholder: "Enter your email",
                        label: "Email",
                        error: formState.errors.email
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_error/* FormError */.j, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                        children: "Reset"
                    })
                ]
            })
    });
};

// EXTERNAL MODULE: ./src/comp/modals/info-modal.tsx
var info_modal = __webpack_require__(7003);
;// ./src/features/password/comp/request-password-reset-modal.tsx
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





const RequestPasswordResetModal = (props)=>{
    const infoModal = (0,lib_modal/* useModal */.hS)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(lib_modal/* Modal */.aF, _object_spread_props(_object_spread({}, props), {
                children: (modal)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(main_modal_container/* MainModalContainer */.K, {
                        title: "Reset password",
                        w: 600,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPasswordResetForm, {
                            onSuccess: ()=>{
                                modal.close();
                                infoModal.open();
                            }
                        })
                    })
            })),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(info_modal/* InfoModal */.W, {
                ref: infoModal.ref,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "We`ve sent a link to your email"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Please follow it to continue resetting your password"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/features/auth/api/auth.ts
var auth = __webpack_require__(1398);
;// ./src/features/auth/comp/login-form.tsx
function login_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function login_form_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                login_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                login_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}






const login_form_schema = index_esm/* object */.Ik({
    email: index_esm/* string */.Yj().required().email().label("Email"),
    password: index_esm/* string */.Yj().required().label("Password")
});
const LoginForm = ({ onSuccess })=>{
    const loginUser = (0,auth/* useLogin */.vz)();
    const modal = (0,lib_modal/* useModal */.hS)();
    const handleSubmit = (data)=>login_form_async_to_generator(function*() {
            yield loginUser(data);
            onSuccess();
        })();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
                schema: login_form_schema,
                defaultValues: {
                    email: "",
                    password: ""
                },
                onSubmit: handleSubmit,
                children: ({ register, formState })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(email_input/* EmailInput */.j, {
                                reg: register("email"),
                                label: "Email",
                                placeholder: "Enter your email here",
                                error: formState.errors.email,
                                autoComplete: "username"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(password_input/* PasswordInput */.y.WithRecover, {
                                reg: register("password"),
                                label: "Password",
                                placeholder: "Enter your password here",
                                error: formState.errors.password,
                                autoComplete: "current-password",
                                onRecover: ()=>modal.open()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_error/* FormError */.j, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                                children: "Log in"
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPasswordResetModal, {
                ref: modal.ref
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
;// ./src/app/pages/login.tsx






const LoginPage = ()=>{
    const navigate = (0,chunk_B7RQU5TL/* useNavigate */.Zp)();
    const handleSuccess = ()=>{
        navigate(paths/* paths */.f.profile.path);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page/* Page */.Y, {
        title: "Login",
        description: "Log in to your Open Banking account",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(auth_page_layout/* AuthPageLayout */._, {
            title: "Welcome Back",
            subTitle: "Enter your details to log in to your Banking Dashboard!",
            form: {
                title: "Log in",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoginForm, {
                    onSuccess: handleSuccess
                })
            },
            hint: {
                text: "Don't have an account?",
                link: {
                    href: paths/* paths */.f.register.path,
                    text: "Register"
                }
            }
        })
    });
};
/* harmony default export */ const login = (LoginPage);


/***/ })

}]);