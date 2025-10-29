import { render, screen, waitFor } from "@testing-library/react";
import { InfoModal } from "./info-modal";
import { useModal } from "@/lib/modal";
import userEvent from "@testing-library/user-event";

test("closes modal on close button click", async () => {
    const App = () => (
        <InfoModal ref={useModal().ref} root={document.body} defaultOpen>
            <div data-testid="target" />
        </InfoModal>
    );

    render(<App />);

    await userEvent.click(screen.getByRole("button", { name: /close/i }));
    await waitFor(() => expect(() => screen.getByTestId("target")).toThrow());
});
