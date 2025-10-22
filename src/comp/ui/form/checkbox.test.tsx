import { render, screen } from "@testing-library/react";
import { Checkbox } from "./checkbox";
import { mockFieldError, mockReg } from "@/testing/mocks/form";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { FieldError } from "react-hook-form";

describe("Checkbox", () => {
    test("marks input as invalid for screen readers on error", async () => {
        const Component = () => {
            const [error, setError] = useState<FieldError>();
            const raiseError = () => setError(mockFieldError());
            return (
                <>
                    <button data-testid="raise-error" onClick={raiseError} />
                    <Checkbox reg={mockReg()} error={error} />
                </>
            );
        };
        render(<Component />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeValid();
        await userEvent.click(screen.getByTestId("raise-error"));
        expect(checkbox).toBeInvalid();
    });
});

describe("Checkbox.WithLabel", () => {
    test("connects label to the checkbox", async () => {
        const label = "Test";
        render(<Checkbox.WithLabel label={label} reg={mockReg()} error={undefined} />);
        await userEvent.click(screen.getByLabelText(label));
        expect(screen.getByRole("checkbox")).toBe(document.activeElement);
    });
});
