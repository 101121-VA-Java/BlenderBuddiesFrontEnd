import { Role } from "./role";

export interface Principal {
    id: number;
    username: string;
    role: Role;
}
