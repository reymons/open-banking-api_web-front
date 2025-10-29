import { Modal, type ModalExtProps } from "@/lib/modal";
import { MainModalContainer } from "../main-modal-container";
import { Button } from "@ui/button";

type Props = ModalExtProps & {
    children: React.ReactNode;
};

export const InfoModal = ({ children, ...rest }: Props) => {
    return (
        <Modal {...rest}>
            {modal => (
                <MainModalContainer title="Info">
                    <div className="fsm-sm">{children}</div>
                    <div style={{ marginTop: "2rem" }}>
                        <Button onClick={() => modal.close()} stretch>
                            Close
                        </Button>
                    </div>
                </MainModalContainer>
            )}
        </Modal>
    );
};
