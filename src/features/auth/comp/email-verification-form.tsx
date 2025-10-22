import * as yup from "yup";
import { Form, FormProps, SubmitButton, FormError, CodeInput } from "@ui/form";

type Props = FormProps<typeof schema> & {
    email: string;
    onChangeEmail: () => void;
};

const codeLength = 6;

export const schema = yup.object({
    code: yup.string().required().length(codeLength).label("Verification code"),
});

export const EmailVerificationForm = ({ email, defaultValues, onSubmit, onChangeEmail }: Props) => {
    return (
        <Form schema={schema} defaultValues={{ code: "", ...defaultValues }} onSubmit={onSubmit}>
            {({ setValue }) => (
                <>
                    <div className="fsm-sm">
                        A <em>{codeLength}-digit</em> code has been sent to <em>{email}</em>{" "}
                        <button
                            className="inline-clickable"
                            type="button"
                            onClick={() => onChangeEmail()}
                        >
                            Change
                        </button>
                    </div>
                    <CodeInput
                        name="emailVerifCode"
                        codeLength={codeLength}
                        label="Enter the code here that has been sent to your email"
                        onCode={code => setValue("code", code)}
                    />
                    <FormError />
                    <SubmitButton>Verify</SubmitButton>
                </>
            )}
        </Form>
    );
};
