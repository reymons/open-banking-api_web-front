import { renderHook, waitFor } from "@testing-library/react";
import { useLogin } from "./auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";
import { restHandler, restServer } from "@/testing/server";
import { entity } from "@/testing/mocks/entity";
import { useUser } from "@/stores/user";

describe("useLogout", () => {
    it("sets new user on login", async () => {
        const queryClient = new QueryClient();
        const user = {
            ...entity.user,
            email: faker.internet.email(),
        };

        restServer.use(restHandler("post", "/api/v1/auth/sign-in", user));

        const loginHook = renderHook(() => useLogin(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        const userHook = renderHook(() => useUser(), {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            ),
        });

        loginHook.result.current({
            email: user.email,
            password: faker.internet.password(),
        });

        await waitFor(() => expect(userHook.result.current).toStrictEqual(user));
    });
});
