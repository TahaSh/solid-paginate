export enum SymbolType {
  PREVIOUS_PAGE = 'PREVIOUS_PAGE',
  NEXT_PAGE = 'NEXT_PAGE',
  ELLIPSIS = 'ELLIPSIS'
}

export interface NavigationOption {
  type: string
  value: number
  symbol?: SymbolType
}

export interface PaginationNavProps {
  totalItems: number
  pageSize: number
  currentPage: number
  limit: number | undefined
  showStepOptions?: boolean
  setCurrentPage: (page: number) => void
}
