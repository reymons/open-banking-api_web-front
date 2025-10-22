import { useNavigate } from "react-router";
import { paths } from "@/config/paths";
import { Page } from "@/comp/layout/page";
import { AuthPageLayout } from "@/comp/layout/auth-page-layout";
import { RegisterForm, useRegisterForm } from "@/features/auth";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { formProps, isDefaultStep } = useRegisterForm();

    const handleSuccess = () => {
        navigate(paths.profile.path);
    };

    return (
        <Page title="Registration" description="Register on Open Banking">
            <AuthPageLayout
                title={`Experience\nhassle-free banking`}
                subTitle={`Experience simple, secure, and stress-free banking. Say goodbye\nto long queues and complex procedures and hello to hassle-free\nbanking with Open Banking`}
                form={{
                    title: isDefaultStep ? "Register" : "Email verification",
                    element: <RegisterForm onSuccess={handleSuccess} {...formProps} />,
                }}
                hint={{
                    text: "Already have an account?",
                    link: {
                        href: paths.login.path,
                        text: "Log in",
                    },
                }}
            />
        </Page>
    );
};

export default RegisterPage;
