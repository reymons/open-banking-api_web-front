import { ProfileHeader } from "./profile-header";
import { ProfilePageNav } from "./profile-nav";
import { Outlet } from "react-router";
import sl from "./profile-page-layout.module.scss";

export const ProfilePageLayout = () => {
    return (
        <div className={sl.wrapper}>
            <ProfileHeader />
            <div className={sl.cnt}>
                <ProfilePageNav className={sl.nav} />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
