import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import FilmResolver from "./resolvers/film.resolver";
import CharacterResolver from "./resolvers/character.resolver";
import { resolvers, typeDefs } from "graphql-scalars";

export const listen = async (port: number) => {
    const schema = await buildSchema ({
        resolvers: [FilmResolver, CharacterResolver],
    });

    const server = new ApolloServer({ schema});
    const { url } = await startStandaloneServer ( server, {
        listen: {
            port: port,
        },
    });

    console.log(`Server ready at ${url}`);
}