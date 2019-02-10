import { Settings, ComponentInterface } from 'he-loader';
import { createServer } from 'http';
import * as Koa from 'koa';
import * as Router from 'koa-router';

export default class KoaComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Koa Framework
     * @param settings 
     */
    async load(settings: Settings) {

        const app = new Koa();
        const router = new Router();

        router.get('/test', (ctx, next) => {
            // ctx.router available
            ctx.body = 'Hello World!, test, test';
        });

        app
            .use(router.routes())
            .use(router.allowedMethods());

        settings.set('KoaServer', createServer(app.callback()));
    }

}
