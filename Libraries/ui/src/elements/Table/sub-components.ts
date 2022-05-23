import TableBody from './TableBody';
import TableColumn from './TableColumn';
import TableFoot from './TableFoot';
import TableHead from './TableHead';
import TableHeading from './TableHeading';
import TableRow from './TableRow';

export interface TableSubComponents {
  Head: typeof TableHead;

  Foot: typeof TableFoot;

  Body: typeof TableBody;

  Row: typeof TableRow;

  Heading: typeof TableHeading;

  Column: typeof TableColumn;
}
