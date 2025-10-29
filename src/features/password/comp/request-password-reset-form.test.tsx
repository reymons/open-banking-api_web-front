import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RequestPasswordResetForm } from "./request-password-reset-form";

jest.mock("@/api/password", () => ({
    requestPasswordReset: () => {},
}));

test("calls onSuccess after a successful submit", async () => {
    const handleSuccess = jest.fn();
    render(<RequestPasswordResetForm onSuccess={handleSuccess} />);
    await userEvent.type(screen.getByLabelText(/email/i), faker.internet.email());
    await userEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(handleSuccess).toHaveBeenCalledTimes(1);
});
