import { Settings, ComponentInterface } from 'he-loader';
import { Server as MoscaServer } from 'mosca';
import MQTTConfig from '../../config/mqtt.config';
import MQTTisteners from '../listeners/mqtt.listeners';
import httpConfig from '../../config/http.config';

export default class MQTTComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Koa Framework
     * @param settings 
     */
    async load(settings: Settings) {

        const broker = new MoscaServer(MQTTConfig);

        const httpServer = settings.get(httpConfig.name);

        broker.on('clientConnected', MQTTisteners.clientConnectedListener);
        broker.on('published', MQTTisteners.publishedListener);
        broker.on('ready', MQTTisteners.readyListener(broker));

        broker.attachHttpServer(httpServer);

        httpServer.listen(httpConfig.port);
    }

}
