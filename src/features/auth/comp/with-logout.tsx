import { useState } from "react";
import { InfoModal } from "@/comp/modals/info-modal";
import { useModal } from "@/lib/modal";
import { toError } from "@/lib/net";
import { useLogout } from "../api/auth";

type Props = {
    children: (logout: () => void) => React.ReactNode;
};

export const WithLogout = ({ children }: Props) => {
    const modal = useModal();
    const logout = useLogout();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (err) {
            setError(toError(err));
        }
        setIsLoading(false);
    };

    return (
        <>
            {children(() => modal.open())}
            <InfoModal
                ref={modal.ref}
                onClose={() => setError(null)}
                btnsProps={{
                    rearBtnProps: { children: "Cancel" },
                    frontBtnProps: {
                        children: "Log out",
                        onClick: handleLogout,
                        loading: isLoading,
                    },
                }}
            >
                <p>Are you sure you want to log out?</p>
                {error && <p className="text-danger">{error.message}</p>}
            </InfoModal>
        </>
    );
};
