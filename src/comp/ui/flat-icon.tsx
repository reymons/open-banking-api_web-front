type FlatIconType =
    | "angle-small-down"
    | "apps"
    | "arrow-right"
    | "arrow-small-group"
    | "arrow-small-right"
    | "bell"
    | "calendar"
    | "credit-card"
    | "envelope"
    | "eye-crossed"
    | "eye"
    | "lock-locked"
    | "lock-unlocked"
    | "pencil"
    | "plus-small"
    | "search"
    | "user"
    | "menu-burger";

type Props = {
    type: FlatIconType;
    w?: string | number;
    h?: string | number;
    color?: string;
    transform?: string;
};

export const FlatIcon = ({ type, w = 21, h = 21, color, transform }: Props) => {
    return (
        <svg
            width={w}
            height={h}
            style={color ? ({ "--color-flat-icon": color } as React.CSSProperties) : undefined}
            transform={transform}
        >
            <use href={`${require("@/assets/preloaded/icons/flat.svg")}#${type}`} />
        </svg>
    );
};
