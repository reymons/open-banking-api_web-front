import { render, screen } from "@testing-library/react";
import { Button } from "./button";

jest.mock("react-router", () => ({
    useNavigate: () => () => {},
}));

test("displays passed text", () => {
    const text = "Subscribe";
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
});

test("handles loading state", () => {
    const text = "Click me";
    render(<Button loading>Click me</Button>);
    expect(screen.queryByText(text)).toBe(null);
    expect(screen.getByRole("button").getAttribute("aria-busy")).toBe("true");
});

test("converts a button to a link", () => {
    const href = "/some-path";
    render(<Button href={href}>Hello</Button>);
    expect(screen.getByRole("link")).toBeInTheDocument();
});
