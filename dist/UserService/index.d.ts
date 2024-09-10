import { User } from "../types";
export default class UserService {
    getUser(id: number): Promise<User>;
    getUsers(): Promise<User[]>;
}
