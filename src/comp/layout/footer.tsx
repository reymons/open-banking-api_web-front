import * as yup from "yup";
import cn from "classnames";
import { Logo } from "@ui/logo";
import { Socials } from "../socials";
import { Form, SubmitButton } from "@ui/form";
import { InputRaw } from "@ui/form/input";
import { Link } from "react-router";
import { paths } from "@/config/paths";
import sl from "./footer.module.scss";

const FooterLink = ({ text, href }: { text: string; href: string }) => {
    return (
        <li>
            <Link className="fsm-sm" to={href}>
                {text}
            </Link>
        </li>
    );
};

const MainImage = () => {
    const png1x = require("@/assets/images/footer/cities-1x.png");
    const png2x = require("@/assets/images/footer/cities-2x.png");
    const webp1x = require("@/assets/images/footer/cities-1x.webp");
    const webp2x = require("@/assets/images/footer/cities-2x.webp");
    const stub = require("@/assets/images/stub.png");

    return (
        <picture>
            <source srcSet={`${webp1x}, ${webp2x} 2x`} type="image/webp" media="(width > 1024px)" />
            <source srcSet={`${png1x}, ${png2x} 2x`} type="image/png" media="(width > 1024px)" />
            <img src={stub} width="100%" height="100%" alt="cities" aria-hidden />
        </picture>
    );
};

export const Footer = () => {
    return (
        <footer className={sl.footer}>
            <div className="cnt">
                <div className={sl.mainInfo}>
                    <div className={sl.links}>
                        <nav aria-label="Help">
                            <div className="text-primary fw-700">HELP</div>
                            <ul>
                                <FooterLink href={paths.void.path} text="Help Center" />
                                <FooterLink href={paths.void.path} text="Contact Us" />
                                <FooterLink href={paths.void.path} text="How to Use" />
                            </ul>
                        </nav>
                        <nav aria-label="About">
                            <div className="text-primary fw-700">ABOUT</div>
                            <ul>
                                <FooterLink href={paths.void.path} text="About Open Banking" />
                                <FooterLink href={paths.void.path} text="Terms & Conditions" />
                                <FooterLink href={paths.void.path} text="Privacy Policy" />
                            </ul>
                        </nav>
                    </div>
                    <Logo />
                    <div>
                        <div className={cn(sl.date, "text-hint fsm-sm fw-500")}>
                            {new Date().getFullYear()} Open Banking. All rights reserved.
                        </div>
                        <Socials />
                    </div>
                </div>
                <div className={sl.ctaBlock}>
                    <MainImage />
                    <div className={sl.content}>
                        <div className="fs-xl fsm-sm">New to Open Banking?</div>
                        <div className="fs-3xl fsm-md">
                            Enter your Email and{"\n"}Get Started Now
                        </div>
                        <Form
                            defaultValues={{ email: "" }}
                            schema={yup.object({
                                email: yup.string().required().email().label("Email"),
                            })}
                            onSubmit={() => {}}
                        >
                            {({ register, formState }) => (
                                <div className={sl.input}>
                                    <InputRaw
                                        placeholder="Enter your email here"
                                        reg={register("email")}
                                        invalid={!!formState.errors.email}
                                        autoComplete="email"
                                    />
                                    <SubmitButton stretch={false}>Get Started</SubmitButton>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </footer>
    );
};
