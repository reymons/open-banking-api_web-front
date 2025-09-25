import cn from "classnames";
import { paths } from "@/config/paths";
import { Header } from "@/comp/layout/header";
import { LinkButton } from "@ui/link-button";
import { Link } from "react-router";
import { Footer } from "@/comp/layout/footer";
import { Page } from "@/comp/layout/page";
import sl from "./home.module.scss";

const Service = ({
    imgSrc,
    webpImgSrc,
    title,
    description,
}: {
    imgSrc: string;
    webpImgSrc: string;
    title: string;
    description: string;
}) => {
    return (
        <li>
            <picture>
                <source srcSet={webpImgSrc} type="image/webp" />
                <img src={imgSrc} width={55} height={55} loading="lazy" alt="service" aria-hidden />
            </picture>
            <div>
                <div className="fs-xl fsm-lg fw-700 text-primary">{title}</div>
                <div className={cn(sl.desc, "fsm-sm")}>{description}</div>
            </div>
        </li>
    );
};

const FAQItem = ({ text, href }: { text: string; href: string }) => {
    return (
        <li className={cn(sl.faqItem, "fsm-sm")}>
            <Link to={href}>
                {text}
                <svg width="16" height="14">
                    <use href={`${require("@/assets/images/arrow-icons.svg")}#side`} />
                </svg>
            </Link>
        </li>
    );
};

const BannerImage = () => {
    // TODO: add ImageMinimizerWebpackPlugin
    const png1x = require("@/assets/images/main-banner/1x.png");
    const png2x = require("@/assets/images/main-banner/2x.png");
    const webp1x = require("@/assets/images/main-banner/1x.webp");
    const webp2x = require("@/assets/images/main-banner/2x.webp");
    const avif1x = require("@/assets/images/main-banner/1x.avif");
    const avif2x = require("@/assets/images/main-banner/2x.avif");
    const stub = require("@/assets/images/stub.png");

    return (
        <picture>
            <source srcSet={`${avif1x}, ${avif2x} 2x`} type="image/avif" media="(width > 786px)" />
            <source srcSet={`${webp1x}, ${webp2x} 2x`} type="image/webp" media="(width > 786px)" />
            <source srcSet={`${png1x}, ${png2x} 2x`} type="image/png" media="(width > 786px)" />
            <img src={stub} alt="two cards of Open Banking" aria-hidden />
        </picture>
    );
};

const PaymentService = ({
    img1xSrc,
    img2xSrc,
    webpImg1xSrc,
    webpImg2xSrc,
    alt,
    w,
    h,
}: {
    img1xSrc: string;
    img2xSrc: string;
    webpImg1xSrc: string;
    webpImg2xSrc: string;
    alt: string;
    w: number;
    h: number;
}) => {
    return (
        <li>
            <picture>
                <source srcSet={`${webpImg1xSrc}, ${webpImg2xSrc} 2x`} type="image/webp" />
                <img
                    src={img1xSrc}
                    srcSet={`${img1xSrc}, ${img2xSrc} 2x`}
                    width={w}
                    height={h}
                    loading="lazy"
                    alt={alt}
                />
            </picture>
        </li>
    );
};

const HomePage = () => {
    return (
        <Page title="Home" description="Open Banking - Banking Platform">
            <Header className="cnt" />
            <main className={sl.page}>
                <section className={sl.bannerWrapper}>
                    <div className={cn("cnt", sl.banner)}>
                        <div>
                            <div className={cn(sl.bankName, "fs-lg fsm-md fw-500")}>
                                Open Banking
                            </div>
                            <h1>Experience{"\n"}hassle-free banking</h1>
                            <p className={cn(sl.subTitle, "fs-md fsm-sm")}>
                                Experience simple, secure, and stress-free banking. Say goodbye
                                {"\n"}to long queues and complex procedures and hello to hassle-free
                                {"\n"} banking with Open Banking.
                            </p>
                            <div className={sl.ctaBtns}>
                                <LinkButton href={paths.register.path}>Get Started</LinkButton>
                                <LinkButton kind="transparent" href={paths.void.path}>
                                    Learn More
                                </LinkButton>
                            </div>
                        </div>
                        <div className={sl.imgWrapper}>
                            <BannerImage />
                        </div>
                    </div>
                </section>
                <section className={cn("cnt", sl.section, sl.services)}>
                    <h2>Services</h2>
                    <ul>
                        <Service
                            imgSrc={require("@/assets/images/service/pig.png")}
                            webpImgSrc={require("@/assets/images/service/pig.webp")}
                            title="Savings accounts"
                            description="Open Banking could offer a variety of savings accounts with different interest rates and terms, allowing customers to save money and earn interest over time. These accounts could include features like automatic transfers, overdraft protection, and mobile banking access."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/personal.png")}
                            webpImgSrc={require("@/assets/images/service/personal.webp")}
                            title="Personal loans"
                            description="Open Banking could offer personal loans for a variety of purposes, such as debt consolidation, home improvements, or major purchases. Customers could apply online and receive a decision quickly, with flexible repayment terms and competitive interest rates."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/credit-card.png")}
                            webpImgSrc={require("@/assets/images/service/credit-card.webp")}
                            title="Credit cards"
                            description="Open Banking could offer credit cards with different rewards programs and benefits, such as cash back, travel rewards, or low interest rates. Customers could manage their cards online and receive alerts for suspicious activity or due dates."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/money.png")}
                            webpImgSrc={require("@/assets/images/service/money.webp")}
                            title="Investment services"
                            description="Open Banking could offer investment services for customers looking to grow their wealth over time. These services could include mutual funds, exchange-traded funds, and other investment vehicles, with access to professional financial advice and analysis."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/bill.png")}
                            webpImgSrc={require("@/assets/images/service/bill.webp")}
                            title="Online bill pay"
                            description="Open Banking could offer a convenient online bill pay service, allowing customers to pay bills and manage expenses from their computer or mobile device. This service could include features like automatic payments, bill reminders, and customizable payment schedules."
                        />
                        <Service
                            imgSrc={require("@/assets/images/service/deal.png")}
                            webpImgSrc={require("@/assets/images/service/deal.webp")}
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
                                <Link className="fs-xl text-primary fw-700" to={paths.void.path}>
                                    How do I sign up for an account with Open Banking?
                                </Link>
                                <p className={cn(sl.faqDesc, "fsm-sm")}>
                                    You can sign up for an account with Open Banking online by
                                    visiting our website and filling out the online application
                                    form. Once your application is approved, you will receive
                                    instructions for setting up your account and accessing our
                                    online banking platform.
                                </p>
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
                        <PaymentService
                            img1xSrc={require("@/assets/images/payment-services/mastercard-1x.png")}
                            img2xSrc={require("@/assets/images/payment-services/mastercard-2x.png")}
                            webpImg1xSrc={require("@/assets/images/payment-services/mastercard-1x.webp")}
                            webpImg2xSrc={require("@/assets/images/payment-services/mastercard-2x.webp")}
                            alt="mastercard"
                            w={135}
                            h={76}
                        />
                        <PaymentService
                            img1xSrc={require("@/assets/images/payment-services/visa-1x.png")}
                            img2xSrc={require("@/assets/images/payment-services/visa-2x.png")}
                            webpImg1xSrc={require("@/assets/images/payment-services/visa-1x.webp")}
                            webpImg2xSrc={require("@/assets/images/payment-services/visa-2x.webp")}
                            alt="visa"
                            w={216}
                            h={76}
                        />
                        <PaymentService
                            img1xSrc={require("@/assets/images/payment-services/paypal-1x.png")}
                            img2xSrc={require("@/assets/images/payment-services/paypal-2x.png")}
                            webpImg1xSrc={require("@/assets/images/payment-services/paypal-1x.webp")}
                            webpImg2xSrc={require("@/assets/images/payment-services/paypal-2x.webp")}
                            alt="paypal"
                            w={216}
                            h={76}
                        />
                        <PaymentService
                            img1xSrc={require("@/assets/images/payment-services/payoneer-1x.png")}
                            img2xSrc={require("@/assets/images/payment-services/payoneer-2x.png")}
                            webpImg1xSrc={require("@/assets/images/payment-services/payoneer-1x.webp")}
                            webpImg2xSrc={require("@/assets/images/payment-services/payoneer-2x.webp")}
                            alt="payoneer"
                            w={216}
                            h={76}
                        />
                    </ul>
                </section>
            </main>
            <Footer />
        </Page>
    );
};

export default HomePage;
