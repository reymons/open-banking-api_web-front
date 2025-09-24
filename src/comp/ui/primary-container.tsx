import { px2rem } from "@/lib/css";
import cn from "classnames";
import sl from "./primary-container.module.scss";

type Props = {
    title?: string;
    children: React.ReactNode;
    h?: number; // px
    w?: number; // px
    glow?: boolean;
};

export const PrimaryContainer = ({ title, children, w, h, glow = true }: Props) => {
    return (
        <div
            className={cn(sl.wrapper, glow && sl.glow)}
            style={{
                width: w ? `${px2rem(w)}rem` : undefined,
                height: h ? `${px2rem(h)}rem` : undefined,
            }}
        >
            {title && <div className={sl.title}>{title}</div>}
            {children}
        </div>
    );
};
