import { User } from "../models/user";

export default class UserService {

    static getUsers(): Promise<User[]> {
        return fetch('http://localhost:3001/users')
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static deleteUser(id: number): Promise<User> {
        return fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}