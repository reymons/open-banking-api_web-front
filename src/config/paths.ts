import { routeWithQuery } from "@/lib/location";

export const paths = {
    home: {
        path: "/",
    },
    about: {
        path: "/about",
    },
    contactUs: {
        path: "/contact-us",
    },
    login: {
        path: "/login",
        get: (q: { redirect?: string }) => routeWithQuery("/login", q),
    },
    register: {
        path: "/register",
    },
    void: {
        path: "/void",
    },
    profile: {
        path: "/profile",
        accounts: {
            path: "/profile/accounts",
        },
        transactions: {
            path: "/profile/transactions",
        },
        settings: {
            path: "/profile/settings",
        },
    },
};
