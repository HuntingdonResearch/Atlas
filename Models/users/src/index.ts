import { EOL } from 'os';

import { UsersDataSource } from './data-source';

export * from './data-source';
export * from './entities';
export * from './resolvers';
export * from './type-defs';

export default (async () => {
  try {
    await UsersDataSource.synchronize();

    process.exit(0);
  } catch (error) {
    process.stderr.write(error.message);
    process.stderr.write(EOL);
  }
});
