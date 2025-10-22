import { clientV1 } from "@/lib/client/http";
import { User } from "@/entities/user";

export function register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) {
    return clientV1.post("/auth/sign-up", data);
}

export function login(data: { email: string; password: string }) {
    return clientV1.post<User>("/auth/sign-in", data);
}

export function logout() {
    return clientV1.delete("/auth/sign-out");
}

export function submitVerification(email: string, code: string) {
    return clientV1.post<User>("/auth/verification", { email, code });
}

export function sendVerificationCode(email: string) {
    return clientV1.post("/auth/verification/code", { email });
}
