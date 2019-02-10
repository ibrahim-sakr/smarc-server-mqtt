import { Server, Client, Packet } from 'mosca';
import { Authenticate, AuthorizePublish, AuthorizeSubscribe } from '../utils/Auth';

export default class {

    static clientConnectedListener(client: Client) {
        console.log('device connected with ID => ', client.id);
    }

    static publishedListener(packet: Packet) {
        console.log('=================================');
        console.log('Message Received');
        console.dir(packet.payload.toString(), { depth: 20 });
        console.log('=================================');
    }

    static readyListener(broker: Server) {
        return () => {
            broker.authenticate = Authenticate;
            broker.authorizePublish = AuthorizePublish;
            broker.authorizeSubscribe = AuthorizeSubscribe;
            console.log("ready");
        };
    }
}
