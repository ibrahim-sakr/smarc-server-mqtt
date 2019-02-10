import { Settings, ComponentInterface } from 'he-loader';
import { connect } from 'mongoose';

export default class MongoComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Mongo Database
     * @param settings 
     */
    async load(settings: Settings) {
        try {
            const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

            await connect(uri, {
                dbName: process.env.DB_NAME,
                useFindAndModify: true,
                useNewUrlParser: true
            });
            console.log('MongoDB: database connected');
        } catch (e) {
            throw Error('Failed to connect with DB');
        }
    }

}
