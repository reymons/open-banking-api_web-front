import logo from "@/assets/images/logo.png";
import { paths } from "@/config/paths";
import { Link } from "react-router";

export const Logo = () => {
    return (
        <Link style={{ width: "max-content", display: "inline-block" }} to={paths.home.path}>
            <img
                style={{ objectFit: "contain" }}
                src={logo}
                width={170}
                height={68}
                alt="Open Banking logo"
            />
        </Link>
    );
};
