import LevelItem from './LevelItem';
import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';

export interface LevelSubComponents {
  Item: typeof LevelItem;

  Left: typeof LevelLeft;

  Right: typeof LevelRight;
}
