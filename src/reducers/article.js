export default (state = ['hello'], payload) => {
    switch(payload.type) {
        case 'add':
            return [...state, payload.item];
        default:
            return state;
    }
}