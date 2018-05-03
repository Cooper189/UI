import {ActionMenu} from '../action/add_menu'

export default (state = [], menu) => {
    switch(menu.type) {
        case ActionMenu.ADD:
            return menu.menu;
        default:
            return state;
    }
}