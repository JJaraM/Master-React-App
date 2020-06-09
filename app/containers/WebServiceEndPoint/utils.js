
const filterItems = function filterItems(items, filterText) {
    let paths = [];
    if (items != undefined) {
        if (items.paths != undefined) {
        const clone = Object.assign({}, items.paths);
        Object.entries(items.paths).map(entry => {
            const contains = entry[0].toLowerCase().includes(filterText.toLowerCase());
            if (!contains) {
                delete clone[entry[0]];
            }
        });
        paths = clone;
        }
    }
    return paths;
}

export {
    filterItems
}