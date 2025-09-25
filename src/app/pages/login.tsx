import { Page } from "@/comp/layout/page";
import { AuthPageLayout } from "@/comp/layout/auth-page-layout";
import { LoginForm } from "@/features/auth/comp/login-form";
import { paths } from "@/config/paths";

const LoginPage = () => {
    return (
        <Page title="Login" description="Log in to your Open Banking account">
            <AuthPageLayout
                title="Welcome Back"
                subTitle="Enter your details to log in to your Banking Dashboard!"
                form={{
                    title: "Log in",
                    element: <LoginForm />,
                }}
                hint={{
                    text: "Don't have an account?",
                    linkHref: paths.register.path,
                    linkText: "Register",
                }}
            />
        </Page>
    );
};

export default LoginPage;
