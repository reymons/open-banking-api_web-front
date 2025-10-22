import { useImperativeHandle, useRef, useState, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

export type ModalControl = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

type Props = {
    component: React.FC<any>;
    ref: React.Ref<ModalControl>;
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

export const Modal = ({ component: Component, ref }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenRef = useRef(isOpen);
    const isClosingRef = useRef(false);
    const closeHandlerRef = useRef<CloseHandler | null>(null);
    const isModalState = typeof ref === "function";

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

    if (!modalRoot) {
        throw new Error("Modal root is null. You need to set it via setModalRoot()");
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
            <Component />
        </ModalContext>,
        modalRoot
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
