import { useEffect } from "react";
import { useLocation } from "react-router";
import { SideModalContainer } from "@/comp/side-modal-container";
import { Modal, useModal } from "@/lib/modal";
import { FlatIcon } from "@ui/flat-icon";
import { ProfilePageNav } from "./profile-nav";
import { Logo } from "@ui/logo";
import sl from "./profile-header-burger.module.scss";

export const ProfileHeaderBurger = () => {
    const modal = useModal();
    const loc = useLocation();

    useEffect(() => {
        modal.close();
    }, [loc.pathname, modal]);

    return (
        <>
            <button className="icon-btn" type="button" onClick={() => modal.toggle()}>
                <FlatIcon type="menu-burger" />
            </button>
            <Modal component={BurgerModal} ref={modal.ref} />
        </>
    );
};

const BurgerModal = () => {
    return (
        <SideModalContainer
            top="var(--profile-header-height)"
            backgroundColor="var(--profile-background)"
        >
            <div className={sl.sideContent}>
                <Logo />
                <ProfilePageNav className={sl.nav} />
            </div>
        </SideModalContainer>
    );
};
