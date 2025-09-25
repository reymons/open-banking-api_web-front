import cn from "classnames";
import { Img } from "./image";
import sl from "./socials.module.scss";

const Social = ({ imgSrc, href, label }: { imgSrc: string; href: string; label: string }) => {
    return (
        <li>
            <a href={href} target="_blank" rel="noreferrer" aria-label={`Visit our ${label} page`}>
                <Img src={imgSrc} w={30} h={30} alt={label} />
            </a>
        </li>
    );
};

type Props = {
    className?: string;
};

export const Socials = ({ className }: Props) => {
    return (
        <ul className={cn(className, sl.socials)}>
            <Social
                imgSrc={require("@/assets/images/socials/fb.png")}
                href="https://facebook.com"
                label="facebook"
            />
            <Social
                imgSrc={require("@/assets/images/socials/insta.png")}
                href="https://instagram.com"
                label="instagram"
            />
            <Social
                imgSrc={require("@/assets/images/socials/twitter.png")}
                href="https://x.com"
                label="twitter"
            />
        </ul>
    );
};
