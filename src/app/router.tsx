import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "@/config/paths";
import { Protected } from "@/features/auth";
import { LoadingScreen } from "@ui/loading-screen";

const HomePage = lazy(() => import("./pages/home"));
const RegisterPage = lazy(() => import("./pages/register"));
const LoginPage = lazy(() => import("./pages/login"));

const ProfilePageLayout = lazy(() =>
    import("@/comp/layout/profile/profile-page-layout").then(m => ({
        default: m.ProfilePageLayout,
    }))
);
const ProfileBasePage = lazy(() => import("./pages/profile/base"));
const ProfileAccountsPage = lazy(() => import("./pages/profile/accounts"));
const ProfileTransactionsPage = lazy(() => import("./pages/profile/transactions"));
const ProfileSettingsPage = lazy(() => import("./pages/profile/settings"));

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    <Route path={paths.home.path} Component={HomePage} />
                    <Route path={paths.register.path} Component={RegisterPage} />
                    <Route path={paths.login.path} Component={LoginPage} />
                    <Route Component={Protected}>
                        <Route path={paths.profile.path} Component={ProfilePageLayout}>
                            <Route index Component={ProfileBasePage} />
                            <Route
                                path={paths.profile.accounts.path}
                                Component={ProfileAccountsPage}
                            />
                            <Route
                                path={paths.profile.transactions.path}
                                Component={ProfileTransactionsPage}
                            />
                            <Route
                                path={paths.profile.settings.path}
                                Component={ProfileSettingsPage}
                            />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
