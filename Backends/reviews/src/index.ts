import { createServer } from 'http';
import Debug from 'debug';
import { handleServerErrorEvent, handleServerListeningEvent } from '@atlas/core-library';
import { app } from './app';
import { PORT } from './config';

const debug = Debug('reviews-backend');

app.set('port', PORT);

const server = createServer(app);

server.listen(PORT);

server.on('error', (error) => handleServerErrorEvent(server, PORT, error));
server.on('listening', () => handleServerListeningEvent(server));
