import * as yup from "yup";
import { Logo } from "@ui/logo";
import { Text } from "@ui/text";
import { Socials } from "../socials";
import { Img } from "../image";
import { Form } from "@ui/form";
import { InputRaw } from "@ui/form/input";
import sl from "./footer.module.scss";
import { Button } from "@ui/button";
import { Link } from "react-router";
import { paths } from "@/config/paths";

const FooterLink = ({ text, href }: { text: string; href: string }) => {
    return (
        <li>
            <Link className="fsm-sm" to={href}>
                {text}
            </Link>
        </li>
    );
};

export const Footer = () => {
    return (
        <footer className={sl.footer}>
            <div className="cnt">
                <div className={sl.mainInfo}>
                    <div className={sl.links}>
                        <nav aria-label="Help">
                            <Text color="primary" fw={700}>
                                HELP
                            </Text>
                            <ul>
                                <FooterLink href={paths.void.path} text="Help Center" />
                                <FooterLink href={paths.void.path} text="Contact Us" />
                                <FooterLink href={paths.void.path} text="How to Use" />
                            </ul>
                        </nav>
                        <nav aria-label="About">
                            <Text color="primary" fw={700}>
                                ABOUT
                            </Text>
                            <ul>
                                <FooterLink href={paths.void.path} text="About Open Banking" />
                                <FooterLink href={paths.void.path} text="Terms & Conditions" />
                                <FooterLink href={paths.void.path} text="Privacy Policy" />
                            </ul>
                        </nav>
                    </div>
                    <Logo />
                    <div>
                        <Text className={sl.date} color="hint" fw={500} fsm="sm">
                            {new Date().getFullYear()} Open Banking. All rights reserved.
                        </Text>
                        <Socials />
                    </div>
                </div>
                <div className={sl.ctaBlock}>
                    <Img
                        src={require("@/assets/images/cities.png")}
                        w="100%"
                        h="100%"
                        alt=""
                        aria-hidden
                    />
                    <div className={sl.content}>
                        <Text fs="xl">New to Open Banking?</Text>
                        <Text as="h3" fs="3xl">
                            Enter your Email and{"\n"}Get Started Now
                        </Text>
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
                                    <Button type="submit">Get Started</Button>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </footer>
    );
};
