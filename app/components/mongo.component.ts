import { Settings, ComponentInterface } from 'he-loader';
import { connect } from 'mongoose';
import db from '../../config/db.config';

export default class MongoComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Mongo Database
     * @param settings 
     */
    async load(settings: Settings) {
        try {
            const uri = `mongodb://${db.api.host}:${db.api.port}/${db.api.name}`;

            await connect(uri, {
                useFindAndModify: true,
                useNewUrlParser: true
            });
            console.log('MongoDB: database connected');
        } catch (e) {
            throw Error('Failed to connect with DB');
        }
    }

}
