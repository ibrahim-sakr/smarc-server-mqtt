import { config } from 'dotenv';

/**
 * Load Config fromo dotenv
 */
const config_path = __dirname + '/../.env';

const ENV_VARS = config({
    path: config_path
});

// failed to load the configuration
if (ENV_VARS.error) {
    throw Error(`failed to load configs from => ${config_path}`);
}
