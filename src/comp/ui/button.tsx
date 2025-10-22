import cn from "classnames";
import { type NavigateFunction, useNavigate } from "react-router";
import { Preloader } from "@ui/preloader";
import sl from "./button.module.scss";

type Props = React.JSX.IntrinsicElements["button"] & {
    kind?: "primary" | "neutral" | "transparent";
    size?: "sm" | "md";
    // Show the loading state of the button
    loading?: boolean;
    // Insert some elements to the right of the children
    // Can be used to decorate a button with different icons
    beforeEnd?: React.ReactNode;
    // Make the button take the parent's width
    stretch?: boolean;
    // Use the button as a A11Y-compatible link
    href?: string;
};

// These props are used when extending from the Button component
// As an example, see Button.WithArrow below
type ExtProps = Omit<Props, "beforeEnd">;

function getLinkProps(navigate: NavigateFunction, href: string) {
    return {
        role: "link",
        onClick: () => navigate(href),
    };
}

export const Button = ({
    children,
    type = "button",
    kind = "primary",
    size = "md",
    loading = false,
    beforeEnd,
    href,
    stretch,
    disabled,
    ...rest
}: Props) => {
    const navigate = useNavigate();

    return (
        <button
            className={cn(sl.button, stretch && sl.stretch)}
            type={type}
            data-kind={kind}
            data-size={size}
            {...rest}
            {...(href ? getLinkProps(navigate, href) : {})}
            aria-busy={loading}
            disabled={disabled || loading}
        >
            {loading ? (
                <Preloader />
            ) : (
                <>
                    {children}
                    {beforeEnd}
                </>
            )}
        </button>
    );
};

// TODO: Add arrow
const WithArrow: React.FC<ExtProps> = props => {
    return <Button {...props} beforeEnd={<p>Arrow</p>} />;
};

WithArrow.displayName = "Button.WithArrow";

Button.WithArrow = WithArrow;
