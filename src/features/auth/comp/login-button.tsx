import { paths } from "@/config/paths";
import { Button } from "@ui/button";

export const LoginButton = () => {
    return (
        <Button asLink kind="transparent" to={paths.login.path}>
            Log in
        </Button>
    );
};
