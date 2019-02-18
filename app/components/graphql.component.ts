import { Settings, ComponentInterface } from 'he-loader';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import httpConfig from '../../config/http.config';
import { graphql } from 'graphql';
import { Root as rootSchema } from '../schema/root.schema';

export default class GraphQLComponent implements ComponentInterface {

    constructor() { }

    /**
     * init GraphQL
     * @param settings 
     */
    async load(settings: Settings) {

        const httpServer = createServer((request: IncomingMessage, response: ServerResponse) => {
            response.setHeader('Content-Type', 'application/json');
            if (request.url == '/query' && request.method === 'POST') {
                let body = '';
                request.on('data', chunk => {
                    body += chunk.toString(); // convert Buffer to string
                });

                request.on('end', () => {
                    try {
                        const parsedBody = JSON.parse(body);
                        graphql({
                            schema: rootSchema,
                            source: parsedBody.query,
                            rootValue: request,
                            contextValue: null,
                            variableValues: parsedBody.variables || null,
                            operationName: parsedBody.operationName || null,
                            fieldResolver: null // default resolver
                        }).then(result => {
                            response.end(JSON.stringify(result));
                        });
                    } catch (e) {
                        response.end("{ error: 'request did not contains correct data' }");
                    }

                });
            } else {
                response.end("{ error: 'not found' }");
            }
        });

        settings.set(httpConfig.name, httpServer);
    }

}
