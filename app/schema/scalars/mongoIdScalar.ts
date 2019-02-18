import { GraphQLScalarType } from 'graphql';

// const mongo = require('db/mongo');

const serializeMongoId = (value: any) => {
    // if (mongo.id.validate(value)) {
    //     return value;
    // }
    return value;
    // throw new Error('the id is not a valid mongodb id');
};

const parseMongoId = (value: any) => {
    // if (mongo.id.validate(value)) {
    //     return value;
    // }
    return value;
    // throw new Error('the id is not a valid mongodb id');
};

const parseLiteralMongoId = (ast: any) => {
    // if (mongo.id.validate(ast.value)) {
    //     return ast.value;
    // }
    return ast.value;
    // throw new Error('the id is not a valid mongodb id');
};

export const MongoId = new GraphQLScalarType({
    name: 'MongoId',
    description: 'a 24 characters string represent a valid mongodb ObjectID',
    serialize: serializeMongoId,
    parseValue: parseMongoId,
    parseLiteral: parseLiteralMongoId,
});
