const mosca = require('mosca');

export default {
    port: 9090,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: 'mongodb://localhost:27017/mqtt'
    }
};
