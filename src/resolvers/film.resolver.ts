import { Query, Resolver } from "type-graphql";
import Film from "../schema/film.schema";

@Resolver()
class FilmResolver {
    @Query (() => Film )
    films() {
        return [
            {
                title: "Inception",
                director: "John Doe",
                producer: "Anna Doe",
                releaseDate: "2001-01-01",
            },
            {
                title: "Interstellar",
                director: "John Doe2",
                producer: "Anna Doe2",
                releaseDate: "2002-02-02",
            },
        ];
    }
}

export default FilmResolver;