import { act, renderHook } from "@testing-library/react";
import { useRegisterForm } from "./use-register-form";
import { DEFAULT_STEP } from "../comp/register-form";

test("changes step on onStepChange call", async () => {
    const { result } = renderHook(() => useRegisterForm());
    expect(result.current.step).toBe(DEFAULT_STEP);
    act(() => result.current.formProps.onStepChange("verification"));
    expect(result.current.step).toBe("verification");
});
