import { Client } from 'mosca';

export const Authenticate = (client: Client, username: string, password: string, callback: (obj: any, authenticated: boolean) => void) => {
    // verify JWT token from password
    // if valid assign the content to client.user
    callback(null, true);
}

export const AuthorizePublish = (client: Client, topic: string, payload: string, callback: (obj: any, authorized: boolean) => void) => {
    // check authorization from client.user.permision
    callback(null, true);
}

export const AuthorizeSubscribe = (client: Client, topic: string, callback: (obj: any, authorized: boolean) => void) => {
    // check 
    callback(null, true);
}
