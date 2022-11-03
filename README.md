# solid-paginate

A SolidJS plugin for paginating your data in no time.

## Installation

```bash
npm install solid-paginate
```

## Usage

```jsx
import { createSignal, Index } from 'solid-js'
import { LightPaginationNav, paginate } from 'solid-paginate'
import 'solid-paginate/styles'

const App = () => {
  const [items] = createSignal(['item 1', 'item 2', '...'])

  const [currentPage, setCurrentPage] = createSignal(1)

  const pageSize = 4

  const paginatedItems = () =>
    paginate({ items: items(), pageSize, currentPage: currentPage() })

  return (
    <>
      <ul>
        <Index each={paginatedItems()}>{(item) => <li>{item()}</li>}</Index>
      </ul>

      <LightPaginationNav
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
```

In this example, we're paginating the data in the `items` list. Instead of displaying the list directly, we first pass it into the `paginate` function to return a subset of the list that we should display based on the current page and the page size.

Since `paginatedItems` contains `currentPage` and `items` signals, then it should update whenever the `currentPage` changes.

To navigate between pages you can either create your own navigation component or use one of the navigation components that come with `solid-paginate` (such as `<PaginationNav />`, `<LightPaginationNav />`, or `<DarkPaginationNav />`). Either way, you just need to update the `currentPage` to navigate to other pages.

## `<PaginationNav />`

For this component to work, it needs to know:

- `totalItems`: the total number of the original list (unpaginated list).
- `pageSize`: the number of items displayed per page.
- `currentPage`: the currently selected page.

This will display all page links in the navigation. If you want to limit the maximum number of the displayed links, use the `limit` prop.

## `limit`

This prop takes a number that specifies how many items to display on each side. If you give it `1`, for example, your nav will look like this:

```
1 … 4 5 6 … 13
```

In this case, `5` is the active page, and it has one page on each side, `4` and `6`.

Let's see another example. This is how it will look if `limit = 2`:

```
1 … 4 5 6 7 8 … 13
```

In this example, `6` is the active page, and it has two pages on each side.

You can disable `limit` by setting it to `null`, which is the default value.

## `showStepOptions`

If you set this prop to `true`, it will display the previous and next arrows on the navigation.

## Customizing the styling of the navigation component

`solid-paginate` comes with two themed navigation components: `<LightPaginationNav />` and `<DarkPaginationNav />`. Both components use `<PaginationNav />` as the base navigation component. They are just modifying its CSS.

If you want to create your own version, wrap the `<PaginationNav />` with a div and then use the following CSS selector:

- `.your-nav .SolidPaginate_pagination-nav`: The navigation container element.
- `.your-nav .SolidPaginate_option`: Each option in the navigation (including ellipsis, next and prev buttons).
- `.your-nav .SolidPaginate_option.active`: The currently active page number.
- `.your-nav .SolidPaginate_option.ellipsis`: The ellipsis option.
- `.your-nav .SolidPaginate_option.number`: Only page numbers.
- `.your-nav .SolidPaginate_option.prev`: The prev option.
- `.your-nav .SolidPaginate_option.next`: The next option.
- `.your-nav .SolidPaginate_option.disabled`: Targets the prev and next options when they are disabled (when you're on the first or last page).

## License

[MIT](http://opensource.org/licenses/MIT)
