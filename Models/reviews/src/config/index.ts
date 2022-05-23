export const HOST: string = process.env.DATABASE_HOST || 'localhost';

export const PORT: number = parseInt(process.env.DATABASE_PORT) || 13306;

export const USERNAME: string = process.env.DATABASE_USERNAME || 'atlas';

export const PASSWORD: string = process.env.DATABASE_PASSWORD || 'Atlas1234';

export const DATABASE: string = process.env.DATABASE_DATABASE || 'reviews';
