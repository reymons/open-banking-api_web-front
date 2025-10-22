import { Route, Router, Routes } from "@/testing/app";
import { render, screen } from "@testing-library/react";
import { LoginButton } from "./login-button";
import { paths } from "@/config/paths";
import userEvent from "@testing-library/user-event";

test("redirects to the login page on link click", async () => {
    const LoginPage = () => <div data-testid="target" />;

    render(
        <Router>
            <Routes>
                <Route path="/" element={<LoginButton />} />
                <Route path={paths.login.path} element={<LoginPage />} />
            </Routes>
        </Router>
    );

    await userEvent.click(screen.getByRole("link"));
    expect(screen.getByTestId("target")).toBeInTheDocument();
});
