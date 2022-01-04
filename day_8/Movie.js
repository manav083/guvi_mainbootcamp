class movie {
    constructor(title,studio,rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(Movie) {
        let ratedPG = [];

        Movie.forEach(movie => {
            if(movie.rating === "PG"){
                ratedPG.push(movie);
            }
        });
        return ratedPG;
    }
}

let Obj1 = new movie("Casino Royale", "Eon Productions", "PG13");

