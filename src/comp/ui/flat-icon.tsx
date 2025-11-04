import "./flat-icon.scss";

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
    color?: string;
    style?: React.CSSProperties;
};

export const FlatIcon = ({ type, color, style }: Props) => {
    return (
        <svg
            className="flat-icon"
            style={{
                ...style,
                ...(color ? { "--color-flat-icon": color } : undefined),
            }}
        >
            <use href={`${require("@/assets/preloaded/icons/flat.svg")}#${type}`} />
        </svg>
    );
};
