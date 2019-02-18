export default {
    name: process.env.HTTP_SERVER_NAME || 'httpServer',
    port: process.env.HTTP_SERVER_PORT || 3000
}
