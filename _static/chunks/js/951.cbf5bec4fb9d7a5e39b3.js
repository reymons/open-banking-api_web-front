"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[951],{

/***/ 6951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProfilePageLayout: () => (/* binding */ ProfilePageLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/comp/ui/logo.tsx + 1 modules
var logo = __webpack_require__(5144);
// EXTERNAL MODULE: ./src/lib/modal.tsx
var lib_modal = __webpack_require__(7007);
// EXTERNAL MODULE: ./src/comp/ui/flat-icon.tsx
var flat_icon = __webpack_require__(2958);
;// ./src/comp/ui/form/search-input.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const search_input_module = ({"wrapper":"Jysf1"});
;// ./src/comp/ui/form/search-input.tsx



const SearchInput = ({ name, value, onValue, placeholder, style })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: search_input_module.wrapper,
        style: style,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                type: "search"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                className: search_input_module.input,
                type: "search",
                name: name,
                value: value,
                onChange: (e)=>onValue(e.target.value),
                placeholder: placeholder
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var react = __webpack_require__(9729);
// EXTERNAL MODULE: ./src/comp/ui/primary-container.tsx + 1 modules
var primary_container = __webpack_require__(2307);
;// ./src/lib/hooks/use-outside-click.ts

const useOutsideClick = (opts)=>{
    const { onClick, isOpen, ref, deps = [] } = opts;
    (0,react.useEffect)(()=>{
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
    useOutsideClick({
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

;// ./src/features/search/comp/search-modal.tsx




const SearchModal = ()=>{
    const [query, setQuery] = (0,react.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MainModalContainer, {
        w: 600,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput, {
            name: "search",
            value: query,
            onValue: setQuery,
            placeholder: "Search"
        })
    });
};

;// ./src/features/search/comp/search-input.tsx





const search_input_SearchInput = ({ className })=>{
    const modal = (0,lib_modal/* useModal */.hS)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: classnames_default()(className, "unstyled-button"),
                onClick: ()=>modal.open(),
                "aria-label": "Open search modal",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput, {
                    name: "search",
                    placeholder: "Search",
                    value: "",
                    onValue: ()=>{},
                    style: {
                        pointerEvents: "none"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(lib_modal/* Modal */.aF, {
                ref: modal.ref,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchModal, {})
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/stores/user.ts + 1 modules
var stores_user = __webpack_require__(5995);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/comp/layout/profile/profile-control.tsx + 1 modules
var profile_control = __webpack_require__(7669);
;// ./src/comp/layout/profile/profile-header.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const profile_header_module = ({"header":"CHFlA","logo":"P72d5","info":"-Hq5a","mainContent":"eoM7F","accNum":"iK-Vc","title":"SqkvI","searchInput":"YfnpR","burger":"hK6Dv"});
;// ./src/comp/side-modal-container.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const side_modal_container_module = ({"wrapper":"H6YEF","background":"UwvRX","popUp":"cObC-","closing":"o7Ini","backgroundReverse":"dhyVf","popUpReverse":"x-tEo"});
;// ./src/comp/side-modal-container.tsx





const side_modal_container_animDuration = 300;
const SideModalContainer = ({ children, top, backgroundColor })=>{
    const { modal, setCloseHandler } = (0,lib_modal/* useModalContext */.k3)();
    const wrapperRef = (0,react.useRef)(null);
    const cntRef = (0,react.useRef)(null);
    setCloseHandler((done)=>{
        var _wrapperRef_current;
        (_wrapperRef_current = wrapperRef.current) === null || _wrapperRef_current === void 0 ? void 0 : _wrapperRef_current.classList.add(side_modal_container_module.closing);
        setTimeout(()=>done(), side_modal_container_animDuration);
    });
    useOutsideClick({
        isOpen: true,
        ref: cntRef,
        onClick: ()=>modal.close()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: side_modal_container_module.wrapper,
        style: {
            top,
            "--anim-duration": `${side_modal_container_animDuration}ms`
        },
        ref: wrapperRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ref: cntRef,
            style: {
                backgroundColor
            },
            children: children
        })
    });
};

// EXTERNAL MODULE: ./src/features/auth/api/auth.ts
var auth = __webpack_require__(1398);
;// ./src/comp/layout/profile/profile-nav.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const profile_nav_module = ({"wrapper":"ZTu3-","logoutBtn":"_8vveY"});
;// ./src/comp/layout/profile/profile-nav.tsx
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







const links = [
    {
        iconType: "apps",
        href: paths/* paths */.f.profile.path,
        name: "Overview"
    },
    {
        iconType: "credit-card",
        href: paths/* paths */.f.profile.accounts.path,
        name: "Accounts"
    },
    {
        iconType: "eye",
        href: paths/* paths */.f.profile.transactions.path,
        name: "Transactions"
    },
    {
        iconType: "user",
        href: paths/* paths */.f.profile.settings.path,
        name: "Settings"
    }
];
const ProfilePageNav = ({ className })=>{
    const logout = (0,auth/* useLogout */.Wn)();
    const loc = (0,chunk_B7RQU5TL/* useLocation */.zy)();
    const handleLogout = ()=>_async_to_generator(function*() {
            try {
                yield logout();
            } catch (err) {
                console.error(err);
            }
        })();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
        className: classnames_default()(profile_nav_module.wrapper, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                    children: links.map((link, i)=>{
                        const active = loc.pathname === link.href;
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_B7RQU5TL/* Link */.N_, {
                                className: "fs-md fw-700",
                                to: link.href,
                                style: active ? {
                                    color: "var(--color-primary)",
                                    "--color-flat-icon": "var(--color-primary)"
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                                        type: link.iconType
                                    }),
                                    link.name
                                ]
                            })
                        }, i);
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: classnames_default()(profile_nav_module.logoutBtn, "unstyled-button fw-700"),
                type: "button",
                onClick: handleLogout,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                        type: "arrow-right",
                        transform: "rotate(180)"
                    }),
                    "Log out"
                ]
            })
        ]
    });
};

;// ./src/comp/layout/profile/profile-header-burger.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const profile_header_burger_module = ({"sideContent":"_824ji","nav":"gx64d"});
;// ./src/comp/layout/profile/profile-header-burger.tsx









const ProfileHeaderBurger = ()=>{
    const modal = (0,lib_modal/* useModal */.hS)();
    const loc = (0,chunk_B7RQU5TL/* useLocation */.zy)();
    (0,react.useEffect)(()=>{
        modal.close();
    }, [
        loc.pathname,
        modal
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "icon-btn",
                type: "button",
                onClick: ()=>modal.toggle(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                    type: "menu-burger"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(lib_modal/* Modal */.aF, {
                ref: modal.ref,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BurgerModal, {})
            })
        ]
    });
};
const BurgerModal = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SideModalContainer, {
        top: "var(--profile-header-height)",
        backgroundColor: "var(--profile-background)",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: profile_header_burger_module.sideContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfilePageNav, {
                    className: profile_header_burger_module.nav
                })
            ]
        })
    });
};

;// ./src/comp/layout/profile/profile-header.tsx











const pathTitle = {
    [paths/* paths */.f.profile.path]: "Overview",
    [paths/* paths */.f.profile.accounts.path]: "Accounts",
    [paths/* paths */.f.profile.transactions.path]: "Transactions",
    [paths/* paths */.f.profile.settings.path]: "Settings"
};
const Title = ()=>{
    const loc = (0,chunk_B7RQU5TL/* useLocation */.zy)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
        className: classnames_default()(profile_header_module.title, "fw-700"),
        "aria-label": "Profile section",
        children: pathTitle[loc.pathname]
    });
};
const ProfileHeader = ()=>{
    const user = (0,stores_user/* useUser */.Jd)();
    if (!user) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        className: profile_header_module.header,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: profile_header_module.burger,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileHeaderBurger, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: profile_header_module.logo,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: profile_header_module.mainContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-primary fw-500",
                                    "aria-label": "Your full name",
                                    children: [
                                        user.firstName,
                                        " ",
                                        user.lastName
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classnames_default()(profile_header_module.accNum, "fw-700"),
                                    "aria-label": "Your bank account number",
                                    children: "1234567890"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: profile_header_module.info,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(search_input_SearchInput, {
                            className: profile_header_module.searchInput
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                            type: "bell"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(profile_control/* ProfileControl */.t, {})
                    ]
                })
            ]
        })
    });
};

;// ./src/comp/layout/profile/profile-page-layout.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const profile_page_layout_module = ({"wrapper":"EWnXJ","cnt":"steqI","nav":"aHftx"});
;// ./src/comp/layout/profile/profile-page-layout.tsx





const ProfilePageLayout = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: profile_page_layout_module.wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: profile_page_layout_module.cnt,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfilePageNav, {
                        className: profile_page_layout_module.nav
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Outlet */.sv, {})
                    })
                ]
            })
        ]
    });
};


/***/ })

}]);