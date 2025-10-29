import * as yup from "yup";
import { EmailInput, Form, FormError, SubmitButton } from "@ui/form";
import { requestPasswordReset } from "@/api/password";

const schema = yup.object({
    email: yup.string().required().email().label("Email"),
});

type Props = {
    onSuccess: () => void;
};

export const RequestPasswordResetForm = ({ onSuccess }: Props) => {
    return (
        <Form
            schema={schema}
            defaultValues={{ email: "" }}
            onSubmit={async ({ email }) => {
                await requestPasswordReset(email);
                onSuccess();
            }}
        >
            {({ register, formState }) => (
                <>
                    <EmailInput
                        reg={register("email")}
                        placeholder="Enter your email"
                        label="Email"
                        error={formState.errors.email}
                    />
                    <FormError />
                    <SubmitButton>Reset</SubmitButton>
                </>
            )}
        </Form>
    );
};
