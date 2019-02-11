import { Settings, ComponentInterface } from 'he-loader';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import httpConfig from '../../config/http.config';
import { graphql } from 'graphql';

export default class GraphQLComponent implements ComponentInterface {

    constructor() { }

    /**
     * init GraphQL
     * @param settings 
     */
    async load(settings: Settings) {

        const httpServer = createServer((request: IncomingMessage, response: ServerResponse) => {
            if (request.url == '/query' && request.method === 'POST') {
                let body = '';
                request.on('data', chunk => {
                    body += chunk.toString(); // convert Buffer to string
                });

                request.on('end', () => {
                    graphql(schema, body).then(result => {
                        console.log(result);
                        response.end('ok');
                    });
                });
            } else {
                response.end('not found');
            }
        });

        settings.set(httpConfig.name, httpServer);
    }

}
