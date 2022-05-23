import PaginationList from './PaginationList';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';

export interface PaginationSubComponents {
  List: typeof PaginationList;

  Next: typeof PaginationNext;

  Previous: typeof PaginationPrevious;
}
