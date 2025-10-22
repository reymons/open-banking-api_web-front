import { px2rem } from "@/lib/css";
import { Input } from "../input";
import { FlatIcon } from "@ui/flat-icon";

type Props = Omit<React.ComponentProps<typeof Input>, "type">;

export const EmailInput = (props: Props) => {
    return (
        <Input.WithSideContent
            {...props}
            pr={`${px2rem(54)}rem`}
            side={<FlatIcon type="envelope" />}
        />
    );
};
