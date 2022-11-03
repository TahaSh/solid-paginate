import { Component } from 'solid-js'
import PaginationNav from './PaginationNav'
import './dark-pagination-nav.css'
import type { PaginationNavProps } from './types'

const DarkPaginationNav: Component<PaginationNavProps> = (
  props: PaginationNavProps
) => {
  return (
    <div class="dark-pagination-nav">
      <PaginationNav {...props} />
    </div>
  )
}

export default DarkPaginationNav
