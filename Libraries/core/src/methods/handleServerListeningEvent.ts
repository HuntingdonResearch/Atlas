import { Server } from 'http';
import { log } from './log';

export function handleServerListeningEvent(server: Server): void {
    const address: any = server.address();
    const bind: string = typeof address === 'string'
        ? `pipe ${address}`
        : `port ${address.port}`;

    log(`Listening on ${bind}`);
}
