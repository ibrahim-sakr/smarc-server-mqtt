import { config } from 'dotenv';
import { Loader, Settings } from 'he-loader';
import MongoComponent from '../app/components/mongo.component';
import KoaComponent from '../app/components/koa.component';
import MQTTComponent from '../app/components/mqtt.component';

/**
 * Load Config fromo dotenv
 */
config();

/**
 * create new Loader to manage and load all various components of the application
 */
const loader = new Loader({});

/**
 * load the components in sequence
 */
const app = loader.load([
    // create new connection with MongoDB
    new MongoComponent(),

    // create koa application with the public APIs
    new KoaComponent(),

    // create new MQTT broker
    new MQTTComponent()
]);

app.then((settings: Settings) => console.log("Application is up and running."));
app.catch(error => console.log("Application is crashed: " + error));
