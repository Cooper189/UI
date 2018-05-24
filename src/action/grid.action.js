export const addGridData = (item, screenId) => {
    return {
        type: 'ADD_GRID_DATA',
        screenId,
        item
    }
}
export const deleteGridData = (screenId) => {
    return {
        type: 'DELETE',
        screenId
    }
}