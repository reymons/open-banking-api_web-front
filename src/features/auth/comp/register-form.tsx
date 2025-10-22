import * as yup from "yup";
import { useState } from "react";
import { BaseUserInfoForm, schema as baseInfoSchema } from "./base-user-info-form";
import { EmailVerificationForm, schema as verifSchema } from "./email-verification-form";
import { useRegister } from "../api/auth";
import { useSubmitVerification } from "../api/verification";

type BaseInfo = yup.InferType<typeof baseInfoSchema>;
type Verification = yup.InferType<typeof verifSchema>;

export type FormStep = "base-info" | "verification";

export const DEFAULT_STEP: FormStep = "base-info";

type Props = {
    onSuccess: () => void;
    onStepChange?: (step: FormStep) => void;
};

export const RegisterForm = ({ onSuccess, onStepChange }: Props) => {
    const [step, setStep] = useState<FormStep>(DEFAULT_STEP);
    const [baseInfo, setBaseInfo] = useState<BaseInfo | null>(null);
    const registerUser = useRegister();
    const submitVerification = useSubmitVerification();
    const email = baseInfo?.email ?? "";

    const changeStep = (step: FormStep) => {
        setStep(step);
        onStepChange?.(step);
    };

    const handleBaseInfoSubmit = async (info: BaseInfo) => {
        if (email !== info.email) {
            await registerUser(info);
        }
        setBaseInfo(info);
        changeStep("verification");
    };

    const handleVerificationSubmit = async (verif: Verification) => {
        await submitVerification(email, verif.code);
        onSuccess();
    };

    const handleChangeEmail = () => {
        changeStep("base-info");
    };

    return (
        <>
            {step === "base-info" && (
                <BaseUserInfoForm onSubmit={handleBaseInfoSubmit} defaultValues={baseInfo} />
            )}
            {step === "verification" && (
                <EmailVerificationForm
                    email={email}
                    onSubmit={handleVerificationSubmit}
                    onChangeEmail={handleChangeEmail}
                />
            )}
        </>
    );
};
