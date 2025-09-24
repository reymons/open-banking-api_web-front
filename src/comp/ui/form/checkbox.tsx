import cn from "classnames";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import sl from "./checkbox.module.scss";
import { useId } from "react";

type Props = {
    id?: string;
    reg: UseFormRegisterReturn;
    error: FieldError | undefined;
};

export const Checkbox = ({ id, reg, error }: Props) => {
    const hasError = !!error;
    return (
        <input
            {...reg}
            className={cn(sl.input, hasError && sl.error)}
            type="checkbox"
            id={id}
            aria-invalid={hasError}
        />
    );
};

type WithLabelProps = Omit<Props, "id"> & { label: React.ReactNode };

const WithLabel: React.FC<WithLabelProps> = ({ label, ...rest }) => {
    const id = useId();

    return (
        <div className={sl.withLabel}>
            <Checkbox id={id} {...rest} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

WithLabel.displayName = "Checkbox.WithLabel";

Checkbox.WithLabel = WithLabel;
