import cn from "classnames";
import { paths } from "@/config/paths";
import { useLogout } from "@/features/auth";
import { FlatIcon } from "@ui/flat-icon";
import { Link, useLocation } from "react-router";
import sl from "./profile-nav.module.scss";

type Props = {
    className?: string;
};

const links: Array<{
    iconType: React.ComponentProps<typeof FlatIcon>["type"];
    href: string;
    name: string;
}> = [
    {
        iconType: "apps",
        href: paths.profile.path,
        name: "Overview",
    },
    {
        iconType: "credit-card",
        href: paths.profile.accounts.path,
        name: "Accounts",
    },
    {
        iconType: "eye",
        href: paths.profile.transactions.path,
        name: "Transactions",
    },
    {
        iconType: "user",
        href: paths.profile.settings.path,
        name: "Settings",
    },
];

export const ProfilePageNav = ({ className }: Props) => {
    const logout = useLogout();
    const loc = useLocation();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <aside className={cn(sl.wrapper, className)}>
            <nav>
                <ul>
                    {links.map((link, i) => {
                        const active = loc.pathname === link.href;
                        return (
                            <li key={i}>
                                <Link
                                    className="fs-md fw-700"
                                    to={link.href}
                                    style={
                                        active
                                            ? ({
                                                  color: "var(--color-primary)",
                                                  "--color-flat-icon": "var(--color-primary)",
                                              } as React.CSSProperties)
                                            : {}
                                    }
                                >
                                    <FlatIcon type={link.iconType} />
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <button
                className={cn(sl.logoutBtn, "unstyled-button fw-700")}
                type="button"
                onClick={handleLogout}
            >
                <FlatIcon type="arrow-right" transform="rotate(180)" />
                Log out
            </button>
        </aside>
    );
};
