import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { Protected } from "./protected";
import { paths } from "@/config/paths";
import { restHandler, restServer } from "@/testing/server";
import { Route, Router, Routes } from "@/testing/app";

const renderProtectedPage = (
    component: () => React.ReactNode,
    loginComponent: () => React.ReactNode = () => null
) => {
    const client = new QueryClient();

    render(
        <QueryClientProvider client={client}>
            <Router initialEntries={["/"]}>
                <Routes>
                    <Route Component={Protected}>
                        <Route path="/" Component={component} />
                    </Route>
                    <Route path={paths.login.path} Component={loginComponent} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

test("shows loading screen if user is loading", async () => {
    renderProtectedPage(() => <div data-testid="target" />);
    expect(screen.queryByTestId("target")).not.toBeInTheDocument();
    expect(screen.getByTestId("loading-screen")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId("target")).toBeInTheDocument());
});

test("redirects to the login page if no user", async () => {
    restServer.use(restHandler("get", "/api/v1/users/me", null));
    renderProtectedPage(
        () => <div data-testid="home" />,
        () => <div data-testid="login" />
    );
    await waitFor(() => expect(screen.getByTestId("login")).toBeInTheDocument());
    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
});
