export class User {
    id?: number;
    username!: string;
    password!: string;
    created_at!: Date;
    role!: 'admin' | 'user';;
}