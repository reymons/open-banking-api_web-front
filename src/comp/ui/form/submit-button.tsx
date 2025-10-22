import { Button } from "@ui/button";
import { useFormContext } from "react-hook-form";

type Props = Omit<React.ComponentProps<typeof Button>, "loading" | "type">;

export const SubmitButton = (props: Props) => {
    const { formState } = useFormContext();
    const { isSubmitting, isSubmitSuccessful } = formState;

    return <Button stretch {...props} loading={isSubmitting || isSubmitSuccessful} type="submit" />;
};
