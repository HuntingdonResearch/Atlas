import { Server } from 'http';
import { EOL } from 'os';

export function handleServerErrorEvent(server: Server, port: string | number | false, error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            process.stderr.write(`${bind} requires elevated privileges${EOL}`);
            process.exit(1);
            break;

        case 'EADDRINUSE':
            process.stderr.write(`${bind} is already in use${EOL}`);
            process.exit(1);
            break;

        default:
            throw error;
    }
}