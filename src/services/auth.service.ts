import { User } from './../models/user';

export default class AuthService {

    static signin(user: Partial<User>) {
        return fetch('http://localhost:3001/auth/local/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static signup(user: Partial<User>) {
        return fetch('http://localhost:3001/auth/local/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}