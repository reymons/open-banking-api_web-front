import { clientV1 } from "@/lib/client/http";

// Sends a reset-password link to the specified email
export function requestPasswordReset(email: string) {
    return clientV1.post("/passwords/reset-requests", { email });
}

export function resetPassword(token: string, password: string) {
    return clientV1.post("/passwords/reset-requests/submit", { token, password });
}
