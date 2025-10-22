import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "@/api/user";
import { User } from "@/entities/user";

const queryKey = "/users/me";

export function useUser() {
    return useQuery({
        queryKey: [queryKey],
        queryFn: () => getCurrentUser().then(r => r.data),
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    }).data;
}

export function useIsLoadingUser() {
    return useQuery({
        queryKey: [queryKey],
        enabled: false,
        queryFn: () => {},
    }).isPending;
}

export function useMutateUser() {
    const client = useQueryClient();

    return (newUser: User | null) => {
        client.setQueryData([queryKey], newUser);
    };
}
