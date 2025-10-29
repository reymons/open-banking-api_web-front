import cn from "classnames";
import { Link } from "react-router";
import { Logo } from "@ui/logo";
import { Socials } from "../socials";
import { PrimaryContainer } from "@ui/primary-container";
import sl from "./auth-page-layout.module.scss";

type Props = {
    title: string;
    subTitle: string;
    form: {
        title: string;
        element: React.ReactElement;
    };
    hint?: {
        text: string;
        link?: {
            href: string;
            text: string;
        };
        custom?: React.ReactNode;
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
                    {!!hint && (
                        <div className={cn(sl.authLink, "text-hint fw-500 fsm-sm")}>
                            {hint.text}{" "}
                            {hint.link ? (
                                <Link to={hint.link.href} className="inline-clickable">
                                    {hint.link.text}
                                </Link>
                            ) : (
                                hint.custom
                            )}
                        </div>
                    )}
                </PrimaryContainer>
            </div>
        </main>
    );
};
