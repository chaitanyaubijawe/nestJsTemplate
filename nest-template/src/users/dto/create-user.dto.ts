export class CreateUserDto {

    username: string
    password: String


    constructor(username: string, password: String) {
        this.username = username;
        this.password = password;
    }
}
