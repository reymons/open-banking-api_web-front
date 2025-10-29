import { MainModalContainer } from "@/comp/main-modal-container";
import { Modal, useModal, type ModalProps } from "@/lib/modal";
import { RequestPasswordResetForm } from "./request-password-reset-form";
import { InfoModal } from "@/comp/modals/info-modal";

type Props = ModalProps;

export const RequestPasswordResetModal = (props: Props) => {
    const infoModal = useModal();

    return (
        <>
            <Modal {...props}>
                {modal => (
                    <MainModalContainer title="Reset password" w={600}>
                        <RequestPasswordResetForm
                            onSuccess={() => {
                                modal.close();
                                infoModal.open();
                            }}
                        />
                    </MainModalContainer>
                )}
            </Modal>
            <InfoModal ref={infoModal.ref}>
                <p>We`ve sent a link to your email</p>
                <p>Please follow it to continue resetting your password</p>
            </InfoModal>
        </>
    );
};
