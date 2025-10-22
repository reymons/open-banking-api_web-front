"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[194],{

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/comp/layout/page.tsx
var page = __webpack_require__(4794);
// EXTERNAL MODULE: ./src/comp/layout/auth-page-layout.tsx + 1 modules
var auth_page_layout = __webpack_require__(5314);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.7.1/node_modules/yup/index.esm.js
var index_esm = __webpack_require__(8895);
// EXTERNAL MODULE: ./src/comp/ui/form/form.tsx + 1 modules
var form_form = __webpack_require__(822);
// EXTERNAL MODULE: ./src/comp/ui/form/input.tsx + 3 modules
var input = __webpack_require__(7594);
// EXTERNAL MODULE: ./src/comp/ui/form/derived/email-input.tsx
var email_input = __webpack_require__(9097);
// EXTERNAL MODULE: ./src/comp/ui/form/derived/password-input.tsx + 1 modules
var password_input = __webpack_require__(9504);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/comp/ui/form/checkbox.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const checkbox_module = ({"input":"ROGd1","error":"d3CD3","invalid":"Nf5Ke","withLabel":"kDY16"});
;// ./src/comp/ui/form/checkbox.tsx
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




const Checkbox = ({ id, reg, error })=>{
    const hasError = !!error;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("input", _object_spread_props(_object_spread({}, reg), {
        className: classnames_default()(checkbox_module.input, hasError && checkbox_module.error),
        type: "checkbox",
        id: id,
        "aria-invalid": hasError
    }));
};
const WithLabel = (_param)=>{
    var { label } = _param, rest = _object_without_properties(_param, [
        "label"
    ]);
    const id = (0,react.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: checkbox_module.withLabel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox, _object_spread({
                id: id
            }, rest)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                htmlFor: id,
                children: label
            })
        ]
    });
};
WithLabel.displayName = "Checkbox.WithLabel";
Checkbox.WithLabel = WithLabel;

// EXTERNAL MODULE: ./src/comp/ui/form/form-error.tsx + 1 modules
var form_error = __webpack_require__(7147);
// EXTERNAL MODULE: ./src/comp/ui/form/submit-button.tsx
var submit_button = __webpack_require__(7193);
// EXTERNAL MODULE: ./src/lib/css.ts
var css = __webpack_require__(2783);
// EXTERNAL MODULE: ./src/comp/ui/flat-icon.tsx
var flat_icon = __webpack_require__(2958);
;// ./src/features/auth/comp/base-user-info-form.tsx
function base_user_info_form_define_property(obj, key, value) {
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
function base_user_info_form_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            base_user_info_form_define_property(target, key, source[key]);
        });
    }
    return target;
}







const schema = index_esm/* object */.Ik({
    firstName: index_esm/* string */.Yj().required().label("First name"),
    lastName: index_esm/* string */.Yj().required().label("Last name"),
    email: index_esm/* string */.Yj().required().email().label("Email"),
    password: index_esm/* string */.Yj().required().min(6).max(100).label("Password"),
    cpassword: index_esm/* string */.Yj().required().oneOf([
        index_esm/* ref */.KR("password")
    ], "Passwords do not match").label("Confirm password"),
    termsAccepted: index_esm/* boolean */.zM().oneOf([
        true
    ])
});
const BaseUserInfoForm = ({ defaultValues, onSubmit })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
        schema: schema,
        onSubmit: onSubmit,
        defaultValues: base_user_info_form_object_spread({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cpassword: "",
            termsAccepted: false
        }, defaultValues),
        children: ({ register, formState })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.p.WithSideContent, {
                        reg: register("firstName"),
                        label: "First name",
                        placeholder: "Enter your first name here",
                        error: formState.errors.firstName,
                        pr: `${(0,css/* px2rem */.P)(54)}rem`,
                        side: /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                            type: "user"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.p.WithSideContent, {
                        reg: register("lastName"),
                        label: "Last name",
                        placeholder: "Enter your last name here",
                        error: formState.errors.lastName,
                        pr: `${(0,css/* px2rem */.P)(54)}rem`,
                        side: /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                            type: "user"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(email_input/* EmailInput */.j, {
                        label: "Email",
                        placeholder: "Enter your email here",
                        autoComplete: "email",
                        reg: register("email"),
                        error: formState.errors.email
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(password_input/* PasswordInput */.y, {
                        reg: register("password"),
                        label: "Password",
                        placeholder: "Enter your password here",
                        autoComplete: "off",
                        error: formState.errors.password
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(password_input/* PasswordInput */.y, {
                        reg: register("cpassword"),
                        label: "Confirm password",
                        placeholder: "Enter your password here again",
                        autoComplete: "off",
                        error: formState.errors.cpassword
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox.WithLabel, {
                        reg: register("termsAccepted"),
                        error: formState.errors.termsAccepted,
                        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                "I agree to all the",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    className: "inline-clickable",
                                    to: paths/* paths */.f.void.path,
                                    children: "Terms"
                                }),
                                ",",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    className: "inline-clickable",
                                    to: paths/* paths */.f.void.path,
                                    children: "Privacy Policy"
                                }),
                                " ",
                                "and",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    className: "inline-clickable",
                                    to: paths/* paths */.f.void.path,
                                    children: "Fees"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_error/* FormError */.j, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                        children: "Register"
                    })
                ]
            })
    });
};

;// ./src/comp/ui/form/code-input.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const code_input_module = ({"input":"cIfe-","wrapper":"_-9fbR"});
;// ./src/comp/ui/form/code-input.tsx



const isNumber = (value)=>/^[0-9]+$/.test(value);
const CodeInput = ({ codeLength, onCode, name, label })=>{
    const inputsRef = (0,react.useRef)({});
    const checkIfCodeReady = ()=>{
        const inputs = Object.values(inputsRef.current);
        const code = inputs.map((input)=>input.value).join("");
        if (code.length === codeLength) onCode(code);
    };
    const fillInputs = (text)=>{
        for(let i = 0; i < text.length; i++){
            const input = inputsRef.current[i];
            input.value = text[i];
            if (i === text.length - 1) {
                requestAnimationFrame(()=>input.focus());
            }
        }
        checkIfCodeReady();
    };
    const handlePaste = (e)=>{
        e.preventDefault();
        const text = e.clipboardData.getData("text").replace(/\D/g, "").substring(0, codeLength);
        fillInputs(text);
    };
    const handleKeyDown = (e)=>{
        if (e.key !== "Backspace") return;
        e.preventDefault(); // prevent onChange
        e.currentTarget.value = "";
        const id = +e.currentTarget.dataset.id;
        const nextInput = inputsRef.current[id - 1];
        if (nextInput) nextInput.focus();
    };
    const handleChange = (e)=>{
        const id = +e.target.dataset.id;
        const value = e.target.value;
        if (!isNumber(value)) {
            e.target.value = "";
            return;
        }
        // autoComplete="one-time-code"
        // - in Safari (if text length = 4) calls handleChange 4 times (one call per letter)
        // - in Chrome it calls handleChange once with the full text.
        if (value.length === codeLength) {
            fillInputs(value);
            return;
        }
        const nextInput = inputsRef.current[id + 1];
        e.target.value = value[value.length - 1];
        if (nextInput) {
            nextInput.focus();
        } else {
            checkIfCodeReady();
        }
    };
    const handleRef = (input)=>{
        if (input) {
            inputsRef.current[input.dataset.id] = input;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        className: code_input_module.wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("legend", {
                className: "sr-only",
                children: label
            }),
            Array.from({
                length: codeLength
            }, (_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    className: code_input_module.input,
                    name: name,
                    type: "tel",
                    "data-id": i,
                    ref: handleRef,
                    onKeyDown: handleKeyDown,
                    onChange: handleChange,
                    onPaste: handlePaste,
                    autoComplete: i === 0 ? "one-time-code" : undefined
                }, i))
        ]
    });
};

;// ./src/features/auth/comp/email-verification-form.tsx
function email_verification_form_define_property(obj, key, value) {
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
function email_verification_form_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            email_verification_form_define_property(target, key, source[key]);
        });
    }
    return target;
}



const codeLength = 6;
const email_verification_form_schema = index_esm/* object */.Ik({
    code: index_esm/* string */.Yj().required().length(codeLength).label("Verification code")
});
const EmailVerificationForm = ({ email, defaultValues, onSubmit, onChangeEmail })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
        schema: email_verification_form_schema,
        defaultValues: email_verification_form_object_spread({
            code: ""
        }, defaultValues),
        onSubmit: onSubmit,
        children: ({ setValue })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "fsm-sm",
                        children: [
                            "A ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("em", {
                                children: [
                                    codeLength,
                                    "-digit"
                                ]
                            }),
                            " code has been sent to ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("em", {
                                children: email
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "inline-clickable",
                                type: "button",
                                onClick: ()=>onChangeEmail(),
                                children: "Change"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeInput, {
                        name: "emailVerifCode",
                        codeLength: codeLength,
                        label: "Enter the code here that has been sent to your email",
                        onCode: (code)=>setValue("code", code)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_error/* FormError */.j, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                        children: "Verify"
                    })
                ]
            })
    });
};

// EXTERNAL MODULE: ./src/features/auth/api/auth.ts
var auth = __webpack_require__(1398);
// EXTERNAL MODULE: ./src/api/auth.ts
var api_auth = __webpack_require__(8277);
// EXTERNAL MODULE: ./src/stores/user.ts + 1 modules
var user = __webpack_require__(5995);
;// ./src/features/auth/api/verification.ts
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


function useSubmitVerification() {
    const mutateUser = (0,user/* useMutateUser */.rZ)();
    return (email, code)=>_async_to_generator(function*() {
            const resp = yield (0,api_auth/* submitVerification */.U6)(email, code);
            mutateUser(resp.data);
        })();
}
function useResendCode() {
    return (email)=>_async_to_generator(function*() {
            yield sendVerificationCode(email);
        })();
}

;// ./src/features/auth/comp/register-form.tsx
function register_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function register_form_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                register_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                register_form_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}






const DEFAULT_STEP = "base-info";
const RegisterForm = ({ onSuccess, onStepChange })=>{
    const [step, setStep] = (0,react.useState)(DEFAULT_STEP);
    const [baseInfo, setBaseInfo] = (0,react.useState)(null);
    const registerUser = (0,auth/* useRegister */.LR)();
    const submitVerification = useSubmitVerification();
    var _baseInfo_email;
    const email = (_baseInfo_email = baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.email) !== null && _baseInfo_email !== void 0 ? _baseInfo_email : "";
    const changeStep = (step)=>{
        setStep(step);
        onStepChange === null || onStepChange === void 0 ? void 0 : onStepChange(step);
    };
    const handleBaseInfoSubmit = (info)=>register_form_async_to_generator(function*() {
            if (email !== info.email) {
                yield registerUser(info);
            }
            setBaseInfo(info);
            changeStep("verification");
        })();
    const handleVerificationSubmit = (verif)=>register_form_async_to_generator(function*() {
            yield submitVerification(email, verif.code);
            onSuccess();
        })();
    const handleChangeEmail = ()=>{
        changeStep("base-info");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            step === "base-info" && /*#__PURE__*/ (0,jsx_runtime.jsx)(BaseUserInfoForm, {
                onSubmit: handleBaseInfoSubmit,
                defaultValues: baseInfo
            }),
            step === "verification" && /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailVerificationForm, {
                email: email,
                onSubmit: handleVerificationSubmit,
                onChangeEmail: handleChangeEmail
            })
        ]
    });
};

;// ./src/features/auth/hooks/use-register-form.ts


function useRegisterForm() {
    const [step, setStep] = (0,react.useState)(DEFAULT_STEP);
    return {
        step,
        isDefaultStep: step === DEFAULT_STEP,
        formProps: {
            onStepChange: setStep
        }
    };
}

;// ./src/app/pages/register.tsx
function register_define_property(obj, key, value) {
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
function register_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            register_define_property(target, key, source[key]);
        });
    }
    return target;
}






const RegisterPage = ()=>{
    const navigate = (0,chunk_B7RQU5TL/* useNavigate */.Zp)();
    const { formProps, isDefaultStep } = useRegisterForm();
    const handleSuccess = ()=>{
        navigate(paths/* paths */.f.profile.path);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page/* Page */.Y, {
        title: "Registration",
        description: "Register on Open Banking",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(auth_page_layout/* AuthPageLayout */._, {
            title: `Experience\nhassle-free banking`,
            subTitle: `Experience simple, secure, and stress-free banking. Say goodbye\nto long queues and complex procedures and hello to hassle-free\nbanking with Open Banking`,
            form: {
                title: isDefaultStep ? "Register" : "Email verification",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(RegisterForm, register_object_spread({
                    onSuccess: handleSuccess
                }, formProps))
            },
            hint: {
                text: "Already have an account?",
                link: {
                    href: paths/* paths */.f.login.path,
                    text: "Log in"
                }
            }
        })
    });
};
/* harmony default export */ const register = (RegisterPage);


/***/ })

}]);