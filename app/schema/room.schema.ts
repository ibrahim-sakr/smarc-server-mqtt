import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import { MongoId } from './scalars/mongoIdScalar';
import { RoomHandlers } from '../handlers/room.handlers';

const roomType = new GraphQLObjectType({
    name: 'Room',
    description: 'room type',
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
        //         return RoomHandlers.room(parentValue.room_id);
        //     }
        // },
        // node: {
        //     type: NodeType.type,
        //     async resolve(parentValue, args, context) {
        //         return RoomHandlers.node(parentValue.node_id);
        //     }
        // },
    }
});

const roomsType = new GraphQLObjectType({
    name: 'RoomQuery',
    description: 'room query type',
    fields: {
        find: {
            type: roomType,
            args: {
                _id: { type: GraphQLNonNull(MongoId) }
            },
            async resolve(parentValue, args, context) {
                return RoomHandlers.find();
            }
        },
        all: {
            type: GraphQLList(roomType),
            async resolve(parentValue, args, context) {
                return RoomHandlers.all();
            }
        }
    }
});

export const query = {
    rooms: {
        type: roomsType,
        resolve() {
            return 'rooms hola';
        }
    }
};

export const mutation = {
    rooms: {
        type: GraphQLString,
        resolve() {
            return 'rooms Modifications';
        }
    }
};
