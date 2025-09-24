import type { InferType, ObjectSchema } from "yup";
import type { UseFormProps, FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Schema = ObjectSchema<any>;

type Props<S extends Schema, T extends FieldValues = InferType<S>> = {
    defaultValues: T;
    schema: S;
    onSubmit: SubmitHandler<T>;
    children: (form: UseFormReturn<T>) => React.ReactNode;
    options?: Omit<UseFormProps<T>, "defaultValues" | "resolver">;
};

export const Form = <S extends Schema>({
    defaultValues,
    schema,
    onSubmit,
    children,
    options,
}: Props<S>) => {
    const form = useForm({
        defaultValues,
        resolver: yupResolver(schema),
        ...options,
    });

    return (
        <FormProvider {...form}>
            <form
                style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                {children(form)}
            </form>
        </FormProvider>
    );
};
