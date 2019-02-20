export default {
    mqtt: {
        host: process.env.MQTT_DB_HOST || '127.0.0.1',
        port: process.env.MQTT_DB_PORT || 27017,
        name: process.env.MQTT_DB_NAME || 'mqtt',
        reconnect: {
            retry: (process.env.MQTT_DB_RETRY === 'true') ? true : false,
            maxRetries: process.env.MQTT_DB_MAX_RETRIES || 10,
            interval: process.env.MQTT_DB_INTERVAL || 2000
        }
    },
    api: {
        host: process.env.API_DB_HOST || '127.0.0.1',
        port: process.env.API_DB_PORT || 27017,
        name: process.env.API_DB_NAME || 'smarc',
        reconnect: {
            retry: (process.env.API_DB_RETRY === 'true') ? true : false,
            maxRetries: process.env.API_DB_MAX_RETRIES || 10,
            interval: process.env.API_DB_INTERVAL || 2000
        }
    }
}
