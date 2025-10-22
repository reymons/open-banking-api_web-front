import { paths } from "@/config/paths";
import { useUser } from "@/stores/user";
import { Link } from "react-router";
import sl from "./profile-control.module.scss";

type Props = {
    className?: string;
};

export const ProfileControl = ({ className }: Props) => {
    const user = useUser();
    if (!user) return null;

    return (
        <Link
            className={className}
            aria-label="Go to your profile"
            to={paths.profile.path}
            style={{
                display: "inline-block",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
            }}
        >
            <img
                className={sl.img}
                alt="User"
                src={require("@/assets/images/default-user-pic.jpg")}
            />
        </Link>
    );
};
