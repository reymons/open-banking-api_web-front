import { useState } from "react";
import cn from "classnames";
import { Input } from "../input";
import { px2rem } from "@/lib/css";
import sl from "./password-input.module.scss";

type Props = PartialBy<
    Omit<React.ComponentProps<typeof Input.WithSideContent>, "type">,
    "side" | "pr"
>;

export const PasswordInput = ({ side, pr, ...rest }: Props) => {
    const [visible, setVisible] = useState(false);

    return (
        <Input.WithSideContent
            {...rest}
            pr={pr ?? `${px2rem(54)}rem`}
            type={visible ? "text" : "password"}
            side={
                <>
                    {side}
                    <button
                        className="icon-btn"
                        type="button"
                        onClick={() => setVisible(f => !f)}
                        aria-label={visible ? "Hide password" : "Show password"}
                    >
                        <svg width={21} height={21}>
                            <use
                                href={`${require("@/assets/images/flat-icons.svg")}#lock-locked`}
                            />
                        </svg>
                    </button>
                </>
            }
        />
    );
};

type WithRecoverProps = Omit<Props, "side"> & {
    onRecover: () => void;
};

const WithRecover: React.FC<WithRecoverProps> = ({ onRecover, ...rest }) => {
    return (
        <PasswordInput
            {...rest}
            pr={`${px2rem(120)}rem`}
            side={
                <div>
                    <span className="text-hint">|</span>
                    <button
                        className={cn("inline-clickable", sl.recoverBtn)}
                        type="button"
                        onClick={onRecover}
                        aria-label="Recover password"
                    >
                        Forgot?
                    </button>
                </div>
            }
        />
    );
};

WithRecover.displayName = "PasswordInput.WithRecover";

PasswordInput.WithRecover = WithRecover;
