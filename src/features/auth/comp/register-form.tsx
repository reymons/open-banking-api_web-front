import * as yup from "yup";
import { Link } from "react-router";
import { Button } from "@ui/button";
import { Form, Checkbox, Input, PasswordInput, EmailInput } from "@ui/form";
import { px2rem } from "@/lib/css";
import { paths } from "@/config/paths";

const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).max(100).label("Password"),
    termsAccepted: yup.boolean().oneOf([true]),
});

export const RegisterForm = () => {
    const sprite = require("@/assets/images/flat-icons.svg");

    return (
        <Form
            schema={schema}
            defaultValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                termsAccepted: false,
            }}
            onSubmit={data => console.log(data)}
        >
            {({ register, formState }) => (
                <>
                    <Input.WithSideContent
                        reg={register("firstName")}
                        label="First name"
                        placeholder="Enter your first name here"
                        error={formState.errors.firstName}
                        pr={`${px2rem(54)}rem`}
                        side={
                            <svg width={21} height={21}>
                                <use href={`${sprite}#user`} />
                            </svg>
                        }
                    />
                    <Input.WithSideContent
                        reg={register("lastName")}
                        label="Last name"
                        placeholder="Enter your last name here"
                        error={formState.errors.lastName}
                        pr={`${px2rem(54)}rem`}
                        side={
                            <svg width={21} height={21}>
                                <use href={`${sprite}#user`} />
                            </svg>
                        }
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
                    <Button type="submit" stretch>
                        Register
                    </Button>
                </>
            )}
        </Form>
    );
};
