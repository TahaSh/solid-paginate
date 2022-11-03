import { Component, For, mergeProps, Switch, Match } from 'solid-js'
import { generateNavigationOptions } from './generateNavigationOptions'
import { SymbolType } from './types'
import type { NavigationOption, PaginationNavProps } from './types'

const PaginationNav: Component<PaginationNavProps> = (
  props: PaginationNavProps
) => {
  const mergedProps = mergeProps(
    {
      totalItems: 0,
      pageSize: 1,
      currentPage: 1,
      limit: undefined,
      showStepOptions: false
    },
    props
  )

  const options = () =>
    generateNavigationOptions({
      totalItems: mergedProps.totalItems,
      pageSize: mergedProps.pageSize,
      currentPage: mergedProps.currentPage,
      limit: mergedProps.limit,
      showStepOptions: mergedProps.showStepOptions
    })

  const totalPages = () =>
    Math.ceil(mergedProps.totalItems / mergedProps.pageSize)

  const handleOptionClick = (option: NavigationOption) => {
    props.setCurrentPage?.(option.value)
  }

  return (
    <div class="SolidPaginate_pagination-nav">
      <For each={options()}>
        {(option) => (
          <span
            class="SolidPaginate_option"
            classList={{
              number: option.type === 'number',
              prev:
                option.type === 'symbol' &&
                option.symbol === SymbolType.PREVIOUS_PAGE,
              next:
                option.type === 'symbol' &&
                option.symbol === SymbolType.NEXT_PAGE,
              disabled:
                (option.type === 'symbol' &&
                  option.symbol === SymbolType.NEXT_PAGE &&
                  mergedProps.currentPage >= totalPages()) ||
                (option.type === 'symbol' &&
                  option.symbol === SymbolType.PREVIOUS_PAGE &&
                  mergedProps.currentPage <= 1),
              ellipsis:
                option.type === 'symbol' &&
                option.symbol === SymbolType.ELLIPSIS,
              active:
                option.type === 'number' &&
                option.value === mergedProps.currentPage
            }}
            onClick={[handleOptionClick, option]}
          >
            <Switch>
              <Match when={option.type === 'number'}>
                <span>{option.value}</span>
              </Match>
              <Match
                when={
                  option.type === 'symbol' &&
                  option.symbol === SymbolType.ELLIPSIS
                }
              >
                <span>...</span>
              </Match>
              <Match
                when={
                  option.type === 'symbol' &&
                  option.symbol === SymbolType.PREVIOUS_PAGE
                }
              >
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                  />
                </svg>
              </Match>
              <Match
                when={
                  option.type === 'symbol' &&
                  option.symbol === SymbolType.NEXT_PAGE
                }
              >
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </Match>
            </Switch>
          </span>
        )}
      </For>
    </div>
  )
}

export default PaginationNav
