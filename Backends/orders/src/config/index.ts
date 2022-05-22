import { normalizePort } from '@atlas/core-library';

export const PORT: number | string | false = normalizePort(
  process.env.PORT || '4003'
);