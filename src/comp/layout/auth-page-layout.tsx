import cn from "classnames";
import sl from "./auth-page-layout.module.scss";
import { Text } from "@ui/text";
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
                        <Text fs="lg" fw={500} color="primary">
                            Open Banking
                        </Text>
                        <h1 className={sl.title}>{title}</h1>
                        <Text className={sl.subTitle}>{subTitle}</Text>
                    </div>
                    <Socials className={sl.socials} />
                </div>
                <PrimaryContainer className={sl.formCnt} title={form.title} w={787}>
                    {form.element}
                    <Text className={sl.authLink} color="hint" fsm="sm">
                        {hint.text}{" "}
                        <Link to={hint.linkHref} className="link-primary">
                            {hint.linkText}
                        </Link>
                    </Text>
                </PrimaryContainer>
            </div>
        </main>
    );
};
