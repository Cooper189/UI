export default (state={}, grid) => {
    switch(grid.type) {
        case 'ADD_GRID_DATA':
            const send = {...state}
            send[grid.screenId] = grid.item
            return send
        case 'DELETE':
            const sendItem = {...state}
            sendItem[grid.screenId] = grid.item
            return sendItem
        default:
            return state
    }
}
