import cn from "classnames";
import { Modal, useModal } from "@/lib/modal";
import { SearchInput as BaseSearchInput } from "@ui/form";
import { SearchModal } from "./search-modal";

type Props = {
    className?: string;
};

export const SearchInput = ({ className }: Props) => {
    const modal = useModal();

    return (
        <>
            <button
                className={cn(className, "unstyled-button")}
                onClick={() => modal.open()}
                aria-label="Open search modal"
            >
                <BaseSearchInput
                    name="search"
                    placeholder="Search"
                    value=""
                    onValue={() => {}}
                    style={{ pointerEvents: "none" }}
                />
            </button>
            <Modal ref={modal.ref}>
                <SearchModal />
            </Modal>
        </>
    );
};
