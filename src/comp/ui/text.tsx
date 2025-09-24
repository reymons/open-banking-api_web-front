import cn from "classnames";
import { FontSizeProps } from "@/lib/ui/text";
import { createElement } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Element = keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>;

type FontSize =
    | "xsm" // 8px
    | "sm" // 12px
    | "md" // 16px
    | "lg" // 20px
    | "xl" // 24px
    | "2xl" // 28px
    | "3xl" // 32px
    | "unset";

type FontWeight = 400 | 500 | 700 | "unset";

type BaseProps = {
    className?: string;
    children: React.ReactNode;
};

type Props<T extends Element> = BaseProps &
    FontSizeProps & {
        color?: "primary" | "danger" | "hint";
        asProps?: React.ComponentProps<T>;
        as?: T;
        fs?: FontSize;
        fsm?: FontSize;
        fw?: FontWeight;
    };

export const Text = <T extends Element = "div">({
    className,
    fs,
    fsm,
    fw,
    color,
    children,
    as: As,
    asProps,
}: Props<T>) => {
    return createElement(
        As ?? "div",
        {
            className: cn(
                className,
                fs && "fs-" + fs,
                fsm && "fsm-" + fsm,
                fw && "fw-" + fw,
                color && "text-" + color
            ),
            ...asProps,
        },
        children
    );
};
