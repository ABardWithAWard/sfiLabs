import { Query, Resolver } from "type-graphql";
import Character, { GenderEnum } from "../schema/character.schema";

@Resolver()
class CharacterResolver {
    @Query ( () => Character )
    films() {
        return [
            {
                name: "Luke Skywalker",
                height: "180",
                gender: GenderEnum.MALE
            },
            {
                name: "Anna Skywalker",
                height: "180",
                gender: GenderEnum.FEMALE
            },
        ];
    }
}

export default CharacterResolver;