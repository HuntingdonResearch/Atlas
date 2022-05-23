import PaginationListEllipsis from './PaginationListEllipsis';
import PaginationListLink from './PaginationListLink';

export interface PaginationListSubComponents {
  Link: typeof PaginationListLink;

  Ellipsis: typeof PaginationListEllipsis;
}
