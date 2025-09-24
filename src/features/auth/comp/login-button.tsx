import { paths } from "@/config/paths";
import { LinkButton } from "@ui/link-button";

export const LoginButton = () => {
    return (
        <LinkButton kind="transparent" href={paths.login.path}>
            Log in
        </LinkButton>
    );
};
