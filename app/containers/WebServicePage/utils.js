const filterItems = function filterItems(items, filterText) {
    return items.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));

}

export  {
    filterItems
}