import { Page } from "@/comp/layout/page";
import { RegisterForm } from "@/features/auth/comp/register-form";
import { AuthPageLayout } from "@/comp/layout/auth-page-layout";
import { paths } from "@/config/paths";

const RegisterPage = () => {
    return (
        <Page title="Registration" description="Register on Open Banking">
            <AuthPageLayout
                title={`Experience\nhassle-free banking`}
                subTitle={`Experience simple, secure, and stress-free banking. Say goodbye\nto long queues and complex procedures and hello to hassle-free\nbanking with Open Banking`}
                form={{
                    title: "Register",
                    element: <RegisterForm />,
                }}
                hint={{
                    text: "Already have an account?",
                    linkHref: paths.login.path,
                    linkText: "Log in",
                }}
            />
        </Page>
    );
};

export default RegisterPage;
