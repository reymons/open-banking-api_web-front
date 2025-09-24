import { px2rem } from "@/lib/css";
import { Input } from "../input";

type Props = Omit<React.ComponentProps<typeof Input>, "type">;

export const EmailInput = (props: Props) => {
    return (
        <Input.WithSideContent
            {...props}
            pr={`${px2rem(54)}rem`}
            side={
                <svg width={21} height={19}>
                    <use href={`${require("@/assets/images/flat-icons.svg")}#mail`} />
                </svg>
            }
        />
    );
};
