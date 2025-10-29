import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ResetPasswordForm } from "./reset-password-form";

jest.mock("@/api/password", () => ({
    resetPassword: () => Promise.resolve(),
}));

test("calls onSuccess after a successful submit", async () => {
    const handleSuccess = jest.fn();
    const password = faker.internet.password();

    render(<ResetPasswordForm onSuccess={handleSuccess} resetToken="" />);

    await userEvent.type(screen.getByLabelText(/^new password/i), password);
    await userEvent.type(screen.getByLabelText(/confirm new password/i), password);
    await userEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(handleSuccess).toHaveBeenCalledTimes(1);
});
