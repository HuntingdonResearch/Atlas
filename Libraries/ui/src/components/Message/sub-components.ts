import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';

export interface MessageSubComponents {
  Header: typeof MessageHeader;

  Body: typeof MessageBody;
}
