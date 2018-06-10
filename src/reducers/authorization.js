export default (state = {}, user) => {
    switch(user.type) {
        case 'ADD':
            return {data: user.item};
        case 'ERR':
            return {err: user.err}
        default:
            return state;
    }
}
