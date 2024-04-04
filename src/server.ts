import { ApolloServer } from "@apollo/server";
import {startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Film {
        title: String
        director: String
    }

    type Query {
        films: [Film]
    }
`

const films = [
    {
        title: "Inception",
        director: "John Doe"
    },
    {
        title: "Interstellar",
        director: "John Doe2"
    }
];

const resolvers = {
    Query: {
        films: () => films
    }
}

export const listen = async (port: number) => {
    const server = new ApolloServer({ typeDefs, resolvers});
    const { url } = await startStandaloneServer ( server, {
        listen: {
            port: port,
        },
    });

    console.log(`Server ready at ${url}`);
}