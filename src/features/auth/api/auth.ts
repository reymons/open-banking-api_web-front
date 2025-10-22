import { login, logout, register } from "@/api/auth";
import { useMutateUser } from "@/stores/user";

export function useRegister() {
    return async (data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) => {
        await register(data);
    };
}

export function useLogin() {
    const mutateUser = useMutateUser();

    return async (data: { email: string; password: string }) => {
        const res = await login(data);
        mutateUser(res.data);
    };
}

export function useLogout() {
    const mutateUser = useMutateUser();

    return async () => {
        await logout();
        mutateUser(null);
        // After we set the user to null,
        // the logic inside the Protected component will redirect
        // a user to the login page,
        // so there's no need for an explicit redirect
    };
}
