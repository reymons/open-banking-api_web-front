"use strict";
(self["webpackChunkonline_banking"] = self["webpackChunkonline_banking"] || []).push([[605],{

/***/ 151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/money/f0d739c3aedede4f200c.png";

/***/ }),

/***/ 188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pig/127cff6bebab5838022a.webp";

/***/ }),

/***/ 300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mastercard-1x/a39b2b6b410feb43d31d.webp";

/***/ }),

/***/ 395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/visa-2x/04d0c9b31782b9efa259.png";

/***/ }),

/***/ 444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-banner/0977b92fbf1a442da46e.avif";

/***/ }),

/***/ 668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cities-2x/ac7a1f2b964073d7d138.webp";

/***/ }),

/***/ 1543:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mastercard-2x/e47473582853806ccd16.webp";

/***/ }),

/***/ 1582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mastercard-2x/1dc856c9c99fca8198d6.png";

/***/ }),

/***/ 1693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/paypal-1x/344037672ebb9ad07ff6.webp";

/***/ }),

/***/ 1911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cities-1x/a7a9ff94d54769e2ec36.webp";

/***/ }),

/***/ 2063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cities-2x/23aeb30b615b9d547118.png";

/***/ }),

/***/ 2209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/deal/530b9c4cb9941dbce18e.png";

/***/ }),

/***/ 2873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bill/072b0ef8337d8bb566c1.webp";

/***/ }),

/***/ 2888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-banner/d137fcc5e66526f3d1df.avif";

/***/ }),

/***/ 2889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/credit-card/402fd4bb7766a541da45.png";

/***/ }),

/***/ 3296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/personal/27cff4c39d66c80f375e.webp";

/***/ }),

/***/ 3350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/paypal-2x/00dcf19d6e91f4c3d3a0.webp";

/***/ }),

/***/ 3711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mastercard-1x/aeff530e3810fe0cda06.png";

/***/ }),

/***/ 3760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/payoneer-2x/1b73a752019e05a5a1be.webp";

/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5813);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(7500);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/config/paths.ts + 1 modules
var paths = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/stores/user.ts + 1 modules
var stores_user = __webpack_require__(5995);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@7.9.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/react-router/dist/development/chunk-B7RQU5TL.mjs
var chunk_B7RQU5TL = __webpack_require__(125);
// EXTERNAL MODULE: ./src/comp/ui/button.tsx + 2 modules
var ui_button = __webpack_require__(5776);
;// ./src/features/auth/comp/login-button.tsx



const LoginButton = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
        asLink: true,
        kind: "transparent",
        to: paths/* paths */.f.login.path,
        children: "Log in"
    });
};

// EXTERNAL MODULE: ./src/comp/ui/logo.tsx + 1 modules
var logo = __webpack_require__(5144);
// EXTERNAL MODULE: ./src/comp/layout/profile/profile-control.tsx + 1 modules
var profile_control = __webpack_require__(7669);
;// ./src/comp/layout/header.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const header_module = ({"wrapper":"VzHGa"});
;// ./src/comp/layout/header.tsx









const ProfileOrLogin = ()=>{
    const user = (0,stores_user/* useUser */.Jd)();
    return user ? /*#__PURE__*/ (0,jsx_runtime.jsx)(profile_control/* ProfileControl */.t, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoginButton, {});
};
const Header = ({ className })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        className: classnames_default()(className, header_module.wrapper),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    to: paths/* paths */.f.about.path,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                    to: paths/* paths */.f.contactUs.path,
                                    children: "About"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileOrLogin, {})
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.7.1/node_modules/yup/index.esm.js
var index_esm = __webpack_require__(8895);
// EXTERNAL MODULE: ./src/comp/socials.tsx + 2 modules
var socials = __webpack_require__(5815);
// EXTERNAL MODULE: ./src/comp/ui/form/form.tsx + 1 modules
var form_form = __webpack_require__(822);
// EXTERNAL MODULE: ./src/comp/ui/form/submit-button.tsx
var submit_button = __webpack_require__(7193);
// EXTERNAL MODULE: ./src/comp/ui/form/input.tsx + 3 modules
var input = __webpack_require__(7594);
;// ./src/comp/layout/footer.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const footer_module = ({"footer":"QhX4J","mainInfo":"-EZe6","links":"GXGMa","date":"_3O7XE","ctaBlock":"OspZE","content":"FCbGh","input":"vQQn1"});
;// ./src/comp/layout/footer.tsx










const FooterLink = ({ text, href })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
            className: "fsm-sm",
            to: href,
            children: text
        })
    });
};
const MainImage = ()=>{
    const png1x = __webpack_require__(9934);
    const png2x = __webpack_require__(2063);
    const webp1x = __webpack_require__(1911);
    const webp2x = __webpack_require__(668);
    const stub = __webpack_require__(7987);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                srcSet: `${webp1x}, ${webp2x} 2x`,
                type: "image/webp",
                media: "(width > 1024px)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                srcSet: `${png1x}, ${png2x} 2x`,
                type: "image/png",
                media: "(width > 1024px)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: stub,
                width: "100%",
                height: "100%",
                alt: "cities",
                "aria-hidden": true
            })
        ]
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        className: footer_module.footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "cnt",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: footer_module.mainInfo,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: footer_module.links,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    "aria-label": "Help",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-primary fw-700",
                                            children: "HELP"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "Help Center"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "Contact Us"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "How to Use"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    "aria-label": "About",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-primary fw-700",
                                            children: "ABOUT"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "About Open Banking"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "Terms & Conditions"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                                                    href: paths/* paths */.f.void.path,
                                                    text: "Privacy Policy"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* Logo */.g, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classnames_default()(footer_module.date, "text-hint fsm-sm fw-500"),
                                    children: [
                                        new Date().getFullYear(),
                                        " Open Banking. All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(socials/* Socials */.l, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: footer_module.ctaBlock,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MainImage, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: footer_module.content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "fs-xl fsm-sm",
                                    children: "New to Open Banking?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "fs-3xl fsm-md",
                                    children: [
                                        "Enter your Email and",
                                        "\n",
                                        "Get Started Now"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(form_form/* Form */.l, {
                                    defaultValues: {
                                        email: ""
                                    },
                                    schema: index_esm/* object */.Ik({
                                        email: index_esm/* string */.Yj().required().email().label("Email")
                                    }),
                                    onSubmit: ()=>{},
                                    children: ({ register, formState })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: footer_module.input,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* InputRaw */.D, {
                                                    placeholder: "Enter your email here",
                                                    reg: register("email"),
                                                    invalid: !!formState.errors.email,
                                                    autoComplete: "email"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(submit_button/* SubmitButton */.b, {
                                                    stretch: false,
                                                    children: "Get Started"
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/comp/layout/page.tsx
var page = __webpack_require__(4794);
// EXTERNAL MODULE: ./src/comp/ui/flat-icon.tsx + 1 modules
var flat_icon = __webpack_require__(8117);
;// ./src/app/pages/home.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const home_module = ({"page":"_8ewRI","bannerWrapper":"_98KBH","banner":"bE2yg","subTitle":"ooU0O","bankName":"FAKSy","ctaBtns":"QKrz9","imgWrapper":"CFCvJ","section":"jHmlB","services":"_0OGOT","desc":"-rFDy","faq":"uymWQ","questionMark":"_3739c","faqDesc":"_0Uldd","faqItem":"LEBQ7","faqContent":"wzYZ-","faqContentText":"_6FmcW","paymentServices":"iNTuo"});
;// ./src/app/pages/home.tsx










const Service = ({ imgSrc, webpImgSrc, title, description })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                        srcSet: webpImgSrc,
                        type: "image/webp"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: imgSrc,
                        width: 55,
                        height: 55,
                        loading: "lazy",
                        alt: "service",
                        "aria-hidden": true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "fs-xl fsm-lg fw-700 text-primary",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classnames_default()(home_module.desc, "fsm-sm"),
                        children: description
                    })
                ]
            })
        ]
    });
};
const FAQItem = ({ text, href })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: classnames_default()(home_module.faqItem, "fsm-sm"),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(chunk_B7RQU5TL/* Link */.N_, {
            to: href,
            children: [
                text,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(flat_icon/* FlatIcon */.f, {
                    type: "arrow-small-right"
                })
            ]
        })
    });
};
const BannerImage = ()=>{
    const png = __webpack_require__(4925);
    const webp1x = __webpack_require__(6367);
    const webp2x = __webpack_require__(7955);
    const avif1x = __webpack_require__(444);
    const avif2x = __webpack_require__(2888);
    const stub = __webpack_require__(7987);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                srcSet: `${avif1x}, ${avif2x} 2x`,
                type: "image/avif",
                media: "(width > 786px)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                srcSet: `${webp1x}, ${webp2x} 2x`,
                type: "image/webp",
                media: "(width > 786px)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                srcSet: png,
                type: "image/png",
                media: "(width > 786px)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: stub,
                alt: "two cards of Open Banking",
                "aria-hidden": true
            })
        ]
    });
};
const PaymentService = ({ img1xSrc, img2xSrc, webpImg1xSrc, webpImg2xSrc, alt, w, h })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
                    srcSet: `${webpImg1xSrc}, ${webpImg2xSrc} 2x`,
                    type: "image/webp"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: img1xSrc,
                    srcSet: `${img1xSrc}, ${img2xSrc} 2x`,
                    width: w,
                    height: h,
                    loading: "lazy",
                    alt: alt
                })
            ]
        })
    });
};
const HomePage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(page/* Page */.Y, {
        title: "Home",
        description: "Open Banking - Banking Platform",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header, {
                className: "cnt"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: home_module.page,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: home_module.bannerWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classnames_default()("cnt", home_module.banner),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classnames_default()(home_module.bankName, "fs-lg fsm-md fw-500"),
                                            children: "Open Banking"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            children: [
                                                "Experience",
                                                "\n",
                                                "hassle-free banking"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: classnames_default()(home_module.subTitle, "fs-md fsm-sm"),
                                            children: [
                                                "Experience simple, secure, and stress-free banking. Say goodbye",
                                                "\n",
                                                "to long queues and complex procedures and hello to hassle-free",
                                                "\n",
                                                " banking with Open Banking."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: home_module.ctaBtns,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                                    asLink: true,
                                                    to: paths/* paths */.f.register.path,
                                                    children: "Get Started"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.$, {
                                                    asLink: true,
                                                    kind: "transparent",
                                                    to: paths/* paths */.f.void.path,
                                                    children: "Learn More"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: home_module.imgWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BannerImage, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: classnames_default()("cnt", home_module.section, home_module.services),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: "Services"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(4831),
                                        webpImgSrc: __webpack_require__(188),
                                        title: "Savings accounts",
                                        description: "Open Banking could offer a variety of savings accounts with different interest rates and terms, allowing customers to save money and earn interest over time. These accounts could include features like automatic transfers, overdraft protection, and mobile banking access."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(5979),
                                        webpImgSrc: __webpack_require__(3296),
                                        title: "Personal loans",
                                        description: "Open Banking could offer personal loans for a variety of purposes, such as debt consolidation, home improvements, or major purchases. Customers could apply online and receive a decision quickly, with flexible repayment terms and competitive interest rates."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(2889),
                                        webpImgSrc: __webpack_require__(9266),
                                        title: "Credit cards",
                                        description: "Open Banking could offer credit cards with different rewards programs and benefits, such as cash back, travel rewards, or low interest rates. Customers could manage their cards online and receive alerts for suspicious activity or due dates."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(151),
                                        webpImgSrc: __webpack_require__(8212),
                                        title: "Investment services",
                                        description: "Open Banking could offer investment services for customers looking to grow their wealth over time. These services could include mutual funds, exchange-traded funds, and other investment vehicles, with access to professional financial advice and analysis."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(7620),
                                        webpImgSrc: __webpack_require__(2873),
                                        title: "Online bill pay",
                                        description: "Open Banking could offer a convenient online bill pay service, allowing customers to pay bills and manage expenses from their computer or mobile device. This service could include features like automatic payments, bill reminders, and customizable payment schedules."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Service, {
                                        imgSrc: __webpack_require__(2209),
                                        webpImgSrc: __webpack_require__(5130),
                                        title: "Business banking",
                                        description: "Open Banking could offer a range of banking services for small and medium-sized businesses, including checking accounts, business loans, merchant services, and cash management tools. These services could help businesses streamline their financial operations and grow their operations over time."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: classnames_default()(home_module.section, home_module.faq),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "cnt",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    children: "FAQs"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: home_module.questionMark,
                                    "aria-hidden": true,
                                    children: "?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: home_module.faqContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: home_module.faqContentText,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chunk_B7RQU5TL/* Link */.N_, {
                                                    className: "fs-xl text-primary fw-700",
                                                    to: paths/* paths */.f.void.path,
                                                    children: "How do I sign up for an account with Open Banking?"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: classnames_default()(home_module.faqDesc, "fsm-sm"),
                                                    children: "You can sign up for an account with Open Banking online by visiting our website and filling out the online application form. Once your application is approved, you will receive instructions for setting up your account and accessing our online banking platform."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQItem, {
                                                    text: "What types of accounts does Open Banking offer?",
                                                    href: paths/* paths */.f.void.path
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQItem, {
                                                    text: "Is Open Banking FDIC insured?",
                                                    href: paths/* paths */.f.void.path
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQItem, {
                                                    text: "How can I access my Open Banking account online?",
                                                    href: paths/* paths */.f.void.path
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQItem, {
                                                    text: "What security measures does Open Banking have in place to protect my financial information?",
                                                    href: paths/* paths */.f.void.path
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: classnames_default()("cnt", home_module.section, home_module.paymentServices),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: "Supported by various finance services"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PaymentService, {
                                        img1xSrc: __webpack_require__(3711),
                                        img2xSrc: __webpack_require__(1582),
                                        webpImg1xSrc: __webpack_require__(300),
                                        webpImg2xSrc: __webpack_require__(1543),
                                        alt: "mastercard",
                                        w: 135,
                                        h: 76
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PaymentService, {
                                        img1xSrc: __webpack_require__(9498),
                                        img2xSrc: __webpack_require__(395),
                                        webpImg1xSrc: __webpack_require__(9819),
                                        webpImg2xSrc: __webpack_require__(9920),
                                        alt: "visa",
                                        w: 216,
                                        h: 76
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PaymentService, {
                                        img1xSrc: __webpack_require__(8128),
                                        img2xSrc: __webpack_require__(6901),
                                        webpImg1xSrc: __webpack_require__(1693),
                                        webpImg2xSrc: __webpack_require__(3350),
                                        alt: "paypal",
                                        w: 216,
                                        h: 76
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PaymentService, {
                                        img1xSrc: __webpack_require__(7338),
                                        img2xSrc: __webpack_require__(9083),
                                        webpImg1xSrc: __webpack_require__(7355),
                                        webpImg2xSrc: __webpack_require__(3760),
                                        alt: "payoneer",
                                        w: 216,
                                        h: 76
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
        ]
    });
};
/* harmony default export */ const home = (HomePage);


/***/ }),

/***/ 4831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pig/996c43cf4aa5f8254f02.png";

/***/ }),

/***/ 4925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-banner/a08698f9b49862403528.png";

/***/ }),

/***/ 5130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/deal/028502597a7a88cf8308.webp";

/***/ }),

/***/ 5979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/personal/4d64842839653b9b82d4.png";

/***/ }),

/***/ 6367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-banner/6dd64d8ebcb59d222059.webp";

/***/ }),

/***/ 6901:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/paypal-2x/90f9b96fefc0e88b6f84.png";

/***/ }),

/***/ 7338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/payoneer-1x/205b7248ed20ad621437.png";

/***/ }),

/***/ 7355:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/payoneer-1x/19a9373895a0fce88386.webp";

/***/ }),

/***/ 7620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bill/e0e51e146d59da2a5dcf.png";

/***/ }),

/***/ 7955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/main-banner/91a2b88161eb55713465.webp";

/***/ }),

/***/ 7987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/stub/06c805d5f8d0f0cd4e44.png";

/***/ }),

/***/ 8128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/paypal-1x/8ae0349a2e398e7f6ffb.png";

/***/ }),

/***/ 8212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/money/9f8e04c3c7da2235e273.webp";

/***/ }),

/***/ 9083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/payoneer-2x/a1138acdaa6f5ecb265a.png";

/***/ }),

/***/ 9266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/credit-card/90632f07336af4a5cc59.webp";

/***/ }),

/***/ 9498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/visa-1x/fa32c19d7e89fccb9ce1.png";

/***/ }),

/***/ 9819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/visa-1x/913dfe25a9b1b0eb7238.webp";

/***/ }),

/***/ 9920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/visa-2x/30dd240edace8eac2d7b.webp";

/***/ }),

/***/ 9934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cities-1x/2c73f7c52be5c6f240c6.png";

/***/ })

}]);