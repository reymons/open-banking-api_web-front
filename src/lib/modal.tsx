import { useImperativeHandle, useRef, useState, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

export type ModalControl = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

type CloseHandler = (done: () => void) => void;

const ModalContext = createContext<null | {
    modal: Omit<ModalControl, "isOpen">;
    setCloseHandler: (handler: CloseHandler) => void;
}>(null);

export function useModalContext() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("Wrap your components in ModalContext");
    return ctx;
}

let modalRoot: HTMLElement | null = null;

export function setModalRoot(root: HTMLElement | null) {
    modalRoot = root;
}

export type ModalProps = {
    children?: React.ReactNode;
    // Modal controls
    // Use useModal().ref or useModalState().ref
    ref: React.Ref<ModalControl>;
    // Open a modal on mount instantly
    defaultOpen?: boolean;
    // Specify a custom root
    root?: HTMLElement | null;
};

export const Modal = ({ ref, defaultOpen = false, root = null, children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const isOpenRef = useRef(isOpen);
    const isClosingRef = useRef(false);
    const closeHandlerRef = useRef<CloseHandler | null>(null);
    const isModalState = typeof ref === "function";
    root = root ?? modalRoot;

    const control = useState(() => ({
        open: () => {
            setIsOpen(true);
            isOpenRef.current = true;
        },
        close: () => {
            if (!isClosingRef.current) {
                const finalize = () => {
                    isClosingRef.current = false;
                    isOpenRef.current = false;
                    setIsOpen(false);
                };

                isClosingRef.current = true;
                const closeHandler = closeHandlerRef.current;
                if (closeHandler) closeHandler(finalize);
                else finalize();
            }
        },
        toggle: () => {
            if (isOpenRef.current) control.close();
            else control.open();
        },
    }))[0];

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "visible";

        return () => {
            document.body.style.overflow = "visible";
        };
    }, [isOpen]);

    useImperativeHandle(
        ref,
        () => ({ isOpen, ...control }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isModalState ? [isOpen] : undefined
    );

    if (!root) {
        throw new Error("Modal root is null. Set it via setModalRoot() or specify the `root` prop");
    }

    if (!isOpen) return null;

    return createPortal(
        <ModalContext
            value={{
                modal: control,
                setCloseHandler: handler => {
                    closeHandlerRef.current = handler;
                },
            }}
        >
            {children}
        </ModalContext>,
        root
    );
};

export function useModal() {
    const ref = useRef<ModalControl | null>(null);

    return useState(() => ({
        ref,
        open: () => ref.current?.open(),
        close: () => ref.current?.close(),
        toggle: () => ref.current?.toggle(),
    }))[0];
}

export function useModalState() {
    const [modal, setModal] = useState<ModalControl | null>(null);

    return {
        ref: setModal,
        isOpen: !!modal?.isOpen,
        open: () => modal?.open(),
        close: () => modal?.close(),
        toggle: () => modal?.toggle(),
    };
}
