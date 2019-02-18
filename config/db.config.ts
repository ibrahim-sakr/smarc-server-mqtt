export default {
    mqtt: {
        host: process.env.MQTT_DB_HOST || '127.0.0.1',
        port: process.env.MQTT_DB_PORT || 27017,
        name: process.env.MQTT_DB_NAME || 'mqtt'
    },
    api: {
        host: process.env.API_DB_HOST || '127.0.0.1',
        port: process.env.API_DB_PORT || 27017,
        name: process.env.API_DB_NAME || 'smarc_typescript'
    }
}
