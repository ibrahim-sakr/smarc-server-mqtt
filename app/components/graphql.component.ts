import { Settings, ComponentInterface } from 'he-loader';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import httpConfig from '../../config/http.config';
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

var graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                }
            }
        }
    })
});

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
                            schema: graphQLSchema,
                            source: parsedBody.query,
                            rootValue: null,
                            contextValue: null,
                            variableValues: parsedBody.variables,
                            operationName: null,
                            fieldResolver: null
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
