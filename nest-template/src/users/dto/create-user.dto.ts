export class CreateUserDto {

    private _username:string
    private _description:String


    constructor(name: string, description: String) {
        this._username = name;
        this._description = description;

    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }


}
