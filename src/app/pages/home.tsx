import cn from "classnames";
import { paths } from "@/config/paths";
import { Header } from "@/comp/layout/header";
import { Text } from "@ui/text";
import { LinkButton } from "@ui/link-button";
import { Img } from "@/comp/image";
import { Link } from "react-router";
import { Footer } from "@/comp/layout/footer";
import { Page } from "@/comp/layout/page";
import BannerImg from "@/assets/images/main-banner.png";
import sl from "./home.module.scss";

const Service = ({
    imgSrc,
    title,
    description,
}: {
    imgSrc: string;
    title: string;
    description: string;
}) => {
    return (
        <li>
            <Img src={imgSrc} w={55} h={55} alt="service" />
            <div>
                <Text fs="xl" fsm="lg" fw={700} color="primary">
                    {title}
                </Text>
                <Text className={sl.desc} fsm="sm">
                    {description}
                </Text>
            </div>
        </li>
    );
};

const FAQItem = ({ text, href }: { text: string; href: string }) => {
    return (
        <Text className={sl.faqItem} as="li" fsm="sm">
            <Link to={href}>
                {text}
                <svg width="16" height="14">
                    <use href={`${require("@/assets/images/arrow-icons.svg")}#side`} />
                </svg>
            </Link>
        </Text>
    );
};

const HomePage = () => {
    return (
        <Page title="Open Banking" description="Open Banking - Banking Platform">
            <Header className="cnt" />
            <main className={sl.page}>
                <section className={sl.bannerWrapper}>
                    <div className={cn("cnt", sl.banner)}>
                        <div>
                            <Text className={sl.bankName} fs="lg" fsm="md" fw={500}>
                                Open Banking
                            </Text>
                            <h1>Experience{"\n"}hassle-free banking</h1>
                            <Text className={sl.subTitle} fs="md" fsm="sm">
                                Experience simple, secure, and stress-free banking. Say goodbye
                                {"\n"}to long queues and complex procedures and hello to hassle-free
                                {"\n"} banking with Open Banking.
                            </Text>
                            <div className={sl.ctaBtns}>
                                <LinkButton href={paths.register.path}>Get Started</LinkButton>
                                <LinkButton kind="transparent" href={paths.void.path}>
                                    Learn More
                                </LinkButton>
                            </div>
                        </div>
                        <div className={sl.imgWrapper}>
                            <Img
                                src={BannerImg}
                                loading="eager"
                                alt="two cards of Open Banking"
                                aria-hidden
                            />
                        </div>
                    </div>
                </section>
                <section className={cn("cnt", sl.section, sl.services)}>
                    <h2>Services</h2>
                    <ul>
                        <Service
                            imgSrc={require("@/assets/images/service/pig.png")}
                            title="Savings accounts"
                            description="Open Banking could offer a variety of savings accounts with different interest rates and terms, allowing customers to save money and earn interest over time. These accounts could include features like automatic transfers, overdraft protection, and mobile banking access."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/personal.png")}
                            title="Personal loans"
                            description="Open Banking could offer personal loans for a variety of purposes, such as debt consolidation, home improvements, or major purchases. Customers could apply online and receive a decision quickly, with flexible repayment terms and competitive interest rates."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/credit-card.png")}
                            title="Credit cards"
                            description="Open Banking could offer credit cards with different rewards programs and benefits, such as cash back, travel rewards, or low interest rates. Customers could manage their cards online and receive alerts for suspicious activity or due dates."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/money.png")}
                            title="Investment services"
                            description="Open Banking could offer investment services for customers looking to grow their wealth over time. These services could include mutual funds, exchange-traded funds, and other investment vehicles, with access to professional financial advice and analysis."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/bill.png")}
                            title="Online bill pay"
                            description="Open Banking could offer a convenient online bill pay service, allowing customers to pay bills and manage expenses from their computer or mobile device. This service could include features like automatic payments, bill reminders, and customizable payment schedules."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/deal.png")}
                            title="Business banking"
                            description="Open Banking could offer a range of banking services for small and medium-sized businesses, including checking accounts, business loans, merchant services, and cash management tools. These services could help businesses streamline their financial operations and grow their operations over time."
                        />
                    </ul>
                </section>
                <section className={cn(sl.section, sl.faq)}>
                    <div className="cnt">
                        <h2>FAQs</h2>
                        <div className={sl.questionMark} aria-hidden>
                            ?
                        </div>
                        <div className={sl.faqContent}>
                            <div className={sl.faqContentText}>
                                <Text
                                    fs="xl"
                                    color="primary"
                                    fw={700}
                                    as={Link}
                                    asProps={{ to: paths.void.path }}
                                >
                                    How do I sign up for an account with Open Banking?
                                </Text>
                                <Text className={sl.faqDesc} fsm="sm">
                                    You can sign up for an account with Open Banking online by
                                    visiting our website and filling out the online application
                                    form. Once your application is approved, you will receive
                                    instructions for setting up your account and accessing our
                                    online banking platform.
                                </Text>
                            </div>
                            <ul>
                                <FAQItem
                                    text="What types of accounts does Open Banking offer?"
                                    href={paths.void.path}
                                />
                                <FAQItem
                                    text="Is Open Banking FDIC insured?"
                                    href={paths.void.path}
                                />
                                <FAQItem
                                    text="How can I access my Open Banking account online?"
                                    href={paths.void.path}
                                />
                                <FAQItem
                                    text="What security measures does Open Banking have in place to protect my financial information?"
                                    href={paths.void.path}
                                />
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={cn("cnt", sl.section, sl.paymentServices)}>
                    <h2>Supported by various finance services</h2>
                    <ul>
                        <li>
                            <Img
                                src={require("@/assets/images/payment-services/mastercard.png")}
                                w={135}
                                h={76}
                                alt="mastercard"
                            />
                        </li>
                        <li>
                            <Img
                                src={require("@/assets/images/payment-services/visa.png")}
                                w={216}
                                h={76}
                                alt="visa"
                            />
                        </li>
                        <li>
                            <Img
                                src={require("@/assets/images/payment-services/paypal.png")}
                                w={268}
                                h={76}
                                alt="paypal"
                            />
                        </li>
                        <li>
                            <Img
                                src={require("@/assets/images/payment-services/payoneer.png")}
                                w={417}
                                h={76}
                                alt="payoneer"
                            />
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </Page>
    );
};

export default HomePage;
