import { useLocation } from "react-router";
import cn from "classnames";
import { Logo } from "@ui/logo";
import { SearchInput } from "@/features/search";
import { FlatIcon } from "@ui/flat-icon";
import { useUser } from "@/stores/user";
import { paths } from "@/config/paths";
import { ProfileControl } from "./profile-control";
import sl from "./profile-header.module.scss";
import { ProfileHeaderBurger } from "./profile-header-burger";

const pathTitle: Record<string, string> = {
    [paths.profile.path]: "Overview",
    [paths.profile.accounts.path]: "Accounts",
    [paths.profile.transactions.path]: "Transactions",
    [paths.profile.settings.path]: "Settings",
};

const Title = () => {
    const loc = useLocation();

    return (
        <h1 className={cn(sl.title, "fw-700")} aria-label="Profile section">
            {pathTitle[loc.pathname]}
        </h1>
    );
};

export const ProfileHeader = () => {
    const user = useUser();
    if (!user) return null;

    return (
        <header className={sl.header}>
            <div>
                <div className={sl.burger}>
                    <ProfileHeaderBurger />
                </div>
                <div className={sl.logo}>
                    <Logo />
                </div>
                <div className={sl.mainContent}>
                    <Title />
                    <div>
                        <div className="text-primary fw-500" aria-label="Your full name">
                            {user.firstName} {user.lastName}
                        </div>
                        {/* TODO: show bank account number? */}
                        <div
                            className={cn(sl.accNum, "fw-700")}
                            aria-label="Your bank account number"
                        >
                            1234567890
                        </div>
                    </div>
                </div>
                <div className={sl.info}>
                    {/* Where should I get the search and notifications features from? Props or direct import? */}
                    <SearchInput className={sl.searchInput} />
                    <FlatIcon type="bell" />
                    {/* <NotificationsBell /> */}
                    <ProfileControl />
                </div>
            </div>
        </header>
    );
};
