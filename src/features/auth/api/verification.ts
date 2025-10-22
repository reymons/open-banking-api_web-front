import { sendVerificationCode, submitVerification } from "@/api/auth";
import { useMutateUser } from "@/stores/user";

export function useSubmitVerification() {
    const mutateUser = useMutateUser();

    return async (email: string, code: string) => {
        const resp = await submitVerification(email, code);
        mutateUser(resp.data);
    };
}

export function useResendCode() {
    return async (email: string) => {
        await sendVerificationCode(email);
    };
}
