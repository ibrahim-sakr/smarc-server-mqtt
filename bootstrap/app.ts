require('./environment');
import { Loader, Settings } from 'he-loader';
import MongoComponent from '../app/components/mongo.component';
import GraphQLComponent from '../app/components/graphql.component';
import MQTTComponent from '../app/components/mqtt.component';

/**
 * create new Loader to manage and load all various components of the application
 */
const loader = new Loader({});

/**
 * Create App and load the components in sequence
 */
const app = loader.load([
    // create new connection with MongoDB
    new MongoComponent(),

    // start graphql
    new GraphQLComponent(),

    // create new MQTT broker
    new MQTTComponent()
]);

app.then((settings: Settings) => console.log("Application is up and running."));
app.catch(error => console.log("Application is crashed: " + error));
