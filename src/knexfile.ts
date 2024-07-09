import { Knex } from 'knex';
import path from 'path';

import { sqlSettings } from './config';

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
        user: sqlSettings.user,
        password: sqlSettings.password,
        database: sqlSettings.database,
        host: sqlSettings.server
    },
    debug: false,
    useNullAsDefault: true,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, '/database/migrations')
      }
  },

  production: {
    client: 'mysql2',
    connection: {
        user: sqlSettings.user,
        password: sqlSettings.password,
        database: sqlSettings.database,
        host: sqlSettings.server
    },
    debug: false,
    useNullAsDefault: true,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, '/database/migrations')
      }
  },
};

export default configs;
