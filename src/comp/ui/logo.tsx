import { Link } from "react-router";
import { paths } from "@/config/paths";
import sl from "./logo.module.scss";

export const Logo = () => {
    const png = require("@/assets/images/logo.png?w=170");
    const webp1x = require("@/assets/images/logo.png?as=webp&w=170");
    const webp2x = require("@/assets/images/logo.png?as=webp&w=340");

    return (
        <Link className={sl.logo} to={paths.home.path}>
            <picture>
                <source srcSet={`${webp1x}, ${webp2x} 2x`} type="image/webp" />
                <img
                    src={png}
                    alt="Open Banking logo"
                    aria-hidden
                    style={{ objectFit: "contain" }}
                    width={170}
                    height={40}
                />
            </picture>
        </Link>
    );
};
