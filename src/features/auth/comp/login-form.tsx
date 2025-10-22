import * as yup from "yup";
import { type InferType } from "yup";
import { Form, EmailInput, PasswordInput, SubmitButton, FormError } from "@ui/form";
import { useLogin } from "../api/auth";

const schema = yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Password"),
});

type Props = {
    onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: Props) => {
    const loginUser = useLogin();

    const handleSubmit = async (data: InferType<typeof schema>) => {
        await loginUser(data);
        onSuccess();
    };

    return (
        <Form schema={schema} defaultValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
            {({ register, formState }) => (
                <>
                    <EmailInput
                        reg={register("email")}
                        label="Email"
                        placeholder="Enter your email here"
                        error={formState.errors.email}
                        autoComplete="username"
                    />
                    <PasswordInput.WithRecover
                        reg={register("password")}
                        label="Password"
                        placeholder="Enter your password here"
                        error={formState.errors.password}
                        autoComplete="current-password"
                        onRecover={() => {}}
                    />
                    <FormError />
                    <SubmitButton>Log in</SubmitButton>
                </>
            )}
        </Form>
    );
};
