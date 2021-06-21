export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;

    constructor(id?: number, name?: string, username?: string, email?: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}