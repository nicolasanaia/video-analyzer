import knex from 'knex';

import { NODE_ENV } from '../../config';
import configs from '../../knexfile';

const config = configs[NODE_ENV || 'development'];

const db = knex(config);

export default db;