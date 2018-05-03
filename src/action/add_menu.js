export const ActionMenu = {
    ADD: 'ADD_MENU'
}
export const addMenu = (menu) => {
    return {
        type: ActionMenu.ADD,
        menu
    }
}