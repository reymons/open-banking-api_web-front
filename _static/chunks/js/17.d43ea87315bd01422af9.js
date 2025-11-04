"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[17],{

/***/ 7017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reset_password)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./src/comp/layout/auth-page-layout.tsx + 1 modules
var auth_page_layout = __webpack_require__(5314);
// EXTERNAL MODULE: ./src/comp/layout/page.tsx
var page = __webpack_require__(4794);
// EXTERNAL MODULE: ./src/comp/modals/info-modal.tsx + 2 modules
var info_modal = __webpack_require__(5383);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.7.1/node_modules/yup/index.esm.js
var index_esm = __webpack_require__(8895);
// EXTERNAL MODULE: ./src/comp/ui/form/form.tsx + 1 modules
var form_form = __webpack_require__(822);
// EXTERNAL MODULE: ./src/comp/ui/form/derived/password-input.tsx + 1 modules
var password_input = __webpack_require__(9504);
// EXTERNAL MODULE: ./src/comp/ui/form/form-error.tsx + 1 modules
var form_error = __webpack_require__(7147);
// EXTERNAL MODULE: ./src/comp/ui/form/submit-button.tsx
var submit_button = __webpack_require__(7193);
// EXTERNAL MODULE: ./src/api/password.ts
var api_password = __webpack_require__(3834);
;// ./src/features/password/comp/reset-password-form.tsx
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
    password: index_esm/* string */.Yj().required().min(6).max(100).label("Password"),
    cpassword: index_esm/* string */.Yj().required().oneOf([
        index_esm/* ref */.KR("password")
    ], "Passwords do not match").label("Confirm password")
});
const ResetPasswordForm = ({ resetToken, onSuccess })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
        schema: schema,
        defaultValues: {
            password: "",
            cpassword: ""
        },
        onSubmit: ({ password })=>_async_to_generator(function*() {
                yield (0,api_password/* resetPassword */.x)(resetToken, password);
                onSuccess();
            })(),
        children: ({ register, formState })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(password_input/* PasswordInput */.y, {
                        reg: register("password"),
                        placeholder: "Enter a new password here",
                        label: "New password",
                        error: formState.errors.password,
                        autoComplete: "off"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(password_input/* PasswordInput */.y, {
                        reg: register("cpassword"),
                        placeholder: "Enter your new password here again",
                        label: "Confirm new password",
                        error: formState.errors.cpassword,
                        autoComplete: "off"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_error/* FormError */.j, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                        children: "Reset"
                    })
                ]
            })
    });
};

// EXTERNAL MODULE: ./src/lib/modal.tsx
var modal = __webpack_require__(7007);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
;// ./src/app/pages/reset-password.tsx








const ResetPasswordPage = ()=>{
    const navigate = (0,chunk_B7RQU5TL/* useNavigate */.Zp)();
    const [params] = (0,chunk_B7RQU5TL/* useSearchParams */.ok)();
    const resetToken = params.get("token");
    const successModal = (0,modal/* useModal */.hS)();
    if (!resetToken) {
        return "Invalid params";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(page/* Page */.Y, {
        title: "Reset password",
        description: "Reset password on Open Banking",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(auth_page_layout/* AuthPageLayout */._, {
                title: "Reset password",
                subTitle: "",
                form: {
                    title: "Reset password",
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResetPasswordForm, {
                        onSuccess: ()=>successModal.open(),
                        resetToken: resetToken
                    })
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(info_modal/* InfoModal */.W, {
                ref: successModal.ref,
                onClose: ()=>navigate(paths/* paths */.f.login.path),
                withRearBtn: false,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Your password has been successfully reset!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Please log in again"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const reset_password = (ResetPasswordPage);


/***/ })

}]);