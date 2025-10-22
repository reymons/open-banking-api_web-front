import { paths } from "@/config/paths";
import { Page } from "@/comp/layout/page";
import { AuthPageLayout } from "@/comp/layout/auth-page-layout";
import { LoginForm } from "@/features/auth";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate(paths.profile.path);
    };

    return (
        <Page title="Login" description="Log in to your Open Banking account">
            <AuthPageLayout
                title="Welcome Back"
                subTitle="Enter your details to log in to your Banking Dashboard!"
                form={{
                    title: "Log in",
                    element: <LoginForm onSuccess={handleSuccess} />,
                }}
                hint={{
                    text: "Don't have an account?",
                    link: {
                        href: paths.register.path,
                        text: "Register",
                    },
                }}
            />
        </Page>
    );
};

export default LoginPage;
