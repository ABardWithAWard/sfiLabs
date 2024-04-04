import { Field, ObjectType, registerEnumType } from "type-graphql";

export enum GenderEnum {
    FEMALE = "female",
    MALE = "male",
    NA = "n/a"
}

registerEnumType(GenderEnum, {name: "GenderEnum"});

@ObjectType()

class Character {
    @Field()
    name: string;

    @Field()
    height: string;

    @Field()
    gender?: GenderEnum;

}

export default Character;