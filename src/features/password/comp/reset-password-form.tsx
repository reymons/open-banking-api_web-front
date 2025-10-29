import * as yup from "yup";
import { Form, FormError, PasswordInput, SubmitButton } from "@ui/form";
import { resetPassword } from "@/api/password";

const schema = yup.object({
    password: yup.string().required().min(6).max(100).label("Password"),
    cpassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .label("Confirm password"),
});

type Props = {
    resetToken: string;
    onSuccess: () => void;
};

export const ResetPasswordForm = ({ resetToken, onSuccess }: Props) => {
    return (
        <Form
            schema={schema}
            defaultValues={{ password: "", cpassword: "" }}
            onSubmit={async ({ password }) => {
                await resetPassword(resetToken, password);
                onSuccess();
            }}
        >
            {({ register, formState }) => (
                <>
                    <PasswordInput
                        reg={register("password")}
                        placeholder="Enter a new password here"
                        label="New password"
                        error={formState.errors.password}
                        autoComplete="off"
                    />
                    <PasswordInput
                        reg={register("cpassword")}
                        placeholder="Enter your new password here again"
                        label="Confirm new password"
                        error={formState.errors.cpassword}
                        autoComplete="off"
                    />
                    <FormError />
                    <SubmitButton>Reset</SubmitButton>
                </>
            )}
        </Form>
    );
};
