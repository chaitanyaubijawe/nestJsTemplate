export class CreateFilmDto {

    private _name:String
    named:String
    private _description:String
    private _releaseDate:Date
    private _rating:Number
    private _ticketPrice:Number// this  should be big decimal.
    private _country:String
    private _genre:String
    private _photo:String // this will be URL...


    constructor(name: String, description: String, releaseDate: Date, rating: Number, ticketPrice: Number, country: String, genre: String, photo: String) {
        this._name = name;
        this._description = description;
        this._releaseDate = releaseDate;
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

    get releaseDate(): Date {
        return this._releaseDate;
    }

    set releaseDate(value: Date) {
        this._releaseDate = value;
    }

    get rating(): Number {
        return this._rating;
    }

    set rating(value: Number) {
        this._rating = value;
    }

    get ticketPrice(): Number {
        return this._ticketPrice;
    }

    set ticketPrice(value: Number) {
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
