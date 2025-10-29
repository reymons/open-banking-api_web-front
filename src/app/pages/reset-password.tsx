import { AuthPageLayout } from "@/comp/layout/auth-page-layout";
import { Page } from "@/comp/layout/page";
import { InfoModal } from "@/comp/modals/info-modal";
import { paths } from "@/config/paths";
import { ResetPasswordForm } from "@/features/password";
import { useModal } from "@/lib/modal";
import { useNavigate, useSearchParams } from "react-router";

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const resetToken = params.get("token");
    const successModal = useModal();

    if (!resetToken) {
        return "Invalid params";
    }

    return (
        <Page title="Reset password" description="Reset password on Open Banking">
            <AuthPageLayout
                title="Reset password"
                subTitle=""
                form={{
                    title: "Reset password",
                    element: (
                        <ResetPasswordForm
                            onSuccess={() => successModal.open()}
                            resetToken={resetToken}
                        />
                    ),
                }}
            />
            <InfoModal ref={successModal.ref} onClose={() => navigate(paths.login.path)}>
                <p>Your password has been successfully reset!</p>
                <p>Please log in again</p>
            </InfoModal>
        </Page>
    );
};

export default ResetPasswordPage;
