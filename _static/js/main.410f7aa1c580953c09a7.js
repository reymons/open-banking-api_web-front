"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[792],{

/***/ 3791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ clientV1)
});

;// ./src/config/env.ts
const HTTP_CLIENT_BASE_URL = "https://api.reymons.net";

// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.12.2/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(325);
;// ./src/lib/client/http.ts
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


const clientV1 = axios/* default */.A.create({
    baseURL: HTTP_CLIENT_BASE_URL + "/api/v1"
});
clientV1.interceptors.request.use((cfg)=>_async_to_generator(function*() {
        cfg.headers.set("Content-Type", "application/json");
        cfg.withCredentials = true;
        return cfg;
    })());
clientV1.interceptors.response.use((res)=>res, (err)=>{
    var _err_response;
    return Promise.reject(new Error((((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || err.message || "").trim() || "Unknown error has occurred"));
});


/***/ }),

/***/ 5056:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/client.js
var client = __webpack_require__(4066);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.90.2/node_modules/@tanstack/query-core/build/modern/queryClient.js + 4 modules
var queryClient = __webpack_require__(8065);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.90.2_react@19.1.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(6729);
;// ./src/app/provider.tsx


const provider_queryClient = new queryClient/* QueryClient */.E();
const AppProvider = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QueryClientProvider/* QueryClientProvider */.Ht, {
        client: provider_queryClient,
        children: children
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/stores/user.ts + 1 modules
var stores_user = __webpack_require__(5995);
;// ./src/comp/ui/loading-screen.tsx

const LoadingScreen = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        "aria-label": "Loading the page, please wait...",
        "aria-live": "polite",
        "aria-busy": true,
        style: {
            height: "100svh",
            backgroundColor: "var(--color-secondary)"
        },
        "data-testid": "loading-screen"
    });
};

;// ./src/features/auth/comp/protected.tsx





const Protected = ()=>{
    const user = (0,stores_user/* useUser */.Jd)();
    const isLoadingUser = (0,stores_user/* useIsLoadingUser */.LQ)();
    const loc = (0,chunk_B7RQU5TL/* useLocation */.zy)();
    if (isLoadingUser) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingScreen, {});
    }
    if (!user) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Navigate */.C5, {
            to: paths/* paths */.f.login.get({
                redirect: loc.pathname
            }),
            replace: true
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Outlet */.sv, {});
};

;// ./src/app/router.tsx






const HomePage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(500), __webpack_require__.e(103), __webpack_require__.e(502), __webpack_require__.e(676)]).then(__webpack_require__.bind(__webpack_require__, 8676)));
const RegisterPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(500), __webpack_require__.e(103), __webpack_require__.e(502), __webpack_require__.e(194)]).then(__webpack_require__.bind(__webpack_require__, 194)));
const LoginPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(500), __webpack_require__.e(103), __webpack_require__.e(502), __webpack_require__.e(36)]).then(__webpack_require__.bind(__webpack_require__, 1036)));
const ProfilePageLayout = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(500), __webpack_require__.e(502), __webpack_require__.e(951)]).then(__webpack_require__.bind(__webpack_require__, 6951)).then((m)=>({
            default: m.ProfilePageLayout
        })));
const ProfileBasePage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(502), __webpack_require__.e(104)]).then(__webpack_require__.bind(__webpack_require__, 5104)));
const ProfileAccountsPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(502), __webpack_require__.e(235)]).then(__webpack_require__.bind(__webpack_require__, 9235)));
const ProfileTransactionsPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(502), __webpack_require__.e(804)]).then(__webpack_require__.bind(__webpack_require__, 804)));
const ProfileSettingsPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(502), __webpack_require__.e(648)]).then(__webpack_require__.bind(__webpack_require__, 2648)));
const AppRouter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* BrowserRouter */.Kd, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingScreen, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_B7RQU5TL/* Routes */.BV, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                        path: paths/* paths */.f.home.path,
                        Component: HomePage
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                        path: paths/* paths */.f.register.path,
                        Component: RegisterPage
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                        path: paths/* paths */.f.login.path,
                        Component: LoginPage
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                        Component: Protected,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_B7RQU5TL/* Route */.qh, {
                            path: paths/* paths */.f.profile.path,
                            Component: ProfilePageLayout,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                                    index: true,
                                    Component: ProfileBasePage
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                                    path: paths/* paths */.f.profile.accounts.path,
                                    Component: ProfileAccountsPage
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                                    path: paths/* paths */.f.profile.transactions.path,
                                    Component: ProfileTransactionsPage
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Route */.qh, {
                                    path: paths/* paths */.f.profile.settings.path,
                                    Component: ProfileSettingsPage
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/lib/modal.tsx
var modal = __webpack_require__(7007);
;// ./src/app/styles/global.scss
// extracted by mini-css-extract-plugin

;// ./src/app/index.tsx







const modalRoot = document.getElementById("modal-root");
if (!modalRoot) throw new Error("No modal root");
(0,modal/* setModalRoot */.IF)(modalRoot);
const rootEl = document.getElementById("app");
if (!rootEl) throw new Error("No root element");
const root = (0,client.createRoot)(rootEl);
root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.StrictMode, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppRouter, {})
    })
}));


/***/ }),

/***/ 5995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LQ: () => (/* binding */ useIsLoadingUser),
  rZ: () => (/* binding */ useMutateUser),
  Jd: () => (/* binding */ useUser)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.90.2_react@19.1.1/node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(6937);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.90.2_react@19.1.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(6729);
// EXTERNAL MODULE: ./src/lib/client/http.ts + 1 modules
var http = __webpack_require__(3791);
;// ./src/api/user.ts
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

function getCurrentUser() {
    return _async_to_generator(function*() {
        return http/* clientV1 */.r.get("/users/me");
    })();
}

;// ./src/stores/user.ts


const queryKey = "/users/me";
function useUser() {
    return (0,useQuery/* useQuery */.I)({
        queryKey: [
            queryKey
        ],
        queryFn: ()=>getCurrentUser().then((r)=>r.data),
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    }).data;
}
function useIsLoadingUser() {
    return (0,useQuery/* useQuery */.I)({
        queryKey: [
            queryKey
        ],
        enabled: false,
        queryFn: ()=>{}
    }).isPending;
}
function useMutateUser() {
    const client = (0,QueryClientProvider/* useQueryClient */.jE)();
    return (newUser)=>{
        client.setQueryData([
            queryKey
        ], newUser);
    };
}


/***/ }),

/***/ 7007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IF: () => (/* binding */ setModalRoot),
/* harmony export */   aF: () => (/* binding */ Modal),
/* harmony export */   hS: () => (/* binding */ useModal),
/* harmony export */   k3: () => (/* binding */ useModalContext)
/* harmony export */ });
/* unused harmony export useModalState */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8937);
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



const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useModalContext() {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);
    if (!ctx) throw new Error("Wrap your components in ModalContext");
    return ctx;
}
let modalRoot = null;
function setModalRoot(root) {
    modalRoot = root;
}
const Modal = ({ component: Component, ref })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isOpenRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isOpen);
    const isClosingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const closeHandlerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isModalState = typeof ref === "function";
    const control = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({
            open: ()=>{
                setIsOpen(true);
                isOpenRef.current = true;
            },
            close: ()=>{
                if (!isClosingRef.current) {
                    const finalize = ()=>{
                        isClosingRef.current = false;
                        isOpenRef.current = false;
                        setIsOpen(false);
                    };
                    isClosingRef.current = true;
                    const closeHandler = closeHandlerRef.current;
                    if (closeHandler) closeHandler(finalize);
                    else finalize();
                }
            },
            toggle: ()=>{
                if (isOpenRef.current) control.close();
                else control.open();
            }
        }))[0];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.style.overflow = isOpen ? "hidden" : "visible";
        return ()=>{
            document.body.style.overflow = "visible";
        };
    }, [
        isOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>_object_spread({
            isOpen
        }, control), // eslint-disable-next-line react-hooks/exhaustive-deps
    isModalState ? [
        isOpen
    ] : undefined);
    if (!modalRoot) {
        throw new Error("Modal root is null. You need to set it via setModalRoot()");
    }
    if (!isOpen) return null;
    return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalContext, {
        value: {
            modal: control,
            setCloseHandler: (handler)=>{
                closeHandlerRef.current = handler;
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {})
    }), modalRoot);
};
function useModal() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({
            ref,
            open: ()=>{
                var _ref_current;
                return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.open();
            },
            close: ()=>{
                var _ref_current;
                return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.close();
            },
            toggle: ()=>{
                var _ref_current;
                return (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.toggle();
            }
        }))[0];
}
function useModalState() {
    const [modal, setModal] = useState(null);
    return {
        ref: setModal,
        isOpen: !!(modal === null || modal === void 0 ? void 0 : modal.isOpen),
        open: ()=>modal === null || modal === void 0 ? void 0 : modal.open(),
        close: ()=>modal === null || modal === void 0 ? void 0 : modal.close(),
        toggle: ()=>modal === null || modal === void 0 ? void 0 : modal.toggle()
    };
}


/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ paths)
});

;// ./src/lib/location.ts
function routeWithQuery(route, q) {
    if (!route) return "";
    const queryStr = Object.keys(q).map((key)=>`${key}=${q[key]}`).join("&");
    const newRoute = route[0] === "/" ? route : "/" + route;
    if (queryStr.length > 0) return `${newRoute}?${queryStr}`;
    return newRoute;
}

;// ./src/config/paths.ts

const paths = {
    home: {
        path: "/"
    },
    about: {
        path: "/about"
    },
    contactUs: {
        path: "/contact-us"
    },
    login: {
        path: "/login",
        get: (q)=>routeWithQuery("/login", q)
    },
    register: {
        path: "/register"
    },
    void: {
        path: "/void"
    },
    profile: {
        path: "/profile",
        accounts: {
            path: "/profile/accounts"
        },
        transactions: {
            path: "/profile/transactions"
        },
        settings: {
            path: "/profile/settings"
        }
    }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [644,643], () => (__webpack_exec__(5056)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);