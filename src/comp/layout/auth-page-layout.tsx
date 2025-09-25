import cn from "classnames";
import sl from "./auth-page-layout.module.scss";
import { Logo } from "@ui/logo";
import { Socials } from "../socials";
import { PrimaryContainer } from "@ui/primary-container";
import { Link } from "react-router";

type Props = {
    title: string;
    subTitle: string;
    form: {
        title: string;
        element: React.ReactElement;
    };
    hint: {
        text: string;
        linkHref: string;
        linkText: string;
    };
};

export const AuthPageLayout = ({ title, subTitle, form, hint }: Props) => {
    return (
        <main className={sl.wrapper}>
            <div className={cn("cnt", sl.inner)}>
                <div className={sl.logoMobile}>
                    <Logo />
                </div>
                <div className={sl.left}>
                    <Logo />
                    <div>
                        <div className="fs-lg fw-500 text-primary">Open Banking</div>
                        <h1 className={sl.title}>{title}</h1>
                        <div className={sl.subTitle}>{subTitle}</div>
                    </div>
                    <Socials className={sl.socials} />
                </div>
                <PrimaryContainer className={sl.formCnt} title={form.title} w={787}>
                    {form.element}
                    <div className={cn(sl.authLink, "text-hint fsm-sm")}>
                        {hint.text}{" "}
                        <Link to={hint.linkHref} className="inline-clickable">
                            {hint.linkText}
                        </Link>
                    </div>
                </PrimaryContainer>
            </div>
        </main>
    );
};
