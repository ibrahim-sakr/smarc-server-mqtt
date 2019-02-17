const mosca = require('mosca');

export default {
    // port: 9090,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: 'mongodb://localhost:27017/mqtt'
    },
    logger: {
        name: "secureExample",
        level: 40,
    },
    secure: {
        port: 9091,
        keyPath: __dirname + '/../ssl/smarc-root-ca.key',
        certPath: __dirname + '/../ssl/smarc-root-cert.pem',
    }
};
