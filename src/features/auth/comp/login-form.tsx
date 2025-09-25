import * as yup from "yup";
import { Form, EmailInput, PasswordInput } from "@ui/form";
import { Button } from "@ui/button";

const schema = yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Password"),
});

export const LoginForm = () => {
    return (
        <Form schema={schema} defaultValues={{ email: "", password: "" }} onSubmit={() => {}}>
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
                    <Button type="submit" stretch>
                        Submit
                    </Button>
                </>
            )}
        </Form>
    );
};
