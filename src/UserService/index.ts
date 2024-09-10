import { apiService } from "../api/apiService";
import { User } from "../types";

export default class UserService {

	async getUser(id: number): Promise<User> {
		return await apiService<User>({
			url: `/users/${id}`,
		});
	}

	async getUsers(): Promise<User[]> {
		return await apiService<User[]>({
			url: "/users",
		});
	}
}
