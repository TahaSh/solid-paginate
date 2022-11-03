import { Component } from 'solid-js'
import PaginationNav from './PaginationNav'
import './light-pagination-nav.css'
import type { PaginationNavProps } from './types'

const LightPaginationNav: Component<PaginationNavProps> = (
  props: PaginationNavProps
) => {
  return (
    <div class="light-pagination-nav">
      <PaginationNav {...props} />
    </div>
  )
}

export default LightPaginationNav
