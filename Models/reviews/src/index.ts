import { EOL } from 'os';

import { ReviewsDataSource } from './data-source';

export * from './data-source';
export * from './entities';
export * from './inputs';
export * from './resolvers';
export * from './type-defs';

export default (async () => {
  try {
    await ReviewsDataSource.synchronize();

    process.exit(0);
  } catch (error) {
    process.stderr.write(error.message);
    process.stderr.write(EOL);
  }
});
