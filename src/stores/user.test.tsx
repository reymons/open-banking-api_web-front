import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { entity } from "@/testing/mocks/entity";
import { useIsLoadingUser, useUser } from "./user";

const mountUseUserHook = (client: QueryClient) => {
    return renderHook(() => useUser(), {
        wrapper: ({ children }) => (
            <QueryClientProvider client={client}>{children}</QueryClientProvider>
        ),
    });
};

test("fetches user only once and for all", async () => {
    const queryClient = new QueryClient();

    let hook = mountUseUserHook(queryClient);
    await waitFor(() => expect(hook.result.current).toStrictEqual(entity.user));
    hook.rerender();
    await waitFor(() => expect(hook.result.current).toStrictEqual(entity.user));
    hook.unmount();
    hook = mountUseUserHook(queryClient);
    await waitFor(() => expect(hook.result.current).toStrictEqual(entity.user));
});

test("shows that user is loading only on initial request", async () => {
    const queryClient = new QueryClient();

    const hook = renderHook(() => useIsLoadingUser(), {
        wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        ),
    });

    expect(hook.result.current).toBe(true);
    let userHook = mountUseUserHook(queryClient);
    await waitFor(() => expect(hook.result.current).toBe(false));
    userHook.rerender();
    await waitFor(() => expect(hook.result.current).toBe(false));
    userHook.unmount();
    await waitFor(() => expect(hook.result.current).toBe(false));
    userHook = mountUseUserHook(queryClient);
    await waitFor(() => expect(hook.result.current).toBe(false));
});
