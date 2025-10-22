import { type InferType } from "yup";
import { Router } from "@/testing/app";
import { BaseUserInfoForm, schema } from "./base-user-info-form";
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type FormData = InferType<typeof schema>;

test("submits correct data", async () => {
    const password = faker.internet.password();
    const data: FormData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password,
        cpassword: password,
        termsAccepted: true,
    };
    const handleSubmit = jest.fn();

    render(
        <Router>
            <BaseUserInfoForm onSubmit={handleSubmit} />
        </Router>
    );

    await userEvent.type(screen.getByLabelText(/first name/i), data.firstName);
    await userEvent.type(screen.getByLabelText(/last name/i), data.lastName);
    await userEvent.type(screen.getByLabelText(/email/i), data.email);
    await userEvent.type(screen.getByLabelText(/^password$/i), data.password);
    await userEvent.type(screen.getByLabelText(/confirm password/i), data.cpassword);
    await userEvent.click(
        screen.getByLabelText(/i agree to all the terms, privacy policy and fees/i)
    );
    await userEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(data);
});
