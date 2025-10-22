import { useState } from "react";
import { DEFAULT_STEP, FormStep } from "../comp/register-form";

export function useRegisterForm() {
    const [step, setStep] = useState<FormStep>(DEFAULT_STEP);

    return {
        step,
        isDefaultStep: step === DEFAULT_STEP,
        formProps: {
            onStepChange: setStep,
        },
    };
}
