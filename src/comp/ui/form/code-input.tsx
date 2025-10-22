import { useRef } from "react";
import sl from "./code-input.module.scss";

type Props = {
    name: string;
    label: string;
    codeLength: number;
    onCode: (code: string) => void;
};

const isNumber = (value: string) => /^[0-9]+$/.test(value);

export const CodeInput = ({ codeLength, onCode, name, label }: Props) => {
    const inputsRef = useRef<Record<string, HTMLInputElement>>({});

    const checkIfCodeReady = () => {
        const inputs = Object.values(inputsRef.current);
        const code = inputs.map(input => input.value).join("");
        if (code.length === codeLength) onCode(code);
    };

    const fillInputs = (text: string) => {
        for (let i = 0; i < text.length; i++) {
            const input = inputsRef.current[i];
            input.value = text[i];
            if (i === text.length - 1) {
                requestAnimationFrame(() => input.focus());
            }
        }
        checkIfCodeReady();
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text").replace(/\D/g, "").substring(0, codeLength);

        fillInputs(text);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Backspace") return;
        e.preventDefault(); // prevent onChange
        e.currentTarget.value = "";
        const id = +(e.currentTarget.dataset.id as string);
        const nextInput = inputsRef.current[id - 1];

        if (nextInput) nextInput.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = +(e.target.dataset.id as string);
        const value = e.target.value;

        if (!isNumber(value)) {
            e.target.value = "";
            return;
        }

        // autoComplete="one-time-code"
        // - in Safari (if text length = 4) calls handleChange 4 times (one call per letter)
        // - in Chrome it calls handleChange once with the full text.
        if (value.length === codeLength) {
            fillInputs(value);
            return;
        }

        const nextInput = inputsRef.current[id + 1];
        e.target.value = value[value.length - 1];

        if (nextInput) {
            nextInput.focus();
        } else {
            checkIfCodeReady();
        }
    };

    const handleRef = (input: HTMLInputElement | null) => {
        if (input) {
            inputsRef.current[input.dataset.id as string] = input;
        }
    };

    return (
        <fieldset className={sl.wrapper}>
            <legend className="sr-only">{label}</legend>
            {Array.from({ length: codeLength }, (_, i) => (
                <input
                    className={sl.input}
                    name={name}
                    type="tel"
                    key={i}
                    data-id={i}
                    ref={handleRef}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    autoComplete={i === 0 ? "one-time-code" : undefined}
                />
            ))}
        </fieldset>
    );
};
