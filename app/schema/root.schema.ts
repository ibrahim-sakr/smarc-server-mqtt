import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { query as LightQuery, mutation as LightMutation } from './light.schema';

const queryFields = Object.assign(
    {},
    LightQuery
);

const mutationFields = Object.assign(
    {},
    LightMutation
);

export const Root = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        description: 'the main query type',
        fields: queryFields
    }),

    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        description: 'the main mutation type',
        fields: mutationFields
    })
});
