import cn from "classnames";
import { useUser } from "@/stores/user";
import { Link } from "react-router";
import { paths } from "@/config/paths";
import { LoginButton } from "@/features/auth";
import { Logo } from "@ui/logo";
import { ProfileControl } from "./profile/profile-control";
import sl from "./header.module.scss";

type Props = {
    className?: string;
};

const ProfileOrLogin = () => {
    const user = useUser();

    return user ? <ProfileControl /> : <LoginButton />;
};

export const Header = ({ className }: Props) => {
    return (
        <header className={cn(className, sl.wrapper)}>
            <div>
                <Logo />
                <nav>
                    <ul>
                        <li>
                            <Link to={paths.about.path}>About</Link>
                        </li>
                        <li>
                            <Link to={paths.contactUs.path}>About</Link>
                        </li>
                    </ul>
                </nav>
                <ProfileOrLogin />
            </div>
        </header>
    );
};
