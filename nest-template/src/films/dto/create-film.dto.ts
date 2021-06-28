export class CreateFilmDto {

    name: String
    description: String
    releaseDate: String
    rating: number
    ticketPrice: number// this  should be big decimal.
    country: String
    genre: String
    photo: String // this will be URL...


    constructor(name: String, description: String, releaseDate: String, rating: number, ticketPrice: number, country: String, genre: String, photo: String) {
        this.name = name;
        this.description = description;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.ticketPrice = ticketPrice;
        this.country = country;
        this.genre = genre;
        this.photo = photo;
    }
}
