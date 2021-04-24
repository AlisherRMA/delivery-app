/**
 * Базовый API ответ в запросах, где есть пагинация. В подтипах необходимо унаследоваться от этого класса,
 * переопределив поле content
 */
export class PageableAPIResponse {
  content: unknown[];
  pageable: {
    sort: { unsorted: boolean; sorted: boolean; empty: boolean };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  sort: { unsorted: boolean; sorted: boolean; empty: boolean };
  size: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export class PageableOptions {
  /** itemsPerPage */
  size?: number;
  /** currentPage */
  page?: number;

  sort?: string;
}
