import { Settings, ComponentInterface } from 'he-loader';
import { connect } from 'mongoose';
import db from '../../config/db.config';

export default class MongoComponent implements ComponentInterface {
    private counter = 0;

    constructor() { }

    /**
     * init Mongo Database
     * @param settings 
     */
    load(settings: Settings) {
        return new Promise(async (resolve) => {
            this.counter++;
            try {
                await this.connect();
                console.log('MongoDB: database connected');
                return resolve();
            } catch (e) {
                if (db.api.reconnect.retry && this.counter <= Number(db.api.reconnect.maxRetries)) {
                    console.error(`MongoDB: retry to connect ${this.counter}`);
                    setTimeout(this.load.bind(this, settings), Number(db.api.reconnect.interval));
                } else {
                    throw new Error('MongoDB: Cannot connect to the Database');
                }
            }
        });
    }

    private async connect() {
        const uri = `mongodb://${db.api.host}:${db.api.port}/${db.api.name}`;

        return await connect(uri, {
            useFindAndModify: true,
            useNewUrlParser: true
        });
    }

}
