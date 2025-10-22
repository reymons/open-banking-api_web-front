import { paths } from "@/config/paths";
import { useIsLoadingUser, useUser } from "@/stores/user";
import { LoadingScreen } from "@ui/loading-screen";
import { Navigate, Outlet, useLocation } from "react-router";

export const Protected = () => {
    const user = useUser();
    const isLoadingUser = useIsLoadingUser();
    const loc = useLocation();

    if (isLoadingUser) {
        return <LoadingScreen />;
    }

    if (!user) {
        return <Navigate to={paths.login.get({ redirect: loc.pathname })} replace />;
    }

    return <Outlet />;
};
