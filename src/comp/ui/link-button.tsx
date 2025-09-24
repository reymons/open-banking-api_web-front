import { Button } from "./button";

type Props = React.ComponentProps<typeof Button> & {
    href: string;
};

// A link but with the styles of the @ui/button
//
// TODO: export shared styles from the button component
// and use them here as well so the native link element can be used
export const LinkButton = ({ href, ...rest }: Props) => {
    return <Button href={href} {...rest} />;
};
