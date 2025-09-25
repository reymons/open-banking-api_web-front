import { paths } from "@/config/paths";
import { Link } from "react-router";

export const Logo = () => {
    const webp1x = require("@/assets/images/logo/1x.webp");
    const webp2x = require("@/assets/images/logo/2x.webp");
    const png1x = require("@/assets/images/logo/1x.png");
    const png2x = require("@/assets/images/logo/2x.png");

    return (
        <Link style={{ width: "max-content", display: "inline-block" }} to={paths.home.path}>
            <picture>
                <source srcSet={`${webp1x}, ${webp2x} 2x`} type="image/webp" />
                <img
                    srcSet={`${png1x}, ${png2x} 2x`}
                    alt="Open Banking logo"
                    aria-hidden
                    style={{ objectFit: "contain" }}
                    width={170}
                    height={68}
                />
            </picture>
        </Link>
    );
};
