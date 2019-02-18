import { Schema, Model, model } from "mongoose";
import { UserInterface } from '../interfaces/user.interface';


const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    roles: {
        type: Array,
        required: true
    },

    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    }
});

UserSchema.pre('save', function (next) {
    let doc = <UserInterface>this._doc;
    let now = new Date();

    if (!doc.createdAt) {
        doc.createdAt = now;
    }

    doc.updatedAt = now;

    next();
});

UserSchema.methods.fullName = function (): string {
    return (this.firstName.trim() + " " + this.lastName.trim());
};

export const User: Model<UserInterface> = model<UserInterface>("User", UserSchema, 'collection_name');
