import HeroBody from './HeroBody';
import HeroFoot from './HeroFoot';
import HeroHead from './HeroHead';

export interface HeroSubComponents {
  Head: typeof HeroHead;

  Body: typeof HeroBody;

  Foot: typeof HeroFoot;
}
