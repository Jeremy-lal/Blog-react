import { User } from './../models/user';
import axios from './axios';
import { axiosPrivate } from './axios';
export default class AuthService {
    static async signin(user: Partial<User>) {
        return await axios.post('/auth/local/signin', user, {
            withCredentials: true
        })
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

    static logout(token: string) {
        console.log(`Bearer ${token}`);

        return axiosPrivate.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}