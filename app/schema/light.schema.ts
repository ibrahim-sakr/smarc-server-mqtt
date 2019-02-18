import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import { MongoId } from './scalars/mongoIdScalar';
import { LightHandlers } from '../handlers/light.handlers';

const lightType = new GraphQLObjectType({
    name: 'Light',
    description: 'light type',
    fields: {
        _id: { type: MongoId },
        id: { type: GraphQLInt },
        status: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        room_id: { type: MongoId },
        node_id: { type: MongoId },
        // room: {
        //     type: RoomType.type,
        //     async resolve(parentValue, args, context) {
        //         return LightHandlers.room(parentValue.room_id);
        //     }
        // },
        // node: {
        //     type: NodeType.type,
        //     async resolve(parentValue, args, context) {
        //         return LightHandlers.node(parentValue.node_id);
        //     }
        // },
    }
});

const lightsType = new GraphQLObjectType({
    name: 'LightQuery',
    description: 'light query type',
    fields: {
        find: {
            type: lightType,
            args: {
                _id: { type: GraphQLNonNull(MongoId) }
            },
            async resolve(parentValue, args, context) {
                return LightHandlers.find();
            }
        },
        all: {
            type: GraphQLList(lightType),
            async resolve(parentValue, args, context) {
                return LightHandlers.all();
            }
        }
    }
});

export const query = {
    lights: {
        type: lightsType,
        resolve() {
            return 'lights hola';
        }
    }
};

export const mutation = {
    lights: {
        type: GraphQLString,
        resolve() {
            return 'lights Modifications';
        }
    }
};
