import { User } from './../models/user';

export const users: User[] = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        created_at: new Date(),
        role: 'admin'
    },
    {
        id: 2,
        username: 'user',
        password: 'user',
        created_at: new Date(),
        role: 'user'
    }
]