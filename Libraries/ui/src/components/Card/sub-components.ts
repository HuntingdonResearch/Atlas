import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';

export interface CardSubComponents {
  Header: typeof CardHeader;

  Image: typeof CardImage;

  Content: typeof CardContent;

  Footer: typeof CardFooter;
}
