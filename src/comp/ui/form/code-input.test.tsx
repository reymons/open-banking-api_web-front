import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { CodeInput } from "./code-input";

test("label is visible only for screen readers", () => {
    const label = "Enter the code";
    render(<CodeInput name="code" label={label} codeLength={4} onCode={() => {}} />);
    expect(screen.getByText(label).classList.contains("sr-only")).toBe(true);
});

test("renders a correct number of inputs", () => {
    const codeLength = 2;
    render(<CodeInput name="code" label="" codeLength={codeLength} onCode={() => {}} />);
    expect(screen.getAllByRole("textbox").length).toBe(codeLength);
});

test("first input has a correct 'autocomplete' attribute", () => {
    render(<CodeInput name="code" label="" codeLength={2} onCode={() => {}} />);
    expect(screen.getAllByRole("textbox")[0]).toHaveAttribute("autocomplete", "one-time-code");
});

test("inputs have a correct type", () => {
    render(<CodeInput name="code" label="" codeLength={2} onCode={() => {}} />);
    for (const input of screen.getAllByRole("textbox")) {
        expect(input).toHaveAttribute("type", "tel");
    }
});

test("returns correct code", async () => {
    const onCode = jest.fn();
    const code = "031827";
    render(<CodeInput name="code" label="" codeLength={code.length} onCode={onCode} />);
    const inputs = screen.getAllByRole("textbox");
    for (let i = 0; i < code.length; i++) {
        await userEvent.type(inputs[i], code[i]);
    }
    expect(onCode).toHaveBeenCalledTimes(1);
    expect(onCode).toHaveBeenCalledWith(code);
});

test("focuses the next input after a user types in a letter", async () => {
    const codeLength = 4;
    render(<CodeInput name="code" label="" codeLength={codeLength} onCode={() => {}} />);
    const inputs = screen.getAllByRole("textbox");
    for (let i = 0; i < codeLength - 1; i++) {
        await userEvent.type(inputs[i], "0");
        expect(inputs[i + 1]).toBe(document.activeElement);
    }
});
