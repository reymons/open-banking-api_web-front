import { User } from "@/entities/user";

const user: Readonly<User> = Object.freeze({
    id: 1,
    email: "example@test.com",
    firstName: "First",
    lastName: "Last",
    birthDate: new Date().toLocaleString(),
});

export const entity = {
    user,
};
