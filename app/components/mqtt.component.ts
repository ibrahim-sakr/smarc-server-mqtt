import { Settings, ComponentInterface } from 'he-loader';
import { Server as MoscaServer } from 'mosca';
import MQTTConfig from '../../config/mqtt.config';
import MQTTisteners from '../listeners/mqtt.listeners';

export default class MQTTComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Koa Framework
     * @param settings 
     */
    async load(settings: Settings) {

        const broker = new MoscaServer(MQTTConfig);

        const KoaServer = settings.get('KoaServer');

        broker.on('clientConnected', MQTTisteners.clientConnectedListener);
        broker.on('published', MQTTisteners.publishedListener);
        broker.on('ready', MQTTisteners.readyListener(broker));

        broker.attachHttpServer(KoaServer);

        KoaServer.listen(3000);
    }

}
