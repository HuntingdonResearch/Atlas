import MediaContent from './MediaContent';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';

export interface MediaSubComponents {
  Content: typeof MediaContent;

  Left: typeof MediaLeft;

  Right: typeof MediaRight;
}
