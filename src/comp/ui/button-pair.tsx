import cn from "classnames";
import { Button, type ButtonProps } from "./button";
import sl from "./button-pair.module.scss";

type Props = {
    dir?: "x" | "y";
    withRearBtn?: boolean;
    rearBtnProps?: ButtonProps;
    frontBtnProps?: ButtonProps;
};

export const ButtonPair = ({
    withRearBtn = true,
    dir = "x",
    rearBtnProps,
    frontBtnProps,
}: Props) => {
    const isDirY = dir === "y";

    return (
        <div className={cn(sl.wrapper, isDirY && sl.dirY)}>
            {withRearBtn && <Button stretch={isDirY} kind="neutral" {...rearBtnProps} />}
            <Button {...frontBtnProps} />
        </div>
    );
};
