import { persistence } from 'mosca';
import db from '../config/db.config';

export default {
    persistence: {
        factory: persistence.Mongo,
        url: `mongodb://${db.mqtt.host}:${db.mqtt.port}/${db.mqtt.name}`
    },
    secure: {
        port: 9091,
        keyPath: __dirname + '/../ssl/smarc-root-ca.key',
        certPath: __dirname + '/../ssl/smarc-root-cert.pem',
    }
};
