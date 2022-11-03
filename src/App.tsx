import { Component, createSignal, Index } from 'solid-js'
import { DarkPaginationNav, LightPaginationNav, paginate } from './lib'
import './styles.css'
import Logo from './Logo'

const App: Component = () => {
  const [items] = createSignal(
    new Array(50).fill(null).map((_, index) => `Item ${index + 1}`)
  )

  const [currentPage, setCurrentPage] = createSignal(1)
  const pageSize = 4

  const paginatedItems = () =>
    paginate({ items: items(), pageSize, currentPage: currentPage() })

  return (
    <>
      <div class="header">
        <Logo />
        <h1>solid-paginate</h1>
      </div>
      <ul class="items-list">
        <Index each={paginatedItems()}>
          {(item) => <li class="item">{item()}</li>}
        </Index>
      </ul>

      <LightPaginationNav
        currentPage={currentPage()}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        totalItems={items().length}
        limit={1}
        showStepOptions={true}
      />

      <DarkPaginationNav
        currentPage={currentPage()}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        totalItems={items().length}
        limit={1}
        showStepOptions={true}
      />
    </>
  )
}

export default App
