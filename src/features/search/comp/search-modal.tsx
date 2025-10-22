import { useState } from "react";
import { MainModalContainer } from "@/comp/main-modal-container";
import { SearchInput } from "@ui/form";

export const SearchModal = () => {
    const [query, setQuery] = useState("");

    return (
        <MainModalContainer w={600}>
            <SearchInput name="search" value={query} onValue={setQuery} placeholder="Search" />
        </MainModalContainer>
    );
};
