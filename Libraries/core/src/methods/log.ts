import { EOL } from 'os';

export function log(message: string): void {
    process.stdout.write(message);
    process.stdout.write(EOL);
}
