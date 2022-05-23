import { LineInput } from './LineInput';

export interface OrderInput {
  reference: string;
  lines: LineInput[];
  userID: string;
}
