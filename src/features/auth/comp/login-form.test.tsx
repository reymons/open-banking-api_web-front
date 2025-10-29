import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "./login-form";

const loginUser = jest.fn();

jest.mock("../api/auth", () => ({
    useLogin: () => loginUser,
}));

test("submits correct data and calls onSuccess", async () => {
    const data = {
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    const handleSuccess = jest.fn();

    render(<LoginForm onSuccess={handleSuccess} />);
    await userEvent.type(screen.getByLabelText(/email/i), data.email);
    await userEvent.type(screen.getByLabelText(/^password$/i), data.password);
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(loginUser).toHaveBeenCalledTimes(1);
    expect(loginUser).toHaveBeenCalledWith(data);
    expect(handleSuccess).toHaveBeenCalledTimes(1);
});
