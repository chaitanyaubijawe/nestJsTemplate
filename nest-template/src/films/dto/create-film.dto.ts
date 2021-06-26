export class CreateFilmDto {

    private _name:String
    private _description:String
    private _releaseDate:String
    private _rating:number
    private _ticketPrice:number// this  should be big decimal.
    private _country:String
    private _genre:String
    private _photo:String // this will be URL...


    constructor(name: String, description: String, _releaseDate: String, rating: number, ticketPrice: number, country: String, genre: String, photo: String) {
        this._name = name;
        this._description = description;
        this._releaseDate = _releaseDate;
        this._rating = rating;
        this._ticketPrice = ticketPrice;
        this._country = country;
        this._genre = genre;
        this._photo = photo;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get releaseDate(): String {
        return this._releaseDate;
    }

    set releaseDate(value: String) {
        this._releaseDate = value;
    }

    get rating(): number {
        return this._rating;
    }

    set rating(value: number) {
        this._rating = value;
    }

    get ticketPrice(): number {
        return this._ticketPrice;
    }

    set ticketPrice(value: number) {
        this._ticketPrice = value;
    }

    get country(): String {
        return this._country;
    }

    set country(value: String) {
        this._country = value;
    }

    get genre(): String {
        return this._genre;
    }

    set genre(value: String) {
        this._genre = value;
    }

    get photo(): String {
        return this._photo;
    }

    set photo(value: String) {
        this._photo = value;
    }
}
