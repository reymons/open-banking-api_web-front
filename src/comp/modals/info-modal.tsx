import { Modal, type ModalExtProps } from "@/lib/modal";
import { MainModalContainer } from "../main-modal-container";
import { ButtonPair } from "@ui/button-pair";

type Props = ModalExtProps & {
    children: React.ReactNode;
    withRearBtn?: boolean;
    btnsProps?: Omit<React.ComponentProps<typeof ButtonPair>, "withRearBtn">;
    w?: number;
};

export const InfoModal = ({ children, btnsProps, withRearBtn = true, w = 475, ...rest }: Props) => {
    return (
        <Modal {...rest}>
            {modal => (
                <MainModalContainer title="Info" w={w}>
                    <div className="fsm-sm">{children}</div>
                    <div style={{ marginTop: "2rem" }}>
                        <ButtonPair
                            {...btnsProps}
                            withRearBtn={withRearBtn}
                            rearBtnProps={{
                                onClick: () => modal.close(),
                                children: "Close",
                                ...btnsProps?.rearBtnProps,
                            }}
                            frontBtnProps={{
                                onClick: withRearBtn ? undefined : () => modal.close(),
                                children: withRearBtn ? "OK" : "Close",
                                ...btnsProps?.frontBtnProps,
                            }}
                        />
                    </div>
                </MainModalContainer>
            )}
        </Modal>
    );
};
