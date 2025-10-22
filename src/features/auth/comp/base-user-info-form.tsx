import * as yup from "yup";
import { Link } from "react-router";
import {
    Form,
    Checkbox,
    Input,
    PasswordInput,
    EmailInput,
    type FormProps,
    SubmitButton,
    FormError,
} from "@ui/form";
import { px2rem } from "@/lib/css";
import { paths } from "@/config/paths";
import { FlatIcon } from "@ui/flat-icon";

export const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).max(100).label("Password"),
    cpassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .label("Confirm password"),
    termsAccepted: yup.boolean().oneOf([true]),
});

export const BaseUserInfoForm = ({ defaultValues, onSubmit }: FormProps<typeof schema>) => {
    return (
        <Form
            schema={schema}
            onSubmit={onSubmit}
            defaultValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cpassword: "",
                termsAccepted: false,
                ...defaultValues,
            }}
        >
            {({ register, formState }) => (
                <>
                    <Input.WithSideContent
                        reg={register("firstName")}
                        label="First name"
                        placeholder="Enter your first name here"
                        error={formState.errors.firstName}
                        pr={`${px2rem(54)}rem`}
                        side={<FlatIcon type="user" />}
                    />
                    <Input.WithSideContent
                        reg={register("lastName")}
                        label="Last name"
                        placeholder="Enter your last name here"
                        error={formState.errors.lastName}
                        pr={`${px2rem(54)}rem`}
                        side={<FlatIcon type="user" />}
                    />
                    <EmailInput
                        label="Email"
                        placeholder="Enter your email here"
                        autoComplete="email"
                        reg={register("email")}
                        error={formState.errors.email}
                    />
                    <PasswordInput
                        reg={register("password")}
                        label="Password"
                        placeholder="Enter your password here"
                        autoComplete="off"
                        error={formState.errors.password}
                    />
                    <PasswordInput
                        reg={register("cpassword")}
                        label="Confirm password"
                        placeholder="Enter your password here again"
                        autoComplete="off"
                        error={formState.errors.cpassword}
                    />
                    <Checkbox.WithLabel
                        reg={register("termsAccepted")}
                        error={formState.errors.termsAccepted}
                        label={
                            <div>
                                I agree to all the{" "}
                                <Link className="inline-clickable" to={paths.void.path}>
                                    Terms
                                </Link>
                                ,{" "}
                                <Link className="inline-clickable" to={paths.void.path}>
                                    Privacy Policy
                                </Link>{" "}
                                and{" "}
                                <Link className="inline-clickable" to={paths.void.path}>
                                    Fees
                                </Link>
                            </div>
                        }
                    />
                    <FormError />
                    <SubmitButton>Register</SubmitButton>
                </>
            )}
        </Form>
    );
};
